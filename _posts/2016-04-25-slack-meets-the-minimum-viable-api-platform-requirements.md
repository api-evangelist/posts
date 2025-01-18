---
layout: post
title: Slack Meets The Minimum Viable API Platform Requirements
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/slack/slack_api_logo.png
tags:
  - Platform
  - Slack
  - Requirements
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/slack/slack_api_logo.png)](ps://api.slack.com)

I am using my [minimum viable API operations definition tool](http://minimum.viable.api.operations.definition.apievangelist.com/) to continue profiling the API sector, this time to size up the Slack API community. Slack is kind of a darling of the API space, so it kind of seem silly to profile them, but profiling those who are doing this API think right, is what API Evangelist all about--whether I follow the hype or not.

Using my minimum viable API definition, I went through the Slack API portal looking for what I'd consider to be the essential building blocks that any modern API platform should have.

**API Overview**

**Name:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

Slack API

**Description:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

All of our APIs can be used alone or in conjunction with each other to build many different kinds of Slack apps. Whether you're looking to build an official Slack app for your service, or you just want to build a custom integration for your team, we can help you get started!

**Image:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://a.slack-edge.com/ae57/img/slack\_api\_logo.png

**API URL(s)**

**API Portal:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/

**API Base URL:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://slack.com/api/

**Onboarding**

**Getting Started:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/slack-apps

**Registration:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://slackhq.typeform.com/to/kOHQvo

**Documentation:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/rtm

**Code:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/community

**Operations**

**Road Map:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/roadmap

**Change Log:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/changelog

**Pricing:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-red-warning.png)

You should be at least sharing some rate limits, acceptable uses, and other pricing and access related information.

**Terms of Service:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://slack.com/terms-of-service/api

**Definitions**

**OpenAPI Spec:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

A machine readable OpenAPI Specification for an API is fast becoming an essential element of API operations.

**API Blueprint:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

A machine readable API Blueprint for an API is fast becoming an essential element of API operations.

**Postman Collection:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-yellow-warning.png)

A machine readable Postman Colelction for an API is fast becoming an essential element of API operations.

**Communications**

**Github Org / User:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://github.com/slackhq

**Twitter Account:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://twitter.com/slackapi

**Blog:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://medium.com/slack-developer-blog

**Blog RSS:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://medium.com/feed/slack-developer-blog

**Support Page:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://api.slack.com/docs/support

**Contact Info**

**Contact Name:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

Slack

**Contact Email:**

![](https://s3.amazonaws.com/kinlane-productions2/icon-set/icon-green-check.png)

https://apievangelists.slack.com/help/requests/new

Performing better than [the review of the i.Materialise 3D printing API](http://apievangelist.com/2016/04/21/sizing-up-the-imaterialise-3d-printing-api-with-my-minimum-viable-api-operations-definition/) that I conducted the other day, Slack checks off all but one of the essential building blocks-everything except for pricing. The only other area(s) that I find deficient, is when it comes to machine readable API definitions like OpenAPI Spec and Postman Collections. These aren't required for success, but they can sure go a long ways in helping developers on-board from documentation, to generating code, and tooling that will be needed for integration. 

I'm assuming Slack hasn't generated OpenAPI Specs because they have a more XML-RPC design, which I think many folks assume can't be documented in this way. While it doesn't lend itself to more easily being documented with OpenAPI Spec, I found some simple little hacks that make it doable, allowing you to also document even XML-RPC designs. Having some OpenAPI Specs and Postman Collections would make the API more accessible for people looking to play with.

Anyways, I just wanted to test out the [minimum viable API operations tool](http://minimum.viable.api.operations.definition.apievangelist.com/) on another API. I am trying to profile several APIs in this way each week, helping the number of APIs I am monitoring grow, while also encouraging other API providers to follow Slack's lead.