---
published: true
layout: post
title: 'Turn Addresses Into Coordinates And Pull Map Data With OpenStreetMap'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/turn-addresses-into-coordinates-and-pull-map-data-with-openstreetmap.png
date: 2026-11-11 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - OpenStreetMap
  - Geocoding
  - Location & Mapping
  - Map Data Contribution & Editing
  - Geospatial
  - Mapping
---

If you run a business that has to know where things are, you have probably wrestled with this. You have a spreadsheet of customer addresses and you need them on a map. You have a delivery driver's GPS coordinates and you need the street address. You want a list of every road, building and point of interest inside a neighborhood you serve. You do not need to buy a mapping product to do any of this. [OpenStreetMap](https://apis.io/providers/openstreetmap/) offers it through an API, which is simply a way for software, or an AI assistant working on your behalf, to ask for the data and get it back in a form a computer can use.

## What OpenStreetMap does

OpenStreetMap, often shortened to OSM, is a collaborative project to create a free, editable map of the world. Think of it as the Wikipedia of maps: people everywhere add and correct roads, buildings, shops and paths, and the result is open for anyone to use. Around that map sits a family of public APIs. There is a main editing API for reading and changing map data, the Overpass API for complex read-only questions about the map, and the Nominatim API for geocoding, which is the jargon for turning an address into a latitude and longitude, and back again. The map data is licensed under the Open Database License (ODbL) 1.0 and the map imagery under CC BY-SA 2.0, which matters if you plan to show it to customers, so read those terms. You can find the project itself at [openstreetmap.org](https://www.openstreetmap.org/).

## What you can get done

### [Geocoding](https://apis.io/capabilities/geocoding/)

This is the one most businesses come for. Paste in an address or a place name and get coordinates you can plot, measure distances from, or group by area. Hand it coordinates from a phone or a vehicle and get back a readable address. It is the quiet engine behind store locators, delivery zones and cleaning up messy address lists.

- `GET /search` takes an address or place name and returns where it is.
- `GET /reverse` takes coordinates and returns the address at that spot.
- `GET /lookup` fetches specific OpenStreetMap places when you already know their IDs.

### [Location & Mapping](https://apis.io/capabilities/location-mapping/)

Sometimes you want the raw map itself: every feature inside a box drawn around your service area, so you can analyze it in your own tools. That is what this capability gives you.

- `GET /map` returns the map data for a bounding box, meaning a rectangle defined by its corner coordinates.

### [Map Data Contribution & Editing](https://apis.io/capabilities/map-data-contribution-editing/)

Because the map is open, you can also improve it. If your business knows the map is wrong about your own location, a new building or an access road, you can fix it, and everyone who uses OpenStreetMap benefits. Edits are grouped into a changeset, which is a bundle of related changes with a note on what you did and why.

- `PUT /changeset/create` opens a new bundle of edits.
- `POST /changeset/{id}/upload` sends your changes in one batch.
- `PUT /changeset/{id}/close` finishes the bundle once you are done.
- `GET /node/{id}` reads a single point on the map, such as a shop or a bus stop.
- `PUT /node/{id}` updates that point with corrected details.

## Getting started

OpenStreetMap is listed as freemium with self-serve signup, and it is a hosted service, so you call their endpoints rather than running anything yourself. There is a free tier, and the [pricing section on APIs.io](https://apis.io/providers/openstreetmap/#pricing) collects what is known about cost.

The documentation lives in three places: the [Nominatim geocoding docs](https://nominatim.org/release-docs/latest/api/Overview/), the [editing API v0.6 reference](https://wiki.openstreetmap.org/wiki/API_v0.6), and the [Overpass API guide](https://wiki.openstreetmap.org/wiki/Overpass_API). On APIs.io you can browse the [OpenStreetMap profile](https://apis.io/providers/openstreetmap/), along with the [Geocoding API](https://apis.io/apis/openstreetmap/openstreetmap-geocoding-api/), the [Overpass API](https://apis.io/apis/openstreetmap/overpass-api/) and the [Map Data API](https://apis.io/apis/openstreetmap/openstreetmap-map-data-api/).

If you have an address list sitting in a spreadsheet today, start with a single `GET /search` call against one row and see how much of your mapping problem goes away.
