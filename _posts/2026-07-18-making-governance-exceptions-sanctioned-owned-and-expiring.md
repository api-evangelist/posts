---
published: true
layout: post
title: Making Governance Exceptions Sanctioned, Owned, and Expiring
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/making-governance-exceptions-sanctioned-owned-and-expiring.png
date: 2026-07-18
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - Waivers
  - Tools
---
I have been walking through the [governance tools I build under API Commons](https://apicommons.org/tools/) one at a time, and today I want to talk about the one that addresses the messiest part of running an actual governance program: the exception. Every real program hits a rule it cannot satisfy yet. A legacy endpoint predates your tagging standard, a deadline lands before the fix does, or someone made a deliberate deviation for a reason that was good at the time. What teams do next is where governance quietly dies, and [Governance Waivers](https://waivers.apicommons.org) is my attempt to give them a better move.

Because without a sanctioned way to say "not this one, not yet," people route around governance instead of through it. They disable the rule globally, delete the CI step, or just stop reading the report. The rule is gone, and worse, the record of why it is gone goes with it. Six months later nobody remembers whether that suppressed violation was a considered decision or an accident. A waiver is the honest alternative — a small, machine-readable record that names the rule, an optional scope, a reason, an owner, a ticket, when it was granted, and when it expires. The exception still exists, but now it is written down, attached to a person, and living on a clock.

The tool itself is browser-first and does exactly one thing well. You paste your `spectral lint -f json` output and a waivers file, and it reconciles the two. Violations get classified as waived when an active waiver covers them, live when nothing does, or expired when a waiver used to cover them but has since lapsed and the finding resurfaces on its own. The waivers get classified too — active, expiring within thirty days, expired, permanent, or stale — and that last pair is the part I care most about. A permanent waiver with no expiry is a smell. A stale waiver that no longer matches anything means the issue was actually fixed and the waiver should be deleted. The tool surfaces both instead of letting them rot.

What I love about the scope model is how precise it is. A waiver can cover a rule everywhere, only in certain files, or only under a specific path, so waiving `operation-tags` on your legacy endpoints does not quietly hide a brand-new tagging violation on `/invoices`. The exception stays as narrow as the problem it describes. And the headline the tool gives you is the effective result — the honest set of failures left after sanctioned waivers are applied, which is what your build should actually gate on. You can download that as filtered Spectral JSON and feed it straight back into your pipeline.

Like everything in this series, it is open, portable, and Spectral underneath, with nothing leaving the page — the lint results and waivers you paste never touch a server. Go [try it](https://waivers.apicommons.org), and if it tells you that half your waivers are permanent or stale, take that as the feature working. The goal was never to have zero exceptions. It was to make the exceptions you do have sanctioned, owned, and expiring, so they stay honest.
