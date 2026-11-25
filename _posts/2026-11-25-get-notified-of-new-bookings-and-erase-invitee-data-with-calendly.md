---
published: true
layout: post
title: 'Get Notified Of New Bookings And Erase Invitee Data With Calendly'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/get-notified-of-new-bookings-and-erase-invitee-data-with-calendly.png
date: 2026-11-25 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Calendly
  - Webhook & Event Subscription Management
  - Privacy & Data Protection Management
  - Scheduling
  - Booking
---

When someone books a meeting with you, a lot of things should happen next. The lead should land in your CRM, the account owner should get a heads-up, a prep document might need to be created, and if that person ever asks you to forget them, their details should be removed everywhere. Calendly takes care of the booking, and through its API, which is a way for your other software, or an AI assistant working for you, to talk to Calendly directly, it can tell your other systems the moment a booking happens and erase personal data on request. Everything I have catalogued about it sits on its [APIs.io profile](https://apis.io/providers/calendly/).

## What Calendly does

[Calendly](https://calendly.com/) is a scheduling automation platform that takes the back-and-forth out of setting up meetings for individuals, teams and organizations. Its developer platform offers APIs for managing scheduling, webhooks for real-time notifications when events happen, and embeds that put a scheduling page directly inside your own website or app.

## What you can get done

### [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/)

A webhook is a message Calendly sends to an address you choose whenever something happens, like a new booking or a cancellation. Instead of your systems checking Calendly over and over, Calendly tells them. These operations set those subscriptions up and keep them tidy.

- `POST /webhook_subscriptions` creates a subscription, so your system hears about new events.
- `GET /webhook_subscriptions` lists the subscriptions you have.
- `GET /webhook_subscriptions/{webhook_uuid}` gets the details of one.
- `DELETE /webhook_subscriptions/{webhook_uuid}` removes one you no longer need.
- `GET /sample_webhook_data` returns sample data, so you can see what a notification looks like before a real one arrives.

### [Privacy & Data Protection Management](https://apis.io/capabilities/privacy-data-protection-management/)

Privacy laws give people the right to ask a business to delete their personal data. If your meetings run through Calendly, that data includes who booked with you and when. These operations handle the erasure without someone hunting through the app.

- `POST /data_compliance/deletion/invitees` deletes the data held about invitees.
- `POST /data_compliance/deletion/events` deletes scheduled event data.

## Getting started

Calendly is freemium with self-serve signup, and it runs as a hosted service you call. There is a free tier, and plan details are on the [Calendly pricing section](https://apis.io/providers/calendly/#pricing) of its profile.

The documentation I would start with:

- [Calendly developer portal](https://developer.calendly.com/)
- [Calendly API docs](https://developer.calendly.com/api-docs)

On APIs.io, see the [Calendly profile](https://apis.io/providers/calendly/), the [Calendly Webhook API](https://apis.io/apis/calendly/webhook-api/), the [Calendly Embed API](https://apis.io/apis/calendly/embed-api/), which puts a booking page inside your own site, and the [Calendly Availability API](https://apis.io/apis/calendly/calendly-availability-api/), which shows the open times for each type of meeting.

Start by creating one webhook subscription that sends new bookings to the place your team already works, and build from there.
