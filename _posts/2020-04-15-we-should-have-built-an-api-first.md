---
published: true
layout: post
title: We Should Have Built an API First
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-losangeles-from-observatory-blue-circuit.jpg
author:
  name: kinlane
tags:
  - API-First
---
### One Product Catalog With Multiple Destinations

Products are a ubiquitous resource in an online world. By 2000, if we were selling products in the real world, we also began needing to publish products to a website, which by 2005 would morph more into a mix of database-driven web applications. However by 2010, we also needed to have the same products available in our mobile applications., resulting in a handful of channels we need our products available on.

*   **Websites** - Public websites that a product catalog need to be published to for consumption.
*   **Web Applications** \- Specific web applications that need access to our product clog.
*   **Mobile Applications** \- Making sure the product catalog is available via iPhone and Android phones.

In 2020, these channels are morphing iton a suite of single page and static applications that work across web and mobile properties, but the need for a single set of content or data for making available across these channels hasn’t changed. By 2010, most companies were realizing that HTTP APIs were the most effective way to deliver content and data across applications, and by 2020 this has emerged as the reality for more mainstream business.

### Multiple Applications Using Multiple Connections

To satisfy the many different requests for access to the product catalog over the years, a handful of database connections have been given out to different teams to deliver a variety of web and mobile applications, with some teams creating additional data stores either replicating product data or augmenting it with additional details not available in the central database. Honestly, it is pretty difficult to know who has access to the database, and how data and content is used across applications because there has been no coherent approach to serving up product catalog content and data.

### Satisfying Product Catalog Integration Needs

In addition to developing a mix of web and mobile applications over the years, each utilizing their own approach to accessing product catalog content and data, we’ve had hundreds of partners who we’ve given access to our product catalog using a variety of approaches intent on solving a particular business problem within a specific time and context, employing, but not limited to the following approaches:

*   **FTP Data Dump -** Providing XML, JSON, or CSV files within a specific FTP location for internal and external users to securely access product catalog content and data.
*   **Spreadsheets -** Regularly exporting or publishing of a spreadsheet and emailing or otherwise sharing with a target audience, providing them with product catalog content and data.
*   **Database Access -** For some trusted stakeholders we provide direct database access to a specific subset of data in our database, providing access to the product catalog content and data.
*   **Custom API -** For other internal or external stakeholders we publish custom APIs providing access to only the product catalog content and data they need access from our systems.

There are many other ways in which we automatically and manually share product data, but these capture that primary ways the catalog is made available across stakeholders. Resulting in a maze of implementations over 20 years, which we have very limited visibility into and control over changing and evolving. Dramatically increasing the scope of our organizational technical debt, which isn’t limited to just our product catalog, and is a pain shared across every other digital resources we need to operate our business.

### Let’s Build An API To Solve All Of Our Problems

Now that we have identified the pain of making product catalog content and data available, and realizing that this isn’t just limited to products, and exists across orders, invoices, services, scheduling, and every other aspect of operating our business, we are getting to work on an API—leveraging an API-Last strategy. Our API effort is hoping to standardize how applications are delivered, only using APIs for accessing content and data in ANY application, investing in the following areas:

*   **Legacy Applications** - All legacy applications will be wrapped in a new API, allowing requiring all applications switch to use the new API for access to content and data.
*   **New Applications** - All new applications looking to access content and data will have to be done using an API that is developed as part of a common strategy.
*   **Developer Portal** \- All APIs will be published to a single developer portal, providing a single location where applications and integrations can find APIs.

Even as we embark on our comprehensive API development strategy to "solve all of our problems", new applications are being delivered using the old model, continuing to expand the surface area of our digital business, expanding the resources needed to conduct business each day. Teams aren’t aware of the new API practices and processes, or the business objectives of each of the individual applications is prioritized over the greater good of the organization and a centralized mandate for standardizing how content and at a is made available. Leaving us realizing thath this will be a lot more work than we anticipated, and will need more resources.

### Moving From API-Last to API-First

Moving from API-Last to API-First doesn’t happen with a flick of a switch. Most individuals will not grasp the API-First mandate until they actually experience the pain, and will continue to see API-First as yet another trend or marketing tactic. Until you have to consolidate many data connections across many different applications, and dealt with the pain of evolving the applications that depend on them, you just won’t see API-First as something that matters. Then, until you see how this echoes across all digital resources, experiencing challenges in different business domains, you won’t fully see the scope and critical nature of API-First, and how it can help tame the chaos.

Until you’ve felt the pain you won’t be motivated to think of API-First before you develop any application, or attempt any integration of migration. Until you’ve seen the cost savings of using a single API for web, mobile, device, and network applications, and any system to system integration, you won’t grasp the efficiency of being API-First. Until you’ve been stuck in a service agreement for 3-5 years and unable to move your data into or out of an application that doesn’t meet your needs, you won’t fully realize the importance of being API-First before you buy ANY software solutions. Until you’ve felt the API-Last pain, you will just see API-First as marketing fluff, but once you gone to hell and back in these ways, and were able to find sanity and balance being API-First, you will begin to see things quite differently.