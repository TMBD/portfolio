import type { Project } from "./types";
import { md } from "./md";

/**
 * Projects. `repoUrl` / `liveUrl` are optional — the matching button only
 * renders when its URL is present. `featured` drives the home "Top Projects"
 * preview.
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
        Laajal Sa Diine is a live short-form audio Q&A platform I designed and
        built independently to make practical Islamic guidance easier to find. The
        product combines a React and TypeScript client with a Node.js and Express
        REST API, MongoDB, and Amazon S3.

        A central application challenge was **content discovery**: a
        French-language weighted full-text index ranks matches across multiple
        fields, while combinable filters and infinite scrolling make the library
        easier to explore. I also implemented JWT-protected administration with
        separate permissions for content, administrator management, and backups.

        Taking the product live became another major challenge. Rather than use a
        fully managed hosting service, I deliberately provisioned and configured a
        Hetzner Cloud server, deployed the services with Docker, routed them
        through Traefik, and configured DNS through Cloudflare.

        This gave me hands-on experience with deployment and operations across the
        application’s full path to production. The platform remains live, used by
        listeners, and maintained as an evolving side project.
      `,
      fr: md`
        Laajal Sa Diine est une plateforme en ligne de questions-réponses audio
        courtes, que j’ai conçue et développée seul pour faciliter l’accès à des
        réponses pratiques sur l’islam. Le produit associe une application cliente
        en React et TypeScript à une API REST Node.js et Express, MongoDB et
        Amazon S3.

        L’un des principaux défis applicatifs a été la **recherche de contenus** :
        un index de recherche plein texte pondéré, configuré pour le français,
        classe les correspondances sur plusieurs champs, tandis que des filtres
        combinables et le défilement infini facilitent l’exploration de la
        bibliothèque. J’ai également mis en place une administration protégée par
        JWT, avec des droits distincts pour la gestion des contenus, des
        administrateurs et des sauvegardes.

        La mise en ligne du produit a constitué un autre défi important. Plutôt que
        d’utiliser un hébergement entièrement managé, j’ai volontairement
        provisionné et configuré un serveur Hetzner Cloud, déployé les services
        avec Docker, assuré leur routage avec Traefik et configuré les
        enregistrements DNS via Cloudflare.

        Cette approche m’a permis de pratiquer concrètement le déploiement et
        l’exploitation d’une application de bout en bout, jusqu’à sa mise en
        production. La plateforme reste en ligne, utilisée par des auditeurs et
        maintenue comme un projet personnel en évolution.
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
        GSF wanted collection teams to know how full waste containers were before
        planning their routes. For an ECL academic project carried out from
        September 2019 to April 2020, I served as technical lead as we designed a
        **connected system** to measure fill levels and transmit periodic data.

        I led the electronics design and implementation, defining the
        communication path from an ultrasonic sensor and Arduino board to a \`LoRa\`
        gateway connected to GSF’s servers. I wrote the Arduino/C++ firmware and
        configured measurements and transmissions at 30-minute intervals to limit
        device activity and conserve battery power.

        I coordinated with the mechanical team, which used ECL’s FabLab to
        manufacture a protective enclosure suitable for dirty and demanding
        conditions. We delivered a working, field-tested system and validated it
        in several waste containers. Without an intermediate relay, the LoRa
        communication reached approximately 100 metres.

        The project strengthened my experience in embedded systems, low-power
        design, long-range communication, and multidisciplinary technical
        leadership.
      `,
      fr: md`
        GSF souhaitait permettre à ses équipes de connaître le niveau de
        remplissage des conteneurs avant de planifier leurs tournées. Dans le cadre
        d’un projet académique de l’ECL mené de septembre 2019 à avril 2020, j’ai
        assuré la direction technique de la conception d’un **système connecté**
        capable de mesurer ce niveau et de transmettre périodiquement les données.

        J’ai piloté la conception et la réalisation du système électronique, en
        définissant la chaîne de communication reliant un capteur à ultrasons et
        une carte Arduino à une passerelle \`LoRa\` connectée aux serveurs de GSF.
        J’ai développé le firmware Arduino en C++ et configuré une mesure et une
        transmission toutes les 30 minutes afin de limiter l’activité du dispositif
        et de préserver la batterie.

        J’ai également coordonné le travail avec l’équipe mécanique, qui a utilisé
        le FabLab de l’ECL pour fabriquer un boîtier de protection adapté à un
        environnement sale et contraignant. Nous avons livré un système fonctionnel
        et l’avons testé sur le terrain dans plusieurs conteneurs. Sans relais
        intermédiaire, la communication LoRa a atteint une portée d’environ 100
        mètres.

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
        The 2019 French Robotics Cup challenged teams to design and build
        **autonomous robots** for Atom Factory, a 100-second match with several
        possible scoring actions and no prescribed order. Representing École
        Centrale de Lyon, I worked on our entry from September 2018 to June 2019,
        where strategy mattered as much as reliable execution.

        As technical lead of the electronics team, I contributed extensively to
        the \`Python\` embedded software running on \`LEGO EV3\` controllers. I
        worked closely with the mechanical team to align match strategy, physical
        capabilities, and software behavior, while coordinating the electronics
        work through implementation and integration.

        We also applied closed-loop control concepts from our ECL coursework to
        regulate robot movement and position. Our robots passed official
        homologation and competed in the event. The project strengthened my
        experience in embedded programming, control systems, cross-disciplinary
        integration, and technical coordination.
      `,
      fr: md`
        L’édition 2019 de la Coupe de France de Robotique demandait aux équipes de
        concevoir et construire des **robots autonomes** pour Atom Factory, un
        match de 100 secondes proposant plusieurs actions rapportant des points,
        sans ordre imposé. J’y ai représenté l’École Centrale de Lyon de septembre
        2018 à juin 2019, dans un défi où la stratégie comptait autant que la
        fiabilité d’exécution.

        En tant que responsable technique de l’équipe électronique, j’ai contribué
        activement au logiciel embarqué en \`Python\` exécuté sur des contrôleurs
        \`LEGO EV3\`. J’ai travaillé étroitement avec l’équipe mécanique pour aligner
        la stratégie de match, les capacités physiques et le comportement logiciel,
        tout en coordonnant le travail électronique jusqu’à l’intégration.

        Nous avons également appliqué des notions de commande en boucle fermée
        étudiées à l’ECL afin de réguler le déplacement et le positionnement des
        robots. Nos robots ont obtenu leur homologation officielle et participé à
        la compétition. Ce projet a renforcé mon expérience en programmation
        embarquée, automatique, intégration multidisciplinaire et coordination
        technique.
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
        Polytechnique de Dakar created a 60 Hz **persistence-of-vision** LED
        display that showed text sent from a smartphone over Bluetooth. Its LED
        assembly was mounted on a coil rotating 60 times per second; as it turned,
        the controller lit the appropriate LEDs at each angular position so the
        eye perceived stable text.

        The completed system was successfully demonstrated at Polytechnique Day.
        As head of the club’s IT department, I developed the native Android
        application in \`Java\`, defined the communication format with the
        electronics team, and handled \`Bluetooth\` connection failures and
        retries.

        I also divided the software work into tasks, set deadlines, and followed
        delivery to keep the IT stream aligned with the other teams. The project
        gave me practical experience coordinating software and electronics work
        around a shared interface and integration schedule.
      `,
      fr: md`
        Pour la Journée Polytechnique de 2018, le club Robotech de l’École
        Supérieure Polytechnique de Dakar a réalisé un afficheur LED à
        **persistance rétinienne** fonctionnant à 60 Hz et capable d’afficher du
        texte envoyé depuis un smartphone par Bluetooth. Le dispositif à LED était
        monté sur une bobine effectuant 60 rotations par seconde ; pendant la
        rotation, le contrôleur allumait les LED appropriées à chaque position
        angulaire afin que l’œil perçoive un texte stable.

        Le système finalisé a été présenté avec succès lors de la Journée
        Polytechnique. En tant que responsable du département informatique du club,
        j’ai développé l’application Android native en \`Java\`, défini le format de
        communication avec l’équipe électronique et géré les échecs de connexion
        \`Bluetooth\` ainsi que les nouvelles tentatives.

        J’ai également réparti le travail logiciel, fixé les échéances et suivi
        leur respect afin que le volet informatique reste aligné avec les autres
        équipes. Ce projet m’a apporté une expérience concrète de la coordination
        entre logiciel et électronique autour d’une interface commune et d’un
        calendrier d’intégration partagé.
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
        A school in Senegal needed a clearer way for staff and teachers to view
        **classroom schedules**, find available rooms, and reserve them for
        upcoming courses. During my DUT, a friend and I volunteered to build a
        \`Java\` desktop application for that purpose.

        I designed the MySQL database and implemented the Java backend using
        \`JDBC\`, while my friend developed the \`Swing\` interface. The backend
        checked room availability before saving a booking to reject schedule
        conflicts.

        As my first substantial collaborative software project, it also challenged
        me to define the boundary between frontend and backend work, coordinate
        development, and integrate separately built components. The experience gave
        me a practical understanding of the problems \`Git\` solves in team
        development. We completed the application and handed it over to the school
        with its source code.
      `,
      fr: md`
        Une école au Sénégal avait besoin d’un moyen plus clair pour permettre au
        personnel et aux enseignants de consulter l’**occupation des salles**, de
        repérer celles disponibles et de les réserver pour leurs prochains cours.
        Pendant mon DUT, un ami et moi nous sommes portés volontaires pour
        développer une application de bureau en \`Java\` répondant à ce besoin.

        J’ai conçu la base de données MySQL et implémenté le backend Java avec
        \`JDBC\`, tandis que mon ami développait l’interface graphique en \`Swing\`.
        Avant d’enregistrer une réservation, le backend vérifiait la disponibilité
        de la salle afin de refuser les conflits de planning.

        Premier projet logiciel conséquent réalisé en collaboration, il m’a aussi
        appris à délimiter les responsabilités entre frontend et backend, à
        coordonner le développement et à intégrer des composants développés
        séparément. Cette expérience m’a permis de comprendre concrètement les
        problèmes que \`Git\` résout dans un travail d’équipe. Nous avons finalisé
        l’application et l’avons remise à l’école avec son code source.
      `,
    },
    technologies: ["Java", "Swing", "JDBC", "MySQL", "Git"],
  },
];
