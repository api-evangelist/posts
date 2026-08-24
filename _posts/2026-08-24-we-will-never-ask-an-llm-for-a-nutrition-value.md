---
published: true
layout: post
title: We Will Never Ask an LLM for a Nutrition Value
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/we-will-never-ask-an-llm-for-a-nutrition-value.png
date: 2026-08-24
author: Kin Lane
tags:
  - Artificial Intelligence
  - Data
  - Nutrition
  - Health
  - Conversations
  - Trust
---

I have been asking data providers the same question for two years now — where do you draw the line on what AI is allowed to touch? — and I mostly get mush back. Everybody has a policy. Almost nobody has a boundary. Then I sat down with Sebastian Loch, who runs business development at [fatsecret](https://www.fatsecret.com/), for [a conversation that went out last week](https://conversations.apievangelist.com/store/2026-08-18-sebastian-loch.html), and he drew the cleanest line I have heard anyone draw:

> "All of our processes are now heavily supported by AI, but we can never rely on any output from an LLM for the data itself. We could never ask an LLM for a given piece of nutritional information — that is not something we have ever done and never will."

That is a boundary. It is stated in the negative, it names the exact artifact it protects, and you can check whether they are honoring it. I want more of the companies in my catalog to be able to say a sentence like that about their own data.

## The reasons are the interesting part

He did not stop at "hallucinations," which is where most people stop. He gave three reasons, and the third one is the one nobody is writing about:

> "There are hallucinations, there is bias, and there are large inconsistencies outside the US in particular, because so much of the training data for the big LLMs was English-language and Western-centric. Whenever you look outside the US and outside English, the reliability and confidence levels drop significantly. Given we operate globally at scale, we cannot rely on those outputs by any means."

**LLM reliability is a geography problem, not just a domain problem.** We talk about model accuracy as though it were a single number that belongs to a model. It is not. It is a number that belongs to a model *and a market*. fatsecret operates across sixty-two countries and twenty-six languages, by Sebastian's count, so the failure mode is not abstract to them — a model that is confident and wrong about a Belgian supermarket item is a different business than a model that is confident and wrong about an American one. Anyone whose data has a locale attached should be testing their AI assumptions per locale, and I have not seen a single provider publish that matrix.

The health context sharpens it further. Their buyers are increasingly medical and pharmaceutical. A generated number that is plausible and wrong is not a bad user experience in that world, it is a liability, and it does not become less of one because the model sounded sure.

## The line is drawn at the value, not at the technology

Here is what keeps this from being an anti-AI post, and why I think it is a rule other data providers can lift verbatim: fatsecret is *aggressively* using AI. It is just never the thing that produces the number.

They had a machine learning team from 2016 and spent close to a decade failing to ship food image recognition with classical computer vision — the single most-requested feature on their API. LLMs arrive, all of that work goes in the bin, and they rebuild the feature on top of the models and ship it in mid-to-late 2024. But look at how it works: the model identifies ingredients and estimates weights, and then those get **matched against the verified nutrition dataset for that user's country**. The AI does recognition. The database does nutrition. Same pattern for their natural language processing — a user says "for breakfast I had a bowl of cereal, a banana, and a cappuccino," the model parses the sentence, the database supplies the values.

So the rule is not "AI here, no AI there" by system or by team. It is:

**Use AI for everything around the data — recognition, parsing, verification workflow, publishing, support. Never for the value itself.**

That is a rule you can hand to an engineer without a meeting. And it is a rule that shows up in an API contract, because the thing on the other side of it is a verified lookup against a real dataset rather than a generation call. Two responses can look identical in JSON and be completely different products.

## Why this matters for the rest of the catalog

I spend my days scoring API providers on what they actually publish, and provenance is the dimension that separates a data business from a wrapper. Presence is not provenance — an endpoint that returns a nutrition value tells you nothing about where that value came from. Right now there is no field, no header, and no standard property that lets a provider say "this value was verified by a human against a source" versus "this value was generated." Buyers in regulated sectors are going to start asking for exactly that, and the providers who can answer are the ones who drew the line early enough to know where it is.

Sebastian's whole argument in this conversation is that the moat held — twenty years of verified data, a bootstrapped and profitable company, and the AI wave turning out to be an accelerant rather than a solvent — and that it held because of global scale and two decades of investment in the API. I have a lot more to say about that part, and about what a hundred-fold jump in daily developer signups does to a company that never raised money. For now I would settle for more providers being able to finish this sentence out loud: *we will never ask an LLM for a ______.*

Give the whole conversation a listen — [API Evangelist Conversation with Sebastian Loch](https://conversations.apievangelist.com/store/2026-08-18-sebastian-loch.html), also [on YouTube](https://www.youtube.com/watch?v=-ym0WKjZwZ8).
