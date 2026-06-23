---
published: true
layout: post
title: "API Reviews and Provenance: Accountability Over Enforcement"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/api-reviews-and-provenance-over-enforcement.png
date: 2026-07-04
author: Kin Lane
tags:
  - API Governance
  - API Reviews
  - Provenance
  - Accountability
  - APIs
---
Here is the reframe that finally made governance work for me, after years of getting it wrong. For a long time I thought the job was to make people comply. Get the teams to follow the rules, hit the targets, do the things I asked. It isn't that, and chasing compliance directly is a great way to burn yourself out and make enemies. The job is to establish the policy, conduct the review, provide the guidance — and capture the provenance. Whether a team ultimately complies is, in a real sense, not the thing I most need to own. What I need to own is that the conversation happened, the finding was surfaced, and the decision — comply or defer — got recorded, with a timestamp and a reason.

I said it more bluntly at the time, so I'll just quote myself: I don't care all that much whether people do the exact things I ask them to. What I need is the provenance on the schema negotiations, the provenance on the API negotiations, and the provenance on the API reviews. That probably sounds cynical out of context, but it's the opposite of cynical — it's the insight that shifts governance from surveillance to accountability, and that shift is what makes the whole function survivable and effective at the same time. When the record exists, responsibility lands where it actually belongs. A team that was shown a policy finding and chose to defer it owns that choice, on the record, with their reasoning attached. I'm no longer the adversary who blocked them. I'm the registrar who documented what everyone agreed to.

There are three provenance records worth building your entire review process around. The first is schema-negotiation provenance — the record of how a schema's design got discussed and decided, which matters because, as I've said before, the schema is where the real fights happen. The second is API-negotiation provenance — the record of how the full contract got discussed and decided. The third is API-review provenance — the record of the formal review itself, its findings, and what happened to each one. Together those three give you a complete, timestamped account of how a contract came to be the way it is, and who was part of every decision along the way. That account is worth more than any compliance percentage, because it's what makes governance defensible when something goes wrong later and everyone wants to know who knew what when.

The tool I built for this once looked, from the outside, like an enforcement tool. It gave teams a form where they'd review each policy finding against their API, agree or disagree with it, and document their reasoning. But it was never really an enforcement tool. It was a provenance tool wearing an enforcement tool's clothes. Leadership wanted to invest further in it, and the reason was exactly that timestamped record of who was told what and what they decided — that's the thing that makes a governance function defensible to the rest of the business. The form wasn't there to force anyone's hand. It was there to make sure that whatever hand got played, there was a record of it.

So build for accountability, not compliance, and here's the part that surprised me: compliance tends to follow anyway. When a team knows their deferral is going on the record with their name and their reasoning attached, they make better decisions, not because they're forced to, but because the record makes the stakes legible. Run real reviews. Capture the three provenances. Make the schema negotiator, or whatever you build, about documenting decisions rather than enforcing them. You'll stop being the cop everyone resents and start being the registrar everyone relies on, and your governance will be the thing that's still standing when leadership asks the hard questions, because you'll have the receipts.
