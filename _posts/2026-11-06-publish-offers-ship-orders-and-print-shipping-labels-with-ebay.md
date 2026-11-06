---
published: true
layout: post
title: 'Publish Offers, Ship Orders And Print Shipping Labels With eBay'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/publish-offers-ship-orders-and-print-shipping-labels-with-ebay.png
date: 2026-11-06 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - eBay
  - Marketplace Seller Operations Management
  - Order Fulfilment Management
  - Logistics Operations Management
  - Item Master Data Management
  - Marketplace
  - Commerce
---

You sell on eBay, and the selling part is fine. It is everything around it that eats the week: keying the same listing in for the third time, marking orders shipped one by one, buying labels, and keeping the return policy on every listing in step with the one on your website. If your inventory already lives in a spreadsheet, a point-of-sale system or an online store, all of that can be done for you. [eBay](https://apis.io/providers/ebay/) exposes its selling tools through an API, which is a way for one piece of software to talk to another, so your existing systems, a script, or an AI assistant can publish, ship and reconcile on your behalf.

## What eBay does

eBay is a multinational e-commerce corporation that operates a website facilitating consumer-to-consumer and business-to-consumer sales through its online platform. Users can buy and sell a wide range of products, including electronics, fashion, collectibles, and more, in an auction-style or buy-it-now format. On APIs.io we track 25 separate APIs under the [eBay](https://ebay.com) name, each one covering a narrow slice of the marketplace: the [Category Tree](https://apis.io/apis/ebay/ebay-category-tree-api/), [Bidding](https://apis.io/apis/ebay/ebay-bidding-api/), [Custom Policy](https://apis.io/apis/ebay/ebay-custom-policy-api/) and [Destination](https://apis.io/apis/ebay/ebay-destination-api/) APIs among them.

## What you can get done

We have mapped eBay's operations to 13 business capabilities. These are the five a seller will reach for first.

### [Marketplace Seller Operations Management](https://apis.io/capabilities/marketplace-seller-operations-management/)

An offer on eBay is the thing a buyer sees: an item from your inventory, with a price, a quantity and the marketplace it is published to. Creating offers through the API is how a catalogue of hundreds of products gets onto eBay without anyone retyping it. There are 12 operations here.

- `POST /offer` creates an offer for one inventory item, with its price, listing format and policies.
- `POST /bulk_create_offer` creates many offers in one call, which is the one you want for a full catalogue.
- `POST /bulk_publish_offer` publishes a batch of offers so they go live as listings.
- `GET /offer` lists the offers you already have, so you can see what is published and what is still a draft.
- `PUT /offer/{offerId}` updates an existing offer, for example to change a price across the board.

### [Order Fulfilment Management](https://apis.io/capabilities/order-fulfilment-management/)

Once an order comes in, the buyer wants to know it has shipped. A fulfilment is eBay's record of that: the carrier, the tracking number and the items in the box. Fulfilment policies are the reusable rules about handling time and shipping options that you attach to listings. Twelve operations cover both.

- `POST /order/{orderId}/shipping_fulfillment` marks an order as shipped, with the tracking number, so the buyer is told automatically.
- `GET /order/{orderId}/shipping_fulfillment` lists the fulfilments already recorded against an order.
- `POST /fulfillment_policy/` creates a reusable shipping and handling policy.
- `PUT /fulfillment_policy/{fulfillmentPolicyId}` changes one, which then flows through to every listing using it.
- `GET /fulfillment_policy` lists the policies you have so you know which to attach where.

### [Logistics Operations Management](https://apis.io/capabilities/logistics-operations-management/)

This is the shipping label itself. You ask for a quote across carriers, pick one, and download a label to print, all from the same system that just marked the order shipped.

- `POST /shipping_quote` asks for shipping rates for a package going to a buyer.
- `GET /shipping_quote/{shippingQuoteId}` reads the quote back, with the carrier options it returned.
- `POST /shipment/create_from_shipping_quote` buys the label against one of those options.
- `GET /shipment/{shipmentId}/download_label_file` downloads the label file to print.
- `POST /shipment/{shipmentId}/cancel` cancels a shipment you created by mistake.

### [Item Master Data Management](https://apis.io/capabilities/item-master-data-management/)

Every listing has to sit in an eBay category, and each category expects certain details, which eBay calls aspects, such as brand, size or colour. Getting those right is what makes a listing findable. These operations let software look up the category and its required details before it creates the offer.

- `GET /get_default_category_tree_id` finds the category tree for a marketplace, since the UK and US trees differ.
- `GET /category_tree/{category_tree_id}/get_category_suggestions` suggests categories from a plain description of the item.
- `GET /category_tree/{category_tree_id}/get_item_aspects_for_category` tells you which details a category requires.
- `GET /product/{epid}` reads an eBay catalogue product, so you can list against an existing product record.

### [Post-Purchase](https://apis.io/capabilities/post-purchase/)

Return policies are the rules you promise buyers about returns, and like fulfilment policies they are reusable across listings.

- `POST /return_policy` creates a return policy.
- `GET /return_policy` lists the ones you have.
- `PUT /return_policy/{return_policy_id}` changes a policy everywhere it is used.
- `GET /return_policy/get_by_policy_name` finds a policy by the name you gave it.

## Getting started

eBay's API is a paid, self-serve product, meaning you sign up for a developer account yourself and start building. The documentation is split by area, and the seller-facing parts are the ones above: the [Account API overview](https://developer.ebay.com/api-docs/sell/account/static/overview.html) covers policies, and the [Analytics API overview](https://developer.ebay.com/api-docs/sell/analytics/static/overview.html) covers seller performance. I could not find Arazzo workflows or conversational phrasing overlays for eBay on APIs.io yet, so for now the operations are the map. On APIs.io you can browse the [eBay profile](https://apis.io/providers/ebay/), the [Category Tree API](https://apis.io/apis/ebay/ebay-category-tree-api/), the [Deal Item API](https://apis.io/apis/ebay/ebay-deal-item-api/) and the [Destination API](https://apis.io/apis/ebay/ebay-destination-api/). Start with whichever of the three chores, listing, shipping or labels, your team does by hand most often, and have that one done for you first.
