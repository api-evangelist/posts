---
published: false
layout: post
title: 'The Two-Dollar-An-Hour Layer Under The AI'
date: 2027-01-15 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Automation
  - AI
  - Data Labeling
  - Content Moderation
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act three: automate.*

Automation does not always remove work. Sometimes it moves the work somewhere you cannot see it.

A TIME investigation found that workers in Kenya, employed through the outsourcing company Sama, were paid between $1.32 and $2 an hour to label toxic content used to train ChatGPT. The job was to read and tag descriptions of violence, self-harm, sexual abuse of children and worse, so the model would learn not to produce them. In 2023 four former workers petitioned the Kenyan government to investigate, saying the work had left some of them traumatized. Sama said it provided access to therapists around the clock. Sama ended its contract with OpenAI in 2022, eight months early.

The same pattern shows up in content moderation. Daniel Motaung, a former Sama moderator, sued Sama and Meta in 2022 over working conditions. A later case brought by moderators over their dismissal grew to 185 plaintiffs, and in 2024 Kenya's Court of Appeal ruled that Meta could be sued in Kenyan courts. I have not confirmed where those cases stand today.

## What the APIs show

On APIs.io, [Sama](https://apis.io/providers/sama/) publishes no APIs and scores emerging. That is about what I would expect. The work is delivered as a service, by people, not through an interface anyone outside can inspect.

Now look at the other end. A developer calls a model API, sends a prompt and gets a safe, polite answer back in under a second. Nothing in that response tells you that part of the reason it is safe is a person in Nairobi who spent a shift reading the worst things people write, for less than the price of a coffee.

## Why it matters

In the second act of this series I wrote about platforms extracting value from the people on both sides of them. This is the same thing one layer down. Automation in rich markets created hard, low-paid work in poorer ones, and the API hides it by design. Any honest accounting of what an AI API costs should include the people underneath it.

Sources: [Business & Human Rights Resource Centre](https://www.business-humanrights.org/zh-hant/最新消息/kenya-chatgpt-content-moderators-decry-toll-of-ai-model-training-file-government-petition-for-investigation-on-exploitative-conditions), [Futurism](https://futurism.com/contractors-openai-petition), [TechCrunch](https://techcrunch.com/2023/03/20/meta-faces-third-lawsuit-in-kenya-as-moderators-claim-illegal-sacking-blacklisting), [Computer Weekly](https://www.computerweekly.com/feature/Kenyan-workers-win-High-Court-appeal-to-take-Meta-to-trial), [Privacy International](https://privacyinternational.org/examples/5127/kenyan-content-moderators-sue-over-working-conditions).
