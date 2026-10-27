---
published: true
layout: post
title: 'Run Your Catalog, Pricing, And Customers In Software With BigCommerce'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/run-your-catalog-pricing-and-customers-in-software-with-bigcommerce.png
date: 2026-10-27 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - BigCommerce
  - Price List Management
  - Indirect Tax Management
  - Digital Marketing Management
  - E-Commerce
  - Retail
---

If you sell online and your store keeps growing, the questions change. How do I give wholesale customers different prices? How do I make sure tax is calculated right on every order? How do I bring back shoppers who left items in their cart? BigCommerce answers those through APIs, which let other software, or an AI assistant, manage your store for you rather than someone working through the admin screens one page at a time. Here is their [APIs.io profile](https://apis.io/providers/bigcommerce/).

## What BigCommerce does

BigCommerce is an e-commerce platform with APIs for building and managing online stores, products, catalogs, orders, customers, checkouts, payments, and shipping. BigCommerce says it powers tens of thousands of online stores and calls its approach open SaaS: a hosted store you do not have to run yourself, but one you can reach into with code. More at [bigcommerce.com](https://www.bigcommerce.com/).

## What you can get done

### [Item Master Data Management](https://apis.io/capabilities/item-master-data-management/)

Keeping your catalog organized, starting with the categories shoppers browse.

- `GET /catalog/categories` lists your categories.
- `POST /catalog/categories` creates a category.
- `PUT /catalog/categories/{category_id}` updates one.
- `DELETE /catalog/categories` removes categories.

### [Price List Management](https://apis.io/capabilities/price-list-management/)

A price list is a set of prices for a particular group, such as wholesale buyers or a regional market. This is how one store serves different customers at different prices.

- `GET /pricelists` lists your price lists.
- `POST /pricelists` creates one.
- `PUT /pricelists/{price_list_id}` updates one.
- `GET /pricelists/{price_list_id}` gets the details of one.

### [Indirect Tax Management](https://apis.io/capabilities/indirect-tax-management/)

Sales tax and similar taxes collected at checkout. A tax quote is the calculated tax for an order before it is final.

- `POST /estimate` estimates the tax on an order.
- `POST /commit` makes a tax quote final once the order goes through.
- `POST /adjust` changes a tax quote, for example after a partial return.
- `POST /void` cancels a tax quote.
- `GET /tax/rates` gets your tax rates.

### [Customer Data Management](https://apis.io/capabilities/customer-data-management/)

Keeping customer records in step with your CRM, loyalty program, or support desk.

- `GET /customers` lists customers.
- `POST /customers` creates customers.
- `PUT /customers` updates customers.
- `GET /customers/addresses` lists customer addresses.

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

Abandoned cart emails remind shoppers about what they left behind, one of the more reliable ways to recover sales. BigCommerce also lets you manage your store blog through the API, under [Content Marketing Management](https://apis.io/capabilities/content-marketing-management/).

- `GET /marketing/abandoned-cart-emails` lists your abandoned cart email templates.
- `POST /marketing/abandoned-cart-emails` creates one.
- `PUT /marketing/abandoned-cart-emails/{id}` updates one.
- `POST /blog/posts` publishes a blog post.

## Getting started

BigCommerce is listed as paid. The developer documentation covers [inventory](https://developer.bigcommerce.com/docs/rest-management/inventory), [locations](https://developer.bigcommerce.com/docs/rest-management/locations), and [customer segmentation](https://developer.bigcommerce.com/docs/rest-management/customer-segmentation). On APIs.io you can browse the [Inventory API](https://apis.io/apis/bigcommerce/bigcommerce-inventory/), the [Promotions API](https://apis.io/apis/bigcommerce/bigcommerce-promotions/), the [Customer Segmentation API](https://apis.io/apis/bigcommerce/bigcommerce-customer-segmentation/), and the [Pickup Methods API](https://apis.io/apis/bigcommerce/bigcommerce-pickup-methods/), all from the [BigCommerce profile](https://apis.io/providers/bigcommerce/).

If you only automate one thing first, make it the abandoned cart emails, since that is money already sitting in your store.
