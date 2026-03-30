import { profile } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

/**
 * Téléchargement du CV PDF — fichier attendu dans `public/` (voir `resumeFileName`).
 */
export function Resume() {
  const href = `/${profile.resumeFileName}`

  return (
    <AnimatedSection id="resume">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 bg-gradient-to-br from-cyan-500/15 via-stone-100/90 to-violet-500/15 p-8 dark:border-white/[0.08] dark:from-cyan-500/10 dark:via-zinc-900/80 dark:to-violet-600/10 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-500/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/15"
            aria-hidden
          />

          <div className="relative max-w-2xl">
            <SectionHeading
              eyebrow="CV"
              title="Télécharger mon curriculum vitæ"
              description="Version PDF — identique au document utilisé pour candidatures et échanges avec les recruteurs."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={href}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:hover:bg-zinc-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Télécharger le PDF
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-stone-400/80 bg-white/50 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
