import { profile } from '@/data/portfolio'

/** Minimal footer with copyright — keeps the page feeling complete without noise. */
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-stone-200/90 py-10 dark:border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-600 dark:text-zinc-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          © {year} {profile.name}. Site réalisé avec React et Tailwind CSS.
        </p>
        <a
          href="#hero"
          className="text-zinc-600 transition hover:text-amber-700 dark:text-zinc-500 dark:hover:text-cyan-400"
        >
          Haut de page
        </a>
      </div>
    </footer>
  )
}
