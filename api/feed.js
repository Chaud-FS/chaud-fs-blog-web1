// Vercel serverless function — aggregates AI blog RSS feeds at request time.
// No build-time network needed, no CORS (server-side fetch), live updates.
// Runs on Vercel's Node runtime. Add/remove sources in FEEDS below.

const FEEDS = [
  { name: "Lil'Log", home: 'https://lilianweng.github.io/', url: 'https://lilianweng.github.io/index.xml' },
  { name: 'BAIR', home: 'https://bair.berkeley.edu/blog/', url: 'https://bair.berkeley.edu/blog/feed.xml' },
  { name: 'Hugging Face', home: 'https://huggingface.co/blog', url: 'https://huggingface.co/blog/feed.xml' },
  { name: 'The Gradient', home: 'https://thegradient.pub/', url: 'https://thegradient.pub/rss/' },
  { name: 'ML Mastery', home: 'https://machinelearningmastery.com/', url: 'https://machinelearningmastery.com/feed/' },
  { name: 'arXiv cs.AI', home: 'https://arxiv.org/list/cs.AI/recent', url: 'http://export.arxiv.org/rss/cs.AI' },
  { name: 'Distill', home: 'https://distill.pub/', url: 'https://distill.pub/rss.xml' },
  { name: 'Ahead of AI', home: 'https://magazine.sebastianraschka.com/', url: 'https://magazine.sebastianraschka.com/feed' },
]

function decode(s = '') {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
}

function stripHtml(s = '') {
  return decode(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function textBetween(block, tag) {
  const m = block.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return m ? m[1] : ''
}

function getLink(block) {
  // Atom: <link href="..." />
  const atom = block.match(/<link\b[^>]*\shref=["']([^"']+)["'][^>]*\/?>/i)
  if (atom) return atom[1]
  // RSS: <link>url</link>
  return textBetween(block, 'link')
}

function getItem(block, feed) {
  const title = decode(textBetween(block, 'title')).trim()
  const link = getLink(block).trim()
  if (!title || !link) return null
  const rawDate = textBetween(block, 'pubDate') || textBetween(block, 'updated') || textBetween(block, 'date') || textBetween(block, 'published')
  const ts = rawDate ? Date.parse(rawDate) : 0
  const date = ts && !Number.isNaN(ts) ? new Date(ts).toISOString().slice(0, 10) : ''
  const excerpt = stripHtml(textBetween(block, 'description') || textBetween(block, 'summary') || textBetween(block, 'content')).slice(0, 200)
  return { title, link, date, ts: Number.isNaN(ts) ? 0 : ts, source: feed.name, sourceHome: feed.home, excerpt }
}

function parseFeed(xml, feed) {
  const blocks = xml.match(/<item[\s\S]*?<\/item>|<entry[\s\S]*?<\/entry>/gi) || []
  const items = []
  for (const b of blocks) {
    const it = getItem(b, feed)
    if (it) items.push(it)
  }
  return items
}

async function fetchFeed(feed) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 9000)
  try {
    const res = await fetch(feed.url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; feed-aggregator)' },
    })
    if (!res.ok) return []
    const xml = await res.text()
    return parseFeed(xml, feed)
  } catch {
    return []
  } finally {
    clearTimeout(timer)
  }
}

export default async function handler(req, res) {
  const results = await Promise.all(FEEDS.map(fetchFeed))
  const items = results.flat().sort((a, b) => b.ts - a.ts).slice(0, 90)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800')
  res.status(200).json({ updated: new Date().toISOString(), count: items.length, items })
}
