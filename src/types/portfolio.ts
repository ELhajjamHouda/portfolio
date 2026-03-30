/** Domain types for portfolio content — edit `src/data/portfolio.ts` to customize. */

export interface SocialLinks {
  /** Omit or leave empty if not public on your CV */
  github?: string
  linkedin?: string
  twitter?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  /** Short bullet points for the role */
  highlights: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
  /** Optional accent for card header (Tailwind gradient classes) */
  accentClass?: string
}

export interface EducationItem {
  diploma: string
  school: string
  period: string
  detail?: string
}

export interface Profile {
  /** Nom complet affiché (footer, méta, etc.) */
  name: string
  /** Prénom — pour le hero / badge */
  givenName?: string
  /** Nom de famille en un seul mot (ex. Elhajjam), évite les coupures sur le « J » */
  familyName?: string
  title: string
  tagline: string
  email: string
  /** E.164 or local display format */
  phone?: string
  location: string
  /** Longer bio for About */
  bio: string
  /** Spoken languages (CV) */
  languages?: string[]
  /** Professional certifications */
  certifications?: string[]
  /** Diplomas and training */
  education?: EducationItem[]
  skills: string[]
  experience: ExperienceItem[]
  social: SocialLinks
  projects: ProjectItem[]
  /** Filename under `/public/` for the resume download */
  resumeFileName: string
  /** Hero badge photo — place a JPG/PNG in `public/` (e.g. `/profile.jpg`) */
  profileImage?: string
}
