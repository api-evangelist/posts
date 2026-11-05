---
published: true
layout: post
title: 'Refresh Datasets, Publish Reports And Embed Dashboards With Power BI'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/refresh-datasets-publish-reports-and-embed-dashboards-with-power-bi.png
date: 2026-11-05 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Power BI
  - Analytics & BI Management
  - Business Intelligence
  - Dashboards
---

The Monday sales dashboard is stale again because nobody pressed refresh. The same report has to be copied into twelve regional workspaces and pointed at twelve regional datasets. A customer wants to see their numbers inside your product, not in a separate login. If your company runs on Power BI, these are the chores that eat an analyst's week. [Power BI](https://apis.io/providers/power-bi/) exposes all of them through an API, a way for software to talk directly to other software, so a script, your data pipeline or an AI assistant can refresh the data, publish the report and hand you the embed link.

## What Power BI does

Power BI is Microsoft's business analytics service. Microsoft describes it as delivering insights to enable fast, informed decisions, with interactive visualizations and an interface simple enough for end users to build their own reports and dashboards. In practice it is the tool a great many finance, sales and operations teams open every morning. Around the core service sit several APIs we track on APIs.io: the [Datasets API](https://apis.io/apis/power-bi/power-bi-datasets-api/) for the data models behind reports, the [Dashboards API](https://apis.io/apis/power-bi/power-bi-dashboards-api/), the [Groups API](https://apis.io/apis/power-bi/power-bi-groups-api/) for workspaces, [Power BI Embedded](https://apis.io/apis/power-bi/power-bi-embedded/) for putting reports inside your own application, and two newer MCP servers that let AI agents author and query semantic models. More on the [Microsoft website](https://www.microsoft.com/).

## What you can get done

### [Analytics & BI Management](https://apis.io/capabilities/analytics-bi-management/)

Business intelligence, or BI, is the practice of turning company data into reports and dashboards people can act on. A dashboard in Power BI is a single-page canvas of pinned tiles; a report is the multi-page thing behind them; a dataset is the data model both draw from. This one capability spans 144 operations across dashboards, reports, datasets and workspaces, and these are the ones that get the chores done.

- `GET /v1.0/myorg/dashboards` lists the dashboards in your workspace, the starting point for any inventory.
- `POST /v1.0/myorg/dashboards` creates a new, empty dashboard ready for tiles to be pinned.
- `GET /v1.0/myorg/dashboards/{dashboardId}/tiles` lists the tiles on a dashboard, each carrying the report and dataset it draws from.
- `GET /v1.0/myorg/reports` lists the reports in your workspace, and `GET /v1.0/myorg/reports/{reportId}` reads one, including its embed URL.
- `DELETE /v1.0/myorg/dashboards/{dashboardId}` removes a dashboard nobody looks at any more.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them, and Power BI has 12 of them on APIs.io. They read like the analyst's to-do list.

- [Trigger a Dataset Refresh and Poll to Completion](https://apis.io/arazzos/power-bi/power-bi-dataset-refresh-poll-workflow/) starts an on-demand refresh and watches the refresh history until it finishes, which is the fix for the stale Monday dashboard.
- [Import a PBIX and Poll Until Published](https://apis.io/arazzos/power-bi/power-bi-pbix-import-publish-workflow/) uploads a Power BI report file into a workspace, waits for publishing to finish and lists the reports and datasets that resulted.
- [Clone a Report and Rebind It to Another Dataset](https://apis.io/arazzos/power-bi/power-bi-report-clone-rebind-workflow/) copies a report into another workspace and points the copy at a different dataset, which is how one report serves twelve regions.
- [Update Dataset Parameters and Refresh](https://apis.io/arazzos/power-bi/power-bi-parameter-update-refresh-workflow/) reads a dataset's parameters, changes them, confirms the new values and refreshes so the change takes effect.
- [Resolve a Dashboard Tile for Embedding](https://apis.io/arazzos/power-bi/power-bi-dashboard-tile-embed-workflow/) walks from the dashboard list to a single tile and captures the embed URL, report and dataset it needs, the first step to showing a customer their numbers inside your product.
- [Create a Push Dataset and Verify Its Schema](https://apis.io/arazzos/power-bi/power-bi-push-dataset-provision-workflow/) sets up a dataset your systems can stream rows into in real time and confirms it is ready.
- [Audit Gateway-Bound Datasources](https://apis.io/arazzos/power-bi/power-bi-gateway-datasource-audit-workflow/) cross-references a dataset's sources against your on-premises gateways to prove which gateway backs it.
- [Decommission a Dataset After Clearing Dependents](https://apis.io/arazzos/power-bi/power-bi-dataset-decommission-workflow/) finds the reports bound to a dataset, deletes them, then deletes the dataset, so nothing is left pointing at empty data.

## Ask for it in plain language

We have written conversational overlays for Power BI, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. There are 10 of them, covering areas such as apps, capacities and dashboards. You can see one on the [Dashboards API phrasing overlay](https://apis.io/overlays/power-bi/power-bi-dashboards-api-phrasing-overlay/). The questions they map are the ones in this post: which dashboards exist in a workspace, what tiles are on one of them, and which report and dataset a tile draws from.

## Getting started

Power BI is a freemium, hosted service with self-serve signup. Calling the API means getting an access token from Microsoft's identity service, explained in [getting an Azure AD access token](https://learn.microsoft.com/en-us/power-bi/developer/embedded/get-azuread-access-token), and for showing reports to people outside your organisation you will use [embed tokens](https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-tokens). The [embedded documentation](https://docs.microsoft.com/en-us/power-bi/developer/embedded/) covers putting reports in your own product, with [Power BI Embedded pricing](https://azure.microsoft.com/en-us/pricing/details/power-bi-embedded/) by capacity, and the [MCP servers overview](https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview) is where to start if you want an AI agent working with your models. On APIs.io you can browse the [Power BI profile](https://apis.io/providers/power-bi/), the [Datasets API](https://apis.io/apis/power-bi/power-bi-datasets-api/), the [Imports API](https://apis.io/apis/power-bi/power-bi-imports-api/) and the [Push Datasets API](https://apis.io/apis/power-bi/power-bi-push-datasets-api/). Start with the refresh recipe: it is the smallest change and it ends the Monday morning complaint.
