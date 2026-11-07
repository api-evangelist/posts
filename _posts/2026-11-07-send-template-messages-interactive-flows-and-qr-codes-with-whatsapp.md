---
published: true
layout: post
title: 'Send Template Messages, Interactive Flows And QR Codes With WhatsApp'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-template-messages-interactive-flows-and-qr-codes-with-whatsapp.png
date: 2026-11-07 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - WhatsApp
  - SMS & Messaging Apps
  - Messaging
  - Business Messaging
---

Your customers are already on WhatsApp, and they would rather get the order confirmation, the appointment reminder or the delivery update there than in an email they will not open. You might also want a booking form that lives inside the chat, or a QR code on the shop window that opens a conversation with you. [WhatsApp](https://apis.io/providers/whatsapp/) can do all of that through an API, a way for one piece of software to ask another to do work, so your order system, your booking tool or an AI assistant can send the message for you.

## What WhatsApp does

[WhatsApp](https://www.whatsapp.com/), owned by Meta Platforms, is the free, end-to-end encrypted messaging and calling app that Meta says is used by more than two billion people. For businesses it offers the WhatsApp Business Platform. The centre of it is the Cloud API, hosted on Meta's Graph API, for sending and receiving messages, media, interactive messages and template messages, alongside the Business Management API, WhatsApp Flows, webhooks and per-conversation pricing. One thing to know before you read older guides: the self-hosted On-Premises API was sunset on October 23, 2025, so everything now runs through Meta's hosted service.

On APIs.io we list the platform in pieces: the [Messages API](https://apis.io/apis/whatsapp/whatsapp-messages-api/) for sending every kind of message, the [Message Templates API](https://apis.io/apis/whatsapp/whatsapp-message-templates-api/) for the pre-approved messages a business is allowed to start a conversation with, the [Flows API](https://apis.io/apis/whatsapp/flows-api/) for structured forms and multi-step experiences inside a chat, the [Media API](https://apis.io/apis/whatsapp/whatsapp-media-api/) for images and documents, the [Phone Numbers API](https://apis.io/apis/whatsapp/whatsapp-phone-numbers-api/) and [Business Profile API](https://apis.io/apis/whatsapp/whatsapp-business-profile-api/) for who you appear as, and the [Analytics API](https://apis.io/apis/whatsapp/whatsapp-analytics-api/) for conversation and template statistics. The retired [On-Premises API](https://apis.io/apis/whatsapp/on-premises-api/) is listed so you can recognise it when you meet it.

## What you can get done

We map WhatsApp's operations to one business capability, and the rest of what the platform does shows up in the workflows below.

### [SMS & Messaging Apps](https://apis.io/capabilities/sms-messaging-apps/)

Sending a message from your software to a customer's phone. A template message is one Meta has approved in advance, which is what lets a business open a conversation rather than only reply to one. An interactive message carries buttons or a list the customer can tap. Both go through the same call.

- `POST /{phone-number-id}/messages` sends a message from one of your business phone numbers: plain text, an image or document, a location pin, reply buttons, a template, or a flow.
- `POST /{Version}/{Phone-Number-ID}/messages` is the same send, with the Graph API version named in the path.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. They are written in Arazzo, an open format for describing them, and WhatsApp has 14 of them on APIs.io. They cover most of what a business would set up in its first month.

- [Verify and Register Phone Number](https://apis.io/arazzos/whatsapp/whatsapp-register-phone-number-workflow/) requests a verification code, verifies it, then registers the number. This comes first.
- [Create Template then Send](https://apis.io/arazzos/whatsapp/whatsapp-create-template-then-send-workflow/) creates a message template and sends it once it is available.
- [Find Approved Template and Send](https://apis.io/arazzos/whatsapp/whatsapp-send-template-message-workflow/) looks up a template by name and sends it to a recipient, the everyday order confirmation.
- [Build, Publish, and Send a Flow](https://apis.io/arazzos/whatsapp/whatsapp-publish-flow-and-send-workflow/) creates a flow, uploads its definition, publishes it, and sends it as an interactive message, which is how a booking or lead form ends up inside the chat.
- [Check Number then Send Interactive Buttons](https://apis.io/arazzos/whatsapp/whatsapp-send-interactive-buttons-workflow/) confirms the sending number is verified, then sends a message with reply buttons.
- [Confirm Profile then Send Location](https://apis.io/arazzos/whatsapp/whatsapp-send-location-message-workflow/) reads the business profile to confirm the sender, then sends a location pin.
- [Create and Retrieve QR Code](https://apis.io/arazzos/whatsapp/whatsapp-create-qr-code-workflow/) creates a click-to-chat QR code and reads back its link and image, ready for the shop window.
- [Send Message then React to It](https://apis.io/arazzos/whatsapp/whatsapp-send-and-react-workflow/) sends a text and then applies an emoji reaction to it.

## Getting started

Access runs through Meta's business tooling rather than a plain signup, and the [get started](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started) guide walks through creating the business account and the first phone number. The [about the platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform) page is the overview, the [Flows documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows) covers the in-chat forms, and the [On-Premises sunset](https://developers.facebook.com/docs/whatsapp/on-premises/sunset) notice explains the migration if you inherited an older setup. WhatsApp charges per conversation, and we summarise what we found in the [Pricing section](https://apis.io/providers/whatsapp/#pricing) of the APIs.io profile. The one figure on our sheet, as of late October 2026, is for Meta Business Agent messages: one global rate of $2.00 USD per 1 million tokens; the conversation rates themselves are on Meta's [pricing page](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). On APIs.io you can browse the [WhatsApp profile](https://apis.io/providers/whatsapp/), the [Messages API](https://apis.io/apis/whatsapp/whatsapp-messages-api/), the [Message Templates API](https://apis.io/apis/whatsapp/whatsapp-message-templates-api/) and the [Flows API](https://apis.io/apis/whatsapp/flows-api/). Register a number, get one template approved, and send your next order confirmation where your customer will actually read it.
