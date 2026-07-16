import BorderGlow from './BorderGlow'
import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  animated?: boolean
}

export function Card({ children, className = '', animated, ...rest }: CardProps) {
  return (
    <BorderGlow
      className={`site-card ${className}`}
      backgroundColor="rgba(16, 20, 32, 0.66)"
      glowColor="225 92 78"
      colors={['#8ea2ff', '#5eead4', '#a78bfa']}
      borderRadius={18}
      glowRadius={34}
      edgeSensitivity={26}
      coneSpread={22}
      glowIntensity={1.1}
      animated={animated}
      {...rest}
    >
      {children}
    </BorderGlow>
  )
}
