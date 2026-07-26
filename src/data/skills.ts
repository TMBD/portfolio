import type { SkillCategory } from "./types";

/**
 * Technical skills grouped by category. `icon` is a full Iconify identifier
 * rendered via astro-icon. `main: true` promotes a skill to the hero's
 * "Main Technical Skills" preview.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "backend-jvm",
    title: { en: "Backend & JVM", fr: "Backend & JVM" },
    skills: [
      { name: "Java", icon: "logos:java", main: true },
      { name: "Quarkus", icon: "logos:quarkus-icon", main: true },
      { name: "Python", icon: "logos:python", main: true },
      { name: "Maven", icon: "logos:maven" },
      { name: "JPA / Hibernate", icon: "logos:hibernate" },
    ],
  },
  {
    id: "identity-api-security",
    title: {
      en: "Identity & API Security",
      fr: "Identité & sécurité des API",
    },
    skills: [
      { name: "OAuth 2.0", icon: "logos:oauth", main: true },
      { name: "OpenID Connect", icon: "simple-icons:openid", main: true },
      { name: "JSON Web Tokens", icon: "simple-icons:jsonwebtokens" },
      { name: "OpenAPI", icon: "logos:openapi-icon" },
    ],
  },
  {
    id: "data-messaging",
    title: { en: "Data & Messaging", fr: "Données & messagerie" },
    skills: [
      { name: "PostgreSQL", icon: "logos:postgresql", main: true },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Liquibase", icon: "simple-icons:liquibase" },
      { name: "RabbitMQ", icon: "logos:rabbitmq-icon" },
      { name: "MinIO", icon: "simple-icons:minio" },
    ],
  },
  {
    id: "cloud-operations",
    title: { en: "Cloud & Operations", fr: "Cloud & exploitation" },
    skills: [
      { name: "Docker", icon: "logos:docker-icon", main: true },
      { name: "Kubernetes", icon: "logos:kubernetes", main: true },
      { name: "Helm", icon: "logos:helm" },
      { name: "Microsoft Azure", icon: "logos:microsoft-azure" },
      { name: "AWS", icon: "logos:aws" },
    ],
  },
  {
    id: "web-engineering",
    title: { en: "Web Engineering", fr: "Ingénierie web" },
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "React", icon: "logos:react" },
    ],
  },
  {
    id: "testing-tooling-ai",
    title: {
      en: "Testing, Tooling & AI",
      fr: "Tests, outillage & IA",
    },
    skills: [
      { name: "JUnit 5", icon: "simple-icons:junit5" },
      { name: "Apache JMeter", icon: "simple-icons:apachejmeter" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitLab", icon: "logos:gitlab" },
      { name: "UML", icon: "simple-icons:uml" },
      {
        name: "GitHub Copilot",
        icon: "simple-icons:githubcopilot",
        main: true,
      },
      { name: "Windsurf", icon: "simple-icons:windsurf" },
      { name: "Claude Code", icon: "simple-icons:claude" },
    ],
  },
];

/** Flattened list of the skills marked `main` (for the hero preview). */
export const mainSkills = skillCategories
  .flatMap((category) => category.skills)
  .filter((skill) => skill.main);
