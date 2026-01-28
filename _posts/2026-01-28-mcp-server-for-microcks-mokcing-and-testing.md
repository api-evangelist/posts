---
published: true
layout: post
title: MCP Server for Microcks Mocking and Testing
date: 2026-01-28T09:00:00.000Z
tags:
  - Microcks
  - Mocking
  - Testing
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-autom-leaves-street.jpeg
---
[The Microcks team is proposing adding an MCP server for the mocking and testing platform](https://github.com/microcks/microcks/issues/1935#issuecomment-3806602196), arguing that every tool needs one. I definitely support every API service and tool having an API, so this lines up perfectly with my historical views. It also reflects work I’m doing with Microcks to deploy Spectral rules, API design guidelines, and even API ops cycles and other more lifecycle- and product-oriented work into a mock API.

My API governance sandboxes already use Microcks to deliver the REST API mock, but they also deliver an MCP server alongside it. What this means is that Microcks itself would now have an MCP to discover the list of internal or third-party APIs that are registered, along with any artifacts or mocks available to support them—giving you programmatic access to everything that goes into the sandbox.

- **Discover the list of APIs / Services / Mocks available** - Agents might use this one to discover what third-party APIs are available and that mocks can be used,
- **Get API details** -  Agents might use this one to get operation details (and maybe primary artifact also?) on an API in order to ease the creation of an API client,
- **Import an artifacts** - Agents might be able to enrich Microcks with new artifacts - either when building a new API or when completing one with additional APIExamples for instance,
- **Run a conformance test** -  Agent might be able to run a conformance test so that they can ensure they didn't introduce regression into a code base when touching an API endpoint-related code.

You’d then be able to import new artifacts and run tests. When you think about it that way, it’s not just about mocking and testing. Microcks has a really powerful specification engine supporting OpenAPI, AsyncAPI, Postman Collections, and much more. It has rich examples, and exposing that engine via an MCP that can be registered anywhere opens up a lot of possibilities.

Microcks allows you to inject mocks, testing, and the artifacts behind them directly into the software development life cycle. There’s already an issue set up in the Microcks GitHub repository—[issue #1935](https://github.com/microcks/microcks/issues/1935#issuecomment-3806602196)—for an MCP server for Microcks. Definitely head over and share your thoughts. I’ll be doing the same as part of this storytelling to support Naftiko API sandboxes.