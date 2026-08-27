---
published: true
layout: post
title: 'Your Agent Should Run Its Own Observability Stack'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-agent-should-run-its-own-observability-stack.png
date: 2026-08-27
author: Kin Lane
tags:
  - Agents
  - Open Source
  - Observability
  - APIs.io
  - Discovery
  - Kin Score
  - APIs
---
I wrote earlier today about [the self-hosted seed as a business model](https://apievangelist.com/2026/08/27/the-self-hosted-seed-is-the-next-business-model/) — a domain-shaped application you plant on your own hardware and evolve with an LLM. That post was about the application layer, and about the hosted APIs a seed has to integrate with. This one is about the layer underneath it, and about a different operator entirely.

Not a person running software. An agent running software.

An agent that does real work generates telemetry about itself — which tools it called, how long each took, what it retried, where it got stuck, what a reasoning loop cost. That is high-cardinality data about the agent's own behavior, and the reflex is to ship it to a vendor. I think that reflex is wrong, and not for the reason people usually give.

## The Argument Is Not Cost

The usual case for self-hosting is that SaaS observability gets expensive at volume, and it does. Agent telemetry is a pathological shape for per-host, per-metric, per-ingest-gigabyte pricing, because agents produce a lot of dimensions and most of them are cardinality you cannot predict in advance.

But cost is the weak version. The strong version is that **the telemetry is the reasoning**. Trace spans from an agent are a record of what it considered, what it rejected, and what it was working with when it decided. That is not application performance data. It is closer to a transcript. Shipping it outside your boundary is a governance decision that most teams are making by default, because monitoring has always been something you buy.

Run Prometheus and OpenTelemetry and Tempo inside the same boundary the agent runs in, and the question never comes up. No key, no vendor, no egress, no per-seat conversation about who can see the traces.

## One Endpoint And A Language

Here is the part I did not expect when I went looking.

I pulled up the catalog record for [Datadog](https://apis.io/providers/datadog/) — 290 APIs, Kin Score 58.5, agent readiness 38.3, one of the deepest surfaces in the index. Then [Prometheus](https://apis.io/providers/prometheus/) — 14 APIs, 43.5, 29.1. On the numbers Datadog wins comfortably.

Then I actually called them. Prometheus exposes essentially one query endpoint and an expression language:

```
GET /api/v1/query?query=<promql>
GET /api/v1/query_range?query=<promql>&start=&end=&step=
```

An agent that learns PromQL can ask anything. An agent facing 290 REST endpoints has to first solve the problem of finding the right one, which is a retrieval problem layered on top of the actual question. Fewer endpoints and a language is a *better* agent affordance than more endpoints, and none of our scoring captures that.

It gets more interesting. Against a public Prometheus instance, unauthenticated, I got back:

```
/api/v1/labels                  115 label names
/api/v1/metadata                590 metrics, each with type and help text
/api/v1/label/__name__/values   683 metric names
/api/v1/targets                 what is being scraped, and whether it is up
/api/v1/rules                   every recording and alerting rule
/api/v1/status/tsdb             cardinality, by metric and by label
```

**An agent can discover the entire schema before it writes a query.** It can ask what exists, what type each thing is, what the help text says, and how expensive the cardinality is — and only then form a PromQL expression. Most REST APIs offer nothing equivalent. You read the docs, or you guess.

That is a self-hosted system being *more* agent-legible than the commercial alternative, and it is legible because the project was designed for operators who introspect rather than for a UI.

## The Stack Is Already There

So I went through the categories an agent would actually need if it were standing up its own infrastructure, and checked them against [APIs.io](https://apis.io). Of eighty candidates I checked, sixty-two were already in the catalog.

**Observability and traceability** — [Grafana](https://apis.io/providers/grafana/) 56.6, [SigNoz](https://apis.io/providers/signoz/) 49.8, [GlitchTip](https://apis.io/providers/glitchtip/) 44.3, [Prometheus](https://apis.io/providers/prometheus/) 43.5, [OpenTelemetry](https://apis.io/providers/opentelemetry/) 41.7, [Tempo](https://apis.io/providers/tempo/) 37.6, [Uptrace](https://apis.io/providers/uptrace/) 34.7, [VictoriaMetrics](https://apis.io/providers/victoriametrics/) 33.4, [Jaeger](https://apis.io/providers/jaeger/) 30.2.

**Agent memory** — [Weaviate](https://apis.io/providers/weaviate/), [LanceDB](https://apis.io/providers/lancedb/), [Chroma](https://apis.io/providers/chroma/), [Qdrant](https://apis.io/providers/qdrant/), [Milvus](https://apis.io/providers/milvus/), [mem0](https://apis.io/providers/mem0/), [Letta](https://apis.io/providers/letta/), [Zep](https://apis.io/providers/zep/).
**Runtime and sandboxing** — [Browserless](https://apis.io/providers/browserless/), [E2B](https://apis.io/providers/e2b/), [Daytona](https://apis.io/providers/daytona/), [Firecracker](https://apis.io/providers/firecracker/), [gVisor](https://apis.io/providers/gvisor/).
**Model serving** — [Ollama](https://apis.io/providers/ollama/), [LiteLLM](https://apis.io/providers/litellm/), [vLLM](https://apis.io/providers/vllm/).
**Tracing and eval** — [Phoenix](https://apis.io/providers/phoenix/), [Langfuse](https://apis.io/providers/langfuse/).
**Orchestration** — [Temporal](https://apis.io/providers/temporal/), [n8n](https://apis.io/providers/n8n/), [Windmill](https://apis.io/providers/windmill/), [Kestra](https://apis.io/providers/kestra/), [Airflow](https://apis.io/providers/airflow/), [Prefect](https://apis.io/providers/prefect/).
**Identity and secrets** — [Zitadel](https://apis.io/providers/zitadel/), [Keycloak](https://apis.io/providers/keycloak/), [Infisical](https://apis.io/providers/infisical/), [Vault](https://apis.io/providers/vault/), [Ory](https://apis.io/providers/ory/), [Authentik](https://apis.io/providers/authentik/).
**Data and storage** — [MinIO](https://apis.io/providers/minio/), [ClickHouse](https://apis.io/providers/clickhouse/), [Meilisearch](https://apis.io/providers/meilisearch/), [Typesense](https://apis.io/providers/typesense/), [NATS](https://apis.io/providers/nats/), [Redis](https://apis.io/providers/redis/), [OpenSearch](https://apis.io/providers/opensearch/).

Almost all of it sits in Developing or Thin. Some of that is real — plenty of these projects publish no machine-readable contract at all. But part of it is that the rubric was built to measure hosted APIs. It asks about commercial clarity and onboarding and access model, and an Apache-2.0 project has no pricing page to be clear about and no signup flow to onboard you through. We score the absence as a failure. That is a rubric problem, not a project problem, and I am working on it.

## What A Catalog Owes An Agent That Wants To Run Something

Here is the gap that matters, and it is mine to close.

An agent can find Prometheus in the catalog. It can read the description, see the score, see that it is open source. What it cannot do is **start it**. Nothing in the record says what license governs it, what container image to pull, what port it listens on, or what to poll to know it came up.

I ran nine self-hosted projects through the enrichment pipeline this week — [Grafana Loki](https://apis.io/providers/grafana-loki/), [OpenBao](https://apis.io/providers/openbao/), [LocalAI](https://apis.io/providers/localai/), [HyperDX](https://apis.io/providers/hyperdx/), [Woodpecker CI](https://apis.io/providers/woodpecker-ci/), [RAGFlow](https://apis.io/providers/ragflow/), [Haystack](https://apis.io/providers/haystack/), [Lakekeeper](https://apis.io/providers/lakekeeper/), and [pgvector](https://apis.io/providers/pgvector/) — and the pipeline handled the shape better than I expected. It captured base URLs like these:

```
http://{loki-host}:3100
http://{localai-host}:8080
http://localhost:1416
https://{bao_address}/v1
```

Templated hosts *with default ports*. That is exactly right. Self-hosted software has no address until you give it one, and 3100 is the thing an installer actually needs. It also picked up a `License` pointer on the pgvector record — which sounds trivial until you consider that Vault is BUSL now and [OpenBao](https://openbao.org/) is the MPL-2.0 fork, that Elastic and Redis and Grafana have all changed licenses in the last few years, and that an agent told to "install an open-source secrets manager" has no way to know which of those it is permitted to run.

**Nobody is publishing a license-aware, deployment-aware index of the self-hostable stack.** GitHub tells you stars. Package registries tell you versions. Neither tells you that these four projects do the same job, that two of them are source-available rather than open source, and that one of them exposes an MCP server you can point an agent at directly. That is a catalog job, and it is the one I am pointing APIs.io at next.

## Start With Observability

If you want to try the shape, start where self-hosting is the better answer rather than the cheaper one.

Stand up Prometheus for metrics, OpenTelemetry for collection, and Tempo or Jaeger for traces, inside whatever boundary your agent already runs in. Point the agent at `/api/v1/metadata` and let it read the schema before it asks anything. You will spend an afternoon on it, and the agent's account of its own behavior will never leave your infrastructure.

Then notice what you had to figure out yourself that no index told you — the ports, the licenses, the fact that Loki and Tempo and Prometheus are three separate things that assume each other. That list is the work I have in front of me.
