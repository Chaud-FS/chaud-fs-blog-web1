import { useParams, Link } from 'react-router-dom'
import { resourcePosts } from '../data/resources'
import { getResourceBody } from '../lib/posts'
import { Markdown } from '../components/Markdown'
import NotFound from './NotFound'

export default function ResourcePost() {
  const { slug } = useParams()
  const meta = resourcePosts.find((r) => r.slug === slug)

  if (!meta) return <NotFound />

  const body = getResourceBody(meta.slug)

  return (
    <article className="section page-top post">
      <div className="container post__wrap">
        <Link to="/resources" className="post__back mono">
          ← 返回资源
        </Link>

        <header className="post__head">
          <div className="post__meta mono">
            <span>{meta.date}</span>
            <span className="dim">· {meta.readingTime}</span>
            <span className="dim">· {meta.level}</span>
            <span className="dim">· {meta.sources} 个权威来源</span>
          </div>
          <h1 className="post__title">{meta.title}</h1>
          <p className="post__excerpt muted">{meta.excerpt}</p>
          <div className="post__tags">
            {meta.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </header>

        <Markdown source={body} />

        <footer className="post__foot">
          <span className="dim mono">资源均引自文末权威信息源</span>
          <Link to="/resources" className="btn">
            更多资源 <span className="arrow">→</span>
          </Link>
        </footer>
      </div>
    </article>
  )
}
