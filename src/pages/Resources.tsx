import { SectionHead } from '../components/SectionHead'
import { Reveal } from '../components/Reveal'
import { PostCard } from '../components/PostCard'
import { resourcePosts } from '../data/resources'

export default function Resources() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHead index="07" title="学习资源" sub="// curated & cited" />
        <p className="page-intro muted">
          从权威信息源（官方文档、名校公开课、顶会论文）中提炼的学习路线与资源清单，每条都附可溯源链接。
        </p>

        <div className="grid post-grid">
          {resourcePosts.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 70}>
              <PostCard
                to={`/resources/${r.slug}`}
                title={r.title}
                excerpt={r.excerpt}
                date={r.date}
                tags={r.tags}
                meta={`${r.readingTime} · ${r.sources} 个来源`}
                badge={r.level}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
