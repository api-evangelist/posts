---
published: true
layout: post
title: 'A Standard Takes When Not Having It Hurts the Publisher'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-standard-takes-when-not-having-it-hurts-the-publisher.png
date: 2026-08-17
author: Kin Lane
tags:
  - Standards
  - Specifications
  - Kin Score
  - Trend Reports
  - Research
  - Governance
  - APIs
---
Fourteen of the API Evangelist trend reports now carry a written standards layer. Each one was researched separately, and each one asks the same question about a different market: which specifications exist here, and did anyone actually adopt them? I went back through all fourteen this week and read them against each other. They agree on more than I expected, and the thing they agree on is not the thing I would have said before reading them.

The comfortable answer is that standards succeed when they are narrow. That answer is half right. Every specification in this research that achieved real adoption removed one expensive problem with an obvious boundary. OCPI exists because a driver with an account on one charging network could not charge on another. SCIM exists because provisioning a user between two systems was being paid for by hand, everywhere, forever. The Model Context Protocol answers exactly one question — how does a model reach a tool — and it got answered once instead of approximately.

The failures are the opposite shape. GA4GH has been publishing genomics API specifications since 2013, and it publishes eight of them covering a whole domain. Three organizations out of 999 in the biotechnology cohort name it. STAC describes one thing, satellite imagery you can discover across providers, and seven of the eight earth observation companies in the space cohort tag it. Same decade, same kind of technical community, opposite outcome.

So narrow wins. Except that it does not, and the exceptions are what make this interesting.

## The exceptions break the rule

Standard Webhooks is as narrow as anything in this research. Every consumer of every webhook writes the same signature verification and the same retry logic. The specification exists, it is short, and it was written by Svix, which the Kin Score puts at 84.1 and at the top of the entire developer tools cohort. Two organizations out of 951 name it.

security.txt is RFC 9116. It defines one text file at one known path saying how to report a vulnerability. It is as narrow and as concrete as SCIM. Fifty-six percent of the cybersecurity upper band has not adopted it in any form we can verify.

Both of these meet every condition the narrow-scope rule sets, and both failed. The difference is not the specification. It is who pays when it is missing.

A warehouse that cannot read Parquet cannot sell to anybody. The cost of not adopting that format lands directly on the vendor, and so Parquet, Arrow and Iceberg converged fast. When a webhook has no standard signature scheme, the vendor is fine. Their customers write the verification code. When a company has no security.txt, the company is fine. A researcher who found something in their product spends an afternoon hunting for an email address.

The mobility report has the cleanest version of this. Logistics is its largest area, those companies have the highest event adoption measured anywhere in the research, they publish excellent contracts, and they name no interoperability standard at all. Not EDIFACT, which has carried freight messaging since 1987. Not GS1, not EPCIS, not DCSA. These are competent teams. The pain of everyone having a different idea of what an order is falls on their customers, so it never got resolved.

That is the finding. **A standard takes when not having it hurts whoever would have to publish it.** Narrow scope is necessary. It is not sufficient.

## Mandates do exactly what you asked and nothing else

The second pattern is about regulation, and it is unnervingly consistent. A mandate delivers the artifact it names with total reliability, and it stops precisely at that artifact's edge.

HIPAA standardized healthcare transactions in 1996. Thirty years of X12 EDI produced clearinghouses, not APIs. The 21st Century Cures Act made every certified EHR publish a FHIR endpoint, and not one of them was thereby made to build a developer product. Open data policy told public bodies to publish machine-readable data, and they did — government has the highest contract publication rate in this entire research series at 94 percent — but the policy said nothing about operation, so the same market runs 17 percent MCP, 12 percent event surfaces and zero workflows. CSRD compels sustainability statements to be tagged in XBRL, and what comes out is comparable filings rather than callable systems.

None of that is a failure of the mandates. They worked. It is a lesson about scope. If you are writing a rule and you want an operable API at the end of it, the rule has to name the operable API. It will not arrive as a side effect of naming the document.

## Markets standardize what moves, not what you can ask for

The third pattern shows up in six markets that have nothing else in common.

IoT is the most standards-dense market in the research and it has no API standard. Eleven specifications apply — MQTT, CoAP, AMQP, DDS, Modbus, OPC UA, Zigbee, Thread, Matter, LwM2M, LoRaWAN — and every one of them governs how a device communicates. None governs how the platform managing that device is operated. Two platforms can speak identical MQTT to identical hardware and expose completely different notions of a fleet, a job or a credential. The wire protocol is interchangeable and the API is not, which is exactly backwards from where the migration cost lives.

Gaming has glTF and OpenUSD, both genuinely successful, and no specification for a game backend, matchmaking, leaderboard, entitlement or in-game economy. The creator economy runs on RSS, oEmbed and Open Graph, which are among the most widely implemented specifications ever written, and a tool publishing to five platforms still writes five integrations. Data and analytics agreed on how to store and move a table and never agreed on how to ask for one.

There are exceptions, and they are worth naming because they prove it is possible. The Open Geospatial Consortium produced real interface standards — WMS, WFS, and the OGC API family — that specify operations and responses rather than a file layout. OpenXR is a Khronos API standard rather than a format. SCIM sits exactly where an interoperability standard should sit. HR got what IoT never did.

## The one we are all failing

I will end on the number that is hardest to look at, because it includes us.

Arazzo adoption across every market measured is zero. Not low. Zero. The catalog holds 405 `arazzo/` directories across artificial intelligence, developer tools, data analytics and cybersecurity, and not one of them survives the provenance gate. Every single file was written by API Evangelist research rather than by the company it describes. That includes the industry that publishes the tooling for authoring Arazzo, and the industry building multi-step autonomous agents.

That gap is the whole argument in one line. Multi-step descriptions are missing because nobody is bleeding for their absence yet, and the moment agents start executing sequences against production systems, everybody will be.

If you are writing a specification right now, the question worth answering before you write another word is not whether the design is good. It is whether the company you need to adopt it is the company that suffers today without it. If the answer is no, you are going to need a mandate, a market shift, or a great deal of patience.

The full cross-market breakdown, including the market-by-market register and the adoption figures behind all of this, sits in the trend reports at [reports.apievangelist.com](https://reports.apievangelist.com/).
