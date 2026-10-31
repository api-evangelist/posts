---
published: true
layout: post
title: 'E-Invoicing: A Bundle For The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/e-invoicing-a-bundle-for-the-shape-of-the-answer.png
date: 2026-11-20
author: Kin Lane
tags:
  - E-Invoicing
  - Tax
  - Peppol
  - EN 16931
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
This is the last of the bundles I've been building, pairing a JSON Schema with OpenLint-format rules, since I found out that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/). I saved [e-invoicing](https://apievangelist.com/2026/10/29/e-invoicing-the-shape-of-the-answer/) for the end because it's the one industry that has already shipped both halves. Peppol publishes the code lists, and publishes Schematron rules that check what a schema can't. It's the pattern I've spent this whole series building, and they got there first.

## The answer I picked

Turn a PDF invoice's extracted text into EN 16931 business terms, ready to bind to UBL. Last time I said the shape lives in XSD and Schematron, that APIs wrap it in a base64 string, and that somebody has to translate the semantic model into what an inference engine consumes. This is a small attempt at that translation.

So I'm keying the JSON by the business terms themselves: `BT-1` is the invoice number, `BT-131` a line's net amount, `BT-118` a VAT category code. That's unusual for JSON, but EN 16931 defines the invoice semantically, and the BT numbers are how the [Peppol rules](https://docs.peppol.eu/poacc/billing/3.0/rules/ubl-tc434/) refer to everything. It makes the rules read almost word for word like the standard. This is a subset of mine, far short of the full model, and it doesn't make anything Peppol conformant.

```yaml
bundle:
  id: einvoicing-en16931-invoice
  version: 0.1.0
  status: illustrative            # a JSON subset of ours, keyed by EN 16931 business terms. Not Peppol conformance.
  answers: Turn a PDF invoice into EN 16931 business terms ready to bind to UBL
  derived_from:
    - https://docs.peppol.eu/poacc/billing/3.0/rules/ubl-tc434/
    - https://docs.peppol.eu/poacc/billing/3.0/codelist/UNCL5305/
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 4096, seq_seed: 20261120}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [documentText, currencies]
  rules:
    text-was-extracted:
      description: An image-only PDF needs extraction before this step
      given: $.context
      severity: error
      then: {field: documentText, function: truthy}
    currency-list-present:
      description: The currency list becomes the enum
      given: $.context.currencies
      severity: error
      then: {function: length, functionOptions: {min: 1}}
shape:
  type: object
  additionalProperties: false
  required: [BT-1, BT-2, BT-3, BT-5, lines, vat, totals]
  properties:
    BT-1: {type: string, minLength: 1, maxLength: 64}
    BT-2: {type: string, format: date}
    BT-3: {const: "380"}
    BT-5: {enum: "${context.currencies}"}
    lines:
      type: array
      minItems: 1
      items:
        type: object
        additionalProperties: false
        required: [BT-126, BT-131, BT-151, BT-152]
        properties:
          BT-126: {type: string, minLength: 1}
          BT-131: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
          BT-151: {enum: [AE, E, S, Z, G, O, K, L, M]}
          BT-152: {type: number, minimum: 0, maximum: 100}
    vat:
      type: array
      minItems: 1
      items:
        type: object
        additionalProperties: false
        required: [BT-116, BT-117, BT-118, BT-119]
        properties:
          BT-116: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
          BT-117: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
          BT-118: {enum: [AE, E, S, Z, G, O, K, L, M]}
          BT-119: {type: number, minimum: 0, maximum: 100}
          BT-120: {type: string, minLength: 3}
    totals:
      type: object
      additionalProperties: false
      required: [BT-106, BT-109, BT-110, BT-112, BT-115]
      properties:
        BT-106: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
        BT-109: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
        BT-110: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
        BT-112: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
        BT-115: {type: string, pattern: "^-?[0-9]{1,12}\\.[0-9]{2}$"}
output:
  rules:
    BR-CO-10:
      description: Sum of line net amounts (BT-106) equals the lines (BT-131)
      given: $
      severity: error
      then:
        function: sumEquals
        functionOptions: {items: answer.lines, field: BT-131, total: answer.totals.BT-106}
    BR-CO-14:
      description: Total VAT (BT-110) equals the category amounts (BT-117)
      given: $
      severity: error
      then:
        function: sumEquals
        functionOptions: {items: answer.vat, field: BT-117, total: answer.totals.BT-110}
    BR-CO-15:
      description: Total with VAT (BT-112) equals BT-109 plus BT-110
      given: $
      severity: error
      then:
        function: addsUp
        functionOptions: {total: answer.totals.BT-112, parts: [answer.totals.BT-109, answer.totals.BT-110]}
    BR-E-10:
      description: An Exempt VAT breakdown carries an exemption reason
      given: "$.answer.vat[?(@['BT-118']=='E')]"
      severity: error
      then: {field: BT-120, function: truthy}
    BR-Z-10:
      description: A Zero rated VAT breakdown carries no exemption reason
      given: "$.answer.vat[?(@['BT-118']=='Z')]"
      severity: error
      then: {field: BT-120, function: falsy}
    BR-E-05:
      description: An Exempt line has a VAT rate of zero
      given: "$.answer.lines[?(@['BT-151']=='E')]"
      severity: error
      then: {field: BT-152, function: falsy}
    real-issue-date:
      description: The decoder checks date syntax, so check the calendar here
      given: $.answer
      severity: error
      then:
        function: schema
        functionOptions:
          schema:
            type: object
            properties:
              BT-2: {type: string, format: date}
on_failure:
  error: {retry: 2, change: [seq_seed, append_rule_messages_to_prompt], then: send_to_accounts_payable}
  always: {action: bind_to_ubl_and_run_the_official_schematron}
```

## Where the design choices are

**The rule IDs are the standard's.** I named the arithmetic and category rules with their Peppol IDs, because they're restatements of the published rules. `BR-CO-10` says the sum of line net amounts equals the lines. `BR-CO-15` says the total with VAT equals the total without VAT plus the VAT. `BR-E-10` says an exempt VAT breakdown needs an exemption reason. When one of these fires, an accounts payable person can look it up in the same place they'd look up any other Peppol rejection. Every other bundle in this series invented its rule names. This one didn't have to.

**The category list is [Peppol's](https://docs.peppol.eu/poacc/billing/3.0/codelist/UNCL5305/).** The nine codes are the UNCL5305 subset: AE, E, S, Z, G, O, K, L, M. That's what I meant last time about code lists being terminals in a grammar, and it held. It also tells you what a VAT category can never be, such as `REDUCED`.

**It only checks the rules that fit.** I implemented six Peppol rules out of the many on that page. I left out `BR-CO-13`, because this subset has no allowances or charges to subtract, and `BR-CO-16` on the amount due, and all the per-rate breakdown rules like `BR-S-08`. They would run the same way, and a few would need more custom functions.

**Translating Schematron wasn't free.** I said I'd want to know how much would port. For this sample, the arithmetic needed custom functions and the conditional rules, like `BR-E-10` and `BR-Z-10`, fit in the linter's core functions with a JSONPath filter. Peppol's Schematron is XPath over XML with far more expressive reach than a JSONPath filter, so the fuller cross-references may not port this cleanly. I haven't tried them.

**A real date, again.** `real-issue-date` exists because the decoder would take February 31. It's the same rule as in healthcare, and I expect you'd want it in nearly every bundle that has a date.

## How it runs as part of inference

1. **Input rules run first.** An image-only PDF with no text, or no currency list, stops here. OCR is a separate step, and it comes with its own errors, which this bundle inherits and can't see.
2. **The shape is bound and compiled**, in about 24 milliseconds on my laptop against DeepSeek's real tokenizer.
3. **The decoder generates business terms** under the mask. It can't invent a category or a currency.
4. **Output rules run on the answer.** The money comparisons use integer minor units on decimal strings, so no float ever enters into it.
5. **Failures retry twice, with the failing rule's text in the prompt.** Then they go to accounts payable. A message like "answer.totals.BT-112 is 169.00 but answer.totals.BT-109 + answer.totals.BT-110 is 170.00" is useful repair input for a model, because it says exactly what to fix.
6. **The output gets bound to UBL and run through the official Schematron.** I want to stress this one. `on_failure.always` says so because my rules aren't the authority. The published validators are. A bundle's job is to raise the odds that an invoice survives them on the first pass.

## What the fixtures showed

These are hand-written documents testing each path, not model output.

- A clean two-line invoice, one standard rated at 19% and one exempt, passed everything.
- A document with a line sum that doesn't match, a VAT total that doesn't match, a grand total that doesn't add up, an exempt line at 7%, an exempt breakdown without a reason, a zero-rated breakdown with one, and an issue date of February 31 **was accepted by the decoder**. The rules flagged all seven problems. That's every output rule in the file.
- `REDUCED`, an invented category, was refused by the decoder.
- No document text and no currencies were stopped by the input rules.

That second fixture is the best single demonstration in the series. The decoder took an invoice with seven different problems, and the receiving system would have bounced it.

## What's still missing

Determinism is what I said makes this defensible: the same PDF should give the same VAT category codes on a re-run. These tests didn't exercise that, because no model ran. I also said tax treatment is the weaker half, and that hasn't changed. These rules check that a category is consistent with its rate and reason. Whether standard rate or exempt is the right treatment for that product, in that jurisdiction, is the question proprietary tax engines answer, and it's outside this file. A model confidently marking a taxable item exempt and giving a tidy reason passes every rule here.

The cross-border story is also missing. National formats like FatturaPA and XRechnung each have their own rules on top of the shared model, which means more bundles or layered rulesets. Layering rulesets is something the format is designed for, and I think it's a good fit here, but I haven't built one.

## Where this series ends up

Eight bundles later, here's what I'd say about the input and output layers of inference.

The most protective lines in these files are often the ones that remove something: a status a model can't set, a reserve it can't write, a patient it can't choose. Binding context at request time gives you much more than a static schema can. The rules earn their place on arithmetic, on relationships between fields, on whether a claim traces back to its source, and on every keyword the decoder quietly doesn't enforce. And in every single industry, I ended up writing the same sentence: the checks can prove an answer is consistent, but they can't prove it's right.

All of this was tested without a model. I ran real grammars against a real tokenizer with documents I wrote myself, so what I know is that the checks behave as designed. What I don't know is how often a real model trips them, what the retries cost, or whether DeepInfer's determinism holds with all of this attached. That takes real hardware, and that's the next thing I want to find out.
