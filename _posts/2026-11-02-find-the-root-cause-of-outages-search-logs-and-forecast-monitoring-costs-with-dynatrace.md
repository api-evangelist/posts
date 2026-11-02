---
published: true
layout: post
title: 'Find The Root Cause Of Outages, Search Logs And Forecast Monitoring Costs With Dynatrace'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-the-root-cause-of-outages-search-logs-and-forecast-monitoring-costs-with-dynatrace.png
date: 2026-11-02 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Dynatrace
  - Incident Response Management
  - Observability Management
  - Identity & Access Management
  - Subscription Billing & Revenue Management
  - Application Performance Monitoring
  - Observability
---

Your website slows to a crawl on a busy morning. Customers are complaining, three teams are on a call, and each one is sure the problem is somewhere else. After it is fixed, somebody has to write up what happened, and later somebody in finance asks why the monitoring bill went up. If this sounds familiar, the answers usually exist already, but they are stuck in a tool only a few people know how to use. [Dynatrace](https://apis.io/providers/dynatrace/) makes them available through an API, a way for software to talk directly to other software, so your own systems or an AI assistant can ask the question and get the answer.

## What Dynatrace does

Dynatrace describes itself as a software intelligence platform. In plain terms, it watches your applications and the cloud infrastructure underneath them, as well as the experience your customers get when they use them, and it applies artificial intelligence to operations work. People in the field call this observability, meaning the ability to tell what is happening inside your systems from the information they give off. More on the [Dynatrace website](https://www.dynatrace.com/).

## What you can get done

Here are four of the business capabilities our catalog maps for Dynatrace, starting with the one you will care about most when something breaks.

### [Work out what went wrong during an incident](https://apis.io/capabilities/incident-response-management/)

Dynatrace groups what it detects into problems. Being able to read them from other software means an outage can open a ticket in your help desk with the likely cause and impact already filled in, and your team's notes stay attached to the problem where the next person can find them.

- `GET /problems` lists the problems Dynatrace has detected, and can filter by time range or by the affected systems.
- `GET /problems/{problemId}` gets one problem's details and root cause.
- `POST /problems/{problemId}/comments` adds a comment, such as a ticket reference or the steps taken to fix it.
- `POST /problems/{problemId}/close` closes a problem once it is resolved.

### [Search your logs and measurements](https://apis.io/capabilities/observability-management/)

Logs are the running diary your systems keep, and metrics are measurements taken over time, such as how busy a server is. Between them they hold the evidence for most questions about what your software did. With access through software, a weekly reliability report can build itself, and your security team can receive the logs it needs without a manual export.

- `GET /logs/search` searches log records.
- `GET /logs/aggregate` counts log records by a field, for example errors per service.
- `GET /logs/export` exports log records in bulk for archiving or for a security tool.
- `GET /metrics/query` retrieves measurements over a period of time.

### [Forecast and explain the monitoring bill](https://apis.io/capabilities/subscription-billing-revenue-management/)

Usage-based tools can surprise you. Dynatrace subscriptions are measured against a commitment, so the question that matters to finance is whether you are going to run over before the term ends. Feeding these figures into your budgeting tools means that question gets asked monthly and not at renewal time.

- `GET /sub/v2/accounts/{account-uuid}/subscriptions` lists your account's subscriptions.
- `GET /sub/v2/accounts/{account-uuid}/subscriptions/forecast` forecasts usage by the end of your annual commitment.
- `GET /sub/v2/accounts/{account-uuid}/subscriptions/{subscription-uuid}/usage` shows usage by date.
- `GET /sub/v2/accounts/{account-uuid}/subscriptions/{subscription-uuid}/cost` shows aggregated cost by date.

### [Review who has access](https://apis.io/capabilities/identity-access-management/)

Auditors want to know who can see and change what, and spreadsheets assembled from screenshots do not hold up well. These operations let you pull the real answer on a schedule, which turns an access review from a yearly scramble into a routine job.

- `GET /iam/v1/resolution/{level-type}/{level-id}/effectivepermissions` shows what a user or group can do once all of their policies are combined.
- `GET /iam/v1/repo/{level-type}/{level-id}/policies/aggregate` lists the policies that apply at a level, including inherited ones.
- `GET /iam/v1/accounts/{account-uuid}/groups/{group-uuid}/permissions` lists a group's older role-based permissions.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 15 for Dynatrace, and several of them match work your team already does by hand:

- [Audit Account Access](https://apis.io/arazzos/dynatrace/dynatrace-account-access-audit-workflow/) goes through users, groups and permissions across an account for an access review.
- [Investigate Error Logs and Annotate](https://apis.io/arazzos/dynatrace/dynatrace-error-log-investigation-workflow/) totals up error logs by source, pulls the matching records and raises an error event.
- [Annotate a Deployment with a Custom Event](https://apis.io/arazzos/dynatrace/dynatrace-annotate-deployment-event-workflow/) marks a software release on a service's timeline, so when a problem begins you can see whether a release came just before it.
- [Export Logs for SIEM Forwarding](https://apis.io/arazzos/dynatrace/dynatrace-export-logs-for-siem-workflow/) sizes an export and then moves the records page by page to a SIEM, which is the system a security team uses to watch for threats.
- [Map an Entity's Dependencies](https://apis.io/arazzos/dynatrace/dynatrace-entity-dependency-map-workflow/) finds a system and shows what it is connected to, useful for knowing what else a failure might touch.

## Ask for it in plain language

Our conversational overlays for Dynatrace map everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "What problems is Dynatrace reporting right now?"
- "What is the root cause and impact of a specific problem?"
- "How many errors did each service log today?"
- "Will we overrun our annual commitment before the term ends?"
- "What can a given user actually do once all their policies are combined?"

You can browse one in the [Dynatrace Account Audits phrasing overlay](https://apis.io/overlays/dynatrace/dynatrace-account-audits-api-phrasing-overlay/).

## Getting started

Dynatrace is a paid service with self-serve signup, hosted so that your software calls their systems. Your developers will want the [Environment API documentation](https://docs.dynatrace.com/docs/dynatrace-api/environment-api) and the guide to [authentication](https://docs.dynatrace.com/docs/discover-dynatrace/references/dynatrace-api/basics/dynatrace-api-authentication), which explains how your software proves who it is when it connects. On APIs.io, see the [Dynatrace profile](https://apis.io/providers/dynatrace/), the [Environment API](https://apis.io/apis/dynatrace/dynatrace-environment-api/), the [Service-Level Objectives API](https://apis.io/apis/dynatrace/dynatrace-slo-api/) and the [Releases API](https://apis.io/apis/dynatrace/dynatrace-releases-api/). If you already pay for Dynatrace, ask your team which of these answers still reach you by screenshot.
