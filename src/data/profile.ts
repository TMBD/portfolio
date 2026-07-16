import type { Profile } from "./types";

/**
 * Personal profile — the single source of truth for identity and intro copy.
 * NOTE: dummy but realistic content; replace with real details later.
 */
export const profile: Profile = {
  name: "Thierno DIALLO",
  role: { en: "Software Engineer", fr: "Ingénieur logiciel" },
  location: { en: "Paris, France", fr: "Paris, France" },
  email: "contact@thiernodiallo.dev",
  cvUrl: "/cv.pdf",
  photo: "/profile.svg",

  intro: {
    en: "I'm a software engineer who enjoys turning complex problems into simple, reliable, and elegant software. I care deeply about clean architecture, thoughtful user experience, and code that's a pleasure to maintain. Over the years I've worked across the stack — from crafting responsive interfaces to designing resilient back-end services and automating delivery. Curious by nature, I'm always learning and happiest when building things that make a real difference.",
    fr: "Ingénieur logiciel, j'aime transformer des problèmes complexes en logiciels simples, fiables et élégants. J'accorde une grande importance à une architecture claire, à une expérience utilisateur soignée et à un code agréable à maintenir. Au fil des années, j'ai travaillé sur toute la chaîne — de la création d'interfaces réactives à la conception de services back-end résilients et à l'automatisation du déploiement. Curieux de nature, j'apprends en continu et je m'épanouis en construisant des choses qui font une vraie différence.",
  },

  about: {
    en: "I began programming out of curiosity and never stopped. What started as tinkering became a career built on a genuine love of learning and creating. Today I focus on designing systems that are robust, understandable, and kind to the people who use and maintain them. Away from the keyboard I enjoy reading, football, travelling, and exploring new technologies just for the fun of it.",
    fr: "J'ai commencé à programmer par curiosité et je n'ai jamais arrêté. Ce qui n'était qu'un jeu est devenu une carrière fondée sur un véritable amour d'apprendre et de créer. Aujourd'hui, je me concentre sur la conception de systèmes robustes, compréhensibles et respectueux des personnes qui les utilisent et les maintiennent. Loin du clavier, j'aime lire, le football, voyager et explorer de nouvelles technologies simplement par plaisir.",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/thierno-diallo", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thierno-diallo", icon: "linkedin" },
    { label: "Email", href: "mailto:contact@thiernodiallo.dev", icon: "email" },
  ],
};
