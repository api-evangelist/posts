---
published: true
layout: post
title: 'Run Multiplayer Game Servers, Player Logins And Cloud Builds With Unity'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/run-multiplayer-game-servers-player-logins-and-cloud-builds-with-unity.png
date: 2026-11-13 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Unity
  - Game Backend Services
  - Continuous Integration Management
  - Identity & Access Management
  - Game Development
  - Multiplayer
---

If you make games, the game itself is only half the work. Players need to sign in, matches need a server to run on, someone has to change a setting for one group of players without shipping a new build, and every new version has to be built and tested. Most small studios end up stitching that backend together by hand. [Unity](https://apis.io/providers/unity/) offers all of it as APIs, which means your own tools, your build pipeline or an AI assistant can call Unity and get those jobs done without anyone clicking through a dashboard.

## What Unity does

[Unity](https://www.unity.com/) is a cross-platform real-time development platform. Most people know it as the engine behind a huge number of games, but it also runs a suite of services for live games: multiplayer, analytics, economy, authentication and DevOps tooling. On APIs.io I have Unity catalogued as 12 APIs, from voice and text chat to user generated content and server allocations.

## What you can get done

### [Game Backend Services](https://apis.io/capabilities/game-backend-services/)

When a match starts, it needs a dedicated server somewhere close to the players. A fleet is a pool of those servers in a region. This capability lets your matchmaking or admin tools manage fleets and grab a server when a match needs one.

- `POST /v1/projects/{projectId}/regions/{regionId}/fleets/{fleetId}/allocations` allocates a game server from a fleet for a new match.
- `GET /v1/projects/{projectId}/regions/{regionId}/fleets` lists the server fleets running in a region.
- `POST /v1/projects/{projectId}/regions/{regionId}/fleets` creates a new fleet of game servers.
- `GET /v1/projects/{projectId}/regions/{regionId}/fleets/{fleetId}` returns a fleet's configuration and status.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

Players hate creating accounts before they can play. Unity lets them start anonymously and add a proper login later, or sign in with an account they already have.

- `POST /v1/authentication/anonymous` signs a player in anonymously.
- `POST /v1/authentication/usernamepassword/sign-up` registers a player with a username and password.
- `POST /v1/authentication/usernamepassword/sign-in` signs an existing player in.
- `POST /v1/authentication/external-token` signs a player in with an identity token from another provider, such as Google, Apple or Steam.

### [Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/)

Continuous integration means every change gets built automatically, so problems show up early. Unity Cloud Build does the building; these operations let you drive it from anywhere.

- `POST /orgs/{orgid}/projects/{projectid}/buildtargets/{buildtargetid}/builds` starts a new Cloud Build for a build target.
- `GET /orgs/{orgid}/projects/{projectid}/buildtargets/{buildtargetid}/builds` lists a build target's build history.
- `GET /orgs/{orgid}/projects/{projectid}/buildtargets/{buildtargetid}/builds/{number}` returns a build's status and artifacts.
- `DELETE /orgs/{orgid}/projects/{projectid}/buildtargets/{buildtargetid}/builds/{number}` cancels a build that is still running.

### [Feature Flag Management](https://apis.io/capabilities/feature-flag-management/)

A feature flag is a switch you can flip without shipping new code. Unity Remote Config lets you give one segment of players different values, for a test, an event or a staged rollout.

- `GET /v1/projects/{projectId}/environments/{environmentId}/rules` lists the override rules for player segments.
- `POST /v1/projects/{projectId}/environments/{environmentId}/rules` creates a segment override rule.
- `PUT /v1/projects/{projectId}/environments/{environmentId}/rules/{ruleId}` updates a rule, for example its rollout percentage.
- `DELETE /v1/projects/{projectId}/environments/{environmentId}/rules/{ruleId}` removes a rule.

### [Product Telemetry Instrumentation](https://apis.io/capabilities/product-telemetry-instrumentation/)

To know what players actually do, the game sends events. You can check events against your schema before you record them.

- `POST /v1/projects/{projectId}/events` records gameplay analytics events.
- `POST /v1/projects/{projectId}/events:validate` validates events without recording them.

## Workflows that put it together

A workflow is a recipe: several API calls in a set order, each one using what the last one returned. I have 19 Arazzo workflows for Unity on APIs.io, including:

- [Unity Build Automation Trigger and Poll](https://apis.io/arazzos/unity/unity-build-trigger-and-poll-workflow/) confirms a build target, starts a clean build, then checks until it succeeds or fails.
- [Unity Anonymous Sign-In and Token Refresh](https://apis.io/arazzos/unity/unity-anonymous-signin-refresh-workflow/) signs a player in anonymously and refreshes the session right away.
- [Unity Economy Virtual Purchase](https://apis.io/arazzos/unity/unity-economy-virtual-purchase-workflow/) checks a player's currency balances, makes a virtual purchase, then confirms the new inventory.
- [Unity Economy Grant Currency](https://apis.io/arazzos/unity/unity-economy-grant-currency-workflow/) adds currency to a player's balance and reads the result back.
- [Unity Cloud Save Set and Query](https://apis.io/arazzos/unity/unity-cloudsave-set-and-query-workflow/) writes player data, queries it by an indexed field, then reads it back.
- [Unity Analytics Validate and Record](https://apis.io/arazzos/unity/unity-analytics-validate-and-record-workflow/) records an event batch only when it passes validation.

## Ask for it in plain language

Unity has 31 phrasing overlays on APIs.io. They map plain questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they cover:

- How do I get a dedicated server for a new match?
- Can players start playing without creating an account?
- Did Cloud Build number 42 for my build target succeed or fail?
- How do I give a specific player segment different config values?
- Can I test my event schema without recording the events?

The [Unity Allocations API phrasing overlay](https://apis.io/overlays/unity/unity-allocations-api-phrasing-overlay/) is a good one to look at first.

## Getting started

Unity is a paid hosted service you call over the web, with a free tier. Plans are in the [pricing section of its APIs.io profile](https://apis.io/providers/unity/#pricing); as one example, Pro is listed at $210.00 per month. Start with the docs for [authentication over REST](https://docs.unity.com/ugs/en-us/manual/authentication/manual/rest-api) and [Vivox voice and text chat](https://docs.unity.com/ugs/en-us/manual/vivox-unity/manual/Unity/Unity).

The [Unity profile on APIs.io](https://apis.io/providers/unity/) lists every API, including the [Allocations API](https://apis.io/apis/unity/unity-allocations-api/), the [Authentication API](https://apis.io/apis/unity/unity-authentication-api/) and the [Vivox Voice and Text Chat API](https://apis.io/apis/unity/vivox/). If you only automate one thing this month, make it anonymous sign-in, because it gets players into the game fastest.
