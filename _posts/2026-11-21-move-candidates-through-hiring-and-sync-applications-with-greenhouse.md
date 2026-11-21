---
published: true
layout: post
title: 'Move Candidates Through Hiring And Sync Applications With Greenhouse'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/move-candidates-through-hiring-and-sync-applications-with-greenhouse.png
date: 2026-11-21 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Greenhouse
  - Talent Acquisition Management
  - Human Resources
  - Recruiting
---

You are hiring, and candidate details live in too many places: a careers page, a referral spreadsheet, an assessment tool, an onboarding system. Recruiters copy names and resumes from one to the next, and a hire is not really done until someone re-enters it in HR. If your company runs on Greenhouse, an API lets your other systems, or an AI assistant, add candidates, move applications forward and mark hires directly. An API is just a way for software to ask another piece of software to do something. I keep what I know about it on the [Greenhouse APIs.io profile](https://apis.io/providers/greenhouse/).

## What Greenhouse does

Greenhouse is an applicant tracking system, or ATS: the software recruiting teams use to post jobs, collect applications and run interviews. It also offers recruiting software around that core. It exposes a family of APIs and webhooks that let partners and customers manage candidates, jobs, applications, onboarding, audit logs and assessment integrations. A webhook is a message Greenhouse sends your system the moment something happens, so you do not have to keep asking. The company site is [greenhouse.com](https://www.greenhouse.com).

## What you can get done

### [Talent Acquisition Management](https://apis.io/capabilities/talent-acquisition-management/)

Everything in Greenhouse's API sits under this one capability, and it covers the whole hiring pipeline: applications, candidates, scheduled interviews, jobs and job posts, scorecards, offers, prospects, departments and offices. The business outcome is fewer handoffs. A candidate who applies through a partner site lands in Greenhouse without retyping. An application moves to the next stage when an assessment comes back. A hire flows straight to onboarding.

- `POST /candidates` adds a new candidate, for example from a referral form or a sourcing tool.
- `GET /candidates` lists candidates, so you can report on your pipeline or keep another system in step.
- `GET /applications` lists applications across your jobs.
- `POST /applications/{id}/advance` moves an application to the next interview stage.
- `POST /applications/{id}/hire` marks an application as hired, the trigger for everything that happens after the offer.
- `PATCH /applications/{id}` updates an application's details.

Around that core, the [Greenhouse Recruiting Webhooks](https://apis.io/apis/greenhouse/recruiting-webhooks/) tell your systems about candidate updates, stage changes and offers as they happen, and the [Greenhouse Onboarding Webhooks](https://apis.io/apis/greenhouse/onboarding-webhooks/) do the same for new hires. If you sell or use a testing tool, the [Greenhouse Assessment API](https://apis.io/apis/greenhouse/assessment/) is how code tests, video interviews and personality tests plug into the interview workflow. And the [Greenhouse Audit Log API](https://apis.io/apis/greenhouse/audit-log/) records who accessed or edited information, which matters when candidate data is involved.

## Getting started

Greenhouse is a paid product; the [Pricing section of the profile](https://apis.io/providers/greenhouse/#pricing) has what I have recorded on its plans. The developer documentation is split by API: the [Harvest authentication guide](https://developers.greenhouse.io/harvest.html#authentication), the [Job Board docs](https://developers.greenhouse.io/job-board.html), [Candidate Ingestion](https://developers.greenhouse.io/candidate-ingestion.html), [Assessment](https://developers.greenhouse.io/assessment.html), [Audit Log](https://developers.greenhouse.io/audit-log.html) and [Webhooks](https://developers.greenhouse.io/webhooks.html).

On APIs.io, the [Greenhouse Candidates API](https://apis.io/apis/greenhouse/greenhouse-candidates-api/), [Greenhouse Applications API](https://apis.io/apis/greenhouse/greenhouse-applications-api/) and [Greenhouse Jobs API](https://apis.io/apis/greenhouse/greenhouse-jobs-api/) are the three to read first, with the rest on the [Greenhouse profile](https://apis.io/providers/greenhouse/).

Find the one place your recruiters retype candidate details most often and start there.
