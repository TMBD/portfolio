import type { SkillCategory } from "./types";

/**
 * Technical skills grouped by category. `icon` is a Simple Icons slug rendered
 * via astro-icon. `main: true` promotes a skill to the hero's "Main Technical
 * Skills" preview. Dummy but realistic; replace later.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: { en: "Languages", fr: "Langages" },
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon", main: true },
      { name: "JavaScript", icon: "logos:javascript", main: true },
      { name: "Python", icon: "logos:python", main: true },
    ],
  },
  {
    id: "frontend",
    title: { en: "Frontend", fr: "Frontend" },
    skills: [
      { name: "React", icon: "logos:react", main: true },
      { name: "Astro", icon: "logos:astro-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend", fr: "Backend" },
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon", main: true },
      { name: "PostgreSQL", icon: "logos:postgresql", main: true },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "GraphQL", icon: "logos:graphql" },
    ],
  },
  {
    id: "devops",
    title: { en: "DevOps & Tools", fr: "DevOps & Outils" },
    skills: [
      { name: "Docker", icon: "logos:docker-icon", main: true },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Redis", icon: "logos:redis" },
    ],
  },
];

/** Flattened list of the skills marked `main` (for the hero preview). */
export const mainSkills = skillCategories
  .flatMap((category) => category.skills)
  .filter((skill) => skill.main);
