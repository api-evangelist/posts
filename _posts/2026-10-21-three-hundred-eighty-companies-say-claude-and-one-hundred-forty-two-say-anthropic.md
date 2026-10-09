---
published: true
layout: post
title: 'Three Hundred Eighty Companies Say Claude And One Hundred Forty-Two Say Anthropic'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/three-hundred-eighty-companies-say-claude-and-one-hundred-forty-two-say-anthropic.png
date: 2026-10-21
author: Kin Lane
tags:
  - Artificial Intelligence
  - LLMs
  - Claude
  - OpenAI
  - Insights
  - Hiring
---
Job postings do not name AI companies. They name AI products.

That is the clearest thing in the Q3 2026 Insights pull when you line up the vendors against what they sell. The pull read 343,299 job postings from 984 companies — 775 in the Fortune 1000 and 209 API providers from the APIs.io catalog. As always, every number below is a count of **companies whose postings name the term at least once**, not a count of mentions.

## The product beats the company

| | companies | share of the 984 |
|---|---:|---:|
| Claude | 380 | 38.6% |
| ChatGPT | 287 | 29.2% |
| OpenAI | 245 | 24.9% |
| Gemini | 182 | 18.5% |
| Anthropic | 142 | 14.4% |
| Hugging Face | 107 | 10.9% |
| Llama | 60 | 6.1% |
| Mistral | 25 | 2.5% |

Claude is named by 380 companies. Anthropic, the company that makes it, is named by 142. Two hundred fifty-nine companies say Claude and never say Anthropic; only twenty-one go the other way.

OpenAI is closer to its product, but the pattern holds. ChatGPT is in 287 companies, OpenAI in 245, and 126 companies name ChatGPT without ever naming OpenAI.

Nobody writes "experience with Anthropic" into a posting when what they want is someone who uses Claude Code every day. A posting asks for the thing you touch, and the thing you touch is a product: "comfortable experimenting with ai tools e g chatgpt claude copilot to accelerate research drafting and design". The vendor shows up when the work is about choosing between models or integrating with them: "familiarity with the modern ai tooling ecosystem including llm apis anthropic openai agent frameworks".

## Wide versus deep

Company counts and posting counts tell different stories here.

| | companies | postings | share of all postings |
|---|---:|---:|---:|
| Claude | 380 | 2,560 | 0.75% |
| ChatGPT | 287 | 5,092 | 1.48% |

Claude is named by more companies. ChatGPT is named in twice as many postings. Claude is spread across more employers, and ChatGPT goes deeper inside the ones that use it, the kind of name that ends up in a standard list of office tools and gets copied into posting after posting.

There is one more name that would sit near the top of this list, and it is not here on purpose. GitHub Copilot and Microsoft Copilot share the bare word "Copilot", so any count of one is quietly a count of both. Until those can be separated we report them together or not at all.

## The API providers name Claude at 1.75 times the enterprise rate

| | Fortune 1000 | API providers |
|---|---:|---:|
| Claude | 33.3% | 58.4% |
| ChatGPT | 28.9% | 30.1% |
| OpenAI | 25.0% | 24.4% |
| Gemini | 17.8% | 21.1% |
| Anthropic | 14.1% | 15.8% |

Most of these rows are within a few points between the two groups. Claude is not. Fifty-eight percent of the API providers name it against thirty-three percent of the Fortune 1000, a ratio of 1.75. No other name in that table comes close to that gap, and it fits what the postings ask for: Claude often shows up as a coding tool, and API companies are mostly engineering organizations.

Same caveat as every week: the provider side is 209 companies against 775, so that is a direction, not a measurement.

## By industry

Here is the share of companies, by industry, whose postings name at least one of OpenAI, ChatGPT, Anthropic, Gemini, Mistral, Hugging Face, or the OpenAI APIs. Industries with at least fifteen qualified companies.

| industry | with an AI vendor | companies | share |
|---|---:|---:|---:|
| Financial Technology | 12 | 16 | 75.0% |
| Media | 12 | 17 | 70.6% |
| Technology | 26 | 41 | 63.4% |
| Enterprise Software | 21 | 37 | 56.8% |
| Financial Services | 47 | 89 | 52.8% |
| API provider | 102 | 209 | 48.8% |
| Professional Services | 7 | 16 | 43.8% |
| Healthcare | 30 | 70 | 42.9% |
| Insurance | 13 | 31 | 41.9% |
| Retail | 12 | 29 | 41.4% |
| E-commerce Platform | 8 | 20 | 40.0% |
| Automotive | 11 | 28 | 39.3% |
| Construction | 6 | 21 | 28.6% |
| Consumer Goods | 14 | 53 | 26.4% |
| Energy | 10 | 38 | 26.3% |
| Utilities | 4 | 18 | 22.2% |
| Industrial | 15 | 77 | 19.5% |
| Logistics | 3 | 16 | 18.8% |

Fintech and media at the top, industrial and logistics at the bottom. Some of those industries are small, so a single company moves them several points. Financial services, with 89 companies, is the one I would put the most weight on, and it is above half.

Notice which name is missing from that list: Claude. The industry table counts a fixed set of vendor and model names, and Claude is not in it. Add Claude back in and the number of companies naming at least one AI vendor or model goes from 415 to 497. For the API providers it goes from 48.8% to 68.9%; for the Fortune 1000, from 40.4% to 45.5%. Eighty-two companies name Claude and none of the others. If you count AI vendors and leave out the product names, you are undercounting the people who are actually hiring.

## What I think it means

For anyone selling to these companies, this is a vocabulary lesson. The brand that lives in a job posting is the one people put their hands on every day, and right now for a lot of engineering teams that is a coding assistant, not a model API. If you are an API provider trying to understand how your customers will reach you through AI, the question is less "which model provider do they use" and more "which tool are their developers sitting in", because that is where your MCP server, your docs, and your OpenAPI are going to be read.

It is also a warning for anyone, including us, who builds a market map from vendor names. Count companies and you miss the products. Count products and you collide with words that mean something else. Claude needed a sampled verdict before we would quote it, for exactly that reason.

## How to read these numbers

- **This is hiring intent, not production use.** Naming Claude in a posting says a company wants people who know it, not that it is under contract with Anthropic.
- **Q3 2026 is the first point in the series.** Nothing here is rising or falling yet. The Q4 read comes out November 20, and that is the first comparison we can make.
- **Only verified terms are quoted.** Every name above was matched on word boundaries and sampled against the postings before it could appear. The Copilot names and a couple of model-library terms did not clear that bar this quarter and are left out.

The full Insights data, including the AI vendors and models across every qualified company, is available through the [APIs.io API and MCP server](https://apis.io/insights/).

Three hundred eighty for Claude, one hundred forty-two for Anthropic. I would like to know whether that gap narrows or widens when we read Q4 on November 20.
