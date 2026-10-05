---
published: true
layout: post
title: 'One Hundred Forty-One Tools in the APIs.io MCP Server'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/one-hundred-forty-one-tools-in-the-apis-io-mcp-server.png
date: 2026-10-06
author: Kin Lane
tags:
  - APIs.io
  - MCP
  - Agents
  - Agent Readiness
  - Kin Score
  - APIs
---
Yesterday I walked through [everything you can do with the APIs.io API](/2026/10/05/everything-you-can-do-with-the-apis-io-api/). Today is the other door into the same catalog: the [APIs.io MCP server](https://apis.io/developer/mcp-server). I asked the live server what it offers rather than trusting my notes, and it answered with **141 tools, 36 guided prompts and 8 attachable resources**. Here is every tool, grouped by the job you would hand an agent.

The server sits at `https://apis.io/mcp` over Streamable HTTP. You do not need a key to start. An anonymous client gets the free catalog: search, providers, APIs, tags, taxonomy, artifacts, the playground, and everything about any one provider. You sign in when you want the tools that reason across the whole catalog (the Understanding plan) or the tools for running a listing you own (the Influence plan). Each tool's description says which plan it needs and what it costs a call under [pay-as-you-go](https://apis.io/developer/plans/), so an agent can work that out before it spends anything.

## Getting connected

In Claude, add a custom connector with the URL `https://apis.io/mcp` and leave the OAuth fields blank. APIs.io supports dynamic client registration, so connecting registers your client for you. In Claude Code:

```bash
claude mcp add --transport http apis-io https://apis.io/mcp
```

Cursor, VS Code, and any client that takes a remote MCP URL are covered on the [MCP Server page](https://apis.io/developer/mcp-server) in the [developer area](https://apis.io/developer/).

## Start here

- `apis_io_search` — the federated overview: top matching APIs, providers and tags for a query, each with a total.
- `get_playground_apis` — curated APIs that are safe to call while you learn, each with a working example request.
- `get_prices` — what a call costs on pay-as-you-go. Free on purpose, so an agent can budget.
- `resolve` — turn a domain, a URL or a GitHub org into a provider.
- `enrich_provider` — resolve and return just the field groups you ask for, in one call.

## Providers and APIs

- `find_providers`, `get_provider`, `get_provider_apis`, `find_similar_providers`
- `find_apis`, `get_api`, `find_similar_apis`
- `get_openapi` — an API's primary OpenAPI, with the body inlined if you want it.
- `get_provider_artifacts`, `get_api_artifacts`, `get_provider_capabilities`
- `get_provider_onboarding` — website, portal, signup, docs, auth, base URLs and first steps.
- `get_provider_operations`, `get_provider_tools`, `get_provider_schema` — every operation, every MCP tool and every JSON Schema one provider publishes.
- `get_provider_evidence` — how the score was established, part by part: first-party, verified, or inferred.

## Artifacts, by type

`find_artifacts` is the cross-type entry point, and every type has its own tool: `find_openapis`, `find_asyncapis`, `find_channels`, `find_graphql`, `find_arazzo`, `find_mcp`, `find_skills`, `find_rules`, `find_scopes`, `find_security`, `find_plans`, `find_rate_limits`, `find_finops`, `find_collections`, `find_postman`, `find_json_schemas`, `find_json_structures`, `find_json_ld`, `find_examples` and `find_apis_json`. OpenAPI extensions get `find_extensions` and `get_extension`.

## Taxonomy

- Tags: `find_tags`, `get_tag`
- Tag groups, the 1,500+ sets of tags the catalog computes: `find_tag_groups`, `get_tag_group`, `tag_group_tags`
- Industries, regions, countries and areas: `find_industries`, `get_industry`, `find_regions`, `get_region`, `find_countries`, `get_country`, `find_areas`, `get_area`, plus `get_industry_leaders`, `get_region_leaders`, `get_country_leaders` and `get_area_leaders` for the top-rated providers in each.
- Regulations: `find_regulations`, `get_regulation`
- Corporate estates, one company spread across many provider records: `find_estates`, `get_estate`, `get_provider_estate`

## Ratings and agent readiness

- `find_ratings`, `get_provider_rating`, `get_rating_rubric`, `get_rating_history`, `find_rating_movers`, `get_provider_facets`
- `get_agent_readiness` for one provider, `find_agent_readiness` for the leaderboard, and `agent_readiness_dimensions` for how far each dimension has spread.

## Markets, as cohorts

`find_cohorts` and `get_cohort` list every scored population of providers. Then `cohort_stats`, `cohort_rankings`, `cohort_scores`, `cohort_history`, `cohort_failures` and `cohort_capabilities` describe one market, and `compare_cohorts` puts two side by side, so you can ask whether US payments is further along than UK banking.

## Operations and deprecations

- `find_operations` — which providers expose a path matching your terms. Who has a POST to refunds?
- `deprecated_operations` — every provider with an operation marked deprecated in its own OpenAPI.

## Business capabilities

`find_capabilities`, `get_capability`, `get_capability_edges` and `get_provider_business_capabilities` answer what a business can actually do with these APIs, with the evidence for each answer.

## Deciding

- `compare_providers`, `gap_analysis`, `industry_gap_analysis`, `whats_changed`
- `recommend_stack` designs a stack, the best-rated provider for each capability, and `export_stack` hands it back as an APIs.json document you can adopt.
- `export_dataset` — the whole dataset in one pull rather than a hundred rows at a time.

## Demand side and investors

- `insights_overview`, `insights_dimensions`, `insights_adoption`, `insights_industries`
- `find_company_insights`, `get_company_insight`, `company_gaps`, and `match_providers`, which joins what a company has adopted to the providers that sell it.
- `find_vcs`, `get_vc`, `vc_portfolio`, and `find_investors` for which firms back a given provider.

## Agents

`find_agents` browses the A2A agent registry, and `register_agent` lets an agent register itself by serving an agent card. Neither needs an account.

## Your listing

These are the tools I most want API providers to know about. `what_can_i_fix` gives you a ranked punch list with the points each fix is worth. `readiness_gates` shows what blocks your next agent-readiness band, and `simulate_fixes` projects where you land before you do the work. Then you act: `claim_listing`, `generate_artifact`, `submit_artifact`, `correct_facts`, `dispute_finding`, `set_visibility`, `request_check`, `check_status`, `my_checks`, `watch_listing`, `list_watches` and `unwatch_listing`.

Every write in this group returns a 202 and is worked by a person. None of them publishes anything on your behalf or moves a score by itself.

## Your workspace

`my_workspace` is the root. Saved searches: `save_search`, `list_saved_searches`, `run_saved_search`, `saved_search_net_new`, `delete_saved_search`. Lists: `create_list`, `list_lists`, `get_list`, `add_to_list`, `delete_list`.

## Telling us we are wrong

`report_gap` for something you looked for and could not find, `report_correction` for a provider we have wrong, and `submit_feedback` for a result that did not do what it said. These are free, because I would rather hear it than not.

`story_leads` rounds out the 141. It is the weekly rollup I use to decide what to write about, and only the owner can call it.

## Prompts and resources

If you would rather not pick tools one at a time, the 36 prompts are guided flows that chain them for you, including `find_api`, `provider_overview`, `integrate_provider`, `who_exposes_operation`, `deprecation_sweep`, `design_api_stack`, `improve_my_score`, `agent_readiness_scan`, `manage_my_listing`, `benchmark_against_peers` and `state_of_report`. The 8 resources are things you can attach to a conversation directly: the catalog root, the rating rubric, per-call prices, the catalog's llms.txt, the changes feed, the agent-readiness dimensions, the deprecations rollup, and your own workspace.

The MCP server and the REST API are generated from the same contract, so they describe one catalog. Pick whichever door your agent already knows how to walk through, and [start here](https://apis.io/developer/mcp-server).
