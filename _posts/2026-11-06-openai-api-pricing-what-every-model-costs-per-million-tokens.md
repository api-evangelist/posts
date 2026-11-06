---
published: true
layout: post
title: 'OpenAI API Pricing: What Every Model Costs Per Million Tokens'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openai-api-pricing-what-every-model-costs-per-million-tokens.png
date: 2026-11-06 15:00:00 +0000
author: Kin Lane
tags:
  - OpenAI
  - Pricing
  - Artificial Intelligence
  - Large Language Models
---

When people ask me what the OpenAI API costs, they usually want one number. There isn't one. OpenAI sells its API on metered usage: you pay per million tokens, a token being roughly three quarters of a word, and the price depends on which model you call, whether the tokens go in or come out, and how fast you need the answer. I read [OpenAI's pricing page](https://developers.openai.com/api/docs/pricing) on November 5, 2026 and loaded every model's price into the [OpenAI profile on APIs.io](https://apis.io/providers/openai/#pricing), and this is what it says.

## How OpenAI charges

Three numbers matter for each model:

- **Input tokens**: what you send, meaning your prompt, instructions and any documents.
- **Output tokens**: what the model writes back. Output always costs more than input, between four and eight times as much depending on the model.
- **Cached input tokens**: input the API has seen recently and can reuse, billed at a tenth of the normal input price on the newest models and a quarter to a half on older ones like GPT-4.1 and GPT-4o Mini. If you send the same long instructions with every request, caching is where the savings are.

There are no seat licences and no monthly subscription on the API itself. You are billed for what you use.

## What the current models cost

These are OpenAI's standard prices per 1 million tokens for short-context requests:

| Model | Input | Output | Cached input |
|---|---|---|---|
| GPT-6 Astra | $10.00 | $50.00 | $1.00 |
| GPT-6.1 Sol | $2.00 | $10.00 | $0.10 |
| GPT-6.1 Terra | $1.00 | $5.00 | $0.05 |
| GPT-6 Luna | $0.10 | $0.50 | $0.01 |
| GPT-5.6 Sol | $4.00 | $20.00 | $0.40 |
| GPT-5.5 | $5.00 | $30.00 | $0.50 |
| GPT-5 | $1.25 | $10.00 | $0.125 |
| GPT-5 Mini | $0.25 | $2.00 | $0.025 |
| GPT-5 Nano | $0.05 | $0.40 | $0.005 |
| GPT-4.1 | $2.00 | $8.00 | $0.50 |
| GPT-4o Mini | $0.15 | $0.60 | $0.075 |
| o3 | $2.00 | $8.00 | $0.50 |

The table above is twelve of the twenty-seven models OpenAI lists. The [full list with every model is on APIs.io](https://apis.io/plans/openai/openai-plans-pricing/). Two things stand out to me. First, the newest generation is not the most expensive one: GPT-6.1 Sol costs half what GPT-5.6 Sol does. Second, the spread is enormous. GPT-6 Astra costs 125 times more per output token than GPT-5 Nano, so choosing the model is the biggest pricing decision you will make.

Long prompts cost more. On the newest models the long-context input rate is double the short-context rate, so GPT-6.1 Sol goes from $2.00 to $4.00 per million input tokens, and output rises by half, from $10.00 to $15.00. Several GPT-5.x models switch to the higher price once a request passes 272,000 tokens.

## Paying less, or more, for speed

The same model has different prices depending on how quickly you need the answer:

- **Batch** and **Flex** cost half the standard rate. Batch is for work you can submit now and collect later, like classifying a backlog of support tickets overnight. GPT-6.1 Sol drops to $1.00 input and $5.00 output.
- **Fast** costs twice the standard rate: $4.00 input and $20.00 output for GPT-6.1 Sol.
- **Ultrafast** costs six times standard: $12.00 input and $60.00 output for GPT-6.1 Sol.

If your users are not waiting on the response, Batch is the easiest saving available.

## Tools are billed on top

Built-in tools add their own charges. Web search is $10.00 per 1,000 calls, plus the retrieved search content billed as tokens at the model's rate. File search is $2.50 per 1,000 calls. Tokens the tools use are billed at the model you chose. OpenAI's page says the Responses, Chat Completions, Realtime, Batch and Assistants APIs are not priced separately; you pay for the model's tokens either way.

## Working out what you will spend

A rough method that works for most teams:

1. Measure a typical request: how many tokens go in and how many come out.
2. Multiply by your expected monthly volume.
3. Price it on two or three models from the table, because a smaller model is often good enough.
4. Take off the cached share of your input and anything you can move to Batch.

Your account also has spending and rate limits that rise as you pay more over time. OpenAI explains the tiers in its [rate limits guide](https://developers.openai.com/api/docs/guides/rate-limits), and the [rate limits on APIs.io](https://apis.io/rate-limits/openai/openai-rate-limits/) summarise them.

## Keeping up with changes

OpenAI moves its prices often. Our previous record, from September, ended at GPT-5.6 and listed three models that are no longer on the page. So check the date on any price you read, including mine. The [OpenAI pricing section on APIs.io](https://apis.io/providers/openai/#pricing) shows when each price was last read from OpenAI's page, next to its [Kin Score](https://apis.io/providers/openai/) and the 16 OpenAI APIs we track. If you are comparing providers, the same section exists for every provider we have pricing for.
