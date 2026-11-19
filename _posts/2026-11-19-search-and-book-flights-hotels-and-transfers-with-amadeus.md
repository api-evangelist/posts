---
published: true
layout: post
title: 'Search And Book Flights, Hotels And Transfers With Amadeus'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/search-and-book-flights-hotels-and-transfers-with-amadeus.png
date: 2026-11-19 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Amadeus
  - Reservation Capture
  - Travel
  - Travel Technology
---

If you run a travel agency, a corporate travel desk, or an app that helps people plan trips, the hard part is not the website. It is reaching the flights, the hotel rooms and the airport transfers, and booking them for real. [Amadeus](https://apis.io/providers/amadeus/) is one of the companies that sits behind a lot of that booking, and it offers it through APIs, which are ways for your software, or an AI assistant, to search inventory and place reservations without a person typing into a booking screen.

An API is a set of doors into a service that other software can knock on. Your system sends a request, like "book this flight for this traveler," and gets a confirmation back.

## What Amadeus does

Amadeus IT Group is a technology provider for the global travel and tourism industry. You can find them at [amadeus.com](https://amadeus.com).

There is an important change to know about before you plan anything. Amadeus states on its developer site that its self-service developer portal was decommissioned on July 17th, and that the site now serves its Enterprise API Portal only, with over 100 Enterprise APIs, including SOAP services, available by request. The REST APIs described here were published for that self-service program. When we checked on 2026-11-05, their test host no longer resolved and the OpenAPI repository was archived. So read what follows as a map of what Amadeus offers and how it fits together, and expect to reach it through an enterprise conversation rather than a signup form.

## What you can get done

### Take a booking from offer to confirmed reservation

[Reservation Capture](https://apis.io/capabilities/reservation-capture/) is the moment a choice becomes a booking: the traveler picked a flight or a room, and now it needs to be reserved, stored and, if plans change, cancelled.

- `POST /booking/flight-orders` creates a flight booking from the flight offers a traveler chose.
- `GET /booking/flight-orders/{flight-orderId}` retrieves a flight booking you already made.
- `DELETE /booking/flight-orders/{flight-orderId}` cancels a flight booking.
- `POST /booking/hotel-orders` creates a hotel booking.
- `POST /ordering/transfer-orders` reserves a transfer, such as a car from the airport to the hotel.

## Workflows that put it together

A workflow is a recipe: several calls made in a set order to finish one job. We publish these for Amadeus as Arazzo workflows on APIs.io.

- [Flight Book and Retrieve Order](https://apis.io/arazzos/amadeus/amadeus-flight-book-and-retrieve-order-workflow/) prices a flight offer, creates the booking, then reads it back to confirm it.
- [Flight Availability to Offers](https://apis.io/arazzos/amadeus/amadeus-flight-availability-to-offers-workflow/) checks seat availability for a route and date, then searches priced offers for the same trip.
- [Direct Destinations Then Search Flights](https://apis.io/arazzos/amadeus/amadeus-direct-destinations-search-flights-workflow/) lists where you can fly nonstop from an airport, then searches flights to one of them.
- [City Hotels with Ratings](https://apis.io/arazzos/amadeus/amadeus-city-hotels-with-ratings-workflow/) lists hotels in a city, then pulls guest sentiment ratings for them.
- [Airline Flight Status and Check-in](https://apis.io/arazzos/amadeus/amadeus-airline-flight-status-checkin-workflow/) gets the status of a flight, then fetches the airline's check-in links.
- [City Tours and Activities](https://apis.io/arazzos/amadeus/amadeus-city-tours-and-activities-workflow/) finds bookable tours and activities near a city.

## Getting started

Access to Amadeus is now enterprise, so the first step is a conversation with Amadeus rather than a self-serve key. What we know about cost is in the [Pricing section of the Amadeus profile](https://apis.io/providers/amadeus/#pricing). The self-service documentation for [Flight Offers Search](https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-search), [Flight Offers Price](https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-price) and [Flight Create Orders](https://developers.amadeus.com/self-service/category/flights/api-doc/flight-create-orders) shows how the booking flow was designed, though given the change above those pages may move.

On APIs.io you can browse the full [Amadeus profile](https://apis.io/providers/amadeus/) and APIs such as the [Booking API](https://apis.io/apis/amadeus/amadeus-booking-api/), the [Display SeatMaps API](https://apis.io/apis/amadeus/amadeus-display-seatmaps-api/) and the [Checkin Links API](https://apis.io/apis/amadeus/amadeus-checkin-links-api/).

If booking travel is core to your business, use the workflows above to decide which pieces you need, then take that list to Amadeus.
