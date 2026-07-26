---
title: "Apache AGE vs. Neo4j : choisir une technologie de graphe sans ajouter une autre base de données"
description: "Comment j’ai évalué deux approches du graphe, et pourquoi le bon choix d’architecture dépend de bien plus que des seules fonctionnalités."
pubDate: "2026-07-26"
lang: "fr"
tags: ["architecture", "bases de données", "postgresql", "graphes"]
translationKey: "apache-age-vs-neo4j"
---

Une nouvelle base de données arrive rarement seule.

Elle apporte avec elle les sauvegardes, la supervision, le contrôle d’accès,
les mises à niveau, les procédures de gestion des incidents, la configuration
des environnements de développement et tout un nouvel ensemble de scénarios de
défaillance. C’est la partie qu’un diagramme d’architecture résume généralement
par un joli cylindre bien ordonné.

Je devais garder cette vision d’ensemble à l’esprit lorsque j’ai évalué une
technologie de graphe pour une plateforme backend. Le problème se prêtait
réellement à une modélisation en graphe, et Neo4j était un candidat évident. Il
est conçu pour les graphes, son langage de requête est expressif et ses outils
traitent les relations comme des concepts de premier plan plutôt que comme une
fonctionnalité ajoutée après coup.

Mais la plateforme reposait déjà sur PostgreSQL. La vraie question n’était donc
pas simplement :

> Quelle technologie peut exécuter des requêtes sur un graphe ?

Les deux le pouvaient.

La question la plus utile était plutôt :

> Ce problème justifie-t-il d’introduire et d’exploiter une base de données
> supplémentaire, ou pouvons-nous ajouter proprement les capacités de graphe à
> celle que nous maîtrisons déjà ?

C’est ce qui m’a conduit à comparer Neo4j à Apache AGE, une extension PostgreSQL
qui ajoute des fonctionnalités de graphe et des requêtes openCypher. Il n’y a pas
eu de vainqueur universel. La décision dépendait de la charge de travail, de la
plateforme existante et des responsabilités que l’équipe était prête à assumer.

Cet article explique comment j’ai abordé cette décision et ce que j’examinerais
avant de la prendre à nouveau. La démarche vient d’une véritable étude
technique. L’exemple de catalogue de formations ci-dessous est fictif, et j’ai
volontairement écarté les règles propres à l’entreprise ainsi que les détails
d’implémentation.

## Le problème ressemblait à un graphe avant de ressembler à une base de données

Imaginons un catalogue de formations en ligne. Un cours peut être classé dans un
ou plusieurs thèmes, et chaque thème peut lui-même appartenir à un thème plus
large :

```text
Graph Databases -> Databases -> Data Engineering -> Software Engineering
```

Un apprenant ouvre la page « Data Engineering ». L’application doit trouver non
seulement les cours directement classés sous ce thème, mais aussi ceux rattachés
à tous les thèmes qui en dépendent. La hiérarchie peut comporter plusieurs
niveaux et évoluer avec le temps.

Ce problème se traduit naturellement sous la forme d’un graphe de propriétés :

- Un `Course` est un nœud.
- Un `Topic` est un nœud.
- `CLASSIFIED_AS` relie un cours à un thème.
- `IS_A` relie un thème à son parent.
- Des propriétés telles que `code`, `title` et `name` décrivent ces nœuds.

Dans un graphe de propriétés, les nœuds représentent les entités, les relations
les relient et tous deux peuvent porter des propriétés. La documentation de
Neo4j sur les
[concepts des bases de données orientées graphe](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/)
constitue une bonne introduction à ce modèle.

Aurais-je pu modéliser cela dans des tables relationnelles et l’interroger avec
une expression de table commune récursive ? Oui. Une base de données orientée
graphe n’est pas nécessaire dès que des données présentent une relation
parent-enfant. La question devient plus intéressante lorsque le parcours occupe
une place centrale dans le modèle : classifications multiples, chemins de
profondeur variable, liens transversaux, règles héritées et questions formulées
en termes de connexions plutôt que de lignes.

Pour ce type de problème, Cypher rend l’intention particulièrement facile à
lire :

```cypher
MATCH (course:Course)-[:CLASSIFIED_AS]->(topic:Topic)
      -[:IS_A*0..4]->(:Topic {name: 'Data Engineering'})
RETURN DISTINCT course.code AS code, course.title AS title
ORDER BY code
```

La requête dessine presque le chemin qu’elle souhaite suivre. C’est notamment
pour cela que Cypher est agréable à relire avec des personnes qui n’ont pas
écrit la requête. Neo4j décrit Cypher comme un
[langage déclaratif de requête sur les graphes](https://neo4j.com/docs/cypher-manual/current/introduction/cypher-overview/) :
la requête exprime le motif à retrouver au lieu d’imposer chacune des étapes du
parcours.

Le modèle de graphe n’était pas la partie controversée de mon évaluation. Le
modèle de déploiement et d’exploitation l’était.

## Pourquoi Neo4j était un premier choix légitime

Neo4j est une base de données native utilisant le modèle du graphe de
propriétés. Le stockage, les parcours, Cypher, les drivers, l’administration et
les outils de développement appartiennent à un même produit centré sur le
graphe. Lorsque le graphe se trouve au cœur d’un système, cette spécialisation
constitue un avantage important.

Son intérêt était facile à comprendre :

- Cypher est l’interface de requête directe, et non une requête intégrée dans un
  autre langage.
- Les drivers officiels et le protocole Bolt offrent aux applications une voie
  d’intégration spécialement conçue pour les graphes.
- Neo4j Browser et les outils associés facilitent l’inspection et l’exploration
  d’un graphe.
- APOC étend Cypher avec des procédures et des fonctions supplémentaires.
- L’écosystème comprend des capacités dédiées à l’analyse et à la visualisation
  de graphes.
- Les options de production autogérées couvrent la supervision, les sauvegardes,
  le clustering et la reprise sur panne, selon l’édition retenue.

Ce sont de véritables avantages, pas de simples lignes décoratives dans une
matrice de fonctionnalités. Le
[manuel d’exploitation de Neo4j](https://neo4j.com/docs/operations-manual/current/introduction/)
établit également une distinction importante entre les fonctionnalités des
éditions Community et Enterprise. Toute évaluation sérieuse doit comparer
l’édition et le modèle de déploiement qui seront réellement utilisés, et non une
combinaison imaginaire de toutes les fonctionnalités présentées sur le site.

Si mon besoin avait été de « construire une plateforme de graphe », Neo4j aurait
commencé avec un net avantage.

Mon besoin était plus ciblé : ajouter une capacité de classification fondée sur
un graphe à une plateforme existante. Cette différence a modifié le poids des
critères de décision.

## La question moins séduisante à laquelle l’architecture doit tout de même répondre

Ajouter Neo4j n’aurait pas signifié ajouter uniquement des requêtes Neo4j. Il
aurait également fallu décider :

- qui le provisionne et applique les correctifs ;
- comment il est sauvegardé et restauré ;
- comment fonctionnent la haute disponibilité et la reprise après sinistre ;
- comment sont gérés les identifiants, les autorisations et les accès réseau ;
- comment il est supervisé et quelles alertes réveillent quelqu’un ;
- comment les développeurs reproduisent l’environnement localement et dans les
  tests ;
- quelle base de données est propriétaire de chaque donnée ;
- comment PostgreSQL et Neo4j restent cohérents s’ils stockent des états liés ;
- comment le système réagit lorsqu’une base est disponible et l’autre ne l’est
  pas.

Aucune de ces questions ne fait de Neo4j un mauvais choix. Elles font simplement
partie du choix.

C’est là que les comparaisons fondées uniquement sur les fonctionnalités
deviennent trompeuses. Une base de données peut être le produit le plus complet
de sa catégorie et rester le mauvais composant à ajouter à une plateforme
donnée. L’architecture ne concerne pas seulement ce que fait un composant. Elle
concerne aussi les nouvelles responsabilités et les nouveaux scénarios de panne
qui apparaissent lorsque ce composant rejoint le système.

C’est ce qui a rendu Apache AGE intéressant.

## Ce qu’Apache AGE change dans l’équation

[Apache AGE](https://age.apache.org/age-manual/master/intro/overview.html) est
une extension PostgreSQL qui ajoute des fonctionnalités de base de données
orientée graphe. Son objectif est de faire cohabiter les données relationnelles
et les données de graphe dans un même système de stockage, avec le SQL ANSI pour
la partie relationnelle et openCypher pour la partie graphe.

La même requête conceptuelle sur le catalogue de formations peut être exécutée
avec la fonction `cypher()` d’AGE :

```sql
SELECT course_code, course_title
FROM cypher(
  'learning_catalog',
  $$
    MATCH (course:Course)-[:CLASSIFIED_AS]->(topic:Topic)
          -[:IS_A*0..4]->(:Topic {name: 'Data Engineering'})
    RETURN DISTINCT course.code, course.title
  $$
) AS (course_code agtype, course_title agtype);
```

Le motif reste exprimé en Cypher, mais PostgreSQL l’exécute au moyen d’une
fonction tabulaire et renvoie un ensemble d’enregistrements. La
[documentation d’AGE sur le format des requêtes Cypher](https://age.apache.org/age-manual/master/intro/cypher.html)
explique cette enveloppe SQL et la définition requise pour le résultat.

L’expérience de développement n’est pas la même que lorsqu’une requête Cypher
est envoyée directement à Neo4j. L’enveloppe SQL, les valeurs `agtype`, les
sessions PostgreSQL et les comportements propres à AGE sont de véritables
détails d’intégration. En contrepartie, l’exécution dans PostgreSQL ouvre des
possibilités utiles. Les résultats du graphe peuvent participer à des
sous-requêtes et à des jointures SQL, y compris avec des données relationnelles,
comme le montre la
[documentation d’AGE sur les requêtes avancées](https://age.apache.org/age-manual/master/advanced/advanced.html#using-cypher-in-a-join-expression).

Surtout, dans mon contexte, AGE changeait la proposition opérationnelle. Au lieu
d’introduire une seconde technologie de base de données, l’équipe pouvait
ajouter une capacité de graphe à l’infrastructure PostgreSQL qu’elle déployait,
sécurisait, supervisait et sauvegardait déjà.

Cela ne rend pas cette capacité gratuite. Cela déplace l’endroit où se trouve
son coût.

## J’ai comparé les comportements, pas les logos

Une fois les deux options jugées techniquement crédibles, je n’ai pas essayé de
trancher avec une liste générique de fonctionnalités. J’ai reproduit les
requêtes importantes dans les deux technologies.

Mon évaluation a suivi une démarche pratique.

### 1. Partir des questions auxquelles l’application doit répondre

J’ai commencé par écrire les opérations représentatives sur le graphe : résoudre
une classification, parcourir une hiérarchie, gérer plusieurs chemins et
renvoyer le résultat sous une forme que l’application pouvait consommer.

Un jeu de tests utile doit aussi couvrir les cas inconfortables :

- un nœud sans parent ;
- plusieurs parents valides ;
- plusieurs chemins menant au même résultat ;
- un parcours qui atteint la limite de profondeur configurée ;
- des données incorrectes ou cycliques si le domaine est censé les interdire ;
- un résultat vide ;
- suffisamment de données pour faire apparaître un plan de requête manifestement
  mauvais.

Une étude technique qui prouve uniquement que `MATCH` compile n’a pas encore
prouvé grand-chose.

### 2. Construire deux fois le même petit modèle

J’ai créé des nœuds, relations, propriétés et index équivalents dans chaque
candidat. L’objectif n’était pas de forcer les deux produits dans une comparaison
artificielle fonctionnalité par fonctionnalité. Il s’agissait de vérifier que le
comportement essentiel de l’application ne dépendait pas discrètement d’une
capacité disponible dans un seul des deux produits.

Cette étape a également révélé des différences masquées par le vocabulaire
Cypher commun. AGE vise la prise en charge d’openCypher, tandis que les versions
actuelles de Neo4j disposent de leur propre implémentation versionnée de Cypher.
La similarité de la syntaxe est utile, mais elle ne garantit pas que chaque
clause, fonction, type, comportement du planificateur ou erreur sera identique.
La portabilité doit être démontrée avec le véritable ensemble de requêtes.

### 3. Inclure l’intégration applicative dans l’expérience

La console de la base de données ne représente qu’une partie du parcours. J’ai
également pris en compte la gestion des connexions, le passage des paramètres, la
conversion des résultats, les transactions, la gestion des erreurs, les données
de test et l’observabilité depuis l’application.

C’est particulièrement important avec AGE, car la requête sur le graphe franchit
la frontière d’une fonction SQL et renvoie des enregistrements `agtype`. Un motif
Cypher concis peut tout de même conduire à un code applicatif maladroit si cette
frontière est ignorée pendant l’étude.

### 4. Comparer le cycle de vie opérationnel

Pour chaque option, j’ai posé les mêmes questions :

- Comment l’installer dans chaque environnement ?
- Quelles versions sont compatibles ?
- Quel est le processus de mise à niveau ?
- Que contient exactement une sauvegarde ?
- Comment la restaurer sur une machine vierge ?
- Quels métriques et journaux seront disponibles ?
- Qui prend en charge un incident ?
- Quel est le plan de retour arrière si le choix ne fonctionne pas ?

Cette étape change souvent le résultat d’une comparaison d’architecture, car
elle transforme « nous pouvons l’exécuter » en « nous pouvons en assumer la
responsabilité ».

### 5. Ne mesurer que ce que la charge de travail peut justifier

Je ne choisirais aucune de ces bases à partir d’un benchmark trouvé sur
Internet. La profondeur des parcours, la densité du graphe, les index, la
distribution des données, la forme des requêtes, l’état du cache, le matériel et
la concurrence peuvent tous modifier le résultat.

Un benchmark qui n’utilise ni votre modèle ni votre charge peut fournir une
réponse très précise à la question de quelqu’un d’autre.

La bonne approche consiste à définir des données représentatives, à convenir des
attentes en matière de latence et de débit, à exécuter des tests reproductibles
et à examiner les plans de requête. Je ne publie pas de chiffres de performance
ici, car je ne dispose pas d’un benchmark public et reproductible qui permettrait
d’affirmer équitablement que l’un des produits est plus rapide que l’autre.

## Une matrice de décision réellement utile

La comparaison est devenue plus claire lorsque j’ai cessé de demander quel
produit était « meilleur » pour commencer à rechercher les signaux donnés par le
contexte.

| Critère de décision | Signaux en faveur de Neo4j | Signaux en faveur d’Apache AGE |
| --- | --- | --- |
| Rôle du graphe | Le graphe constitue le modèle principal ou une capacité centrale du produit | Le parcours de graphe est une capacité ciblée au sein d’une plateforme relationnelle plus large |
| Besoins de requêtage | La charge nécessite des comportements Cypher ou des fonctionnalités de graphe propres à Neo4j | Les requêtes critiques fonctionnent correctement dans AGE et correspondent à la surface openCypher prise en charge |
| Écosystème | Des outils dédiés d’exploration, d’analyse, de procédures ou de visualisation de graphes sont nécessaires | Ces capacités spécialisées ne sont pas requises pour le cas d’usage |
| Plateforme existante | Un service de graphe distinct existe déjà ou se justifie | PostgreSQL est déjà une plateforme bien exploitée et peut accueillir l’extension |
| Exploitation | L’équipe peut prendre en charge le cycle de vie d’une base orientée graphe ou utiliser un service managé | L’équipe préfère étendre son cycle de vie PostgreSQL et accepte de gérer l’extension |
| Frontière des données | Le graphe doit évoluer, monter en charge ou tomber en panne indépendamment | Garder proches les données relationnelles et de graphe simplifie la conception |
| API applicative | L’accès direct à Cypher, les drivers et les outils natifs de graphe sont importants | L’intégration SQL et l’accès par la pile PostgreSQL existante constituent un avantage |
| Stratégie de sortie | La migration depuis un stockage de graphe dédié est comprise | La suppression de l’extension, l’export des données et un modèle de repli sont compris |

Le tableau est volontairement symétrique. Chaque avantage apparent est associé
à une condition. « Une base au lieu de deux » n’est utile que si PostgreSQL peut
supporter la charge sans devenir un goulot d’étranglement problématique. « Une
base native orientée graphe » n’est utile que si ses atouts spécifiques au graphe
justifient la frontière supplémentaire dans la plateforme.

## Pourquoi AGE était le bon compromis dans mon contexte

Dans le contexte que j’ai évalué, Apache AGE était le meilleur choix pour quatre
raisons principales.

Premièrement, les requêtes critiques de taxonomie et de parcours pouvaient être
reproduites avec le comportement attendu par l’application. Le besoin de graphe
était réel, mais ciblé.

Deuxièmement, PostgreSQL faisait déjà partie de la plateforme. Réutiliser cette
base opérationnelle évitait d’introduire une technologie de base de données
supplémentaire pour une seule capacité.

Troisièmement, le cas d’usage ne nécessitait pas les parties spécialisées de
l’écosystème Neo4j. Assumer le coût architectural d’une base orientée graphe
dédiée n’aurait pas apporté suffisamment de valeur supplémentaire à cette charge
de travail.

Quatrièmement, l’équipe pouvait accepter et tester le cycle de vie de l’extension
AGE. Cette dernière condition est importante. AGE était un bon choix parce que
ses coûts étaient compris, pas parce qu’ils avaient disparu.

Ma conclusion n’était donc pas « Apache AGE est meilleur que Neo4j ». Elle était
la suivante :

> Apache AGE fournit le comportement de graphe dont nous avons besoin tout en
> créant moins de nouvelles responsabilités opérationnelles dans la plateforme
> que nous exploitons déjà.

C’est une affirmation plus limitée, mais aussi une décision d’architecture plus
facile à défendre.

## Les coûts qu’AGE ne fait pas disparaître

Il serait tentant de présenter AGE comme une fonctionnalité de graphe « gratuite
» dès lors que PostgreSQL existe. J’éviterais cette formulation.

### La compatibilité de l’extension fait partie du cycle de vie de la plateforme

AGE doit être installé là où PostgreSQL s’exécute, et les versions de PostgreSQL
qu’il prend en charge doivent correspondre à celles de la plateforme. Le
[guide d’installation d’AGE](https://age.apache.org/age-manual/master/intro/setup.html)
publie une liste de compatibilité, des instructions de compilation, une option
Docker et les opérations requises pour chaque session, comme le chargement d’AGE
et la configuration du chemin de recherche `ag_catalog`.

Une mise à niveau de PostgreSQL n’est donc plus uniquement une mise à niveau de
PostgreSQL. Le binaire AGE, la version de l’extension, l’image de déploiement et
la procédure de restauration doivent tous faire partie du plan.

La propre
[documentation de PostgreSQL sur les extensions](https://www.postgresql.org/docs/current/extend-extensions.html)
ajoute un autre détail à tester : une sauvegarde enregistre `CREATE EXTENSION`
au lieu de sauvegarder chaque objet de l’extension séparément. Les fichiers
nécessaires à l’extension doivent donc être disponibles sur la destination au
moment de la restauration.

### Un seul runtime peut aussi signifier un seul domaine de panne et de ressources

Regrouper les charges relationnelles et de graphe dans PostgreSQL simplifie le
parc, mais les couple également. Un parcours gourmand en CPU, une pression sur
la mémoire, des verrous, la croissance du stockage ou une requête problématique
peuvent affecter les autres charges qui partagent la base.

Avec Neo4j, le service supplémentaire crée du travail opérationnel, mais aussi
une frontière indépendante pour la montée en charge et les défaillances. Le
choix entre couplage et séparation dépend de la charge et du modèle de fiabilité
de la plateforme.

### Une syntaxe commune ne dispense pas des tests de compatibilité

La prise en charge d’openCypher par AGE et le Cypher de Neo4j peuvent exprimer de
nombreux motifs de graphe identiques, mais les produits ne sont pas
interchangeables. Les fonctionnalités de requête, les types de données, les
paramètres, les index, les contraintes, les procédures, les drivers et les
comportements opérationnels doivent être évalués séparément.

Si une future migration est importante, conservez un corpus testé de requêtes et
de jeux de données essentiels. « Cela ressemble à du Cypher » n’est pas un plan
de migration.

### Un PostgreSQL managé peut changer la réponse

Une extension n’est utile que si l’environnement cible l’autorise. Certaines
offres PostgreSQL managées limitent les extensions qui peuvent être installées
ou imposent une version précise. Ce point doit être vérifié avant qu’une preuve
de concept devienne une proposition d’architecture.

En résumé, AGE évite d’avoir recours à un deuxième produit de base de données. Il
n’élimine pas la nécessité de concevoir, tester, superviser et maintenir la
capacité de graphe.

## Quand je choisirais plutôt Neo4j

Je privilégierais Neo4j lorsque le graphe n’est plus une capacité secondaire,
mais le centre du système.

Ce pourrait être le cas lorsque :

- les parcours de graphe dominent la charge et nécessitent un réglage ou une
  montée en charge indépendants ;
- le produit dépend d’outils natifs d’exploration ou de visualisation de graphes ;
- l’analyse de graphes ou une capacité particulière de l’écosystème Neo4j
  constitue une véritable exigence ;
- l’accès direct à Cypher et les drivers officiels simplifient sensiblement
  l’application ;
- le graphe a besoin de sa propre frontière de disponibilité, de sécurité ou de
  défaillance ;
- l’organisation exploite déjà Neo4j avec succès ;
- un déploiement Neo4j managé est mieux adapté que la maintenance d’une extension
  PostgreSQL ;
- les tests montrent qu’AGE ne peut pas répondre à une requête ou à une exigence
  opérationnelle essentielle.

Dans ces conditions, éviter une autre base de données peut devenir une fausse
économie. Une base dédiée au graphe peut présenter une surface opérationnelle
plus étendue, mais ce coût est raisonnable lorsque la spécialisation apporte
suffisamment de valeur.

Je referais également l’évaluation au lieu de considérer une ancienne décision
comme une règle permanente. Les produits évoluent, les équipes acquièrent de
nouvelles compétences, les services managés changent et la fonctionnalité
secondaire d’hier peut devenir la charge centrale de demain. Les décisions
d’architecture ont un contexte et une durée de validité.

## Les questions que je poserais avant d’approuver l’une ou l’autre option

Voici la liste que j’apporterais à la prochaine revue de conception :

1. Quelles sont les cinq à dix requêtes de graphe les plus importantes pour
   l’application ?
2. Quels cas limites peuvent modifier leurs résultats ?
3. Les deux candidats peuvent-ils exprimer correctement ces requêtes avec des
   données réalistes ?
4. Où se trouve la source de vérité pour les données partagées avec des
   fonctionnalités relationnelles ?
5. De quel modèle de cohérence l’application a-t-elle besoin ?
6. Quelles capacités propres à un produit sont de véritables exigences plutôt
   que des possibilités séduisantes ?
7. Qui prend en charge l’installation, les mises à niveau, les sauvegardes, la
   restauration, la supervision et les incidents ?
8. Quelles versions de la base et de l’extension sont prises en charge dans
   chaque environnement cible ?
9. Comment la charge affectera-t-elle les services existants ou créera-t-elle
   une nouvelle frontière de défaillance ?
10. Quelles preuves nous conduiraient à revenir sur la décision, et comment
    effectuerions-nous la migration ?

Ces questions sont moins enthousiasmantes que de dessiner un graphe sur un
tableau blanc. Elles ont aussi davantage de chances de préserver la
maintenabilité du système deux ans plus tard.

## Choisir le compromis, pas la technologie

Neo4j était un premier candidat logique parce qu’il est conçu autour des
graphes. Apache AGE était le bon choix final parce que le comportement de graphe
recherché s’intégrait dans une plateforme PostgreSQL existante et ne justifiait
pas l’ajout d’une autre technologie de base de données dans ce contexte.

La distinction est importante. Je n’ai pas choisi AGE parce que les extensions
sont toujours plus simples, parce qu’une base est toujours préférable à deux ou
parce que Neo4j manquait de capacités. Je l’ai choisi parce que l’application
pouvait obtenir le comportement de graphe attendu pendant que l’équipe prenait
en charge un ensemble plus limité et plus familier de responsabilités
opérationnelles.

Dans un autre système, avec une autre charge et une autre équipe, je pourrais
faire le choix opposé en suivant exactement le même raisonnement.

C’est la partie de l’architecture logicielle que je trouve la plus utile : ne
pas chercher la technologie qui gagne toutes les comparaisons, mais rendre les
compromis suffisamment explicites pour que le bon choix dans le contexte actuel
devienne clair.

Choisissez un modèle de graphe parce que les relations sont au cœur du problème.
Choisissez une base de données parce que ses bénéfices valent les
responsabilités qu’elle ajoute.

## Sources et lectures complémentaires

- [Présentation d’Apache AGE](https://age.apache.org/age-manual/master/intro/overview.html)
- [Guide d’installation d’Apache AGE](https://age.apache.org/age-manual/master/intro/setup.html)
- [Format des requêtes Cypher dans Apache AGE](https://age.apache.org/age-manual/master/intro/cypher.html)
- [Requêtes Cypher avancées dans Apache AGE](https://age.apache.org/age-manual/master/advanced/advanced.html)
- [PostgreSQL : regrouper des objets liés dans une extension](https://www.postgresql.org/docs/current/extend-extensions.html)
- [Concepts des bases de données orientées graphe dans Neo4j](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/)
- [Présentation de Cypher dans Neo4j](https://neo4j.com/docs/cypher-manual/current/introduction/cypher-overview/)
- [Introduction au manuel d’exploitation de Neo4j](https://neo4j.com/docs/operations-manual/current/introduction/)