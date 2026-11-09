---
published: true
layout: post
title: 'Consistent But Wrong'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/consistent-but-wrong.png
date: 2026-11-09
author: Kin Lane
tags:
  - Inference
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Decision Models
  - Governance
---
This all started with Jev. Last month I went looking at [decision models](https://apievangelist.com/2026/10/12/decision-models-agreed-on-the-questions-not-the-contract/), the wave of APIs that followed TypeSafe's Jev and its System One API in returning a choice, a score or a yes or no with probabilities instead of text. Eleven providers had converged on the same three questions. Almost none of them had published a contract, and none published calibration. Telnyx was the only one that said it plainly in its contract: "Scores describe relative preference, not calibrated correctness."

That line stuck with me. A decision model gives you an answer that is perfectly shaped and says nothing about whether it's right. When DeepSeek open-sourced DeepInfer a week later, with schema-constrained output and deterministic sampling in the box, I started asking what happens when *every* answer works like that. Not just yes or no, but [an invoice, a claim, a medication order, a bid request](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/). One shape for each industry, held in place by a decoder and checked by rules.

Since then I've written that series one industry at a time, and then built a bundle for each: a JSON Schema the decoder enforces, plus [OpenLint](https://openlint.org) rules that check what a grammar can't. The very first bundle was Jev's own shape, a pick-one answer with probabilities. In every one of those posts I ended up writing some version of the same sentence: the checks can prove an answer is consistent, but they can't prove it's right.

Last week I stopped arguing that and measured it.

## The test

I generated 1,600 synthetic documents, 200 for each of the eight scenarios, each with a known correct answer. They're templates, not real records, with no real patients, payments or claims. About a third are deliberately hard: relative dates, two amounts where only one is right, corrections partway through, a UK brief that has to become `GBR`. I sent each to DeepSeek V3.2 on Amazon Bedrock at temperature 0, with the bundle's JSON Schema in the prompt. This is the baseline, the way most teams do it today, with no decoder holding the model to the shape. Then I scored every answer twice: once with the bundle's schema and rules, and once against the known answer.

The number I cared about is the answers that pass every check and are still wrong.

## What came back

| Scenario | Passes every check | Actually correct | Passes checks but wrong |
|---|---|---|---|
| Decision, pick one | 100% | 100% | 0% |
| Payments | 98% | 98% | 0% |
| Shipping | 99.5% | 94% | 6% |
| Telecom | 99.5% | 60.5% | **39%** |
| Healthcare | 100% | 43% | **57%** |

The Jev-style decision bundle came out perfect, which is the least surprising result here. Picking one of three options from a support ticket is easy, and the probabilities always added up. The rules checked the shape of the confidence. They couldn't check whether it's calibrated, and that gap is exactly where the decision models post left off.

The healthcare row is the one to look at. Every answer passed every check. More than half were the wrong drug strength. When I looked at why, every single miss had picked the first of the two candidate RxNorm codes. The bundle handed the model bare codes, `617310` and `617311`, with nothing saying which is 20 mg and which is 40 mg. It guessed. The guess was a valid code, in the list, in the right field, with the patient and the prescriber bound correctly. All 114 wrong answers were caught by nothing.

Telecom passed 99.5% of its checks and got the risk band wrong 39% of the time. The policy was in the prompt. The model misread it, confidently, inside a valid shape.

## When the shape explains itself

The healthcare result looked like a model failure and turned out to be mine. So I ran a second pass on four scenarios with descriptions added to the schema at run time: what each field means, and what each code stands for. The bundles themselves didn't change.

| Scenario | Correct, bare shape | Correct, described shape |
|---|---|---|
| Advertising | 42.5% | 99.5% |
| Healthcare | 43% | 94.5% |
| E-invoicing | 11% | 100% |
| Insurance | 73% | 76% |

E-invoicing is a good example of what bare names do. I'd keyed the answer by the EN 16931 business term numbers, `BT-109`, `BT-110`, `BT-112`, because that's how the standard names them. Without descriptions, the model put the grand total in the VAT field almost every time. The rules caught that, 171 of 178 wrong answers, because the arithmetic stopped adding up. With descriptions, it got every one right.

So the first lesson is about the shapes themselves. **A field name or a code is not a description.** A shape built for a validator can get away with bare names, because a validator doesn't need to understand anything. A shape built for a model has to explain itself, and nothing in the toolchain warns you when it doesn't. The bundles I published over the last two weeks don't have descriptions. They'll get them.

## What descriptions don't fix

Insurance is the row that matters most, because descriptions barely moved it. With the field described, every answer passed every check, and 24% were still wrong. They were all relative dates. "Last Thursday", written in an email received on a Sunday, came back two days early. The date is a real date, inside the policy period, before the email, on the right policy, with the right coverage, citing the email word for word. Every rule I wrote passes it. It's wrong.

That's what consistent but wrong looks like in practice. It isn't a malformed answer, or an obvious hallucination. It's a careful, well-shaped answer with one wrong fact in it, the kind of answer a reviewer skims past because everything around it is right.

## What the checks are good for

None of this means the rules don't work. When a rule could see a mistake, it caught it: 171 of 178 bad invoices, every wrong payment, and 59 advertising requests that described both a website and an app. Rules are very good at relationships: sums, counts, dates in order, a quote that has to appear in the source. They're blind to judgment: which strength, which risk band, which Thursday.

Two other things showed up along the way. Without a decoder, between 2% and 48% of answers arrived wrapped in code fences or prose, depending on the scenario, which is exactly what constrained decoding removes. And the hosted endpoint wasn't deterministic at temperature 0. When I replayed 160 documents three times each, only 59 gave the same answer all three times. That's the gap batch-invariant inference exists to close, and it's what I'll test next on vLLM.

## Where this leaves the shape of the answer

I started from Jev, an answer whose shape everyone agreed on and whose meaning nobody could prove. A bundle doesn't change that. It moves the line. With a good shape, described fields, bound context and rules, the failures that are left are almost entirely consistent and wrong. In a way that's progress, because the noise is gone and what's left is the real question. But it's also the most dangerous kind of failure, because it looks exactly like success.

So I'd say this to anyone putting a constrained model in front of a business process. Measure the answers that pass, not just the ones that fail. Keep a set of documents with known answers and run it every time the shape, the model or the engine changes. And keep a person on the judgments the rules can't see.

Limits, as always. These are templates, so read the accuracy as an upper bound on real documents. It's DeepSeek V3.2 on a hosted endpoint, not V4.1 Flash, and no decoder held the output to the shape. That part comes next, with real hardware, in a week or two.
