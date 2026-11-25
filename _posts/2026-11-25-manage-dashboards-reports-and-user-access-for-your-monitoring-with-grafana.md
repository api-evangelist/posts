---
published: true
layout: post
title: 'Manage Dashboards, Reports And User Access For Your Monitoring With Grafana'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-dashboards-reports-and-user-access-for-your-monitoring-with-grafana.png
date: 2026-11-25 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Grafana
  - Observability Management
  - Analytics & BI Management
  - Identity & Access Management
  - Observability
  - Monitoring
---

If your business runs on software, somebody needs to know when it slows down or breaks, and somebody needs to show the rest of the company how things are going. That usually means a wall of dashboards, a weekly report someone exports by hand, and a long list of people who need the right level of access to it all. Grafana is one of the most common places that work happens, and it can be driven through an API, which is a way for your other software, or an AI assistant working for you, to set up reports, mark events on charts and manage who can see what, without anyone clicking through the screens. Everything I have catalogued about it sits on its [APIs.io profile](https://apis.io/providers/grafana-com/).

## What Grafana does

Grafana Labs, from [grafana.com](https://www.grafana.com/), builds an open observability stack. Observability is the practice of collecting metrics, logs and traces from your systems so you can see what they are doing in production. Alongside the Grafana dashboarding platform there is Loki for logs, Mimir for metrics, Tempo for traces and Pyroscope for profiling, plus k6 for load testing, OnCall for incident response and Synthetic Monitoring for checking your sites from the outside. Grafana Cloud delivers the portfolio as a managed service, and Grafana Enterprise adds reporting and finer-grained access control for teams running it themselves.

## What you can get done

### [Observability Management](https://apis.io/capabilities/observability-management/)

This is the capability for keeping your monitoring itself in order. Recording rules precompute the numbers you look at most so dashboards load quickly, and annotations put a marker on a chart, like "deployed new release here", so anyone looking at a spike knows what caused it.

- `GET /recording-rules` lists every recording rule, active or deleted.
- `POST /recording-rules/test` tests a recording rule before you commit to it.
- `POST /recording-rules` creates a recording rule and starts it.
- `GET /annotations` finds annotations already on your dashboards.
- `POST /annotations` adds a new annotation, for example from your deployment tool.

### [Analytics & BI Management](https://apis.io/capabilities/analytics-bi-management/)

If someone on your team spends Monday morning screenshotting dashboards into an email, this is the capability that replaces them. Grafana can turn a dashboard into a report, render it, and email it on its own.

- `POST /reports` creates a report.
- `GET /reports/dashboards/{uid}` lists the reports built from a given dashboard.
- `POST /reports/email` sends a report.
- `GET /reports/render/csvs` downloads a report as CSV for a spreadsheet.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

As more people rely on your dashboards, deciding who can view, edit or administer them turns into a job of its own. These operations let your HR or IT systems handle it: create roles, assign them and add or remove people as they join and leave.

- `GET /access-control/roles` lists all roles.
- `POST /access-control/roles` creates a new custom role.
- `GET /access-control/roles/{roleUID}/assignments` shows who holds a role.
- `POST /admin/users` creates a new user.
- `DELETE /admin/users/{user_id}` removes a user when they leave.

## Getting started

Grafana is freemium, with a free tier, and the details are on the [Grafana pricing section](https://apis.io/providers/grafana-com/#pricing) of its profile. Because there is both a cloud service and a version you run yourself, check which one you are on before you start, since the address you call differs.

The documentation I would start with:

- [Grafana Cloud API reference](https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/)
- [Loki HTTP API](https://grafana.com/docs/loki/latest/reference/loki-http-api/)
- [Mimir HTTP API](https://grafana.com/docs/mimir/latest/references/http-api/)
- [Cloud access policies](https://grafana.com/docs/grafana-cloud/account-management/authentication-and-permissions/access-policies/), which covers how to get a token

On APIs.io, see the [Grafana profile](https://apis.io/providers/grafana-com/), the [Grafana Cloud API](https://apis.io/apis/grafana-com/grafana-cloud-api/), the [Grafana OnCall API](https://apis.io/apis/grafana-com/oncall-api/), the [Grafana Synthetic Monitoring API](https://apis.io/apis/grafana-com/synthetic-monitoring-api/) and the [Grafana Access Control API](https://apis.io/apis/grafana-com/grafana-com-access-control-api/).

Start with whichever report someone on your team is currently building by hand, and automate that one first.
