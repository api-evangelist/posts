---
published: true
layout: post
title: Bringing Legacy Standards Into the Modern API Age
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/bringing-legacy-standards-into-the-modern-api-age.png
date: 2026-07-04
author: Kin Lane
tags:
  - Standards
  - Governance
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - Arazzo
  - Discovery
  - Onboarding
  - Agents
  - AI
---
A lot of the standards that quietly run our world were written before the API era. They are thorough, hard-won, and often decades deep, but they live as PDFs, XML schemas, and prose test scripts. The knowledge is all there, it is just locked in a form that a modern developer, a CI pipeline, or an AI agent cannot pick up and run with. The gap between how good these standards are and how hard they are to actually implement is where I keep getting pulled in, and it is some of the most rewarding work I do.

The instinct when a standard feels dated is to rewrite it. That is almost always the wrong move. A mature standard represents years of consensus, edge cases, and interoperability testing that you do not want to throw away. The work is not reinvention, it is re-expression. You take what the standard already says and render it as machine-readable artifacts that today's tooling and today's developers expect, while keeping a clean thread back to the normative source so nothing forks and nothing gets lost in translation.

In practice, that means turning a document-based specification into a living API program:

- **Machine-readable specifications** in OpenAPI, AsyncAPI, and JSON Schema, each mapped back to the normative source so the modern view is a lens over the standard, not a competing copy of it.
- **A migration path** from whatever the standard uses today, whether that is XML, a bespoke message format, or a 400-page guide, into JSON and modern schema, so existing implementers are never stranded.
- **Executable conformance** that turns prose test scripts into runnable workflows with Arazzo, so certification becomes a pipeline instead of a lab engagement measured in weeks.
- **Profiles as overlays** so regional, national, and vendor variations become small, reviewable diffs on a single base spec instead of separately published documents that drift apart.
- **The onboarding layer standards almost always skip**, meaning a real developer portal, a sandbox, getting-started guides, and self-serve credentials, so an implementer can go from zero to a working call without a sales call.
- **Agent-native surfaces**, the machine-readable onboarding, MCP, and agent skills that let AI copilots discover, understand, and drive the standard directly.

That last point is where the ground is shifting fastest. Standards bodies spent the last decade worrying about whether developers could find and adopt their work. The next decade is about whether an agent can. If your specification only exists as a PDF and a schema dump, a human has to translate it before anything can use it, and that human is now competing with a machine that expects to read `llms.txt`, follow a well-known onboarding descriptor, and call an MCP server. The standards that get implemented will be the ones that are legible to both audiences at once, and that legibility is something you design in, not something you bolt on later.

None of this replaces the working group, the governance process, or the hard-earned expertise behind a standard. It amplifies it. The goal is to lower the cost of a correct implementation so far that adoption stops being a barrier, so that the careful work already done in the specification actually reaches the terminals, the systems, and now the agents that depend on it. If you steward a standard that feels stuck in an older format and you want it to be something developers and machines can pick up and run with, this is exactly the kind of modernization I love to help with, and it is one of the [standards services](/services/discovery/standards/) I offer. It is the same discipline I have practiced as API Evangelist for over fifteen years, now pointed at the specifications that everything else quietly runs on.
