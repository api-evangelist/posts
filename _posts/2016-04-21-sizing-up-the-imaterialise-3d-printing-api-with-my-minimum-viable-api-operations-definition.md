---
layout: post
title: >-
  Sizing Up The i.Materialise 3D Printing API With My Minimum Viable API
  Operations Definition
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/i-materialise-logo.png
tags:
  - 3D Printing
  - My
  - Definition
  - Operations
  - Print
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/i-materialise-logo.png)](https://i.materialise.com/api/)

I always have an inbox full of requests from companies asking me to take a look at their APIs, and provide any feedback that I can. I do conduct a more formal review for some companies, but I also enjoy looking through the API operations of any API, just as part of my regular monitoring (if I have time). When I do have time, the first part of any scope of review, is to see if it meets my definition of a minimum viable API operation.

This is a definition I've been refining for over five years now, looking through thousands of APIs. Even with all this refinement, I still need a single place I could go, and quickly apply to any of the APIs that are in my review queue. My objective in doing these reviews is partly to help me get to know what an API does, but also provide feedback to the API providers, as well as generate stories that I can share with my readers, helping them polish their own strategy along the way.

To help me streamline the reviews I do, and deliver feedback to API providers, I created a little micro tool for my self, that I can use as a checklist while I go through the operations of each API in my queue. To beta test my [minimum viable API operation definition tool](http://minimum.viable.api.operations.definition.apievangelist.com/), I profiled the [3D printing API i.Materialise](https://i.materialise.com/api/).

**API Overview**

**Name:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

i.materialise

**Description:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

i.materialise has developed several interfaces (APIs) that allows your business to connect with our systems. Integrating apps or websites with i.materialise has never been easier. Feed your data to us, receive all possible order information and let our +100 3D printers do the rest!

**Image:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/img/API/imat-logo-white.png

**API URL(s)**

**API Portal:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/api

**API Base URL:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/web-api/

**Onboarding**

**Getting Started:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/api/getting-started

**Registration:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://imatsandbox.materialise.net/Account/Login

**Documentation:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

http://i.materialise.com/api/docs

**Code:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

Code samples, libraries, and SDKs help reduce friction when on boarding for API consumers.

**Operations**

**Road Map:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-red-warning.png)

A road map shared with the community will keep consumers in sync with platform operations, giving them time to prepare, and possibly provide feedback that can be considered.  

**Change Log:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-red-warning.png)

A publicly available change log shared with the community will keep consumers aware of what has happened, and reduce the resources needed to support.

**Pricing:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/api/business-models

**Terms of Service:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/legal/terms

**Definitions**

**OpenAPI Spec:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

A machine readable OpenAPI Specification for an API is fast becoming an essential element of API operations.

**API Blueprint:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

A machine readable API Blueprint for an API is fast becoming an essential element of API operations.

**Postman Collection:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

A machine readable Postman Collection for an API is fast becoming an essential element of API operations.

**Communications**

**Github Org / User:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://github.com/imaterialise

**Twitter Account:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://twitter.com/imaterialise

**Blog:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://i.materialise.com/blog/

**Blog RSS:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

http://feeds.feedburner.com/imaterialise

**Support Page:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-red-warning.png)

Pulling together all your support items into a single, easy to find page can help reduce frustration within your API community. Nobody likes to have to hunt down ways to get support, put it in a single page.  

**Contact Info**

**Contact Name:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-red-warning.png)

A dedicated person, who can be responsible for an API is a pretty fundamental piece of API operations--don't hide.  

**Contact Email:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-red-warning.png)

A dedicated email address for an API is a pretty fundamental piece of API operations--don't hide.

The only areas the i.Materialise API stumbles for me is having a road map, change log, as well as a dedicated support page, with a contact person and email to reach out to. You can go to the public side of the i.Materialise site and use the contact page, which is linked in the footer of the developer portal, but I strongly recommend having a dedicated support page, and channels that are dedicated to the API community.

The blog, RSS, and Twitter feeds are not dedicated to the API, and are company-wide. This is fine, but at some point I recommend a dedicated blog, RSS, and Twitter accounts for the API. It can be easy to burn out API consumers with too much general information that doesn't apply to them, and there is little overhead involved with deploying a blog, RSS, and Twitter accounts dedicated to the community.

iMaterialise is closer to being a complete API definition, than most APIs that I look at--something that won't take much effort to bring up to speed. The area I do recommend they focus energy on is around the availability of an [OpenAPI Spec](http://apis.how/xmynjnqxwr), [API Blueprint](https://apiblueprint.org/), and [Postman Collections](http://apis.how/xakqrgkfkm) for the platform. These elements would significantly add to the available documentation for the platform, while also allowing them to [easily generate SDKs for the platform using APIMATIC](https://apimatic.io/), which is another deficient area for the API (no code page). In addition to better docs and SDKs, these API definitions would allow any developers to quick load up, and begin playing with the API in popular HTTP clients like [Postman](http://apis.how/gwbjyujag1), and [DHC](http://apis.how/ebsh6b2hrd). 

The lack of an OpenAPI Spec is the most deficient area in my opinion. The availability of a definition, would push the presence of the iMaterialise 3D Printing API beyond the minimum viable API operation definition for me, and into the zone of a robust platform. One that will go along way towards attracting new developers, on boarding them quicker, and helping them go from discovery to successful integration -- which is what this is all about.

Next, if I have the time, I will create an OpenAPI Spec for the platform which will give me more awareness around the actual API design.