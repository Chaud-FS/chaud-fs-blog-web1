import { useMemo, useState } from 'react'
import { SectionHead } from '../components/SectionHead'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const categories = ['全部', '大模型应用', '计算机视觉', '具身智能', '其他'] as const

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>('全部')

  const list = useMemo(
    () => (active === '全部' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHead
          index="02"
          title="全部作品"
          sub="// projects & experiments"
        />
        <p className="page-intro muted">
          涵盖大模型应用、计算机视觉与具身智能方向的实践。每一个都来自真实的工程与竞赛场景。
        </p>

        <div className="filterbar">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter ${active === c ? 'is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid projects-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
