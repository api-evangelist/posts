---
published: true
layout: post
title: 'GraphQL And The Human Reasons Behind Our API Patterns'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/graphql-and-the-human-reasons-behind-our-api-patterns.png
date: 2026-11-11
author: Kin Lane
tags:
  - GraphQL
  - Conway's Law
  - Sociotechnical
  - API Design
  - Politics
---
Yesterday I shared a screenshot on LinkedIn, and it took off. More than 32,000 people have seen it, and the comments are still coming in. The screenshot was of a Bluesky post by [Jan Lehnardt](https://bsky.app/profile/janl.bsky.narrativ.es), quoting a thread by James Coglan. Here is the whole exchange:

> **James Coglan:** been finally learning what graphql is due to <%= reasons %> and I have never seen such a clear case of a technical solution to a social problem. that problem being "too many people want to talk to the API devs"
>
> **Jan Lehnardt:** Fun fact, I once sat down with the inventor of GraphQL and after 30 minutes of him trying to explain the technical merits he finally came out with it: "GraphQL exists so Facebook frontend devs don't have to talk to Facebook backend devs".

I didn't share it to dunk on GraphQL. I shared it because it's the cleanest example I've seen of something I've been saying for fifteen years. There is almost always a human reason for why we have different API patterns, forks in the road and glitches in the matrix. In my experience it's rarely a technical reason. It's almost always business or politics.

## What the comments said

The comments are better than the post, and they're worth reading in full. They clustered around a handful of ideas.

**Conway's Law.** A lot of people went straight there: organizations ship systems shaped like their communication structures, and this was called the clearest example of it ever. Someone else called it quintessentially sociotechnical, and I agree.

**Avoiding coordination isn't a bad thing.** Several people pushed back, and they had a point. Not having to coordinate is where agility and velocity come from. Documentation exists for the same reason: so a person doesn't have to answer the same question a hundred times. One commenter asked a sharp question. Is the problem "frontend devs don't want to talk to backend devs," or "too many frontend devs want to talk to backend devs"? The first is a relationship problem, and technology is a bad fix for it. The second is a bottleneck, and automating away the communication overhead is a reasonable fix. Another commenter answered that it's both, because even without a bottleneck, teams that don't have to coordinate ship faster.

**The split was the mistake.** One of the best comments said the trouble is applying "don't make us talk" horizontally. When you split teams into frontend and backend, neither one can ship anything a user values on its own, so they're forced to talk about everything. The fix isn't a query language. It's teams organized around something a user actually gets.

**Scale is the real use case.** Others gave GraphQL its due. It makes sense when your API is so widely used that you can't predict what clients will ask for, and the backend absorbs the cost and complexity of every possible permutation. That describes Facebook. People pointed to Shopify as a platform where building on top got easier with GraphQL. The problem, as one commenter put it, is how many startups with focused, predictable client use cases adopted a pattern designed for a scale they would never reach.

**It doesn't remove the conversation.** My favorite irony came from an architect who said that in his experience GraphQL doesn't have a well-defined enough contract, so the consumer ends up meeting with the producer anyway, to understand how queries behave. When it works, it's great. When it doesn't, you have meetings.

**And the people who lived it.** A former VP of engineering said he spent most of his days designing technical solutions to keep his team from warring with each other. Someone else described asking for a tiny change and being told it needed a new endpoint and would take three months. Another told a long story about a locker, a key-master and a Jira ticket, and ended with "I'd rather juggle 50 extra technical dependencies than a single Mitch." Everyone has a Mitch.

## What I take from it

When someone asked whether this isn't just a perk of APIs in general, I said I think there's a separation between APIs and the creation of APIs. An API is the interface. Creating one is the management of resources: who owns the data, who gets to change it, who has to be asked, how long it takes and who pays. That second part is where most of our patterns come from.

That's true of GraphQL. It's also true of most of the forks in the road I've watched over the years. SOAP and REST, Swagger and OpenAPI, the many ways to do webhooks or pagination or versioning. Each comes with a technical story, and the technical story is real. But underneath it is usually a team that didn't want to wait on another team, a company that wanted control of a standard, a platform that needed its partners to move faster, or a budget that decided who did the work. The technology is how the human decision got written down.

That's why I don't think the useful question about GraphQL, or REST, or MCP, or A2A, is which one is better. It's which human problem you actually have. If your problem is that you can't predict what thousands of clients will need, GraphQL was built for you. If your problem is that two teams don't get along, no query language will fix it, and you'll end up in the meeting anyway. If your problem is that one team is a bottleneck for everyone else, a well-described contract, good documentation and a self-service way in will do more than anything else.

It's also why I spend so much time on governance, contracts and the business of APIs, not just the technology. The contract is the agreement between the people on either side of the interface. The pattern you choose tells you a lot about the agreement those people were able, or unable, to make.

Thanks to everyone who jumped into the thread. Fifteen years in, the API conversations I learn the most from are still the ones about people.
