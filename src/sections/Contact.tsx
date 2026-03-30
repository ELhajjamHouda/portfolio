import { motion } from 'framer-motion'
import { profile } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialConfig = [
  { key: 'github', label: 'GitHub', href: profile.social.github, Icon: GitHubIcon },
  { key: 'linkedin', label: 'LinkedIn', href: profile.social.linkedin, Icon: LinkedInIcon },
  { key: 'twitter', label: 'X (Twitter)', href: profile.social.twitter, Icon: XIcon },
] as const

/**
 * Contact : email, téléphone (CV) et réseaux si renseignés dans `profile.social`.
 */
export function Contact() {
  const socialLinks = socialConfig.filter(
    (item): item is typeof item & { href: string } =>
      typeof item.href === 'string' && item.href.length > 0,
  )

  const phoneHref = profile.phone?.replace(/\s+/g, '')

  const cardClass =
    'group flex items-center gap-4 rounded-2xl border border-stone-300/90 bg-white/60 p-5 transition hover:border-cyan-600/35 hover:bg-white/90 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-500/30 dark:hover:bg-white/[0.06]'

  return (
    <AnimatedSection id="contact" className="pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Contact"
            title="Échangeons sur votre projet"
            description="Stages, missions full stack ou collaborations autour de Java, Spring et React — écrivez-moi ou appelez-moi."
          />
          <div className="flex flex-col justify-center gap-6">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={cardClass}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/15 text-cyan-800 ring-1 ring-cyan-600/25 dark:bg-cyan-500/15 dark:text-cyan-300 dark:ring-cyan-500/25">
                <MailIcon />
              </span>
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                  E-mail
                </p>
                <p className="font-mono text-lg text-zinc-900 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-300">
                  {profile.email}
                </p>
              </div>
            </motion.a>

            {profile.phone && phoneHref ? (
              <motion.a
                href={`tel:${phoneHref}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cardClass}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/15 text-violet-800 ring-1 ring-violet-600/25 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-500/25">
                  <PhoneIcon />
                </span>
                <div className="text-left">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                    Téléphone
                  </p>
                  <p className="font-mono text-lg text-zinc-900 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-300">
                    {profile.phone}
                  </p>
                </div>
              </motion.a>
            ) : null}

            {socialLinks.length > 0 ? (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                  Réseaux
                </p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {socialLinks.map(({ key, label, href, Icon }) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-xl border border-stone-300/90 bg-stone-100/80 px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-stone-400 hover:bg-white hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                      >
                        <Icon className="text-zinc-600 dark:text-zinc-400" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
                Les liens GitHub / LinkedIn / X peuvent être ajoutés dans{' '}
                <code className="rounded bg-stone-200/80 px-1.5 py-0.5 font-mono text-xs text-zinc-700 dark:bg-white/5 dark:text-zinc-400">
                  src/data/portfolio.ts
                </code>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
