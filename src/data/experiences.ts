import type { Experience } from "./types";

/**
 * Work experience — newest first. `featured` entries appear in the home
 * "Top Experiences" preview. Dummy but realistic; replace later.
 */
export const experiences: Experience[] = [
  {
    id: "nimbus-senior",
    role: { en: "Senior Software Engineer", fr: "Ingénieur logiciel senior" },
    organization: "Nimbus Technologies",
    period: { en: "2022 — Present", fr: "2022 — Présent" },
    location: { en: "Paris, France", fr: "Paris, France" },
    description: {
      en: "Lead the design and delivery of a cloud analytics platform serving thousands of users. Mentor engineers, drive architecture decisions, and champion the testing and CI/CD practices that cut release times in half.",
      fr: "Je pilote la conception et la livraison d'une plateforme d'analyse cloud utilisée par des milliers d'utilisateurs. J'encadre les ingénieurs, oriente les décisions d'architecture et promeus les pratiques de tests et de CI/CD qui ont réduit de moitié les délais de livraison.",
    },
    featured: true,
  },
  {
    id: "globex-swe",
    role: { en: "Software Engineer", fr: "Ingénieur logiciel" },
    organization: "Globex Systems",
    period: { en: "2019 — 2022", fr: "2019 — 2022" },
    description: {
      en: "Built and scaled back-end services and APIs for a high-traffic e-commerce product. Improved performance and reliability through caching, observability, and database optimisation.",
      fr: "J'ai conçu et fait évoluer des services back-end et des API pour un produit e-commerce à fort trafic. J'ai amélioré la performance et la fiabilité grâce au cache, à l'observabilité et à l'optimisation des bases de données.",
    },
    featured: true,
  },
  {
    id: "initech-fullstack",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    organization: "Initech",
    period: { en: "2017 — 2019", fr: "2017 — 2019" },
    description: {
      en: "Delivered features end-to-end for a SaaS dashboard, from responsive React interfaces to Node.js services. Collaborated closely with designers to ship accessible, polished experiences.",
      fr: "J'ai livré des fonctionnalités de bout en bout pour un tableau de bord SaaS, des interfaces React réactives aux services Node.js. J'ai collaboré étroitement avec les designers pour proposer des expériences accessibles et soignées.",
    },
    featured: true,
  },
  {
    id: "umbrella-dev",
    role: { en: "Software Developer", fr: "Développeur logiciel" },
    organization: "Umbrella Labs",
    period: { en: "2015 — 2017", fr: "2015 — 2017" },
    description: {
      en: "Developed internal tools and automated workflows that saved the team countless hours. Built a strong foundation in software design, testing, and code review.",
      fr: "J'ai développé des outils internes et automatisé des flux de travail qui ont fait gagner de nombreuses heures à l'équipe. J'ai acquis de solides bases en conception logicielle, tests et revue de code.",
    },
  },
  {
    id: "brightpixel-junior",
    role: { en: "Junior Web Developer", fr: "Développeur web junior" },
    organization: "BrightPixel",
    period: { en: "2014 — 2015", fr: "2014 — 2015" },
    description: {
      en: "Started my career building responsive websites and learning the craft of clean, maintainable code alongside a supportive team.",
      fr: "J'ai débuté ma carrière en créant des sites web réactifs et en apprenant l'art d'un code propre et maintenable au sein d'une équipe bienveillante.",
    },
  },
];
