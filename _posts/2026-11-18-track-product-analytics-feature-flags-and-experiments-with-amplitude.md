---
published: true
layout: post
title: 'Track Product Analytics, Feature Flags And Experiments With Amplitude'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/track-product-analytics-feature-flags-and-experiments-with-amplitude.png
date: 2026-11-18 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Amplitude
  - Product Usage Analytics
  - Feature Flag Management
  - A/B Test Execution
  - Privacy & Data Protection Management
  - Product Analytics
  - Experimentation
---

If you run a digital product, you want answers to a handful of questions every week. Are people coming back? Where do they drop out of signup? Did the new checkout button actually help? And can we turn a feature on for a few customers before everyone gets it? [Amplitude](https://apis.io/providers/amplitude/) answers those questions, and it does it through an API, which means your own software, your reporting tools, or an AI assistant can send it activity and ask it things on your behalf.

An API is a set of doors into a service that other software can knock on. A program sends a request and gets an answer back, no dashboard required. That is what lets product data flow into the places your team already works.

## What Amplitude does

Amplitude is a digital analytics platform that helps product teams understand user behavior, run experiments and drive growth. Its APIs cover event ingestion, user management, cohort syncing, taxonomy governance, A/B testing and data export. You can find it at [amplitude.com](https://www.amplitude.com/).

## What you can get done

### See how people use your product

[Product Usage Analytics](https://apis.io/capabilities/product-usage-analytics/) is the heart of it: funnels show how many people make it through each step of a process, and retention shows how many come back. Pull these into your own reports, or let an assistant answer "how did onboarding convert this week?"

- `GET /api/2/funnels` runs a funnel analysis.
- `GET /api/2/retention` returns retention over time.
- `GET /api/2/events/segmentation` breaks an event down by property.
- `GET /api/2/users` counts active and new users.
- `GET /api/2/sessions/average` returns average session length.

### Send activity in

Nothing can be analyzed until it arrives. [Product Telemetry Instrumentation](https://apis.io/capabilities/product-telemetry-instrumentation/) means recording what happens in your product. `POST /2/httpapi` uploads events as they happen and `POST /batch` sends large batches from your servers.

### Turn features on gradually

A feature flag is a switch that lets you turn a feature on for some customers and off for others without shipping new code. [Feature Flag Management](https://apis.io/capabilities/feature-flag-management/) handles that.

- `GET /api/1/flags` lists your flags.
- `POST /api/1/flags` creates a new one.
- `PATCH /api/1/flags/{id}` updates or enables a flag.
- `POST /v1/vardata` works out which version of a feature a given user should see.

### Test which version works better

[A/B Test Execution](https://apis.io/capabilities/a-b-test-execution/) is about showing two versions to different people and measuring which does better.

- `GET /api/1/experiments` lists your experiments.
- `POST /api/1/experiments` creates one.
- `PATCH /api/1/experiments/{id}` updates or starts it.

### Keep tracking tidy and honor privacy requests

[Telemetry Quality & Governance](https://apis.io/capabilities/telemetry-quality-governance/) keeps one shared definition of which events exist, so every team counts the same thing. `GET /api/2/taxonomy/event` lists event types and `POST /api/2/taxonomy/event` adds one. And when a customer asks for their data, or asks you to delete it, [Privacy & Data Protection Management](https://apis.io/capabilities/privacy-data-protection-management/) lets you handle it from your support process.

- `POST /api/2/dsar/requests` asks for a copy of a person's data.
- `GET /api/2/dsar/requests/{requestId}` checks whether it is ready.
- `POST /api/2/deletions/users` requests that a person's data be deleted.

If you manage your team's logins centrally, [Tenant Identity Federation](https://apis.io/capabilities/tenant-identity-federation/) covers the SCIM operations, such as `POST /scim/1/Users`, that create and remove Amplitude users from your identity system.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order to finish one job. These are written in Arazzo, an open format for describing those recipes so software can follow them.

- [Feature Flag Rollout](https://apis.io/arazzos/amplitude/amplitude-flag-rollout-workflow/) creates a flag, enables it, and confirms it is live.
- [Experiment Lifecycle](https://apis.io/arazzos/amplitude/amplitude-experiment-lifecycle-workflow/) creates an A/B experiment, starts it, and confirms it in the list.
- [Behavioral Cohort Export](https://apis.io/arazzos/amplitude/amplitude-cohort-export-workflow/) requests a cohort export, waits, and downloads the list of members.
- [Cohort Upload and Verify](https://apis.io/arazzos/amplitude/amplitude-cohort-upload-verify-workflow/) brings in a list of users from elsewhere and confirms it arrived.
- [DSAR Request and Poll](https://apis.io/arazzos/amplitude/amplitude-dsar-request-workflow/) submits a data access request and waits for the download link.
- [Identity Merge and Verify](https://apis.io/arazzos/amplitude/amplitude-identity-merge-workflow/) joins an anonymous visitor to a known account and reads back the result.
- [Chart Annotation Lifecycle](https://apis.io/arazzos/amplitude/amplitude-annotation-lifecycle-workflow/) adds a note to a chart, like "pricing change shipped," and confirms it.

## Getting started

Amplitude is freemium with self-serve signup, and it is a hosted service, so you call their endpoint. Its Plus plan starts at $0; the rest is in the [Pricing section of the Amplitude profile](https://apis.io/providers/amplitude/#pricing). Amplitude's documentation covers the [Batch Event Upload API](https://amplitude.com/docs/apis/analytics/batch-event-upload), the [Group Identify API](https://amplitude.com/docs/apis/analytics/group-identify) and the [Releases API](https://amplitude.com/docs/apis/analytics/releases).

On APIs.io you can browse the full [Amplitude profile](https://apis.io/providers/amplitude/) and APIs such as the [Evaluation API](https://apis.io/apis/amplitude/amplitude-evaluation-api/), the [Cohorts API](https://apis.io/apis/amplitude/amplitude-cohorts-api/), the [User Privacy API](https://apis.io/apis/amplitude/user-privacy-api/) and the [Session Replay API](https://apis.io/apis/amplitude/session-replay-api/).

Start with the one number you check every Monday, and have it pulled for you instead.
