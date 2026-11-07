---
published: true
layout: post
title: 'Look Up Payslips, Change Benefits And Log Time With Workday'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/look-up-payslips-change-benefits-and-log-time-with-workday.png
date: 2026-11-07 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Workday
  - HR Operations Management
  - Compensation & Benefits Management
  - Talent Management
  - Talent Acquisition Management
  - HCM
  - Enterprise Software
---

Your company runs on Workday, and most of what you need from it is a lookup or a request: a worker's payslips for a mortgage letter, a clock-in from a kiosk that is not Workday, a benefits change after a new baby, a feedback badge for someone who covered a shift. Each of those lives behind a login and a few screens. [Workday](https://apis.io/providers/workday/) can do them through an API, a way for one piece of software to ask another to do work, so your intranet, a time clock, a help desk tool or an AI assistant can make the request and bring back the answer.

## What Workday does

[Workday](https://www.workday.com/) is enterprise software for human capital management, financial management, enterprise planning and analytics, and the APIs.io listing describes a collection of REST and SOAP APIs across all of those plus platform extensibility. The oldest and broadest surface is the [SOAP Web Services API](https://apis.io/apis/workday/soap-web-services-api/), which Workday says covers 55 service areas including Human Resources, Payroll and Benefits. Alongside it sit the [Strategic Sourcing API](https://apis.io/apis/workday/strategic-sourcing-api/) for procurement events and suppliers, the [Adaptive Planning API](https://apis.io/apis/workday/adaptive-planning-api/) for budgets and planning data, and the [Extend API](https://apis.io/apis/workday/extend-api/) for building your own apps on top of Workday. The REST surface is split into focused pieces such as [Benefit Elections](https://apis.io/apis/workday/workday-benefit-elections-api/), [Compensation Plans](https://apis.io/apis/workday/workday-compensation-plans-api/), [Candidates](https://apis.io/apis/workday/workday-candidates-api/), [Contact Information](https://apis.io/apis/workday/workday-contact-information-api/), [Absence Types](https://apis.io/apis/workday/workday-absence-types-api/) and [Accounting](https://apis.io/apis/workday/workday-accounting-api/).

## What you can get done

We map Workday's operations to 11 business capabilities. These are the five an HR or finance team reaches for first.

### [HR Operations Management](https://apis.io/capabilities/hr-operations-management/)

The day-to-day of payroll and time: payslips, the inputs that feed payroll, clock events, time entries and timesheets. This is the largest capability, with 32 operations.

- `GET /workers/{ID}/paySlips` returns a worker's payslips.
- `GET /workers/{ID}/payrollInputs` reads the inputs, such as one-off earnings or deductions, going into that worker's pay.
- `POST /workers/{ID}/timeClockEvents` records a clock in or clock out, which is how a kiosk or badge reader feeds Workday.
- `POST /workers/{ID}/requestTimeEntry` logs hours against a timesheet.
- `GET /workers/{ID}/timesheets` reads the timesheets themselves.

### [Compensation & Benefits Management](https://apis.io/capabilities/compensation-benefits-management/)

Pay plans, grades and benefits. A benefit election is the set of plans a worker has chosen, and a change event is how a life event or an open enrolment moves it. There are 12 operations.

- `GET /workers/{ID}/compensationPlans` shows a worker's current compensation plans.
- `POST /workers/{ID}/requestCompensationChange` starts a pay change request.
- `GET /workers/{ID}/benefitElections` reads what a worker is currently enrolled in.
- `GET /workers/{ID}/eligibleBenefitPlans` lists the plans they could choose.
- `POST /workers/{ID}/changeBenefits` starts a benefits change.
- `POST /workers/{ID}/requestOneTimePayment` requests a bonus or other one-time payment.

### [Talent Management](https://apis.io/capabilities/talent-management/)

Performance reviews, goals, feedback and succession. There are 11 operations.

- `GET /workers/{ID}/performanceReviews` reads a worker's reviews.
- `GET /workers/{ID}/goals` lists their goals.
- `POST /workers/{ID}/feedbackBadges` gives a feedback badge, a small public recognition.
- `POST /workers/{ID}/requestFeedback` asks colleagues for feedback on someone.
- `GET /successionPlans` lists the succession plans in place for key roles.

### [Talent Acquisition Management](https://apis.io/capabilities/talent-acquisition-management/)

Hiring: requisitions, postings, candidates and applications. These nine operations are read-only, which suits reporting and keeping a careers site in step.

- `GET /jobRequisitions` lists the open requisitions, the approved requests to hire.
- `GET /jobPostings` lists the postings advertising them.
- `GET /candidates` lists candidates.
- `GET /jobApplications` lists applications against postings.

### [Purchase Order Management](https://apis.io/capabilities/purchase-order-management/)

On the finance side, suppliers and purchase orders are readable, so a spend dashboard or an approvals tool can see them without a report export.

- `GET /suppliers` lists suppliers.
- `GET /suppliers/{ID}` reads one supplier.
- `GET /purchaseOrders` lists purchase orders.

Two smaller finance capabilities round this out: [General Ledger Management](https://apis.io/capabilities/general-ledger-management/) exposes accounting journals, and [Financial Management](https://apis.io/capabilities/financial-management/) exposes expense reports. [Human Capital Management](https://apis.io/capabilities/human-capital-management/) itself holds leave of absence requests and job profiles.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. They are written in Arazzo, an open format for describing them, and Workday has 20 of them on APIs.io.

- [Find Worker and Load Detail](https://apis.io/arazzos/workday/workday-find-worker-detail-workflow/) searches workers by name, then loads the match's full detail and recent history.
- [Clock Time Event](https://apis.io/arazzos/workday/workday-clock-time-event-workflow/) confirms a worker, reads their recent clock events, then records a new clock in or out.
- [Log Time Entry](https://apis.io/arazzos/workday/workday-log-time-entry-workflow/) confirms a worker, reads their timesheets, then logs a new entry.
- [Change Benefits](https://apis.io/arazzos/workday/workday-change-benefits-workflow/) reads current elections and eligible plans, then starts a benefit change event.
- [Change Worker Job](https://apis.io/arazzos/workday/workday-change-worker-job-workflow/) confirms a worker, looks up the target job profile and position, then starts a job change.
- [Give Feedback Badge](https://apis.io/arazzos/workday/workday-give-feedback-badge-workflow/) confirms a worker, reviews their existing badges, then gives a new one.
- [Person Contact 360](https://apis.io/arazzos/workday/workday-person-contact-360-workflow/) searches people, loads the match, then gathers home and work contact information.
- [Explore Supervisory Organization](https://apis.io/arazzos/workday/workday-explore-supervisory-org-workflow/) searches organizations, loads the first match, and lists its workers.

## Getting started

Workday is an enterprise product: access to these APIs comes with a Workday tenant, so the person to start with is whoever administers Workday at your company rather than a signup form. The [Workday Community API pages](https://community.workday.com/api) are the main reference, the [REST API authentication](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#authentication) section explains how a call is authorised, and the [Workday Spend documentation](https://apidocs.workdayspend.com/) covers the sourcing and procurement side. On APIs.io you can browse the [Workday profile](https://apis.io/providers/workday/), the [SOAP Web Services API](https://apis.io/apis/workday/soap-web-services-api/), the [Benefit Elections API](https://apis.io/apis/workday/workday-benefit-elections-api/) and the [Strategic Sourcing API](https://apis.io/apis/workday/strategic-sourcing-api/). Pick the one request your HR inbox fields most often, a payslip lookup is the usual answer, and ask your Workday administrator whether the worker endpoints above are already enabled in your tenant.
