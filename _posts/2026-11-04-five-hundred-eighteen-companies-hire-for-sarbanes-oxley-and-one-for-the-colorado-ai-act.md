---
published: true
layout: post
title: 'Five Hundred Eighteen Companies Hire For Sarbanes-Oxley And One For The Colorado AI Act'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/five-hundred-eighteen-companies-hire-for-sarbanes-oxley-and-one-for-the-colorado-ai-act.png
date: 2026-11-04
author: Kin Lane
tags:
  - Regulation
  - Compliance
  - Artificial Intelligence
  - Governance
  - Insights
  - Hiring
---
There is a lot of noise right now about AI regulation. Job postings are a good place to check how much of it has turned into work someone is being hired to do.

The Q3 2026 Insights pull read 343,299 job postings from 984 companies — 775 in the Fortune 1000 and 209 API providers from the APIs.io catalog. Every number below is a count of **companies whose postings name the regulation or framework at least once**, not a count of mentions.

## The regulation in hiring is old regulation

| | companies | share of the 984 |
|---|---:|---:|
| Sarbanes-Oxley | 518 | 52.6% |
| NIST | 342 | 34.8% |
| GDPR | 324 | 32.9% |
| HIPAA | 233 | 23.7% |
| SOC 2 | 199 | 20.2% |
| CCPA / CPRA | 181 | 18.4% |
| EU AI Act | 66 | 6.7% |
| Colorado AI Act | 1 | 0.1% |

More than half of these companies name Sarbanes-Oxley, a law from 2002. A third name GDPR. Nearly a quarter name HIPAA, which dates to the 1990s. The NIST frameworks are in a third.

The EU AI Act, the most talked-about technology regulation of the last two years, is in sixty-six companies. The Colorado AI Act, the first comprehensive state AI law in the US, is in one.

## How it shows up

The old regulations show up as routine work. "Coordinate internal and external audits including sox itgc." "Full sox compliance." "Frameworks such as nist csf cobit iso 27001 soc 1 soc 2 hipaa." They come in lists, because the people doing this work deal with all of them at once.

The EU AI Act mostly shows up in exactly those same lists, sitting next to the privacy and resilience rules: "digital regulations like general data protection regulation gdpr and ai act", "regulatory requirements e g dora eu ai act nis2 cyber resilience act". Fifty-nine of the sixty-six companies that name the EU AI Act also name GDPR. It is being handed to the privacy and compliance people who already carry GDPR, not to a new AI governance team.

Where AI governance does get a framework, it is often NIST's: "the owasp top 10 for llm applications mitre atlas and the nist ai risk management framework".

## AI hiring is way ahead of AI regulation hiring

Two weeks ago I wrote about [the AI vendors and products in these postings](/2026/10/21/three-hundred-eighty-companies-say-claude-and-one-hundred-forty-two-say-anthropic/). Four hundred ninety-seven companies name at least one of Claude, ChatGPT, OpenAI, Anthropic, Gemini, Mistral, or Hugging Face. Sixty-one of those also name the EU AI Act — about one in eight.

So for every company hiring someone to work with AI that is also hiring someone who knows the AI regulation, there are seven that are not. That does not mean the other seven are ignoring it, since a lot of compliance work never says the name of the law in a job posting. But it is a measure of how far behind the regulatory vocabulary is in the hiring that is happening right now.

## The two groups split on the old laws, not the new one

| | Fortune 1000 | API providers |
|---|---:|---:|
| Sarbanes-Oxley | 60.8% | 22.5% |
| NIST | 37.7% | 23.9% |
| GDPR | 33.2% | 32.1% |
| HIPAA | 24.4% | 21.1% |
| CCPA / CPRA | 19.6% | 13.9% |
| SOC 2 | 15.7% | 36.8% |
| EU AI Act | 6.7% | 6.7% |

Sarbanes-Oxley is the biggest split, 60.8% of the Fortune 1000 against 22.5% of the API providers, which makes sense: it applies to publicly traded companies, the Fortune 1000 is mostly made of them, and a lot of API providers are still private. SOC 2 goes the other way: an API company names it at more than twice the enterprise rate, because SOC 2 is the report it has to hand to every one of those enterprises before they sign.

GDPR is even. And the EU AI Act is exactly even, 6.7% on both sides. The new AI rule has not sorted itself into one world or the other yet.

As always, the provider side is 209 companies against 775. Directions, not measurements.

## What we are not quoting

A couple of tempting numbers are left out on purpose.

- **PCI.** "PCI DSS" in a posting is real, and it is in a lot of them. But the bare letters "pci" also match PCI Express, the hardware bus, and we have not separated the two. Until we can, there is no PCI number here.
- **ISO/IEC 42001.** The AI management system standard is the one I most wanted to report, because it is the closest thing to an AI equivalent of SOC 2. We could not verify the count well enough to quote it this quarter.

## What I think it means

Regulation shows up in hiring once it becomes somebody's job to prove compliance to an auditor. Sarbanes-Oxley got there twenty years ago. GDPR got there over the last eight. The AI rules are not there yet, and in most organizations they are being added on top of the privacy and security work that already exists rather than given their own people.

For API providers that should be a familiar story. SOC 2 is the evidence your enterprise customers ask for today. As AI regulation catches up, the same customers are going to ask what your API and your MCP server do with their data when an agent is the one calling, and where that is written down. API Evangelist tracks [regulatory posture in the Kin Score](/2026/10/09/the-kin-score-facet-by-facet-regulatory-posture/) for exactly this reason. The providers that can answer with a published, machine-readable posture will be ahead of the ones scrambling to write one.

## How to read these numbers

- **This is hiring intent, not production use.** Naming a regulation in a posting says a company wants people who know it, not how well it complies.
- **Q3 2026 is the first point in the series.** Nothing here is rising or falling yet, including the AI rules. The Q4 read on November 20 is the first comparison we can make.
- **Only verified terms are quoted.** Every regulation above was matched on word boundaries and checked against the postings before it appeared.

The full Insights data, including the regulations named in hiring across every qualified company, is available through the [APIs.io API and MCP server](https://apis.io/insights/).

Five hundred eighteen for Sarbanes-Oxley. One for Colorado. The Q4 read comes in on November 20, and I will be looking at the bottom of this table first.
