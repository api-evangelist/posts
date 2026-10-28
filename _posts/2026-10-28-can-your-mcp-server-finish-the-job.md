---
published: true
layout: post
title: 'Can Your MCP Server Finish The Job?'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/can-your-mcp-server-finish-the-job.png
date: 2026-10-28
author: Kin Lane
tags:
  - MCP
  - Agents
  - Agent Readiness
  - API Design
  - Governance
---
When I wrote that [MCP is last-mile plumbing](https://apievangelist.com/2026/08/04/mcp-is-last-mile-plumbing/), the best response I got wasn't a comment. It was a repost, with one example that turned my analogy into a test. An email MCP connector will happily draft a message for you. It will not attach the file, and it will not send it. To finish the job, you drop out of the agent and back into the app, or into the real API.

That is the test. Run the workflow end to end through the MCP server alone. If you have to leave it to do the last step, the server is a demo surface, not infrastructure.

## The last step is the job

Most work an agent does for someone ends in a verb that changes something. Send the email. Submit the order. Pay the invoice. Publish the post. Merge the change. Book the room. Everything before that verb is preparation: searching, reading, drafting, composing. Preparation is useful, and it is also the cheap, safe part. It is the part a provider can ship without having to think about permissions, confirmation, idempotency or what happens when something goes wrong.

So it makes sense that a lot of MCP servers stop there. A read-only server is easy to publish and hard to get in trouble with. But an agent that can draft and can't send is not doing the job. It is handing the job back to a person with extra steps.

## What the catalog shows

I looked at the tool lists of the 1,350 live, hosted MCP servers on [APIs.io](https://apis.io/) that publish one, 18,355 tools in all, and sorted each tool by the verbs in its name.

- **438 servers, about a third, have no tool whose name suggests it changes anything.** Every tool gets, lists, searches, reads, fetches or describes.
- **912 have at least one tool that writes**, creates, updates, deletes, uploads or otherwise changes state.
- **648, just under half, have at least one tool that completes something**, a send, submit, pay, publish, book, order, sign, deploy, merge or similar.

This is a name-based reading, not a run of every workflow, so treat it as a direction. Names lie in both directions. A `get_` tool can have side effects, and a server with a `send_` tool can still be missing the one step your workflow ends on. The email example passes a name check and fails the real one. That is why the test has to be the workflow, not the tool list.

## A read-only server is a choice, so say so

I'm not arguing every server should write. There are good reasons to ship read-only first, and plenty of servers whose whole job is retrieval: documentation, search, reference data, analytics. Those pass the test, because reading is the job.

The problem is a server that covers the start of a workflow and leaves the end out without saying so. The agent finds the draft tool, does the work, and then can't finish. The person it's working for finds out last.

If your server stops short of the final action, say it in the server instructions and in the tool descriptions: this server drafts and does not send, and here is where sending happens. That's honest, and it lets the agent tell the person up front instead of at the end. Better still, mark the tools that do act with the annotations MCP already has, `readOnlyHint`, `destructiveHint` and `idempotentHint`, so a client knows what to confirm with a human before it runs.

## Test the workflow, not the surface

Here is the check I'd add to any MCP server's release process, and the one I'm working toward in [Agent Readiness](https://apis.io/rating/):

1. Write down the three to five jobs people actually use your product for, ending in the verb that finishes each one.
2. Run each job through your MCP server alone, with an agent, from the first step to that final verb.
3. Where the server can't finish, either add the terminal action, with confirmation and idempotency, or document that it stops and where the rest happens.

An API is how a business does something. An MCP server built on top of it should be able to do the same thing, or tell you plainly that it can't. If it can draft but not send, it is a preview of your product, not your product.
