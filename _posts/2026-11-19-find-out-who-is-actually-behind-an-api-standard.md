---
published: true
layout: post
title: 'Find Out Who Is Actually Behind An API Standard'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-out-who-is-actually-behind-an-api-standard.png
date: 2026-11-19
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Standards
  - OpenAPI
  - AsyncAPI
---

When you bet your API program on a specification, you are also betting on the people and companies who keep that specification alive. Most of us never look at them. We read the spec, maybe watch a release, and assume someone is minding the store. If you are choosing between standards, putting a standard into a governance policy, or deciding whether your company should join a foundation, you need to know who that someone is. The `standard_coalition` tool on the API Evangelist MCP server answers that question. It sits on the `GET /standards/{slug}/coalition` operation of the API Evangelist API, and it returns the governing bodies, the working groups, the member companies and the named people behind a standard, along with caveats wherever the sources disagree.

## What I gave it

I called it three times today. First with `{"slug": "asyncapi"}`, then with `{"slug": "openapi"}`, and then with `{"slug": "openapi-initiative"}`, because the second call taught me something. The inputs are public standards bodies, and every number below comes from sources the tool links: the [AsyncAPI MAINTAINERS.yaml](https://github.com/asyncapi/community/blob/master/MAINTAINERS.yaml), the OpenAPI [MAINTAINERS.md](https://github.com/OAI/OpenAPI-Specification/blob/main/MAINTAINERS.md) and [TOB.md](https://github.com/OAI/OpenAPI-Specification/blob/main/TOB.md), and the Linux Foundation's public project service.

## What came back

The `openapi` call came back as a 404 with `not_measured`. That's not a bug. It's the tool telling me the slug names a specification in the catalog, not a measured body, and it lists the 14 bodies that have been profiled: agentic-resource-discovery, asyncapi, camara-project, catena-x, etsi, gsma, json-schema, mcp, mef, mismo, nmfta, ogc, openapi-initiative and tm-forum. An agent that guesses wrong gets the list of right answers back, which is what I want from an error.

AsyncAPI came back with a shape I didn't expect:

```json
"governance_model": "Open source, TSC-governed",
"bodies": [
  {"name": "Technical Steering Committee", "members": 31,
   "discrepancy": "The rendered roster at asyncapi.com/community/tsc listed 34 members
     when checked on 2026-08-12, three more than the machine-readable file."},
  {"name": "Maintainers", "members": 66,
   "note": "... covering 35 distinct projects. 17 of the 66 set an availableForHire flag."}
],
"companies": {"count": 0,
  "note": "AsyncAPI has NO corporate membership roster. The Linux Foundation records it
    under the Crowdfunding model ... $546,928 across 127 contributions, balance $38,924,
    with Solace, IBM, IQVIA, Gravitee and Postman carrying most of it."},
"people": {"count": 66}
```

The zero carries an explanation. AsyncAPI doesn't have zero supporters. It is crowdfunded, so its coalition is 66 maintainers spread across 35 projects rather than a list of paying members. The tool also flags that the project's own website and its source-of-record file disagree on the size of the TSC (34 against 31) and says which one it trusts. I like that it says so.

The OpenAPI Initiative is the opposite shape. It runs on the Membership model, with a Technical Steering Committee of 6 active and 6 emeritus members, a Technical Oversight Board of 7 (4 elected by the TSC, 3 by the Business Governance Board), and seven SIG working groups, from sig-moonwalk (349 stars) to sig-finance, sig-travel and sig-security. The headline is `"companies": {"count": 100}`.

This is where I have to be honest about our own tool. When I tallied the membership status on those 100 records, it broke down like this:

```
Active             33
Expired            49
Invoice Cancelled  17
Purchased           1
```

So "100 member organizations" is everyone the Linux Foundation has on file. The number paying today is about a third of that. The status is there on every record, so nothing is hidden, but the count at the top doesn't say so. The AsyncAPI note even repeats "100 member organizations" as the comparison point. The 33 active members include Google, IBM, Salesforce, SAP, eBay, Bloomberg, Kong, SmartBear, Tyk, Redocly, Scalar, bump.sh, Apideck, 42Crunch and Jentic, plus UK government bodies, universities and a few individual consultancies. The tool also flags that both term windows published in TOB.md have run out, and tells you to check the minutes before treating that roster as current. That caveat is right,, and the company count needs one just like it. 22 of the 100 companies already link to provider profiles in the API Evangelist network.

## What that makes possible

- **Due diligence before you standardize.** Before a standard goes into your governance policy, you can see whether a crowd of individual maintainers keeps it alive or a roster of companies does, and how deep that roster really is.
- **Find the people to talk to.** The working groups and maintainers come back with repositories attached, so a team with a finance or travel use case knows which SIG to join and whose repos to watch. Seventeen AsyncAPI maintainers say they're available for hire.
- **Membership decisions with evidence.** If your company is deciding whether to join, you can see which of your peers and competitors are active, which let their membership lapse, and how the money flows.
- **Agents that cite their sources.** Every body, roster and count comes with a source URL and a generated date, so an agent answering "who governs AsyncAPI?" can show where the answer came from.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/insights` toolset), call `standard_coalition` with a slug from `find_measured_standards`. Over REST:

```sh
curl https://api.apievangelist.com/v1/standards/asyncapi/coalition
```

The operation is in the [API reference](https://developer.apievangelist.com/api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) show how to connect an agent. If you want to know whether companies actually adopt a standard, `standard_adoption` is the next tool to try. This one tells you who is behind it.
