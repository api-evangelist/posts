---
published: true
layout: post
title: 'Your Internal Docs Need the Same Scoring Discipline as Your Public APIs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-internal-docs-need-the-same-scoring-discipline-as-your-public-apis.png
date: 2026-08-17
author: Kin Lane
tags:
  - Agent Skills
  - Documentation
  - Governance
  - Information Architecture
  - Metadata
  - Enterprise
  - Taxonomy
---
Joyce Stack has published a set of Claude Code skills that do information-architecture analysis on a Markdown documentation corpus, and it is the most directly useful enterprise work I have seen come out of the skills format so far. The plugin is [markdown-ia-skills](https://github.com/JoyceMarieStack/markdown-ia-skills). It is three skills meant to run in sequence against a git repo or a folder of `.md` and `.mdx` files. The first one does reconnaissance and answers what exists, how it is organized, and how mature it looks. The second infers the content model that the corpus already has, without you supplying a schema, and proposes document types with required and optional metadata. The third analyzes terminology and taxonomy, and produces a canonical termbase alongside a facet design. Each one runs on `find`, `grep`, and reading files. There is no bundled script to install and nothing to send anywhere.

I care about this because the enterprise Markdown corpus is now an agent surface and almost nobody treats it as one. Every company I talk to has a docs repo, a pile of ADRs, a runbook folder, a Confluence export somebody dumped into Git, and lately a growing stack of `CLAUDE.md` files and internal skills. That content was written for humans who already knew where things were. Now agents read it, and an agent has none of the tribal context that made an unlabeled folder navigable. It cannot tell that `guides/` actually holds three policy documents. It cannot tell that "ArgoCD" and "Argo CD" are the same product. It just answers, confidently, using whichever page it landed on.

The sample report in the repo makes that concrete. Joyce ran all three skills against the Argo CD documentation, which is 456 Markdown files with over a thousand contributors, and found that zero of them use `tags`, `categories`, `labels`, `domain`, or `topic`. Every bit of classification in that corpus is implicit, carried by folder names and an `mkdocs.yml` nav file. That is not a criticism of Argo CD, and it would be the finding at most enterprises too. It is simply what a documentation corpus looks like when it grows by accretion, and it is a very different thing to hand an agent than a corpus with a content model.

What made me want to write this up is how much of the discipline overlaps with the [Kin Score](https://apievangelist.com/kin-score/) work, pointed inward instead of outward. I score what a company publishes to the world. Joyce is reading what a team wrote for itself. The mechanics of doing either one honestly turn out to be the same in four specific ways.

The first is calibrating findings by type. Her content-model skill sorts every document type into a governance artifact or reference content before it flags anything. A standard, a policy, or an ADR needs its own owner and status and review date, because its currency has to be tracked independently. A CLI reference does not, because git history already tells you whether it is current. Missing metadata on the first is a real gap. On the second it is marked N/A, at zero percent coverage, without apology. That is the same reasoning behind the conditional regulatory facet in the Kin Score, where a set of checks applies to a bank and not to a weather API. A rubric that applies every check to everything produces a number nobody trusts.

The second is refusing false positives. In the vocabulary report, a regex candidate called "Side Apply" got ruled out, because it was matching inside both "client-side apply" and "server-side apply," two distinct Kubernetes concepts being used correctly. She wrote the ruling into the report rather than quietly dropping the row. I have spent a lot of this year building exactly that muscle in the catalog, where a populated directory is not evidence a provider published anything, and a soft 200 is not evidence an API exists. A match is not a finding. Saying out loud what you ruled out is what separates an assessment from a word count.

The third is that every claim cites its evidence. The reports name file paths and occurrence counts, so 258 uses of "ArgoCD" against 3,744 uses of "Argo CD" is a number you can go rerun yourself. That is the same contract as an evidence table where every row is a URL and a status code.

The fourth is register. Both discovery skills cap themselves at roughly 400 to 600 words of prose and instruct the model to write "looks like a de facto required field" rather than "this is mandatory." That is a first pass, deliberately, and it says so. I have made the same call about the catalog, which is built for discovery rather than compilation, and refining week to week beats stalling on total precision. An informed fast read that someone acts on this afternoon is worth more than an audit that arrives next quarter.

Where the two diverge is comparison. The Kin Score exists to place a provider against its peers, in a band, inside an area, so a vendor can see what it would take to move up and a buyer can shop inside a category. Joyce's skills are single-corpus and diagnostic. There is no band and no cross-company cut, and for internal documentation that is the right call, because there is no market to place yourself in and the audience is the team that owns the content. It does raise the obvious next question of what an internal maturity band would even mean across a hundred repos in one enterprise, which is a problem I would happily spend time on.

The last thing worth noting is the packaging. Three skills that compose but each stand alone, general-purpose tools instead of a dependency, an evals file, and sample output from a real corpus you can go verify. I have written before that skills bring [real value and a fresh set of problems in the same package](https://apievangelist.com/2026/09/10/agent-skills-new-value-new-problems/). This is a good answer to the value half. If you are pointing an agent at your internal documentation, run something like this against the corpus first, because right now you are asking it to navigate a structure that only exists in your head.
