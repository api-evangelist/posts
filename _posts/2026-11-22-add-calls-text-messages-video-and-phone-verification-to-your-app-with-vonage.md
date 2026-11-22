---
published: true
layout: post
title: 'Add Calls, Text Messages, Video And Phone Verification To Your App With Vonage'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/add-calls-text-messages-video-and-phone-verification-to-your-app-with-vonage.png
date: 2026-11-22 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Vonage
  - Video Calling
  - Voice & Telephony
  - Identity Verification
  - Communications
  - Messaging
---

You want your customers to be able to reach you, and you want to reach them, without leaving your own website or app. Maybe that is a video consultation, an automated phone call reminding someone of an appointment, a WhatsApp message when an order ships, or a one-time code that proves the person logging in is really them. You do not need to build a phone company to do any of that. Vonage offers these as APIs, which are simply a way for your software, or an AI assistant working for you, to ask Vonage to place the call, send the message or check the code. I keep what I know about Vonage on its [APIs.io profile](https://apis.io/providers/vonage/).

## What Vonage does

Vonage, which is part of Ericsson, provides cloud communications APIs for voice, SMS, messaging, video and verification. The idea is that a business embeds those abilities directly into its own applications, so a call or a chat happens inside your product rather than in a separate tool. Vonage describes multi-channel messaging across WhatsApp, Messenger, Viber and RCS, alongside video conferencing and two-factor authentication, and it publishes libraries for the common programming languages so your developers are not starting from scratch. The company is at [vonage.com](https://www.vonage.com/).

## What you can get done

### [Video Calling](https://apis.io/capabilities/video-calling/)

If you sell advice, care, support or education, a video room inside your own app keeps the customer in your experience instead of handing them off to a meeting link from somewhere else. Vonage lets your software create the rooms, look them up and moderate them.

- `GET /rooms` lists all of your meeting rooms.
- `POST /rooms` creates a new room for a session.
- `GET /rooms/:room_id` fetches the details of one room.
- `PATCH /rooms/:room_id` changes an existing room's settings.
- `DELETE /v2/project/{application_id}/session/{session_id}/connection/{connection_id}` removes a participant from a session, the host's way of handling someone who should not be there.

### [Voice & Telephony](https://apis.io/capabilities/voice-telephony/)

Phone calls are still how a lot of business gets done. With the voice side of Vonage, your system can place a call on its own, check on calls in progress and steer them, which is how automated reminders, call-backs and phone menus get built.

- `POST /` places an outbound call.
- `GET /` returns the details of your calls.
- `GET /{uuid}` fetches the detail of one specific call.
- `PUT /{uuid}` changes a call that is already in progress, for example transferring it.
- `PUT /{uuid}/dtmf` plays keypad tones into a call, the beeps a phone menu listens for.

### [Identity Verification](https://apis.io/capabilities/identity-verification/)

Fraud and fake accounts cost money. Verification is the step where you send a code to someone's phone and confirm they typed it back, or look up what a phone number can tell you before you trust it.

- `POST /` requests that a verification code be sent to a user.
- `POST /check/{format}` checks the code the user entered.
- `POST /psd2/{format}` sends a verification that meets PSD2, the European payment rules that require strong customer authentication.
- `POST /requests` retrieves identity insights about a phone number.

### [SMS & Messaging Apps](https://apis.io/capabilities/sms-messaging-apps/)

Customers increasingly expect to hear from you in the messaging apps they already use. Vonage lets you connect those accounts so your software can send from them.

- `POST /messenger` connects a Messenger account.
- `GET /messenger/{external_id}` retrieves a connected Messenger account.
- `PATCH /messenger/{external_id}` updates that account.
- `DELETE /messenger/{external_id}` removes it.

### [Subscriber Authentication & Authorisation](https://apis.io/capabilities/subscriber-authentication-authorisation/)

This is the newer verification flow, where you manage a verification from start to finish, including falling back to a different channel when the first one does not get through.

- `POST /{request_id}` checks a supplied code against a request.
- `DELETE /{request_id}` cancels a verification.
- `POST /{request_id}/next_workflow` moves on to the next channel, say from SMS to a voice call.
- `GET /{request_id}/silent-auth/redirect` completes silent authentication, which confirms a user through their mobile network without them typing a code.

## Getting started

Vonage is a hosted service you call directly. What I have recorded on its plans is in the [Pricing section of the profile](https://apis.io/providers/vonage/#pricing). Vonage's own documentation is organised by product: the [SMS API](https://developer.vonage.com/en/api/sms), the [Messages API](https://developer.vonage.com/en/api/messages) and the [Voice API](https://developer.vonage.com/en/api/voice).

On APIs.io, the [Vonage Application API](https://apis.io/apis/vonage/vonage-application-api/) is the place to start, because an application is how Vonage groups your settings and credentials, then the [Vonage Account API](https://apis.io/apis/vonage/vonage-account-api/) and the [Vonage Archives API](https://apis.io/apis/vonage/vonage-archives-api/) for recorded video sessions. The rest of the 22 APIs are on the [Vonage profile](https://apis.io/providers/vonage/). Pick the one way you most want to talk to customers, and start there.
