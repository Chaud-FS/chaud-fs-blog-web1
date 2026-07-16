interface Props {
  index?: string
  title: string
  sub?: string
  tag?: string
}

export function SectionHead({ index, title, sub, tag }: Props) {
  return (
    <div className="sec-head">
      {index && <span className="sec-index mono">{index}</span>}
      <div className="sec-head__main">
        {sub && (
          <div className="sec-eyebrow">
            <span className="sec-eyebrow__dot" />
            {sub}
          </div>
        )}
        <h2 className="sec-title">{title}</h2>
      </div>
      {tag && <span className="sec-tag mono">{tag}</span>}
    </div>
  )
}
