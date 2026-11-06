---
published: true
layout: post
title: 'Publish Posts, Moderate Comments And Find Hashtags With Instagram'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/publish-posts-moderate-comments-and-find-hashtags-with-instagram.png
date: 2026-11-06 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Instagram
  - Digital Marketing Management
  - User-Generated Content Moderation
  - Social Networks & Community
  - Social Media
  - Content Publishing
---

You run a business account on Instagram, and the posting is the easy part. What takes the time is everything else: scheduling posts from the same calendar your other channels use, clearing spam from the comments under a post that took off, and working out which hashtags are actually pulling. If you have ever wished a tool could do that for you, it can. [Instagram](https://apis.io/providers/instagram/) exposes its business features through an API, a way for one piece of software to talk to another, so a scheduling tool, a script, or an AI assistant can publish, moderate and research on your behalf.

## What Instagram does

[Instagram](https://www.instagram.com/) is a photo and video sharing social networking platform owned by Meta. The Instagram APIs allow developers to build integrations with Instagram Business and Creator accounts for content publishing, media management, comment moderation, hashtag discovery, insights and analytics, messaging, and embedding. They are available through the Meta Developer Platform, with Facebook Login or Instagram Login for authentication. On APIs.io we track the APIs separately, among them [Publishing](https://apis.io/apis/instagram/instagram-publishing-api/), [Comments](https://apis.io/apis/instagram/instagram-comments-api/), [Hashtags](https://apis.io/apis/instagram/instagram-hashtags-api/), [Insights](https://apis.io/apis/instagram/instagram-insights-api/) and [oEmbed](https://apis.io/apis/instagram/instagram-oembed-api/), which is how an Instagram post gets embedded on your own website.

## What you can get done

We have mapped Instagram's operations to three business capabilities, and they line up neatly with the three chores above.

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

Publishing through the API is a two-step job. First you create a container, which is the staged post with its photo or video, caption, location and tags. Then, once the container is ready, you publish it. That split is what lets a scheduling tool prepare a post now and release it at nine tomorrow.

- `POST /{user_id}/media` creates the container, with the media, caption, location and user tags.
- `GET /{container_id}` checks whether a container has finished processing, which matters for video.
- `POST /{user_id}/media_publish` publishes the container so the post goes live.
- `GET /{user_id}/content_publishing_limit` tells you how close the account is to its publishing limit before you post more.

### [User-Generated Content Moderation](https://apis.io/capabilities/user-generated-content-moderation/)

Comments are where a business account earns or loses goodwill. These operations let a tool read every comment on a post, hide the abusive ones without deleting them, and remove the outright spam, at a scale no one can keep up with by thumb.

- `GET /{media_id}/comments` pulls all the comments on one post, choosing which fields come back.
- `GET /{comment_id}` reads one comment, with its text and timestamp.
- `POST /{comment_id}` hides a comment from view, or brings back one you hid earlier.
- `DELETE /{comment_id}` permanently removes a comment from your own media.
- `GET /{comment_id}/replies` lists the threaded replies under a comment, so a conversation can be moderated whole.
- `POST /{media_id}/comments` leaves a top-level comment on a post, which is how a tool replies on your behalf.

### [Social Networks & Community](https://apis.io/capabilities/social-networks-community/)

The widest of the three, with 17 operations, this is where hashtag research lives alongside the comment operations above. Hashtags on Instagram have IDs, so research starts by finding the ID and then asking what is popular under it.

- `GET /ig_hashtag_search` looks up the ID for a hashtag by name, from a business account.
- `GET /{hashtag_id}/top_media` lists the top-performing posts under that hashtag, rather than the newest.

## Ask for it in plain language

We have written conversational overlays for Instagram, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. There are seven of them, one per API. These are the kinds of questions they map:

- "What is the first step to post a photo to Instagram through the API?"
- "Is my uploaded video container finished processing and ready to publish?"
- "How close am I to the publishing rate limit on my account?"
- "Can I hide an abusive comment on my post without deleting it?"
- "How do I permanently remove a spam comment from one of my posts?"
- "What are the top-performing posts tagged with a given hashtag?"

You can see one of them on the [Comments API phrasing overlay](https://apis.io/overlays/instagram/instagram-comments-api-phrasing-overlay/).

## Getting started

Instagram's API is freemium with self-serve signup: you create a Meta developer account, connect a Business or Creator account, and call a hosted endpoint. The place to begin is the [Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login) guide and its [business login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/business-login) page, which explains how an account grants your tool permission. The [messaging](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api) and [oEmbed](https://developers.facebook.com/docs/instagram-platform/oembed) guides cover direct messages and embedding. I could not find Arazzo workflows for Instagram on APIs.io yet. You can browse the [Instagram profile](https://apis.io/providers/instagram/), the [Publishing API](https://apis.io/apis/instagram/instagram-publishing-api/), the [Comments API](https://apis.io/apis/instagram/instagram-comments-api/) and the [Hashtags API](https://apis.io/apis/instagram/instagram-hashtags-api/). If comment spam is the thing that wakes you up, start there; it is the smallest set of calls with the biggest relief.
