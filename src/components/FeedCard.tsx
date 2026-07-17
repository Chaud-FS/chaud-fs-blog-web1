import { Card } from './Card'

interface Props {
  title: string
  excerpt: string
  date: string
  source: string
  link: string
}

export function FeedCard({ title, excerpt, date, source, link }: Props) {
  return (
    <Card className="post-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="post-card__link">
        <div className="post-card__meta mono">
          <span>{date || '—'}</span>
          <span className="dim">· {source}</span>
        </div>
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__excerpt dim">{excerpt}</p>
        <div className="post-card__foot">
          <span className="post-card__badge mono">阅读原文 ↗</span>
          <span className="post-card__arrow">→</span>
        </div>
      </a>
    </Card>
  )
}
