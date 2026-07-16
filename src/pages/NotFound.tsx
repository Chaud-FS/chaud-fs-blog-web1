import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="section page-top center" style={{ minHeight: '60vh' }}>
      <div className="container">
        <div className="mono dim" style={{ letterSpacing: '0.2em' }}>
          404
        </div>
        <h1 className="sec-title" style={{ margin: '12px 0 8px' }}>
          页面走丢了
        </h1>
        <p className="muted">你访问的内容不存在或已被移动。</p>
        <div style={{ marginTop: 28 }}>
          <Link to="/" className="btn btn--primary">
            返回首页 <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
