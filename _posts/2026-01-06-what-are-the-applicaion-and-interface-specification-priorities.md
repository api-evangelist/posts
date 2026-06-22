---
published: true
layout: post
title: What Are the Application and Interface Specification Priorities?
date: 2026-01-06T09:00:00.000Z
tags:
  - Applications
  - Interfaces
  - Cloud Native Application Bundle
  - Open Component Model
  - Open Resource Discovery
  - Radius
  - Score
  - Agent 2 Agent
  - APIs.json
  - Arazzo
  - AsyncAPI
  - JSON Schema
  - MCP 
  - OPA
  - Open Collection
  - OpenAPI Overlays
  - OpenAPI
  - Spectral
  - Microcks Examples
  - API Commons
  - FinOps Focus
image: >-
  https://kinlane-images.s3.amazonaws.com/shared/red-circuit-shipping-docs-cranes.jpg
---
I am deep diving into the properties of interface and application specifications to understand the overlaps across the standards in use within both of these domains. I pulled the JSON Schema for five application specifications and the JSON Schema for fourteen interface specifications, then “exploded” all of the properties across all of these specifications. The JSON Schema provides me with the most honest view of each specification, and a programmatic opportunity for me to look across these specifications. 

## Application Spec Priorities
This work began with looking at five specifications that are used to define an “application” as it pertains to containerized deployment of software, providing some very different, but also overlapping perspectives of what is needed when it comes to defining and delivering the applications we need.

**Specs:** Cloud Native Application Bundle, Open Component Model, Open Resource Discovery, Radius, Score

**Properties:** Annotations, APIs, Arguments, Bases, Bundles, Callbacks, Commands, Components, Configurations, Containers, Content, Context, Credentials, Custom, Data, Defaults, Definitions, Dependencies, Descriptions, Destinations, Digests, Directions, Encodings, Environments, Extensions, File systems, Formats, Generics, Groups, Headers, Hosts, Identifiers, Identities, Images, Inputs, Instances, Keys, Labels, Mappings, Maximums, Media, Metadata, Minimums, Multiples, Namespaces, Outputs, Parameters, Paths, Policies, Ports, Probes, Properties, Protocols, Providers, Readiness, Reads, References, References, Relations, Requests, Resources, Results, Runtimes, Schemes, Schemas, Selectors, Services, Sizes, Sources, Specifications, Statuses, Systems, Tags, Targets, Titles, Types, Updates, Variables, Versions, Volumes

**Repo:** [https://github.com/naftiko/applications](https://github.com/naftiko/applications)

Next I will be creating examples for each of the specifications, and then I am going to create an OpenAPI for each spec, that allows me to provide a sandbox for these application specifications, making a call to mock APIs that will return examples of each spec. Then I will play with variations to try and better understand how each specification work, and then begin mapping common objects and properties across the specifications. I am sure I will learn a lot doing this.

## Interface Spec Priorities 
After working with the application specifications I wanted to do the same for interface specifications. So I got to work on the stack of interface specifications I am working with to define capabilities in the context of what I am building at Naftiko, looking at what the priorities are in play within this domain.

**Specs:** Agent 2 Agent, APIs.json, Arazzo, AsyncAPI, JSON Schema, MCP, OPA, Open Collection, OpenAPI Overlays, OpenAPI, Spectral, Microcks Examples, API Commons, FinOps Focus

**Properties:** Agents, Annotations, APIs, Artifacts, Assertions, Authentication, Authorization, Bodies, Budgets, Capabilities, Cards, Components, Conditions, Context, Costs, Criteria, Dependencies, Domains, Environments, Events, Examples, Extensions, Functions, Labels, Licenses, Limits, Mappings, Messages, Models, Notifications, Operations, Organizations, Overlays, Parameters, Paths, Patterns, Plans, Policies, Priorities, Prompts, Properties, Protocols, Queries, References, Regions, Registries, Requests, Responses, Rules, Schemas, Scopes, Secrets, Semantics, Services, Severities, Skills, Status, Tags, Tasks, Tokens, URIs, URLs, Variables, Versions, Workflows

**Repo:** [https://github.com/naftiko-capabilities/interfaces](https://github.com/naftiko-capabilities/interfaces)

There are different reasons for using each of these specifications, but once you look across them you really begin to see the core of what matters when it comes to application and system integrations, which the applications defined above are going to be needing as well—which left me thinking.

## Overlapping Properties
Next, I wanted to look at the overlap between application and interface specifications. Schema is one big area of overlap across these domains, but there are other technical and business details present. This is what I wanted to get at in this round of work. These are the makings of an XKCD cartoon in my experience, or at least provide the constellations we need to navigate towards whatever is next.

Annotations, APIs, Components, Context, Dependencies, Environments, Extensions, Labels, Mappings, Parameters, Paths, Policies, Properties, Protocols, References, Requests, Schemas, Services, Tags, Variables, Versions

Next I am going to produce examples of each application and interface specification. I am going to create a single mock API that provides paths to each of these specifications, returning examples of each specification when you make a call. Think of it as an application and interface specification sandbox. I’ve done an operational look at the application specifications, but I need to complete that for the interface specifications, so that I can understand more about the operations, community, adoption, and governance behind each interface specification. 

Once I have the sandbox with examples for all of these specification, and the data on how these specifications operate their communities and governance, I will look at [crafting a grammar for expressing, referencing, querying, and pointing across this landscape](https://apievangelist.com/2026/01/06/my-rabbit-warren-of-json-expressions-references-queries-or-pointers/). I am looking for a syntax for speaking to the common properties that exist across these specifications. There are other domains present across these specifications beyond just application and interface. Things like governance, transport, taxonomy, semantics, etc. But that work will have to come next. For now, this provides a nice view across thee priorities expressed across these specs.

If you are interested where this work is going, please ping me at kinlane@naftiko.io.