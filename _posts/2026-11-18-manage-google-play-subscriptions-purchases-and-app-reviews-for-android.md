---
published: true
layout: post
title: 'Manage Google Play Subscriptions, Purchases And App Reviews For Android'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-google-play-subscriptions-purchases-and-app-reviews-for-android.png
date: 2026-11-18 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Android
  - Plan & Entitlement Design
  - Entitlement Enforcement
  - Customer Feedback Management
  - In-App Purchases & App Store Billing
  - Mobile Development
---

If you sell an Android app, you spend real time on things that are not the app. A customer says they paid but cannot get in. Someone wants a refund. Your service was down for a day and you want to give subscribers a few free days. A one-star review sits unanswered. All of that runs through Google Play, and the [Android](https://apis.io/providers/android/) ecosystem exposes it through an API, which means your support tools, your backend, or an AI assistant can handle it for you.

An API is a set of doors into a service that other software can knock on. A program sends a request, like "is this purchase valid?" or "refund this order," and gets an answer back. That is what lets your support desk fix billing problems without logging into a console.

## What Android offers

Android is the collection of APIs and services available in the Android ecosystem, from the core platform and Jetpack libraries to Google Play services, Firebase and the Play Console. You can find it at [android.com](https://www.android.com/). This story is about the business side: selling inside your app and hearing from your customers.

## What you can get done

### Check and manage subscriptions

[Plan & Entitlement Design](https://apis.io/capabilities/plan-entitlement-design/) covers the plans you sell and the state of each customer's subscription. When a purchase comes in, Google gives you a token, a receipt your server can check.

- `GET /applications/{packageName}/purchases/subscriptionsv2/tokens/{token}` returns the current state of a subscription.
- `POST /applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge` confirms you have received a purchase.
- `POST /applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel` stops a subscription from renewing.
- `POST /applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer` pushes the renewal date out, a goodwill credit.
- `POST /applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke` takes access away immediately.

### Make sure people get what they paid for

[Entitlement Enforcement](https://apis.io/capabilities/entitlement-enforcement/) is about granting access to exactly what was bought. An entitlement is simply the right to use something. For one-time purchases, like coins or a level pack:

- `GET /applications/{packageName}/purchases/products/{productId}/tokens/{token}` checks whether a purchase is real.
- `POST /applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge` confirms it.
- `POST /applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume` uses it up, so the customer can buy it again.

### Issue refunds

[In-App Purchases & App Store Billing](https://apis.io/capabilities/in-app-purchases-app-store-billing/) covers money handled through the app store. `POST /applications/{packageName}/orders/{orderId}:refund` refunds a Google Play order.

### Answer your reviews

[Customer Feedback Management](https://apis.io/capabilities/customer-feedback-management/) is listening and replying to what customers say. Route reviews to your support team, or draft replies with an assistant.

- `GET /applications/{packageName}/reviews` lists your app's reviews.
- `GET /applications/{packageName}/reviews/{reviewId}` reads one review.
- `POST /applications/{packageName}/reviews/{reviewId}:reply` posts your reply.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order to finish one job. These are written in Arazzo, an open format for describing those recipes so software can follow them.

- [Cancel a Subscription Purchase](https://apis.io/arazzos/android/android-cancel-subscription-purchase-workflow/) stops auto-renewal from your support tools while the customer keeps access until it expires.
- [Defer a Subscription Renewal](https://apis.io/arazzos/android/android-defer-subscription-renewal-workflow/) reads a subscriber's expiry and pushes it forward to make good on an outage.
- [Refund a Play Order](https://apis.io/arazzos/android/android-refund-order-workflow/) finds the order behind a purchase, refunds it, and can remove access.
- [Grant and Consume a Consumable Purchase](https://apis.io/arazzos/android/android-grant-consumable-purchase-workflow/) verifies, acknowledges and uses up a one-time purchase.
- [Reconcile Voided Purchases](https://apis.io/arazzos/android/android-reconcile-voided-purchases-workflow/) checks for refunds and chargebacks so access can be pulled back.
- [Launch a Subscription Product with an Introductory Offer](https://apis.io/arazzos/android/android-launch-subscription-product-workflow/) creates a new subscription with a starter deal.
- [Retire an Unpublished Subscription Product](https://apis.io/arazzos/android/android-retire-subscription-product-workflow/) deletes or archives a plan you no longer sell.

## Getting started

Access is freemium with self-serve signup, and these are hosted services you call. Cost details we have gathered are in the [Pricing section of the Android profile](https://apis.io/providers/android/#pricing). Google's documentation covers [Android development](https://developer.android.com/docs), [Google Play services](https://developers.google.com/android/guides/overview) and [authorizing calls to the Play publishing API](https://developers.google.com/android-publisher/authorization).

On APIs.io you can browse the full [Android profile](https://apis.io/providers/android/) and APIs such as the [Google Play Billing API](https://apis.io/apis/android/google-play-billing-api/), the [Google Play Console API](https://apis.io/apis/android/google-play-console-api/) and [Google Play Services APIs](https://apis.io/apis/android/google-play-services-apis/).

Start with the support ticket you see most, probably "I paid but cannot get in," and have your backend check the purchase token for you.
