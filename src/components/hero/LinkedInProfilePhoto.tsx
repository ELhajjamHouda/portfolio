/**
 * Portrait circulaire façon LinkedIn : fond neutre (#f3f2ef), ombre légère.
 * Aucun filtre sur le visage (pas de retouche d’expression ni de proportions).
 */
interface LinkedInProfilePhotoProps {
  src: string
  alt: string
  className?: string
  onError?: () => void
}

export function LinkedInProfilePhoto({
  src,
  alt,
  className = '',
  onError,
}: LinkedInProfilePhotoProps) {
  return (
    <div
      className={`relative mx-auto aspect-square w-full max-w-[min(100%,240px)] sm:max-w-[260px] ${className}`}
    >
      {/* Fond type fil LinkedIn — propre et moderne */}
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f3f2ef] p-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.1)] dark:bg-[#38434f] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#f3f2ef] dark:bg-zinc-700">
          <img
            src={src}
            alt={alt}
            width={400}
            height={400}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_22%]"
            onError={onError}
          />
          {/* Léger reflet de surface (cadre), pas sur les traits du visage */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/50 dark:ring-white/10"
            aria-hidden
          />
        </div>
      </div>
    </div>
  )
}
