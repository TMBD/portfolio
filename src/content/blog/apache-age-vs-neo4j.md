---
title: "Apache AGE vs. Neo4j: Choosing Graph Capabilities Without Adding Another Database"
description: "How I evaluated two graph approaches and why the right architectural choice depends on more than features alone."
pubDate: "2026-07-26"
lang: "en"
tags: ["architecture", "databases", "postgresql", "graphs"]
translationKey: "apache-age-vs-neo4j"
---

A new database rarely arrives alone.

It brings backups, monitoring, access control, upgrades, incident procedures,
local development setup, and a new set of failure modes. That is the part an
architecture diagram usually compresses into one tidy cylinder.

I had to keep that wider picture in mind when I evaluated graph technology for
a backend platform. The problem was genuinely graph-shaped, and Neo4j was an
obvious candidate. It is built for graphs, its query language is expressive,
and its tooling makes relationships feel like first-class citizens rather than
an awkward addition.

But the platform already relied on PostgreSQL. So the real question was not
simply:

> Which technology can execute graph queries?

Both could.

The more useful question was:

> Does this problem justify introducing and operating another database, or can
> we add the graph capability responsibly to the database we already know?

That led me to compare Neo4j with Apache AGE, a PostgreSQL extension that adds
graph functionality and openCypher queries. The result was not a universal
winner. It was a decision shaped by the workload, the existing platform, and
the responsibilities the team was prepared to own.

This article explains how I approached that decision and what I would examine
before making it again. The decision process comes from a real technical
investigation. The learning-catalog example below is fictional, and I have
deliberately left out company-specific rules and implementation details.

## The problem looked like a graph before it looked like a database

Imagine an online learning catalog. A course can be classified under one or
more topics, and each topic can belong to a broader topic:

```text
Graph Databases -> Databases -> Data Engineering -> Software Engineering
```

A learner opens the "Data Engineering" page. The application needs to find not
only courses classified directly under that topic, but also courses attached to
any topic below it. The hierarchy may be several levels deep and may evolve over
time.

This maps naturally to a property graph:

- A `Course` is a node.
- A `Topic` is a node.
- `CLASSIFIED_AS` connects a course to a topic.
- `IS_A` connects a topic to its parent.
- Properties such as `code`, `title`, and `name` describe those nodes.

In a property graph, nodes represent entities, relationships connect them, and
both can carry properties. Neo4j's
[graph database concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/)
provide a clear introduction to that model.

Could I model this in relational tables and query it with a recursive common
table expression? Yes. A graph database is not required every time data has a
parent-child relationship. The interesting point is what happens when traversal
becomes central to the model: multiple classifications, variable-depth paths,
cross-links, inherited rules, and questions phrased in terms of connections
rather than rows.

For that kind of problem, Cypher makes the intent unusually easy to see:

```cypher
MATCH (course:Course)-[:CLASSIFIED_AS]->(topic:Topic)
      -[:IS_A*0..4]->(:Topic {name: 'Data Engineering'})
RETURN DISTINCT course.code AS code, course.title AS title
ORDER BY code
```

The query almost draws the path it wants to follow. That is one reason Cypher is
pleasant to review with people who did not write it. Neo4j describes Cypher as a
[declarative graph query language](https://neo4j.com/docs/cypher-manual/current/introduction/cypher-overview/):
the query states the pattern to retrieve instead of prescribing every traversal
step.

The graph model was not the controversial part of my evaluation. The deployment
model was.

## Why Neo4j was an honest first choice

Neo4j is a native property-graph database. Graph storage, traversal, Cypher,
drivers, administration, and developer tooling belong to one graph-focused
product. When the graph is the heart of a system, that focus is a serious
advantage.

Its appeal was easy to understand:

- Cypher is the direct query interface, not a query embedded inside another
  language.
- Official drivers and the Bolt protocol give applications a graph-specific
  integration path.
- Neo4j Browser and related tools make it easier to inspect and explore a graph.
- APOC extends Cypher with additional procedures and functions.
- The broader ecosystem includes dedicated graph analytics and visualization
  capabilities.
- Self-managed production options include monitoring, backup, clustering, and
  failover capabilities, depending on the edition.

Those are meaningful benefits, not decorative entries on a feature matrix. The
[Neo4j Operations Manual](https://neo4j.com/docs/operations-manual/current/introduction/)
also makes an important distinction between Community and Enterprise features.
Any serious evaluation should compare the exact edition and deployment model it
would use, not an imaginary combination of every feature on the website.

If my requirement had been "build a graph platform," Neo4j would have started
with a strong advantage.

My requirement was narrower: add a graph-backed classification capability to an
existing platform. That difference changed the weight of the decision criteria.

## The less glamorous question architecture still has to answer

Adding Neo4j would not have meant adding only Neo4j queries. It would also have
meant deciding:

- who provisions and patches it;
- how it is backed up and restored;
- how high availability and disaster recovery work;
- how credentials, permissions, and network access are managed;
- how it is monitored and which alerts wake somebody up;
- how developers reproduce the environment locally and in tests;
- which database owns each piece of data;
- how PostgreSQL and Neo4j remain consistent if both store related state;
- how the system behaves when one database is available and the other is not.

None of those questions makes Neo4j a bad choice. They are simply part of the
choice.

This is where feature-only comparisons tend to mislead. A database can be the
most capable product in its category and still be the wrong addition to a
particular platform. Architecture is not only about what a component does. It is
also about the new responsibilities and failure paths that appear when the
component joins the system.

That is why Apache AGE became interesting.

## What Apache AGE changes

[Apache AGE](https://age.apache.org/age-manual/master/intro/overview.html) is a
PostgreSQL extension that adds graph database functionality. Its goal is to let
relational and graph data live in one storage system, with ANSI SQL for the
relational side and openCypher for the graph side.

The same conceptual query from the learning catalog can be executed through
AGE's `cypher()` function:

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

The pattern is still expressed in Cypher, but PostgreSQL executes it through a
table function and returns a set of records. The
[AGE Cypher query documentation](https://age.apache.org/age-manual/master/intro/cypher.html)
explains the wrapper and the required result definition.

This is not the same developer experience as sending Cypher directly to Neo4j.
The SQL wrapper, `agtype` values, PostgreSQL sessions, and AGE-specific behavior
are real integration details. On the other hand, being inside PostgreSQL creates
useful possibilities. Graph results can participate in SQL subqueries and joins,
including joins with relational data, as shown in AGE's
[advanced query documentation](https://age.apache.org/age-manual/master/advanced/advanced.html#using-cypher-in-a-join-expression).

Most importantly for my context, AGE changed the operational proposal. Instead
of introducing a second database technology, the team could add a graph
capability to the PostgreSQL infrastructure it already deployed, secured,
monitored, and backed up.

That does not make the capability free. It changes where its cost lives.

## I compared behavior, not logos

Once both options looked technically plausible, I did not try to settle the
decision with a generic feature checklist. I reproduced the important queries in
both technologies.

My evaluation followed a practical sequence.

### 1. Start from questions the application must answer

I wrote down the representative graph operations first: resolve a
classification, walk through a hierarchy, handle multiple paths, and return the
result in a form the application could consume.

The useful test set should include the uncomfortable cases too:

- a node with no parent;
- several valid parents;
- duplicate paths to the same result;
- a traversal that reaches the configured depth limit;
- malformed or cyclic data if the domain is supposed to forbid it;
- an empty result;
- enough data to expose an obviously poor query plan.

A technology spike that proves only that `MATCH` compiles has not yet proved
much.

### 2. Build the same small model twice

I created equivalent nodes, relationships, properties, and indexes in each
candidate. The purpose was not to force both products into an artificial
feature-for-feature match. It was to make sure the application's essential
behavior did not quietly depend on something available in only one of them.

This also exposed differences hidden by the shared Cypher vocabulary. AGE aims
to support openCypher, while current Neo4j releases have their own versioned
Cypher implementation. Similar syntax is helpful, but it is not a promise that
every clause, function, type, planner behavior, or error will be identical.
Portability has to be demonstrated with the actual query set.

### 3. Include application integration in the experiment

The database console is only one part of the path. I also considered connection
management, parameter binding, result conversion, transactions, error handling,
test fixtures, and observability from the application.

This matters for AGE in particular because the graph query crosses a SQL
function boundary and returns `agtype` records. A concise Cypher pattern can
still create awkward application code if that boundary is ignored during the
spike.

### 4. Compare the operational lifecycle

For each option, I asked the same questions:

- How do we install it in every environment?
- Which versions are compatible?
- What is the upgrade sequence?
- What exactly is included in a backup?
- How do we restore it on a clean machine?
- What metrics and logs will be available?
- Who owns an incident?
- What is the rollback plan if the choice does not work?

This step often changes the result of an architecture comparison because it
turns "we can run it" into "we can own it."

### 5. Measure only what the workload can justify

I would not choose either database from a benchmark copied from the internet.
Traversal depth, graph density, indexes, data distribution, query shape, cache
state, hardware, and concurrency can all change the result.

A benchmark without your model and workload can be a very precise answer to
somebody else's question.

The right approach is to define representative data, agree on latency and
throughput expectations, run repeatable tests, and inspect query plans. I am not
publishing performance numbers here because I do not have a public,
reproducible benchmark that would support a fair claim that either product is
faster.

## A decision matrix that is actually useful

The comparison became clearer when I stopped asking which product was "better"
and started looking for signals from the context.

| Decision area | Signals toward Neo4j | Signals toward Apache AGE |
| --- | --- | --- |
| Role of the graph | The graph is the primary model or a core product capability | Graph traversal is a bounded capability within a broader relational platform |
| Query needs | The workload needs Neo4j-specific Cypher behavior or graph features | The critical query set works correctly in AGE and fits its supported openCypher surface |
| Ecosystem | Dedicated graph exploration, analytics, procedures, or visualization are required | Those specialized capabilities are not required for the use case |
| Existing platform | A separate graph service already exists or is justified | PostgreSQL is already a well-operated platform and can support the extension |
| Operations | The team can own a graph database lifecycle or use a managed service | The team prefers to extend its PostgreSQL lifecycle and accepts extension management |
| Data boundary | The graph should scale, fail, or evolve independently | Keeping related relational and graph data close simplifies the design |
| Application API | Direct Cypher, graph drivers, and graph-native tooling matter | SQL integration and access through the existing PostgreSQL stack are an advantage |
| Exit path | Migration from a dedicated graph store is understood | Extension removal, data export, and a fallback model are understood |

The table is deliberately symmetrical. Every apparent benefit has a condition
attached to it. "One database instead of two" is useful only when PostgreSQL can
support the workload without becoming an unhealthy shared bottleneck. "A native
graph database" is useful only when its graph-specific strengths justify the
additional platform boundary.

## Why AGE was the right trade-off in my context

In the context I evaluated, Apache AGE was the better fit for four main reasons.

First, the critical taxonomy and traversal queries could be reproduced with the
behavior the application needed. The graph requirement was real, but it was
focused.

Second, PostgreSQL was already part of the platform. Reusing that operational
foundation avoided introducing another database technology solely for one
capability.

Third, the use case did not require the specialized parts of the Neo4j
ecosystem. Paying the architectural cost of a dedicated graph database would
not have unlocked enough additional value for this workload.

Fourth, the team could accept and test the AGE extension lifecycle. That last
condition matters. AGE was a good choice because its costs were understood, not
because they disappeared.

So my conclusion was not "Apache AGE is better than Neo4j." It was:

> Apache AGE satisfies the graph behavior we need while creating fewer new
> operational responsibilities in the platform we have.

That is a narrower statement, but it is also a more defensible architecture
decision.

## The bill AGE still sends

It is tempting to describe AGE as graph functionality "for free" once
PostgreSQL exists. I would avoid that phrase.

### Extension compatibility is part of the platform lifecycle

AGE has to be installed where PostgreSQL runs, and its supported PostgreSQL
versions have to match the platform. The official
[AGE setup guide](https://age.apache.org/age-manual/master/intro/setup.html)
publishes a compatibility list, build instructions, a Docker option, and
per-session setup requirements such as loading AGE and configuring the
`ag_catalog` search path.

That means a PostgreSQL upgrade is no longer only a PostgreSQL upgrade. The AGE
binary, extension version, deployment image, and restore procedure all belong in
the plan.

PostgreSQL's own
[extension documentation](https://www.postgresql.org/docs/current/extend-extensions.html)
adds another detail worth testing: a dump records `CREATE EXTENSION` rather than
dumping each extension object independently, so the required extension files
must be available on the destination during restore.

### One runtime can mean one failure and resource domain

Keeping relational and graph workloads in PostgreSQL simplifies the fleet, but
it also couples them. CPU-heavy traversal, memory pressure, locks, storage
growth, or a problematic query can affect other workloads sharing the database.

With Neo4j, the additional service creates operational work, but it also creates
an independent scaling and failure boundary. Whether coupling or separation is
preferable depends on the workload and the platform's reliability model.

### Shared syntax does not remove compatibility testing

AGE's openCypher support and Neo4j's Cypher can express many of the same graph
patterns, but they are not interchangeable products. Query features, data types,
parameters, indexes, constraints, procedures, drivers, and operational behavior
must be evaluated separately.

If future migration matters, keep a tested corpus of important queries and data
fixtures. "It looks like Cypher" is not a migration plan.

### Managed PostgreSQL may change the answer

An extension is useful only if the target environment allows it. Some managed
PostgreSQL offerings restrict which extensions can be installed or require a
specific supported version. This should be checked before a proof of concept
becomes an architecture proposal.

In short, AGE removes the need for a second database product. It does not remove
the need to engineer, test, monitor, and maintain the graph capability.

## When I would choose Neo4j instead

I would lean toward Neo4j when the graph is not a supporting capability but the
center of the system.

That could be the case when:

- graph traversal dominates the workload and requires independent tuning or
  scaling;
- the product depends on graph-native exploration or visualization;
- graph analytics or a specific Neo4j ecosystem capability is a real
  requirement;
- direct Cypher access and official graph drivers materially simplify the
  application;
- the graph needs its own availability, security, or failure boundary;
- the organization already operates Neo4j successfully;
- a managed Neo4j deployment is a better fit than maintaining a PostgreSQL
  extension;
- tests show that AGE cannot support an essential query or operational
  requirement.

In those conditions, avoiding another database can become false economy. A
dedicated graph database may carry more operational surface, but that cost is
reasonable when the specialization provides enough value.

I would also re-run the evaluation rather than treating an old decision as a
permanent rule. Products evolve, teams gain new capabilities, managed services
change, and yesterday's secondary feature can become tomorrow's central
workload. Architecture decisions have a context and a shelf life.

## Questions I would ask before approving either option

Here is the checklist I would take into the next design review:

1. What are the five to ten graph queries that matter most to the application?
2. Which edge cases can change their results?
3. Can both candidates express those queries correctly with realistic data?
4. Where is the source of truth for data shared with relational features?
5. What consistency model does the application need?
6. Which product-specific capabilities are requirements rather than attractive
   possibilities?
7. Who owns installation, upgrades, backup, restore, monitoring, and incidents?
8. Which database and extension versions are supported in every target
   environment?
9. How will the workload affect existing services or create a new failure
   boundary?
10. What evidence would make us reverse the decision, and how would we migrate?

These questions are less exciting than drawing a graph on a whiteboard. They are
also more likely to keep the system maintainable two years later.

## Choose the trade-off, not the technology

Neo4j made sense as the first candidate because it is designed around graphs.
Apache AGE made sense as the final choice because the required graph behavior
fit inside an existing PostgreSQL platform and did not justify another database
technology in that context.

The distinction matters. I did not choose AGE because extensions are always
simpler, because one database is always better than two, or because Neo4j lacked
capability. I chose it because the application could get the graph behavior it
needed while the team took on a smaller and more familiar set of operational
responsibilities.

In another system, with another workload and another team, I could make the
opposite choice and use the same reasoning.

That is the part of software architecture I find most useful: not searching for
the technology that wins every comparison, but making the trade-offs explicit
enough that the right choice for the current context becomes clear.

Choose a graph model because relationships are central to the problem. Choose a
database because its benefits are worth the responsibilities it adds.

## Sources and further reading

- [Apache AGE overview](https://age.apache.org/age-manual/master/intro/overview.html)
- [Apache AGE setup guide](https://age.apache.org/age-manual/master/intro/setup.html)
- [Apache AGE Cypher query format](https://age.apache.org/age-manual/master/intro/cypher.html)
- [Apache AGE advanced Cypher queries](https://age.apache.org/age-manual/master/advanced/advanced.html)
- [PostgreSQL: Packaging related objects into an extension](https://www.postgresql.org/docs/current/extend-extensions.html)
- [Neo4j graph database concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/)
- [Neo4j Cypher overview](https://neo4j.com/docs/cypher-manual/current/introduction/cypher-overview/)
- [Neo4j Operations Manual introduction](https://neo4j.com/docs/operations-manual/current/introduction/)