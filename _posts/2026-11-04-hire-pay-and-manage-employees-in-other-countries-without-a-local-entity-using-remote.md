---
published: true
layout: post
title: 'Hire, Pay And Manage Employees In Other Countries Without A Local Entity Using Remote'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/hire-pay-and-manage-employees-in-other-countries-without-a-local-entity-using-remote.png
date: 2026-11-04 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Remote
  - HR Operations Management
  - Compensation & Benefits Management
  - Talent Acquisition Management
  - Employer of Record
  - Global Payroll
---

You found the right person for the job, and they live in another country. Hiring them properly normally means setting up a company there, learning its employment law, running its payroll and finding its benefits. Most small and mid-sized businesses cannot justify that for one or two people. [Remote](https://apis.io/providers/remote-com/) takes that on for you, and it offers the whole process through an API, a way for software to talk directly to other software, so your HR system, a script or an AI assistant can hire, pay and manage people for you.

## What Remote does

Remote is a global employment platform. It lets companies hire, pay and manage employees and contractors in other countries without setting up local entities. It does this as an employer of record, or EOR: Remote is the legal employer in that country, while the person works for you day to day. Remote says it owns its in-country legal entities and runs its own payroll and benefits rather than reselling other providers. On top of that it offers a developer API, webhooks, a command-line tool, SDKs, an AI agent toolkit and an official MCP server, the standard way for AI assistants to use tools. More on the [Remote website](https://remote.com).

## What you can get done

### [HR Operations Management](https://apis.io/capabilities/hr-operations-management/)

This is the everyday record of who works for you and what they are paid, with 47 operations behind it. An employment is Remote's word for one person's job with you, whether employee or contractor.

- `GET /employments` lists everyone employed or contracted through your company on Remote.
- `POST /employments` starts hiring someone.
- `PATCH /employments/{employment_id}` updates a person's job title, manager or department.
- `GET /payslips` lists payslips, for example for one pay period.
- `GET /payslips/{payslip_id}` opens a single payslip to see gross and net pay.

### [Talent Acquisition Management](https://apis.io/capabilities/talent-acquisition-management/)

Getting a new hire through the door: checking they can legally be employed, and letting them fill in their own details instead of you chasing paperwork.

- `POST /employments/{employment_id}/invite` invites a new hire to complete their own onboarding.
- `POST /employments/{employment_id}/eligibility` starts an eligibility questionnaire for a hire.
- `GET /employments/{employment_id}/eligibility/{questionnaire_id}` shows the answers given.

### [Compensation & Benefits Management](https://apis.io/capabilities/compensation-benefits-management/)

Benefits differ by country, which is exactly the part that is hard to know from the outside. These operations show what is available where and enroll people in it.

- `GET /benefit_offers` shows the benefit packages you can offer in each country.
- `GET /benefit_offers/by_employment` lists the options one particular employee can choose from.
- `PUT /benefit_offers/{employment_id}` enrolls an employee or changes their selection.

### [Human Capital Management](https://apis.io/capabilities/human-capital-management/)

Contracts and work permission, the documents that make the arrangement official.

- `POST /contract_documents` generates a new contract document to be signed.
- `POST /contract_documents/{contract_document_id}/sign` signs it on behalf of your company.
- `GET /work_authorization_requests` lists employees who have asked for work authorization or visa support.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them.

- [Estimate Cost Then Hire](https://apis.io/arazzos/remote-com/remote-com-estimate-and-hire-workflow/) estimates the full cost of a hire, then creates the employment once the budget is confirmed.
- [Hire An EOR Employee](https://apis.io/arazzos/remote-com/remote-com-hire-eor-employee-workflow/) creates an employment, confirms it and invites the person to onboard themselves.
- [Enroll An Employee In Benefits](https://apis.io/arazzos/remote-com/remote-com-enroll-employee-benefits-workflow/) reads the available offers, selects them and saves the choices.
- [Retrieve An Employee Payslip](https://apis.io/arazzos/remote-com/remote-com-employee-payslip-workflow/) finds an employee by email and fetches their latest payslip.
- [Look Up A Country Leave Policy](https://apis.io/arazzos/remote-com/remote-com-country-leave-policy-workflow/) confirms a country is supported and shows its leave policies.
- [Amend An Employment Contract](https://apis.io/arazzos/remote-com/remote-com-amend-contract-workflow/) submits a contract change and tracks it until it is resolved.

## Ask for it in plain language

We have written conversational overlays for Remote, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they map:

- "How do I start hiring someone in another country through Remote?"
- "What benefit packages can I offer employees in each country?"
- "How do I invite a new hire to fill out their own onboarding details?"
- "Can I change an employee's manager or department?"
- "Where can I find an employee's payslips?"

You can see one of them on the [Remote Benefit Offers API phrasing overlay](https://apis.io/overlays/remote-com/remote-com-benefit-offers-api-phrasing-overlay/).

## Getting started

Remote is freemium with self-serve signup, a hosted service you call. Its developer documentation explains the [webhooks it sends](https://developer.remote.com/docs/available-webhooks), notifications when something changes such as a payroll run or a new hire, along with [how to work with them](https://developer.remote.com/docs/working-with-webhooks) and [how to verify them](https://developer.remote.com/docs/verifying-webhooks). On APIs.io you can browse the [Remote profile](https://apis.io/providers/remote-com/), the [Companies API](https://apis.io/apis/remote-com/remote-com-companies-api/), the [Benefit Offers API](https://apis.io/apis/remote-com/remote-com-benefit-offers-api/) and the [Contract Documents API](https://apis.io/apis/remote-com/remote-com-contract-documents-api/). If there is someone abroad you want to hire, start with the Estimate Cost Then Hire recipe and see the number first.
