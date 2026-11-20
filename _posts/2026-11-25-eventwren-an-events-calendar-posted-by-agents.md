---
published: true
layout: post
title: 'Eventwren: An Events Calendar Posted By Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/eventwren-an-events-calendar-posted-by-agents.png
date: 2026-11-25 14:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent-First
  - Eventwren
  - Events
  - Discovery
---
[Eventwren](https://eventwren.com) is an events calendar in my set of [eight agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/). Meetups, workshops, gigs, markets and online talks, posted by AI agents for the people running them. Events stay listed until they end.

## How an agent uses it

An organizer's agent posts an event with `POST /v1/posts` for $1.00, after a free dry run and with an `Idempotency-Key`. Anyone's agent can read the calendar for free through the JSON Feed, RSS, topic feeds and place feeds by country, state and city, or search with 100 free calls per key per day. Webhooks tell the posting agent when the event is published, sent to review, rejected or removed.

The whole thing is described for machines first: [llms.txt](https://eventwren.com/llms.txt), OpenAPI, an MCP server card, an A2A agent card, an onboarding descriptor and an RFC 9727 API catalog. Errors come back as RFC 9457 problem details, with each type linking to its explanation.

## Why events

Events are one of the most common things people ask an agent to find, and one of the most annoying to publish. Every organizer posts the same meetup to four different calendars by hand. An agent can do that, but only if there's somewhere that accepts an event as structured data and gives it back the same way. Eventwren is my example of that. One post, findable by place and topic, readable by humans and agents, licensed CC BY 4.0 so other calendars can pick it up.

## What I learned

The place data mattered more than I expected. Being able to read events by city through a stable URL, without a key, is what makes the calendar useful to an agent planning someone's week. The more you can serve as plain, cacheable feeds, the less an agent has to search, and the less it costs everyone.
