import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { profile } from '@/data/portfolio'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#resume', label: 'CV' },
  { href: '#contact', label: 'Contact' },
] as const

/**
 * Sticky top navigation with blur, mobile drawer, and anchor links to each section.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const monogram = useMemo(() => {
    if (profile.givenName && profile.familyName) {
      return `${profile.givenName[0] ?? ''}${profile.familyName[0] ?? ''}`.toUpperCase()
    }
    const parts = profile.name.split(/\s+/).filter(Boolean)
    return parts
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase() ?? '')
      .join('')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const headerBg = scrolled
    ? 'border-b border-stone-200/90 bg-white/85 backdrop-blur-xl dark:border-white/[0.06] dark:bg-zinc-950/75'
    : 'bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-zinc-900 transition hover:text-amber-700 dark:text-white dark:hover:text-cyan-300"
          onClick={close}
        >
          {monogram}
          <span className="text-amber-600 dark:text-cyan-400">.</span>
        </a>

        <nav className="hidden flex-1 justify-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-stone-200/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300/90 bg-white/80 p-2 text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-stone-200/90 bg-white/95 backdrop-blur-xl dark:border-white/[0.06] dark:bg-zinc-950/95 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 pb-4" aria-label="Mobile primary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-zinc-700 hover:bg-stone-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
                  onClick={close}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
