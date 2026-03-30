import { profile } from '@/data/portfolio'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** Grille de projets issus du CV (stages et mission actuelle). */
export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="border-y border-stone-200/80 bg-stone-200/40 dark:border-white/[0.04] dark:bg-zinc-900/20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projets"
          title="Réalisations professionnelles"
          description="Aperçu des applications et sites livrés en entreprise — stack, contexte et objectifs métier."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
