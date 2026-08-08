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
  cvUrl: { en: "/cv-en.pdf", fr: "/cv-fr.pdf" },
  photo: "/profile.svg",

  intro: {
    en: "Hi, I'm Thierno. I'm based in Montpellier, where I work on the backend systems behind healthcare software that doctors use every day — from the first architecture sketch to reliable production code, and then the documentation that saves the next person from having to read my mind. I'm most drawn to problems where reliability, security, performance, and maintainability all want the front seat at once.",
    fr: "Bonjour, moi c'est Thierno. Je vis à Montpellier, où je travaille sur les systèmes backend de logiciels de santé utilisés chaque jour par des médecins : depuis la première esquisse d'architecture jusqu'au code fiable en production, puis la documentation qui évite à la personne suivante de devoir lire dans mes pensées. Les problèmes qui m'attirent le plus sont ceux où fiabilité, sécurité, performance et maintenabilité veulent toutes passer devant en même temps.",
  },

  about: {
    en: md`
      My route into software was not a childhood master plan. I first imagined
      myself studying mechanical or electrical engineering. A high-school teacher
      steered me toward computer engineering instead, arguing that in 2014 it was
      where the opportunities were — and a couple of technology-heavy TV shows
      had already made the field look intriguing. The practical choice turned
      into a genuine one once I discovered that I enjoyed designing systems as
      much as coding them.

      Today I work mainly on Java and Quarkus backend systems for healthcare
      software. I like taking a problem end to end: understand an ambiguous
      context, compare technologies, shape the architecture, implement something
      reliable, and document it so others can maintain and extend it. That
      approach has taken me through identity and security integrations,
      multi-country platform capabilities, unfamiliar healthcare technologies,
      and AI-agent workflows for developers. The technology is different every
      time. What stays the same is the part I find interesting: turning
      complexity into something coherent and useful.

      Most of that work comes down to balance. Left to me, reliability comes
      first, then security, performance, maintainability, simplicity, and
      extensibility — but the context regularly reshuffles that order, and no
      design maximizes all of them at once. The real question is how much weight
      each one deserves in the situation at hand. Getting that judgment right,
      and being able to explain it afterwards, is one of the skills that defines
      a good software engineer.

      Ownership, for me, does not stop at designing and implementing. I keep an
      eye on where the work is going, try to spot the next blockers before they
      become urgent, and pull in the people who should be involved, product side
      included, while the plan can still change — so what we agree on works for
      everyone, not only for the developers. Colleagues can expect me to think
      things through, keep the work moving, care about consistency, and treat
      their blockers as problems worth stopping for.

      Looking ahead, I want to grow into hands-on technical leadership and, over
      time, deepen my expertise in software architecture. I'd like to build that
      on stronger cloud and platform engineering foundations, without leaving the
      code behind.

      Away from the keyboard, I love playing football, watching the matches, and
      running outdoors to clear my head and stay fit. Want to know which football club I
      support? Send me a message — I have a few solid arguments ready for that
      one too, though I'll admit they're far less objective than the technical
      ones. 😉
    `,
    fr: md`
      Mon parcours vers l'informatique n'était pas un plan établi depuis
      l'enfance. Je m'imaginais plutôt étudier le génie mécanique ou électrique.
      Un professeur de mon lycée m'a orienté vers le génie informatique, en
      m'expliquant qu'en 2014 c'était là que se trouvaient les débouchés — et
      quelques séries télévisées très orientées technologie avaient déjà éveillé
      ma curiosité. Ce choix pragmatique est devenu une véritable évidence le
      jour où j'ai découvert que j'aimais autant concevoir des systèmes que les
      programmer.

      Aujourd'hui, je travaille principalement sur des systèmes backend Java et
      Quarkus pour des logiciels de santé. J'aime prendre un problème de bout en
      bout : comprendre un contexte ambigu, comparer les technologies, définir
      l'architecture, implémenter une solution fiable et la documenter pour que
      d'autres puissent la maintenir et la faire évoluer. Cette approche m'a
      conduit à travailler sur des intégrations d'identité et de sécurité, des
      fonctionnalités de plateforme multi-pays, des technologies de santé que je
      devais d'abord maîtriser et des workflows d'agents IA destinés aux
      développeurs.
      La technologie change à chaque fois. Ce qui ne change pas, c'est la partie
      qui m'intéresse : transformer la complexité en quelque chose de cohérent et
      d'utile.

      L'essentiel de ce travail est une question d'équilibre. À mon sens, la
      fiabilité passe en premier, puis la sécurité, la performance, la
      maintenabilité, la simplicité et l'extensibilité — mais le contexte rebat
      souvent les cartes, et aucune conception ne peut maximiser toutes ces
      qualités à la fois. La vraie question est celle du poids à accorder à
      chacune dans un contexte donné. Bien juger cet équilibre, et savoir
      l'expliquer ensuite, est l'une des compétences qui font un bon ingénieur
      logiciel.

      Pour moi, la responsabilité ne s'arrête pas à concevoir et implémenter. Je
      garde un œil sur la direction que prend le travail, j'essaie de repérer les
      prochains blocages avant qu'ils ne deviennent urgents et j'implique les
      bonnes personnes, côté produit y compris, tant que le plan peut encore
      évoluer — pour que la solution retenue convienne à tout le monde, et pas
      seulement aux développeurs. Mes collègues peuvent compter sur moi pour
      réfléchir avant de trancher, faire avancer les sujets, veiller à la
      cohérence et considérer leurs blocages comme des problèmes qui méritent
      qu'on s'y arrête.

      Pour la suite, je souhaite évoluer vers un leadership technique et, avec le
      temps, approfondir mon expertise en architecture logicielle. J'aimerais
      m'appuyer pour cela sur des bases plus solides en cloud et en ingénierie
      des plateformes, sans m'éloigner du code.

      En dehors du clavier, j'aime jouer au football, suivre les matchs et courir
      en extérieur pour me vider la tête et rester en forme. Vous voulez savoir
      quel club de foot je supporte ? Envoyez-moi un message : j'ai quelques bons
      arguments à faire valoir là aussi, même si je reconnais qu'ils sont bien
      moins objectifs que les arguments techniques. 😉
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
