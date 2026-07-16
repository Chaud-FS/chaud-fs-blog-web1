import { SectionHead } from '../components/SectionHead'
import { Reveal } from '../components/Reveal'
import { PostCard } from '../components/PostCard'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHead index="05" title="技术博客" sub="// writing & notes" />
        <p className="page-intro muted">
          围绕大模型应用、计算机视觉与具身智能的实践笔记 —— 把踩过的坑和想清楚的设计写下来。
        </p>

        <div className="grid post-grid">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <PostCard
                to={`/blog/${p.slug}`}
                title={p.title}
                excerpt={p.excerpt}
                date={p.date}
                tags={p.tags}
                meta={p.readingTime}
                badge={p.category}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
