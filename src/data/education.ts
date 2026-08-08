import type { Education } from "./types";

/** Education and diplomas, newest first. */
export const education: Education[] = [
  {
    id: "ecole-centrale-de-lyon",
    degree: {
      en: "Engineering Degree (Diplôme d’ingénieur)",
      fr: "Diplôme d’ingénieur",
    },
    institution: "École Centrale de Lyon",
    period: {
      en: "September 2018 – October 2021",
      fr: "Septembre 2018 – Octobre 2021",
    },
    location: { en: "Lyon, France", fr: "Lyon, France" },
    description: {
      en: "Selected through a competitive process for the double-degree program with École Supérieure Polytechnique de Dakar. This general engineering curriculum complemented a background that had until then been focused mainly on computing, giving me a broader view of engineering problems and the habit of working alongside engineers from other disciplines.",
      fr: "Retenu à l’issue d’un processus sélectif pour intégrer le programme de double diplôme avec l’École Supérieure Polytechnique de Dakar. Ce cursus généraliste est venu compléter une formation jusque-là essentiellement centrée sur l’informatique, en m’apportant une vision plus transversale de l’ingénierie et l’habitude de collaborer avec des ingénieurs d’autres disciplines.",
    },
  },
  {
    id: "esp-engineering-computer-science",
    degree: {
      en: "Engineering Degree in Computer Engineering (Diplôme d’ingénieur de conception)",
      fr: "Diplôme d’ingénieur de conception – Génie informatique",
    },
    institution: "École Supérieure Polytechnique de Dakar",
    period: {
      en: "October 2017 – October 2021",
      fr: "Octobre 2017 – Octobre 2021",
    },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    description: {
      en: "A selective engineering cycle, entered after my DUT, where I learned to design systems rather than only program them. It covered software engineering as a whole, and that breadth is still what my work rests on.",
      fr: "Un cycle ingénieur sélectif, intégré après mon DUT, où j’ai appris à concevoir des systèmes et plus seulement à les programmer. Il couvrait l’ingénierie logicielle dans son ensemble, et c’est sur cette base large que repose encore mon travail.",
    },
  },
  {
    id: "esp-dut-computer-science",
    degree: {
      en: "University Diploma of Technology (DUT) in Computer Science",
      fr: "Diplôme universitaire de technologie (DUT) – Informatique",
    },
    institution: "École Supérieure Polytechnique de Dakar",
    period: {
      en: "October 2015 – July 2017",
      fr: "Octobre 2015 – Juillet 2017",
    },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    description: {
      en: "Admitted through a competitive entrance examination and a review of academic records. Two years of computer science that gave me my first technical foundation, and my first projects built for real users.",
      fr: "Admis à l’issue d’un concours d’entrée et d’une sélection sur dossier. Deux années d’informatique qui m’ont donné mon premier socle technique et mes premiers projets destinés à de vrais utilisateurs.",
    },
  },
];
