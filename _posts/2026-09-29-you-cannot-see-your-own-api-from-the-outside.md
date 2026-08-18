---
published: true
layout: post
title: 'You Cannot See Your Own API From The Outside'
date: 2026-09-29
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Discovery
  - Agents
  - API Governance
  - Strategy
  - APIs
---
I have spent a lot of my career sitting with teams who are proud of their API, and who have no idea what it looks like from the outside. This is the single most consistent thing I have found across every company I have worked with. It is not a competence problem. The people are good at their jobs. It is a vantage point problem. You cannot stand outside your own building and look at it while you are inside it.

Everyone tests their API from inside their own advantage. You are logged in. You have a cookie. You have a browser open. You are on the corporate network, or on the VPN, or on an allowlisted IP. Your local environment has the environment variable already set. When you check that something works, you check it in the one condition where it is guaranteed to work. Then you ship, and the world arrives under completely different conditions.

Here is what that actually looks like in practice. These are the patterns I run into over and over, and I want to be clear that every one of them comes from a company doing real work, with a real product, run by people who care.

**Your robots.txt says everyone is welcome and your edge says otherwise.** The file at the root invites every crawler in. The bot protection sitting in front of the site then challenges anything that is not a browser. Both were configured by people doing the right thing. Nobody ever put the two in the same room.

**Your llms.txt points at a contract nothing can fetch.** This one is becoming common fast. A company writes a genuinely good llms.txt, does the honest thing about what their product does and does not do, and carefully points machine readers at their OpenAPI definition. That definition sits behind the same challenge. You have written directions to a door that is locked.

**Your free public API is not public.** An unauthenticated endpoint, documented as free and open, returns a bot challenge to every client that is not a browser. It works perfectly when a person clicks it. It fails for the entire audience it was built for. For an endpoint meant to be wired into somebody's automated workflow, that is the whole product.

**Your pages exist for people and are empty for machines.** A terms page and a login page that return byte-for-byte identical HTML, because both are client-rendered routes and the server sends the same shell for each. In a browser they are two different pages. To anything else they are one meaningless file.

**Your site answers yes to everything.** Every path returns 200, including paths that do not exist. This looks healthy from a monitoring dashboard. What it actually means is that nothing on the host can be trusted, because a request for a file you never created succeeds exactly like a request for one you did.

**You publish more than you declare.** This is the happiest version of the problem. A company ships a real MCP server, a status page, machine-readable pricing, and rate limit documentation, and their own index file mentions none of it. They did the work and did not take credit, because nobody told them the index was how the credit gets counted.

**Your contract describes a fraction of what you built.** The definition on your site covers twelve operations. Your API serves thirty-six. The other twenty-four are real, documented for humans, and invisible to every tool that reads the contract.

**You claim a thing that has nothing behind it.** A CLI mentioned on a page, with no install command, no package, and no repository. Somebody wrote the sentence intending to build it. The sentence outlived the intention.

None of these are lies. That is the part I want to land. Every one of them is a gap between what a company believes it publishes and what it actually serves, and the gap opened because nobody was standing outside looking in.

This is why the outside-in view is worth paying for, and it is most of why I built the [Kin Score](https://apievangelist.com/rating/) the way I did. The score reads only what is publicly reachable. It fetches what you publish the way a stranger would fetch it, with no cookie, no allowlist, and no assumption of goodwill. When a check comes back empty it is not an accusation that you failed to build something. It usually means the thing you built cannot be seen from where the market is standing.

Agents are what make this practical at scale. Profiling one company by hand takes a person a day, and that person still has to be disciplined enough to fetch the nonsense path and compare the bytes. Doing it across a catalog was never realistic before. Now the profiling and the pipeline run continuously, every claim gets checked against a fetched URL and a status code, and the result is a mirror rather than an opinion. That is the part I care about. Not a ranking. A reflection, from the position your customers and their agents actually occupy.

The good news, and I want to end here because it is the true part, is that almost everything on that list is cheap to fix. A rule at the edge. A pointer added to an index file. Regenerating a definition you already had. These are afternoons, not quarters. The expensive part was never the fix. The expensive part was not being able to see it, and that is the part somebody outside can hand you.

If you want to know how your own API reads from out here, that is what [APIs.io](https://apis.io) is for, and the rubric behind it is published in full at [apievangelist.com/rating](https://apievangelist.com/rating/). Look yourself up. The number matters less than the list of things you did not know were invisible.
