---
published: true
layout: post
title: 'Agents Will Not Look For An SDK Generator, They Will Look For A Problem To Solve'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agents-will-not-look-for-an-sdk-generator-they-will-look-for-a-problem-to-solve.png
date: 2026-11-06
author: Kin Lane
tags:
  - SDKs
  - Clients
  - Agents
  - Code Generation
  - OpenAPI
  - Capabilities
  - Discovery
  - APIs.io
---
Yesterday I wrote that [the client stack did not collapse, it went dark](https://apievangelist.com/2026/11/05/the-client-stack-did-not-collapse-it-went-dark/). An agent reads the docs, explores, writes a small SDK for the three operations it needs, and wires it into the task, all inside one context window that closes when the job is done. The SDK layer was the one that worried me most, because the agent writes it from what the model remembers, frozen at a training cutoff nobody can see.

Lubos from [Hey API](https://heyapi.dev/) replied on LinkedIn: "writes a small SDK for the three operations it needs, if only there was a tool that does this without all the downsides you list." He is right, and it is worth taking seriously, because it points at something I have been trying to articulate in conversations with Bruno Perez at [Okapi](https://www.okapi.bot/) and with a few others building on the consumer side of APIs.

## The tool already exists

Hey API is an open source generator that turns an OpenAPI into a typed client, with validators, query hooks and a long list of plugins. The part that matters for this conversation is a parser filter that includes or excludes operations by key. You do not have to generate the whole SDK. You can generate exactly the operations a task needs, from the provider's current contract, and get the same output every time.

I wanted to know if that works against what APIs.io publishes today, so I tried it. I started from a business problem rather than an API: rotating the API keys an application uses to talk to Twilio. APIs.io maps Twilio's published APIs to business capabilities, and that problem lands on "Developer Identity & Credential Management," which points at a specific contract, the Twilio Accounts Keys API. Five operations. The task needs three of them: list the keys, create a new one, delete the old one.

```js
export default {
  input: 'https://artifacts.apis.io/twilio/openapi/twilio-keys-api-openapi.yml',
  output: 'src/twilio-keys',
  parser: {
    filters: {
      operations: {
        include: [
          'GET /Accounts/{AccountSid}/Keys.json',
          'POST /Accounts/{AccountSid}/Keys.json',
          'DELETE /Accounts/{AccountSid}/Keys/{KeySid}.json',
        ],
      },
    },
  },
  plugins: ['@hey-api/client-fetch', '@hey-api/sdk', 'zod'],
};
```

One command later I had a typed client with `listKeys`, `createKey` and `deleteKey`, the security scheme and base URL taken from the contract, Zod schemas for the payloads, and nothing for the two operations the task did not need. It compiled cleanly. The input was an OpenAPI 3.2 document that we host, and the generator read it without complaint.

That is the small SDK from my post, minus the downsides. The version is no longer invisible, because it is the contract it was generated from. And there is an artifact again, a folder of files you can commit, diff and review. The dark layer has a light switch.

## The agent still will not know it exists

Here is the problem I raised with Bruno, and it applies to Hey API, to Okapi and to every tool like them. An agent in the middle of a task is not looking for an SDK generator. It does not know Hey API exists, and it is not going to go looking. It is trying to solve a business problem or an engineering problem: rotate these keys, reconcile these payments, provision this number. If nothing in front of it says "there is a better way to get the client for this," it will do what it does today and write one from memory.

So the question is not whether the tooling exists. It does. The question is where the agent encounters it. I think the answer is the place the agent already goes to solve the problem, which is discovery. That is the job I want APIs.io to do.

## What I want APIs.io to provide

I want the path to start from the problem and end in something executable, with the artifacts in between doing the work:

- **The problem.** Business capabilities and the phrasing people actually use, "rotate my API keys," mapped to the APIs that can do it. We already publish capabilities, the edges to the contracts behind them, and conversational phrasing for operations.
- **The bundle.** Whatever the generator needs to do the job well, simple or complex. For the key rotation, that's one OpenAPI and three operation keys. For something bigger it is an application blueprint, the capabilities involved, the OpenAPI and AsyncAPI contracts, and an Arazzo workflow that says what order the calls go in. We hold all of those artifacts. They are not yet packaged as a bundle that a generator can take as one input.
- **The semantics on the page.** Plain statements an agent can read that say: this bundle exists, this is the purpose it serves, and this is how to turn it into a client or a skill. Not a marketing paragraph. Machine-readable pointers, written so an agent that arrived with a problem leaves with a way to execute it.
- **The handoff.** A link to the executable path: Hey API to generate the client, Okapi to keep it from breaking when the provider changes, or another generator that turns the same bundle into an agent skill. APIs.io is the place to discover. It shouldn't be the place that generates.

That last line is the important one. I don't want to build the generator. Hey API is better at generating clients than we will ever be, and Okapi is closer to the consuming code than we will ever be. What we can do is make sure the bundle is right, that it is the provider's actual contract, versioned and scored, and that the agent finds it at the moment it needs it.

## Clients, SDKs and skills from more than OpenAPI

The example above is the simplest case. One contract, three operations. The next generation of this is more interesting, and it's the part I want partners to push on. Generate the client from the capability and the workflow, not just the operations. An Arazzo workflow already describes the sequence: list keys, create the new key, swap it into the application, delete the old one. A generator that reads the Arazzo alongside the OpenAPI could emit the rotation as one function, not three. A generator that reads the AsyncAPI could wire up the events that confirm it worked. The same bundle could produce a TypeScript client for a developer, a Python client for a data team, or a skill for an agent, each pinned to the same contract version.

That is the stack coming back out of the dark. Not as twelve hand-built layers, but as artifacts on one side, executable output on the other, and a record of which contract version produced which client.

## What we still have to work out

Two things, and I don't have the answers yet.

The first is discovery. How does a page on APIs.io tell an agent, in a way it will act on, that a bundle exists for its problem and a generator is one link away? Some of it is semantics we already know how to publish. Some of it is whatever conventions agents settle into for finding tools, which is still moving.

The second is economics. If APIs.io sends an agent to Hey API or Okapi, and that agent generates a client that ends up in production, who captured value, and how does it flow back to the people keeping the contracts accurate and the tools working? I would rather work that out in the open with the partners doing the work than invent it alone.

If you are building generators, gateways or agent tooling and this is the problem you are working on, I would like to talk. Lubos, thanks for the nudge. The tool was already there. The work now is making sure the agent finds it.
