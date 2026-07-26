import type { Experience } from "./types";
import { md } from "./md";

/**
 * Work experience — newest first. `featured` entries appear in the home
 * "Top Experiences" preview.
 */
export const experiences: Experience[] = [
  {
    id: "ai-agent-governance-developer-enablement",
    featured: true,
    role: {
      en: "AI Agent Governance and Developer Enablement",
      fr: "Gouvernance des agents IA et accompagnement des développeurs",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "January 2026 – Present",
      fr: "Janvier 2026 – Aujourd’hui",
    },
    description: {
      en: md`
        Since January 2026, as a Software Engineer with Senior Developer
        seniority at CGM, I have led the creation of a shared framework for
        adopting **AI coding agents** across the team. As usage grew, we
        identified inconsistent quality, duplicated effort, unreliable outputs,
        and the absence of common standards.

        I authored a governance model covering ownership, contribution and review
        lifecycles, independent testing, preview rollouts, composability,
        non-overlapping activation rules, and recommended quality thresholds. To
        make evaluation repeatable, I designed a weighted scoring rubric and
        implemented a deterministic Python tool that evaluates skills and
        workflows, reports critical issues, and ranks improvements by impact.

        I also built reusable agent skills for safe Kubernetes diagnostics, Jira
        issue management, GitLab pipelines and merge requests, local Git
        operations, feature-environment resolution, and automated quality
        evaluation. Two orchestration workflows combine these capabilities into
        structured troubleshooting and evaluation processes, with explicit
        contracts, reusable dependencies, safety guardrails, and failure handling.

        These assets are used broadly across the team. I continue to review
        contributions, help colleagues create and debug their own workflows,
        support them when they encounter AI-agent or tool-integration issues, and
        evolve the framework based on practical feedback.
      `,
      fr: md`
        Depuis janvier 2026, dans mon rôle de Software Engineer senior chez CGM,
        je pilote la création d’un cadre commun pour l’adoption des **agents IA de
        développement** au sein de l’équipe. À mesure que leur usage s’est
        développé, nous avons constaté une qualité inégale, des efforts dupliqués,
        des résultats peu fiables et l’absence de standards communs.

        J’ai défini un modèle de gouvernance couvrant les responsabilités, les
        cycles de contribution et de revue, les tests indépendants, les phases de
        préversion, la composabilité, les règles d’activation non concurrentes et
        des seuils de qualité recommandés. Pour rendre l’évaluation reproductible,
        j’ai conçu une grille de notation pondérée et développé un outil
        déterministe en Python qui évalue les skills et les workflows, signale les
        problèmes critiques et classe les améliorations selon leur impact.

        J’ai également créé des skills réutilisables pour le diagnostic sécurisé de
        Kubernetes, la gestion des tickets Jira, les pipelines et merge requests
        GitLab, les opérations Git locales, l’identification des environnements de
        fonctionnalités et l’évaluation automatisée de la qualité. Deux workflows
        d’orchestration combinent ces capacités dans des processus structurés de
        diagnostic et d’évaluation, avec des contrats explicites, des dépendances
        réutilisables, des garde-fous de sécurité et une gestion des échecs.

        Ces ressources sont largement utilisées par l’équipe. Je continue à évaluer
        les contributions, à aider mes collègues à créer et déboguer leurs propres
        workflows, à les accompagner lorsqu’ils rencontrent des problèmes liés aux
        agents IA ou aux intégrations d’outils, et à faire évoluer le cadre à
        partir des retours d’usage.
      `,
    },
  },
  {
    id: "oidc-federated-authentication",
    featured: true,
    role: {
      en: "OIDC Federated Authentication",
      fr: "Authentification fédérée avec OIDC",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "March 2026 – July 2026",
      fr: "Mars 2026 – Juillet 2026",
    },
    description: {
      en: md`
        From March to July 2026, as a Software Engineer with Senior Developer
        seniority at CGM, I designed and implemented the end-to-end integration of
        an enterprise identity provider into a multi-tenant healthcare SaaS
        platform used in France and Italy.

        The goal was to provide company-wide **Single Sign-On** while keeping
        roles, permissions, and organizational access under the platform’s control
        and preserving the existing username-and-password login.

        I owned the architecture, stakeholder coordination, Java/Quarkus
        implementation, security model, and technical documentation. The
        integration uses the OIDC Authorization Code Flow with \`PKCE\`, Pushed
        Authorization Requests, state, and nonce validation.

        I designed server-side management of authentication state and external
        tokens, including refresh and session-coupled cleanup, as well as a
        provider-agnostic identity-mapping model that rejects ambiguous account
        matches. I also solved callback routing for dynamic test environments
        without weakening redirect validation.

        The integration is now in production and actively used by healthcare
        professionals, providing secure federated authentication while preserving
        internal authorization boundaries.
      `,
      fr: md`
        De mars à juillet 2026, dans mon rôle de Software Engineer senior chez
        CGM, j’ai conçu et implémenté de bout en bout l’intégration d’un
        fournisseur d’identité d’entreprise à une plateforme SaaS de santé
        multi-tenant utilisée en France et en Italie.

        L’objectif était de proposer une **authentification unique** à l’échelle
        du groupe, tout en conservant la gestion des rôles, des autorisations et
        des périmètres organisationnels au sein de la plateforme, ainsi que le
        mode de connexion existant par identifiant et mot de passe.

        J’ai pris en charge l’architecture, la coordination avec les parties
        prenantes, l’implémentation Java/Quarkus, le modèle de sécurité et la
        documentation technique. L’intégration utilise le flux OIDC Authorization
        Code avec \`PKCE\`, les Pushed Authorization Requests, ainsi que la
        validation de state et de nonce.

        J’ai conçu la gestion côté serveur de l’état d’authentification et des
        jetons externes, notamment leur renouvellement et leur suppression
        synchronisée avec le cycle de vie de la session, ainsi qu’un modèle
        d’association des identités indépendant du fournisseur qui refuse les
        correspondances ambiguës. J’ai également résolu le routage des callbacks
        pour des environnements de test dynamiques sans assouplir la validation
        des URI de redirection.

        L’intégration est désormais en production et activement utilisée par des
        professionnels de santé, offrant une authentification fédérée sécurisée
        tout en préservant les frontières internes d’autorisation.
      `,
    },
  },
  {
    id: "dynamic-integration-configuration",
    featured: true,
    role: {
      en: "Dynamic Integration Configuration",
      fr: "Configuration dynamique des intégrations",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "January 2026 – March 2026",
      fr: "Janvier 2026 – Mars 2026",
    },
    description: {
      en: md`
        From January to March 2026, as a Software Engineer with Senior Developer
        seniority at CGM, I designed and implemented a centralized
        configuration-resolution system for third-party integrations in a
        multi-tenant healthcare SaaS platform.

        Each integration could expose different connection settings depending on
        the deployment environment and the type of user. Before this system, those
        settings were scattered across configuration files and application code.
        Routing a test or pilot user to a non-production endpoint while real
        healthcare professionals continued using the production endpoint often
        required a code change and redeployment, with no simple way to create an
        isolated exception for one user.

        I replaced this with a **three-tier resolution model** evaluated for each
        user and integration: an explicit user override takes priority, an
        integration-specific strategy applies routing rules, and a
        database-managed default provides the fallback. This made routine endpoint
        changes and individual overrides configurable without redeploying the
        application.

        I used \`Strategy\` and \`Factory\` patterns to keep custom routing logic
        isolated and extensible. I also designed the JPA data model, implemented
        the Java/Quarkus service and API, and documented the architecture through a
        formal RFC and technical diagrams. The system is actively used in
        production.
      `,
      fr: md`
        De janvier à mars 2026, dans mon rôle de Software Engineer senior chez
        CGM, j’ai conçu et implémenté un système centralisé de résolution des
        configurations pour les intégrations tierces d’une plateforme SaaS de
        santé multi-tenant.

        Chaque intégration pouvait nécessiter des paramètres de connexion
        différents selon l’environnement de déploiement et le profil de
        l’utilisateur. Avant ce système, ces paramètres étaient dispersés entre les
        fichiers de configuration et le code applicatif. Orienter un utilisateur de
        test ou pilote vers un point d’accès hors production, tout en maintenant
        les professionnels de santé sur le point d’accès de production, nécessitait
        souvent une modification du code et un redéploiement, sans moyen simple de
        définir une exception pour un seul utilisateur.

        J’ai remplacé ce fonctionnement par un **modèle de résolution à trois
        niveaux**, évalué pour chaque utilisateur et chaque intégration : une
        configuration spécifique à l’utilisateur est prioritaire, une stratégie
        propre à l’intégration applique les règles de routage, puis une valeur par
        défaut gérée en base de données sert de repli. Les changements courants de
        points d’accès et les configurations individuelles peuvent ainsi être
        appliqués sans redéployer l’application.

        J’ai utilisé les patterns \`Strategy\` et \`Factory\` pour isoler et étendre
        les règles de routage. J’ai également conçu le modèle de données JPA,
        implémenté le service et l’API en Java/Quarkus, et documenté l’architecture
        dans une RFC formelle accompagnée de diagrammes techniques. Le système est
        activement utilisé en production.
      `,
    },
  },
  {
    id: "oauth-2-token-exchange",
    role: {
      en: "OAuth 2.0 Token Exchange",
      fr: "Échange de jetons OAuth 2.0",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "September 2024 – February 2025",
      fr: "Septembre 2024 – Février 2025",
    },
    description: {
      en: md`
        From September 2024 to February 2025, as a Software Engineer with Senior
        Developer seniority at CGM, I designed and implemented an OAuth 2.0 Token
        Exchange capability for a multi-tenant healthcare SaaS platform.

        CGM products in multiple countries needed to reuse selected platform
        services on behalf of already authenticated users without requiring
        another sign-in or introducing multiple external token formats into the
        platform.

        I chose \`RFC 8693\` and owned the full lifecycle, from protocol
        architecture and security design to the Java/Quarkus implementation,
        OpenAPI contract, and consumer documentation. I designed a \`Strategy\` and
        \`Factory\` architecture that isolates partner-specific token validation,
        allowing new integrations to be added without changing the core exchange
        flow.

        Requested scopes are constrained by partner-specific permissions before a
        uniform internal platform token is issued, enforcing **least privilege**
        across downstream services. The capability is now in production and
        actively used by CGM products, providing a single, auditable security
        boundary for cross-product service access.
      `,
      fr: md`
        De septembre 2024 à février 2025, dans mon rôle de Software Engineer
        senior chez CGM, j’ai conçu et implémenté un mécanisme d’échange de jetons
        OAuth 2.0 pour une plateforme SaaS de santé multi-tenant.

        Des produits CGM utilisés dans plusieurs pays devaient réutiliser certains
        services de la plateforme au nom d’utilisateurs déjà authentifiés, sans
        leur imposer une nouvelle connexion ni introduire plusieurs formats de
        jetons externes dans la plateforme.

        J’ai retenu la \`RFC 8693\` et pris en charge l’ensemble du cycle de
        réalisation, de l’architecture du protocole et du modèle de sécurité à
        l’implémentation Java/Quarkus, au contrat OpenAPI et à la documentation
        destinée aux équipes consommatrices. J’ai conçu une architecture fondée sur
        les patterns \`Strategy\` et \`Factory\`, qui isole la validation propre à
        chaque partenaire et permet d’ajouter de nouvelles intégrations sans
        modifier le flux central.

        Les scopes demandés sont limités aux autorisations accordées au partenaire
        avant l’émission d’un jeton interne uniforme, appliquant ainsi le principe
        du **moindre privilège** aux services en aval. Ce mécanisme est aujourd’hui
        en production et activement utilisé par des produits CGM, avec une frontière
        de sécurité unique et auditable pour les accès entre produits.
      `,
    },
  },
  {
    id: "healthcare-smart-card-dmp-investigation",
    role: {
      en: "Healthcare Smart-Card and DMP Integration Investigation",
      fr: "Étude d’intégration des cartes de santé et du DMP",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "October 2023 – March 2024",
      fr: "Octobre 2023 – Mars 2024",
    },
    description: {
      en: md`
        From October 2023 to March 2024, as an Intermediate Software Engineer at
        CGM, I led the initial technical investigation and working **proof of
        concept** for integrating CPS and Carte Vitale smart-card readers with
        France’s DMP shared medical record system.

        The healthcare platform previously had no way to interact with physical
        card readers or national health-record services, and the integration
        combined workstation-local software, real-time card events, regulated
        transactions, and unfamiliar healthcare protocols.

        I mapped and tested the end-to-end ecosystem, including reader sessions,
        practitioner and patient card access, asynchronous insertion and removal
        events, and key DMP document workflows. I created reproducible Postman
        examples and comprehensive technical documentation, and helped define an
        architecture separating frontend event handling from backend transactional
        operations.

        My role was to make the integration path actionable, not to build the
        final production feature: I delivered working examples, architecture
        diagrams, live demonstrations, knowledge-transfer sessions, and
        implementation support to the delivery teams. Those teams used this
        foundation to complete the production capability, which is now heavily used
        by doctors.
      `,
      fr: md`
        D’octobre 2023 à mars 2024, alors Software Engineer de niveau intermédiaire
        chez CGM, j’ai mené l’investigation technique initiale et réalisé une
        **preuve de concept** fonctionnelle pour intégrer des lecteurs de cartes
        CPS et Carte Vitale au DMP, le dossier médical partagé français.

        La plateforme de santé ne disposait auparavant d’aucun moyen d’interagir
        avec des lecteurs de cartes physiques ou les services nationaux associés.
        Cette intégration combinait un logiciel exécuté sur le poste de travail,
        des événements de cartes en temps réel, des transactions réglementées et
        des protocoles de santé encore inconnus de l’équipe.

        J’ai cartographié et testé l’écosystème de bout en bout : sessions des
        lecteurs, accès aux cartes des professionnels et des patients, détection
        asynchrone de leur insertion ou retrait, et principaux parcours
        documentaires du DMP. J’ai créé des exemples Postman reproductibles et une
        documentation technique complète, puis contribué à définir une architecture
        séparant la gestion des événements côté frontend des opérations
        transactionnelles côté backend.

        Mon rôle consistait à rendre cette intégration concrètement réalisable, et
        non à développer la fonctionnalité de production finale. J’ai livré des
        exemples fonctionnels, des diagrammes d’architecture, des démonstrations,
        des sessions de transfert de connaissances et un accompagnement aux
        équipes de réalisation. Celles-ci se sont appuyées sur ce travail pour
        livrer la fonctionnalité aujourd’hui largement utilisée par les médecins.
      `,
    },
  },
  {
    id: "graph-based-classification-feature-variation",
    role: {
      en: "Graph-Based Classification and Feature Variation",
      fr: "Classification par graphe et gestion des variations",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "June 2023 – September 2023",
      fr: "Juin 2023 – Septembre 2023",
    },
    description: {
      en: md`
        From June to September 2023, as an Intermediate Software Engineer at CGM,
        I helped investigate and implement a **classification system** for a
        multi-country healthcare platform. The platform needed to vary services,
        interface components, and business behavior according to dimensions such
        as country, region, practitioner type, and specialization without
        spreading conditional branches throughout the codebase.

        A colleague and I led the initial technology spike. I evaluated \`Apache
        AGE\` against the previously proposed \`Neo4j\` solution, reproducing the
        critical taxonomy and traversal queries in both technologies. Apache AGE
        retained \`Cypher\`-based graph modeling while running inside the
        platform’s existing PostgreSQL infrastructure, avoiding another database
        technology to deploy and operate.

        After the decision was approved, I contributed substantially to the shared
        Java/Quarkus implementation, documentation, developer guidelines,
        demonstrations, and onboarding support.

        The resulting production system combines graph-based resolution, Redis
        caching, and a Gizmo-powered Quarkus extension that lets services select
        context-appropriate implementations declaratively. It is actively used
        across the platform, supporting multi-country behavior from one codebase
        while keeping variation logic isolated and maintainable.
      `,
      fr: md`
        De juin à septembre 2023, alors Software Engineer de niveau intermédiaire
        chez CGM, j’ai contribué à l’étude et à la mise en œuvre d’un **système de
        classification** pour une plateforme de santé déployée dans plusieurs pays.
        La plateforme devait adapter ses services, ses composants d’interface et
        ses règles métier selon des dimensions telles que le pays, la région, le
        type de praticien et la spécialité, sans multiplier les conditions dans le
        code.

        Avec un collègue, j’ai mené l’étude technique initiale. J’ai évalué \`Apache
        AGE\` face à la solution \`Neo4j\` précédemment envisagée, en reproduisant
        dans les deux technologies les principales requêtes de taxonomie et de
        parcours. Apache AGE conservait la modélisation en graphe et les requêtes
        \`Cypher\` tout en s’intégrant à l’infrastructure PostgreSQL existante,
        évitant ainsi de déployer et d’exploiter une technologie de base de
        données supplémentaire.

        Après validation de ce choix, j’ai contribué activement à l’implémentation
        collective en Java/Quarkus, à la documentation, aux recommandations
        destinées aux développeurs, aux démonstrations et à l’accompagnement des
        équipes.

        Le système en production combine une résolution par graphe, un cache Redis
        et une extension Quarkus fondée sur Gizmo, qui permet aux services de
        sélectionner déclarativement l’implémentation adaptée au contexte. Il est
        activement utilisé sur la plateforme et permet de gérer plusieurs pays
        depuis un même code source tout en maintenant les variations isolées et
        faciles à faire évoluer.
      `,
    },
  },
  {
    id: "digital-credit-platform-internship",
    role: {
      en: "Software Engineer Internship – Digital Credit Platform",
      fr: "Stage d’ingénieur logiciel – Plateforme de crédit numérique",
    },
    organization: "KimiaPay",
    period: {
      en: "March 2021 – July 2021",
      fr: "Mars 2021 – Juillet 2021",
    },
    description: {
      en: md`
        From March to July 2021, during my final-year engineering internship at
        KimiaPay, I served as the Software Engineer Intern and sole technical
        owner within a small startup team. The company wanted to validate a
        digital salary-advance product for employees who had limited access to
        traditional credit, with partner employers participating in request
        approval and repayment assurance.

        The central challenge was architectural: translating a financial product
        with several actors, approval stages, security requirements, and future
        extension needs into a coherent system that one developer could deliver
        within four months.

        I designed a **service-oriented architecture** comprising a cross-platform
        mobile application for borrowers, a web back office for administrators and
        employer monitors, backend business services, and a centralized data layer
        connected through \`REST/JSON\` APIs. I then carried that architecture
        through implementation, testing, and deployment.

        The product included token-based authentication, identity and
        employment-data collection, role-based access, multi-level approval, loan
        tracking, and a complete request lifecycle from submission through
        repayment or dispute. I deliberately selected AppGyver and Backendless to
        accelerate delivery under the project constraints while retaining custom
        JavaScript integrations where needed. The completed product was deployed
        and ready for a pilot phase.
      `,
      fr: md`
        De mars à juillet 2021, dans le cadre de mon stage de fin d’études chez
        KimiaPay, j’ai occupé le poste de stagiaire Software Engineer et assuré
        seul la responsabilité technique au sein d’une petite équipe de startup.
        L’entreprise souhaitait valider un produit numérique d’avance sur salaire
        destiné à des employés ayant un accès limité au crédit traditionnel, avec
        la participation d’employeurs partenaires dans l’approbation des demandes
        et la garantie du remboursement.

        Le principal défi était architectural : transformer un produit financier
        comportant plusieurs acteurs, niveaux de validation, exigences de sécurité
        et besoins d’évolution en un système cohérent qu’un seul développeur
        pouvait livrer en quatre mois.

        J’ai conçu une **architecture orientée services** comprenant une
        application mobile multiplateforme pour les emprunteurs, un back-office web
        pour les administrateurs et les représentants des employeurs, des services
        métier backend et une couche de données centralisée reliés par des API
        \`REST/JSON\`. J’ai ensuite décliné cette architecture jusqu’à
        l’implémentation, aux tests et au déploiement.

        Le produit comprenait une authentification par jeton, la collecte des
        données d’identité et d’emploi, un contrôle d’accès par rôles, une
        validation à plusieurs niveaux, le suivi des prêts et un cycle de vie
        complet des demandes, de leur soumission au remboursement ou au litige.
        J’ai retenu AppGyver et Backendless afin d’accélérer la livraison sous les
        contraintes du projet, tout en utilisant des intégrations JavaScript
        personnalisées lorsque nécessaire. Le produit finalisé a été déployé et
        était prêt pour une phase pilote.
      `,
    },
  },
  {
    id: "quarkus-migration-feasibility-study",
    role: {
      en: "Software Engineering Internship – Quarkus Migration Feasibility Study",
      fr: "Stage en ingénierie logicielle – Étude de faisabilité d’une migration vers Quarkus",
    },
    organization: "Amadeus",
    period: {
      en: "May 2020 – August 2020",
      fr: "Mai 2020 – Août 2020",
    },
    description: {
      en: md`
        From May to August 2020, during my second-year engineering internship at
        Amadeus, I evaluated the feasibility and business value of migrating a
        flight-search application server from Spring/JBoss to Quarkus. The goal was
        *not* to change its business behavior, but to determine how the existing
        application could run on Quarkus and document the implications for future
        migrations.

        Embedded in an agile engineering team, I created the Quarkus-based
        application and investigated compatibility issues involving external
        dependencies, \`CDI\`, unsupported Spring annotations, and class loading.
        Depending on the constraint, I used CDI producers, adapted selected
        components, developed Quarkus extensions, and compared both applications
        side by side in debug mode. I also escalated genuine framework limitations
        to the Quarkus community.

        The migration was intentionally left incomplete when its scope exceeded
        the four-month placement. I instead delivered a **decision-ready technical
        reference** documenting blockers, solutions, trade-offs, and migration
        costs. Early measurements indicated substantial startup improvements, while
        I clearly documented their limitations.

        The study gave Amadeus a reusable basis for evaluating future migrations
        and strengthened my judgment around framework compatibility and migration
        ROI. Working entirely in English within an international team also
        strengthened my professional communication through daily collaboration,
        meetings, technical discussions, and documentation.
      `,
      fr: md`
        De mai à août 2020, lors de mon stage de deuxième année chez Amadeus, j’ai
        évalué la faisabilité et l’intérêt métier de la migration d’un serveur
        d’application de recherche de vols de Spring/JBoss vers Quarkus. L’objectif
        n’était *pas* de modifier son comportement fonctionnel, mais de déterminer
        comment exécuter la même application avec Quarkus et de documenter les
        implications pour de futures migrations.

        Intégré à une équipe d’ingénierie agile, j’ai créé la version Quarkus de
        l’application et étudié des problèmes de compatibilité liés aux dépendances
        externes, à \`CDI\`, aux annotations Spring non prises en charge et au
        chargement des classes. Selon les contraintes, j’ai utilisé des producteurs
        CDI, adapté certains composants, développé des extensions Quarkus et
        comparé les deux applications côte à côte en mode débogage. J’ai également
        remonté à la communauté Quarkus de véritables limites du framework.

        La migration est volontairement restée incomplète lorsque son périmètre a
        dépassé la durée du stage. J’ai plutôt livré un **document technique
        exploitable pour la décision**, recensant les blocages, les solutions, les
        compromis et les coûts de migration. Les premières mesures indiquaient des
        gains importants au démarrage, dont j’ai clairement documenté les limites.

        Cette étude a fourni à Amadeus une base réutilisable pour évaluer de
        futures migrations et a renforcé mon jugement sur la compatibilité des
        frameworks et le retour sur investissement d’une migration. Travailler
        entièrement en anglais au sein d’une équipe internationale a également
        renforcé ma communication professionnelle au quotidien, lors des réunions,
        des échanges techniques et de la rédaction documentaire.
      `,
    },
  },
  {
    id: "computer-lab-monitor-coordinator",
    role: {
      en: "Computer Lab Monitor Coordinator",
      fr: "Responsable des moniteurs des salles informatiques",
    },
    organization: "École Centrale de Lyon",
    period: {
      en: "September 2019 – April 2020",
      fr: "Septembre 2019 – Avril 2020",
    },
    description: {
      en: md`
        From September 2019 to April 2020, I worked as the Computer Lab Monitor
        Coordinator at École Centrale de Lyon. The school opened its computer
        rooms to students at night for study and coursework, when regular staff
        were no longer present. A team of paid student monitors supervised these
        rooms, and I served as their coordinator and the administration’s primary
        contact.

        I collected monitor availability, prepared schedules, handled last-minute
        absences, and balanced monthly hours so the workload and compensation
        remained broadly equitable. I also helped ensure that the rooms were used
        appropriately, responded to user incidents, escalated unresolved problems,
        and kept the administration informed when operational issues arose.

        This role developed my ability to **coordinate people fairly**, maintain
        continuity when plans changed, and act as a reliable link between a team
        and institutional stakeholders.
      `,
      fr: md`
        De septembre 2019 à avril 2020, j’ai été responsable des moniteurs des
        salles informatiques à l’École Centrale de Lyon. L’établissement ouvrait
        ces salles aux étudiants le soir afin qu’ils puissent étudier et travailler
        après le départ du personnel habituel. Une équipe de moniteurs étudiants
        rémunérés assurait leur supervision, et j’en étais le coordinateur ainsi
        que l’interlocuteur principal de l’administration.

        Je recueillais les disponibilités, établissais les plannings, gérais les
        absences de dernière minute et équilibrais les heures mensuelles afin de
        maintenir une répartition aussi équitable que possible du travail et de la
        rémunération. Je veillais également au bon usage des salles, prenais en
        charge les incidents rencontrés par les utilisateurs, transmettais les
        problèmes non résolus et informais l’administration des difficultés
        opérationnelles.

        Cette responsabilité m’a appris à **coordonner une équipe avec équité**, à
        assurer la continuité du service face aux imprévus et à faire le lien entre
        une équipe et une institution.
      `,
    },
  },
  {
    id: "computer-science-reinforcement-instructor",
    role: {
      en: "Computer Science Reinforcement Instructor",
      fr: "Intervenant en renforcement informatique",
    },
    organization: "École Centrale de Lyon",
    period: {
      en: "October 2019 – January 2020",
      fr: "Octobre 2019 – Janvier 2020",
    },
    description: {
      en: md`
        From October 2019 to January 2020, École Centrale de Lyon selected and
        paid me to lead **computer-science reinforcement sessions** for
        engineering students who needed additional support with the school’s
        intensive curriculum. I was chosen based on my computer-science background
        and was responsible for this subject area during that period.

        I prepared lessons and exercises, re-explained difficult concepts,
        reviewed assignments, ran practical workshops, and provided one-to-one
        support. The sessions focused on algorithms taught through \`Python\`,
        \`UML\` and application design, and broader computer-science engineering
        concepts.

        This role taught me to identify where understanding breaks down, adapt an
        explanation to the student rather than repeat the original course, and
        translate technical ideas into clear, practical steps.
      `,
      fr: md`
        D’octobre 2019 à janvier 2020, l’École Centrale de Lyon m’a sélectionné et
        rémunéré pour animer des **séances de renforcement en informatique** auprès
        d’élèves ingénieurs ayant besoin d’un accompagnement supplémentaire face au
        rythme soutenu du cursus. J’ai été choisi en raison de mon parcours en
        informatique et chargé de cette discipline pendant cette période.

        Je préparais les cours et les exercices, reprenais les notions mal
        comprises, corrigeais les travaux, animais des ateliers pratiques et
        proposais un accompagnement individuel. Les séances portaient
        principalement sur l’algorithmique avec \`Python\`, \`UML\` et la conception
        d’applications, ainsi que sur des notions plus générales d’ingénierie
        informatique.

        Cette responsabilité m’a appris à repérer l’origine d’une difficulté, à
        adapter mes explications à chaque étudiant plutôt qu’à répéter le cours
        initial, et à rendre des concepts techniques clairs et concrets.
      `,
    },
  },
  {
    id: "collaborative-skills-sharing-platform-internship",
    role: {
      en: "Software Developer Internship – Collaborative Skills-Sharing Platform",
      fr: "Stage de développement logiciel – Plateforme collaborative de partage de compétences",
    },
    organization: "SUITE",
    period: {
      en: "June 2017 – July 2017",
      fr: "Juin 2017 – Juillet 2017",
    },
    description: {
      en: md`
        From June to July 2017, during my DUT internship at SUITE, I worked as a
        Software Developer Intern and sole developer of a collaborative mobile
        application for sharing and learning practical skills and hobbies. The
        product aimed to make niche and local know-how easier to discover through
        training content, help requests, service offers, and online or in-person
        events.

        I owned the mobile work from requirements analysis through architecture
        and implementation. I modeled the user roles and domain with \`UML\`, then
        built the cross-platform application in \`React Native\` and integrated it
        with an existing \`Django REST Framework\` API provided by the SUITE team.
        The client consumed REST/JSON endpoints and supported distinct visitor,
        learner, trainer, and administrator capabilities.

        By the end of the internship, I had implemented and presented the core
        mobile views and end-to-end flows, including browsing training content,
        authentication, posting help requests, and publishing trainings, events,
        and offers. This was my first substantial experience owning a **mobile
        product lifecycle**, from object-oriented design and technology selection
        to API integration and product demonstration.
      `,
      fr: md`
        De juin à juillet 2017, lors de mon stage de DUT chez SUITE, j’ai occupé
        le poste de stagiaire développeur logiciel et développé seul une
        application mobile collaborative consacrée au partage et à l’apprentissage
        de compétences pratiques et de loisirs. Le produit visait à faciliter la
        découverte de savoir-faire spécialisés ou locaux grâce à des contenus de
        formation, des demandes d’aide, des offres de service et des événements en
        ligne ou en présentiel.

        J’ai pris en charge le volet mobile, de l’analyse des besoins à
        l’architecture et à l’implémentation. J’ai modélisé les rôles et le domaine
        avec \`UML\`, puis développé l’application multiplateforme en \`React
        Native\` et l’ai intégrée à une API \`Django REST Framework\` existante,
        fournie par l’équipe SUITE. Le client consommait des endpoints REST/JSON
        et proposait des fonctionnalités distinctes pour les visiteurs, les
        apprenants, les formateurs et les administrateurs.

        À la fin du stage, j’avais implémenté et présenté les principales vues
        mobiles et les parcours de bout en bout, notamment la consultation des
        formations, l’authentification, la publication de demandes d’aide ainsi que
        la création de formations, d’événements et d’offres. Cette expérience a été
        ma première prise en charge significative du **cycle de développement d’un
        produit mobile**, de la conception orientée objet et du choix des
        technologies à l’intégration d’API et à la démonstration du produit.
      `,
    },
  },
];
