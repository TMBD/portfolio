import type { Project } from "./types";

/**
 * Projects. `repoUrl` / `liveUrl` are optional — the matching button only
 * renders when its URL is present. `featured` drives the home "Top Projects"
 * preview. Dummy but realistic; replace later.
 */
export const projects: Project[] = [
  {
    id: "devboard",
    name: "DevBoard",
    description: {
      en: "A collaborative project-management dashboard with real-time boards, drag-and-drop tasks, and team analytics.",
      fr: "Un tableau de bord collaboratif de gestion de projet avec des tableaux en temps réel, des tâches en glisser-déposer et des analyses d'équipe.",
    },
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/thierno-diallo/devboard",
    liveUrl: "https://devboard.example.com",
    featured: true,
  },
  {
    id: "portfolio-engine",
    name: "Portfolio Engine",
    description: {
      en: "A fast, accessible static-site generator for developer portfolios, with i18n and theming out of the box.",
      fr: "Un générateur de site statique rapide et accessible pour les portfolios de développeurs, avec i18n et thèmes intégrés.",
    },
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/thierno-diallo/portfolio-engine",
    featured: true,
  },
  {
    id: "taskflow-api",
    name: "TaskFlow API",
    description: {
      en: "A robust REST API for task and workflow automation — containerised and production-ready.",
      fr: "Une API REST robuste pour l'automatisation des tâches et des workflows — conteneurisée et prête pour la production.",
    },
    technologies: ["Node.js", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/thierno-diallo/taskflow-api",
    liveUrl: "https://taskflow.example.com",
    featured: true,
  },
  {
    id: "weathernow",
    name: "WeatherNow",
    description: {
      en: "A clean weather app with location search, interactive maps, and severe-weather alerts.",
      fr: "Une application météo épurée avec recherche par lieu, cartes interactives et alertes météo.",
    },
    technologies: ["React", "REST API", "Chart.js"],
    liveUrl: "https://weathernow.example.com",
  },
  {
    id: "chatterbox",
    name: "Chatterbox",
    description: {
      en: "A real-time chat application with rooms, presence, and typing indicators.",
      fr: "Une application de chat en temps réel avec salons, présence et indicateurs de saisie.",
    },
    technologies: ["Node.js", "Redis", "WebSocket"],
    repoUrl: "https://github.com/thierno-diallo/chatterbox",
    liveUrl: "https://chatterbox.example.com",
  },
  {
    id: "snippets",
    name: "Snippets",
    description: {
      en: "A personal code-snippet manager with tagging, full-text search, and syntax highlighting.",
      fr: "Un gestionnaire personnel d'extraits de code avec étiquettes, recherche plein texte et coloration syntaxique.",
    },
    technologies: ["Vue", "MongoDB", "GraphQL"],
    repoUrl: "https://github.com/thierno-diallo/snippets",
  },
  {
    id: "ci-toolkit",
    name: "CI Toolkit",
    description: {
      en: "A collection of reusable GitHub Actions workflows for linting, testing, and releasing.",
      fr: "Une collection de workflows GitHub Actions réutilisables pour le lint, les tests et les releases.",
    },
    technologies: ["GitHub Actions", "Bash"],
    repoUrl: "https://github.com/thierno-diallo/ci-toolkit",
  },
];
