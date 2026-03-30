import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  id: string
  children: ReactNode
  className?: string
  /** Vertical padding between sections */
  padding?: 'normal' | 'tight'
}

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
}

/**
 * Section avec entrée au scroll. Le viewport est volontairement permissif
 * (pas de marge négative stricte) pour que l’animation se déclenche bien sur mobile
 * et tablette — sinon `opacity: 0` peut rester bloquée.
 */
export function AnimatedSection({
  id,
  children,
  className = '',
  padding = 'normal',
}: AnimatedSectionProps) {
  const py = padding === 'tight' ? 'py-16 sm:py-20' : 'py-24 sm:py-28'

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        /** Marge 0 : évite les faux négatifs sur petits écrans (IntersectionObserver) */
        margin: '0px',
        /** Dès qu’une petite partie du bloc est visible, on déclenche */
        amount: 0.05,
      }}
      transition={transition}
      className={`scroll-mt-24 ${py} ${className}`}
      style={{ visibility: 'visible' }}
    >
      {children}
    </motion.section>
  )
}
