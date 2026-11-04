---
published: true
layout: post
title: 'Find Target Companies And Enrich Your CRM With Firmographic Data From Coresignal'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-target-companies-and-enrich-your-crm-with-firmographic-data-from-coresignal.png
date: 2026-11-04 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Coresignal
  - Company & Contact Data
  - B2B Data
  - Sales Intelligence
---

You sell to other businesses and you need a list: every software company in Germany with fifty to two hundred people, say, or every company that just started hiring for a role your product helps with. Or you already have a CRM full of half-empty company records and want them filled in. Doing this by hand means hours of searching websites. [Coresignal](https://apis.io/providers/coresignal/) sells this data through an API, a way for software to talk directly to other software, so your CRM, a spreadsheet script or an AI assistant can look companies up for you.

## What Coresignal does

Coresignal is a data-as-a-service company. It gathers public web data about companies, employees and job postings, cleans it up and sells access to it. Coresignal says its data covers more than 75 million companies, 865 million employee profiles and 461 million job postings. Firmographics, the word you will see a lot, means facts about a company the way demographics are facts about a person: industry, size, location, founding year. Alongside its Company, Employee and Jobs APIs it offers a company enrichment service and an agentic search API that takes plain-language questions. More on the [Coresignal website](https://coresignal.com).

## What you can get done

### [Company & Contact Data](https://apis.io/capabilities/company-contact-data/)

This is the job in two steps: search for the companies that match what you are looking for, then collect the full record for each one. Searching first and collecting second means you only pay attention, and spend, on the companies that fit.

- `POST /search/filter` finds companies with simple filters such as industry, country, headcount range and founding year.
- `POST /search/es_dsl` runs a more detailed search when simple filters are not enough, written in Elasticsearch's query language.
- `GET /collect/{id}` returns the complete profile for one company once you have its Coresignal ID.
- `POST /bulk_collect` returns complete profiles for a whole batch of company IDs at once.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them.

- [Company Search and Collect](https://apis.io/arazzos/coresignal/coresignal-company-search-collect-workflow/) searches companies by filters, then collects the top match's full record.
- [Company Elasticsearch Search and Bulk Collect](https://apis.io/arazzos/coresignal/coresignal-company-esdsl-bulk-collect-workflow/) runs a detailed search, then collects every matching company in one go.
- [Company Search with Branching Collect](https://apis.io/arazzos/coresignal/coresignal-company-search-branch-collect-workflow/) chooses between a single collect and a bulk collect depending on how many matched.
- [Company to Employees Enrichment](https://apis.io/arazzos/coresignal/coresignal-company-to-employees-workflow/) finds a company, then finds a key person currently working there.
- [Company to Job Postings Enrichment](https://apis.io/arazzos/coresignal/coresignal-company-to-jobs-workflow/) finds a company, then one of its active job postings, a useful sign of what it is investing in.
- [Employee Search and Collect](https://apis.io/arazzos/coresignal/coresignal-employee-search-collect-workflow/) searches people by filters and collects the top matching profile.

## Ask for it in plain language

We have written conversational overlays for Coresignal, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they map:

- "How do I find companies in a given industry and country without writing an Elasticsearch query?"
- "Can I filter companies by headcount range and founding year?"
- "Can I retrieve full records for a whole batch of company IDs in one request?"
- "How do I pull the complete enriched profile for a single company once I have its Coresignal ID?"
- "What do I use when the structured filters aren't expressive enough and I need bool and nested queries?"

You can see one of them on the [Coresignal Search API phrasing overlay](https://apis.io/overlays/coresignal/coresignal-search-api-phrasing-overlay/).

## Getting started

Coresignal is freemium with self-serve signup, a hosted service you call with a single API key. Start with the documentation for the [Agentic Search API](https://docs.coresignal.com/agentic-search-api/). On APIs.io you can browse the [Coresignal profile](https://apis.io/providers/coresignal/), the [Search API](https://apis.io/apis/coresignal/coresignal-search-api/), the [Collect API](https://apis.io/apis/coresignal/coresignal-collect-api/) and the [Company Enrichment API](https://apis.io/apis/coresignal/company-enrichment-api/). Write down the one sentence that describes your ideal customer, turn it into filters, and run the Search and Collect recipe on it.
