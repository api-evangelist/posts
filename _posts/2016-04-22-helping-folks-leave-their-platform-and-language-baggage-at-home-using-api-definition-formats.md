---
layout: post
title: >-
  Helping Folks Leave Their Platform and Language Baggage At Home Using API
  Definition Formats
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-dogma.png
tags:
  - Platform
  - Definition
---
I was just participating in an interesting conference call about multiple API implementations, which are putting the [Human Services Definition Specification (HSDS)](https://github.com/codeforamerica/OpenReferral/blob/master/Human%20Services%20Data%20Specification%20%20v1.0.md) to use. The call was brought together discuss a shift in the current path one of the projects was taking, which involved using [Azure Search Service](https://azure.microsoft.com/en-us/services/search/), and whether or not the original vendor solution was still necessary, because the cloud solution appeared to meet all their needs.

I sat and listened to the pros and cons of each approach. Why Azure allowed them to quickly meet the project needs, and could scale. Why the other vendor solution had a more holistic view of the problem, and shared the investment from many implementations. I had nothing to offer. The only common ground I had was around the already established schema for delivering human services. I didn't have any awareness of each individual project, the resources and skills available each group possessed, or a belief in any particular cloud platform, database solution, or programming language.

While Azure, and the other vendor approach dominated the first part of the conversation, everyone one on the call was in agreement around HSDS driving everyone's schema, while also agreeing were missing a common approach to defining and delivering the API. The vendor on the call was working on the next version of their API which used the HSDS format, with the Azure driven solution spoke HSDS as well. To add to the mix, I am also working on two additional implementations that will also be speaking HSDS--we all just needed a common approach to defining the API.

As the next step, I suggested scheduling another call, where I walk through [the API definition I am applying to my projects](http://developer.open.referral.adopta.agency/), providing a YAML version of my OpenAPI Spec definition. I prefer using YAML, to help lower the cognitive barrier to entry for business users of the group, demonstrating how OpenAPI Spec can be used by everyone to quantify each individual API, but in a way that we can share, discuss, and reuse--helping establish a harmony in design across all of our implementations.

I always work hard to not set the bar to high when it comes to the magical powers of [API definitions](http://definitions.apievangelist.com/) have when it comes to facilitating API discussions between technical and business groups, but the benefits in situations like this are clear. I feel API definitions have the potential to help folks unpack the dogma (and insecurities) we all possess around the architectural decisions we have made, the programming languages we are using, and the cloud platforms that are increasingly depending on. Continuing to demonstrate for me the ways that APIs can help facilitate how we work together, with API definitions acting as a machine readable specification that can help us define what is needed by everyone at the table.