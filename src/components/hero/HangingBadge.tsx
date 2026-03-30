import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { LinkedInProfilePhoto } from '@/components/hero/LinkedInProfilePhoto'

interface HangingBadgeProps {
  name: string
  title: string
  /** Public URL under `/` or imported asset */
  imageSrc?: string
  /** Prénom et nom de famille explicites (nom de famille = un seul mot, ex. Elhajjam) */
  givenName?: string
  familyName?: string
  className?: string
}

/**
 * Badge suspendu avec portrait circulaire type LinkedIn (fond neutre, sans filtres sur le visage).
 */
function BadgeAvatarFallback({ name }: { name: string }) {
  const parts = name.split(/\s+/).filter(Boolean)
  const initials = parts
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center bg-gradient-to-br from-amber-200/90 via-stone-200 to-rose-200/80 p-6 text-center">
      <span className="font-display text-5xl font-extrabold tracking-tight text-stone-800 sm:text-6xl">
        {initials}
      </span>
      <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-stone-600">
        Ajoutez public/profile.png
      </span>
    </div>
  )
}

export function HangingBadge({
  name,
  title,
  imageSrc,
  givenName: givenNameProp,
  familyName: familyNameProp,
  className = '',
}: HangingBadgeProps) {
  const reduceMotion = useReducedMotion()
  const [imgError, setImgError] = useState(false)
  const showImg = Boolean(imageSrc) && !imgError

  const handleImgError = useCallback(() => {
    setImgError(true)
  }, [])

  const parts = name.trim().split(/\s+/).filter(Boolean)
  const givenName =
    givenNameProp !== undefined && givenNameProp !== ''
      ? givenNameProp
      : parts.length > 0
        ? parts[0]
        : name
  const familyName =
    familyNameProp !== undefined && familyNameProp !== ''
      ? familyNameProp
      : parts.slice(1).join(' ')

  return (
    <div
      className={`relative flex w-full max-w-[min(100%,320px)] flex-col items-center sm:max-w-[360px] ${className}`}
    >
      <div
        className="pointer-events-none absolute -top-2 left-1/2 z-10 h-3 w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-900/20 to-transparent sm:-top-3 sm:w-32"
        aria-hidden
      />

      <motion.div
        className="relative flex flex-col items-center will-change-transform"
        style={{ transformOrigin: '50% 0' }}
        animate={
          reduceMotion
            ? { rotate: 0 }
            : {
                rotate: [0, 1.8, -1.4, 0.9, 0],
                y: [0, -1.5, 0, -0.8, 0],
              }
        }
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
          repeatDelay: 0.15,
        }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 6, -5, 4, -2, 0],
                transition: { duration: 0.85, ease: [0.34, 1.56, 0.64, 1] },
              }
        }
      >
        <div className="flex flex-col items-center">
          <div
            className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-200 to-amber-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] ring-1 ring-amber-900/40"
            aria-hidden
          />
          <div className="flex gap-0.5">
            <div
              className="h-24 w-1.5 rounded-full bg-gradient-to-b from-amber-700 via-amber-900 to-stone-900 shadow-[inset_0_0_4px_rgba(0,0,0,0.4)] sm:h-32"
              aria-hidden
            />
            <div
              className="h-24 w-1.5 rounded-full bg-gradient-to-b from-amber-600 via-amber-800 to-stone-900 shadow-[inset_0_0_4px_rgba(0,0,0,0.4)] sm:h-32"
              aria-hidden
            />
          </div>
          <div
            className="-mt-0.5 flex h-6 w-16 items-center justify-center rounded-b-lg border border-amber-950/40 bg-gradient-to-b from-amber-500 to-amber-800 shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
            aria-hidden
          >
            <div className="h-1 w-10 rounded-full bg-amber-950/40" />
          </div>
        </div>

        <motion.div
          className="relative -mt-0.5 w-[min(100%,300px)] px-1 sm:w-[300px]"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 420, damping: 24 }}
        >
          <div className="relative overflow-hidden rounded-[1.25rem] border-4 border-stone-800 bg-gradient-to-b from-stone-50 to-stone-200 p-1 shadow-[12px_16px_0_rgba(12,10,9,0.85),0_24px_48px_-12px_rgba(0,0,0,0.55)] dark:border-stone-700">
            <div className="flex items-center justify-between gap-2 rounded-t-lg bg-stone-900 px-3 py-2">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-amber-100/95">
                Pass
              </span>
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/60" aria-hidden />
              </div>
            </div>

            <div className="p-3 pt-4 sm:p-3.5">
              <div className="relative bg-[#f3f2ef] p-3 pb-6 shadow-inner dark:bg-zinc-800/80">
                {showImg && imageSrc ? (
                  <LinkedInProfilePhoto
                    src={imageSrc}
                    alt={`Portrait professionnel — ${name}`}
                    onError={handleImgError}
                  />
                ) : (
                  <div className="relative mx-auto aspect-square w-full max-w-[min(100%,240px)] overflow-hidden rounded-full bg-stone-200">
                    <BadgeAvatarFallback name={name} />
                  </div>
                )}
              </div>

              <div className="mt-2 space-y-px text-center">
                <p className="font-display text-lg font-bold leading-tight tracking-tight text-stone-900 sm:text-xl dark:text-stone-100">
                  <span>{givenName}</span>
                  {familyName ? (
                    <>
                      {' '}
                      {/* Nom de famille indivisible (ex. Elhajjam — le « J » ne peut pas être isolé) */}
                      <span className="whitespace-nowrap">{familyName}</span>
                    </>
                  ) : null}
                </p>
                <p className="font-mono text-[11px] leading-snug text-stone-600 sm:text-xs dark:text-stone-400">
                  {title}
                </p>
              </div>

              <div className="mt-3 flex justify-center gap-4" aria-hidden>
                <span className="h-2 w-2 rounded-full border border-stone-400 bg-stone-100 ring-1 ring-stone-300 dark:border-stone-500 dark:bg-zinc-700" />
                <span className="h-2 w-2 rounded-full border border-stone-400 bg-stone-100 ring-1 ring-stone-300 dark:border-stone-500 dark:bg-zinc-700" />
                <span className="h-2 w-2 rounded-full border border-stone-400 bg-stone-100 ring-1 ring-stone-300 dark:border-stone-500 dark:bg-zinc-700" />
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 h-5 w-[72%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-[18px]"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
