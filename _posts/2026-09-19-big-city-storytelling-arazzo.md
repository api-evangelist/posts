---
published: true
layout: post
title: 'Big City Storytelling: Arazzo'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/big-city-storytelling-arazzo.png
date: 2026-09-19
author: Kin Lane
tags:
  - Storytelling
  - Narratives
  - Arazzo
  - Workflows
  - Enterprise
  - Government
  - Regulation
  - Kin Score
  - Agent Readiness
  - APIs.io
  - APIs
---
I said in my [frontier storytelling](https://apievangelist.com/2026/09/19/frontier-storytelling/) post that the moving parts I was cataloging there were not the ones enterprises need to hear. This is the other post. I am calling it big city storytelling because that is what it feels like — the audience is bigger, older, regulated, slower to move, and has heard a lot of pitches. They are listening in on the frontier stories. They are not able to act on them.

I have been in a steady rotation of conversations with large enterprises and government agencies this year — insurance, financial data, automotive, and a couple of European governments. I am not going to name anybody. What I want to pull out is the storytelling, because the fingerprints are completely different from the frontier, and I keep watching good specifications fail to land in these rooms for reasons that have nothing to do with the specification.

Let me use [Arazzo](https://spec.openapis.org/arazzo/latest.html) as the worked example, because it is the specification I most want to land in these rooms and the one I have watched fail to land most often.

**Do not open with a manifesto. Open with a mandate.** On the frontier a manifesto gets the juice flowing. In the big city it reads as an unfunded worldview. The single most effective sentence anybody said to me about a specification this year came from a government team who told me their API design rules sit on the national list of mandatory standards. That is not vision. That is a line item somebody has to comply with, with a name attached to it. Arazzo's enterprise story does not start with "workflows are the next layer of the stack." It starts with "this is the artifact your audit is already asking for, in a shape you do not currently have."

**Do not move something forward. Write down something they are already doing.** The frontier move is to take the thing everybody is half-doing and declare you have finished it. The big city version is quieter and much easier to sell: the enterprises I talk to are already running multi-step workflows. Every one of them. Those workflows live in a runbook, in Confluence, in a fifty-page group standards document that arrived from a parent company and that nobody has time to read, and — most often — in the head of one program manager who is the only person who knows why step four exists. Arazzo's real pitch to this audience is not new capability. It is transcription. You already run this. Here is where you write it down so it survives the person leaving.

**Do not fix a major problem of the past. Name the cost they are already carrying.** The frontier fixes hallucination. The big city problem is much more boring and much more expensive: the thing that gets lost in translation. A customer need goes in one end, passes through a program manager who was hired as a product manager, comes out as an API somebody designed in a hurry, and lands on the sales and support teams who have to live with it for a decade. One product person I talk to describes what he is chasing as *coherence* — that everything from the company's strategic objectives down to the job a single team is doing this sprint stays connected and still means the same thing at the bottom. I have been sitting with that word for months. Arazzo is the only artifact I have that is coherence-shaped. It is the one file where the business outcome and the sequence of API calls that deliver it are in the same document.

**Bind your story to an obligation, not a need.** The frontier binds itself to automation workflows because nobody has to be sold on the need. That does not work here, because in a regulated industry need does not release budget — obligation does. How did the money move. How was consent collected, and by whom. Who approved this, in what window, and what happened when they did not answer in time. Those are questions with legal deadlines attached. A workflow description is an evidence artifact that happens to have an execution engine bolted to it, and if you lead with the execution engine you have led with the half they did not ask for.

**New acronyms are a liability, not a substrate.** On the frontier, inventing RLCD gives your story something to grow in. In the big city every new acronym is one more line in an architecture review and one more thing a security team has to learn how to say no to. When the community voted on a name for the Spectral fork this summer, the Europeans in the room asked for literal and boring, and they were right. Arazzo is a beautiful word and the wrong word for this audience, and it is not going to change — so in these rooms you say "workflow description" first and Arazzo second.

**Do not butter them up with new phrases. Use the words already in their control framework.** Gate. Change record. Runbook. Four eyes. Segregation of duties. Escalation path. Approval window. Evidence. This is why [the actor-in-the-loop work](https://apievangelist.com/2026/09/17/arazzo-wants-to-pause-a-workflow-and-wait-for-you/) is the most enterprise-legible thing in the Arazzo queue — `timeout`, `onTimeout`, `onCancel`, a primary approver and an escalation step with a shorter window — because every one of those maps onto a control that already exists in their framework and already has an owner.

**Do not offer a new paradigm. Offer one more file in the pipeline they already have.** Every large enterprise I talk to has a can't-go-to-prod gate wired into their build. The vendor sitting in that seat got there years ago by doing one narrow thing at the gate, every time, and developers complained about it constantly and it is still in there. That is the shape of durable enterprise adoption. It is also why I have now heard some version of "we cannot take on another agent gateway" from more than one enterprise this year — they are not shopping for a new runtime, a new control plane, or a new layer of anything. Arazzo's shortest path into a regulated enterprise is as another file the gate reads.

**Bring in economics, but not token economics.** The frontier talks cost per million tokens and end-to-end latency in milliseconds. The big city is counting something else entirely: the cost of running two platforms in parallel through a customer migration you do not control, the six months it takes to get commercials sorted before anything ships, and the cost of supporting this thing for the next ten years. If your story does not survive contact with a ten-year support window, it is a frontier story wearing a suit.

**Speed is not the pitch. Approval speed is.** Nobody in a regulated organization is asking for their API to go faster. They are asking for the review to go faster. I ran 260 API design reviews in my last enterprise governance role, and maybe fifteen teams showed up having actually read the guidelines. The rest arrived two weeks before a release date wanting to get through. Any story that shortens that path — that turns a review into something a machine can check before a human ever opens it — is the story this audience buys.

**And build confidence with evidence, which here means a conformance report.** The frontier publishes a comparison table and a benchmark. The big city wants to know that two independent implementations of this thing agree with each other, and right now, for Arazzo, [nobody has checked](https://apievangelist.com/2026/09/23/two-arazzo-runners-should-agree-and-nobody-has-checked/). That is the gap. Not features. Agreement.

## Where Arazzo Actually Stands, Measured

I am not going to tell this story without the numbers, because the numbers are the uncomfortable part and they are also the whole point.

Across the [apis.io](https://apis.io) catalog there are currently 27,300+ providers and 141,000+ APIs, and [5,245 Arazzo workflow descriptions](https://apis.io/arazzo/) spread across 565 providers. That sounds like adoption. It is not. Every single one of those documents is hosted in a repository I maintain — 4,797 in the individual provider repositories, 255 cross-provider — and not one of the 27,300 providers publishes an Arazzo description at their own domain. What is in the catalog is transcription I did from their OpenAPI, not a workflow anybody chose to write down.

So the real-world adoption number for the enterprise workflow specification is, for practical purposes, zero. That is not a knock on Arazzo. It is the measurement, and it is exactly the gap that big city storytelling has to close — because the audience that most needs a workflow description is the audience least likely to adopt one on the strength of a good story.

## Which Kin Score Facets Actually Move

When I want to know whether there is anything underneath a story, I go to the [Kin Score](https://apis.io/rating/). For a workflow specification aimed at regulated enterprises, these are the facets that carry the weight in the composite:

- **[Contract Quality](https://apis.io/rating/facets/contract-quality/) at 25%** — the heaviest facet in the model, and the one an Arazzo document speaks to directly. A single OpenAPI describes operations. It cannot carry the truth that operation three only makes sense after operations one and two, which is most of what an enterprise integration actually is.
- **[Contract Governance](https://apis.io/rating/facets/contract-governance/) at 12%** — with an honest caveat I put in the rubric itself: this facet reads what a ruleset *declares*, not the result of running it. Outcome-based linting is a different artifact class and is not in this release. Say that out loud in an enterprise room and you will be believed about everything else.
- **[Developer Ergonomics](https://apis.io/rating/facets/developer-ergonomics/) at 20%** — because onboarding in these organizations is never one endpoint. It is a sequence, and the sequence is the part nobody documents.
- **[Operational Transparency](https://apis.io/rating/facets/operational-transparency/) at 13%** — rate limits, status, change log, deprecation.
- **[Regulatory Posture](https://apis.io/rating/facets/regulatory/) at 15%, conditional** — it only applies to providers in a regulated industry, which is to say it applies to exactly this audience and to nobody on the frontier. Consent-scoped authorization, a published security and disclosure posture, and evidence of conformance to the industry's data standard.

## And Which Agent Readiness Dimensions

[Agent readiness](https://apis.io/rating/) is standalone in my rubric — its own score, its own band, 139 points, deliberately not folded into the composite. For workflows, the dimensions that matter are the ones about consequence, and this is where the enterprise conversation and the agent conversation turn out to be the same conversation:

- **[Machine-Readable Contract](https://apis.io/rating/dimensions/spec-presence/), 18 points** — the largest single award in the model, and the precondition for everything else. No spec, no surface to drive.
- **[Agentic Access Contract](https://apis.io/rating/dimensions/agentic-access/), 10 points** — classifying each operation by action class, consequence, and human-in-the-loop escalation. Arazzo carries the sequence; this carries what each step costs you if it goes wrong.
- **[Idempotency](https://apis.io/rating/dimensions/idempotency/), 9 points** — a workflow is a machine for firing a step twice.
- **[Documented Reversibility](https://apis.io/rating/dimensions/reversibility-documented/), 6 points** — what can be undone, how, and within what window. A cancel path with no stated window is a policy sentence, not a capability.
- **[Dry-Run / Simulate Mode](https://apis.io/rating/dimensions/dry-run-mode/), 4 points** — rehearsal before execution, which is the thing a change advisory board has wanted from software for thirty years and has never been given.
- **[Delegated User Identity](https://apis.io/rating/dimensions/delegated-identity/), 6 points and [Consent & Bot Identity](https://apis.io/rating/dimensions/consent-identity/), 3 points** — on whose behalf, with whose permission.

Dry-run, reversibility, and idempotency are the three that separate a workflow description you would let an agent execute from one you would only let it read. They are also, word for word, the controls a regulated enterprise already has on its change process. The agentic era did not invent the requirement. It just made it load-bearing at machine speed.

Next up, the other half of this: the same big city storytelling breakdown for Spectral rules, which as of this week are called [OpenLint](https://apievangelist.com/2026/09/19/big-city-storytelling-openlint/).
