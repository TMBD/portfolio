import type { Project } from "./types";
import { md } from "./md";

/**
 * Projects. `repoUrl` / `liveUrl` are optional — the matching button only
 * renders when its URL is present. `featured` drives the home "Top Projects"
 * preview.
 *
 * Markdown quick reference for every `md` description:
 * - Paragraphs: separate them with a blank line; a single wrapped newline is a space.
 * - Bold: `**text**`; italic: `*text*`; bold italic: `***text***`.
 * - Inline code: `\`code\`` (escape both backticks because `md` is a template).
 * - Link: `[label](https://example.com)`; bare URL: `<https://example.com>`.
 * - Bullets: `- item`; numbered list: `1. item`.
 *
 * To render Markdown punctuation literally, Markdown needs a leading backslash.
 * Because `md` uses a cooked TypeScript template, write that backslash twice:
 * `\\*literal asterisks\\*`, `\\[not a link\\]`, or `\\# not a heading`.
 * A visible backtick needs three backslashes immediately before it in this
 * source; a visible backslash needs four.
 */
export const projects: Project[] = [
  {
    id: "laajal-sa-diine",
    name: {
      en: "Laajal Sa Diine",
      fr: "Laajal Sa Diine",
    },
    description: {
      en: md`
        Laajal Sa Diine is a platform of short audio answers to everyday
        questions about Islam. I designed and built it on my own to make that
        kind of guidance easier to find: a React and TypeScript client on top of
        a Node.js REST API, with MongoDB holding the library and Amazon S3 the
        audio files.

        The hardest part was **content discovery**: a weighted full-text index
        tuned for French ranks matches across several fields, while combinable
        filters and infinite scrolling make the library easier to explore. I also
        implemented JWT-protected administration, with separate permissions for
        content, administrator management, and backups.

        Putting it into production was the other half of the work, and I wanted
        to own that path rather than hand it to a managed platform. I provisioned
        a Hetzner Cloud server myself, deployed the services with Docker, routed
        them through Traefik, and pointed DNS at it through Cloudflare.

        The site is online today, used by listeners, and I still maintain it
        myself — the infrastructure as much as the code.
      `,
      fr: md`
        Laajal Sa Diine est une plateforme de réponses audio courtes aux
        questions du quotidien sur l’islam. Je l’ai conçue et développée seul
        pour rendre ces réponses plus faciles à trouver : une application cliente
        en React et TypeScript, une API REST Node.js, MongoDB pour la
        bibliothèque et Amazon S3 pour les fichiers audio.

        Le plus difficile a été la **recherche de contenus** : un index plein
        texte pondéré et configuré pour le français classe les correspondances
        sur plusieurs champs, tandis que des filtres combinables et le défilement
        infini facilitent l’exploration de la bibliothèque. J’ai également mis en
        place une administration protégée par JWT, avec des droits distincts pour
        la gestion des contenus, des administrateurs et des sauvegardes.

        La mise en production a représenté l’autre moitié du travail, et je
        voulais maîtriser ce chemin plutôt que de le confier à un hébergement
        entièrement managé. J’ai provisionné moi-même un serveur Hetzner Cloud,
        déployé les services avec Docker, assuré leur routage avec Traefik et
        fait pointer les enregistrements DNS via Cloudflare.

        Le site est en ligne aujourd’hui, utilisé par des auditeurs, et je
        continue de le maintenir moi-même — l’infrastructure autant que le code.
      `,
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Amazon S3",
      "Docker",
      "Traefik",
      "Cloudflare",
      "Hetzner Cloud",
    ],
    repoUrl: "https://github.com/TMBD/samwaktou",
    liveUrl: "https://www.laajalsadiine.com",
    featured: true,
  },
  {
    id: "waste-container-fill-level-alert-system",
    name: {
      en: "Waste-Container Fill-Level Alert System",
      fr: "Système d’alerte du niveau de remplissage des conteneurs à déchets",
    },
    description: {
      en: md`
        GSF wanted its collection teams to know how full waste containers were
        before planning their routes. That became an academic project at École
        Centrale de Lyon between September 2019 and April 2020, where I was
        technical lead of the team building a **connected system** to measure
        fill levels and report them at regular intervals.

        I led the electronics design and implementation, defining the
        communication path from an ultrasonic sensor and Arduino board to a \`LoRa\`
        gateway connected to GSF’s servers. I wrote the Arduino/C++ firmware and
        configured measurements and transmissions at 30-minute intervals to limit
        device activity and conserve battery power.

        I coordinated with the mechanical team, which used the school’s FabLab to
        build an enclosure that could survive a dirty and demanding environment.
        We field-tested the system in several containers, and it held up. Without
        an intermediate relay, the LoRa link reached about 100 metres, which set
        the practical limit on how far a gateway could sit from a container.

        The project strengthened my experience in embedded systems, low-power
        design, long-range communication, and multidisciplinary technical
        leadership.
      `,
      fr: md`
        GSF souhaitait que ses équipes de collecte connaissent le niveau de
        remplissage des conteneurs avant de planifier leurs tournées. Ce besoin
        est devenu un projet académique à l’École Centrale de Lyon, de septembre
        2019 à avril 2020, où j’ai assuré la direction technique de l’équipe
        chargée de concevoir un **système connecté** capable de mesurer ce niveau
        et de le transmettre à intervalles réguliers.

        J’ai piloté la conception et la réalisation du système électronique, en
        définissant la chaîne de communication reliant un capteur à ultrasons et
        une carte Arduino à une passerelle \`LoRa\` connectée aux serveurs de GSF.
        J’ai développé le firmware Arduino en C++ et configuré une mesure et une
        transmission toutes les 30 minutes afin de limiter l’activité du dispositif
        et de préserver la batterie.

        J’ai coordonné le travail avec l’équipe mécanique, qui a utilisé le
        FabLab de l’école pour fabriquer un boîtier capable de résister à un
        environnement sale et contraignant. Nous avons testé le système sur le
        terrain dans plusieurs conteneurs, et il a tenu. Sans relais
        intermédiaire, la liaison LoRa portait à environ 100 mètres, ce qui
        fixait la distance maximale entre une passerelle et un conteneur.

        Ce projet a renforcé mon expérience des systèmes embarqués, de la conception
        basse consommation, des communications longue portée et du pilotage
        technique multidisciplinaire.
      `,
    },
    technologies: ["Arduino", "C++", "LoRa", "Ultrasonic Sensor"],
    featured: true,
  },
  {
    id: "coupe-de-france-robotique-2019",
    name: {
      en: "French Robotics Cup 2019 – Atom Factory",
      fr: "Coupe de France de Robotique 2019 – Atom Factory",
    },
    description: {
      en: md`
        The 2019 French Robotics Cup asked teams to build **autonomous robots**
        for Atom Factory: a 100-second match with several scoring actions
        available and no prescribed order to perform them in. Strategy counted as
        much as reliable execution. I worked on École Centrale de Lyon’s entry
        from September 2018 to June 2019.

        As technical lead of the electronics team, I contributed extensively to
        the \`Python\` embedded software running on \`LEGO EV3\` controllers, and
        coordinated the electronics work from implementation through to
        integration. Deciding what the robot would attempt in its 100 seconds
        meant working closely with the mechanical team, so that match strategy,
        physical capability, and software behavior all agreed.

        We applied closed-loop control concepts from our ECL coursework to
        regulate the robots’ movement and positioning. Our robots passed official
        homologation and competed in the event.

        Very little of the result depended on the code alone: a strategy the
        mechanics could not execute cost exactly as many points as a mechanism the
        software could not drive.
      `,
      fr: md`
        L’édition 2019 de la Coupe de France de Robotique demandait aux équipes de
        construire des **robots autonomes** pour Atom Factory : un match de 100
        secondes offrant plusieurs actions rapportant des points, sans ordre
        imposé. La stratégie comptait autant que la fiabilité d’exécution. J’ai
        travaillé sur la participation de l’École Centrale de Lyon de septembre
        2018 à juin 2019.

        En tant que responsable technique de l’équipe électronique, j’ai contribué
        activement au logiciel embarqué en \`Python\` exécuté sur des contrôleurs
        \`LEGO EV3\`, et coordonné le travail électronique de l’implémentation
        jusqu’à l’intégration. Décider de ce que le robot tenterait en 100 secondes
        supposait un travail étroit avec l’équipe mécanique, afin que la stratégie
        de match, les capacités physiques et le comportement logiciel s’accordent.

        Nous avons appliqué des notions de commande en boucle fermée étudiées à
        l’ECL afin de réguler le déplacement et le positionnement des robots. Nos
        robots ont obtenu leur homologation officielle et participé à la
        compétition.

        Le résultat dépendait très peu du code seul : une stratégie que la
        mécanique ne pouvait pas exécuter coûtait exactement autant de points qu’un
        mécanisme que le logiciel ne pouvait pas piloter.
      `,
    },
    technologies: [
      "Python",
      "LEGO MINDSTORMS EV3",
      "Embedded Systems",
      "Closed-Loop Control",
    ],
    featured: true,
  },
  {
    id: "persistence-of-vision-led-display",
    name: {
      en: "Persistence-of-Vision LED Display",
      fr: "Afficheur LED à persistance rétinienne",
    },
    description: {
      en: md`
        For Polytechnique Day in 2018, the Robotech Club at École Supérieure
        Polytechnique de Dakar built a **persistence-of-vision** LED display that
        showed text sent from a smartphone over Bluetooth. The LED assembly was
        mounted on a motor that spun it 60 times per second, and the controller
        lit the right LEDs at each angular position so the eye read stable text
        rather than a blur.

        As head of the club’s IT department, I developed the native Android
        application in \`Java\`, agreed the communication format with the
        electronics team, and handled \`Bluetooth\` connection failures and
        retries. I also split the software work into tasks, set deadlines, and
        tracked delivery so the software side stayed in step with the other
        teams.

        The finished display was demonstrated at the event. My part of it was the
        smartphone side — the app and its Bluetooth link — and the coordination
        with the electronics team: the message format had to be settled early,
        because neither side could test on its own until it existed.
      `,
      fr: md`
        Pour la Journée Polytechnique de 2018, le club Robotech de l’École
        Supérieure Polytechnique de Dakar a réalisé un afficheur LED à
        **persistance rétinienne** capable d’afficher du texte envoyé depuis un
        smartphone par Bluetooth. Le dispositif à LED était monté sur un moteur
        qui le faisait tourner 60 fois par seconde, et le contrôleur allumait les
        LED appropriées à chaque position angulaire, afin que l’œil perçoive un
        texte stable plutôt qu’une traînée lumineuse.

        En tant que responsable du département informatique du club, j’ai
        développé l’application Android native en \`Java\`, défini avec l’équipe
        électronique le format de communication et géré les échecs de connexion
        \`Bluetooth\` ainsi que les nouvelles tentatives. J’ai également réparti le
        travail logiciel en tâches, fixé les échéances et suivi les livraisons
        afin que le volet logiciel reste aligné avec les autres équipes.

        L’afficheur finalisé a été présenté lors de l’événement. Ma part portait
        sur le smartphone — l’application et sa liaison Bluetooth — et sur la
        coordination avec l’équipe électronique : le format de message devait être
        arrêté tôt, car aucun des deux côtés ne pouvait tester seul tant qu’il
        n’existait pas.
      `,
    },
    technologies: ["Java", "Android SDK", "Bluetooth"],
  },
  {
    id: "classroom-booking-desktop-application",
    name: {
      en: "Classroom Booking Desktop Application",
      fr: "Application de bureau de réservation de salles de classe",
    },
    description: {
      en: md`
        A school in Senegal needed a clearer way for staff and teachers to see
        **classroom schedules**, find free rooms, and book them for upcoming
        courses. During my DUT, a friend and I volunteered to build the school a
        \`Java\` desktop application.

        I designed the MySQL database and implemented the Java backend with
        \`JDBC\`, while my friend built the \`Swing\` interface. The backend checked
        availability before saving a booking, so two courses could not claim the
        same room at the same time.

        It was my first substantial collaborative software project, and most of
        the difficulty was not the code: we had to agree where the frontend
        stopped and the backend began, keep our work in step, and integrate two
        halves built separately. We did all of that without version control,
        which is exactly how I learned what \`Git\` is for. We finished the
        application and handed it over to the school with its source code.
      `,
      fr: md`
        Une école au Sénégal avait besoin d’un moyen plus clair pour permettre au
        personnel et aux enseignants de consulter l’**occupation des salles**, de
        repérer celles qui étaient libres et de les réserver pour leurs prochains
        cours. Pendant mon DUT, un ami et moi sommes portés volontaires pour lui
        développer une application de bureau en \`Java\`.

        J’ai conçu la base de données MySQL et implémenté le backend Java avec
        \`JDBC\`, tandis que mon ami développait l’interface graphique en \`Swing\`.
        Avant d’enregistrer une réservation, le backend vérifiait la disponibilité
        de la salle, afin que deux cours ne puissent pas occuper la même salle au
        même moment.

        C’était mon premier projet logiciel conséquent réalisé à deux, et
        l’essentiel de la difficulté n’était pas le code : il fallait délimiter où
        s’arrêtait le frontend et où commençait le backend, avancer au même
        rythme, puis intégrer deux moitiés développées séparément. Nous avons fait
        tout cela sans gestion de versions, et c’est précisément ainsi que j’ai
        compris à quoi sert \`Git\`. Nous avons finalisé l’application et l’avons
        remise à l’école avec son code source.
      `,
    },
    technologies: ["Java", "Swing", "JDBC", "MySQL"],
  },
];
