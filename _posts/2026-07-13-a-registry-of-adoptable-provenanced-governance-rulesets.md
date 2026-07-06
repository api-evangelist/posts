---
published: true
layout: post
title: A Registry of Adoptable, Provenanced Governance Rulesets
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-registry-of-adoptable-provenanced-governance-rulesets.png
date: 2026-07-13
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - Rulesets
  - Registry
  - Tools
---
I have been walking through the [governance tools I am building under API Commons](https://apicommons.org/tools/) one a day, and today's is the one that answers a question the others eventually raise. If governance is just Spectral underneath, and Spectral runs whatever ruleset you point it at, then the ruleset is the thing that actually matters — and almost nobody owns theirs. When we studied 1,005 real-world Spectral pipelines, 63% were running the linter's implicit defaults and only eight extended a shared, remote ruleset. The demand for governance is obviously there. The supply of adoptable, owned rulesets is not. [Ruleset Commons](https://rulesets.apicommons.org) is my attempt to be the supply side.

It is a curated registry of rulesets you can adopt by reference — a national government's ruleset, an industry standard, a security ruleset, or a company's public API standards — instead of silently inheriting Spectral's, Redocly's, or vacuum's built-in config. Every entry answers two questions the defaults never do. Who owns this, with a real, named owner and a URL where that ownership is documented, because a ruleset without an owner is a config, not a standard. And how do I adopt it, with a copy-paste snippet: a remote `extends` URL, an npm package, or config to paste. You adopt by reference so you inherit updates over time rather than forking a frozen copy that rots the day you save it.

The registry is honest about what is and is not a real standard. Each entry carries a `governed` flag. Governed entries are owned, provenanced standards that carry naming, ownership, and domain rules — Italy's api-oas-checker, the Netherlands API Design Rules, the OWASP security rulesets. The rest are tool defaults, honestly labeled, so `spectral:oas`, Redocly's recommended set, and vacuum's defaults sit right there in the directory too. That is on purpose. I want a team to be able to see what they are actually running today, recognize it as a default nobody signed off on, and swap it for something with an accountable owner behind it.

In the spirit of the [MCP Install](https://install.apicommons.org) client registry, the whole thing is deliberately simple: the core artifact is a single open, machine-readable data file, `rulesets.json`, and the website is just a browsable directory over it — filter by category, by artifact type, by governed-versus-default, search, and copy the adoption snippet. The seed set is mined from real ecosystem usage, including every remote ruleset we observed in the Spectral pipelines research, from the Italian and Dutch government rulesets to the single most-referenced remote ruleset in that whole corpus. The commons grows by pull request against that one file, so adding your national, industry, or company standard is a fork, an object, and a PR.

This is one of the [API Commons tools](https://apicommons.org/tools/) I am introducing one at a time this stretch, and it is the one I most want people to use, because the defaults are the problem. Go [browse the registry](https://rulesets.apicommons.org), find a ruleset with an owner you trust, and adopt it by reference — or if the ruleset you should be running does not exist yet, that is a sign you have a standard worth publishing.
