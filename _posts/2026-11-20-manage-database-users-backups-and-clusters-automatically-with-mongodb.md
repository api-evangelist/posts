---
published: true
layout: post
title: 'Manage Database Users, Backups And Clusters Automatically With MongoDB'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-database-users-backups-and-clusters-automatically-with-mongodb.png
date: 2026-11-20 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - MongoDB
  - Identity & Access Management
  - Disaster Recovery & Resilience
  - IT Infrastructure Management
  - Observability Management
  - Cloud Database
  - Database
---

If your business runs on a database, there is a long list of chores that come with it. Somebody has to add and remove the people who can get at the data, make sure backups are happening and can actually be restored, spin up more capacity when things get busy, keep an eye on the logs, and reconcile the bill at the end of the month. Most teams do this by clicking around a dashboard. [MongoDB](https://apis.io/providers/mongodb/) lets you do all of it through an API instead, which means a script, your internal tools, or an AI assistant can take care of those chores for you on a schedule or on request.

An API is just a way for software to ask another piece of software to do something. Every button in the MongoDB Atlas dashboard has a matching request behind it, and once you know that, the dashboard stops being the only way in.

## What MongoDB does

[MongoDB](https://www.mongodb.com) provides a document-model database platform that can be deployed on any cloud or on your own infrastructure. A "document" database stores records as flexible, nested objects rather than rows in rigid tables, which suits applications whose data does not fit neatly into a spreadsheet. Its hosted service, MongoDB Atlas, handles multi-cloud data management, vector search for AI applications, and real-time operational workloads, and it ships tools like Compass for people who prefer a visual interface.

## What you can get done

### [Control who can access your data](https://apis.io/capabilities/identity-access-management/)

The most important question for any database is who can get into it. MongoDB exposes 95 operations for managing database users, custom roles, teams, service accounts and federated sign-in, so onboarding and offboarding can follow your HR process instead of someone remembering to do it.

- `POST /api/atlas/v2/groups/{groupId}/databaseUsers` creates a new database user in a project.
- `GET /api/atlas/v2/groups/{groupId}/databaseUsers` lists every database user in a project, handy for an access review.
- `DELETE /api/atlas/v2/groups/{groupId}/databaseUsers/{databaseName}/{username}` removes a user the day they leave.
- `POST /api/atlas/v2/groups/{groupId}/customDBRoles/roles` defines a custom role with exactly the permissions a job needs.

### [Back up and restore when something goes wrong](https://apis.io/capabilities/disaster-recovery-resilience/)

Backups only matter on the day you need one. With 64 operations covering snapshots, export buckets and restore jobs, you can check that backups exist, ship copies to your own storage, and kick off a restore without waiting on a person to log in.

- `GET /api/atlas/v2/groups/{groupId}/backup/exportBuckets` lists the storage buckets your snapshots are exported to.
- `POST /api/atlas/v2/groups/{groupId}/backup/exportBuckets` sets up a new place to export snapshots.
- `POST /api/atlas/v2/groups/{groupId}/flexClusters/{name}/backup/restoreJobs` starts a restore for a cluster.
- `GET /api/atlas/v2/groups/{groupId}/flexClusters/{name}/backup/restoreJobs` shows the status of past and running restores.

### [Add or change database capacity](https://apis.io/capabilities/it-infrastructure-management/)

A cluster is the group of servers your database runs on. MongoDB's 53 infrastructure operations let you create clusters, see what you are running across every project, and upgrade a small shared cluster when your business outgrows it.

- `GET /api/atlas/v2/clusters` returns every cluster you are authorized to see, across all projects.
- `POST /api/atlas/v2/groups/{groupId}/clusters` creates a new cluster in a project.
- `GET /api/atlas/v2/groups/{groupId}/clusters/provider/regions` lists the cloud regions you can deploy into.
- `POST /api/atlas/v2/groups/{groupId}/clusters/tenantUpgrade` upgrades a shared-tier cluster.

### [Watch logs and metrics](https://apis.io/capabilities/observability-management/)

Observability is the practice of knowing what your systems are doing without guessing. There are 41 operations here for sending metrics to the monitoring tools you already use and pulling down logs when you need to investigate.

- `POST /api/atlas/v2/groups/{groupId}/metricIntegrations` connects your database metrics to an outside monitoring service.
- `GET /api/atlas/v2/groups/{groupId}/metricIntegrations` lists the integrations that are active.
- `GET /api/atlas/v2/groups/{groupId}/clusters/{hostName}/logs/{logName}.gz` downloads the logs for one server.

### [Keep an eye on the bill](https://apis.io/capabilities/invoicing-statement-management/)

Finance teams want the numbers without asking engineering. Thirteen operations cover invoices and usage, so a monthly report can pull itself.

- `GET /api/atlas/v2/orgs/{orgId}/invoices` returns all invoices for your organization.
- `GET /api/atlas/v2/orgs/{orgId}/invoices/pending` shows what is accruing this period.
- `GET /api/atlas/v2/orgs/{orgId}/invoices/{invoiceId}/csv` returns an invoice as a CSV file ready for a spreadsheet.
- `POST /api/atlas/v2/orgs/{orgId}/billing/costExplorer/usage` starts a cost breakdown query.

There is more beyond these five. MongoDB's performance advisor will return suggested indexes and schema advice through `GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/performanceAdvisor/suggestedIndexes`, and its [security architecture](https://apis.io/capabilities/security-architecture-management/) operations let you manage encryption at rest with your own keys through `PATCH /api/atlas/v2/groups/{groupId}/encryptionAtRest`.

## Getting started

MongoDB is freemium with self-serve signup, and it is a hosted service, so you call their endpoint rather than running anything yourself. For what it costs, see the [pricing section of the MongoDB profile](https://apis.io/providers/mongodb/#pricing); the entry plan, Free (M0), is listed at \$0/hour.

Start with how to authenticate in the [authentication guide](https://www.mongodb.com/docs/atlas/api/api-authentication/), then work from the [Atlas Admin API reference](https://www.mongodb.com/docs/atlas/api/atlas-admin-api-ref/). If you want to read and write your data directly over HTTPS, there is the [Data API documentation](https://www.mongodb.com/docs/atlas/app-services/data-api/), and for application services there is the [App Services Admin API](https://www.mongodb.com/docs/atlas/app-services/admin/api/v3/).

On APIs.io you will find the full [MongoDB profile](https://apis.io/providers/mongodb/) along with individual pages for the [Atlas Data API](https://apis.io/apis/mongodb/mongodb-atlas-data-api/), the [Cloud Backups API](https://apis.io/apis/mongodb/mongodb-cloud-backups-api/), the [Alerts API](https://apis.io/apis/mongodb/mongodb-alerts-api/) and the [Access Tracking API](https://apis.io/apis/mongodb/mongodb-access-tracking-api/).

Pick the one chore your team does by hand every week, whether that is the access review or the backup check, and hand that to the API first.
