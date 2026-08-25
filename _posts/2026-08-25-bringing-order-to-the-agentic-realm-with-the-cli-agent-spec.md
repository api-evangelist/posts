---
published: true
layout: post
title: Bringing Order To The Agentic Realm With The CLI Agent Spec
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/bringing-order-to-the-agentic-realm-with-the-cli-agent-spec.png
date: 2026-08-25
author: Kin Lane
tags:
  - Command Line
  - Agents
  - Specifications
  - Standards
  - Governance
  - MCP
  - APIs
---
The command line interface, or simply CLI has been the workhorse of compute since the 1960s. In the era of the web API, the simplicity of the web API groomed a new generation of developers who were more familiar with the web as an interface than they were with the traditional interfaces the classic developer community was used to. I have to admit, that I am in this class of hackers (not a computer programmer) that came into my career via the web, and I am more familiar with a URI or URL, than I am with a CLI.

Like the application programming interface, the command line interface, is an interface. And like the API, the CLI has become a preferred mode of interfacing between systems by agents. There is a lot of hype that it is API vs. MCP vs. CLI, but in reality, MCP is just an API, and the options really are just API or CLI when it comes to powering your agents. Over the last decade we've made a lot of investment in standardizing and governing our APIs using common specifications, but the CLI realm has mostly resisted or avoided standardization, until recently, where we are seeing a proliferation of specification proposals like the [CLI Agent Spec](https://cli-agent-spec.github.io/) to help us tame and stabilize this layer of our operations.

After my first review of CLI Agent Spec. It is much needed. Robust. Well thought out. The standardization is desperately needed in the CLI space, even without considering agentic, but with agentic, it is a MUST. The failure modes, requirement tiers, and JSON schema standardization is very foundational and powerful. It represents the standardization we need in API, got parts and pieces of with HTTP, JSON API, Problem Details, etc, but in a messy ad hoc way, not a foundational implementation like this. I am impressed with the standardization after the many different CLIs I have used over the years, and can see this being a pretty compelling foundation for how agents interface with our systems.

Beyond the spec itself, the repo is beautiful. It is well laid out with the foundational challenges, requirements, schema, and guides and implementation guidance. The comparison matrix and research provides excellent provenance and builds trust. The Agent Skills are a HUGE bonus and makes a lot of sense to help folks develop their own CLI layer. The repo is laid out to ensure success for both the human and agent experience. I love me an elegant repo that has been clearly laid out, making learning about the spec a hands-on, forkable, and complete experience. When a solution focuses so heavily on onboarding and education you can tell it is something that you want to put to use in your work, recommend to others, and write stories about.

It is good to see the CLI Agent Spec. I predict that as MCP adoption continues to shrink back down into the API toolbox alongside REST, GraphQL, Event-Driven, and other RPC APIs, we'll see the CLI come out of this moment even stronger than it was before. And with a foundational specification like the CLI Agent Spec, and others I've seen emerging, I think we'll continue to build on a more solid foundation with all of this agentic madness we see happening right now. Things will slowly begin to stabilize, we'll be able to better govern and regulate the API and CLI layers, further standardizing the thousands of interfaces our agents will be needing to do business with sensible reliability, traceability, observability, and governance across desktop, web, mobile, device, network, and AI applications.
