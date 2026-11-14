---
published: true
layout: post
title: 'Run Your Store And Restaurant Inventory, Gift Cards And Orders With Lightspeed Commerce'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/run-your-store-and-restaurant-inventory-gift-cards-and-orders-with-lightspeed-commerce.png
date: 2026-11-14 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Lightspeed Commerce
  - Cart & Checkout
  - Item Master Data Management
  - Tender and Payment Acceptance Management
  - Retail
  - Restaurant
---

If you run a shop or a restaurant, the point-of-sale system is where the day happens, but it is rarely the only system you use. Your products live in a spreadsheet, your online store needs the same catalog, your accountant wants sales, and somebody has to keep gift cards straight. Copying all of that by hand is where the hours go. [Lightspeed Commerce](https://apis.io/providers/lightspeed/) exposes its point-of-sale and e-commerce platforms through APIs, which means other software, or an AI assistant acting for you, can read and update your products, orders and gift cards directly.

## What Lightspeed Commerce does

[Lightspeed](https://www.lightspeedhq.com/) is an omnichannel commerce platform, which simply means one system for selling in the store, at the table and online. It offers cloud-based point-of-sale for retailers and restaurateurs, with APIs for sales, inventory, customers, orders, payments and loyalty programs across several product lines, including Retail X-Series, Retail R-Series, Restaurant K-Series and eCom. Several of those lines came from companies Lightspeed acquired, such as the Ecwid storefront and the Kounta hospitality point-of-sale.

## What you can get done

### [Item Master Data Management](https://apis.io/capabilities/item-master-data-management/)

Your product catalog is the master list everything else depends on: names, prices, SKUs and variants. Keeping it in one place and pushing it everywhere else is the single biggest time saver for most retailers.

- `GET /products` lists every product in your retail catalog.
- `POST /products` adds a new product with its price and SKU.
- `GET /products/{product_id}` fetches the full details of one product.
- `DELETE /products/{product_id}` removes a product, or just one of its variants.

### [Product Content Authoring Management](https://apis.io/capabilities/product-content-authoring-management/)

Shoppers buy from pictures and diners care about allergens. This capability covers the content that describes what you sell.

- `PUT /product_images/{product_image_id}` changes the order of a product's images, so the best photo shows first.
- `GET /product_images/{product_image_id}` checks whether an uploaded image has finished processing.
- `DELETE /product_images/{product_image_id}` removes an image from a product.
- `GET /i/allergens` lists the allergens you can tag on a menu item.

### [Tender and Payment Acceptance Management](https://apis.io/capabilities/tender-and-payment-acceptance-management/)

"Tender" is the way a customer pays. Gift cards are one of the most common, and one of the easiest to get wrong when they are tracked in more than one place.

- `GET /gift_cards` lists the gift cards your store has issued.
- `POST /gift_cards` issues and activates a new gift card with a starting balance.
- `GET /gift_cards/by_id/{id}` looks up a gift card and its transaction history.
- `DELETE /gift_cards/by_id/{id}` voids a gift card so its balance goes to zero.

### [Cart & Checkout](https://apis.io/capabilities/cart-checkout/)

For restaurants, ordering depends on where people sit. These calls give an ordering app or kiosk the map of your venue before it places an order.

- `GET /o/op/data/businesses` lists the businesses and locations your access token can reach.
- `GET /o/op/data/{businessLocationId}/floorplans` lists the floorplans set up for a location.
- `GET /o/op/data/{businessLocationId}/floorplans/{floorPlanId}/tables` lists the tables on one floorplan.
- `GET /o/op/data/account-profiles` lists the active order profiles for a location.

### [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/)

A webhook is a message Lightspeed sends to your software the moment something happens, so you do not have to keep asking.

- `POST /webhooks` asks to be notified when a sale or a product changes.
- `GET /webhooks` lists the webhooks registered on your retail account.
- `GET /webhooks/{webhookId}` shows whether a webhook is active and which URL it calls.
- `DELETE /webhooks/{webhookId}` removes a webhook subscription.

## Ask for it in plain language

Lightspeed has 52 phrasing overlays on APIs.io. A phrasing overlay maps plain questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they cover:

- How do I add a new product with a price and SKU?
- Which gift cards have been issued by my store?
- How do I sell a new gift card with a starting balance?
- Which tables are on a particular floorplan in my venue?
- How do I get notified when a sale or product changes?

The [Lightspeed Brands API phrasing overlay](https://apis.io/overlays/lightspeed/lightspeed-brands-api-phrasing-overlay/) is a good place to see how it works.

## Getting started

Lightspeed is a paid, hosted service you call over the web. Plans are in the [pricing section of its APIs.io profile](https://apis.io/providers/lightspeed/#pricing); as one example, Retail Basic is listed at 89 USD/mo. Developers can [register here](https://developers.retail.lightspeed.app/register), then read the [Retail documentation](https://developers.lightspeedhq.com/retail/introduction/introduction/), the [eCom documentation](https://developers.lightspeedhq.com/ecom/introduction/introduction/) and the [Retail authentication overview](https://developers.lightspeedhq.com/retail/authentication/authentication-overview/).

The [Lightspeed Commerce profile on APIs.io](https://apis.io/providers/lightspeed/) lists every API, including the [Retail R-Series API](https://apis.io/apis/lightspeed/retail-r-series/), the [eCom API](https://apis.io/apis/lightspeed/ecom-c-series/) and the [Restaurant O-Series API](https://apis.io/apis/lightspeed/restaurant-o-series/). If you automate one thing first, make it your product catalog, because everything else reads from it.
