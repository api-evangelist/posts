---
layout: post
title: 'API Management: Adding Reciprocity Building Blocks'
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/trends/reciprocity-trends.png
author:
  name: kinlane
tags:
  - Management
  - API Management
  - ddi
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/trends/reciprocity-trends.png)](http://apievangelist.com/trends/reciprocity.php)

I’m adding a new grouping to my list of [API management building blocks](http://management.apievangelist.com/building-blocks.html), called reciprocity. If you want to know what I mean by reciprocity check out my earlier post [From ETL to API Reciprocity, Looking at 20 Service Providers](http://apievangelist.com/2013/02/28/from-etl-to-api-reciprocity-looking-at-20-service-providers/).

As I was working with Nimble the CRM system last night, and I was planning out some workflows associated with keeping contact data up to date, and noticed that Nimble provides access to [Zapier automation tools](https://zapier.com) directly from their interface, using an iframe.

Providing access to API automation tools for your developers, and end-users, is an important piece of a larger reciprocity puzzle. As an API provider you should allow for developers and end-users to access, migrate, download, and orchestrate the flow of their own data.

With this in mind I’m adding four building blocks for reciprocity as part of my API management recommendations:

*   **Data Portability -** Providing users with the ability to get data out of a system through a bulk download and via an API is essential to reciprocity existing. Along with other basic web literacy skills that every user should possess, every person should demand that any services they sign up for, should allow for data portability of all their resources.
*   **Terms of Service -** The Terms of Service (TOS) is the central hub which makes the API economy work (or not work). TOS is where the protections for platform owners, developers and end-users exists. Restrictive TOS can suffocate the reciprocity of platform, while more sensible ones allow for the movement, and collaboration around resources that will make a platform thrive.
*   **oAuth -** While not a perfect standard, oAuth is the best we have when it comes to providing an identify and access layer for API driven resource, one that allows for reciprocity to occur within a single API ecosystem, and between multiple ecosystems. oAuth gives the platform, developer and end-users a (potentially) equal role in who has access to API driven resources, governing how reciprocity is realized.
*   **Automation -** Providers like Zapier and IFTT are delivering API automation services for hundreds of popular APIs, allowing developers and end-users to further automate their operations across multiple platforms, allowing anyone to better manage their resources using very simple API driven workflows.

Reciprocity is not just about users getting the ability to download their data, so they can leave a platform. Reciprocity is about using APIs to empower everyone to maximize the exchange of resources. If a users is given a chance to use their data in other applications, and back again, the more valuable a resource will become, and the more likely a user will continue using a service—it is just good business.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/nimble/nimble-zapier-integration.png)

I was able to use a service like Nimble to manage my contacts, which I first imported from Gmail, Facebook, LinkedIn, and Twitter, then using the Nimble API I was able to publish contact from a proprietary CRM system. Now using Zapier, I’m able to further automate workflow around my relationship management, adding to the features that are already available in Nimble.

None of this would be possible without reciprocity. Using Gmail, Facebook, Twitter, LinkedIn, Nimble and my own custom APIs, I am able to improve on how I manage my daily operations. This is why reciprocity is a pretty critical building block in how all of this is going to work. I put reciprocity in that space that is the overlap between the business and politics of APIs—that dark matter that helps make all of this API shit work.