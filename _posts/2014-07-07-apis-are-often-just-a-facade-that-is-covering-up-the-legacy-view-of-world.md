---
layout: post
title: APIs Are Often Just A Facade That Is Covering Up The Legacy View Of World
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-apartments.png
author:
  name: kinlane
tags:
  - Facade
  - Legacy
  - APIs
---
I was exchanging emails with someone regarding API design considerations at their large institutions today, and where they could find healthy patterns for API designs within their industry. As with any API provider, they were concerned with emulating the best API design patterns they could, and evolve the design of their own services. They put it like this:

> _..."our APIs largely expose our internal mess and legacy design rather than presenting a well thought out, consistent view of the important resources and operations"..._

We all want to deploy the best designed API that we possibly can, but with a lack of meaningful API definition formats (until recently), and nowhere to go and search or browse for common API design patterns (something 3Scale and API Evangelist want to fix with [API Commons](http://bit.ly/1e27KIc), [APIs.json](http://bit.ly/1ij6TTP), and [APIs.io](http://bit.ly/1mtaqmK)), it can be difficult to know exactly what is good API design for our respective industries.

It would be nice, if all of the APIs we designed were brand new, perfectly architected to follow best of breed REST patterns, and we had all the time in the world to research and design. In reality, many of the APIs we design will ony act as a facade for some legacy beast of a system, that won't go away anytime soon. We are working to get more places like API Commons and APIs.io available to find the best API design patterns, and you should always look at as many of the APIs in your industry as you can, when designing your APIs, but most importantly, don't be concerned with a perfect interface--right out of the gate.

In reality, we have to just walk a line between the perfect API design, and the ugly legacy IT worlds, we are building these API facades to hide. The sooner we get the first version of the facade up, we can then iterate, and turn our APIs into the mirror image of the designs we ultimately desire—until then it is just smoke and mirrors, smoke and mirrors.