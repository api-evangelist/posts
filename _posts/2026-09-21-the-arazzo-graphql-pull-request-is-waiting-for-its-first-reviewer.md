---
published: true
layout: post
title: 'The Arazzo GraphQL Pull Request Is Waiting for Its First Reviewer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-arazzo-graphql-pull-request-is-waiting-for-its-first-reviewer.png
date: 2026-09-21
author: Kin Lane
tags:
  - Arazzo
  - GraphQL
  - Workflows
  - Specification
  - OpenAPI
  - Standards
---

Of the four pull requests queued for [Arazzo](https://spec.openapis.org/arazzo/latest.html) 1.2, this is the one with the lowest bar to being useful. [PR #567](https://github.com/OAI/Arazzo-Specification/pull/567) from Naresh Jain adds GraphQL operation support. It was opened on September 2, it is 765 lines added across twenty-one files, all seventy-eight schema tests pass, and when Frank Kilcommins ran through the queue on last week's bi-weekly call he said he had not had a chance to look at it at all. Wojtek Trocki has left comments and Naresh has answered them. No maintainer has reviewed it. If you have ever wanted to be the first set of eyes on a specification change rather than the fortieth, this is the opening.

The design follows the pattern the SOAP and RPC pull requests set. A source description gets a new type, `graphql`, and it can point at two kinds of document: a schema in SDL, and an executable document of named operations. A step gets a `graphqlOperation` field — mutually exclusive with the other step targets — with a `schema` reference and an `operation`. The operation can be inline, a query written straight into the workflow, or a reference to a named operation in an external executable document, `$sourceDescriptions.shopOperations.UpdateBook`. That second form is the one that matters for teams that already maintain a library of persisted queries: the workflow points at what exists instead of duplicating it. There is even an `extensions` map on the operation, and the [example](https://github.com/OAI/Arazzo-Specification/pull/567/files) uses it for exactly the case you would guess — a `persistedQuery` extension carrying the `sha256Hash`.

Variables are where GraphQL does not fit Arazzo's existing shape neatly, and the pull request's answer is worth reading closely. GraphQL variables are passed through Arazzo's Parameter Object with a new location, `in: variable`, alongside `path`, `query`, `header` and `cookie`. The wrinkle is that Arazzo already has a notion of a Selector Object — a structured value that tells a runner where to pull data from — and a GraphQL input object literal can look identical to one. So the pull request adds `valueMode: literal` to say "this object is the value, do not interpret it," and splits `extensions` from `extensionsSelector` for the same reason. It is a small, slightly awkward fix for a genuine ambiguity, and it is precisely the kind of thing a reviewer with GraphQL production experience should weigh in on: is the ambiguity real enough to earn a new field, or is there a cleaner way?

Subscriptions are handled the way the RPC pull request handled streaming — by drawing a line. A subscription step is supported when it completes naturally within the step's required timeout. An unbounded subscription, a receive-until condition, and a successful early unsubscribe are all declared outside the execution model. Query, mutation and subscription results surface through `$response.body`, so success criteria and outputs work the way they do for every other step. And the scope section is explicit about one more thing: a GraphQL step identifies a schema and an operation, not a deployment. Endpoint, transport, authentication and client construction come from the execution environment, not the document. That mirrors how OpenAPI steps already work — the OpenAPI carries the servers, the workflow does not — and it is the right call, but it is also the sort of boundary that reviewers should push on, because a GraphQL API without a documented endpoint is not a rare thing.

The schema fixtures tell you what the author was worried about: nine failing cases, including a step that supplies both a literal `extensions` and an `extensionsSelector`, a literal object variable without `valueMode`, a malformed selector, an operation that references a fragmented schema, and a step that declares `graphqlOperation` alongside another target. Seven passing cases cover the inline query, the external mutation, the reusable variable parameter, and the subscription. That is a pull request written by someone expecting to be reviewed. It has not been.

Where it lands is honestly uncertain. Kevin Duffey's proposed split on the call — SOAP and RPC in 1.2 by end of October, GraphQL and actor in the loop in a 1.3 by end of year — was not objected to, but Frank also said he could commit to "at least one of the other PRs" making 1.2 depending on how reviews go. A GraphQL pull request that gets a maintainer review and two approvals in the next few weeks has a real chance of shipping in October. One that sits does not. The difference is entirely whether anyone shows up.

I have said in every post this week that the lift is small, and this time it is smallest. Read the [diff](https://github.com/OAI/Arazzo-Specification/pull/567/files). If you run a GraphQL API, check the variable handling and the subscription boundary against what your clients actually do. If you maintain a GraphQL tool, check whether `graphqlOperation` gives you enough to execute a step without guessing. Leave the comment, or the approval. The Arazzo call is every other Wednesday at 09:00 Pacific — [discussion #5](https://github.com/OAI/Arazzo-Specification/discussions/5) has the details, `#arazzo` on the [OpenAPI Slack](https://communityinviter.com/apps/open-api/openapi) carries the conversation between calls, and the next one is Wednesday, September 30. Arriving with an opinion on the GraphQL pull request would make you the most useful person in the room.

Tomorrow, the proposal that has not become a pull request yet — functions, MCP tools, and the argument about whether the step object is the right shape at all.
