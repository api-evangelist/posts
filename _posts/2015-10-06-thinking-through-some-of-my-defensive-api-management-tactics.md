---
layout: post
title: Thinking Through Some Of My Defensive API Management Tactics
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-defensive-tactics.png
author:
  name: kinlane
tags:
  - My
  - Management
  - API Management
---
As I add each [API to my stack](https://kin-lane.github.io/master/), I consider security along the way. I require an API key to access all of my APIs using my [3Scale API management infrastructure](http://3scale.net), and I also have different tiers of access, and while defining this management layer my first impulse is always put POST, PUT, and DELETE methods into the most trusted tiers.

The service composition layer in API management is where I feel the heart of API is--the thing that makes it different than SOA, and other approaches. This is where you can loosen things up, trust your 3rd party developers, and allow serendipity to occur. If you always default to locking things down, and only allowing the updating of resources by internal, or just trusted external sources, you are limiting the possibilities.

With this in mind I'm carefully evaluating a couple of defensive API management tactics I can employ:

*   **Notifications -** Make sure and send out an email or push notification to myself when POST, PUT, and DELETE are executed on certain APIs.
*   **Key Locking -** Allow for a certain amount of POST, PUT, and DELETE, but when you go over a certain volume, it locks your API key.

While these tactics won't prevent all bad situations, it can help me quickly identify them, and take action. My goal is to encourage people to develop on top of my APIs, and I'd rather focus on letting things flow, over locking everything down. There are certain security realities surrounding publicly available APIs, but honestly most people will never take the time to register for key, and learn a system just so they can do malicious things, and for the ones that will, I have some defensive things in place to trip them up.

There are plenty of tools built into my 3Scale API infrastructure that do this for me, what I am considering are some additional measures I can build into my own API, that employ [the 3Scale API](https://support.3scale.net/reference/active-docs) to better automate some of these defensive tactics. What are you doing to keep things safe, but also open? I'd love to hear other ideas for operating an API on the open Internet, in the safest, most sensible way.

_**Disclosure:** 3Scale is an API Evangelist partner._