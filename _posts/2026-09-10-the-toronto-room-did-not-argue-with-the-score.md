---
published: true
layout: post
title: 'Sharing the Kin Score in Toronto'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-toronto-room-did-not-argue-with-the-score.png
date: 2026-09-10
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Agent Readiness
  - API Governance
  - Speaking
  - APIdays
---
I gave *Agents Inherit Your Governance — Whether You Meant Them To or Not* at [APIdays Toronto](https://www.apidays.global/events/toronto) this week, the first live outing of an argument I have been assembling in the [APIs.io](https://apis.io) catalog all year. The [deck is up at talks.apievangelist.com](https://talks.apievangelist.com/2026-apidays-toronto-governance/2026-apidays-toronto-governance.html), the recording is at the bottom of this post, and I want to write down what actually happened in the room rather than what I planned to happen, because they were not the same thing.

I had built the deck around a correlation. Across all 26,755 scored providers the Kin Score composite and the Agent Readiness rating correlate at r = 0.882, and 96.7% of the catalog scores its agent readiness at or below its governance composite. The ladder is monotonic all the way down, and exactly zero of the 10,443 providers in the bottom governance band reach agent-native. That is the finding. It is the reason I keep the two instruments computed independently and never blend them — it makes the relationship between them something I measured rather than something I assumed.

The slide was up on the screen behind me the whole time and I never once said the number out loud. I went to the inverse instead: the 3.3% of providers that score their agent readiness *above* their governance composite. Those are the companies claiming to be further along on agents than their API foundation can support, and I have come to read that gap as a tell. The venue helped me make the point better than the slide did — there is a building outside with a preserved facade and nothing behind it yet, just the front wall held up with steel while the lot sits empty. That is the 3.3%. My prediction is on the record and it is falsifiable: talk to me next year or the year after and I can probably point at which of them went out of business or got quietly absorbed.

Then I walked the composite facet by facet and the readiness rating dimension by dimension, which is the part I expected to get argued with. Contract quality, developer ergonomics, access clarity, operational transparency, contract governance, discoverability, and the two conditional facets for regulatory posture and open source surface. Then nineteen readiness dimensions, ending on the ones almost nobody has: dry-run mode, a well-known catalog, machine-readable consent and bot identity. I expected pushback on the weights, on the bands, on whether any of this is measurable from the outside at all.

Nobody argued with the finding. Three of the four questions I got were about the instrument itself.

The first was practical — can I get the deck, and what are these dimensions actually called? The second was the one I want to keep thinking about: how did I decide the weight distribution? Why does contract quality carry a quarter of the composite and discoverability a tenth? I walked them through the rubric document, the 117 checks behind the composite, the points each check awards, and the fact that I version it and keep moving the numbers as I use my own API against the catalog every day.

And then somebody in the room said the thing that made the whole trip worth it:

> This is brilliant, because it's the exact opposite of what SEO was. With SEO we had to constantly guess at what the ratings were.

I have been publishing this rubric because it seemed obviously right to publish it, not because I had articulated why. That reframed it for me. Every ranking system that mattered to the web got optimized against in the dark. Publishers spent two decades reverse-engineering signals nobody would confirm, and the guessing *was* the industry. If I am going to score 28,000 API providers and hand that number to agents and buyers, then the way you move the score has to be legible, and the only thing that should move it is what you actually publish. A rubric you can read is a rubric you can satisfy honestly. That is not a loophole in the design — it is the design.

The third question was the one I get everywhere now: what is the preferred way for an agent to consume an API? MCP server, A2A, or the OpenAPI? My answer is that it depends, and I mean that literally rather than diplomatically. I use my own MCP server daily, and there are still resources where my agent skills calling the API directly beat the MCP server for the same task. I ship an API, an MCP server, a CLI, and skills, because it is a toolbox, not a winner. The same way you should have REST and event-driven and GraphQL rather than a single correct protocol. (Somebody in the room drew the line at gRPC. Fair.)

The fourth question was the one I like best, because it is the one that keeps me honest: do you score APIs.io itself? Yes. It is in the catalog with everybody else, and it is not top-rated yet, and I am still working on that. If I exempted myself from the instrument the instrument would be worth nothing.

What I took home from Toronto is that the argument I thought I was making — that agent readiness is a layer sitting on a governance foundation — is not actually contested by practitioners who run API programs. They already believe it. What they want is a defensible number, and they want to see the ruler. So the work in front of me is less about proving the finding and more about making the methodology something an API team can pick up, check my math with, and disagree with specifically.

Go look yourself up at [APIs.io](https://apis.io). Some of what I have about you is wrong, and some of it is incomplete, and that is by design — I would rather be wrong in public and have you correct me than be quietly complete and never hear from you. Corrections are free. Tell me and I will rescore you.

<style>
  .youtube-video {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto;
  border: 0;
}
</style>
<center><iframe class="youtube-video" src="https://www.youtube.com/embed/DEOnNSynA28" title="Agents Inherit Your Governance — Whether You Meant Them To or Not — APIdays Toronto 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
