import { profile } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

/**
 * À propos : bio, compétences, langues, certifications, formation et parcours pro (données CV).
 */
export function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="À propos"
              title="Ingénierie logicielle orientée résultats"
              description={
                <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-400">
                  {profile.bio}
                </p>
              }
            />

            {profile.education?.length ? (
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  Diplômes & formations
                </h3>
                <ul className="mt-4 space-y-4">
                  {profile.education.map((item) => (
                    <li
                      key={`${item.diploma}-${item.period}`}
                      className="rounded-xl border border-stone-200/90 bg-white/60 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]"
                    >
                      <p className="font-mono text-xs text-amber-800/90 dark:text-cyan-400/90">
                        {item.period}
                      </p>
                      <p className="font-display mt-1 text-base font-semibold text-zinc-900 dark:text-white">
                        {item.diploma}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-500">{item.school}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {profile.certifications?.length ? (
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  Certifications
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {profile.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Compétences techniques
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-stone-300/80 bg-gradient-to-br from-stone-100/90 to-transparent px-3 py-1.5 text-sm text-zinc-800 shadow-inner shadow-stone-200/50 dark:border-white/10 dark:from-white/[0.06] dark:to-transparent dark:text-zinc-300 dark:shadow-white/[0.02]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {profile.languages?.length ? (
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  Langues
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {profile.languages.map((lang) => (
                    <li
                      key={lang}
                      className="rounded-lg border border-stone-300/80 bg-stone-100/80 px-3 py-1.5 text-sm text-zinc-800 dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-300"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Expérience
              </h3>
              <ul className="mt-6 space-y-10">
                {profile.experience.map((job, i) => {
                  const isLast = i === profile.experience.length - 1
                  return (
                    <li key={`${job.company}-${job.role}-${String(i)}`} className="flex gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <div
                          className="h-3 w-3 shrink-0 rounded-full border-2 border-white bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.5)] dark:border-zinc-950"
                          aria-hidden
                        />
                        {isLast ? null : (
                          <div
                            className="mt-2 min-h-[3rem] w-px flex-1 bg-gradient-to-b from-stone-300 to-stone-100 dark:from-white/25 dark:to-white/5"
                            aria-hidden
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1 pb-1">
                        <p className="font-mono text-xs text-amber-800/90 dark:text-cyan-400/90">
                          {job.period}
                        </p>
                        <p className="font-display mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
                          {job.role}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-500">{job.company}</p>
                        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
                          {job.highlights.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
