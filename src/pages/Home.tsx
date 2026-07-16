import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ContactSection } from '../components/ContactSection'
import { SectionHead } from '../components/SectionHead'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { PostCard } from '../components/PostCard'
import { projects } from '../data/projects'
import { blogPosts } from '../data/blog'
import { resourcePosts } from '../data/resources'

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const latestBlog = blogPosts.slice(0, 3)
  const latestRes = resourcePosts.slice(0, 3)

  return (
    <>
      <Hero />

      <AboutSection />

      {/* Projects preview */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHead index="02" title="精选作品" sub="// selected work" tag="2024 — 2026" />
          <div className="grid projects-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-cta">
            <Link to="/projects" className="btn">
              查看全部作品 <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ExperienceSection />

      {/* Blog preview */}
      <section className="section" id="blog">
        <div className="container">
          <SectionHead index="05" title="技术博客" sub="// from the lab" tag="notes" />
          <div className="grid post-grid">
            {latestBlog.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
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
          <Reveal className="section-cta">
            <Link to="/blog" className="btn">
              全部文章 <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Resources preview */}
      <section className="section" id="resources">
        <div className="container">
          <SectionHead index="07" title="学习资源" sub="// curated & cited" tag="cited" />
          <div className="grid post-grid">
            {latestRes.map((r, i) => (
              <Reveal key={r.slug} delay={i * 70}>
                <PostCard
                  to={`/resources/${r.slug}`}
                  title={r.title}
                  excerpt={r.excerpt}
                  date={r.date}
                  tags={r.tags}
                  meta={r.readingTime}
                  badge={r.level}
                />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-cta">
            <Link to="/resources" className="btn">
              全部资源 <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
