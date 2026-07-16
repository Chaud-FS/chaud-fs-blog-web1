import { type ReactNode, type CSSProperties } from 'react'
import { useReveal } from '../lib/useReveal'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

/** Wraps content with a scroll-triggered reveal animation. */
export function Reveal({ children, className = '', delay = 0, style }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
