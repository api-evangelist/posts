---
published: true
layout: post
title: 'Two Hundred Nine API Companies And Seven Hundred Seventy-Five Enterprises Hire In Different Worlds'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/two-hundred-nine-api-companies-and-seven-hundred-seventy-five-enterprises-hire-in-different-worlds.png
date: 2026-10-28
author: Kin Lane
tags:
  - Enterprise
  - Cloud
  - API Providers
  - Insights
  - Hiring
  - APIs
---
For the last three weeks I have been comparing two groups of companies inside the Q3 2026 Insights pull, and every time the comparison has been the most interesting part. So this week it is the whole story.

The pull read 343,299 job postings from 984 companies. 775 are in the Fortune 1000. 209 are API providers from the APIs.io catalog, the companies whose product is, at least in part, an API. Every number below is a count of **companies whose postings name the term at least once**, shown as a share of each group.

One warning before the tables, and it applies to all of them: 209 companies is a much smaller sample than 775. A few companies on the provider side move a percentage a long way. Read every gap here as a direction, not a measurement.

## What the API companies name far more often

| | Fortune 1000 | API providers | ratio |
|---|---:|---:|---:|
| Zapier | 2.3% | 18.7% | 8.0x |
| ClickHouse | 3.4% | 12.4% | 3.7x |
| Google Workspace | 12.0% | 34.9% | 2.9x |
| Vercel | 2.7% | 7.7% | 2.8x |
| SOC 2 | 15.7% | 36.8% | 2.3x |
| Kubernetes Operators | 2.7% | 6.2% | 2.3x |
| Dagster | 3.9% | 8.1% | 2.1x |
| Claude | 33.3% | 58.4% | 1.75x |
| Pulumi | 6.6% | 10.5% | 1.6x |
| Kubernetes | 48.0% | 71.8% | 1.5x |

Zapier is the headline: named by nearly one in five API providers and about one in forty enterprises. That makes sense once you remember who these companies are. For an API company, Zapier is often a distribution channel, the place a lot of their customers meet the API without writing code, so they hire people who know how to build and run that integration.

The rest of the list reads like a modern engineering organization. Analytics on ClickHouse, the front end on Vercel, pipelines on Dagster, infrastructure as code on Pulumi, workloads on Kubernetes and the operators that run on it. Google Workspace instead of the Microsoft office stack. And SOC 2, the attestation an API company has to hand every enterprise customer before the contract gets signed.

## What the enterprises name far more often

| | Fortune 1000 | API providers | ratio |
|---|---:|---:|---:|
| Microsoft Outlook | 74.1% | 17.2% | 0.23x |
| Microsoft Excel | 68.6% | 20.6% | 0.30x |
| Microsoft Word | 45.3% | 7.7% | 0.17x |
| Azure DevOps | 38.6% | 10.0% | 0.26x |
| Process Flow Diagrams | 35.5% | 9.1% | 0.26x |
| Microsoft Project | 34.8% | 9.1% | 0.26x |
| Microsoft Teams | 27.6% | 8.1% | 0.29x |
| Microsoft Power Automate | 27.0% | 5.7% | 0.21x |
| Power Query | 24.8% | 6.2% | 0.25x |
| Adobe Illustrator | 19.1% | 4.8% | 0.25x |

Three out of four Fortune 1000 companies name Outlook in a posting. Almost half name Word. That is not engineering vocabulary, and that is the point. An enterprise posts for every kind of role, and most of those roles live inside the Microsoft office stack. Even the automation shows up in the enterprise as Power Automate, not as Zapier, and the delivery pipeline as Azure DevOps.

It also tells you something about whose postings you are reading. The API provider side is mostly engineers, product people, and go-to-market for a technical product. The enterprise side is a whole workforce, with a technology organization somewhere inside it.

## Systems of record

| | Fortune 1000 | API providers |
|---|---:|---:|
| Salesforce | 60.9% | 70.3% |
| Workday | 61.4% | 28.2% |
| SAP | 57.0% | 20.1% |
| ServiceNow | 43.2% | 19.1% |
| Snowflake | 38.5% | 42.1% |
| Databricks | 34.2% | 29.7% |
| MuleSoft | 13.5% | 7.2% |
| Apigee | 7.7% | 1.0% |

Salesforce is the one big system both groups share, and the API providers actually name it more. After that the enterprise stack pulls away: Workday, SAP, and ServiceNow at two to three times the provider rate. The data platforms, Snowflake and Databricks, are close to even. The enterprise integration and API management layer — MuleSoft, Apigee — is mostly an enterprise hiring term. Apigee is named by 7.7% of the Fortune 1000 and 1.0% of the API providers.

## Which cloud a company leans on

Here is a different cut. For each company, which of the three big clouds do its postings name most often?

| lead cloud | all 984 | API providers | Fortune 1000 |
|---|---:|---:|---:|
| AWS | 313 | 99 | 214 |
| Azure | 223 | 19 | 204 |
| Google Cloud | 89 | 27 | 62 |
| tie | 116 | 31 | 85 |
| none | 243 | 33 | 210 |

Among the API providers, AWS leads at 99 of 209 companies, about 47%, and Azure leads at only 19, about 9%. In the Fortune 1000 AWS and Azure are nearly level, 214 to 204, about 28% and 26% of the group.

The **none** row is a real reading, not missing data. It is 243 companies whose postings do not name any of the three clouds at all, and 210 of them are in the Fortune 1000 — about 27% of that group, against about 16% of the API providers. Plenty of large companies run on a cloud they never mention in a posting.

## What I think it means

API Evangelist has always said that an API is a bridge between two organizations, and this is a picture of the two ends of that bridge. On one side, a company that runs on Kubernetes and Terraform, sells through Zapier, proves itself with SOC 2, and leans on AWS. On the other, a company that runs on Outlook, Excel, Workday, SAP, and ServiceNow, automates with Power Automate, and manages its APIs with MuleSoft or Apigee.

When an API provider writes its docs, its onboarding, and now its MCP server, it tends to write for the first kind of company, because that is who it hires and who it is. Most of the money is on the other side. The people who will wire your API into a Fortune 1000 company are going to arrive through their own gateway, their own identity provider, their own automation tools, and their own security review. If your developer experience only makes sense from inside the first world, you are making the second world translate.

## How to read these numbers

- **This is hiring intent, not production use.** A company that names Outlook in a posting is telling you what its people work in, not what its engineers build on.
- **Q3 2026 is the first point in the series.** None of these gaps is widening or closing yet. The Q4 read comes on November 20.
- **Small side, big swings.** Every provider percentage is out of 209 companies. Treat the ratios as which way things lean.
- **Only verified terms.** The ratio tables only include terms that passed our verification pass and are named by at least ten companies on each side.

The full Insights data, with both groups and every term, is available through the [APIs.io API and MCP server](https://apis.io/insights/).

Two worlds, one bridge. I will be watching both ends of it when the Q4 numbers come in on November 20.
