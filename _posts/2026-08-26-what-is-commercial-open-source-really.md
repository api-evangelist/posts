---
published: true
layout: post
title: What Is Commercial Open Source, Really?
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-is-commercial-open-source-really.png
date: 2026-08-26
author: Kin Lane
tags:
  - Open Source
  - Specifications
  - API Governance
  - Sustainability
  - Strategy
  - Spectral
---
I have been going in circles on a question for months and I would rather work through it in public than keep pretending I have it figured out. What is commercial open source, actually? Not the marketing definition. The working one — how do the people maintaining the substrate this industry runs on make a living, without selling the thing to whoever shows up with capital?

I have a stake in this that I should declare up front. I have just committed to keeping a linting format and its reference implementation open source permanently, with no commercial tier. Not open core. Not open source with an enterprise edition. Not a license that flips the moment somebody builds a business on it. And having made that commitment, I now have to answer the obvious follow-up: so how does anyone eat?

Start with why I closed off the easy answer first.

**A governance format with a commercial tier cannot be trusted to make governance decisions.** Every time the project has to choose between what the format needs and what the paid version needs, users will assume — correctly — that the paid version wins. That assumption does not require anyone to actually behave badly; it just requires the incentive to exist. And the entire value proposition of a governance specification is trustworthiness. There is no version of this that survives monetizing the format itself. So that door is shut, deliberately, and everything else has to work around it.

Before going further I wanted to know who I was actually talking about, so I counted. I pulled public GitHub contribution data for OpenAPI, Arazzo, Overlays, AsyncAPI, JSON Schema, and the main linting tooling in this space, and [published it](https://spotlight-rules.com/who-maintains-this/) — logins and commit counts, nothing else. No employers, no affiliations, nothing inferred, and the script is in the repository so anyone can re-run it and get the same answer.

Commits are a lousy proxy for contribution, and I say so on the page. Specification work is argument, review, triage, editorial judgment, and turning up to meetings for years, and a one-line merge commit can represent six months of somebody else's work. But the *shape* is the point, and the shape is the same in almost every project: a very small group carries most of the load and the tail falls off a cliff. Now hold that next to what depends on those repositories — national standards, procurement documents, hyperscaler products, effectively every API program in the industry. **That gap is the problem nobody has solved.**

So what are the actual options?

**Foundation membership.** Real, and it works for some things, but it is a poor fit for a single specification. Membership money is general, it funds the umbrella rather than the artifact, and the organizations most dependent on a small format are exactly the ones who will never buy a membership to fund a linting format. I have watched specifications sit inside foundations for years without that translating into anyone being paid to maintain them.

**Earmarked sponsorship through a fiscal host.** This is the one I have come around to, and it hinges on a distinction I did not understand well until recently. Some foundation projects are technical *and* fiscal at once — money flows through the entity's membership model, and sponsoring one specification specifically is not really a category. Others separate them: the technical project in one place, and fiscal hosting somewhere else, with earmarked sponsorship, public accounting, and the ability to actually pay a maintainer. That difference determines whether the sentence "give us five thousand a year to maintain this thing you run in production" is a sentence you can even say. Under one structure it is; under the other it becomes a membership conversation and dies.

**Services around the thing.** Consulting, training, assessment, implementation. This is how I have made most of my living for sixteen years and I am not going to pretend it is not the default answer. It works, and it has a real failure mode: it scales with your hours and it quietly turns the open source work into marketing for the billable work. Which is fine right up until the project needs more attention than the marketing budget justifies.

**Reputation converted into something else.** The most honest description of how a lot of this actually gets funded, and the least legible. People acquire the standing that comes from maintaining something important and convert it into a job, a role, an advisory position, a speaking career. It works for individuals and does nothing for the artifact.

**Somebody's employer.** The dominant real-world answer, and the most fragile. Most of the specification work in this industry is done by people whose employer tolerates or encourages it. That is a funding model with a single point of failure, and I have watched it fail the same way repeatedly: something gets built inside a company, becomes load-bearing for everyone else, and then the company's priorities change — through acquisition, a strategy shift, or plain attrition — and everyone downstream discovers they had been depending on somebody else's roadmap all along.

That last pattern is what I keep coming back to, because it is not a story about villains. Nobody in it did anything unusual. A company invested, the investment stopped making sense to them, and the thing they had made load-bearing for other people stopped moving. The people who got hurt were never party to the decision. **The failure is structural, and structural failures need structural answers, not better behavior.**

Here is where I have landed, provisionally, and I want to be argued with.

The thing that matters is not whether the maintainer makes money — it is whether the artifact survives the maintainer changing jobs. Those are different problems and we conflate them constantly. Sponsorship that pays one person is nice and does not solve the second problem. Governance that distributes authority solves the second problem and pays nobody. You need both, and they have to be designed together rather than one after the other.

Which means the funding question and the governance question and the "where does it live" question are one question, and I have been treating them as three. That is the thing I got wrong this year, and it is why the specification I am working on now has [funding](https://spotlight-rules.com/funding/), [governance](https://spec.spotlight-rules.com/governance/), and [where it lives](https://spec.spotlight-rules.com/where-it-lives/) as three views of the same decision rather than three separate ones.

I would genuinely like to hear from the people on that contributors list, and from anyone who has made a living maintaining something the industry depends on. Not the success stories — the arrangements. What actually paid for the work, what it cost you, and what would have had to be different for it to still be paying now.
