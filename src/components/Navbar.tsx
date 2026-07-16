import { useState, useEffect } from 'react'
import type { MouseEvent } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import GlassSurface from './GlassSurface'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: '首页', hash: false },
  { to: '/projects', label: '项目' },
  { to: '/blog', label: '博客' },
  { to: '/resources', label: '资源' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 861px)').matches,
  )
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    setIsDesktop(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  const goContact = (e: MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#contact')
    }
  }

  const navContent = (
    <>
      <Link to="/" className="nav__logo" aria-label="首页">
        <span className="nav__logo-mark">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} />
          ) : (
            'C'
          )}
        </span>
        <span className="nav__logo-text">
          Chaud.<span className="dim"> / AI</span>
        </span>
      </Link>

      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
        <a href="/#contact" className="nav__link" onClick={goContact}>
          联系
        </a>
        <a
          className="btn btn--primary nav__cta"
          href="https://github.com/Chaud-FS"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub ↗
        </a>
      </nav>

      <button
        className={`nav__burger ${open ? 'is-open' : ''}`}
        aria-label="菜单"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </>
  )

  const glass = scrolled && isDesktop

  return (
    <>
      <header className={`nav ${glass ? 'nav--glass' : scrolled ? 'nav--scrolled' : ''}`}>
        {glass ? (
          <div className="container nav__pill-wrap">
            <GlassSurface
              width="100%"
              height={60}
              borderRadius={999}
              className="nav__glass"
              displace={0.8}
              distortionScale={-190}
              redOffset={5}
              greenOffset={18}
              blueOffset={30}
              brightness={50}
              opacity={0.93}
              mixBlendMode="screen"
            >
              <div className="nav__inner nav__inner--glass">{navContent}</div>
            </GlassSurface>
          </div>
        ) : (
          <div className="container nav__inner">{navContent}</div>
        )}
      </header>

    </>
  )
}
