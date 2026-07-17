import { Suspense, lazy, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'

const Beams = lazy(() => import('./Beams'))

const stats = [
  { k: '作品项目', v: String(projects.length), s: '开源 / 课程' },
  { k: 'GPA', v: '3.8', s: '专业前 5%' },
  { k: '竞赛奖项', v: '5', s: '国家级 ×2' },
  { k: '技术栈', v: '20+', s: '算法 → 部署' },
]

export function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [tabVisible, setTabVisible] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__beams" aria-hidden="true">
        {!reducedMotion && (
          <Suspense fallback={null}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={11}
            lightColor="#8ea2ff"
            speed={1.6}
            noiseIntensity={1.3}
            scale={0.18}
            rotation={0}
            active={tabVisible}
          />
          </Suspense>
        )}
      </div>
      <div className="container hero__inner">
        <div className="hero__left">
          <Reveal>
            <div className="hero__eyebrow mono">
              <span className="hero__dot" /> 可接受 2026.10 起 · 实习 / 全职
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="hero__name">
              你好，我是<span className="grad-text"> Chaud.</span>
              <br />
              <span className="hero__role">{profile.role}</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero__tagline muted">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero__cta">
              <Link to="/projects" className="btn btn--primary">
                查看作品 <span className="arrow">→</span>
              </Link>
              <a
                href="#contact"
                className="btn"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                取得联系
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__stats">
              {stats.map((s) => (
                <div key={s.k} className="hero__stat">
                  <div className="hero__stat-v grad-text">{s.v}</div>
                  <div className="hero__stat-k mono">{s.k}</div>
                  <div className="hero__stat-s dim">{s.s}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="hero__right">
          <Reveal delay={160}>
            <div className="hero__panel">
              <div className="hero__panel-head mono">
                <span>~/profile.json</span>
                <span className="dim">●●●</span>
              </div>
              <pre className="hero__code mono">
{`{
  "name": "Chaud.",
  "role": "AI Algorithm Engineer",
  "focus": [
    "LLM 应用 (RAG/Agent)",
    "计算机视觉",
    "具身智能 (ROS2)"
  ],
  "stack": ["PyTorch","LangChain",
    "ROS2","FastAPI"],
  "edu": "哈信息 · 人工智能",
  "status": "open to work"
}`}
              </pre>
              <div className="hero__panel-foot mono dim">
                <span className="hero__live">
                  <span className="hero__dot" /> live
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
