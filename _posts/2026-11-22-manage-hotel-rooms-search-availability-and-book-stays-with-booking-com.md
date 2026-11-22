---
published: true
layout: post
title: 'Manage Hotel Rooms, Search Availability And Book Stays With Booking.com'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-hotel-rooms-search-availability-and-book-stays-with-booking-com.png
date: 2026-11-22 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Booking.com
  - Lodging & Stays
  - Reservation & Booking Management
  - Travel Distribution & Channel Management
  - Travel
  - Hospitality
---

There are two kinds of people who end up needing Booking.com's APIs. One runs a property, or software for properties, and is tired of updating rooms, rates and reservations by hand in the Booking.com extranet. The other runs a travel site, an app or a corporate travel tool and wants to let their own customers search and book stays without sending them somewhere else. Both jobs can be done by software through an API, which is a way for one system, or an AI assistant, to ask another for data or to take an action. I keep what I know about Booking.com on its [APIs.io profile](https://apis.io/providers/booking-com/).

## What Booking.com does

Booking.com, part of Booking Holdings, is an online travel agency listing accommodation along with car rentals, flights, attractions and airport transfers. It runs two separate API programmes. The Demand API is for affiliate partners who want to search, price and book Booking.com inventory inside their own product. The Connectivity platform is for the supply side: channel managers, property management systems and hotel groups keeping rooms, rates, availability, content, reservations and payouts in sync. Both need credentials, from the Affiliate Partner Centre or from a machine account in the Connectivity Portal. The company is at booking.com.

## What you can get done

### [Lodging & Stays](https://apis.io/capabilities/lodging-stays/)

For a property, the rooms are the product. These operations let your property management system define each bookable unit, its beds, occupancy and size, and keep it accurate on Booking.com without anyone logging in.

- `GET /rooms-api/properties/{property-id}/units` lists a property's units.
- `POST /rooms-api/properties/{property-id}/units` creates a new unit.
- `PATCH /rooms-api/properties/{property-id}/units/{unit-id}` updates a unit.
- `DELETE /rooms-api/properties/{property-id}/units/{unit-id}` removes a unit.
- `GET /rooms-api/properties/{property-id}/deleted-units` shows units that have been deleted, useful when reconciling records.

The same room operations also sit under [Lodging Product Management](https://apis.io/capabilities/lodging-product-management/), along with facilities and bathrooms.

### [Travel Distribution & Channel Management](https://apis.io/capabilities/travel-distribution-channel-management/)

This is the affiliate side: putting Booking.com's inventory in front of your own customers. Your site searches, checks what is free for the dates, and shows it under your brand.

- `POST /accommodations/search` searches for accommodation.
- `POST /accommodations/availability` checks availability for a property.
- `POST /accommodations/bulk-availability` checks availability for several properties at once.
- `POST /accommodations/chains` lists hotel chains.
- `POST /accommodations/constants` returns the reference values, such as facility types, used across the other calls.

### [Reservation & Booking Management](https://apis.io/capabilities/reservation-booking-management/)

Once a customer picks a stay, the order calls turn the choice into a confirmed booking and let you look it up later for customer service.

- `POST /orders/preview` previews an order, including the price, before committing.
- `POST /orders/create` creates the order.
- `POST /orders/details` retrieves order details.
- `POST /orders/details/accommodations` retrieves orders with their accommodation details.
- `POST /orders/details/cars` retrieves orders with their car rental details.

## Getting started

Both programmes are credentialed, so the first step is the partner relationship, not code. What I have recorded about cost is in the [Pricing section of the profile](https://apis.io/providers/booking-com/#pricing). Booking.com's developer documentation covers the [Status API](https://developers.booking.com/demand/docs/additional-services/status-api/about) on the Demand side, and the [Contacts API](https://developers.booking.com/connectivity/docs/openapispecs/contacts-api/contacts-api-specification) and [Historical Reservations API](https://developers.booking.com/connectivity/docs/openapispecs/historical-reservations-api/historical-reservations-api-specification) on the Connectivity side.

On APIs.io, affiliates should start with the [Booking.com Accommodations API](https://apis.io/apis/booking-com/booking-com-accommodations-api/). Properties and channel managers should read the [Booking.com Property Health API](https://apis.io/apis/booking-com/booking-com-property-health-api/), which explains why a property is unbookable or at risk, and the [Booking.com Historical Reservations API](https://apis.io/apis/booking-com/booking-com-historical-reservations-api/). Everything else is on the [Booking.com profile](https://apis.io/providers/booking-com/). Decide which side of the marketplace you are on, and apply to that programme.
