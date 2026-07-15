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
      { name: "TypeScript", icon: "typescript", main: true },
      { name: "JavaScript", icon: "javascript", main: true },
      { name: "Python", icon: "python", main: true },
    ],
  },
  {
    id: "frontend",
    title: { en: "Frontend", fr: "Frontend" },
    skills: [
      { name: "React", icon: "react", main: true },
      { name: "Astro", icon: "astro" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend", fr: "Backend" },
    skills: [
      { name: "Node.js", icon: "nodedotjs", main: true },
      { name: "PostgreSQL", icon: "postgresql", main: true },
      { name: "MongoDB", icon: "mongodb" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    id: "devops",
    title: { en: "DevOps & Tools", fr: "DevOps & Outils" },
    skills: [
      { name: "Docker", icon: "docker", main: true },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Redis", icon: "redis" },
    ],
  },
];

/** Flattened list of the skills marked `main` (for the hero preview). */
export const mainSkills = skillCategories
  .flatMap((category) => category.skills)
  .filter((skill) => skill.main);
