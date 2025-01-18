---
layout: post
title: >-
  Automating API Key Management Using API Service Provider APIs, And Other Open
  Source Solutions
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key-management-api.png
author:
  name: kinlane
tags:
  - Management
  - Open Source
  - APIs
  - Open
  - Solutions
---
I'm working my way through some of the low hanging fruit in my API notebook, when it comes to stories, and found a story thread I was working on regarding automating API key management. [I'm personally storing my keys, across the private master branch for my API reps, because I don't have any super-sensitive data, and it helps me manage across hundreds of APIs, in a central way](http://apievangelist.com/2015/01/14/storing-api-keys-in-the-private-master-github-repository-for-use-in-github-pages/). 

[I've talked about the need to automate API key management in the past](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/)\--with the number of APIs we are using, to reach the level of security we will need, the lower level of keys will need a global refresh and management process. This level of keys most likely won't ever result in large scale security breaches, but will cause plenty headaches for both API providers and consumers.

If you use one of the following API management solutions, they provide you with an API for managing your API keys:

*   [**3Scale**](https://support.3scale.net/reference/active-docs)
*   [**Apigee**](http://apigee.com/docs/management/apis)
*   [**Tyk**](https://tyk.io/v1.8/rest-api/api-key-management/)

This will help you manage your keys, if you are an API provider, but doesn't do a lot for you to manage your API keys across providers, as an API consumer. [Amazon provides a key management solution](https://aws.amazon.com/kms/), but at first glance it appears to be something you can use to manage keys across your AWS infrastructure (am I wrong?)--which makes sense for supporting AWS objectives. ;-)

When I wrote my last post on the growing need for API key management solutions, I received a number of email and DMs, which yielded two pretty interesting open source key management solutions, [Vault](https://github.com/hashicorp/vault) and [Keywhiz](https://github.com/square/keywhiz). I'm going to evaluate these solutions for their viability as a back-end for an API driven, API key management solution, but I have a lot more work to do. 

I'm also working with a partner of mine, [SecureDB, and consider the possibility fo developing an encrypted API key management solution](https://securedb.co/), which then would be accessible via their secure API. They are looking for some interesting solutions like this to be developed on their platform, so if you are a developer, and looking for a viable micro startup idea--let me know.

As with everything in my world, the concept of automating API keys using APIs, and managing of keys across API platforms, is a work in progress--stay tuned!