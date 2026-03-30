import type { ReactNode } from 'react'

interface SectionHeadingProps {
  /** Small uppercase label above the title */
  eyebrow: string
  title: string
  description?: ReactNode
  className?: string
}

/**
 * Consistent section title block used across About, Projects, Resume, Contact.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-700/90 dark:text-cyan-400/90">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description != null ? (
        <div className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </div>
      ) : null}
    </div>
  )
}
