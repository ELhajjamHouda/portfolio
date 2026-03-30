import { motion } from 'framer-motion'
import type { ProjectItem } from '@/types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

/** External link icon (inline SVG to avoid extra icon dependencies). */
function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

/**
 * Project tile: gradient accent, tech pills, and optional live/source actions.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = project.accentClass ?? 'from-zinc-600/80 to-zinc-800/80'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-300/90 bg-white/70 shadow-[0_0_0_1px_rgba(24,24,27,0.06)] backdrop-blur-sm transition-shadow duration-300 hover:border-cyan-600/30 hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.12)] dark:border-white/[0.08] dark:bg-zinc-900/40 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)] dark:hover:border-cyan-500/20 dark:hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.15)]"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-stone-300/80 bg-stone-100/80 px-2.5 py-0.5 font-mono text-[11px] text-zinc-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-600/15 px-3 py-1.5 text-sm font-medium text-cyan-800 ring-1 ring-cyan-600/25 transition hover:bg-cyan-600/25 dark:bg-cyan-500/15 dark:text-cyan-300 dark:ring-cyan-500/30 dark:hover:bg-cyan-500/25"
            >
              Démo en ligne
              <ExternalIcon />
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 ring-1 ring-stone-300/80 transition hover:bg-stone-100 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-zinc-200"
            >
              <GitHubIcon />
              Code source
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
