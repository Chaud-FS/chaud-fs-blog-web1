import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import { getBlogBody } from '../lib/posts'
import { Markdown } from '../components/Markdown'
import { NotFound } from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const meta = blogPosts.find((p) => p.slug === slug)

  if (!meta) return <NotFound />

  const body = getBlogBody(meta.slug)

  return (
    <article className="section page-top post">
      <div className="container post__wrap">
        <Link to="/blog" className="post__back mono">
          ← 返回博客
        </Link>

        <header className="post__head">
          <div className="post__meta mono">
            <span>{meta.date}</span>
            <span className="dim">· {meta.readingTime}</span>
            <span className="dim">· {meta.category}</span>
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
          <span className="dim mono">作者 · {meta.author}</span>
          <Link to="/blog" className="btn">
            更多文章 <span className="arrow">→</span>
          </Link>
        </footer>
      </div>
    </article>
  )
}
