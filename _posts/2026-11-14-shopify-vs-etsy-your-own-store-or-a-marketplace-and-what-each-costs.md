---
published: true
layout: post
title: 'Shopify vs Etsy: Your Own Store or a Marketplace, and What Each Costs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/shopify-vs-etsy-your-own-store-or-a-marketplace-and-what-each-costs.png
date: 2026-11-14 15:00:00 +0000
author: Kin Lane
tags:
  - Comparisons
  - Shopify
  - Etsy
  - E-Commerce
---
Shopify vs Etsy isn't really a choice between two similar products. It's a choice between running your own store and renting a stall in a busy market. Shopify gives you a store you own and have to bring customers to. Etsy gives you its shoppers, and takes a cut of every sale for them. Both can be driven through an API, and that matters once you have more than a handful of products.

I compared the two on what they charge, what their APIs let you automate and how they score. Both are on APIs.io: [Shopify](https://apis.io/providers/shopify/) and [Etsy](https://apis.io/providers/etsy/).

## What each one is for

**Shopify** is a commerce platform you build a business on. It covers your own online store, in-person sales with point of sale, selling on marketplaces and social channels, and, increasingly, selling inside AI chats. You own the storefront, the domain and the customer relationship. You also own the job of getting people to it.

**Etsy** is a global marketplace for handmade, vintage and craft-supply goods. You list products in Etsy's catalog, and Etsy's buyers find them through Etsy search. You don't build a store so much as a shop page inside someone else's.

## What it costs

The two charge in completely different ways: Shopify mostly by subscription, Etsy mostly per sale. I read both companies' pricing pages on November 9, 2026, and the figures below come from them.

**[Shopify](https://apis.io/providers/shopify/#pricing)**, billed yearly:
- **Basic:** $29 a month
- **Grow:** $79 a month
- **Advanced:** $299 a month
- **Plus:** from $2,300 a month

Paying monthly costs more: Basic is $39 and Grow is $105. Online card rates start at 2.9% + 30¢.

**[Etsy](https://apis.io/providers/etsy/#pricing)**, with no subscription required:
- **Listing fee:** $0.20 per listing. A listing expires after four months, and renewing it costs another $0.20.
- **Transaction fee:** 6.5% of the total order amount.
- **Payment processing in the US:** 3% + $0.25 per order.
- **Etsy Plus:** an optional $10 a month for extra tools, listing credits and ads credit.
- **Offsite Ads:** Etsy may advertise your products elsewhere. When a sale comes from those ads, Etsy takes a further 15%, or 12% if you've sold $10,000 or more in the past year, capped at $100 per order.

To make the trade-off concrete, take a $40 order:
- **On Etsy:** a $0.20 listing, $2.60 in transaction fee and $1.45 in processing, about $4.25 in all, before any Offsite Ads fee.
- **On Shopify Basic:** a $1.46 card fee, plus your share of the $29 monthly subscription.

So:
- **At low volume,** Etsy is cheaper, because you pay nothing until you sell.
- **At steady volume,** Shopify's flat subscription wins, though the gap depends on what your marketing costs, since on Shopify you're paying to find customers that Etsy brings you.

## The APIs

This is where they differ most.

**Shopify** is a developer platform as much as a store. APIs.io indexes 102 API pages built from 86 OpenAPI files:
- The **[GraphQL Admin API](https://apis.io/apis/shopify/graphql-admin-api/)** runs the back office: products, orders, customers and inventory.
- The **[Storefront API](https://apis.io/apis/shopify/storefront-api/)** lets you build a custom, "headless" storefront on any front end.
- Webhooks cover order, customer, inventory and product events.
- Shopify Functions let you customize checkout and discount logic.
- Apps authenticate with OAuth 2.0, and a whole app ecosystem is built on these APIs.

**Etsy** has the Open API v3: a REST and OAuth 2.0 API for sellers and the tools they use. APIs.io indexes 28 API pages:
- The **[Shop Listing API](https://apis.io/apis/etsy/etsy-shoplisting-api/)**, plus inventory, images and variations, for managing your catalog.
- The **[Shop API](https://apis.io/apis/etsy/etsy-shop-api/)** for shop settings.
- The **[Shop Receipt API](https://apis.io/apis/etsy/etsy-shop-receipt-api/)** for orders.
- **[Webhooks](https://apis.io/apis/etsy/webhooks/)** for events.

Etsy doesn't publish a price for API access. Its limits are per API key, and you contact Etsy for more. It's an API for running an Etsy shop, not for building something new on Etsy.

## Where each one is stronger

On the Kin Score, Shopify is Exemplar at 84.6 and Etsy is Developing at 50.3. Shopify leads on every facet, and the biggest gaps are about the developer experience, not the products:

- **[Access Clarity](https://apis.io/rating/facets/access-clarity/):** Shopify 100, Etsy 39.5. Shopify makes plans, keys and onboarding easy to understand. Etsy's API access terms take more digging.
- **[Operational Transparency](https://apis.io/rating/facets/operational-transparency/):** Shopify 94.7, Etsy 36.8. Shopify publishes much more about status, changes and limits.
- **[Developer Ergonomics](https://apis.io/rating/facets/developer-ergonomics/):** Shopify 96.4, Etsy 44.0.

None of that says Etsy is the wrong place to sell. It says Shopify has invested far more in the people who build on it.

## Which one to pick

- **If you make or curate a small number of unique items** and don't want to build an audience from scratch, start on Etsy. You pay only when you sell, and its buyers are already searching for handmade and vintage goods.
- **If you're building a brand,** want your own customer list, or plan to sell through several channels, Shopify is the platform. Its APIs let you automate nearly everything.
- **If you're doing real volume,** do the math on Etsy's 6.5% plus processing against Shopify's subscription. At some point the subscription is cheaper.
- **Plenty of sellers run both:** Etsy for discovery and Shopify for repeat customers. Both APIs can keep listings and inventory in sync, and Shopify's ecosystem has apps that do exactly that.

Prices change. These were read on November 9, 2026, so check [Shopify's pricing](https://www.shopify.com/pricing) and [Etsy's fees](https://help.etsy.com/hc/en-us/articles/115014483627) before you commit.
