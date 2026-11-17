---
published: true
layout: post
title: 'MCP Is Just Another API Design Pattern'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/mcp-is-just-another-api-design-pattern.png
date: 2026-11-25 13:30:00 +0000
author: Kin Lane
tags:
  - MCP
  - API Design
  - Agents
  - Sprawl
  - Governance
---
I keep having to remind people that the Model Context Protocol isn't a new kind of thing that replaces your APIs. It is an API. An MCP server is an abstraction layer on top of your APIs, using a handful of familiar patterns. Tools are the actual APIs. Resources are the documentation and other information that help. Prompts are the questions you feed in. Underneath, it is just APIs, and your MCP server is only as good as the API infrastructure below it.

Once you see it that way, the question stops being "do we have an MCP server?" and becomes "how did we design it?"

## There are a lot of them now

The [APIs.io MCP catalog](https://mcp.apis.io/) currently lists 6,089 MCP entries. When I gave my keynote in New York last month, the snapshot I was working from had 6,968 MCP entries, of which 4,041 were real servers and 3,321 were hosted endpoints. The numbers move as I clean the catalog, but the direction doesn't. Everyone is shipping one.

Which means the interesting part isn't whether a provider has a server. It is what is inside it.

## One tool per operation is not a design

The easiest way to get an MCP server is to generate it from your OpenAPI, one tool per operation. That isn't a problem on its own. You should be able to generate your MCP interface. But if you have 300 operations and you just generated 300 tools, you just now increased your sprawl. You took everything that was hard to navigate in your API and handed it to a client that has even less patience for it.

AI clients don't think in operations. They think in tasks. "Resize this image and put it on a page." "Refund this order and tell the customer." Those tasks usually span several operations, and a well-designed tool spans them too. That is an API design decision, the same kind we have always made when deciding what a resource is, what goes in a response, and what a workflow should look like.

## Generated, handcrafted, or evolved

When I rate MCP servers I look at whether they were generated, handcrafted, or an evolved version of one or the other. Especially when I can find the OpenAPI for the APIs behind a server, I can diff the design. If nothing was done beyond generating it, the server usually doesn't have the resources, the prompts, a lot of the security and the metadata an agent needs to be successful.

Handcrafted servers are designed for the client. Evolved servers started generated and then got the attention they needed: tools consolidated around tasks, descriptions written for a model rather than a reference page, resources added, scopes mapped. Evolved is where most providers should be aiming, because it keeps the contract as the source of truth while admitting that a one-to-one mapping is a starting point and not a finished product.

## Treat it like any other API

If MCP is just another API design pattern, then everything we have learned about APIs applies:

- **Design it.** Decide which tasks your consumers need, then group operations into tools that do those tasks.
- **Govern it.** Naming, descriptions, error responses, auth and scopes should follow the same rules as the rest of your APIs.
- **Contract it.** Keep the relationship between tools and operations explicit, so you can see what each tool touches.
- **Version it.** Tools change. Agents depend on them. Deprecation matters here as much as anywhere.
- **Measure it.** Know which tools get called, which fail, and which never get used.

None of that is new work. It is the API lifecycle applied to one more interface.

## API-first is the muscle that makes this easy

The providers that do this well are the ones who already have the muscle to design, iterate and ship new APIs quickly. For them, MCP is another surface to design, and they design it. For everyone else, it becomes another generated artifact sitting next to the SDKs that nobody maintains.

You can browse the servers in the [APIs.io MCP section](https://mcp.apis.io/) and see the difference for yourself. Look at the tool lists. You can usually tell within a minute whether someone designed the server or just ran a generator.
