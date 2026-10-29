---
published: true
layout: post
title: 'Run Traffic Reports And Build Audience Segments With Adobe Analytics'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/run-traffic-reports-and-build-audience-segments-with-adobe-analytics.png
date: 2026-10-29 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Adobe Analytics
  - Analytics & BI Management
  - Customer Segmentation Management
  - Analytics
  - Digital Marketing
---

Every Monday somebody on a marketing team opens the analytics tool, picks a date range, applies the same filters as last week, and exports the same report into a spreadsheet. Then somebody else asks for the same numbers for one customer group, and it starts again. If your company runs on [Adobe Analytics](https://apis.io/providers/adobe-analytics/), all of that can be done through an API, so a script, your data warehouse, or an AI assistant can pull the report and build the segment for you.

## What Adobe Analytics does

Adobe Analytics provides real-time analytics and segmentation across marketing channels, helping organizations find high-value audiences and understand their customers. It collects the traffic and behaviour from your websites and apps into report suites (a report suite is one collection of data, usually one site or brand), and lets you slice it by dimensions such as page or campaign and metrics such as visits or revenue. More on the [Adobe website](https://www.adobe.com/).

## What you can get done

### Run reports without opening the tool

[Analytics & BI Management](https://apis.io/capabilities/analytics-bi-management/) is the reporting itself, including Data Warehouse, Adobe's way of exporting large raw reports on a schedule.

- `POST /reports` runs a report, such as page views by page for last month, with segment and date filters.
- `POST /{globalCompanyId}/data_warehouse/scheduled` schedules a Data Warehouse export to run and be delivered automatically.
- `GET /{globalCompanyId}/data_warehouse/scheduled` finds the scheduled requests you already have.
- `PUT /{globalCompanyId}/data_warehouse/scheduled/{UUID}` changes when a scheduled request runs, or cancels it.
- `GET /{globalCompanyId}/data_warehouse/report/{UUID}` checks the details and delivery status of one report.

### Define the audiences you care about

[Customer Segmentation Management](https://apis.io/capabilities/customer-segmentation-management/) manages segments, the saved definitions of a group of visitors, like "returning mobile buyers".

- `GET /segments` lists the segments in your company.
- `POST /segments` creates a segment of visitors who match certain criteria.
- `GET /segments/{segmentId}` shows the definition of one segment.
- `PUT /segments/{segmentId}` updates an existing segment.
- `DELETE /segments/{segmentId}` permanently removes a segment.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 12 for Adobe Analytics, including:

- [Create a Segment and Run a Segmented Report](https://apis.io/arazzos/adobe-analytics/adobe-analytics-create-segment-and-run-report-workflow/) inspects a report suite's dimensions, creates a segment, then runs a report filtered by it.
- [Create a Calculated Metric and Run a Report](https://apis.io/arazzos/adobe-analytics/adobe-analytics-create-calculated-metric-and-run-report-workflow/) builds a new metric from existing ones and reports on it.
- [Annotate a Date Range and Run a Report](https://apis.io/arazzos/adobe-analytics/adobe-analytics-annotate-and-run-report-workflow/) marks a period, such as a launch week, and reports over it.
- [Clone a Segment](https://apis.io/arazzos/adobe-analytics/adobe-analytics-clone-segment-workflow/) copies an existing segment under a new name.
- [Estimate and Run a Data Repair Job](https://apis.io/arazzos/adobe-analytics/adobe-analytics-estimate-and-run-data-repair-workflow/) sizes a fix to collected data, submits it and checks its status.

## Ask for it in plain language

Our conversational overlay for Adobe Analytics maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I pull page views by page for last month from a report suite?"
- "How do I schedule a Data Warehouse export to run and be delivered automatically?"
- "How do I create a segment of visitors who match certain criteria?"
- "What segments exist in my Adobe Analytics company?"
- "Can I change when a scheduled Data Warehouse request runs?"

You can see one in the [Adobe Analytics Account phrasing overlay](https://apis.io/overlays/adobe-analytics/adobe-analytics-account-api-phrasing-overlay/).

## Getting started

Adobe Analytics is paid. Start with the [Livestream guide](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/livestream/) if you want hits in real time. The [1.4 APIs](https://developer.adobe.com/analytics-apis/docs/1.4/) are deprecated, so build new work on the current version. On APIs.io, see the [Adobe Analytics profile](https://apis.io/providers/adobe-analytics/), the [Reports API](https://apis.io/apis/adobe-analytics/adobe-analytics-reports-api/), the [Report Suites API](https://apis.io/apis/adobe-analytics/adobe-analytics-report-suites-api/) and the [Livestream API](https://apis.io/apis/adobe-analytics/adobe-analytics-livestream-api/). Take the one report you rebuild every week and make it the first thing you automate.
