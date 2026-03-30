import { motion } from 'framer-motion'
import { HangingBadge } from '@/components/hero/HangingBadge'
import { GradientText } from '@/components/ui/GradientText'
import { profile } from '@/data/portfolio'

/**
 * Hero: copy left, hanging ID badge right — responsive stack with badge first on small screens.
 */
export function Hero() {
  const nameParts = profile.name.trim().split(/\s+/).filter(Boolean)
  const firstName =
    profile.givenName ?? (nameParts.length > 0 ? nameParts[0] : profile.name)
  const lastName = profile.familyName ?? nameParts.slice(1).join(' ')

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-x-hidden pt-12 pb-16 lg:pb-24"
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.14),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(244,114,182,0.1),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(244,114,182,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-50"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 xl:gap-14">
          <div className="order-1 flex w-full justify-center lg:order-2 lg:justify-end lg:pr-2 xl:pr-6">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[360px] pt-6 lg:max-w-none lg:pt-10"
            >
              <HangingBadge
                name={profile.name}
                givenName={profile.givenName}
                familyName={profile.familyName}
                title={profile.title}
                imageSrc={profile.profileImage}
              />
            </motion.div>
          </div>

          <div className="order-2 w-full max-w-xl lg:order-1 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-sm text-amber-800/90 dark:text-amber-200/90">
                {profile.location}
              </p>

              <h1 className="font-display mt-5 text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
                <span className="text-zinc-900 dark:text-white">{firstName}</span>
                {lastName ? (
                  <>
                    {' '}
                    <GradientText
                      variant="sunset"
                      className="whitespace-nowrap [overflow-wrap:normal] [word-break:keep-all]"
                    >
                      {lastName}
                    </GradientText>
                  </>
                ) : null}
              </h1>

              <p className="font-display mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200 sm:text-xl">
                {profile.title}
              </p>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3 text-sm font-semibold text-stone-950 shadow-[0_16px_40px_-12px_rgba(245,158,11,0.4)] ring-1 ring-amber-400/30 transition hover:brightness-110"
                >
                  Voir les projets
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-stone-300/90 bg-white/70 px-7 py-3 text-sm font-semibold text-zinc-800 backdrop-blur-md transition hover:border-amber-400/50 hover:bg-white dark:border-amber-200/20 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:border-amber-300/40 dark:hover:bg-amber-50/[0.07]"
                >
                  Me contacter
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.3 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-14 hidden h-px max-w-xs origin-left bg-gradient-to-r from-amber-600/50 via-rose-300/40 to-transparent dark:from-amber-500/50 dark:via-rose-200/20 dark:to-transparent sm:block"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
