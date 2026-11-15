---
published: true
layout: post
title: 'Create Cards, Update Boards And Get Notified Of Changes With Trello'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/create-cards-update-boards-and-get-notified-of-changes-with-trello.png
date: 2026-11-15 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Trello
  - Project Management
  - Webhook & Event Subscription Management
  - Partner App Programme Management
  - Task Management
  - Collaboration
---

Most teams already track their work somewhere, and for a lot of them that place is a Trello board. The trouble is that work arrives from everywhere else: a support ticket, a form submission, a sales deal that closed. Copying each one onto a card by hand is slow and easy to forget. [Trello](https://apis.io/providers/trello/) exposes its boards, lists and cards through an API, so your other systems, or an AI assistant, can create and update cards for you and tell you when something changes.

## What Trello does

[Trello](https://trello.com/) is a kanban-style list-making application from Atlassian. Kanban just means work moves across columns, such as To Do, Doing and Done. Teams organize tasks, projects and workflows as boards, lists and cards. Beyond the main API, Trello offers webhooks, a browser client library, and the Power-Ups framework for adding your own features to a board.

## What you can get done

### [Project Management](https://apis.io/capabilities/project-management/)

Cards are the unit of work. These calls let another system put work on the board, keep it current and leave a record of what happened.

- `POST /cards` creates a card on a list, for example a new card for every support ticket.
- `PUT /cards/{id}` updates a card, such as renaming it or changing its description.
- `POST /cards/{id}/actions/comments` adds a comment to a card.
- `GET /cards/{id}/actions` lists the activity history on a card.
- `POST /boards` creates a new board with a name and description.

### [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/)

A webhook is Trello calling your system when something changes, instead of your system asking over and over. That is how you keep a report or a chat channel up to date automatically.

- `POST /webhooks` asks Trello to notify your URL whenever a board or card changes.
- `GET /webhooks/{id}` checks which URL and board a webhook is pointed at.
- `PUT /webhooks/{id}` points an existing webhook at a new URL or turns it off.
- `DELETE /webhooks/{id}` stops the notifications for good.

### [Partner App Programme Management](https://apis.io/capabilities/partner-app-programme-management/)

If you build a Power-Up for other Trello users, these calls manage it and its marketplace listing.

- `GET /plugins/{id}` looks up your Power-Up's details.
- `PUT /plugins/{id}` updates your Power-Up's information.
- `POST /plugins/{id}/listings` publishes a marketplace listing for it.

## Ask for it in plain language

Trello has 18 phrasing overlays on APIs.io. They map plain questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they cover:

- How do I add a new card to a list on my Trello board?
- How do I get notified at my URL whenever a board changes?
- Where can I see the activity history of a card?
- How do I post a comment on a card through the API?
- How do I fetch a board along with its lists, cards and labels in one call?

The [Trello Actions API phrasing overlay](https://apis.io/overlays/trello/trello-actions-api-phrasing-overlay/) is a good place to start.

## Getting started

Trello is freemium with self-serve signup; plans are in the [pricing section of its APIs.io profile](https://apis.io/providers/trello/#pricing). Start with the [Trello REST API reference](https://developer.atlassian.com/cloud/trello/rest/), the [webhooks guide](https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/) and the [Power-Ups documentation](https://developer.atlassian.com/cloud/trello/power-ups/), then browse the [Cards API](https://apis.io/apis/trello/trello-cards-api/), [Boards API](https://apis.io/apis/trello/trello-boards-api/) and [Webhooks API](https://apis.io/apis/trello/webhooks-api/) on APIs.io.

Pick the one place work arrives from most often and have it create the card for you.
