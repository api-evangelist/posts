---
published: true
layout: post
title: 'Automate Hiring, Candidates And Job Postings With Lever'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/automate-hiring-candidates-and-job-postings-with-lever.png
date: 2026-11-24 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Lever
  - Talent Acquisition Management
  - Recruiting
  - Applicant Tracking
---

You are hiring, and the process is held together with copy and paste. Job openings get retyped onto your careers page, candidates referred by email get added by hand, and nobody is sure which interviews have been scheduled. Lever is an applicant tracking system, the software that keeps every candidate and every opening in one place, and it offers an API so your website, HR system or an AI assistant can post jobs, add candidates and check on interviews without someone doing it manually. Everything I have catalogued about it is on its [APIs.io profile](https://apis.io/providers/lever/).

## What Lever does

Lever is a talent acquisition and applicant tracking platform. It is built around what it calls opportunities: each opportunity is one candidate being considered for a role, so the same person applying twice shows up as two opportunities with one contact behind them. Its API exposes candidates, opportunities, postings, interviews, feedback, requisitions, users, files and webhooks, plus a public Postings API for putting your openings on your own jobs site. Its home is [lever.co](https://www.lever.co/).

## What you can get done

### [Talent Acquisition Management](https://apis.io/capabilities/talent-acquisition-management/)

Talent acquisition is the whole job of finding and hiring people. The business outcome here is that candidates arrive in Lever wherever they come from, and the status of every one of them can be read by your other tools.

- `POST /opportunities` creates an opportunity, adding a candidate to a role, for example from a referral form.
- `GET /opportunities` lists all opportunities, the raw material for a hiring report.
- `GET /opportunities/{opportunity}` retrieves one candidate's opportunity in full.
- `POST /opportunities/{opportunity}/addSources` records where a candidate came from, so you learn which channels work.
- `POST /opportunities/{opportunity}/addLinks` adds links, such as a portfolio or profile, to the candidate's contact.
- `GET /opportunities/{opportunity}/interviews` lists the interviews for a candidate.
- `GET /opportunities/{opportunity}/panels` lists the interview panels, the group of interviewers for a stage.
- `GET /opportunities/deleted` lists opportunities that have been deleted, useful when you are keeping another system in step.

Sources deserve a word. If every candidate is tagged with the job board, referral or event that produced them, you can see where your hiring budget is actually paying off.

## Job postings and the rest

Your openings do not have to be retyped. The [Lever Postings Public API](https://apis.io/apis/lever/lever-postings-public-api/) is designed for embedding your jobs on your own site, and the [Lever XML Feed](https://apis.io/apis/lever/lever-xml-feed-api/) suits job boards that take a feed. The [Lever Postings API](https://apis.io/apis/lever/lever-postings-api/) manages the postings themselves, and the [Lever Requisitions API](https://apis.io/apis/lever/lever-requisitions-api/) covers approved headcount, the opening a hiring manager has permission to fill.

When something happens, a candidate moving stage or being hired, the [Lever Webhooks API](https://apis.io/apis/lever/lever-webhooks-api/) can tell your HR system so onboarding begins without anyone forwarding an email. A webhook is simply Lever calling you rather than you checking.

## Getting started

Lever's access is enterprise: you get API credentials as a Lever customer, and it is a hosted service you call. Pricing is a conversation with Lever, so see the [Pricing section of the profile](https://apis.io/providers/lever/#pricing) for what I have recorded. The developer documentation covers [candidates](https://hire.lever.co/developer/documentation#candidates), [feedback templates](https://hire.lever.co/developer/documentation#feedback-templates) and [webhooks](https://hire.lever.co/developer/documentation#webhooks).

On APIs.io, start with the [Lever Opportunities API](https://apis.io/apis/lever/lever-opportunities-api/), the [Lever Candidates API](https://apis.io/apis/lever/lever-candidates-api/) and the [Lever Applications API](https://apis.io/apis/lever/lever-applications-api/).

If your careers page is updated by hand, connect it to the public postings first; it is the smallest change with the most visible payoff.
