---
published: true
layout: post
title: 'Every Regulated Market Already Publishes Its Own Map'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/every-regulated-market-already-publishes-its-own-map.png
date: 2026-10-19
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - Regulation
  - Standards
  - Methodology
---
A week ago I said the Kin Score was getting a third dimension, the market. Since then we have taken it from four markets to eighty-six, and the most useful thing I learned along the way is not about any one industry. It is about where the map of a market actually lives.

In open markets, the map lives in marketplaces and workflows. Salesforce, Slack, Zoom, Shopify, and Zapier all publish who builds on them. In regulated markets, the map lives in registers. And it turns out almost every regulated market already publishes its own.

## The registers are already there

Here is a partial list of what we read this week, all public, all machine-readable or close to it:

- **FedRAMP** publishes every authorized cloud provider and its impact levels. 425 packages from 342 providers.
- **The SEC** publishes every registered investment adviser, and each adviser files its own website on Form ADV. 24,011 advisers.
- **ICANN** publishes every accredited domain registrar, with a URL. 3,324 accreditations.
- **The Monetary Authority of Singapore** publishes its financial institutions directory. **Bank Indonesia** publishes its payment licences as a spreadsheet.
- **The FAA** publishes approved LAANC drone service suppliers and every accepted Remote ID declaration of compliance.
- **Mozilla's CCADB** publishes every certificate authority and which root stores trust it today.
- **Open Finance Brasil** publishes every participant and every API resource it certified, with expiry dates.
- **Metrc** publishes which software vendors are validated for cannabis track-and-trace, state by state.
- **The FDA** publishes its list of AI-enabled medical devices. **ONC** publishes the FHIR endpoint lists that certified health IT developers are required to expose.

None of these were built for us. They were built so regulators, buyers, and auditors could answer the question of who is allowed to do what. That is exactly the question a market layer needs answered, and it is answered deterministically, by the market itself, with no model guessing.

## What a register tells you, and what it doesn't

A register entry is a fact, but it is a narrow one. Being on the SEC's adviser list tells you a firm is registered. It doesn't tell you the firm has an API, and it doesn't tell you anything is integrated. So we hold to a few rules.

**A listing is participation, not depth.** A provider that appears in a register reads "standard" or "regulated" in its market, and its depth stays low until something deeper shows up.

**Certification is depth.** When a register certifies a product, like a FedRAMP impact level, a Kubernetes conformance result, or a validated Metrc integration, that is a different and stronger signal. Each register gets its own ceiling, set by the widest vendor actually in the data.

**Domain, not name.** We only link a register entry to a provider when the domain matches, and the name checks out. When a register only gives names, we can resolve a domain through Wikidata, but we label it, and the domain still has to pass the same check.

**Fit matters.** A register lists everyone it regulates, not everyone in the market. The EPA's hazardous waste handler list is full of companies that only handle their own waste. A carbon market sweep that linked them would have been mostly wrong, so we now hold anyone who appears in a register outside their own business.

## Self-filed registers need more care

One register taught us a hard lesson. FinCEN's money services business list is self-filed, meaning anyone can submit a registration. When we looked closely, a cluster of filings from virtual-office addresses used the names of well-known banks, brokerages, and crypto companies, usually with every activity box ticked. A name lookup resolves those to the real company's domain, the name check passes, and you have just credited a company with a registration it never filed.

We caught 46 of them by hand. The rule now is that a self-filed register also has to agree with the company's registered country before we link anything. Any agent reading public registers needs that same skepticism. A register is only as good as who is allowed to write to it.

## The gaps are findings too

Not every market gave up its map. The Gulf registers, SAMA in Saudi Arabia and the UAE's Central Bank, wouldn't answer our requests. Nutrition and sports data have no register at all. Leagues announce their official data partners in press releases. Those gaps are as telling as the registers. A market that doesn't publish its own structure is a market where you can't easily prove who belongs.

Eighty-six markets in, the pattern holds. Open markets integrate through workflows. Regulated markets integrate through standards. And regulated markets have already done half our work for us. They just haven't connected their registers to the APIs.
