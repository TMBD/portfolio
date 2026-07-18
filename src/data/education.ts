import type { Education } from "./types";

/** Education and diplomas, newest first. */
export const education: Education[] = [
  {
    id: "ecole-centrale-de-lyon",
    degree: {
      en: "Engineering Degree (Diplôme d’ingénieur de l’École Centrale de Lyon)",
      fr: "Diplôme d’ingénieur de l’École Centrale de Lyon",
    },
    institution: "École Centrale de Lyon",
    period: {
      en: "September 2018 – October 2021",
      fr: "Septembre 2018 – Octobre 2021",
    },
    location: { en: "Lyon, France", fr: "Lyon, France" },
    description: {
      en: "Selected for the double-degree program with École Supérieure Polytechnique de Dakar through a competitive process. The multidisciplinary general engineering curriculum broadened my computer engineering background with a cross-disciplinary approach to engineering problems.",
      fr: "Sélectionné pour intégrer le programme de double diplôme avec l’École Supérieure Polytechnique de Dakar au terme d’un processus sélectif. Ce cursus pluridisciplinaire d’ingénierie générale a élargi mon socle en ingénierie informatique grâce à une approche transversale des problématiques d’ingénierie.",
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
      en: "I completed ESP’s Engineering Degree program in Computer Engineering, where I built a strong foundation in computer science and engineering. This academic path later led to my selection to join École Centrale de Lyon through a double-degree program and laid the groundwork for my career as a software engineer.",
      fr: "J’ai suivi la formation d’ingénieur de conception en Génie informatique à l’ESP, où j’ai acquis de solides bases en informatique et en sciences de l’ingénieur. Ce cursus m’a ensuite conduit à être sélectionné pour intégrer l’École Centrale de Lyon en double diplôme et a constitué le socle de mon parcours d’ingénieur logiciel.",
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
      en: "Selected through an entrance examination and an academic-record review, I completed this two-year post-secondary program in Computer Science. It gave me my first technical foundation before I was selected to continue into ESP’s Engineering Degree program in Computer Engineering.",
      fr: "Admis à l’issue d’un concours et d’une sélection sur dossier scolaire, j’ai suivi cette formation de deux ans en informatique après le baccalauréat. Elle m’a donné un premier socle technique, avant ma sélection pour poursuivre en cycle ingénieur de conception en Génie informatique à l’ESP.",
    },
  },
];
