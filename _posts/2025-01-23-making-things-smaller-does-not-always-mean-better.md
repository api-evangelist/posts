---
published: true
layout: post
title: Making Things Smaller Does Not Always Mean Better
tags:
  - Microservices
  - Domains
  - Boundaries
  - Size
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/citizenship-big-seven.jpeg
---
It is healthy to regularly explore and challenge our belief system in making things smaller and more modular and that doing so will make things easier and simpler. If you reduce something big to something small, it becomes easier to understand right? Or so this is how the myth goes. It’s not that it isn’t true, it is just that the devil is in the details of how something is abstracted, and who does the abstracting. While reducing the surface area of an API, or some other unit of compute, you can reduce the cognitive load, but you also can shift the formula of how people and applications are able to engage using APIs in some unexpected ways, which should always leave us considering what is being left behind.

- **Context** - There is a loss of wider context that exists across multiple API paths and operations but won’t with just a smaller grouping.
- **Distributed** - You are just distributing the complexity across many different APIs, requiring teams to manage the cognitive load.
- **Education** - Without education about the why and how things were reduced and separated, teams will have to navigate on their own.
- **Ownership** - The boundaries of who owns and is responsible for an API will shift and widen, increasing a groups API portfolio.
- **Dependencies** - The dependencies between individual APIs can become much more complicated and difficult for teams to navigate.

This post is not a pro or anti micro services post. This post is a response to teams asking for a goldilocks answer to what size API is the best, and watching LLM folks begin chasing a smaller language model surface area without much consideration for what they are leaving behind or running into. Making things smaller does not always mean they are better. Making things bigger or smaller comes with gains and losses, and there is rarely a universal goldilocks formula for answering how big or small an API should be. This is always answered through effectively understanding the domain in which an API operates within and what the consumers are needing in their applications and integrations.



