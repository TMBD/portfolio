import type { Education } from "./types";

/**
 * Education / diplomas — newest first. Only a few entries, so no "see more"
 * affordance is needed. Dummy but realistic; replace later.
 */
export const education: Education[] = [
  {
    id: "msc-cs",
    degree: { en: "MSc, Computer Science", fr: "Master, Informatique" },
    institution: "Sorbonne University",
    period: { en: "2013 — 2015", fr: "2013 — 2015" },
    location: { en: "Paris, France", fr: "Paris, France" },
    description: {
      en: "Specialised in distributed systems and software engineering; graduated with honours.",
      fr: "Spécialisation en systèmes distribués et génie logiciel ; diplômé avec mention.",
    },
  },
  {
    id: "bsc-cs",
    degree: { en: "BSc, Computer Science", fr: "Licence, Informatique" },
    institution: "Université Paris Cité",
    period: { en: "2010 — 2013", fr: "2010 — 2013" },
    location: { en: "Paris, France", fr: "Paris, France" },
    description: {
      en: "Foundations of algorithms, databases, networks, and web development.",
      fr: "Fondamentaux des algorithmes, des bases de données, des réseaux et du développement web.",
    },
  },
  {
    id: "prepa",
    degree: {
      en: "Preparatory Program, Mathematics & Physics",
      fr: "Classe préparatoire, Mathématiques & Physique",
    },
    institution: "Lycée Louis-le-Grand",
    period: { en: "2008 — 2010", fr: "2008 — 2010" },
    location: { en: "Paris, France", fr: "Paris, France" },
    description: {
      en: "Intensive foundation in mathematics, physics, and introductory computer science.",
      fr: "Formation intensive en mathématiques, physique et introduction à l'informatique.",
    },
  },
];
