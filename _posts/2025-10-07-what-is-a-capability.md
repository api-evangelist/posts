---
published: true
layout: post
title: What is a Capability?
date: 2025-10-07T09:00:00.000Z
tags:
 - Capabilities
 - Business
 - Integrations
 - Automation
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-docks-oakland-4.jpeg
---
I have several folks asking me what I mean when I say capability in the context of what we are building with Naftiko. I have been writing about API capabilities in the context of [the journey from API resources to API experience for some time](https://apievangelist.com/2024/02/09/api-resource-capabilities-and-experiences/). I used to call [a certain type of Postman Collections capabilities](https://www.postman.com/api-evangelist/atlassian-jira/overview) for some time, but I want to refresh my definition of what I mean, build on the work of other smart people, and publish something I can share with others to help articulate what I mean when I say capability.

### Daniel Kocot
First up, Daniel Kocot has published a very thoughtful piece about all of us [moving from APIs to capabilities](https://architecturalbytes.substack.com/p/from-apis-to-capabilities), in which he frames "capability thinking" as, "placing emphasis on what a platform or system can actually do for its consumers, and how those actions can be documented, standardized, and made reusable across use cases." Daniel goes even further with, "capability thinking reframes the unit of design. Instead of exposing granular resources, platforms describe discrete business functions such as Ship Order, Process Payment, or Approve Loan."

Daniel describes the characteristic of a capability in this way:

- Business alignment - Rather than POST /refunds, the capability is Process Refund.
- Clear boundaries - Approve Loan is separate from Disburse Loan, avoiding overlap.
- Reusability - Validate Customer Identity supports onboarding, fraud checks, and account recovery.
- Composability - Ship Order can be chained with Generate Invoice and Notify Customer in an order-to-cash process.
- Technology independence - Send Notification remains valid whether delivered by SMS, email, or push API.
- Discoverability - Capabilities are documented in catalogs with clear metadata.

Daniel continues with guidance on how to move towards API capability:

- Map existing APIs to business outcomes. For example, group several customer endpoints into a Customer Onboarding capability.
- Use [Data Interface Quadrants (DIQs)](https://www.codecentric.de/en/knowledge-hub/blog/introducing-data-interface-quadrants-diqs) to assess which interfaces should become capabilities. A raw internal data service may stay as-is, while an aggregated external service may evolve into a reusable capability.
- Define capabilities with clear names, descriptions, inputs, and outputs in business language.
- Create a catalog to make them discoverable, linking to technical implementations.
- Apply governance to keep capabilities consistent, prevent overlap, and maintain alignment with business outcomes.

Then Daniel adds some pitfalls we want to think about:

- Capabilities that mirror system internals rather than business actions
- Lack of discoverability—capabilities hidden in documentation or scattered across wikis.
- Missing governance—leading to overlaps like Process Payment and Execute Payment coexisting without clarity.

Daniel sums up the reason why you want to embrace capability thinking, "as ecosystems expand and automation becomes more common, being able to articulate a platform’s capabilities clearly will determine how well it can adapt. Moving from APIs to capabilities is not just a shift in terminology. It is a step toward making digital platforms more meaningful and resilient."

### Christian Posta
To compliment Daniel's perspective, Christian Posta comes at it from the realm of artificial intelligence with [From APIs to Capabilities to Support AI Agents](https://blog.christianposta.com/from-apis-to-capabilities-what-ai-agents-mean-for-application-architecture/). Christian is focusing on this shift to artificial intelligence being about "each evolution has been driven by the need to enable faster, safer, and more independent changes to an organization's applications and architecture to support competitive innovation." and that "AI Agents are the next transformation, but agents are different. They aren’t yet another decomposition problem. Agents kind of change the game. They reason, plan, and act toward goals, dynamically, using their context and environment. And for this to work in real enterprise systems, we need to rethink how to expose what our enterprise systems can do."

Christian continues by pointing out "agents don’t start with an API spec. They start with a goal and some context. Then they figure out what steps they need to take to achieve that goal. That means they need to discover what the system is capable of, decide which capability to use, and know how and when to invoke it." Christian goes further by saying, "instead of exposing APIs and contracts, we need systems to expose capabilities. Think of a “capability” as a self-describing, semantically rich declaration of what a system can do, not just how to invoke it."--using the concept of a capability to automate what business needs of any system.

Christian breaks down a capability in this way:

- A natural language description of what it does
- The inputs and outputs described in structured form
- Preconditions for execution (e.g., customer must exist)
- Examples of how it might be used in different contexts

Christian highlights that the devil is in the details of capabilities being dependent on "how an enterprise implements this will be interesting however. There already is a large investment into APIs that delivers a lot of real value. Changing this won’t be a wholesale replacement of what’s already there. Leveraging MCP to wrap APIs is one possibility at least in the near term. Starting to natively support this approach is another."

## Mike Amundsen
Another smart person I'm building my definition around is Mike Amundsen, who also cites Christian Posta in his piece declaring that [Focusing on Capabilities Is a Win](https://mamund.substack.com/p/focusing-on-capabilities-is-a-win), echoing that in, "the age of AI-driven clients is here, and our APIs need to reflect that. These new clients don’t just follow instructions, they observe, infer, and choose. Which means they need more than method names and URLs. They need a clear set of well-described capabilities."

Then Mike quotes another smart person I look up to--Irakli Nadareishvili of Apple: “The first step in breaking the data-centric habit is to stop designing systems as a collection of data services, and instead design for business capabilities.”

Mike provides a short list of what AI is going to want when it comes to a capability:

- What is this operation called?
- What capability category does it fit into?
- What state changes does it cause?
- What constraints or outcomes are implied?

Mike leaves us with a more generalized and I'd say business friendly way to think about the role capabilities play in automation with, "when the client is autonomous, your API has to be more than a list of endpoints. Instead, it needs to be a menu of possibilities."

## Refreshing My Thoughts
My definition of what a capability is has evolved because of Daniel, Christian, and Mike's storytelling. My definition still originates from my continued belief that capabilities are a natural evolution [from API resources to API capabilities to API experiences](https://apievangelist.com/2024/02/09/api-resource-capabilities-and-experiences/). However there are some pretty seismic shifts in my definition which includes dropping API in the name. I always said API capability. I am now just saying capability, business capability, or digital capability. I am going to lean in on business capability. I agree with all three of their beliefs that we need to move from API to capabilities, and I am trying to be honest about the fact that an emphasis on the API might have been holding us back in this journey.

## What is Capability?
Ok, let's try and distill down a definition of what a capability is--taking all this input, and then provide me with something I am willing to share with others and continue building tooling around, while also driving conversation around mine and other people's storytelling.

Let's start with the simple dictionary definition:

- the power or ability to do something.
- the extent of someone's or something's ability.

Since I am a writer, I will also be busting out my Thesaurus:

- capacity, competence, effectiveness, efficiency, facility, means, potential, power, proficiency, skill, wherewithal

Now let's try and break down what I already knew and what I've learned into a refined definition of what a capability possesses:

- **Intuitive Metadata** - A simple title, description, and tags of what a capability does.
- **Business Aligned** - A capability speaks to business outcomes and not system design.
- **Stakeholders** - Capabilities possess product, engineering, and domain stakeholders.
- **Domain-Driven** - Capabilities use a common language to align engineering with business.
- **Clear Boundaries** - Capabilities possess clear separations of concern for what it does.
- **Integrated** - Capabilities integrate across API, data connection, or file system.
- **Interopable** - Capabilities should natively work together with other capabilities.
- **Human-Readable** - A capability is something any person can easily read and understand.
- **Machine-Readable** - A capability is something that any machine can input or output.
- **Reusable** - Capabilities are designed to be modular and reused in multiple ways.
- **Composable** - Capabilities can be composite and a mix of multiple capabilities.
- **Declarative** - Capabilities should be declarative in any engine they are configuring.
- **Discoverable** - Capabilities possess rich metadata that always enable discovery.
- **Inputs and Outputs** - Capabilities have what is needed as input and available as output.
- **Virtualized** - Capabilities have usable examples, presets, data, and configurations.
- **Event-Driven** - Capabilities natively can respond to and trigger common events.
- **Automated** - Capabilities can be automated via scheduling, events, and pipelines.
- **Predictable** - When automated capabilities provide repeatable building blocks.
- **Communicated** - Capabilities communicate with stakeholders via existing channels.
- **Multi-Modal** - Capabilities are able to work across multiple needed media types.
- **Multi-Protocol** - Capabilities are able to work natively across need protocols.
- **Collaborative** - Capabilities drive collaborative behavior amongst stakeholders.
- **Governed** - Capabilities are governed as part of the regular delivery and usage.
- **Policy-Driven** - Capabilities are configured globally using common policy rules.
- **Mature** - Capabilities need to have a maturity model to understand development.
- **Monitored** - Capabilities are monitored from multiple dimensions and regions.
- **Observable** - Capabilities able to be observed via existing observability systems.
- **Traceable** - The fingerprints of a capability should be anywhere it is used.
- **Authenticated** - Capabilities have the keys the need to access systems and tools.
- **Role-Based** - Capabilities are shaped based upon a specific role and access it is given.
- **Secured** - Capabilities make security a priority as part of design and implementation.
- **Executable** - Capabilities are an executable unit of business value in a container.
- **Sharable** - Capabilities are easily shared using native capabilities where found.
- **Lifecycle** - Capabilities possess a known, clear, and communicated lifecycle.
- **Orchestrated** - Capabilities orchestrate across multiple services and tooling.
- **Transformed** - Capabilities enable the reliable transformation of data.
- **Total Cost of Ownership (TCO)** - Capabilities define their total cost of ownership.
- **Value Exchanges** - Capabilities enable monetization and defining of value exchanged.
- **Standards-Driven** - Capabilities build on existing standards in use by companies.
- **Semantics** - Capabilities possess the semantics required to understand what it does.
- **Guided** - Capabilities should educate and inform stakeholders in all interactions.
- **Insights** - Capabilities provide insights into how they are working or not working.
- **Documented** - Capabilities are always documented, sharing exactly what they do.

It is a lot. I know. A capability should be easily represented by a title, image, and maybe a description and some tags. Capabilities should work as an abstraction for all the details across these areas, allowing for anyone to dig deeper and get at the details needed. Capabilities MUST be accessible to business stakeholders and engineering stakeholders. While I get (and accept) that artificial intelligence is facilitating this conversation, I want to emphasize that it is not the entire conversation.

That is all I have for now. I have conversations with Daniel, Mike, Christian, and others coming up to further flesh this out. If you'd like to join in on the conversation please write a post on your thoughts and hit me on social media with the link--I will weave your view into the narrative, and I am happy to have you join in on the podcast discussions. I know that I am forgetting things on this list, but getting it published is the best way to remind myself of what is missing, and let others tell me what I've missed. Making the move from API to capabilities won't be easy, it won't happen overnight, and it will require a significant amount of storytelling.
