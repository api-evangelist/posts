---
published: true
layout: post
title: 'Bump.sh White-Labels the MCP Server, and Discovery Is the Next Problem'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/bump-white-labels-the-mcp-server-and-discovery-is-next.png
date: 2026-07-19
author: Kin Lane
tags:
  - MCP
  - API Discovery
  - APIs.io
  - OpenAPI
  - Agents
---

[Bump.sh shipped two features](https://docs.bump.sh/product-updates/2026/07/06/mcp-servers-custom-oauth-custom-domain/) that on the surface read like routine platform housekeeping, and underneath tell you exactly where the agent-facing web is going. They took their MCP servers out of beta, made them available on every plan, and then added the two things that turn a hosted feature into a white-label one: custom OAuth and custom domains. You can now stand up an MCP server generated from your API documentation, put it on `mcp.yourcompany.com` via a CNAME, and have your users sign in through the Okta or Auth0 or Keycloak they already use, "without ever touching Bump.sh." The vendor disappears. The server looks and behaves like it was always yours.

That is the whole point of white-labeling, and Bump has been doing it for API documentation for years, so extending it to MCP is the obvious move. If your docs live on `developer.yourcompany.com` with your logo and your login, of course the MCP server that exposes those same operations to an agent should live on your domain with your login too. An agent showing up to use your API should not be bounced to some third-party auth screen any more than a developer reading your docs should be. Bump gets this right. The MCP server becomes a native part of your developer surface, not a bolt-on hosted somewhere else.

And that is precisely why I want to keep pulling on this thread, because the thing that makes white-label MCP good for the individual provider is the same thing that makes it a problem for everyone standing outside that provider's four walls. When the MCP server lived at a predictable vendor URL, you could at least find it. When it lives at `mcp.yourcompany.com` behind your OAuth, it is invisible to anyone who does not already know it exists. We are about to scatter tens of thousands of these across the web, each one perfectly branded, perfectly authenticated, and perfectly undiscoverable. The better the white-labeling gets, the worse the discovery problem gets. This is the same lesson the API space learned the hard way with developer portals a decade ago, and we are about to run the whole experiment again with MCP.

I have been building [APIs.io](https://apis.io) specifically because I do not think each provider quietly white-labeling their own agent surface adds up to a web that agents can actually navigate. Discovery cannot live inside the thing being discovered. Bump can make your MCP server feel native on your domain, but it cannot tell the rest of the world that it is there, what it does, what it costs, what auth it wants, or how it compares to the three other providers doing the same job. That is an index problem, and an index has to sit outside the providers, above them, looking across all of them at once. When Bump generates an MCP server from an OpenAPI, that OpenAPI is also the thing APIs.io can catalog, so the same artifact that powers the white-label server can also power its discoverability, if someone bothers to point at it. The provider gets to keep their branding and their front door. The index just needs to know the door exists.

So the pattern I want people to internalize is a two-layer one. The bottom layer is what Bump just nailed: white-label, per-provider, on your domain, behind your auth, feeling native to your ecosystem. That layer should be branded and self-contained, and Bump making it trivial is genuinely good for the space. The top layer is the one nobody owns yet: a cross-provider index that knows every one of those MCP servers exists, describes them in a consistent way, and lets an agent or a human ask "who can do X" without having already memorized which vendor to visit. Without that top layer, white-label MCP gives us a web of beautiful, private front doors and no map. APIs.io is my attempt at the map, built on APIs.json and OpenAPI so it indexes the same artifacts providers are already producing.

There is a second, quieter layer under all of this, and it is the one I have been accumulating for sixteen years without always calling it by name. A raw list of MCP servers is a phone book. What actually helps an agent decide whether to reach for a given API is the surrounding knowledge: how this provider does auth, where they hide their rate limits, whether their "search" endpoint actually searches, what they are good at and where they fall down. That is [API Evangelist](https://apievangelist.com) knowledge, and it is exactly the layer that turns a directory into a decision. Bump is making it effortless to publish an agent-facing surface. My job, and I think the industry's job, is to make sure those surfaces are findable, comparable, and understood, because a white-label MCP server that no agent can find is just a very well-branded tree falling in an empty forest.
