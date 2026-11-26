---
published: true
layout: post
title: 'Add In-App Chat, Activity Feeds And Moderation To Your App With Stream'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/add-in-app-chat-activity-feeds-and-moderation-to-your-app-with-stream.png
date: 2026-11-26 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Stream
  - User-Generated Content Moderation
  - Chat
  - Activity Feeds
  - Messaging
---

If you run an app, a marketplace or an online community, sooner or later your customers want to talk to each other inside it. They want to message a seller, comment on a post, see what the people they follow are doing, or jump on a quick video call, and you want all of that without people posting abuse you then have to clean up by hand. Building chat, feeds and calling from scratch is a big job. [Stream](https://apis.io/providers/getstream/) offers all of it through an API, which is a way for your software (or an AI assistant working for you) to call their service and have the work done, so your team plugs the pieces in rather than building them.

## What Stream does

Stream, also known by its domain GetStream.io, describes itself as API-first infrastructure for in-app chat messaging, activity feeds, audio and video calling, livestreaming and AI moderation. It is a hosted service: you call their endpoint, and they run the servers, store the messages and keep the real-time connections open. Their client SDKs hold a live connection open to each user's app, so new messages, typing indicators, reactions and "who is online" changes show up instantly rather than on a refresh. You can read more on the [Stream website](https://getstream.io).

The catalog lists the separate APIs that make this up:

- The [Stream Activity Feeds API](https://apis.io/apis/getstream/getstream-activity-feeds-api/) for timelines: add activities, follow and unfollow feeds, and fan updates out to followers. This is what powers a social timeline or a notification feed.
- The [Stream Video and Audio API](https://apis.io/apis/getstream/getstream-video-audio-api/) for calls and livestreams, including managing who is on a call, recording, transcription and broadcasting.
- The [Stream Product:chat API](https://apis.io/apis/getstream/getstream-product-chat-api/), the largest of them at 194 operations, covering channels, messages, reactions and members.
- The [Stream Product:moderation API](https://apis.io/apis/getstream/getstream-product-moderation-api/), with 56 operations for keeping conversations safe.

There are also companion APIs for feeds, video and the shared pieces common to every product.

## What you can get done

### [Keep user-generated content in check](https://apis.io/capabilities/user-generated-content-moderation/)

The moment you let customers post, you are responsible for what they post. Moderation is the business capability that lets you act on bad behaviour quickly: flag a message for review, quiet a user who is being disruptive, or remove someone who breaks the rules, and undo it when a decision was wrong. Done through the API, those actions can be triggered by your own support tools, by automated rules, or by an assistant that a moderator asks in plain language. The core operations are:

- `POST /moderation/flag` flags a message or a user so someone can review it.
- `POST /moderation/mute` mutes a user, so their messages stop reaching the person who muted them.
- `POST /moderation/ban` bans a user from the conversation.
- `DELETE /moderation/ban` unbans a user, for when an appeal succeeds or a ban was a mistake.

These are enforcement building blocks rather than a full review queue, so most teams wire them into whatever review process they already run. That is the point of having them as an API: your process stays yours, and Stream carries out the decision.

Beyond moderation, the chat, feeds and video APIs listed above are where most of the product lives. I have mapped moderation as a named business capability so far; the chat messaging, activity feed and calling surfaces are documented in the catalog at the API level, and you can browse their operations from each API page.

## Getting started

Stream is a paid, hosted service, metered on monthly active users for chat and participant minutes for video, with plan tiers from a starting plan through to enterprise. Before you commit, check the [Pricing section on the Stream profile](https://apis.io/providers/getstream/#pricing) for the current plans.

Their documentation is split by product:

- [Chat documentation](https://getstream.io/chat/docs/)
- [Activity feeds documentation](https://getstream.io/activity-feeds/docs/)
- [Video API documentation](https://getstream.io/video/docs/api/)

On APIs.io, start with the [Stream provider profile](https://apis.io/providers/getstream/), then look at the [chat API](https://apis.io/apis/getstream/getstream-product-chat-api/), the [moderation API](https://apis.io/apis/getstream/getstream-product-moderation-api/) and the [activity feeds API](https://apis.io/apis/getstream/getstream-activity-feeds-api/) to see exactly what each one can do.

If your customers already want to talk to each other inside your product, pick the one conversation that matters most, whether that is buyer-to-seller chat, a community feed or a support call, and hand that list of operations to whoever builds your app.
