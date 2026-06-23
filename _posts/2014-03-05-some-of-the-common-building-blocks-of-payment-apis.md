---
layout: post
title: Some Of The Common Building Blocks of Payment APIs
image: https://kinlane-images.s3.amazonaws.com/shared/bw-icons/bw-dollar-sign.jpg
author:
  name: kinlane
tags:
  - APIs
---
I'm taking a look at the [world of payment APIs](http://apievangelist.com/2014/02/24/landscape-targeting-payment-apis/) right now. As with all my other monitoring of the API space, I am only looking for the best approaches, by the most interesting companies in the space--I don't have time to track on everything, 

I am looking to take a snapshot of the payment API space, understand who the key players are, and how they are delivering valuable payment API resources that developers are actually using. Last week I puled together [38 payment APIs that I'm watching](http://apievangelist.com/2014/02/26/payment-apis-that-i-am-watching/), and this week I am spending some time going through their sites, looking for what I'd consider to be some of the common building blocks of payment APIs. 

Currently I have 50 building blocks I found across these 38 payment providers:

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-store.png)

**Merchant Account** - Creation, management and integration with merchant accounts that are required to process credit cards.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-bank.png)

**Bank Account** - Integration with existing bank accounts, for inclusion in payment workflows.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-proxy-left.png)

**Processor / Gateways** - Access to multiple payment processors and gateways in multiple countries.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-currency.png)

**Currencies** - Ability to conduct transactions in multiple currencies.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-credit-card.png)

**Credit Card Transactions** - The option to process major credit cards.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-dollar-sign.png)

**ACH Transactions** - The option to process transactions over the ACH network.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-dollar-sign.png)

**Checks / Wire Transactions** - The option to do bank to bank, wire and check transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cash.png)

**Cash Transactions** - The option to process major credit cards.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-dollar-sign.png)

**Virtual Transactions** - The option to accept transactions for credits via virtual accounts.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-touch-points.jpg)

**Aggregate Transactions** - Tools for performing multiple transactions at once.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-credit-card.png)

**Credit Card Reader** - A physical credit card reading device.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-credit-card.png)

**Credit Card Scan / Picture** - A mobile phone scan or picture of a credit card.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-click.png)

**One Click / One Touch / Instant Buy** - The ability to enable single action transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-payment-scheduled.png)

**Recurring Payments** - The ability to perform recurring or subscription based transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-dollar-sign.png)

**Prepayments** - The ability to setup payment(s) prior to designated payment date.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-payment-scheduled.png)

**Metered Payments** - Payments based upon some metered usage of a resource.

![](https://kinlane-images.s3.amazonaws.com/shared/building-blocks/bw-question-mark.png)

**Estimates** - Estimations of payments, with payment handling at designated time.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-invoice.png)

**Invoices** - Physical or online invoicing of customers as request for payment.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-in-app-purchases.png)

**Mobile Billing** - The ability to perform transaction against mobile users monthly phone bill.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-facebook-credits.png)

**Social Payments** - An option for making and accepting payments via social platforms like Facebook and Twitter.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-email-money.png)

**Email Payments** - Tools for sending and receiving transactions via email.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-sms.jpg)

**SMS Payments** - Tools for sending and receiving transactions via SMS.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cart.png)

**Carts** - Ready to go online shopping cart solutions to support payment services.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cart-checkout.png)

**Checkout** - Ready to go checkout pages, to support payment services.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-page.jpg)

**Forms** - Embeddable HTML and JavaScript based forms to conduct transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-pay-now-button.png)

**Buttons** - Embeddable HTML and JavaScript buttons to initiate transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-marketplace.png)

**Marketplace** - The ability to facilitate marketplace style transactions between sellers and vendors.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-fraud.png)

**Fraud Protection** - Tools and services that assist developers in preventing payment fraud.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-pci-logo.png)

**PCI Compliance** - Tools and services that help developers achieve PCI compliance.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-padlock.png)

**Encryption** - Providing necessary encryption tools and services to protect communications.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-sandbox.jpeg)

**Sandbox** - A safe environment for developers to develop applications against, ensuring quality of service in production environments.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/webhooks.png)

**Webhooks** - Registering of developer provider URLs for making HTTP calls when specific events occur.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-notification.jpg)

**Push Notifications** - A push notification framework for developers to use when delivering push features in their applications.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-barcode.jpg)

**Bar-codes** - The ability to generate bar-codes that represent potential physical or virtual transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-product.png)

**Products** - Separate systems for managing products that transactions will be part of.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-orders.png)

**Orders** - Separate systems for managing orders in which transactions will be part of.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-customers.png)

**Customers** - Separate systems for managing customers who perform transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-deals.png)

**Coupons** - Separate systems for coupons which can be applied against transactions

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-handshake.jpg)

**Loyalty** - Separate systems for managing customer loyalty programs.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-expenses.png)

**Expenses** - Separate systems or managing expenses that involve transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-clock.jpeg)

**Time Tracking** - Separate systems for tracking time associated with transactions.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cards.png)

**Cards** - The ability to issue physical or virtual gift, membership and other types of cards.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-javascript.png)

**JS Libraries** - Supporting JavaScript libraries that provide embeddable integration with payment services.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-iphone.png)

**Mobile SDKs** - Supporting mobile SDKs for iOS, Android, Windows and others, to facilitate mobile payments.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-home-icon.jpeg)

**On-Premise** - The ability to deploy payment services on-premise, keeping transactions secured locally.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cloud.png)

**Cloud** - The ability to deploy payment services in the clouds, with centralized security.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cart.png)

**3rd Party Shopping Carts** - Integration options for popular 3rd party shopping carts.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-cloud.png)

**Platform as a Service (PaaS) Integration** - Integration with popular PaaS platforms like SalesForce and Google Apps.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-code.png)

**Frameworks** - Integration with popular programming frameworks like Backbone and Angular.

![](https://kinlane-images.s3.amazonaws.com/apievangelist/building-blocks/bw-clock-gear.png)

**Automation** - Integration with leading API automation platforms like Zapier and IFTTT.

As with all of my research, this is ongoing. My hopes is to better educate myself (and you too), about the payment API sector, which I consider a pretty critical aspect of the overall API economy.

If there are any building blocks that you think should be included in my research, let me know at [@kinlane](https://twitter.com/kinlane), and I'll see about including.