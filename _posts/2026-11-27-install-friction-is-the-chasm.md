---
published: true
layout: post
title: 'Install Friction Is The Chasm'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/install-friction-is-the-chasm.png
date: 2026-11-27 21:00:00 +0000
author: Kin Lane
tags:
  - MCP
  - Onboarding
  - Install
  - Agents
  - Developer Experience
---
Dave Eyler of [Good Timing](https://goodtiming.ai) said something during our API Evangelist Conversation earlier this month that named a problem I have been circling for a while. We were talking about how normal people come to realize they can just have Claude use their apps for them, and he put it this way: one of the biggest chasms we have to cross is just getting normal people in there.

He was not talking about models, or protocols, or whether MCP is the right abstraction. He was talking about installing things.

## The magical moment

Dave described his own moment. He was using a startup that let him talk to his LinkedIn network through Claude. Instead of scrolling around in a UI trying to figure out what is going on, he could say find me this type of person in my network, and it would look through it all. His words: "this is like magical man." So many apps are "a hundred times better if you can just talk to Claude and have them use it for you."

I have had that moment too, more than once this year. It is the moment when an API stops being something a developer integrates and becomes something a person just uses through a conversation. But Dave's point was that this hasn't really gotten out there yet, and part of the reason is how much friction there is to install.

## URL pasting is the wall

Here is how adding a custom MCP server goes for most people. In Dave's words: "if you have a custom MCP server, oh my god, like you get the URL and like I'm gonna add it in there." Then there are the client directories, "but even those are not great."

If you are a developer, pasting a URL into a settings screen is nothing. If you are the person who just wants to talk to their LinkedIn network, it is a wall. You have to know that a server exists, find its address, find the right settings screen in the right client, paste it, and then work through whatever authorization comes next. Every one of those steps is a place where a normal person gives up.

## One dialog and you are done

Dave pointed to the better version, where you just drop the link in and say use this, and "it's just one little dialogue and it's like allow and you're done." His bet is that this kind of experience is "going to force everybody to make it easier in the same way," and that it will help a lot.

I think he is right, and I think it is the same pattern we have seen before. Every time onboarding to an API got down to one step, usage went up. Self-serve API keys did it. Copy and paste code samples did it. One dialog MCP install is the version of that for people who will never read documentation.

This is also why I spent time on a [universal install interface for MCP servers](/2026/07/23/a-universal-install-interface-for-mcp-servers/) back in July. That post was about giving providers one button that works across clients. Dave's point is the other side of the same coin: it is not only about the provider making it easy, it is about clients competing on how few steps it takes, and that competition pulling everyone along.

## What providers should do now

You don't control how the clients work, but you do control how much of the friction is yours. A few things I would do if I ran an MCP server today:

- **Make the server address impossible to miss.** Put it at the top of your docs and on your homepage, not three clicks deep.
- **Publish it where clients and directories look.** A `server.json`, a registry listing and a well-known pointer from your domain all make it findable without a human hunting.
- **Give people the one step version wherever a client supports it.** Deep links and install buttons beat a paragraph of instructions every time.
- **Keep authorization boring.** The install is only finished when the first tool call works. A confusing consent flow undoes everything the one dialog install bought you.

## The takeaway

The value is already there. People who get an API working through Claude have the magical moment Dave described, and they don't go back to the old UI. What stands between most people and that moment is not capability, it is installation. The chasm is a settings screen and a pasted URL. The clients that get install down to one dialog are going to pull the rest of the market along, and the providers who make their servers easy to find and easy to authorize will be the ones on the other side when that happens.
