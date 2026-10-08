---
published: true
layout: post
title: 'An Overlay Is a Layer, Not a Diff'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/an-overlay-is-a-layer-not-a-diff.png
date: 2026-10-08
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Specifications
  - Governance
  - Agents
  - APIs
---
There is a good argument going on in the OpenAPI Overlay repository this week, and I want to take part in it properly rather than with a thumbs-up. [Discussion #412, "Overlays: Our purpose is for understanding change,"](https://github.com/OAI/Overlay-Specification/discussions/412) makes the case that the Overlay Specification's stated purpose, *"to repeatably apply transformations to one or many OpenAPI descriptions,"* undersells it. The author's point is that if all you want is a repeatable transformation, a script is extensible, testable and well understood, and does the job better. The real value of an Overlay, he argues, is that it *communicates* a change to an OpenAPI document in a small vocabulary people can understand. So Overlays should be positioned as change sets.

It grew out of a narrower thread, [#132](https://github.com/OAI/Overlay-Specification/discussions/132), about conditional updates and an `add` operator. That is where this gets concrete, so it is where I want to start.

## Two operators hiding in one word

The proposal in #412 is an `add` that applies only if its target selects nothing, and **fails** if the target already exists. The example is a `Pet` schema: an `update` that sets `name` could be an addition or a replacement and you can't tell from the overlay alone, while an `add` would make the intent unambiguous and refuse to apply if `name` were already there.

Read #132 from the top, though, and `add` meant something else. Lorna Mitchell opened it wanting to "add missing error responses, but not overwrite any that are already defined." Henry Andrews framed it as an operator that "only takes effect if nothing is present at the target," which "would allow implementing document-wide default values." Hanna Kosova showed that much of this already works with JSONPath filter selectors. That is **add-if-absent**: apply when there's nothing there, and do nothing when there is.

Those are two different operators. One is a default and the other is an assertion. The difference matters enormously to me, because of what my overlays are for.

## What I actually use Overlays for

I keep a catalog of public APIs, and Overlays are how I add to provider contracts I don't own, without forking them. I counted this morning:

- **28,652** Overlay documents across **3,776** providers.
- **185,707** `update` actions and **91** `remove` actions. That is 99.95% additive.
- **16,049** of them do one job: attach conversational phrasing to each operation, the questions people ask an assistant and the instructions they give an agent, as an `x-apievangelist-phrasing` extension.
- The rest record provenance, add runtime semantics, fix contracts that a gateway mangled on export, and put back operations an export stripped.
- Every one of them still declares `overlay: 1.0.0`. I have some upgrading of my own to do.

Every one of those has to survive the provider regenerating their OpenAPI next week. That is the property I keep coming back to in everything I write about Overlays: [an overlay is a correction you can re-apply](https://apievangelist.com/2026/08/20/openapi-overlays-for-brownfield-correction/), [an intent rather than a snapshot](https://apievangelist.com/2026/07/18/openapi-overlays-for-separation-of-concerns/), [a policy, with the spec just the thing you happen to be pointing it at today](https://apievangelist.com/2026/07/27/openapi-overlays-for-batch-and-reusable-modifications/).

Now take the brownfield case. A gateway strips three operations from a provider's published spec, and my overlay adds them back. Six weeks later the provider fixes their export, and the operations are there. With **add-if-absent**, my overlay quietly becomes a no-op, which is exactly right. With **assert-absent**, every pipeline that re-applies my overlay breaks the day the provider does the right thing. The upstream catching up should be good news, not an outage.

## Where I land

I don't think the choice is change set *or* transformation. The purpose of the spec is right there in the name: **Over-lays.** You lay something over a document that stays as it is underneath. **An overlay is a layer.** It is not a script, because its intent is declared in a vocabulary anyone can review, sitting next to the document instead of inside a program. And it is not a diff, because it is written against whatever the provider publishes rather than welded to two snapshots. One target like "every operation that doesn't already describe a 401" is a statement about the shape of an API, and it keeps being true, or being applied, as the API changes underneath it. A diff can only describe what was different once. It's what you lay over a contract you don't control to say what you need it to say.

So, on the specifics:

- **Add-if-absent belongs in the document.** It keeps the property #412's own notes point out: today's actions can no-op but never fail, so an overlay is always safe to re-run.
- **Assert-absent belongs in the tool.** As Vincent Biret put it in #132, failing on conflict mixes "the shape of the update" with "the behaviour of the tool." A strict or report mode that tells you "this `add` was a no-op because `name` already exists" gives the change-communication benefit without a new failure model in the spec. Arguably it is *better* communication, because it tells you something changed upstream.
- **Don't rewrite the purpose statement — bound it instead.** OpenAPI got where it is by solving problems nobody listed at the start. Rather than a new definition, name what Overlays will never do (no logic, no string interpolation, nothing a vendor couldn't implement in an afternoon) and treat everything inside that line as fair game.
- **The five characteristics of a good change format** in #412 (complete, well-defined, nuanced, understandable, concise) are excellent authoring guidance for Overlays today, and they belong on the learn site with worked examples. But they are also the start of something else.

## Change deserves its own specification

Describing change between two OpenAPI descriptions is a real need, and I don't want to see it squeezed into a spec built to be a layer. It should be its own. I'd sign on today to an OAI special interest group for something like **OverDiffs**, or **OverChange**: a standard format for what changed between two OpenAPI descriptions, and why. Complete, well-defined, nuanced, understandable and concise would be a fine first draft of its charter.

And I'd implement it. APIs.io already [compares providers side by side](https://apis.io/developer/api/synthesis#compare-providers-side-by-side-pro) and reports what has changed across the catalog since a given date. Right now those answers come back in a shape I invented. A standard change format is exactly what they should return, and I'd rather adopt one the community agreed on than keep my own. Overlays for layering, a change spec for change, and Arazzo for sequence would fit together better than any one of them stretched to cover the others.

## The part #412 gets exactly right

The thread is right about one thing that is bigger than `add`: our community does need to get better at explaining API change. I keep saying that an overlay without descriptions is a diff with no commit message. Most of the overlays in the wild, and most of mine, say *what* changed but not *why*. If Overlays are going to carry understanding, the place to start is `description` on every action, and conventions for recording who made a change and for what reason. That needs no new operator. It needs people writing overlays like someone is going to read them.

And the reason to keep the specification small isn't purity, it's adoption. Overlays work because nearly every OpenAPI tool can support them cheaply. Every new failure mode is a cost every one of those tools has to pay. A layer that stays simple enough to be everywhere is worth more to me than a richer one that isn't.

I'll be adding these thoughts to the discussion, along with real overlays from the catalog as test cases for both versions of `add`. If you write overlays, especially against documents you don't own, go and read #412 and say how you use them. This is the kind of decision that's easier to get right with more people who depend on the answer.
