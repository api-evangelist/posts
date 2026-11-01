---
published: true
layout: post
title: 'Monitor Your Systems, Respond To Incidents And Track Cloud Costs With Datadog'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/monitor-your-systems-respond-to-incidents-and-track-cloud-costs-with-datadog.png
date: 2026-11-01 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Datadog
  - Observability Management
  - Incident Response Management
  - IT Financial Management
  - Monitoring
  - Analytics
---

Your site went down during a release last week, the person on call found out late, and the postmortem notes are scattered across three chat threads. Then the cloud bill arrived, and it was higher than last month with nobody able to say which team was responsible. What you want is one place that watches your systems, gets the right person's attention and shows you what it all costs. [Datadog](https://apis.io/providers/datadog/) does this, and it does it through an API, a way for software to talk directly to other software, so your deployment tools, your finance reports or an AI assistant can work with it without someone clicking through screens.

## What Datadog does

Datadog is a monitoring and analytics platform that helps organizations see into their infrastructure, applications and services. It collects, visualizes and analyzes real-time data from sources including servers, databases and cloud services, so companies can track performance, troubleshoot problems and tune their systems. More on the [Datadog website](https://www.datadoghq.com/).

## What you can get done

### See what your systems are doing

[Observability Management](https://apis.io/capabilities/observability-management/) means being able to tell what your systems are doing, and why, from the signals they give off. Logs are the running diary your software keeps, and metrics are measurements over time, like how long a page takes to load. Getting them into one place means an outage can be diagnosed from one screen, and your own business numbers can sit beside the technical ones.

- `POST /api/v2/logs` sends logs to Datadog.
- `POST /api/v2/logs/events/search` searches them, for example for errors from one service.
- `POST /api/v2/series` submits your own measurements.
- `POST /api/v2/query/timeseries` pulls metric values over time, so you can chart them outside Datadog.

### Get the right person moving when something breaks

[Incident Response Management](https://apis.io/capabilities/incident-response-management/) covers what happens after the alarm. A page is an urgent alert sent to whoever is on call, and an incident is the record of the whole event. Handling these through software means rotations stay current, planned maintenance does not wake anyone up and the follow-up paperwork lives with the incident.

- `POST /api/v2/on-call/pages/{page_id}/acknowledge` confirms someone has the page, so it stops escalating.
- `POST /api/v2/on-call/pages/{page_id}/resolve` closes it once the issue is fixed.
- `PUT /api/v2/on-call/schedules/{schedule_id}` changes who is on call and when.
- `POST /api/v2/downtime` schedules a window that silences alerts during a deployment or maintenance.
- `PATCH /api/v2/incidents/{incident_id}/attachments` adds items like a postmortem link to an incident.

### Find out where the cloud money is going

[IT Financial Management](https://apis.io/capabilities/it-financial-management/) is the one a finance lead will care about. Connecting your cloud billing data and setting budgets gives you a view of spending alongside the systems that cause it, and breaking Datadog's own cost down by team makes the conversation about the bill much shorter.

- `POST /api/v2/cost/aws_cur_config` connects an AWS Cost and Usage Report, Amazon's detailed billing file.
- `POST /api/v2/cost/azure_uc_config` adds Azure cost data.
- `PUT /api/v2/cost/budget` creates or updates a cost budget.
- `GET /api/v2/cost_by_tag/monthly_cost_attribution` shows monthly cost split by tag, a label such as a team name.

### Watch for security threats and control who has access

[Threat Detection & Response Management](https://apis.io/capabilities/threat-detection-response-management/) lets your security team write rules that spot suspicious activity and test them against the past before relying on them. [Identity & Access Management](https://apis.io/capabilities/identity-access-management/) controls what each person in your organization can see and change inside Datadog.

- `POST /api/v2/security_monitoring/rules/validation` checks a detection rule for errors.
- `POST /api/v2/siem-historical-detections/jobs` runs a rule against past logs.
- `PATCH /api/v2/security_monitoring/signals/{signal_id}/assignee` assigns a security signal to someone to investigate.
- `POST /api/v2/roles/{role_id}/permissions` gives a role an extra permission.
- `PATCH /api/v2/ip_allowlist` changes which network addresses are allowed in, for example your office.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 24 for Datadog, and many confirm their own work by reading back the result:

- [Create a Monitor](https://apis.io/arazzos/datadog/datadog-create-monitor-workflow/) creates a monitor, an automated check that raises an alert, then reads it back and validates it.
- [Create an Incident](https://apis.io/arazzos/datadog/datadog-create-incident-workflow/) declares an incident, reads it back and lists incidents.
- [Bulk Mute Monitors](https://apis.io/arazzos/datadog/datadog-bulk-mute-monitors-workflow/) searches monitors by tag and silences one that matches.
- [Cleanup Stale Monitors](https://apis.io/arazzos/datadog/datadog-cleanup-stale-monitors-workflow/) lists monitors by tag and deletes a stale match, reducing alert noise.
- [Create a Log-based Metric](https://apis.io/arazzos/datadog/datadog-create-log-metric-workflow/) turns a log search into a measurement you can track over time.
- [Create a Logs Archive](https://apis.io/arazzos/datadog/datadog-create-log-archive-workflow/) creates an archive of logs stored in Amazon S3 and reads it back.

## Ask for it in plain language

Our conversational overlays for Datadog, 107 in all, map everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "How can I search my logs for errors from a service?"
- "How do I schedule a downtime to silence monitors during a deploy?"
- "Can I add a new person to an existing on-call rotation?"
- "How much did each team spend on Datadog last month, broken down by tag?"
- "Can I backtest a rule over historical data?"
- "How do I add an office IP range to the allowlist?"

You can browse one in the [Datadog Acknowledge phrasing overlay](https://apis.io/overlays/datadog/datadog-acknowledge-api-phrasing-overlay/).

## Getting started

Datadog is freemium, hosted and self-serve, so you can sign up and try it before committing. Your team will want the guide to [authentication](https://docs.datadoghq.com/api/latest/authentication/), then the references for [dashboards](https://docs.datadoghq.com/api/latest/dashboards/), [synthetic tests](https://docs.datadoghq.com/api/latest/synthetics/), which simulate a user visiting your site, and [service level objectives](https://docs.datadoghq.com/api/latest/service-level-objectives/), the performance targets you commit to. On APIs.io, see the [Datadog profile](https://apis.io/providers/datadog/), the [Dashboards API](https://apis.io/apis/datadog/datadog-dashboards-api/), the [Downtimes API](https://apis.io/apis/datadog/datadog-downtimes-api/) and the [Security Monitoring API](https://apis.io/apis/datadog/datadog-security-monitoring-api/). Choose the one failure that cost you the most this year, and have your team set up a monitor and an on-call page for that first.
