---
published: true
layout: post
title: Exit 1 Means Nothing To An Agent
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/exit-1-means-nothing-to-an-agent.png
date: 2026-09-30
author: Kin Lane
tags:
  - Specifications
  - Agents
  - MCP
  - Standards
  - Discovery
  - Reliability
  - JSON Schema
  - Command Line
---
The command line quietly became an integration surface again. Not because anyone planned it, but because agents call CLIs constantly — `gh`, `aws`, `terraform`, `stripe`, whatever binary happens to be on the box — and a binary is often the shortest path between an agent and a system that has no usable API. We spent twenty years writing contracts for HTTP and almost none for the shell, and now the shell is back in the critical path with no contract at all.

I asked [why the CLI was making a comeback](https://apievangelist.com/2019/11/05/what-is-behind-the-cli-making-a-comeback/) back in 2019, when Stripe shipped theirs and I could not work out what was driving it. I guessed CI/CD and older enterprise developers who were more comfortable in a shell than in HTTP, and I said I would spend more time figuring it out. The real answer took seven years to show up and it was not either of those. The CLI came back because something that cannot click a button, cannot read a dashboard, and cannot ask a follow-up question needed a way to make software do things.

Roman Medvedev sent me the [CLI Agent Spec](https://cli-agent-spec.github.io/) recently, and it is the first serious attempt I have seen to write that contract down. It opens with a line I think more API teams need to internalize: your CLI works perfectly for humans, and for an agent it hangs, corrupts data, leaks secrets, and burns the context window — and you would never know, because nobody files a bug on behalf of a robot.

## What It Actually Contains

The specification catalogs 74 failure modes across seven categories — ecosystem and runtime, execution, security, output, environment, errors, observability. Pagers that block on a keypress. Progress bars written to stdout that poison a JSON parse. Secrets echoed into a transcript that gets sent to a model. Exit 1 returned for a network blip and for a half-completed deploy, indistinguishable. Each failure mode is scored for severity, frequency, detectability, and — the part I have not seen anyone else do — the token, time, and context cost borne by the caller.

Against those it sets 158 requirements in three implementation tiers: framework-automatic, command-contract, and opt-in. That split is the practical heart of the document, because it tells a framework maintainer and a tool author which half of the list is actually theirs to implement.

Three contracts carry the weight.

**Exit codes that make a promise.** Fourteen reserved codes, 0 through 13, and every one declares `retryable` and `side_effects` as `none`, `partial`, or `complete`. Exit 11 is `RATE_LIMITED` and safe to retry. Exit 3 is `PARTIAL_FAILURE` and means inspect state before you touch anything. This is the single best idea in the document. Blind agent retries begin at exit 1, and no existing shell convention has ever distinguished *nothing happened* from *half of it happened*. HTTP got a fraction of this right with its status classes and then we papered over the rest with [Problem Details](https://standards.apievangelist.com/store/problem-details/) after the fact. The CLI never got even that much.

**One envelope with invariant keys.** Every command returns `{ok, data, error, warnings, meta}`, with all five keys always present, so an agent never has to parse free text to learn whether something worked. Five JSON Schema documents ship the types — exit codes, response envelope, tool manifest, dispatch request, error details. That makes this the rare specification at this stage of its life with a fetchable artifact instead of a promise of one.

**Discovery in one call instead of N.** `tool manifest --output json` returns the whole command tree: subcommands, flags, types, examples, exit-code map. It is exactly the instinct behind MCP tool listing and [Agentic Resource Discovery](https://standards.apievangelist.com/store/agentic-resource-discovery/), pointed at a binary. Stop making the agent crawl `--help` one subcommand at a time and pay for the crawl in context.

There is a fourth detail I keep coming back to. Exit code 9 is `PAYMENT_REQUIRED`, and its description names [x402](https://standards.apievangelist.com/store/x402/). A CLI is the last place most people expect to meet machine-payable metering, which is precisely why it is worth noticing. The pricing layer is being designed into the base contracts of the agent stack rather than bolted on afterward, and it is showing up in places that have nothing to do with HTTP.

## The Part That Is Really Valuable

The requirement list is not the most useful thing in that repository. The scoring layer is.

The project maps twelve existing CLI frameworks — argparse, Click, Cobra, Clap, Typer, Commander.js and others — against the failure catalog, and none of them clears 59%. Then it audits fourteen real, shipping CLIs with a repeatable skill: `gh`, `resend`, `temporal`, `shopify`, `neon`, `firecrawl`, `cube`, `langfuse`. Resend scores an A. Temporal scores an F.

That is a rubric applied to a live market, which is a fundamentally different kind of contribution than a document full of requirements. It is the same move the [Kin Score](https://apis.io/rating/) makes against API providers, and it works for the same reason: a specification nobody has measured anything against is an opinion, and a specification with fourteen scored subjects is an argument you can check.

## MCP Versus API Versus CLI

This is where the specification stops being about command-line ergonomics and starts being about something I have been arguing all year.

The strongest opinion I hold about agents right now is that [agents should write code to integrate, not infer it at runtime](https://apievangelist.com/2026/09/01/agents-should-write-code-to-integrate-not-infer/). If the agent reaches through an MCP tool on every run and interprets what came back, every run is a fresh act of inference, and a probabilistic system will not decide identically every time. You want the agent to write deterministic code once, code you can read and test and run a thousand times, and then get out of the way.

Follow that opinion one step further and you land exactly where this specification is standing. If agents write code instead of inferring, then that code shells out. Constantly. Generated integration code calls `gh` and `aws` and `terraform` and `stripe`, because for an enormous amount of real infrastructure the binary is the only interface that exists, or it is simply the shortest path to a thing that works. So the CLI does not become less important when you reject runtime inference. It becomes the surface that carries the load — and it is the one surface in the entire agent stack with no contract behind it.

That reframes the three-way debate people keep having. It is usually staged as a competition: should you expose an MCP server, an API, or a CLI? That framing is wrong, and I think this specification helps show why.

The **API is the contract**. It is where the semantics live, where versioning happens, where OpenAPI describes what is actually true about the system. Nothing displaces that.

**MCP is a projection of the contract**, and I have shown that it is [being built outside the contract](https://apievangelist.com/2026/08/19/the-mcp-layer-is-being-built-outside-the-contract/) rather than inside it — seven vendors generating servers from OpenAPI documents, with the conventions for doing so scattered across vendor-specific extensions instead of standardized anywhere. MCP is a real and useful surface. It is not a replacement for the thing it is generated from.

The **CLI is the execution surface**, and it is the one nobody described. It predates both of the others, it never stopped being called, and the agent era found it sitting there with no machine-readable promise attached to any of its behavior.

Notice that all three are converging on the same three problems, independently: how does the caller discover what is available, how is a response shaped so it can be parsed without guessing, and how does the caller learn whether a failure is safe to retry. MCP answered them with tool listing, structured content, and error objects. OpenAPI answered them with paths, schemas, and status codes. This specification answers them with `tool manifest --output json`, the response envelope, and the exit-code table. Three surfaces, three vocabularies, one set of questions — which tells you these are not competing designs so much as the same contract problem showing up wherever a machine calls software it did not write.

The part I would push on, and the reason I do not think this is just a fourth wrapper, is that the CLI is not a projection of anything. An MCP server is generated from your API. A CLI is a program someone wrote, with its own behavior, its own side effects, and frequently no API underneath it at all. You cannot generate your way out of the problem the way you can with MCP. Somebody has to describe how the binary behaves, and until this document there was no vocabulary for doing it.

## Where I Push Back

I told Roman I was impressed, and I meant it. I also owe him the skeptical read, because that is more useful than applause.

This is one person. Six stars, no forks, one contributor, created in March and last pushed in August. It calls itself a living document and uses no RFC 2119 language, so the 158 requirements are requirements by assertion — there is no governance body, no independent implementation, and no conformance suite beyond the project's own skills. That is not a criticism of the work. It is a description of where the work sits on the road to being a standard, and it is a long way from the end of that road.

The prose and the shipped schema also disagree with each other. The README's worked example says exit 11 is `CONFLICT` and exit 6 is `PARTIAL_FAILURE`. The repository's own `exit-code.json` says 11 is `RATE_LIMITED`, 6 is `CONFLICT`, and 3 is `PARTIAL_FAILURE`. Build against the schema, not the narrative. The counts drift the same way — 74 failure modes in the headline against 71 in the framework matrix, 158 requirements against a tier table that sums to 157 — and that matters more than it looks, because the framework comparison percentages are computed on that denominator. I have made exactly this mistake in my own scoring work. Normalizing a denominator across every surface that quotes it is unglamorous and it is the difference between a rubric and a vibe.

Then there is the benchmark, which is the thing I most want him to fix, because the fix makes his case stronger rather than weaker.

The repository runs a good-CLI versus bad-CLI differential against a fixed model at temperature 0 across five scenarios, and leads with token savings. Three result files from the same day report total deltas of -24.7%, -34.4%, and -47.0%. One scenario swings -4.9%, +20.3%, and +134.7% across those identical runs. The methodology says run it three times and take the median; nothing in the repository actually aggregates them. Temperature 0 does not make an agent loop deterministic, so the headline token number is noise at n=1.

But look at what *does* hold across all three runs. Correctness: good mode 4/5, 5/5, 5/5, against bad mode 2/5, 4/5, 2/5. The compliant CLI gets the right answer more often, every single time, and that result is buried underneath the unstable one. Lead with correctness. "Agents complete the task correctly more often when your CLI declares its contract" is a stronger claim than a token percentage, and unlike the token percentage, his own data supports it.

## Read It As A Test Plan

My honest recommendation is to treat the CLI Agent Spec as a well-argued problem statement with a schema attached, not as a standard anything conforms to yet. That is not a downgrade. The failure catalog is the part that survives regardless of what happens to the project — it is the most complete public inventory I know of describing how command-line tools break under machine callers, and any team shipping a CLI that agents invoke can read it as a test plan tomorrow morning without adopting a single requirement.

The broader signal is the one I care about most. We keep discovering that the agentic turn does not just demand better HTTP APIs. It re-contracts every surface where software meets software, including the ones we stopped thinking of as interfaces decades ago. The shell was always an API. It just never had to prove it to a caller that cannot read a man page, retries on impulse, and pays for every token it wastes finding out what went wrong.

It is in the [API Evangelist standards catalog](https://standards.apievangelist.com/store/cli-agent-spec/) now, paired with the [OpenCLI Specification](https://www.openclispec.org/) — and if you go looking for that one, be careful, because at least four unrelated projects currently ship under the name OpenCLI. The pairing is the point regardless of which one you land on: OpenCLI describes what a CLI offers, and the CLI Agent Spec describes how it has to behave.
