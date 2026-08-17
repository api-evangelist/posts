---
published: true
layout: post
title: 'What the Trend Reports Found in the Regulatory Layer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-the-trend-reports-found-in-the-regulatory-layer.png
date: 2026-08-17
author: Kin Lane
tags:
  - Regulations
  - Compliance
  - Kin Score
  - Trend Reports
  - Research
  - Governance
  - APIs
---
The same fourteen trend reports that carry a standards layer also carry a regulatory one. Each records which regimes apply to that market, how many companies in the cohort name them, and what the reports measure alongside them. I read all fourteen regulatory sections together this week. This is what is in them.

## The regimes that reach every market

[GDPR](https://regulations.apievangelist.com/store/gdpr/) appears in all fourteen sections. It reaches each market through a different door: training data and inference logs in artificial intelligence, warehouse contents in data analytics, employee records in HR, subscriber lists in the creator economy, continuous vehicle location in mobility, and any sensor observing a person in IoT.

[CCPA and CPRA](https://regulations.apievangelist.com/store/ccpa-cpra/) appear nearly as widely. The HR report notes they extended to employee data in 2023, bringing access and deletion rights to workforce records in California. The weather and geospatial report notes precise location is named explicitly as a sensitive category.

SOC 2 is recorded in both cybersecurity and developer tools as the attestation those markets actually trade on. Both reports describe it the same way: a control audit that asks whether access is governed, not whether it is documented in a form a caller can read.

## Where a sectoral regime exists

Biotechnology is the most heavily cited. [21 CFR Part 11](https://regulations.apievangelist.com/store/21-cfr-part-11/) is the most-named regulation in that market at 23 organizations, requiring validated systems, authority checks and a secure time-stamped audit trail. [GxP](https://regulations.apievangelist.com/store/gxp/) is the umbrella, with GMP alone named by 27 companies, GLP covering nonclinical safety and GCP covering trials. [CLIA](https://regulations.apievangelist.com/store/clia/) is named by 19 and [CAP accreditation](https://regulations.apievangelist.com/store/cap-accreditation/) by 7. [EU IVDR](https://regulations.apievangelist.com/store/eu-ivdr/) is named by 2, and the report notes it brought diagnostic software explicitly into scope in May 2022. Governance in that cohort scores 28.8, the lowest measured anywhere in the series.

Artificial intelligence now has the [EU AI Act](https://regulations.apievangelist.com/store/eu-ai-act/). The report classifies it as a conduct regulation rather than a disclosure one: it obliges providers to maintain technical documentation, keep logs, disclose that a user is interacting with a machine, and ensure human oversight. Consent and delegated identity is unsatisfied by 91 percent of that market.

Mobility has the [FMCSA electronic logging device mandate](https://regulations.apievangelist.com/store/fmcsa-eld-mandate/), named by 4 companies. The report records that it specified the data elements and the transfer mechanism an inspector may use, that paper logs are gone, and that fleet and telematics posts the lowest agent readiness in that market at 33.2, with 4 percent [MCP](https://standards.apievangelist.com/store/model-context-protocol/) adoption and 15 percent event surfaces. [UNECE WP.29](https://regulations.apievangelist.com/store/unece-wp29/) governs vehicle cybersecurity and software update management for type approval. Consent and delegated identity is unsatisfied by 96 percent of that cohort and documented scopes sit at 11 percent.

Climate carries five instruments. [CSRD](https://regulations.apievangelist.com/store/csrd/) requires reporting against the European Sustainability Reporting Standards and is the only climate regime requiring the statement to be tagged in machine-readable [XBRL](https://standards.apievangelist.com/store/xbrl/). [SFDR](https://regulations.apievangelist.com/store/sfdr/) turned ESG data into a compliance input for asset managers. The [EU Taxonomy](https://regulations.apievangelist.com/store/eu-taxonomy/) turned sustainability into a per-activity calculation. [CBAM](https://regulations.apievangelist.com/store/cbam/) requires importers to report embedded emissions, and [EUDR](https://regulations.apievangelist.com/store/eudr/) requires due-diligence statements on deforestation-linked commodities. The report notes that on the last two the state builds the endpoint and the industry builds the client.

Gaming carries [COPPA](https://regulations.apievangelist.com/store/coppa/) as its most consequential regime, shaping account systems, chat, telemetry and advertising. GDPR applies with specific provisions for children's consent, and the UK Age Appropriate Design Code sets standards for services likely to be accessed by minors. The report records that the same mechanic is legal in one country and prohibited in another, and that consent and delegated identity is missing at 91 percent.

IoT is described as lightly regulated as a market and heavily regulated per deployment. The [EU Cyber Resilience Act](https://regulations.apievangelist.com/store/eu-cyber-resilience-act/), the UK PSTI Act and the US Cyber Trust Mark all apply to the device and its lifecycle. [HIPAA](https://regulations.apievangelist.com/store/hipaa/) reaches connected medical devices. The report notes PSTI and the CRA both require a stated support period, and that governance in that market averages 38.5 with operational transparency at 35.9.

HR sits under GDPR, CCPA and CPRA, the SEC human-capital disclosure rule, CSRD social metrics and the EU Pay Transparency Directive. The report notes employment is one of the few contexts where consent is explicitly a weak legal basis.

Government's instruments are open-data and transparency rather than conduct: the EU Open Data Directive, the US Foundations for Evidence-Based Policymaking Act and OPEN Government Data Act, UK public-sector transparency commitments, and Australia's [Consumer Data Right](https://regulations.apievangelist.com/store/consumer-data-right/). Consent and delegated identity is unsatisfied at 91 percent.

## The one regime that names a published artifact

The cybersecurity report singles out the EU Cyber Resilience Act, Regulation (EU) 2024/2847. It requires secure-by-design properties, vulnerability handling across a declared support period, an SBOM for top-level dependencies, reporting of actively exploited vulnerabilities to ENISA, and a coordinated vulnerability disclosure policy with a single point of contact.

The report calls it the first time a regulator has asked for a published artifact at a findable location rather than a process or a record. It measures 44 percent of that upper band as having one today, and states that figure is the baseline the next edition will be measured against.

[NIS2](https://regulations.apievangelist.com/store/nis2/) and [DORA](https://regulations.apievangelist.com/store/dora/) are recorded as reaching the customers of that market more than the market itself.

## The one regime that protects an API consumer

The creator economy report identifies the [Digital Markets Act](https://regulations.apievangelist.com/store/digital-markets-act/) as the only instrument anywhere in this research that constrains how a platform treats the businesses building on it, rather than constraining an API provider directly. It notes 191 well-built businesses in that cohort operate at the discretion of terms of service they do not write.

The same report covers the FTC endorsement guides, which require disclosure of material connections in sponsored content, the Digital Services Act transparency obligations, [CAN-SPAM](https://regulations.apievangelist.com/store/can-spam/) and the [ePrivacy Directive](https://regulations.apievangelist.com/store/eprivacy-directive/) for the newsletter platforms, and COPPA for creator tooling with an audience of minors.

## Where regulation restricts publication

Space and aerospace is the one market where a meaningful part of the regulatory load restricts publication rather than requiring it. ITAR and the EAR govern launch technology, high-resolution imagery, certain positioning and remote-sensing capabilities, and the technical data describing them. Resolution limits on commercial imagery have been a licensing question for decades.

Aviation adds certification rather than disclosure. DO-178C governs airborne software assurance, and EASA and FAA airworthiness regimes govern what may fly. The report records governance in that cohort at 41.5, the second highest measured, alongside 94 percent contract publication and 10 percent MCP.

## The market with no regime at all

Developer tools is recorded as the least regulated market in the research. There is no sectoral regime, and a company selling CI/CD or observability answers to its customers' compliance obligations rather than to its own. The report pairs that with the highest population median measured, the most complete contract fundamentals, zero described workflows, 92 percent missing idempotency and 10 percent documented scopes.

## What the reports measure alongside

Every regulatory section reports the same rubric dimension next to the regimes: consent and delegated identity, which reads whether a market publishes machine-readable AI usage preferences, identified agent traffic or equivalent.

It is unsatisfied by 89 percent in data analytics, 91 percent in artificial intelligence, gaming and government, 96 percent in mobility, and 97 percent in weather and geospatial, which is the worst figure recorded anywhere in the series.

## The counts behind all of this

The regulations directory holds 96 entries. Eight industries carry a machine-readable list of regimes in the rubric alongside their standards: banking, energy, government, health, insurance, payments, securities and telecommunications. The remaining markets have a written regulatory layer with no machine-readable spine behind it.

One finding recurs across the sections and the reports state it in nearly identical terms: a mandate produces what it names. The AI Act named documentation and oversight. The ELD rule named a recording obligation and an inspection interface. Open-data policy named publication. CSRD named a tagged filing. In each case the reports measure exactly that and record what sits next to it.

Every regulation named above has a detail page in the [API Evangelist regulations directory](https://regulations.apievangelist.com/). The reports are at [reports.apievangelist.com](https://reports.apievangelist.com/).
