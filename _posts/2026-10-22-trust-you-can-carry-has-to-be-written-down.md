---
published: true
layout: post
title: 'Trust You Can Carry Has To Be Written Down'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/trust-you-can-carry-has-to-be-written-down.png
date: 2026-10-22
author: Kin Lane
tags:
  - Security Sovereignty
  - Authorization
  - OAuth
  - Agents
  - Portability
  - APIs
---
Mike Goerlich at [Curity](https://apis.io/providers/curity/) published the third piece in his Security Sovereignty series today, [Who Controls Trust? How Do You Regain It?](https://curity.io/blog/who-controls-trust-how-do-you-regain-it/), and I want to respond to it, partly because he was kind enough to quote me in it and partly because I think it lands on the most important point in the whole conversation about agents.

His argument is that portability is usually understood as moving workloads: containers, replicated databases, infrastructure as code. That's useful, but it is only one layer. You can move an application perfectly and still leave behind the identities it trusts, the authority it grants, the business rules it enforces, and the trust relationships it depends on. At that point a migration problem has become a business continuity problem.

The line of mine he quoted came from our conversation about his first article: you cannot be sovereign over trust that was never made explicit. He builds on it better than I said it. "An authority boundary that exists only implicitly gives you nothing to carry with you." And: "Before trust can become portable, it must first be visible."

## Where authority actually lives

The example Mike uses is perfect. A business may know exactly where an application runs and still be unable to say where the rule lives that lets a customer cancel their own reservation but not someone else's. Some of it is in application code. Some is implied by a scope. Some lives in a gateway, some in the identity provider, some in the user interface, and a lot of it lives in the heads of the people who built the system.

I see the outside view of that every week. When we profile an API provider for [APIs.io](https://apis.io/), authorization is one of the places where the published surface tells you least. The Agent Readiness re-measure I took into Stockholm this month, across roughly 28,900 providers, found that about a third publish machine-readable auth of any kind, a quarter of the catalog hands out a static bearer secret that names nobody, and eighteen providers issue a credential bound to the agent using it. Scopes, where they exist at all, are often a handful of coarse permissions that say more about the implementation than about the business rule.

That's the visible part of the problem Mike is describing. If a provider hasn't written its authority model down in a form anyone outside can read, it almost certainly hasn't written it down in a form it could carry to another environment either.

## Writing the authority down

Mike says the harder and more valuable work is "making the organization's intent explicit: what authority should be granted, how narrowly it should be bounded, which resources it applies to, and how APIs should respond when that authority changes." I agree, and I would add that most of the containers for that intent already exist as artifacts. They just aren't being treated as the place the authority model lives.

- **[OAuth scopes](https://apis.io/scopes/)** published as data, with a description that says which business action each one permits, not just which endpoint.
- **[Security schemes](https://apis.io/security/)** in the OpenAPI contract, attached operation by operation, so the boundary is in the contract and not only in a gateway's configuration.
- **Protected resource metadata** (RFC 9728) and authorization server metadata, so a client, or an agent, can discover how to get the right authority without a human reading a docs page.
- **[Agentic access](https://apis.io/agentic-access/)** declarations, per operation: what it costs, whether it can be undone, and where a human has to approve it. This is the closest thing I've found to Mike's "rules for how authority changes when conditions deteriorate", written down before anyone needs them.
- **[Know Your Agent](https://apis.io/kya/)** attestations, so the question of who is acting is answered by facts a provider can check, while the decision to trust stays with the provider.

None of these are proprietary to a platform. They are plain documents that sit beside the API. If they exist, they move with you. If they don't, the authority lives only in the platform you're trying to leave.

## Agents make it urgent

Mike closes on the point I care most about: with agentic AI, what has to survive a move isn't just identity, it is "the meaning of the agent's authority: what it is allowed to do, which resources that authority applies to, and where its boundaries lie." And he's right that a generic admin role is a terrible substitute, because "all that really means is that excessive authority can travel with you."

Yesterday I wrote about [Mike Amundsen's axioms for autonomy](https://apievangelist.com/2026/10/21/what-a-program-needs-in-order-to-decide/), which say an autonomous program needs its environment made explicit as facts, relations and capabilities, including knowing when progress is no longer possible. Two Mikes, two very different starting points, the same conclusion. An agent can only respect a boundary it can read. An organization can only keep a boundary it has written down. Both require the authority model to stop being implicit.

That is also why I keep saying this is API governance work, not AI work. The scopes, the security schemes, the reversibility and approval rules, the metadata documents: these were always supposed to exist. The difference now is that a non-human consumer will act on whatever is there, and a change of provider will reveal whatever isn't.

## Making it measurable

The last thing I'd add to Mike's series is that this is measurable from the outside, at least in part. You can see whether a provider publishes scopes, whether its contract declares security per operation, whether it serves protected resource metadata, whether its credentials are bound or bearer, whether it says which operations need a human. Those are all checks in the [Kin Score](https://apis.io/rating/) and its agent readiness layer today. They don't tell you whether the authority model is right. They tell you whether it exists anywhere other than inside one platform and a few people's heads.

Mike's line that "an organization cannot move control if it does not know precisely what needs to move" is the one I'll be quoting back. Thanks to him and the Curity team for taking the conversation somewhere more useful than "should we leave the cloud." The answer to that question is usually no. The answer to "have we written our trust down?" is usually not yet.
