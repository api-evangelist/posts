---
published: true
layout: post
title: 'When To Build An MCP Server: The Information Has To Change'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/when-to-build-an-mcp-server-the-information-has-to-change.png
date: 2026-11-23 18:00:00 +0000
author: Kin Lane
tags:
  - MCP
  - Agents
  - Government
  - API Strategy
  - APIs.io
---
I get asked some version of "should we build an MCP server?" almost every week. Most of the time the honest answer is "it depends," which is useless. So I was happy when Patrick Heneise of Zentered Studios handed me a rule that is actually usable during [our conversation earlier this month](https://conversations.apievangelist.com/store/2026-11-12-patrick-heneise/).

## The Rule

Patrick built Immigration Layer, an MCP server that gives Claude or ChatGPT up-to-date immigration papers, changes and bulletins. He described it as the same idea as Context7, which gives you current documentation for the latest SDKs, applied to immigration documents. He built it because he had been through the process himself and saw that "you don't get that information so easily." And if you ask GPT, he said, "it's always six months behind."

Then he generalized it, and this is the part I keep repeating to people:

"if that stuff never changes in 10 years there's no need to build an mcp because claude will know everything about it but if there's ever changing information then that's kind of the the pattern to build an mcp around that."

That is it. If the information is stable, the model already has it. If the information changes, and the model is behind, the MCP server is where the value is.

## My Version: New York City

This landed for me because I had been working on a version of the same thing for New York City. City planning resources for developers building something. Then a street vendor license, which is a convoluted process if you want to sell something on the streets. Patrick added construction permits, like the modifications you want to make to your house, which he called "such a complex process."

Every one of those has the same shape. The process is complicated, it is spread across documents and offices, and the details move. A bulletin gets updated. A form changes. A rule takes effect next month. A model trained six months ago will confidently describe last year's process. An MCP server that reads the current source will not.

I would go further than Patrick did on the call and say almost any government form or process fits this pattern. That is a huge need, and most of it is sitting in PDFs and web pages, not APIs.

## What The Rule Rules Out

The rule is just as useful for saying no. A lot of MCP servers I see wrap reference material that has not meaningfully changed in years. Wrapping it does not hurt anything, but it is not where an agent needs help, because the model already knows it. If your answer to "what does this server know that the model doesn't?" is "nothing, really," you are building a nicer interface to training data.

It also pushes back on the "wrap the whole API" instinct. The parts of an API that matter most to an agent are the parts that return current state: today's availability, this week's rule change, the status of this application. Those are the operations worth exposing well first.

## A Lens On The Catalog

This is where I want to take Patrick's rule next. APIs.io holds thousands of providers, and they are not all the same kind of data. Some serve reference data that barely moves. Some serve state that changes by the minute. If volatility is the reason an MCP server earns its place, then volatility is a lens I can put on the catalog: which providers serve information that changes, and which of those already publish an MCP server.

I haven't built that view yet, and I don't want to pretend I have. But I like that the question is answerable. The overlap between "this information changes constantly" and "I didn't find an MCP server for it" is a list of opportunities, for providers and for anyone building on top of them.

## The Takeaway

Before you build an MCP server, ask one question: does this information change? If it doesn't change in ten years, the model already knows it, and your time is better spent somewhere else. If it changes all the time and the models are six months behind, that gap is the product. Patrick found it in immigration bulletins. I found it in New York City permits and licenses. I suspect most of you are sitting on one too.
