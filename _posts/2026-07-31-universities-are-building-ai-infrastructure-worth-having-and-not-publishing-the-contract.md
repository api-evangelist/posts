---
published: true
layout: post
title: Universities Are Building AI Infrastructure Worth Having and Not Publishing the Contract
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/universities-are-building-ai-infrastructure-worth-having-and-not-publishing-the-contract.png
date: 2026-07-31
author: Kin Lane
tags:
  - Higher Education
  - Artificial Intelligence
  - Agent Readiness
  - Kin Score
  - Governance
  - OpenAPI
  - Discovery
  - ZotGPT
---
I went looking at universities this summer to refresh my understanding of where higher education stood with APIs in 2026, but also with AI. I've long tuned into, engaged with, and reported upon the state of APIs at the university level, but AI was new for me.

API Evangelist spends most of its time profiling companies that sell APIs (and now AI), and the working assumption going in was that higher education would be a story about software procurement — schools signing enterprise agreements, rolling out a vendor's chatbot, and calling it a strategy. And some of it is exactly that. But the most instructive infrastructure story API Evangelist has profiled this year came out of a public university, and it did not come from my half of the research. It came from [Emily Barton](https://www.linkedin.com/in/emily-i-barton/), who spent the summer with me researching how universities are actually adopting AI while I worked the New York schools, and who turned up UC Irvine's platform and brought it to me. She has written [her own essay](/2026/07/31/professors-became-the-ai-police/) about what she found, and it is about a part of this I am not qualified to write. I am publishing it alongside mine.

My argument is this: universities are finally building infrastructure worth having, and they are still not realizing the value of their API contracts. I'm seeing some take control over their AI investments, but not fully investing in the contract for their API foundation, which will further determine the success of their AI (and other) initiatives.

## Uneven distribution of APIs across higher education

API Evangelist has profiled the API surface of [254 of the world's universities](https://providers.apievangelist.com/universities/). That profiling turned up **2,235 APIs**, which sounds like a healthy number — an average of 8.8 per institution — until you look at how they are distributed and what they actually are.

Start with the distribution, because the average is lying to you. Eleven of these institutions publish nothing at all. And the heavy publishers are not the American brand names you would guess: the [University of Groningen](https://providers.apievangelist.com/providers/university-of-groningen/) leads with 75, then [IIT Kanpur](https://providers.apievangelist.com/providers/iit-kanpur/) at 64, [RWTH Aachen](https://providers.apievangelist.com/providers/rwth-aachen-university/) at 49, [Al-Farabi Kazakh National](https://providers.apievangelist.com/providers/al-farabi-kazakh-national-university/) at 47, and [KU Leuven](https://providers.apievangelist.com/providers/ku-leuven/) at 41. European public research universities are out-publishing the schools with the largest endowments on earth, which tells you this is not a resource question. It is a posture question.

Then look at what the APIs are. The overwhelming majority of these institutions expose an API for exactly one reason: the library runs an institutional repository, and that repository speaks OAI-PMH. Only a small fraction run anything resembling a modern developer program — a portal, OAuth, a gateway, an open data API. Read the tag distribution and the story tells itself: Repository and OAI-PMH at the top, then Research, Metadata, Open Access, Open Data, Library, Research Data — and only then, well down the list, REST, which is the first tag on it that means what most people mean when they say API.

So the typical API at a top university is not a developer product. It is a metadata harvesting endpoint that came bundled with [DSpace](https://dspace.org/) or [EPrints](https://www.eprints.org/uk/) or [Figshare](https://providers.apievangelist.com/providers/figshare/) or [Dataverse](https://guides.dataverse.org/en/latest/api/) or [Pure](https://www.elsevier.com/products/pure), exposing the institution's research output to anyone who knows to ask. That is genuinely valuable. It is machine-readable, standards-based, and open. It is also almost never documented, versioned, or framed as something a person could build on, let alone thought about alongside the AI investment that is occurring.

A Fortune 1000 company usually has the developer program and is missing the open data. The world's best universities have the open data and are missing the front door. The plumbing went into the walls two decades ago and few have put a faucet on it at all.

Hold onto one exception, because it pays off later. The handful of schools running a genuine developer surface rather than a harvesting endpoint — [UCL](https://providers.apievangelist.com/providers/ucl/), [Penn](https://providers.apievangelist.com/providers/university-of-pennsylvania/), [Berkeley](https://providers.apievangelist.com/providers/ucb/) — got there deliberately, and in the first two cases students built it. UCL publishes Room Bookings, Timetable, Search, Workspaces, and Resources endpoints behind a proper OAuth flow, built largely by and for students. Penn has an OpenData API, official SDKs in Python and Node, a Penn Courses API, and a Penn Course Review API, most of it grown out of student developer culture. It exists. It just isn't evenly distributed.

## Two schools revealing two very different approaches

As the focus of my summer AI research I profiled NYU and Columbia against each other deliberately — same city, same type of private research university — two tales I think reflect the wider AI discussion we are all having inside and outside of academia.

NYU buys and rebrands. Its central AI stack is Google-anchored, with Microsoft and Adobe around the edges. There is no institution-built platform, no institution-controlled model endpoint beyond a not-yet-public pilot, and no developer or agent surface that is not a vendor's. Its Masters and PhD programs are structurally unchanged by the generative AI wave; AI is taught inside the CS and data science degrees that already existed.

[Columbia](https://providers.apievangelist.com/providers/columbia/) buys and builds. It licenses ChatGPT Edu, Claude for Education, and Gemini — a deliberate multi-vendor hedge — and then wraps all three in its own self-hosted platform, keeping the control plane and the data in-house. It created a new MS in Artificial Intelligence and a new AI minor. It runs a cross-school course on AI in context.

Here is the part that makes the comparison useful. The research compute track at the two schools is nearly identical. Both run serious in-house GPU clusters for faculty research; neither depends on a vendor for research-grade compute. Which means the entire meaningful variation between these two institutions sits in what they hand the community to use and whether or not they changed the curriculum. That is where a university's AI strategy actually shows, and it is the layer everyone talks about least.

Whatever approach an institution takes, it is also teaching that approach. A school that keeps several vendors in play and builds its own tooling is demonstrating that these systems are things you can open up, evaluate, and choose between. A school that pipes everyone into one vendor's suite is demonstrating that AI is weather — something that arrives from a company and that you adapt to. Students absorb the shape of the thing they are handed far more reliably than the policy language wrapped around it.

## What owning AI looks like within an enterprise

Emily's research led me to UC Irvine, which has the clearest implementation of the build approach I found anywhere, and which I [wrote up at length](https://apievangelist.com/2026/07/28/zotgpt-what-it-looks-like-when-a-university-owns-its-ai-infrastructure/) in preparation for this post.

UCI decided in late 2023 that the interesting question was not which AI vendor to standardize on, but whether standardizing on a vendor was the right shape of decision at all. They concluded it was not. What they built instead is a campus-owned control plane sitting between fifty thousand people and a churning market of model vendors, holding the four positions that matter — identity, policy, routing, and budget — and letting the models underneath change as often as the market changes them.

The mechanism is a gateway built on an existing specification, which means UCI inherited a client ecosystem instead of maintaining SDKs. You sign in with campus identity, mint a virtual key, and route by naming a campus provider alias rather than a vendor. A UCI developer never holds a vendor credential and never names a vendor account in application code. The university holds the contracts, the keys, and the spend behind that alias, which means it can renegotiate, move a workload between clouds, or add a provider that did not exist last quarter without a line of campus application code changing.

It worked. Student users went from four thousand to eleven thousand during the trust-building phase, one quarter recorded over a hundred thousand messages, and the platform is past twenty thousand unique users and a hundred and forty-five thousand logins. Staff have built over a thousand custom bots, displacing third-party chatbot products that ran upwards of ten thousand dollars each. If you want a single metric for whether AI governance is real, it is not policy coverage — it is displacement, and UCI is the only school in this research that can show any.

## Making sure to prepare for what is next

Here is where I put on my API Evangelist hat, and begin applying what I call my ["Kin Score"](https://github.com/api-evangelist/kin-score), assessing the API foundation UCI built, and its readiness for where AI is headed.

When API Evangelist ran the full enrichment pipeline against [ZotGPT](https://providers.apievangelist.com/providers/zotgpt/), the human-facing documentation came back rich and the machine-facing surface came back empty.

The complete inventory of what a machine can discover about UC Irvine's AI platform without credentials: no OpenAPI at any of the usual paths on any host; no `.well-known` surface of any kind, which means no `security.txt`, no `api-catalog`, and no OIDC discovery document; no `llms.txt`; no agent card; no MCP server; no status page, no error catalog, and no machine-readable model catalog. The one anonymously retrievable machine-readable descriptor in the entire estate is the campus identity provider's SAML metadata, which describes identity, not AI.

I initially filed all of that as an [API hygiene problem](https://apievangelist.com/2026/07/30/i-rebuilt-their-openapi-from-nine-web-pages-just-publish-it/). Publishing an OpenAPI is an afternoon. Turning on the API Management export is a checkbox. An `llms.txt` is a text file. This stuff isn't that hard to do, but it tends to be introduced as part of a larger strategy.

So, the larger read is this. Undocumented infrastructure is infrastructure only its owners can use. Not other humans or other agents.

UC Irvine built a campus utility and published no map of it. Twenty thousand people can consume ZotGPT through a chat box. Almost none of them can build on it, because building requires knowing what is there — which models are routable this quarter, what the operations are, what the errors mean, what the contract is. All of it exists. It lives in prose on portal pages, for humans to read one page at a time. The model catalog, the single most volatile thing on the platform, changes every few months and is published as a web page.

This is a governance gap, and it is also something more. A university that owns its AI infrastructure and does not publish a contract for it has not distributed capacity to its community. It has concentrated capacity in the team that built it. The people in central IT can build anything. Everyone else gets a text box.

UCI's own access tiers continue to paint the picture. The gateway's free tier serves faculty, staff, and graduate students. Undergraduates need a sponsoring principal investigator. The largest constituency on that campus — the one the platform's adoption numbers are built on — has the least programmatic access to the thing built on its behalf. They can chat with it. They cannot call it without an adult signing for them.

And their agents will be next — faculty, staff, graduate students, and undergraduates alike.

## Governance that exists, and does not represent

I score APIs to understand how humans and agents can onboard and put digital resources to work. I also do it because governing that onboarding at scale is impossible without it.

Enterprises, whether higher education or otherwise, need to have well-defined APIs that are documented as machine-readable contracts to support what consumers will need, and they should have AI-readiness in the form of `llms.txt`, `.well-known` artifacts, and other elements to support human and agentic users, but also because this is the ONLY way we will be able to govern what is occurring at scale across platforms.

I know that the UC system, as well as Columbia, NYU, and other universities, have established AI governance programs. But being able to define, see, observe, and trace the inputs and outputs of our AI systems — and the underlying systems they depend on for information — in an automated way is how governance will actually play out on the ground across enterprises and the markets they operate within.

It is worth looking at who is in the room for that governance. The University of California has had an AI Council since 2021, and describes itself as the first university in the nation to adopt recommendations guiding the ethical development and implementation of AI. It publishes Responsible AI Principles, a risk assessment guide, legal guidance, training, and a systemwide glossary. That is real machinery, stood up early, and most sectors have nothing like it. Then read the roster. The council is co-chaired by the systemwide Senior Vice President for Ethics, Compliance and Audit Services and by a professor of radiological sciences. Its subcommittee chairs are a chief procurement officer, a deputy CIO, a senior campus counsel who is also a campus privacy officer, and an associate vice provost. The senior advisors are the systemwide CIO and two compliance directors. The published roster names no student seat, no Academic Senate seat, and no labor seat. Member titles are not published for the full list and several members are clearly faculty, so this is not a claim that no academic voice is present. It is a narrower one: the body governing AI for a ten-campus system is chaired and staffed as a risk function. Compliance, audit, procurement, privacy, legal, IT. Those are the right people to ask whether a deployment is safe. They are not the people to ask whether it is wanted.

That distinction is the one the sector keeps missing. UC did not fail to build governance. It built governance as risk management rather than governance as representation. One asks whether the institution is exposed. The other asks whether the institution's community has agreed, in this moment, and over time.

And this is not one roster I happened to pull. Emily's research surfaced the number that generalizes it: in an AAUP survey spanning two hundred campuses, **71 percent of respondents reported that AI initiatives are led by administrators who implement policy into teaching and research without meaningful input from faculty or students.** I found a single council with no student seat on it. She found the pattern that council belongs to.

Owning your AI infrastructure is an important step in governing AI and doing it well at the higher education level, but it is something that will depend on the governing of API infrastructure beneath and around this investment, and the actual usage of these resources by administrators, faculty, students, and partners. This is what I measure with my Kin Score, and have been studying for the last decade, and I am looking to help enterprises, as well as higher education institutions, understand this as they shape the future workforce that will continue to shape markets.

## What I learned from Emily

My AI research is built upon my existing API work, as well as the research I did into NYU and Columbia, but the trajectory of my narrative radically shifted because of what I learned from [Emily](https://www.linkedin.com/in/emily-i-barton/).

She found the platform this essay is built on. ZotGPT came out of her half of the research, looking at schools near her, not out of mine. The best infrastructure story API Evangelist profiled this year arrived from an intern researching California while I worked New York.

The receiving end is a different vantage than the control plane. I can tell you whether an institution holds the position that matters. I cannot tell you what it feels like to be handed the result and graded on how you use it. That gap is most of why this collaboration produced anything, and it is why [her essay](/2026/07/31/professors-became-the-ai-police/) is not a subset of mine.

Students are already reasoning about this more carefully than the policies assume. Her research turned up a Beloit College class that drafted its own AI code of conduct and concluded they would use AI to survey existing scholarship but not to generate submitted text — a line more precise than most institutional policies draw. LMU students in her notes distinguish between AI decoding a reading for them and turning in AI output as their own. These are not people who need to be managed. They need to be consulted, and the version of consultation I know how to argue for is publishing the contract so they can build.

Detection is the buy-answer to a capacity problem. This is the structural claim, and it is the one that reorganized how I read my own material. Institutions that did not invest in pedagogical capacity purchase judgment from a vendor instead. [Stanford's](https://providers.apievangelist.com/providers/stanford/) honor code, written by students in 1921 on the premise that instructors would not take unusual precautions, gave way to approved proctoring in May 2026. LMU licenses Turnitin's AI detector and Respondus lockdown browser with face detection. Meanwhile Berkeley, Caltech, and USC all advise instructors against AI detectors on accuracy, bias, and student-privacy grounds — which leaves the enforcement burden sitting on individual instructors with no tool and no support.

What that costs the people doing the enforcing is [Emily's essay](/2026/07/31/professors-became-the-ai-police/), not mine. She has the labor argument, the union material, and the trust dimension, and she is closer to it than I am.

## What I ask universities to do

Invest in your APIs. Go beyond the library API. But the library API will be an essential piece of the AI puzzle. Publish a central API portal. Expose all the APIs that power your university. Define them as OpenAPI, and generate documentation from that. Share the entire inventory. This is your knowledge. You aren't giving anything away. Your authentication and authorization layer, combined with encryption, will ensure only administration, faculty, students, and trusted partners get access to what they need.

Invest in your AI. Depend on vendors, but do as UC Irvine did. Develop your own control plane. Switch between models. Switch between vendors. Expose the API for it all alongside all of your other APIs, and feed all of your other APIs into your AI. Observe it all. Learn. Evolve. Grow. Make sure it is all well defined as machine-readable contracts, and has the appropriate front-door and onboarding for bots and agents, as well as administration, faculty, and students to get at what they need in a self-service way.

The API foundation, AI control plane, and all of the documentation, guidance, and expertise that goes into it is what you should be doing as a higher educational institution. This is what you should be preparing your students for when they go into the workforce. APIs are everywhere. They power everything. Desktop, web, mobile, and AI applications all use APIs, and an API-literate workforce will do better in any job and career path. An API-literate workforce operating on a governed API foundation is the one that does better with AI. Realizing more balanced and productive outcomes, while giving students agency and control over their world.

## The half I could not write

I want to close on [Emily's argument](/2026/07/31/professors-became-the-ai-police/) rather than my own, because hers is the one that determines whether any of mine matters.

Her thesis, as I read it: universities have pushed the hardest and least supported work of the AI transition onto the people with the least say in it. Most leading institutions default to prohibiting AI unless an instructor says otherwise, which quietly makes every professor the boundary-setter for their own classroom. Syllabi have swollen from a roadmap of learning objectives into ad-hoc AI policy handbooks. Then enforcement lands on that same person — without a working tool, since Berkeley, Caltech, and USC all advise against detectors on grounds of accuracy, bias against non-native English writers, and student privacy; without compensation, since nobody is paid extra to catch anything; and without institutional machinery that can absorb the scale, because plagiarism processes were built on the assumption that cheating is rare.

She has the case that proves the last point. When a [Brown](https://providers.apievangelist.com/providers/brown/) professor moved his midterm to a take-home, enrollment nearly tripled and the class average jumped from a historical range of 65 to 80 percent up to 96. The in-person final came back at 48.6, a historic low, with eighteen students dropping the course and nineteen failing. His department's answer was to ask him to file an individual complaint, with evidence, for each of eighty-six students. He called that ridiculous. He is right, and the ridiculousness is the finding: the machinery assumes rarity, and rarity is over.

Which is where our two essays turn out to be one argument. I am asking universities to publish the contract so their community can build on what the institution owns. She is asking universities to consult that community before they sign the contract in the first place. Both are questions about who is allowed to participate in a system built on their behalf — mine at the machine layer, hers at the human one. Neither works alone. A perfectly documented API at an institution that decides everything behind closed doors is transparency without agency. A perfectly consultative institution with no programmable surface is agency without leverage.

She also supplies the name for what closes that gap, and I had not been using it: shared governance. The AAUP framework in which faculty, administration, and governing boards hold responsibility together, with the weight of each group's voice on a given question set by their proximity to it and their expertise in it. That is a scoping model. I have spent my career writing scoping models for APIs — who can call what, under which credential, at what tier — and it did not occur to me to apply one to the people. Proximity and expertise is a better authorization rule than title, and it is the rule most AI councils are not using.

So the ask I would make of a university has three parts, not two. Publish your APIs. Own your AI control plane and publish its contract. And put the people who live with the consequences on the body that decides. The first two I can measure. The third I cannot, and it is probably the one that matters most.

Emily's closing line is better than anything I would write here, so I will end on hers. There can never be a single, static answer — only "policies and enforcement systems in an evolving compromise through the empathetic collaboration between university administration, staff, students, and AI developers."

That is the part I could not have written. Go read [her essay](/2026/07/31/professors-became-the-ai-police/), and connect with her on [LinkedIn](https://www.linkedin.com/in/emily-i-barton/).
