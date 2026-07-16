import { honors, competitions } from '../data/profile'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'

export function ExperienceSection() {
  return (
    <section className="section section--tight" id="experience">
      <div className="container">
        <SectionHead index="04" title="荣誉与竞赛" sub="// honors & awards" tag="2023 — 2026" />

        <div className="exp">
          <Reveal className="exp__col">
            <h3 className="exp__h mono">荣誉奖励</h3>
            <ul className="exp__list">
              {honors.map((h) => (
                <li key={h} className="exp__item">
                  <span className="dot" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="exp__col" delay={80}>
            <h3 className="exp__h mono">竞赛奖励</h3>
            <ul className="exp__list">
              {competitions.map((c, i) => (
                <li key={i} className="exp__item exp__item--award">
                  <div className="exp__item-main">
                    <span className="dot dot--accent" />
                    <span>{c.name}</span>
                  </div>
                  <span className="exp__badge mono">
                    {c.award} {c.year !== '—' && `· ${c.year}`}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
