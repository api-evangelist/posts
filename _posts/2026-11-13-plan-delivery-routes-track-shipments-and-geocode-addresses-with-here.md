---
published: true
layout: post
title: 'Plan Delivery Routes, Track Shipments And Geocode Addresses With HERE'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/plan-delivery-routes-track-shipments-and-geocode-addresses-with-here.png
date: 2026-11-13 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - HERE
  - Routing & Navigation
  - Logistics Operations Management
  - Developer Identity & Credential Management
  - Fleet Management
  - Location
---

If you run deliveries, service calls or a fleet of any size, you know the daily puzzle: a list of stops, a few vehicles, and the question of who goes where in what order. Then the customer calls to ask where their package is. [HERE](https://apis.io/providers/here/) answers those questions through APIs, which means your dispatch software, a spreadsheet script or an AI assistant can ask HERE for the best route or a shipment's status, and get an answer back in seconds.

## What HERE does

[HERE Technologies](https://www.here.com/) is a mapping and location technology company. HERE says its location platform is in more than 160 million vehicles, built on map data it has been making for over 35 years. On APIs.io I have HERE catalogued as 48 APIs, covering geocoding and search (turning an address into a point on the map and back), autosuggest, tour planning, public transit, destination weather, map tiles, tracking, positioning and parking.

## What you can get done

### [Routing & Navigation](https://apis.io/capabilities/routing-navigation/)

The classic delivery question is the order of stops. Waypoint sequencing finds the fastest order to visit them.

- `GET /v8/findsequence2` finds the best order to visit a list of waypoints.
- `POST /v8/findsequence2` does the same for long lists that won't fit in a URL.

### [Logistics Operations Management](https://apis.io/capabilities/logistics-operations-management/)

This is for planning whole delivery days and following shipments. A vehicle routing problem is the full puzzle: many stops, many vehicles, time windows and capacities. HERE solves it and hands back tours.

- `POST /problems` solves a vehicle routing problem and returns optimized tours in the same request.
- `POST /shipments/v4` creates a multi-leg shipment with a tracker on each leg.
- `GET /shipments/v4/health` checks whether the shipments service is up.

### [Developer Identity & Credential Management](https://apis.io/capabilities/developer-identity-credential-management/)

An API key is the password your software uses to call HERE. Keeping keys under control, and killing one fast when it leaks, is basic hygiene.

- `POST /apps/{app}/apiKeys` creates a new API key for an app.
- `GET /apps/{app}/apiKeys` lists the keys on an app.
- `GET /apps/{app}/apiKeys/{apiKey}` shows the details of one key.
- `DELETE /apps/{app}/apiKeys/{apiKey}` permanently deletes a key.

### [API Consumption Governance](https://apis.io/capabilities/api-consumption-governance/)

Rate limits cap how many calls you can make. Knowing yours before a busy day saves surprises.

- `GET /identities/me/rules` lists the rate limits enforced on you.
- `GET /identities/default/rules` lists your realm's default limits.
- `GET /identities/{identityHrn}/rules` lists the limits on a specific app or user.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

For larger teams, HERE lets you control who can use which data and services.

- `GET /grants/resources/{resourceHrn}/entities` lists who has access to a resource.
- `POST /grants/resources/{resourceHrn}/entities/{entityId}/actions/{actionId}` grants a permission on a resource.
- `GET /grants/resources/{resourceHrn}/entities/{entityId}/actions/{actionId}` checks whether someone is allowed a particular action.

## Ask for it in plain language

HERE has 121 phrasing overlays on APIs.io. They map plain questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they cover:

- What is the fastest order to visit a list of delivery stops?
- Can I get optimized delivery tours back in the same request?
- How do I set up a multi-leg shipment with a tracker on each leg?
- How do I permanently delete a leaked API key?
- What rate limits currently apply to my own identity?

The [HERE Access Filters API phrasing overlay](https://apis.io/overlays/here/here-access-filters-api-phrasing-overlay/) is one example.

## Getting started

HERE is a hosted service you call over the web. Plans are in the [pricing section of its APIs.io profile](https://apis.io/providers/here/#pricing). The docs for [Geocoding and Search](https://www.here.com/docs/bundle/geocoding-and-search-api-developer-guide/page/README.html), [Tour Planning](https://www.here.com/docs/category/tour-planning) and [Public Transit](https://www.here.com/docs/category/public-transit) are good places to start.

The [HERE profile on APIs.io](https://apis.io/providers/here/) lists every API, including the [Geocoding and Search API](https://apis.io/apis/here/geocoding-search/), the [Tour Planning API](https://apis.io/apis/here/tour-planning/) and the [Tracking API](https://apis.io/apis/here/tracking/). Take tomorrow's list of stops and run it through waypoint sequencing; it is the quickest way to see what HERE can save you.
