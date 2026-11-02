---
published: true
layout: post
title: 'Control Who Sees Your Data, Manage Warehouses And Run AI Models With Snowflake'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/control-who-sees-your-data-manage-warehouses-and-run-ai-models-with-snowflake.png
date: 2026-11-02 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Snowflake
  - Identity & Access Management
  - IT Infrastructure Management
  - Artificial Intelligence Management
  - Data Warehouse
  - Data Governance
---

A new analyst starts on Monday and can't see the sales tables until someone files a request. A departing contractor still has access nobody remembered to remove. Your data bill climbs because a large computing resource keeps running over the weekend, and now your team wants to try AI against company data without copying that data somewhere new. These are all problems of running a data platform, and they tend to be solved by hand until there are too many of them. [Snowflake](https://apis.io/providers/snowflake/) lets you handle them through an API, a way for software to talk directly to other software, so your own systems or an AI assistant can do the work.

## What Snowflake does

Snowflake is a cloud-based data platform. It brings data warehousing, data lakes, data engineering, data science and data application development together as a single managed service that runs across AWS, Azure and Google Cloud. A data warehouse is where a business keeps its data organized for analysis, so people can ask questions across sales, finance and operations in one place. Beyond running queries, Snowflake offers a family of AI services it calls Cortex, and an account-hosted MCP server, a standard way of connecting AI agents, which exposes Cortex tools under the same access rules as the rest of your account. More on the [Snowflake website](https://www.snowflake.com/).

## What you can get done

Our catalog maps Snowflake to three business capabilities. They line up with three questions someone running data at your company has to answer: who can see what, what is it costing to run, and what can we do with AI.

### [Decide who can see what](https://apis.io/capabilities/identity-access-management/)

Snowflake controls access through roles, which are named sets of permissions given to people or teams, and privileges, the specific rights a role holds on a table or other object. Handling this through software means access can follow your HR system or your ticketing process. A new hire gets the right role on the first day, and someone who leaves loses access on the last.

- `GET /api/v2/roles` lists the roles in your account.
- `POST /api/v2/roles` creates a new role, for a new team for example.
- `POST /api/v2/grants/{granteeType}/{granteeName}/{securableType}/{securableName}/privileges` grants privileges on one object to a role or user.
- `POST /api/v2/grants/{granteeType}/{granteeName}/{bulkGrantType}/{securableTypePlural}/{scopeType}/{scopeName}/privileges` grants privileges on everything in a scope, including objects created later.
- `DELETE /api/v2/grants/{granteeType}/{granteeName}/{securableType}/{securableName}/privileges/{privilege}` takes a privilege away again.

### [Keep computing resources under control](https://apis.io/capabilities/it-infrastructure-management/)

In Snowflake, a virtual warehouse is the computing power that runs your queries, and a compute pool is the computing power that runs containerized services. Managing these from software lets your team set consistent sizes and auto-suspend settings for everything it creates, and check what exists without logging in to look.

- `GET /api/v2/warehouses` lists your virtual warehouses.
- `POST /api/v2/warehouses` creates a warehouse, and can set its size and when it suspends itself.
- `GET /api/v2/compute-pools` lists compute pools.
- `GET /api/v2/compute-pools/{name}` shows how one pool is configured, including its active and idle nodes.
- `POST /api/v2/compute-pools/{name}:resume` starts a suspended pool again.

### [Use AI models inside your data platform](https://apis.io/capabilities/artificial-intelligence-management/)

Cortex lets your software call large language models, the kind of AI behind today's chat assistants, through Snowflake. This is attractive to a business that already has its data and its access rules there. Your team can build something like a tool that summarizes customer feedback, or a search that finds documents by meaning, using embeddings, the numeric form of text that makes that kind of search possible.

- `GET /api/v2/cortex/models` lists the models available to your session.
- `POST /api/v2/cortex/inference:complete` sends a prompt and returns the model's response.
- `POST /api/v2/cortex/v1/chat/completions` runs a chat completion.
- `POST /api/v2/cortex/inference:embed` turns text into embeddings.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 19 for Snowflake, and these are some of the routines a data team runs again and again:

- [Create and Verify Warehouse](https://apis.io/arazzos/snowflake/snowflake-create-and-verify-warehouse-workflow/) creates a warehouse and confirms its settings.
- [Clone a Database and Verify](https://apis.io/arazzos/snowflake/snowflake-clone-database-and-verify-workflow/) copies a database into a new one, which is useful for testing a change without touching the live data, and confirms the copy.
- [Create and Execute an Alert](https://apis.io/arazzos/snowflake/snowflake-create-and-execute-alert-workflow/) sets up an alert with a condition and an action, then runs it on demand.
- [Create, Resume, and Execute a Task](https://apis.io/arazzos/snowflake/snowflake-create-and-execute-task-workflow/) creates a task, turns it on and runs it once to test it.
- [Create, Verify, and Refresh a Pipe](https://apis.io/arazzos/snowflake/snowflake-create-and-refresh-pipe-workflow/) sets up a pipe, which loads files into a table, then triggers a refresh to bring them in.
- [Cancel a Running SQL Statement](https://apis.io/arazzos/snowflake/snowflake-cancel-running-statement-workflow/) submits a query and shows how to stop it, the safety valve for a query that has run away.

## Ask for it in plain language

Our conversational overlays for Snowflake map everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "How do I give a role SELECT on a specific table?"
- "How do I grant a role access to all tables in a schema, including ones created later?"
- "Which virtual warehouses exist in my Snowflake account?"
- "Can I set auto-suspend and a size when creating a warehouse?"
- "Which large language models can I call from Cortex in my current session?"

You can browse one in the [Snowflake Account API phrasing overlay](https://apis.io/overlays/snowflake/snowflake-account-api-phrasing-overlay/).

## Getting started

Snowflake is a paid service with self-serve signup, hosted so that your software calls their systems. Your developers can start with the reference documentation for an area you care about, such as [Cortex embeddings](https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/reference/cortex-embed) or [network rules](https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/reference/network-rule), which control where connections to your account can come from. On APIs.io, see the [Snowflake profile](https://apis.io/providers/snowflake/), the [Account API](https://apis.io/apis/snowflake/snowflake-account-api/), the [Cortex Agents API](https://apis.io/apis/snowflake/cortex-agents-api/) and the [Snowpipe REST API](https://apis.io/apis/snowflake/snowpipe-rest-api/). Ask your data team how long the last access request took to fulfil, and start there.
