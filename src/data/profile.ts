import type { Profile } from "./types";
import { md } from "./md";

/**
 * Personal profile — the single source of truth for identity and intro copy.
 * Intro and About copy are finalized separately from the identity fields.
 */
export const profile: Profile = {
  name: "Thierno DIALLO",
  role: { en: "Senior Software Engineer", fr: "Ingénieur logiciel senior" },
  location: { en: "Montpellier, France", fr: "Montpellier, France" },
  email: "thierno.dev@gmail.com",
  cvUrl: "/cv.pdf",
  photo: "/profile.svg",

  intro: {
    en: "Hi, I’m Thierno. I’m based in Montpellier, where I work on the backend systems behind healthcare software that doctors use every day — from the first architecture sketch to reliable production code, and then the documentation that saves the next person from having to read my mind. I’m most drawn to problems where reliability, security, performance, and maintainability all want the front seat at once.",
    fr: "Bonjour, moi c’est Thierno. Je vis à Montpellier, où je travaille sur les systèmes backend de logiciels de santé utilisés chaque jour par des médecins : depuis la première esquisse d’architecture jusqu’au code fiable en production, puis la documentation qui évite à la personne suivante de devoir lire dans mes pensées. Les problèmes qui m’attirent le plus sont ceux où fiabilité, sécurité, performance et maintenabilité veulent toutes passer devant en même temps.",
  },

  about: {
    en: md`
      My route into software was not a childhood master plan. I initially
      imagined studying mechanical or electrical engineering. A teacher at my
      high school encouraged me to pursue computer engineering because of the
      opportunities it offered and the promise it held around 2014, while a
      couple of technology-heavy TV shows had already made the field look
      intriguing. That practical choice became a genuine fit once I discovered
      that I enjoyed designing systems as much as coding them.

      Today, as a Senior Software Engineer, I work mainly on Java and Quarkus
      backend systems for healthcare software. I am happiest when I can take a
      problem end to end: understand an ambiguous context, compare technologies,
      make the trade-offs explicit, shape the architecture, implement a reliable
      solution, and document it so others can use, maintain, and extend it. That
      approach has taken me through identity and security integrations,
      multi-country platform capabilities, unfamiliar healthcare technologies,
      and AI-agent workflows for developers. The technologies change; the part I
      enjoy is turning complexity into something coherent and useful.

      I care most about finding the right balance for each context. Reliability
      comes first, followed by security, performance, maintainability,
      simplicity, and extensibility. No design can maximize all of these
      qualities at once. That is why I see the ability to find the right
      trade-off as one of the essential qualities of a good software engineer.
      Colleagues can expect me to think carefully, care about consistency, and
      treat their blockers as problems worth helping solve.

      Looking ahead in my career, I want to grow into hands-on technical
      leadership and, over time, deepen my expertise in software architecture. I
      want to support that growth with strong cloud and platform engineering
      knowledge while continuing to code.

      Away from the keyboard, I enjoy playing and watching football, as well as
      running outdoors to clear my head and stay fit. Want to know which club I
      support? Take a look around, then send me a message. I have a few solid
      arguments ready for that choice too. 😉
    `,
    fr: md`
      Mon parcours vers l’informatique n’était pas un plan établi depuis
      l’enfance. Je m’imaginais d’abord étudier le génie mécanique ou électrique.
      Vers 2014, un professeur de mon lycée m’a encouragé à choisir le génie
      informatique pour les débouchés et les perspectives qu’offrait ce domaine,
      tandis que quelques séries télévisées très orientées technologie avaient
      déjà éveillé ma curiosité. Ce choix pragmatique est devenu une véritable
      évidence lorsque j’ai découvert que j’aimais autant concevoir des systèmes
      que les programmer.

      Aujourd’hui, en tant qu’ingénieur logiciel senior, je travaille
      principalement sur des systèmes backend Java et Quarkus pour des logiciels
      de santé. Je suis particulièrement à l’aise lorsque je peux prendre un
      problème de bout en bout : comprendre un contexte ambigu, comparer des
      technologies, expliciter les compromis, définir l’architecture, implémenter
      une solution fiable et la documenter afin que d’autres puissent l’utiliser,
      la maintenir et la faire évoluer. Cette approche m’a conduit à travailler
      sur des intégrations d’identité et de sécurité, des capacités de plateforme
      multi-pays, des technologies de santé que je devais d’abord apprivoiser et
      des workflows d’agents IA destinés aux développeurs. Les technologies
      changent ; ce qui me plaît reste de transformer la complexité en quelque
      chose de cohérent et d’utile.

      Je cherche avant tout le bon équilibre pour chaque contexte. La fiabilité
      vient en premier, suivie de la sécurité, de la performance, de la
      maintenabilité, de la simplicité et de l’extensibilité. Aucune conception ne
      peut maximiser tous ces aspects à la fois. C’est pourquoi je considère la
      capacité à trouver le juste compromis comme l’une des qualités essentielles
      d’un bon ingénieur logiciel. Mes collègues peuvent compter sur moi pour
      réfléchir avec attention, veiller à la cohérence et considérer leurs
      blocages comme des problèmes qui méritent mon aide.

      Pour la suite de ma carrière, je souhaite évoluer vers un leadership
      technique qui reste proche du code, puis approfondir mon expertise en
      architecture logicielle. Je veux appuyer cette évolution sur de solides
      connaissances en cloud et en ingénierie des plateformes, tout en continuant
      à coder.

      En dehors du clavier, j’aime jouer au football et suivre les matchs, ainsi
      que courir à l’extérieur pour me vider la tête et rester en forme. Vous
      voulez savoir quel club de foot je supporte ? Parcourez la suite, puis
      envoyez-moi un message : j’ai quelques bons arguments pour défendre mon
      choix. 😉
    `,
  },

  socials: [
    { label: "GitHub", href: "https://github.com/TMBD", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thiernodev",
      icon: "linkedin",
    },
    { label: "X", href: "https://x.com/thiermbd", icon: "x" },
    { label: "Email", href: "mailto:thierno.dev@gmail.com", icon: "email" },
  ],
};
