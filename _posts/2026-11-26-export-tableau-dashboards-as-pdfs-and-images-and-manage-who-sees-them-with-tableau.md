---
published: true
layout: post
title: 'Export Tableau Dashboards As PDFs And Images And Manage Who Sees Them With Tableau'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/export-tableau-dashboards-as-pdfs-and-images-and-manage-who-sees-them-with-tableau.png
date: 2026-11-26 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Tableau
  - Analytics & BI Management
  - Identity & Access Management
  - Business Intelligence
  - Data Visualization
---

If your company runs on Tableau dashboards, you probably know the routine. Someone needs last week's sales view as a PDF for the board deck, someone else needs the raw numbers behind a chart in a spreadsheet, and a new hire needs access to three workbooks by Monday. Doing that by hand, click by click, eats a surprising amount of the week. The good news is that [Tableau](https://apis.io/providers/tableau/) exposes all of this through an API, which is simply a way for software, or an AI assistant working on your behalf, to ask Tableau to do these things for you. You describe the job once, and the software repeats it whenever you need it.

## What Tableau does

Tableau describes itself as a visual analytics platform for helping people and organizations make the most of their data. In practice it is where many businesses build their dashboards, worksheets and reports, and where they publish them for the rest of the company to use. You can read more on the [Tableau website](https://tableau.com). Beyond the dashboards people see, Tableau has a family of developer interfaces: a [Metadata API](https://apis.io/apis/tableau/tableau-metadata-api/) for asking where data comes from, an [Embedding API](https://apis.io/apis/tableau/tableau-embedding-api/) for putting visualizations inside your own web applications, [Tableau Webhooks](https://apis.io/apis/tableau/tableau-webhooks/) that notify other systems when something changes, and a [Pulse API](https://apis.io/apis/tableau/tableau-pulse-api/) for metrics and subscriptions.

## What you can get done

The operations below come from Tableau's REST API. Each one is a single request, written as an HTTP method and a path. You do not need to memorize them; they are here so you can see that each everyday task maps to one specific call.

### [Analytics & BI Management](https://apis.io/capabilities/analytics-bi-management/)

This is the heart of it: finding your workbooks and views (a view is a single sheet or dashboard inside a workbook), and getting their contents out in the form people actually need. If you send a weekly report as a PDF, attach a chart image to a Slack message, or feed the numbers behind a dashboard into another system, these are the calls that do it.

- `GET /sites/{site-id}/workbooks` lists the workbooks on your Tableau site, and can filter them by name.
- `GET /sites/{site-id}/workbooks/{workbook-id}/views` lists the views inside one workbook.
- `GET /sites/{site-id}/views/{view-id}/pdf` renders a view as a PDF, so a report can be generated without anyone opening Tableau.
- `GET /sites/{site-id}/views/{view-id}/image` renders a view as a PNG image, ready to drop into an email or a chat message.
- `GET /sites/{site-id}/views/{view-id}/data` extracts the data behind a view, so the numbers can travel into a spreadsheet or another tool.

The operations in this area also cover looking up a single view or workbook by its ID, including who owns it and which project it sits in.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

The second job is making sure the right people see the right dashboards, and nobody else does. Onboarding, offboarding and quarterly access reviews all come down to a handful of questions: who is on the site, what can they see, and what should new content allow by default.

- `GET /sites/{site-id}/users` lists the users on your site.
- `POST /sites/{site-id}/users` adds an existing user to a site.
- `GET /sites/{site-id}/workbooks/{workbook-id}/permissions` shows who has access to a workbook.
- `PUT /sites/{site-id}/workbooks/{workbook-id}/permissions` grants a user or group access to a workbook.
- `GET /sites/{site-id}/projects/{project-id}/default-permissions/workbooks` shows what permissions new workbooks in a project get by default.

The same pattern applies to data sources, with matching calls to read and set who can use each one. That is useful when an auditor asks you to show who could see a sensitive data set.

## Ask for it in plain language

You do not have to speak in paths and methods. API Evangelist builds conversational phrasing overlays for Tableau, which map the kinds of questions a person might ask onto the operations that answer them, so an AI assistant knows which call to make. The kinds of things you can ask include:

- "Which workbooks exist on my Tableau site?"
- "Can I print a view as a PDF?"
- "How do I download the underlying data a Tableau view is built on?"
- "Who has access to a particular workbook?"
- "How do I give a user or group access to a data source?"
- "Who are the users on my Tableau site?"

These questions are our own generated phrasing, not quotes from Tableau users. You can see how one of them is put together in the [Tableau Data Sources API phrasing overlay](https://apis.io/overlays/tableau/tableau-data-sources-api-phrasing-overlay/).

## Getting started

Tableau access is an enterprise arrangement, and the API is a hosted service: your software calls Tableau's endpoint on your Tableau Server or Tableau Cloud site. Signing in comes first, and Tableau's [REST API authentication guide](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm) explains how. If you want to embed dashboards in your own application, the [Embedding API documentation](https://help.tableau.com/current/api/embedding_api/en-us/index.html) is the place to start, and the [Metadata API documentation](https://help.tableau.com/current/api/metadata_api/en-us/index.html) covers data lineage. For cost, see the [pricing section of Tableau's APIs.io profile](https://apis.io/providers/tableau/#pricing).

The [Tableau profile on APIs.io](https://apis.io/providers/tableau/) gathers everything in one place, including the [Tableau Server Client for Python](https://apis.io/apis/tableau/tableau-server-client-python/), which wraps the REST API for easier scripting, and the [VizQL Data Service](https://apis.io/apis/tableau/tableau-vizql-data-service/) for querying published data sources from any application.

Pick the one report you export by hand every week, and make that the first thing you automate.
