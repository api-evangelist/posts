---
published: true
layout: post
title: 'Turn Addresses Into Map Points And Plan Delivery Routes With Geoapify'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/turn-addresses-into-map-points-and-plan-delivery-routes-with-geoapify.png
date: 2026-11-09 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Geoapify
  - Geocoding
  - Routing & Navigation
  - Places & Points of Interest
  - Maps
  - Location
---

You have a spreadsheet of customer addresses and a van, or a checkout form where people keep mistyping their street, or a store locator that needs to show what is nearby. Each of those jobs starts the same way: turning an address into a point on a map, and then doing something useful with that point, like drawing a map, finding the shortest route or seeing who lives within a twenty minute drive. [Geoapify](https://apis.io/providers/geoapify/) does all of it through an API, which is a way for one piece of software to ask another to do work, so your website, your dispatch spreadsheet or an AI assistant can make the calls for you.

## What Geoapify does

[Geoapify](https://www.geoapify.com/) is a location platform operated by KEPTAGO LTD in Paphos, Cyprus. Its APIs are built on OpenStreetMap and other open data and are hosted in the EU, with an EU-only processing endpoint for teams that need their data to stay there. The list is long: forward, reverse and batch geocoding, address autocomplete, places and place details, boundaries, postcode and IP geolocation, timezone, routing, route matrix, route planner, map matching, isolines, elevation, GeoJSON geometry operations, map tiles, static maps and marker icons.

Geoapify publishes OpenAPI 3.1 documents for all 23 of its APIs in a machine-readable catalog, and it runs a remote MCP server, a connector that AI assistants can plug into, exposing 12 tools. On APIs.io we list 39 APIs for Geoapify, including the [Geocode API](https://apis.io/apis/geoapify/geoapify-geocode-api/), the [Address Autocomplete API](https://apis.io/apis/geoapify/geoapify-address-autocomplete-api/), the [Batch Geocoding API](https://apis.io/apis/geoapify/geoapify-batch-geocoding-api/), the [Isoline API](https://apis.io/apis/geoapify/geoapify-isoline-api/) and the [Map Tiles API](https://apis.io/apis/geoapify/geoapify-map-tiles-api/).

## What you can get done

We map Geoapify's operations to 7 business capabilities. These are the ones most businesses will reach for first.

### [Geocoding](https://apis.io/capabilities/geocoding/)

Geocoding means converting an address into latitude and longitude, and reverse geocoding goes the other way. It is the step that makes a list of addresses usable on a map, and the autocomplete side of it cleans up addresses as people type them, which means fewer failed deliveries.

- `GET /geocode/autocomplete` suggests complete addresses from what someone has typed so far.
- `GET /geocode/reverse` turns a pair of coordinates back into a readable address.
- `POST /batch/geocode/search` submits a whole list of addresses as one job, so you can geocode a spreadsheet at once.
- `GET /batch/geocode/search` collects the results of that job when it is done.
- `GET /postcode/search` looks up postcodes.

### [Routing & Navigation](https://apis.io/capabilities/routing-navigation/)

Once you have points, you want to move between them. This is where a delivery business, a field service team or anyone running visits saves real time and fuel.

- `GET /routing` calculates a route between two or more stops.
- `POST /routematrix` works out travel times and distances between many starting points and many destinations at once.
- `POST /routeplanner` assigns jobs and shipments across your drivers and plans each route.
- `GET /isoline` draws the area you can reach from a place within a given time or distance, handy for delivery zones.
- `POST /mapmatching` snaps a recorded GPS trace onto the actual roads.

### [Places & Points of Interest](https://apis.io/capabilities/places-points-of-interest/)

Points of interest are the shops, cafes, pharmacies and other places on a map. This is how you build a "what is near me" feature or research what businesses surround a location.

- `GET /places` searches for places by category around a location.
- `POST /places` runs the same search with more precise area controls.
- `GET /place-details` returns details and related features for one place.

### [Maps & Tiles](https://apis.io/capabilities/maps-tiles/)

Tiles are the small square images a web map is stitched together from. A static map is a single finished picture, good for an email or an order confirmation.

- `GET /tile/{style}/{z}/{x}/{y}.{type}` serves a map tile for an interactive map.
- `GET /staticmap` renders a ready-made map image from a few parameters.
- `GET /icon` generates a custom map marker image.

Geoapify also covers [Location & Mapping](https://apis.io/capabilities/location-mapping/) work such as boundaries (`GET /boundaries/part-of` finds the districts and regions a place sits inside), [Elevation & Terrain Data](https://apis.io/capabilities/elevation-terrain-data/) through `POST /geodata/elevation`, and [Device & IP Location](https://apis.io/capabilities/device-ip-location/) through `GET /ipinfo`, which estimates where a website visitor is from their IP address.

## Getting started

Geoapify is a freemium, hosted service: you call their endpoint with an API key. Geoapify says its free tier gives you 3,000 credits per day, and paid plans start from options like API 10 at $59 billed monthly; see the [pricing section on APIs.io](https://apis.io/providers/geoapify/#pricing) for the full picture. The documentation for [forward geocoding](https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/), [address autocomplete](https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/) and [batch geocoding](https://apidocs.geoapify.com/docs/geocoding/batch/) is the place to begin. On APIs.io you can browse the [Geoapify profile](https://apis.io/providers/geoapify/) along with the [Geocode API](https://apis.io/apis/geoapify/geoapify-geocode-api/), the [Batch Geocoding API](https://apis.io/apis/geoapify/geoapify-batch-geocoding-api/) and the [Isoline API](https://apis.io/apis/geoapify/geoapify-isoline-api/). Take the address list you already have, run it through batch geocoding, and you will have every customer on a map before lunch.
