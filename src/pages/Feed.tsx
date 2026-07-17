import { useEffect, useState } from 'react'
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
          <div className="grid post-grid">
            {items.map((it, i) => (
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
      </div>
    </section>
  )
}
