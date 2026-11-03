---
published: true
layout: post
title: 'Modeling An API By Talking To It With Structura'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/modeling-an-api-by-talking-to-it-with-structura.png
date: 2026-11-03
author: Kin Lane
tags:
  - Modeling
  - API Design
  - Code Generation
  - TypeSpec
  - MCP
  - Determinism
  - Conversations
---
I caught up with [Pedro J. Molina](https://www.linkedin.com/in/pjmolina) this week. Pedro is one of those people I always learn something from, and we tend to go a couple of years between conversations, which we both agreed needs to change. He has been building model-driven tools for as long as I have known him, and his PhD was on going from user interface specifications to code. So when he said he wanted to show me what he is working on, I knew it would be worth the time.

What he showed me is [Structura](https://structura.tools/), a web-based domain modeling and code generation tool from his company [Metadev](https://metadev.pro). On the surface it is a UML class modeling tool, and Pedro is the first to ask the question "why another UML editor?" The answer is in how you build the model, and in what happens after you are done.

## Modeling as a conversation

Pedro handed me the keyboard, so to speak, and asked me to pick a domain. I said books, publishing. He told Structura's assistant, Zeus, that he needed a domain for publishing books, and asked it to model it. About a minute later there was a class model on the screen: publisher, contract, author, book, language. Each one had typed properties, and the strings had sensible length constraints you could change.

From there you keep talking. You can ask for changes and refactors. You can ask questions of the model, like whether a book can be translated into more than one language. You can ask it to take you to the book class when the model gets big. Voice or text, your choice. The Structura site describes Zeus as "AI as your exoskeleton, not the driver," and that matches what I saw. The AI drafts and explains. The architect stays responsible for the model.

Every model also has a short textual syntax, so it can be reviewed by a human, tracked in Git, and read or written by an AI. That detail matters to me. It means the conversation produces an artifact, not just a picture.

## Then it goes deterministic

This is the part I care about most. Once the model is right, Structura validates it and then generates code the traditional way, with no AI involved. The same model produces the same output every time, in about ten seconds. The documented generators are Java, .NET 10 and Angular. Pedro also showed me TypeSpec, and from TypeSpec you get OpenAPI and JSON Schema, plus a client and server to test with. Each backend follows the same API definition, so a client does not care what language sits behind the contract.

Pedro's argument is one I share. Generative AI is great for a prototype. When you are dealing with a large system, regenerating everything with a model is expensive, and you get something different every time, which means somebody has to test it all by hand. A smaller model plus a deterministic generator gives you something you can trust, and something you can make compliant by design. Structura's own pitch puts it at about 80% of a codebase generated deterministically, with your team owning the remaining 20%, which they rightly call "the part that actually matters."

I told Pedro that the way I build things now, all roads lead toward deterministic. There is plenty of room for non-determinism in the middle, but the inputs and outputs need to be structured, validated and repeatable. JSON Schema, rules, linting, contracts. That is what lets you use AI without handing it the keys.

## The same conversation, with an agent

Structura also ships an MCP server, so Claude, or any other MCP client, can list, create, view, edit and share your Structura projects using the same account and the same data as the web app. Pedro added it to Claude with one line, signed in, and asked Claude to generate a .NET backend for one of his projects. It did, in seconds, without anyone opening the modeling tool.

So you can have the conversation with Zeus in the browser, or have it with an agent through MCP, and both end up in the same model and the same deterministic generator. Their docs describe connecting an agent to Figma's MCP server and Structura's at the same time, inferring a domain model from screen designs and generating a matching backend. They also describe pointing an agent at a legacy codebase, having it summarize the domain, and modeling that summary in Structura to generate something fresh.

## Why I think this has legs

I have spent a lot of years watching API design either happen in a spreadsheet, a Word document and a whiteboard photo, or not happen at all and get reverse-engineered from the code later. What I saw with Structura is design as a conversation. Sometimes that conversation is between people. Sometimes it is between a person and an assistant. Sometimes it is an agent working through an MCP server on someone's behalf. Ideally it is a mix of all three, landing in one model that everyone can see, review and argue about before a line of code is written.

The model is where the value is. The Structura docs say it plainly: the model changes slowly and the code can change fast. I would add that the model is also where the governance belongs. If you know what industry you are modeling for, what standards apply, what schemas and scopes already exist, you can bring that context into the conversation instead of discovering it in an audit. I offered Pedro what I have on APIs.io for exactly that: schemas and capabilities organized by industry, OAuth scopes, and the formal standards for each sector.

## Keeping an eye on it

I am adding Structura to APIs.io and profiling it like any other provider, and I want to track how they make it available to people and to agents over time. They are further along than most. The MCP server lives at `mcp.structura.tools` and publishes its OAuth protected resource and authorization server metadata, so an agent that finds it can work out how to sign in on its own. The blog publishes an llms.txt that describes the product and points to the MCP server. What is missing is anything on the main `structura.tools` domain itself, and an MCP server card an agent could discover without being told the address. That last mile is exactly what the Kin Score measures, and I expect them to close it, because a tool whose whole point is talking to agents needs to be found by them.

Pedro and I also talked about service level agreements, which he worked on years ago with the folks at the University of Seville as [SLA4OAI](/2026/11/03/service-level-agreements-come-back-around-as-sla4oai/). That is its own story.

Go [try Structura](https://structura.tools/). Model something you know well, talk to it, and look at the code it generates. Thanks, Pedro, for the time and for always showing me where things are going.
