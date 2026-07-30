---
published: true
layout: post
title: Forking Is the Easy Part
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/forking-is-the-easy-part.png
date: 2026-07-30
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Rules
  - Open Source
  - API Commons
  - Specifications
---
Yesterday I announced that [I am forking Spectral](https://apievangelist.com/2026/07/29/i-am-forking-spectral/). Copying a repository took an afternoon. Today I sat down to work out how anybody actually switches to it, and that is a much harder problem than the fork.

I have written up the whole development strategy — branching, releases, package management, README, and communication — as two issues, one on each repository. They are the first issues either repository has ever had:

- **[spotlight-tools#1](https://github.com/api-commons/spotlight-tools/issues/1)** — branching, releases, package management, and how you switch.
- **[spotlight-spec#1](https://github.com/api-commons/spotlight-spec/issues/1)** — schema identity, spec versioning, the conformance suite, and how implementers get told things.

Neither is implemented. That is on purpose. I would rather be corrected before I write the release automation than after I have asked people to depend on it.

## Why most forks quietly fail

I have watched a lot of forks over sixteen years, and the ones that die rarely die of bad code. They die of a migration path nobody could walk.

The pattern is consistent. Somebody forks a stalled project for good reasons, and then spends the first three months on their own roadmap — the cleanup they always wanted, the rewrite, the thing that was annoying about upstream. Migration gets filed under documentation, to be written once the interesting work is done. Then adoption does not come, and the postmortem blames the incumbent's lock-in or the community's inertia.

The real reason is almost always simpler: switching cost a day of somebody's time and had no undo button. Nobody spends a day of unpaid work to be a supporting character in someone else's project.

So the organizing constraint on all of this, and the thing I want people to hold me to, is that **a fork nobody can switch to is worthless.** Every decision in those two issues gets graded against one question: what does an existing Spectral user have to actually do, and can they reverse it? If the answer involves rewriting CI configuration, or a one-way door, it is the wrong answer no matter how much better it is on the merits.

## The part nobody warns you about is packaging

Here is what I found when I went looking at what it would take to publish this thing.

There are **eleven npm packages** in that monorepo, all under the `@stoplight` scope. A fork cannot publish to a scope it does not own — which means this repository currently ships release automation pointed at a registry namespace it has no access to. Until that is fixed, what I announced yesterday is a source archive with a good argument attached. Not a maintained build. I should say that plainly rather than let the announcement imply otherwise.

Fixing it means a new scope, which means every consumer has to change something. Except that most of them **cannot**, and this is the part I nearly got wrong.

Most people do not depend on Spectral directly. They get `spectral-core` pulled in underneath a published ruleset, a wrapper, an editor plugin, a CI action, or an internal governance platform their company built four years ago. Those consumers have no import statement to change. If the migration guide leads with `npm install`, it is written for the minority and it is useless to everybody else. It has to lead with dependency overrides and alias installs — the mechanisms that let you swap the tarball behind a name you already reference, without touching a line of your own code, and roll back by deleting one line.

That is not a detail. That is the entire adoption story, and I would have buried it in section four if I had not gone looking.

Then the smaller archaeology, all of which someone inherits when they inherit a repository: forty-two branches carried over from upstream, upstream's `develop` default branch, and a Dockerfile still built on Node 16 — end-of-life since September 2023. Shipping a "maintained build" on an end-of-life base image on day one would be its own kind of joke.

## The thing I got wrong in the spec repo

Worth admitting publicly, because it is the most time-sensitive item in the whole effort.

When I published the ruleset format as a standalone specification, the schema identified itself with a `raw.githubusercontent.com` URL pointing at the `main` branch. I did that because it was the URL that existed.

It is wrong, and it is wrong in a way that gets more expensive every week. A `$id` is a specification's identity. That one is mutable by definition — anybody who `$ref`s it gets whatever landed most recently — on a hostname the project does not control, with somebody else's rate limits and URL conventions. And changing an `$id` later breaks every downstream reference, which means it has to be settled *before* people adopt it rather than after.

The Dutch government cites Spectral in normative text. If this format ends up cited that way, the citation cannot contain someone else's CDN hostname. That is the standard to design against, and I did not meet it on the first pass.

## Rules outlive tools, which means the promises are different

The spec repository and the CLI repository need genuinely different strategies, and conflating them is how this format got into trouble in the first place.

A CLI has users. They need install instructions, a release cadence, and a rollback path. A specification has **implementers, authors, and citers** — and that third group is the one everybody forgets. Governments, standards bodies, and procurement processes do not install anything. They point at a URL and put a version number in a document that will outlive the maintainer's interest in the project.

What you owe a citer is not features. It is a stable identity that never moves, a versioning policy that never invalidates a document that used to validate, and an honest answer about governance. Good intentions do not survive a change of maintainer. A written stability policy does.

Which is also why the [conformance suite](https://github.com/api-commons/spotlight-spec/issues/1) belongs with the specification rather than with the linter. A test suite that lives inside an implementation measures that implementation. A suite that lives with the format defines the format — and it makes compatibility claims falsifiable by anyone, including claims I make about my own CLI. That is a gift to [vacuum](https://github.com/daveshanley/vacuum) and to whoever implements this next, not a weapon against them. If it makes my own tool look bad in public, it is working.

## Over-communicating on purpose

The failure I am responding to was never really technical. Spectral's code is good. What broke was communication: 241 open issues nobody answered, a fourteen-month release gap nobody explained, a supply-chain report that got one follow-up question and no reply.

You do not fix that with better code. You fix it with a schedule.

So there is now [a blog on spotlight-rules.com](https://spotlight-rules.com/blog/) with [an RSS feed](https://spotlight-rules.com/feed.xml), and a commitment to a public status note weekly for the first eight weeks, then monthly. Deliberately mundane content: what merged, what was triaged, what is blocked, what I got wrong. Eight weeks because it is long enough that the burst-of-energy-then-silence pattern would be visible if it happens — which is the point of naming the number in advance rather than after.

There will also be a monthly triage log. The metric I used to make the case against upstream was issues *closed*. It would be absurd not to publish my own version of that number, including when it is bad.

One more thing I want to be careful about, because overclaiming is how this all gets waved away: **upstream published 6.16.2 ten days ago.** It ships dependency bumps. It is not abandoned in the sense that nobody is there. The argument here is not that they are gone — it is predictability, and predictability is something you earn with a published calendar, not something you assert in a README.

Go [argue with the plan](https://github.com/orgs/api-commons/discussions/28). The most useful thing you can tell me is not whether you like the fork. It is what would have to be true before you would point a production pipeline at it.
