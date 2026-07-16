import { useState } from 'react'
import { profile } from '../data/profile'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'

function CopyRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }
  return (
    <div className="contact__row">
      <div className="contact__row-label mono dim">{label}</div>
      <div className="contact__row-val">
        {href ? (
          <a href={href} className="contact__link">
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )}
        <button className="contact__copy mono" onClick={copy} aria-label="复制">
          {copied ? '已复制' : '复制'}
        </button>
      </div>
    </div>
  )
}

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead index="06" title="取得联系" sub="// get in touch" tag="open to work" />

        <div className="contact">
          <Reveal className="contact__intro glow-radial">
            <h3 className="contact__title">
              有合适的<span className="shiny"> 算法 / 研究 </span>机会，
              <br />
              或想聊聊技术？欢迎来信。
            </h3>
            <p className="muted contact__desc">
              目前可接受 2026 年 10 月起的实习 / 全职机会，期望城市：南京、苏州、杭州、武汉、北京、重庆、深圳。
            </p>
            <a href={`mailto:${profile.email}`} className="btn btn--primary contact__mail">
              发送邮件 <span className="arrow">→</span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <div className="liquid-glass contact__card">
              <CopyRow label="EMAIL" value={profile.email} href={`mailto:${profile.email}`} />
              <CopyRow label="PHONE" value={profile.phone} href={`tel:${profile.phone}`} />
              <CopyRow label="WECHAT" value={profile.wechat} />
              <CopyRow label="GITHUB" value="Chaud-FS" href={profile.github} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
