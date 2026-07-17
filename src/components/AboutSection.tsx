import { profile, education, skills } from '../data/profile'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import { Tag } from './Tag'

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01"
          title="关于我"
          sub="// profile & education"
        />

        <div className="about">
          <Reveal className="about__bio">
            <p className="about__lead">{profile.summary}</p>
            <div className="about__edu liquid-glass">
              <div className="about__edu-row">
                <span className="dim mono">院校</span>
                <span>{education.school}</span>
              </div>
              <div className="about__edu-row">
                <span className="dim mono">院系 / 专业</span>
                <span>
                  {education.college} · {education.major}
                </span>
              </div>
              <div className="about__edu-row">
                <span className="dim mono">学位 / 时间</span>
                <span>
                  {education.degree} · {education.period}
                </span>
              </div>
              <div className="about__edu-row">
                <span className="dim mono">成绩</span>
                <span>
                  GPA {education.gpa} · {education.rank}
                </span>
              </div>
              <div className="about__edu-row">
                <span className="dim mono">毕设</span>
                <span>{education.thesis}</span>
              </div>
              <div className="about__edu-row">
                <span className="dim mono">辅修</span>
                <span>{education.minor}</span>
              </div>
            </div>
          </Reveal>

          <div className="about__skills">
            <Reveal>
              <h3 className="about__skills-title mono">核心技能 / core skills</h3>
            </Reveal>
            <div className="about__skills-grid">
              {skills.map((s, i) => (
                <Reveal key={s.group} delay={i * 60}>
                  <div className="liquid-glass skill-card">
                    <div className="skill-card__group">{s.group}</div>
                    <div className="skill-card__items">
                      {s.items.map((it) => (
                        <Tag key={it} label={it} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
