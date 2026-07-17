import { Link } from 'react-router-dom'
import { Card } from './Card'
import { Tag } from './Tag'

interface Props {
  to: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  meta?: string
  badge?: string
}

export function PostCard({ to, title, excerpt, date, tags, meta, badge }: Props) {
  return (
    <Card className="post-card">
      <Link to={to} className="post-card__link">
        <div className="post-card__meta mono">
          <span>{date}</span>
          {meta && <span className="dim">· {meta}</span>}
        </div>
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__excerpt dim">{excerpt}</p>
        <div className="post-card__foot">
          <div className="post-card__tags">
            {tags.slice(0, 4).map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          {badge && <span className="post-card__badge mono">{badge}</span>}
          <span className="post-card__arrow">→</span>
        </div>
      </Link>
    </Card>
  )
}
