---
published: true
layout: post
title: 'A Small Business Run Through One MCP Server With No UI'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-small-business-run-through-one-mcp-server-with-no-ui.png
date: 2026-11-25 15:00:00 +0000
author: Kin Lane
tags:
  - MCP
  - Small Business
  - Automation
  - Agents
  - Conversations
---
I had a conversation with [Patrick Heneise](https://patrickheneise.com) of [Zentered Studios](https://zentered-studios.com) earlier this month, and one of the things he is building has stuck with me more than anything else from the hour. He is running the back office of a small business through a single MCP server, and there is no user interface. None. You talk to Claude, and the server does the work.

The project is [Socienne](https://socienne.com), and the way Patrick described it is about as plain as it gets. Starting a business means signing up for a pile of subscriptions: QuickBooks, time tracking, invoicing, expensing, "all that kind of stuff." Instead of stitching those together, he is building one tool that does all of it, "just with an MCP server."

## What It Actually Does

Here is the workflow as Patrick laid it out around the four minute mark. It goes through your email, fetches the expenses, and puts them in the database. When you say "track my time," it goes through your Claude sessions, your GitHub, your Zoom calls, makes the notes, and records the sessions. At the end of the month you ask for your invoices, and it sends them out to clients.

Later in the conversation he gave the reason it exists: he is maintaining two products and does not "want to pay 300 bucks a month" in subscription fees for all of these things. That is a real number for a single founder, and it is the kind of math every small business owner is quietly doing right now.

## The UI No Human Could Operate

The part I keep thinking about is why there is no interface. Patrick put it this way: "if you consider an app that essentially is Harvest and Bonsai and QuickBooks all together in one app, the UI is just, a human cannot operate this kind of UI." That is why we have all these different products. Each one is a slice of the problem small enough for a person to navigate.

"But if you let the AI handle it, I think that's actually possible."

I think that is a genuinely new idea about software, and it is worth sitting with. For fifteen years, the reason an application got split into separate SaaS products was partly business and partly ergonomics. The screens could only hold so much. The model does not need the screens. It needs the entities, the operations, and the data, which is what an API and an MCP server give it. The interface constraint that drove the fragmentation goes away, and what is left is the data model.

## My Version Of The Same Thing

I am building my own version of this, running my company and its two sub companies as a single person. Every week I refine another step. The one I told Patrick about was my newsletters. My newsletter provider, Commune, asked what I needed. I told him I usually do not use a service that does not have an API, because if I cannot get my data in or out I am stuck, and I need an MCP server to automate it.

He shipped an API and an MCP server, and it took me about three weeks and three iterations to get my three newsletters fully automated right up to the send button. Now it is literally "kick off the newsletters," and about 45 minutes later I go into Commune and there are three drafts sitting there, with my subscriber list updated and the maintenance work done. I review them and hit send.

That last step is mine on purpose. I want a human on the send. But everything up to it was busywork that I was doing by hand in a web interface built for a person, and none of it needed a person.

## What This Means For API Providers

If you are an API provider serving small businesses, this is the shift to pay attention to. Your customer may never log into your dashboard again. They will connect your MCP server, or point an agent at your API, and expect the accounting, the invoicing, the expense capture, to just play out. The provider that only has a web app is the one that gets dropped from the stack, because it is the one step that still needs a person in a browser.

Patrick also named the hard part honestly. Even if every tool has an MCP server, how do you move a lead from the CRM into invoicing and into your archive? The integration between entities is still the work. Collapsing everything into one server is one answer. Clean, well described APIs that agents can chain together is the other, and I suspect most small businesses will end up with a mix.

## The Takeaway

The interesting thing about Socienne is not that it uses MCP. It is that it treats the user interface as optional, and the data model and operations as the product. For a single founder, that turns $300 a month in subscriptions and hours of clicking into a few sentences typed into Claude. If your API cannot be the thing an agent drives end to end, you are the screen somebody is trying to get rid of.
