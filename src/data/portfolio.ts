import type { Profile } from '@/types/portfolio'

/**
 * Contenu du portfolio — aligné sur le CV.
 * Photo du badge : `public/profile.png` (voir `profileImage`).
 */
export const profile: Profile = {
  name: 'Houda Elhajjam',
  givenName: 'Houda',
  familyName: 'Elhajjam',
  title: 'Ingénieure informatique · Full Stack',
  tagline:
    'Ingénieure d’État en informatique, orientée analyse, fiabilité et livraison de solutions web et métier.',
  email: 'houda.elhajjam.pro@gmail.com',
  phone: '+212 6 66 17 65 39',
  location: 'Casablanca, Maroc',
  bio: `Ingénieure d'État en informatique avec une solide capacité d'analyse et de résolution de problèmes, acquise à travers des projets académiques et des stages. Curieuse, motivée et autonome, je cherche constamment à améliorer l'efficacité des processus tout en garantissant des résultats fiables.

Diplômée de l'École marocaine des sciences de l'ingénieur (EMSI), Casablanca — parcours orienté développement full stack (Java / Spring, React, Angular) et bases de données relationnelles.`,

  languages: [
    'Arabe (courant)',
    'Français (intermédiaire)',
    'Anglais (notions de base)',
  ],

  certifications: [
    'Développement de microservices Java évolutifs — Spring Boot & Spring Cloud',
    'Professionnel certifié Oracle',
    'Introduction au développement Agile et à Scrum (IBM)',
    'Développeur Java SE 17',
  ],

  education: [
    {
      diploma: "Diplôme d'ingénieur d'État en informatique et réseaux",
      school: 'École marocaine des sciences de l’ingénieur (EMSI), Casablanca',
      period: '2021 — 2024',
    },
    {
      diploma: 'MIAGE — Informatique appliquée à la gestion des entreprises',
      school: 'Option méthodes',
      period: '2018 — 2020',
    },
    {
      diploma: 'Diplôme technicien spécialisé en développement informatique',
      school: 'OFPPT NTIC2, Casablanca',
      period: '2017 — 2018',
    },
    {
      diploma: 'Baccalauréat scientifique — option SVT',
      school: 'Lycée Riad Idriss Alharti, Casablanca',
      period: '—',
    },
  ],

  skills: [
    // Front
    'JavaScript',
    'React',
    'Next.js',
    'Angular',
    'Bootstrap',
    // Back
    'Java',
    'Spring Boot',
    'Spring Cloud',
    'Node.js',
    '.NET',
    'PHP',
    // Data
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Oracle',
    'Firebase',
    // Outils & qualité
    'Git',
    'Keycloak',
    'JUnit',
    'Mockito',
    'UML',
    'Merise',
    // Méthodes
    'Scrum',
    'Agile',
    'ERP',
  ],

  experience: [
    {
      role: 'Développeuse full stack',
      company: 'Société marocaine d’eau et de développement durable (SMEEDD)',
      period: 'Juillet 2025 — présent',
      highlights: [
        'Projet : application web de gestion et suivi des achats terrain.',
        'Conception et développement du backend (API REST) et du frontend (Java Spring Boot, React, Next.js, PostgreSQL).',
        'Mise en place de la base de données et du modèle relationnel.',
        'Fonctionnalités : gestion des utilisateurs, saisie des achats, génération automatique des bons, tableaux de bord analytiques.',
        'Analyse des besoins, rédaction des spécifications techniques et tests fonctionnels.',
      ],
    },
    {
      role: 'Stagiaire full stack',
      company: 'Digitalia Solutions',
      period: 'Février 2025 — juin 2025',
      highlights: [
        'Application web de suivi terrain (Java Spring Boot, React, MySQL).',
        'Gestion des utilisateurs, planification des visites, tableaux de bord analytiques, exportation des données.',
        'Participation à l’analyse des besoins et à la rédaction des spécifications techniques.',
      ],
    },
    {
      role: 'Stagiaire front-end',
      company: 'WEBCOM, Casablanca',
      period: 'Avril 2024 — octobre 2024',
      highlights: [
        'Sites web statiques pour un cabinet dentaire : services, équipe et informations pratiques.',
        'HTML, CSS, JavaScript — conception responsive et optimisation SEO.',
      ],
    },
    {
      role: 'Stage PFE — développeuse full stack',
      company: 'Banque Centrale Populaire, Casablanca',
      period: 'Juillet 2023 — octobre 2023',
      highlights: [
        'Plateforme de gestion des tarifs et des conventions de crédit — automatisation des processus internes.',
        'Spring Boot, React, Keycloak, PostgreSQL — authentification sécurisée et données relationnelles.',
        'Tests unitaires et d’intégration avec JUnit et Mockito.',
      ],
    },
    {
      role: 'Stage PFA — développeuse full stack',
      company: 'Huawei Technologies, Casablanca',
      period: 'Stage de pratique',
      highlights: [
        'Application web de gestion de stock : suivi des produits et des mouvements.',
        'Architecture UML, couches métier et web avec Spring Boot et Angular ; MySQL ; Git.',
        'Tests unitaires et d’intégration (JUnit, Mockito).',
      ],
    },
  ],

  social: {
    // Non indiqués sur le CV — renseignez vos URLs pour afficher les boutons.
    github: undefined,
    linkedin: undefined,
    twitter: undefined,
  },

  projects: [
    {
      id: '1',
      title: 'Gestion et suivi des achats terrain',
      description:
        'Application web métier pour la saisie des achats, la génération de bons et des tableaux de bord analytiques — rôle full stack actuel chez SMEEDD.',
      technologies: ['Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'REST'],
      accentClass: 'from-cyan-500/80 to-blue-600/80',
    },
    {
      id: '2',
      title: 'Suivi terrain',
      description:
        'Application de suivi de terrain : utilisateurs, planification des visites, exports et indicateurs — stage chez Digitalia Solutions.',
      technologies: ['Spring Boot', 'React', 'MySQL'],
      accentClass: 'from-violet-500/80 to-fuchsia-600/80',
    },
    {
      id: '3',
      title: 'Tarifs et conventions de crédit',
      description:
        'Plateforme interne pour la gestion des tarifs et conventions de crédit, avec sécurisation des accès — stage PFE à la Banque Centrale Populaire.',
      technologies: ['Spring Boot', 'React', 'Keycloak', 'PostgreSQL', 'JUnit', 'Mockito'],
      accentClass: 'from-emerald-500/80 to-teal-600/80',
    },
    {
      id: '4',
      title: 'Gestion de stock',
      description:
        'Suivi des produits et des mouvements de stock ; architecture en couches et qualité de code — stage PFA chez Huawei.',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Git', 'JUnit', 'Mockito'],
      accentClass: 'from-amber-500/80 to-orange-600/80',
    },
    {
      id: '5',
      title: 'Sites vitrine — cabinet dentaire',
      description:
        'Sites statiques pour présenter services, équipe et informations patients ; responsive et optimisation SEO — stage chez WEBCOM.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      accentClass: 'from-sky-500/80 to-indigo-600/80',
    },
  ],

  resumeFileName: 'cv.pdf',
  /** Portrait pour le badge hero (`public/profile.png`) */
  profileImage: '/profile.png',
}
