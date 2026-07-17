import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__name grad-text">{profile.name}</div>
          <p className="dim">{profile.tagline}</p>
        </div>
        <div className="footer__cols">
          <div>
            <div className="footer__label mono">导航</div>
            <Link to="/">首页</Link>
            <Link to="/projects">项目</Link>
            <Link to="/blog">博客</Link>
            <Link to="/resources">资源</Link>
            <Link to="/feed">资讯</Link>
          </div>
          <div>
            <div className="footer__label mono">联系</div>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <span className="dim">微信 {profile.wechat}</span>
          </div>
          <div>
            <div className="footer__label mono">社交</div>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bar">
        <span className="dim mono">© {year} {profile.name} · Built with React + Vite</span>
        <span className="dim mono">哈尔滨信息工程学院 · 人工智能</span>
      </div>
    </footer>
  )
}
