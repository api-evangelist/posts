---
layout: post
title: My API Service Composition Tiers
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-composer.png
author:
  name: kinlane
tags:
  - My
---
I am slowly getting my [new API stack](https://kin-lane.github.io/master/index.html) in order, where I am close to opening it up for access to a wider audience. As part of this last round of work, I'm fine tuning my service composition strategy a little more. If you aren't familiar with API service composition, it is just about creating different levels of access to your APIs, and using my [3Scale API infrastructure](http://3scale.net) I can easily break this down.

The most common approach to API service composition you see out there is public and private, with maybe an additional partner tier. I'm taking a slightly different approach to defining my layers, and so far, her is what I have:

*   **Open** - The completely open layer to my APIs that doesn't require any keys at all, like my website, but JSON.
*   **Retail** - The retail storefront to my API operations that anyone can sign up for, and begin consuming my resources.
*   **Trusted** - Same access to resources as my retail layer, but given higher rates of access to be able to make more calls.
*   **Wholesale** - APIs from my stack, but running in someone elses infrastructure, alongside their own APIs.
*   **Partner** - Access to almost all of my APIs, giving higher levels of responsibility for my partners in crime.
*   **Platform** - The highest level access, giving my systems and applications the ability to get the resources they need.
*   **Personal** - A private access level, giving me a layer across all my systems that is only for me to access.

Almost all of my API consumers will begin as a retail user, and either stay there, or evolve into one of the other tiers. In the end I can custom tailor access to any of my users, and their applications, but I prefer establish specific layers for users to exist in--giving me clear security groups, that are also in alignment with my business goals.

My service composition approach will most likely stay staty static for a while now, as I play with a credit system that I can use for accessing different resourcs. Right now all APIs use the same unit of value for each API call, something I want to change. I am looking to develop a metering system that puts my 3Scale infrastructure to use, allowing me to maximize the value of each individual APIs.