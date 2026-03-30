import type { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  /** `ocean` = cyan/violet (défaut), `sunset` = ambre/rose pour variantes chaudes */
  variant?: 'ocean' | 'sunset'
}

const gradientByVariant = {
  ocean: 'from-cyan-400 via-sky-400 to-violet-400',
  sunset: 'from-amber-300 via-orange-300 to-rose-400',
} as const

/**
 * Texte avec dégradé — `sunset` pour un hero plus chaud / éditorial.
 */
export function GradientText({ children, className = '', variant = 'ocean' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r ${gradientByVariant[variant]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
