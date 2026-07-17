import { useEffect, useMemo, useState } from 'react'
import { SectionHead } from '../components/SectionHead'
import { Reveal } from '../components/Reveal'
import { FeedCard } from '../components/FeedCard'

interface FeedItem {
  title: string
  link: string
  date: string
  source: string
  sourceHome: string
  excerpt: string
}

type Status = 'loading' | 'ok' | 'error'

export default function Feed() {
  const [items, setItems] = useState<FeedItem[]>([])
  const [status, setStatus] = useState<Status>('loading')
  const [updated, setUpdated] = useState('')

  const [query, setQuery] = useState('')
  const [activeSource, setActiveSource] = useState<string>('all')

  useEffect(() => {
    let alive = true
    fetch('/api/feed')
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return
        setItems(d.items || [])
        setUpdated(d.updated || '')
        setStatus('ok')
      })
      .catch(() => {
        if (alive) setStatus('error')
      })
    return () => {
      alive = false
    }
  }, [])

  const sources = useMemo(() => {
    const set = new Set(items.map((it) => it.source))
    return Array.from(set)
  }, [items])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((it) => {
      const matchSource = activeSource === 'all' || it.source === activeSource
      const matchQuery =
        !q ||
        it.title.toLowerCase().includes(q) ||
        it.excerpt.toLowerCase().includes(q) ||
        it.source.toLowerCase().includes(q)
      return matchSource && matchQuery
    })
  }, [items, query, activeSource])

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHead index="08" title="AI 资讯流" sub="// aggregated from the web" />
        <p className="page-intro muted">
          实时聚合来自 Lil'Log、BAIR、Hugging Face、The Gradient、arXiv 等权威 AI 博客与期刊的最新文章，点击卡片直接跳转原文。
        </p>
        {updated && status === 'ok' && (
          <p className="feed-updated mono dim">聚合于 {new Date(updated).toLocaleString()}</p>
        )}

        {status === 'loading' && <p className="muted">资讯加载中…</p>}
        {status === 'error' && (
          <p className="muted">资讯流需部署到线上后加载（本地预览不可用）。推送至 GitHub 后访问线上域名即可查看。</p>
        )}

        {status === 'ok' && (
          <>
            <div className="feed-toolbar">
              <input
                className="feed-search mono"
                type="search"
                placeholder="搜索标题 / 摘要…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="feed-filters">
                <button
                  className={`feed-chip ${activeSource === 'all' ? 'is-active' : ''}`}
                  onClick={() => setActiveSource('all')}
                >
                  全部
                  <span className="feed-chip__n">{items.length}</span>
                </button>
                {sources.map((s) => {
                  const n = items.filter((it) => it.source === s).length
                  return (
                    <button
                      key={s}
                      className={`feed-chip ${activeSource === s ? 'is-active' : ''}`}
                      onClick={() => setActiveSource(s)}
                    >
                      {s}
                      <span className="feed-chip__n">{n}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="muted" style={{ marginTop: 28 }}>
                没有匹配的结果，试试其他关键词或来源。
              </p>
            ) : (
              <div className="grid post-grid">
                {filtered.map((it, i) => (
                  <Reveal key={it.link} delay={(i % 3) * 70}>
                    <FeedCard
                      title={it.title}
                      excerpt={it.excerpt}
                      date={it.date}
                      source={it.source}
                      link={it.link}
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
