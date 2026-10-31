---
published: true
layout: post
title: 'Send Logs, Set Up Alerts And Troubleshoot Slow Applications With New Relic'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-logs-set-up-alerts-and-troubleshoot-slow-applications-with-new-relic.png
date: 2026-10-31 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - New Relic
  - Observability Management
  - Monitoring
  - APM
---

Your website is slow, your checkout just failed for three customers, and no one can say why. Your team is hunting through logs on separate systems, and you learned about the trouble from a customer rather than your own tools. What you actually want is one place that shows what your applications are doing, and a warning when they misbehave. [New Relic](https://apis.io/providers/new-relic/) does this, and it does it through an API, a way for software to talk directly to other software, so your applications, your deployment tools or an AI assistant can feed it information and configure it without someone clicking through screens.

## What New Relic does

New Relic offers an observability platform. Observability simply means being able to tell what your systems are doing, and why, from the signals they give off. The platform covers application performance monitoring, digital experience monitoring, infrastructure monitoring, log management and security services, and New Relic describes it as AI-powered. It is aimed at the engineers and IT teams who keep digital systems running, and it is also relevant to anyone whose revenue depends on those systems staying up. More on the [New Relic website](https://www.newrelic.com/).

## What you can get done

All of this sits under one business capability in our catalog, [Observability Management](https://apis.io/capabilities/observability-management/), but it breaks into two jobs.

### Get your signals into one place

The first job is collecting evidence. Logs are the running diary your software keeps. Metrics are measurements over time, such as how many orders went through or how long a page took. Traces follow a single request as it moves through your systems, which shows where the delay actually is. Sending all three to one place means that during an outage your team is reading one story rather than piecing together several.

- `POST /log/v1` sends log records.
- `POST /metric/v1` sends measurements, including your own business numbers.
- `POST /trace/v1` sends traces showing the path of a request.

### Hear about problems before your customers tell you

The second job is alerting. An alert policy is a set of rules for what counts as a problem, and a notification channel is where the warning goes. Setting these up through software means that every new application can come with its alerts already in place, and no one has to remember to add them after launch.

- `GET /alerts_channels.json` lists where your alerts are sent today.
- `POST /alerts_channels.json` adds a new place to send them.
- `DELETE /alerts_channels/{channel_id}.json` removes one you no longer use.
- `GET /alerts_conditions.json` lists the metric rules inside a policy.
- `POST /alerts_conditions/policies/{policy_id}.json` creates a rule that fires when an application's metric crosses a threshold.

These alert operations belong to New Relic's Alerts REST API. New Relic recommends its GraphQL API, [NerdGraph](https://apis.io/apis/new-relic/new-relic-nerdgraph-api/), for new alert work, so have your team look at that before building anything large.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 20 for New Relic, and they read like a runbook, the step-by-step instructions a team follows during an incident:

- [Application Health Triage](https://apis.io/arazzos/new-relic/new-relic-application-health-triage-workflow/) finds an application, checks its health status and pulls recent metrics.
- [Host Metric Drilldown](https://apis.io/arazzos/new-relic/new-relic-host-metric-drilldown-workflow/) finds an application, picks one of the machines running it (a host), lists what is measured there and pulls the data.
- [Create Alert Policy With Condition](https://apis.io/arazzos/new-relic/new-relic-create-alert-policy-with-condition-workflow/) creates a policy and attaches a performance rule to it.
- [Create NRQL Alert Policy](https://apis.io/arazzos/new-relic/new-relic-create-nrql-alert-policy-workflow/) does the same with a rule written in NRQL, New Relic's query language.
- [Attach Notification Channel To Policy](https://apis.io/arazzos/new-relic/new-relic-attach-notification-channel-to-policy-workflow/) creates a place for warnings to go and connects it to a policy.
- [Find Policy And List Conditions](https://apis.io/arazzos/new-relic/new-relic-find-policy-and-list-conditions-workflow/) looks up a policy by name and lists its rules, useful when you want to know what is actually being watched.

## Ask for it in plain language

Our conversational overlay for New Relic maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I ship my application's log lines straight to New Relic over HTTP?"
- "How do I push my own count, gauge or summary metrics into New Relic?"
- "Where do my alert notifications get sent right now?"
- "How do I add a new place for alert notifications to be sent?"
- "How do I alert when an APM application's metric crosses a threshold?"

You can browse one in the [New Relic Alerts phrasing overlay](https://apis.io/overlays/new-relic/new-relic-alerts-api-phrasing-overlay/).

## Getting started

New Relic is freemium with self-serve signup, and it runs as an open core offering, meaning open source software alongside a commercial hosted product. Start with the [NerdGraph introduction](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) and the guide to [API keys](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/), the passwords your software uses to connect. If you want to check your site from the outside, see the [Synthetics documentation](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/administration/synthetics-api/). On APIs.io, see the [New Relic profile](https://apis.io/providers/new-relic/), the [Alerts API](https://apis.io/apis/new-relic/new-relic-alerts-api/), the [Synthetics API](https://apis.io/apis/new-relic/new-relic-synthetics-api/) and the [OpenTelemetry endpoint](https://apis.io/apis/new-relic/new-relic-opentelemetry-otlp/). Pick the one page or process that costs you money when it stops working, and put an alert on that first.
