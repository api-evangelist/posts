---
published: true
layout: post
title: 'Create, Back Up And Restore Your Postgres Databases Automatically With Prisma'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/create-back-up-and-restore-your-postgres-databases-automatically-with-prisma.png
date: 2026-10-31 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Prisma
  - IT Infrastructure Management
  - Disaster Recovery & Resilience
  - Environment Management
  - Developer Identity & Credential Management
  - Database
  - Developer Tools
---

If your business runs on a web application, there is a database underneath it holding your customers, your orders and everything else you cannot afford to lose. You need a new one each time a project starts, a safe copy before anyone makes a risky change, and a way back when something goes wrong. Usually that means waiting on the one person who knows how. [Prisma](https://apis.io/providers/prisma/) can do this work through an API, a way for software to talk directly to other software, so your deployment tools, a script or an AI assistant can handle these chores on request.

## What Prisma does

Prisma serves teams building with TypeScript and Node.js, two of the common tools for writing web applications. Its product line includes Prisma ORM, a layer that lets programmers work with a database through their own code, and Prisma Postgres, a managed database based on PostgreSQL, the widely used open source database. "Managed" and "serverless" mean Prisma runs the machines and you just use the database. It also offers Compute for deploying apps and AI agents next to their database, along with Prisma Studio, Object Store buckets and Query Insights. All of it is tied together by one command line tool, a REST Management API and a hosted MCP server, the connector standard AI assistants use to call tools. More on the [Prisma website](https://www.prisma.io).

## What you can get done

### Create and manage your databases

[IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/) is the plain housekeeping of databases. When creating one is a single call, every new project, client or test can get its own without a ticket and a wait, and old ones can be cleaned up instead of quietly costing you money.

- `GET /v1/databases` lists the databases your access can reach.
- `POST /v1/databases` creates a new database in a project.
- `PATCH /v1/databases/{databaseId}` renames a database or moves it to a different branch of your code.
- `DELETE /v1/databases/{databaseId}` deletes a database.
- `POST /v1/databases/{targetDatabaseId}/restore` overwrites a database with the contents of a backup. Prisma labels this one destructive, so treat it with respect.

### Keep backups you can actually come back to

[Disaster Recovery & Resilience](https://apis.io/capabilities/disaster-recovery-resilience/) is your insurance policy. The most useful habit here is taking a backup right before anything risky, such as a major change to how your data is structured, and making that automatic means no one has to remember it.

- `GET /databases/{databaseId}/backups` lists your automatic and manual backups.
- `POST /databases/{databaseId}/backups` takes a manual backup right now.
- `POST /databases/{databaseId}/backups/{backupId}/restore` restores a database from a chosen backup.

### Keep staging and production apart

[Environment Management](https://apis.io/capabilities/environment-management/) deals with environments, the separate copies of your system that keep experiments away from real customers. Staging is where you try things and production is what customers use. Scripting their setup means each one is built the same way every time.

- `GET /projects/{projectId}/environments` lists the environments in a project.
- `POST /projects/{projectId}/environments` adds a new one, such as staging.
- `GET /environments/{environmentId}` shows how one environment is configured.
- `DELETE /environments/{environmentId}` removes an environment and its API keys.

### Control what can connect to your account

[Developer Identity & Credential Management](https://apis.io/capabilities/developer-identity-credential-management/) covers service tokens, which are passwords issued to software rather than to people. Giving each automated tool its own token means that when a contractor leaves or a tool is retired, you revoke that one and nothing else breaks.

- `GET /v1/workspaces/{workspaceId}/service-tokens` lists the tokens in your workspace.
- `POST /v1/workspaces/{workspaceId}/service-tokens` creates a new token.
- `DELETE /v1/workspaces/{workspaceId}/service-tokens/{serviceTokenId}` revokes a token.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 12 for Prisma, and these are the ones I would look at first:

- [Prisma Postgres Backup and Restore](https://apis.io/arazzos/prisma/prisma-postgres-backup-and-restore-workflow/) takes a manual backup, waits until it completes and restores the database from it.
- [Prisma Postgres Add a Database to a Project](https://apis.io/arazzos/prisma/prisma-postgres-add-database-to-project-workflow/) confirms the project exists, creates another database in it and produces a connection string, the address your application uses to reach the database.
- [Prisma Data Platform Bootstrap a Project Environment](https://apis.io/arazzos/prisma/prisma-platform-bootstrap-environment-workflow/) creates a project, adds an environment and issues an API key for it.
- [Prisma Data Platform Rotate an Environment API Key](https://apis.io/arazzos/prisma/prisma-platform-rotate-api-key-workflow/) issues a fresh key and revokes the old one, so there is no gap in service.

## Ask for it in plain language

Our conversational overlay for Prisma maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "Can I trigger a manual backup of a database before a risky migration?"
- "How do I roll my database back to a specific backup?"
- "Will data written since the backup be lost if I restore over my database?"
- "How do I add a staging environment to my project?"
- "How do I revoke a service token that is no longer needed?"

You can browse one in the [Prisma API Keys phrasing overlay](https://apis.io/overlays/prisma/prisma-api-keys-api-phrasing-overlay/).

## Getting started

Prisma is freemium with self-serve signup, and you call its hosted service. Start with the documentation for the [REST API](https://www.prisma.io/docs/rest-api) and for [authentication](https://www.prisma.io/docs/rest-api/authentication), and the [ORM](https://www.prisma.io/docs/orm) if your developers will be working with it directly. On APIs.io, see the [Prisma profile](https://apis.io/providers/prisma/), the [Databases API](https://apis.io/apis/prisma/prisma-databases-api/), the [Database Backups API](https://apis.io/apis/prisma/prisma-database-backups-api/) and the [Environments API](https://apis.io/apis/prisma/prisma-environments-api/). Ask whoever looks after your application to automate one backup before your next big change, then practice restoring it on a test database so you know it works.
