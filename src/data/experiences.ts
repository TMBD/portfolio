import type { Experience } from "./types";
import { md } from "./md";

/**
 * Work experience — newest first. `featured` entries appear in the home
 * "Top Experiences" preview.
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
        As **AI coding agents** became part of daily work, their rapid adoption
        exposed inconsistent quality, duplicated effort, and the absence of
        shared standards. In response, I led the creation of a common framework
        for the team.

        I authored a governance model that settles the essential questions: who
        owns a skill, how contributions are reviewed, how each one is tested
        independently and released in preview first, how skills compose, how
        activation rules keep two of them from competing for the same request,
        and what quality thresholds are expected before anything is shared. To
        make evaluation repeatable and objective, I designed a weighted scoring
        rubric and implemented a deterministic Python tool that scores skills and
        workflows, flags critical issues, and ranks improvements by impact.

        I also built reusable agent skills the team could compose — Jira issue
        management, GitLab pipelines and merge requests, local Git operations,
        feature-environment resolution, automated quality evaluation, and
        Kubernetes diagnostics restricted to read-only investigation, so an agent
        can help diagnose a cluster without being able to change it. Two
        orchestration workflows combine those skills into structured
        troubleshooting and evaluation processes, each with an explicit contract,
        declared dependencies, safety guardrails, and defined failure handling.

        The framework is used across the team. I still review contributions, help
        colleagues build and debug their own workflows, unblock them when an
        agent or a tool integration misbehaves, and adjust the model as feedback
        comes in.
      `,
      fr: md`
        L’arrivée des **agents IA de développement** dans notre quotidien a
        rapidement fait apparaître une qualité inégale, des efforts dupliqués et
        l’absence de standards communs. Pour y remédier, j’ai piloté la création
        d’un cadre commun pour l’équipe.

        J’ai défini un modèle de gouvernance qui répond aux questions
        essentielles : qui est responsable d’un skill, comment les contributions
        sont revues, comment chacun est testé indépendamment puis diffusé d’abord
        en préversion, comment les skills se composent, comment les règles
        d’activation évitent que deux d’entre eux se disputent la même demande, et
        quels seuils de qualité sont attendus avant tout partage. Pour rendre
        l’évaluation reproductible et objective, j’ai conçu une grille de notation
        pondérée et développé un outil déterministe en Python qui note les skills
        et les workflows, signale les problèmes critiques et classe les
        améliorations selon leur impact.

        J’ai également créé des skills réutilisables que l’équipe peut combiner :
        gestion des tickets Jira, pipelines et merge requests GitLab, opérations
        Git locales, identification des environnements de fonctionnalités,
        évaluation automatisée de la qualité, et diagnostic Kubernetes limité à
        l’investigation en lecture seule, afin qu’un agent puisse aider à
        diagnostiquer un cluster sans pouvoir le modifier. Deux workflows
        d’orchestration combinent ces skills dans des processus structurés de
        diagnostic et d’évaluation, chacun avec un contrat explicite, des
        dépendances déclarées, des garde-fous de sécurité et une gestion des
        échecs définie.

        Ce cadre est utilisé par l’équipe. Je continue à évaluer les
        contributions, à aider mes collègues à créer et déboguer leurs propres
        workflows, à les débloquer lorsqu’un agent ou une intégration d’outil se
        comporte mal, et à faire évoluer le modèle au fil des retours.
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
        Company-wide **Single Sign-On** was the next step for a multi-tenant
        healthcare SaaS platform used in several countries. I designed and
        implemented the enterprise identity-provider integration end to end. The
        decision that shaped everything else was to delegate authentication while
        keeping roles, permissions, and organizational access under the
        platform’s control, and without removing the existing
        username-and-password login.

        I owned the architecture, the security model, the Java/Quarkus
        implementation, the coordination with stakeholders, and the technical
        documentation. The integration uses the OIDC Authorization Code Flow with
        \`PKCE\` and Pushed Authorization Requests, with state and nonce
        validation.

        Most of the difficulty was in what happens after the login. I designed
        server-side management of authentication state and external tokens,
        including refresh and cleanup tied to the session lifecycle, and a
        provider-agnostic identity-mapping model that refuses ambiguous account
        matches. I also solved callback routing for dynamic test environments
        without weakening redirect validation.

        The integration is now in production and actively used by healthcare
        professionals, providing secure federated authentication while preserving
        internal authorization boundaries.
      `,
      fr: md`
        L’**authentification unique** à l’échelle du groupe représentait l’étape
        suivante pour une plateforme SaaS de santé multi-tenant utilisée dans
        plusieurs pays. J’ai conçu et implémenté de bout en bout l’intégration
        d’un fournisseur d’identité d’entreprise. La décision qui a structuré tout
        le reste a été de déléguer l’authentification tout en conservant la
        gestion des rôles, des autorisations et des périmètres organisationnels au
        sein de la plateforme, et sans supprimer le mode de connexion existant par
        identifiant et mot de passe.

        J’ai pris en charge l’architecture, le modèle de sécurité,
        l’implémentation Java/Quarkus, la coordination avec les parties prenantes
        et la documentation technique. L’intégration utilise le flux OIDC
        Authorization Code avec \`PKCE\` et les Pushed Authorization Requests,
        ainsi que la validation de state et de nonce.

        L’essentiel de la difficulté se situait après la connexion. J’ai conçu la
        gestion côté serveur de l’état d’authentification et des jetons externes,
        notamment leur renouvellement et leur suppression synchronisée avec le
        cycle de vie de la session, ainsi qu’un modèle d’association des identités
        indépendant du fournisseur qui refuse les correspondances ambiguës. J’ai
        également résolu le routage des callbacks pour des environnements de test
        dynamiques sans assouplir la validation des URI de redirection.

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
        Third-party integrations did not all use the same connection settings:
        endpoints varied by deployment environment and by user profile, and the
        configuration was scattered across files and application code. Routing a
        test or pilot user to a non-production endpoint, while healthcare
        professionals kept using the production one, usually meant a code change
        and a redeployment — with no simple way to make an exception for a single
        user.

        I took ownership of replacing that with a **three-tier resolution model**,
        evaluated for each user and each integration: a value set for a specific
        user wins over the integration’s own strategy, which in turn wins over the
        database-managed default. Endpoint routing was only the trigger, though —
        I designed the service around the general case, defining any configuration
        whose value depends on who the user is: their attributes, their profile,
        or whatever criterion a given integration needs.

        I designed the JPA data model, implemented the Java/Quarkus service and
        its API, and documented the architecture in a formal design document (an
        RFC) with technical diagrams. \`Strategy\` and \`Factory\` patterns keep
        each integration’s rules in its own place, so adding one does not mean
        touching the resolution flow.

        Endpoint changes and individual exceptions are now configuration rather
        than deployments. The system runs in production today.
      `,
      fr: md`
        Les intégrations tierces n’utilisaient pas toutes les mêmes paramètres de
        connexion : les points d’accès variaient selon l’environnement de
        déploiement et le profil de l’utilisateur, et la configuration
        correspondante était dispersée entre plusieurs fichiers et le code
        applicatif. Orienter un utilisateur de test ou pilote vers un point
        d’accès hors production, tout en maintenant les professionnels de santé
        sur celui de production, imposait le plus souvent une modification du code
        et un redéploiement — sans moyen simple de définir une exception pour un
        seul utilisateur.

        J’ai pris en charge le remplacement de ce fonctionnement par un **modèle
        de résolution à trois niveaux**, évalué pour chaque utilisateur et chaque
        intégration : une valeur définie pour un utilisateur précis l’emporte sur
        la stratégie propre à l’intégration, qui l’emporte elle-même sur la valeur
        par défaut gérée en base de données. Le routage des points d’accès n’était
        toutefois que le déclencheur : j’ai conçu le service pour le cas général,
        c’est-à-dire définir n’importe quelle configuration dont la valeur dépend de
        l’utilisateur — ses attributs, son profil ou tout autre critère utile à
        une intégration.

        J’ai conçu le modèle de données JPA, implémenté le service et l’API en
        Java/Quarkus, et documenté l’architecture dans un document de conception
        formel (une RFC) accompagné de diagrammes techniques. Les patterns
        \`Strategy\` et \`Factory\` isolent les règles propres à chaque intégration,
        si bien qu’en ajouter une ne demande pas de toucher au flux de résolution.

        Les changements de points d’accès et les exceptions individuelles
        relèvent désormais de la configuration, et non du déploiement. Le système
        est utilisé en production.
      `,
    },
  },
  {
    id: "zero-downtime-storage-migration-to-azure",
    role: {
      en: "Zero-Downtime Storage Migration to Azure",
      fr: "Migration du stockage vers Azure sans interruption de service",
    },
    organization: "CompuGroup Medical (CGM)",
    period: {
      en: "February 2025 – November 2025",
      fr: "Février 2025 – Novembre 2025",
    },
    description: {
      en: md`
        Every clinical document on the platform passes through a single storage
        service, originally backed by self-hosted MinIO and one of the services I
        had helped build. When the company moved the platform to Azure, a
        colleague and I took on the storage workstream. Doctors use the product
        during their consultation hours, so there was no maintenance window long
        enough to move every document at once. The migration had to run with the
        platform live, and without losing a single file.

        Rather than a single cutover, we made the service talk to both backends at
        once and moved the routing decision into the database: each MinIO tenant
        record pointed to the Azure tenant replacing it, and each clinic’s bucket
        pointed to whichever tenant physically held it. Migrating a bucket became
        a database update instead of a deployment, and a **feature toggle** could
        send all traffic back to MinIO instantly, since nothing had been deleted
        there — precisely to preserve backward compatibility.

        I wrote the Python migration tooling, run as a Kubernetes job: parallel
        copying, a bookkeeping table that made every run resumable, and object
        counts compared on both sides before any routing record was repointed —
        copy, verify, then switch. We ran it outside consultation hours, migrating
        a set of buckets, stopping, and later picking up where we had left off. I
        also wrote the backward-compatible read and write paths that let the two
        backends coexist while buckets moved across one by one.

        The workstream ran for about nine months, from design through to the final
        cutover, with no downtime and no data loss. Once production had been
        stable on Azure, I owned the cleanup that removed the old implementation,
        its toggle, provisioning scripts, and dependencies — the temporary
        scaffolding had been marked for deletion when it was written, and it was
        actually deleted.
      `,
      fr: md`
        Tous les documents cliniques de la plateforme passent par un unique
        service de stockage, initialement adossé à une instance MinIO
        auto-hébergée que j’avais contribué à développer. Lorsque l’entreprise a
        migré la plateforme vers Azure, un collègue et moi avons pris en charge le
        volet stockage. Les médecins utilisent le produit pendant leurs journées
        de consultation : il n’y avait donc pas de fenêtre de maintenance
        suffisante pour migrer tous les documents en une fois. La migration devait
        se faire plateforme en fonctionnement, sans perdre un seul fichier.

        Plutôt qu’une bascule unique, nous avons rendu le service capable de
        dialoguer avec les deux systèmes de stockage en même temps, et déplacé la
        décision de routage dans la base de données : chaque tenant MinIO pointait
        vers le tenant Azure qui le remplaçait, et le bucket de chaque cabinet
        pointait vers celui qui le détenait physiquement. Migrer un bucket
        devenait une mise à jour en base plutôt qu’un déploiement, et un **feature
        toggle** permettait de renvoyer instantanément tout le trafic vers MinIO,
        puisque rien n’y avait été supprimé, précisément pour assurer la
        rétrocompatibilité.

        J’ai développé l’outillage de migration en Python, exécuté comme job
        Kubernetes : copie parallélisée, table de suivi rendant chaque exécution
        reprenable, et comparaison du nombre d’objets des deux côtés avant tout
        basculement du routage : copier, vérifier, puis basculer. Nous le lancions
        en dehors des heures de consultation, migrant un ensemble de buckets, puis
        nous arrêtions et reprenions plus tard là où nous nous étions arrêtés.
        J’ai également écrit les chemins de lecture et d’écriture rétrocompatibles
        permettant aux deux systèmes de coexister pendant que les buckets
        basculaient un à un.

        Le chantier s’est étendu sur environ neuf mois, de la conception à la
        bascule finale, sans interruption de service ni perte de données. Une fois
        la production stabilisée sur Azure, j’ai pris en charge le nettoyage :
        suppression de l’ancienne implémentation, du feature toggle, des scripts
        de provisionnement et des dépendances. Le code temporaire avait été
        explicitement marqué pour suppression au moment de son écriture, et il a
        bien été supprimé.
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
        CGM products in several countries needed to reuse selected platform
        services on behalf of users who were already authenticated, without
        asking them to sign in again — and without the platform having to
        understand several external token formats. I designed and implemented an
        OAuth 2.0 Token Exchange capability end to end to bridge that gap.

        I built it on the OAuth 2.0 Token Exchange standard (\`RFC 8693\`) and
        owned the full lifecycle: protocol architecture, security design, the
        Java/Quarkus implementation, the OpenAPI contract, and the documentation
        consumers rely on. Each partner’s token validation sits behind the same
        interface, so the platform can accept several external issuers while the
        exchange flow itself stays unaware of any of them.

        Requested scopes are constrained by the partner’s own permissions before
        a uniform internal token is issued, so a partner product can only reach
        the services it is registered for — **least privilege**, enforced at the
        boundary rather than in each downstream service.

        The capability is used in production by CGM products, giving
        cross-product service access a single, auditable security boundary.
      `,
      fr: md`
        Des produits CGM utilisés dans plusieurs pays devaient réutiliser certains
        services de la plateforme au nom d’utilisateurs déjà authentifiés, sans
        leur imposer une nouvelle connexion et sans que la plateforme ait à
        comprendre plusieurs formats de jetons externes. J’ai conçu et implémenté
        de bout en bout un mécanisme d’échange de jetons OAuth 2.0 pour établir ce
        pont.

        Je me suis appuyé sur le standard OAuth 2.0 Token Exchange (\`RFC 8693\`)
        et j’ai pris en charge l’ensemble du cycle de réalisation : architecture du
        protocole, modèle de sécurité, implémentation Java/Quarkus, contrat
        OpenAPI et documentation destinée aux équipes consommatrices. La
        validation des jetons propre à chaque partenaire est isolée derrière une
        même interface, si bien que la plateforme peut accepter plusieurs
        émetteurs externes sans que le flux d’échange ait à les connaître.

        Les scopes demandés sont limités aux autorisations accordées au partenaire
        avant l’émission d’un jeton interne uniforme : un produit partenaire
        n’atteint que les services pour lesquels il est enregistré — le **moindre
        privilège**, appliqué à la frontière plutôt que dans chaque service en
        aval.

        Le mécanisme est utilisé en production par des produits CGM et offre aux
        accès entre produits une frontière de sécurité unique et auditable.
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
        French healthcare smart cards and the DMP — the national shared medical
        record — opened an entirely new integration surface for the platform:
        physical card readers, software running on the practitioner’s
        workstation, real-time card events, regulated transactions, and
        healthcare protocols nobody on the team had worked with before.

        I led the initial technical investigation and built a working **proof of
        concept** covering the CPS professional card, the patient Carte Vitale,
        and the main DMP document workflows.

        I mapped and tested the ecosystem end to end: reader sessions,
        practitioner and patient card access, asynchronous insertion and removal
        events, and the document exchanges the DMP requires. I produced
        reproducible Postman examples and technical documentation, and helped
        define an architecture that separates frontend event handling from backend
        transactional operations.

        My role was to make the integration path actionable, not to build the
        final production feature. I delivered working examples, architecture
        diagrams, live demonstrations, knowledge-transfer sessions, and
        implementation support to the delivery teams, who built on it to complete
        the capability doctors use heavily today.
      `,
      fr: md`
        Les cartes de santé françaises et le DMP — le dossier médical partagé
        national — ouvraient un champ d’intégration entièrement nouveau pour la
        plateforme : lecteurs physiques, logiciel exécuté sur le poste du
        praticien, événements de cartes en temps réel, transactions réglementées
        et protocoles de santé que personne dans l’équipe n’avait encore
        manipulés.

        J’ai mené l’investigation technique initiale et réalisé une **preuve de
        concept** fonctionnelle couvrant la carte CPS du professionnel, la Carte
        Vitale du patient et les principaux parcours documentaires du DMP.

        J’ai cartographié et testé l’écosystème de bout en bout : sessions des
        lecteurs, accès aux cartes des professionnels et des patients, détection
        asynchrone de leur insertion ou de leur retrait, et échanges de documents
        exigés par le DMP. J’ai produit des exemples Postman reproductibles et une
        documentation technique, et contribué à définir une architecture séparant
        la gestion des événements côté frontend des opérations transactionnelles
        côté backend.

        Mon rôle consistait à rendre cette intégration concrètement réalisable,
        non à développer la fonctionnalité de production finale. J’ai livré des
        exemples fonctionnels, des diagrammes d’architecture, des démonstrations,
        des sessions de transfert de connaissances et un accompagnement aux
        équipes de réalisation, qui s’en sont servies pour livrer la fonctionnalité
        aujourd’hui largement utilisée par les médecins.
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
        A single healthcare codebase had to vary services, interface components,
        and business behavior by country, region, practitioner type, and
        specialization — without turning into a maze of conditional branches. I
        helped investigate and implement the **classification system** built to
        solve that.

        A colleague and I led the initial technology spike. I evaluated \`Apache
        AGE\` against the previously proposed \`Neo4j\`, reproducing the critical
        taxonomy and graph-traversal queries in both. Apache AGE kept the same
        \`Cypher\`-based graph modeling, but ran inside the PostgreSQL
        infrastructure the platform already operated — so the team got the graph
        capabilities it needed without adding a second database to deploy,
        monitor, and back up.

        Once the decision was approved, I contributed substantially to the shared
        Java/Quarkus implementation, and to the documentation, developer
        guidelines, demonstrations, and onboarding that made it usable by other
        teams.

        The production system combines graph-based resolution and Redis caching
        that lets a service declare which variant it needs instead of branching
        on context. It runs across the platform today,
        supporting several countries from one codebase while keeping variation
        logic in one place.
      `,
      fr: md`
        Un même code source devait adapter les services, les composants
        d’interface et les règles métier de la plateforme selon le pays, la
        région, le type de praticien et la spécialité — sans devenir un
        enchevêtrement de conditions. J’ai contribué à l’étude et à la mise en
        œuvre du **système de classification** conçu pour y répondre.

        Avec un collègue, j’ai mené l’étude technique initiale. J’ai évalué
        \`Apache AGE\` face à la solution \`Neo4j\` précédemment envisagée, en
        reproduisant dans les deux technologies les principales requêtes de
        taxonomie et de parcours de graphe. Apache AGE conservait la même
        modélisation en graphe et les mêmes requêtes \`Cypher\`, mais s’exécutait
        dans l’infrastructure PostgreSQL déjà exploitée par la plateforme :
        l’équipe obtenait ainsi les fonctionnalités de graphe recherchées sans avoir à
        déployer, superviser et sauvegarder une seconde base de données.

        Après validation de ce choix, j’ai contribué activement à l’implémentation
        collective en Java/Quarkus, ainsi qu’à la documentation, aux
        recommandations destinées aux développeurs, aux démonstrations et à
        l’accompagnement qui ont rendu le système utilisable par les autres
        équipes.

        Le système en production combine une résolution par graphe et un cache Redis
        qui permet à un service de déclarer la variante dont il a besoin
        au lieu de multiplier les conditions. Il est utilisé sur
        toute la plateforme et permet de gérer plusieurs pays depuis un même code
        source, en gardant la logique de variation à un seul endroit.
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
        KimiaPay wanted to validate a digital salary-advance product for employees
        with limited access to traditional credit, where partner employers would
        take part in approving requests and guaranteeing repayment. I was the sole
        technical owner within a startup team, during my final-year engineering
        internship.

        The central challenge was architectural: turning a financial product with
        several actors, approval stages, security requirements, and room to grow
        into a coherent system that one developer could deliver in four months.

        I designed a **service-oriented architecture** that includes a cross-platform
        mobile application for borrowers, a web back office for administrators and
        employer representatives, backend business services, and a centralized
        data layer connected through \`REST/JSON\` APIs. I then carried that
        architecture through implementation, testing, and deployment.

        The product covered token-based authentication, identity and
        employment-data collection, role-based access, multi-level approval, loan
        tracking, and the full lifecycle of a request from submission through
        repayment or dispute. I selected AppGyver and Backendless to accelerate
        delivery under the project’s constraints, and wrote custom JavaScript
        where needed. The finished product was deployed, ready for a pilot phase.
      `,
      fr: md`
        KimiaPay souhaitait valider un produit numérique d’avance sur salaire
        destiné à des employés ayant un accès limité au crédit traditionnel, où
        des employeurs partenaires participaient à l’approbation des demandes et à
        la garantie du remboursement. J’étais le seul responsable technique au
        sein d’une équipe de startup, pendant mon stage de fin d’études.

        Le principal défi était architectural : transformer un produit financier
        comportant plusieurs acteurs, plusieurs niveaux de validation, des
        exigences de sécurité et des besoins d’évolution en un système cohérent
        qu’un seul développeur pouvait livrer en quatre mois.

        J’ai conçu une **architecture orientée services** comprenant une
        application mobile multiplateforme pour les emprunteurs, un back-office
        web pour les administrateurs et les représentants des employeurs, des
        services métier backend et une couche de données centralisée reliés par
        des API \`REST/JSON\`. J’ai ensuite décliné cette architecture jusqu’à
        l’implémentation, aux tests et au déploiement.

        Le produit couvrait l’authentification par jeton, la collecte des données
        d’identité et d’emploi, un contrôle d’accès par rôles, une validation à
        plusieurs niveaux, le suivi des prêts et le cycle de vie complet d’une
        demande, de sa soumission au remboursement ou au litige. J’ai retenu
        AppGyver et Backendless afin d’accélérer la livraison sous les contraintes
        du projet, et écrit du JavaScript sur mesure lorsque nécessaire. Le
        produit finalisé a été déployé, prêt pour une phase pilote.
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
        Amadeus wanted to know whether migrating a flight-search application
        server from Spring/JBoss to Quarkus was technically feasible and worth the
        investment. My second-year engineering internship was that evaluation. The
        goal was *not* to change the application’s business behavior, but to
        determine how it could run on Quarkus and document the implications for
        future migrations.

        Embedded in an agile engineering team, I built the Quarkus version of the
        application and investigated the compatibility issues it surfaced:
        external dependencies, \`CDI\`, unsupported Spring annotations, and class
        loading. Depending on the constraint, I used CDI producers, adapted
        selected components, wrote Quarkus extensions, or ran both applications
        side by side in debug mode to find where they diverged. I also reported
        genuine framework limitations to the Quarkus community.

        The migration was intentionally left incomplete once its scope exceeded
        the four-month placement. What I delivered instead was a **decision-ready
        technical reference**: the blockers encountered, the solutions found, the
        trade-offs made, and the migration costs to expect. Early measurements
        pointed to substantial startup improvements, whose limitations I
        documented clearly.

        Amadeus was left with a reusable basis for evaluating future migrations,
        and I came away with a much better sense of framework compatibility and of
        what a migration really involves: how to assess one, plan it, and carry it
        out without taking unnecessary risks. Working entirely in English in an
        international team — daily collaboration, meetings, technical discussions,
        documentation — also strengthened my professional communication.
      `,
      fr: md`
        Amadeus souhaitait déterminer si la migration d’un serveur d’application
        de recherche de vols de Spring/JBoss vers Quarkus était techniquement
        réalisable et justifiée par sa valeur métier. Mon stage de deuxième année
        était consacré à cette évaluation. L’objectif n’était *pas* de modifier le
        comportement fonctionnel de l’application, mais de déterminer comment
        l’exécuter avec Quarkus et de documenter les implications pour de futures
        migrations.

        Intégré à une équipe d’ingénierie agile, j’ai construit la version Quarkus
        de l’application et étudié les problèmes de compatibilité qu’elle faisait
        apparaître : dépendances externes, \`CDI\`, annotations Spring non prises
        en charge et chargement des classes. Selon les contraintes, j’ai utilisé
        des producteurs CDI, adapté certains composants, développé des extensions
        Quarkus ou comparé les deux applications côte à côte en mode débogage pour
        repérer où elles divergeaient. J’ai également remonté à la communauté
        Quarkus de véritables limites du framework.

        La migration est volontairement restée incomplète dès lors que son
        périmètre a dépassé la durée du stage. J’ai livré à la place un **document
        technique exploitable pour la décision** : blocages rencontrés, solutions
        trouvées, arbitrages effectués et coûts de migration à envisager. Les
        premières mesures indiquaient des gains importants au démarrage, dont j’ai
        clairement documenté les limites.

        Amadeus disposait ainsi d’une base réutilisable pour évaluer de futures
        migrations, et j’en suis sorti avec une bien meilleure compréhension de la
        compatibilité des frameworks et de ce qu’implique réellement une
        migration : comment l’évaluer, la préparer et la mener en limitant les
        risques. Travailler entièrement en anglais au sein d’une équipe
        internationale — collaboration quotidienne, réunions, échanges techniques,
        documentation — a également renforcé ma communication professionnelle.
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
        École Centrale de Lyon’s intensive curriculum sometimes left students
        needing more time, and another way into difficult concepts. Because of my
        computer-science background, the school selected and paid me to run the
        **computer-science reinforcement sessions**.

        I prepared lessons and exercises, re-explained the concepts that had not
        landed, reviewed assignments, ran practical workshops, and gave one-to-one
        support. The sessions covered algorithms through \`Python\`, \`UML\` and
        application design, and the broader computer-science ideas the curriculum
        assumed.

        Teaching a concept twice the same way rarely works. Most of the job was
        finding where a student’s understanding had broken, then explaining it
        in another way.
      `,
      fr: md`
        Le rythme soutenu du cursus de l’École Centrale de Lyon laissait parfois
        certains élèves avec le besoin de plus de temps et d’une autre manière
        d’aborder les notions difficiles. En raison de mon parcours en
        informatique, l’établissement m’a sélectionné et rémunéré pour animer les
        **séances de renforcement en informatique**.

        Je préparais les cours et les exercices, reprenais les notions mal
        comprises, corrigeais les travaux, animais des ateliers pratiques et
        proposais un accompagnement individuel. Les séances portaient sur
        l’algorithmique avec \`Python\`, \`UML\` et la conception d’applications,
        ainsi que sur les notions d’ingénierie informatique que le cursus
        supposait acquises.

        Réexpliquer une notion de la même façon ne fonctionne presque jamais.
        L’essentiel du travail consistait à repérer où la compréhension avait
        lâché, puis à reprendre l’explication par un autre chemin.
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
        École Centrale de Lyon kept its computer rooms open at night so students
        could work after the regular staff had left. A team of paid student
        monitors supervised them, and I coordinated that team and acted as the
        administration’s main contact.

        I collected availability, built the schedules, covered last-minute
        absences, and balanced monthly hours so that work and pay stayed broadly
        even across the team. I also watched over how the rooms were used, handled
        incidents reported by students, passed on what I could not resolve, and
        kept the administration informed when something went wrong.

        The job came down to **keeping a schedule fair and the rooms open** when
        plans changed at short notice, and to being the person both the team and
        the school could call.
      `,
      fr: md`
        L’École Centrale de Lyon maintenait ses salles informatiques ouvertes le
        soir afin que les étudiants puissent travailler après le départ du
        personnel habituel. Une équipe de moniteurs étudiants rémunérés en
        assurait la supervision ; je coordonnais cette équipe et j’étais
        l’interlocuteur principal de l’administration.

        Je recueillais les disponibilités, établissais les plannings, gérais les
        absences de dernière minute et équilibrais les heures mensuelles afin que
        le travail et la rémunération restent aussi équitables que possible. Je
        veillais également au bon usage des salles, prenais en charge les
        incidents signalés par les utilisateurs, transmettais ce que je ne pouvais
        pas résoudre et informais l’administration en cas de difficulté.

        Le poste consistait surtout à **maintenir un planning équitable et un
        service ouvert** malgré les imprévus, et à être la personne que l’équipe
        comme l’école pouvaient appeler.
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
        SUITE was exploring a collaborative mobile application that would make
        niche and local know-how easier to share and find, through training
        content, help requests, service offers, and events online or in person.
        During my DUT internship, I was the sole developer of the mobile client.

        I owned that work from requirements analysis through architecture and
        implementation. I modeled the user roles and the domain with \`UML\`, built
        the cross-platform application in \`React Native\`, and integrated it with
        an existing \`Django REST Framework\` API provided by the SUITE team. The
        client consumed \`REST/JSON\` endpoints and offered distinct features for
        visitors, learners, trainers, and administrators.

        By the end of the internship I had implemented and presented the core
        screens and end-to-end flows — browsing training content, authentication,
        posting help requests, and publishing trainings, events, and offers. That
        was my first **mobile product** taken end to end: choosing the technology,
        modeling the domain, integrating an API I did not write, and demonstrating
        the result.
      `,
      fr: md`
        SUITE explorait une application mobile collaborative destinée à faciliter
        le partage et la découverte de savoir-faire spécialisés ou locaux, à
        travers des contenus de formation, des demandes d’aide, des offres de
        service et des événements en ligne ou en présentiel. Pendant mon stage de
        DUT, j’étais le seul développeur du client mobile.

        J’ai pris en charge ce volet, de l’analyse des besoins à l’architecture et
        à l’implémentation. J’ai modélisé les rôles et le domaine avec \`UML\`,
        développé l’application multiplateforme en \`React Native\` et l’ai
        intégrée à une API \`Django REST Framework\` existante, fournie par
        l’équipe SUITE. Le client consommait des endpoints \`REST/JSON\` et
        proposait des fonctionnalités distinctes pour les visiteurs, les
        apprenants, les formateurs et les administrateurs.

        À la fin du stage, j’avais implémenté et présenté les principaux écrans
        et les parcours de bout en bout : consultation des formations,
        authentification, publication de demandes d’aide, de formations,
        d’événements et d’offres. C’était mon premier **produit mobile** mené de
        bout en bout : choix de la technologie, modélisation du domaine,
        intégration d’une API que je n’avais pas écrite, et démonstration du
        résultat.
      `,
    },
  },
];
