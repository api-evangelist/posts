---
published: true
layout: post
title: 'Manage TikTok Ad Campaigns And TikTok Shop Orders Automatically With The TikTok API'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-tiktok-ad-campaigns-and-tiktok-shop-orders-automatically-with-the-tiktok-api.png
date: 2026-11-10 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - TikTok
  - Digital Marketing Management
  - Social & Creator Commerce
  - Logistics Operations Management
  - Advertising
  - E-Commerce
---

If your business sells on TikTok, you probably know the routine: building ad campaigns in one screen, checking orders in another, updating products by hand, printing shipping labels one at a time. Every one of those steps can be done by software instead. [TikTok](https://apis.io/providers/tiktok/) offers APIs, ways for your own tools (or an AI assistant) to create campaigns, read orders and update your shop listings directly, so the daily busywork happens on its own.

## What TikTok does

[TikTok](https://www.tiktok.com/) is a short-form social video platform. For businesses it offers APIs across advertising, e-commerce, content and platform integrations. The main products are the TikTok API for Business for advertising and campaign management, the TikTok Shop API for sellers managing products and orders, and the Data Portability API.

## What you can get done

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

Running paid ads on TikTok means a structure of campaigns, ad groups inside them (who sees the ads, when, and on what budget), and the ads themselves. Software can build and adjust all of it, which matters when you run many products or many markets.

- `POST /open_api/v1.3/campaign/create/` creates a campaign.
- `POST /open_api/v1.3/campaign/update/` changes one, for example its budget or status.
- `POST /open_api/v1.3/adgroup/create/` creates an ad group with its targeting and schedule.
- `POST /open_api/v1.3/ad/create/` creates the ad itself.
- `GET /open_api/v1.3/campaign/get/` lists your campaigns so you can review them in your own dashboard.

There is also `POST /v2/post/publish/video/init/`, which starts a video upload for publishing, useful if your team produces content outside the app.

### [Social & Creator Commerce](https://apis.io/capabilities/social-creator-commerce/)

TikTok Shop lets you sell inside the app. The API connects the shop to your inventory and order systems so nothing has to be copied across.

- `GET /order/202309/orders` lists your orders.
- `GET /order/202309/orders/{order_id}` gets the details of one order.
- `GET /product/202309/products` lists your product catalog.
- `PUT /product/202309/products/{product_id}` updates a product, such as its price or description.
- `POST /product/202309/products/upload_files` uploads files for a product listing.

### [Logistics Operations Management](https://apis.io/capabilities/logistics-operations-management/)

- `GET /logistics/202309/orders/{order_id}/shipping_documents` gets the shipping documents for an order, so labels can print in your warehouse as orders come in.

### [Privacy & Data Protection Management](https://apis.io/capabilities/privacy-data-protection-management/)

The Data Portability API exists so people can export their own data, a legal right in many places.

- `POST /v2/data_portability/task/create/` starts an export.
- `POST /v2/data_portability/task/status/` checks how it is going.

## Getting started

TikTok's APIs are freemium with self-serve signup. Cost details, as far as I have them, are in the [pricing section of the APIs.io profile](https://apis.io/providers/tiktok/#pricing). Each product has its own docs: the [TikTok API for Business portal](https://business-api.tiktok.com/portal/docs), the [TikTok Shop partner docs](https://partner.tiktokshop.com/doc/page/63fd743c715d622a338c4e54) and the [Data Portability getting started guide](https://developers.tiktok.com/doc/data-portability-api-get-started).

The [TikTok profile on APIs.io](https://apis.io/providers/tiktok/) lists every API, including the [Campaigns API](https://apis.io/apis/tiktok/tiktok-campaigns-api/), the [Orders API](https://apis.io/apis/tiktok/tiktok-orders-api/), the [Products API](https://apis.io/apis/tiktok/tiktok-products-api/) and the [Reporting API](https://apis.io/apis/tiktok/tiktok-reporting-api/). Start with whichever side eats more of your week, the ads or the shop.
