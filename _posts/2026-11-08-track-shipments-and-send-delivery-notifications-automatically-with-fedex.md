---
published: true
layout: post
title: 'Track Shipments And Send Delivery Notifications Automatically With FedEx'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/track-shipments-and-send-delivery-notifications-automatically-with-fedex.png
date: 2026-11-08 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - FedEx
  - Shipment Tracking Management
  - Logistics
  - Shipping
---

If you ship products to customers, you know the question that fills your inbox: "where is my order?" Somebody on your team copies a tracking number into a website, reads the status, and pastes it back into an email. It works when you ship a handful of boxes a week. It stops working when you ship hundreds. The good news is that [FedEx](https://apis.io/providers/fedex/) makes the same tracking information available through an API, which is a way for software, your store, your help desk, or an AI assistant, to ask FedEx directly and get the answer back without anyone copying and pasting.

## What FedEx does

[FedEx](https://www.fedex.com/) is a logistics company that provides shipping and delivery services around the world, for individuals and businesses, including express shipping, freight and e-commerce fulfillment. Alongside the trucks and planes, FedEx publishes a suite of REST APIs covering tracking, shipping, rating, address validation, pickup, location lookup, trade documents and post-shipment visibility through its developer portal. APIs.io currently lists 28 FedEx APIs on its profile.

## What you can get done

### [Shipment Tracking Management](https://apis.io/capabilities/shipment-tracking-management/)

This is the capability that answers "where is it?" for every package you send, and lets you tell your customer before they have to ask. Instead of a person checking each parcel, your order system can look up every open shipment, update the status on the order page, and trigger a message when something changes. The operations behind it, the individual requests software makes, are:

- `POST /track/v1/trackingnumbers` looks up the current status of one or more packages by their tracking numbers.
- `POST /track/v1/referencenumbers` finds a shipment using your own reference, such as an order number or purchase order, when you do not have the tracking number handy.
- `POST /track/v1/tcn` tracks a shipment by its Transportation Control Number (TCN), an identifier used for government and military freight.
- `POST /track/v1/associatedshipments` follows all the pieces of a multi-box shipment together, so one order split across several boxes reads as one delivery.
- `POST /track/v1/trackingdocuments` retrieves documents tied to a shipment, such as proof of delivery, which is useful when a customer says a package never arrived.
- `POST /track/v1/notifications` sends shipment notifications to the people who need to know, so your customer hears about the delivery from the source.

For a business, that adds up to fewer "where is my order" tickets, faster answers when there is a problem, and paperwork you can pull up in seconds instead of hunting for it.

Tracking is the capability APIs.io has mapped in detail so far, but it is not all FedEx offers. The profile also lists the [FedEx Ship API](https://apis.io/apis/fedex/fedex-ship-api/) for creating shipping labels, the [FedEx Rates and Transit Times API](https://apis.io/apis/fedex/fedex-rates-and-transit-times-api/) for knowing the cost and delivery time before you ship, the [FedEx Pickup Request API](https://apis.io/apis/fedex/fedex-pickup-request-api/) for scheduling a courier, and the [FedEx Address API](https://apis.io/apis/fedex/fedex-address-api/) for catching a bad address before the label prints. If you would rather be told about changes than keep asking, the [FedEx Shipment Visibility Webhook](https://apis.io/apis/fedex/fedex-shipment-visibility-webhook/) pushes near real-time tracking updates to your own systems. A webhook is simply FedEx calling you when something happens, instead of you calling FedEx.

## Getting started

FedEx access is self-serve signup, with enterprise arrangements on top, and it is a hosted service, meaning your software calls FedEx's endpoints rather than running anything yourself. Every request is authorized with the [FedEx API Authorization](https://apis.io/apis/fedex/fedex-api-authorization/) API, which uses OAuth 2.0, a standard way for an application to prove it is allowed to act on your account. FedEx's own documentation covers [authorization](https://developer.fedex.com/api/en-us/catalog/authorization/v1/docs.html), [rates](https://developer.fedex.com/api/en-us/catalog/rate/v1/docs.html) and [shipping](https://developer.fedex.com/api/en-us/catalog/ship/v1/docs.html).

On cost, some of the visibility services are paid. FedEx lists Advanced Integrated Visibility for 1-7,500 track numbers per month at $199, and you can see the rest in the [Pricing section of the FedEx profile on APIs.io](https://apis.io/providers/fedex/#pricing) or FedEx's own [pricing guide](https://developer.fedex.com/api/en-us/guides/pricing-guide.html).

The [FedEx profile on APIs.io](https://apis.io/providers/fedex/) brings all of this together, along with the [FedEx Basic Integrated Visibility](https://apis.io/apis/fedex/fedex-basic-integrated-visibility/) tracking API. If tracking questions are eating your team's day, start by handing the tracking numbers from your last week of orders to whoever builds your store, and ask them to wire up that one tracking call first.
