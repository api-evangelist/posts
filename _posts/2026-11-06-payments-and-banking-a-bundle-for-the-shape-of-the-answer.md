---
published: true
layout: post
title: 'Payments And Banking: A Bundle For The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/payments-and-banking-a-bundle-for-the-shape-of-the-answer.png
date: 2026-11-06
author: Kin Lane
tags:
  - Payments
  - Banking
  - ISO 20022
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
This week I've been building bundles that pair a JSON Schema with OpenLint-format rules, after finding out that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/). When I [looked at payments and banking](https://apievangelist.com/2026/10/22/payments-and-banking-the-shape-of-the-answer/), I said constrained output moves the remaining errors from formatting into meaning. Payments turns out to be the clearest case of what's left once the format is solved, because so many of the fields have to agree with each other.

## The answer I picked

Turn an approved invoice into a credit transfer instruction shaped like an ISO 20022 `pain.001`. Last time I couldn't find a JSON Schema of the message that a decoder could use directly, and that hasn't changed, so I had to make one. I want to be clear about what it is: the element names are ISO 20022's, as they appear in [published bank guides](https://developer.gs.com/docs/services/transaction-banking/cbpr+-pain001/) and in the contracts of banks like Citi, but the JSON binding is mine. I flattened some of the nesting to fit the page. You'd map this onto the real XML before it went anywhere, and a bank's own implementation guide would have the last word.

```yaml
bundle:
  id: payments-credit-transfer
  version: 0.1.0
  status: illustrative            # ISO 20022 element names in a JSON binding of ours, not a registered schema
  answers: Turn an approved invoice into a pain.001-style credit transfer instruction
  derived_from:
    - ISO 20022 pain.001 element names, as used in published bank contracts and guides
    - https://developer.gs.com/docs/services/transaction-banking/cbpr+-pain001/
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 2048, seq_seed: 20261106}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [invoice, debtorName, debtorIban, currencies, today]
  rules:
    debtor-account-valid:
      description: Check our own account before spending any inference
      given: $.context.debtorIban
      severity: error
      then: {function: ibanMod97}
    invoice-attached:
      description: An instruction needs a source document
      given: $.context
      severity: error
      then: {field: invoice, function: truthy}
shape:
  type: object
  additionalProperties: false
  required: [GrpHdr, PmtInf]
  properties:
    GrpHdr:
      type: object
      additionalProperties: false
      required: [MsgId, NbOfTxs, CtrlSum, InitgPty]
      properties:
        MsgId: {type: string, minLength: 1, maxLength: 35}
        NbOfTxs: {type: string, pattern: "^[0-9]{1,15}$"}
        CtrlSum: {type: string, pattern: "^[0-9]{1,12}\\.[0-9]{2}$"}
        InitgPty:
          type: object
          additionalProperties: false
          required: [Nm]
          properties:
            Nm: {const: "${context.debtorName}"}
    PmtInf:
      type: object
      additionalProperties: false
      required: [ReqdExctnDt, DbtrAcct, CdtTrfTxInf]
      properties:
        ReqdExctnDt: {type: string, format: date}
        DbtrAcct: {const: "${context.debtorIban}"}
        CdtTrfTxInf:
          type: array
          minItems: 1
          items:
            type: object
            additionalProperties: false
            required: [EndToEndId, InstdAmt, Ccy, CdtrNm, CdtrIBAN]
            properties:
              EndToEndId: {type: string, minLength: 1, maxLength: 35}
              InstdAmt: {type: string, pattern: "^[0-9]{1,12}\\.[0-9]{2}$"}
              Ccy: {enum: "${context.currencies}"}
              CdtrNm: {type: string, minLength: 1, maxLength: 140}
              CdtrIBAN: {type: string, pattern: "^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$"}
output:
  rules:
    control-sum-matches:
      description: CtrlSum must equal the sum of the instructed amounts
      given: $
      severity: error
      then:
        function: sumEquals
        functionOptions: {items: answer.PmtInf.CdtTrfTxInf, field: InstdAmt, total: answer.GrpHdr.CtrlSum}
    transaction-count-matches:
      description: NbOfTxs must equal the number of transactions
      given: $
      severity: error
      then:
        function: countEquals
        functionOptions: {items: answer.PmtInf.CdtTrfTxInf, count: answer.GrpHdr.NbOfTxs}
    creditor-iban-checks-out:
      description: The pattern checks the form, this checks the check digits
      given: $.answer.PmtInf.CdtTrfTxInf[*].CdtrIBAN
      severity: error
      then: {function: ibanMod97}
    no-duplicate-transactions:
      description: The decoder does not enforce uniqueItems, so this rule catches exact repeats
      given: $.answer.PmtInf
      severity: error
      then:
        function: schema
        functionOptions:
          schema:
            type: object
            properties:
              CdtTrfTxInf: {type: array, uniqueItems: true}
    not-in-the-past:
      description: A payment cannot be executed before today
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: context.today, later: answer.PmtInf.ReqdExctnDt}
on_failure:
  error: {retry: 1, change: [seq_seed, append_rule_messages_to_prompt], then: send_to_human}
  always: {action: human_releases_payment}
```

## Where the design choices are

**Money is a string.** `InstdAmt` is `"1250.00"`, enforced by a pattern, not a JSON number. A decoder happily emits `1250.1000000000001` if you let it, and floating point has no business near a payment. It also means my functions add in integer minor units instead of summing floats. Note that this two-decimal pattern is itself a simplification, because not every currency has two decimal places, and a real bundle would have to tie the pattern to the currency.

**The grammar can't do arithmetic.** This is the heart of it. `NbOfTxs` has to equal the number of transactions and `CtrlSum` has to equal the sum of the amounts, and guides warn that a bank may reject the file when they don't. These are the exact facts a token-at-a-time grammar can't hold. They can only live in rules.

**A pattern checks the form, and the check digits need a function.** The IBAN pattern lets through anything IBAN-shaped. `creditor-iban-checks-out` runs the actual mod-97 check. A model transposing two digits while copying an account number from a PDF is exactly the mistake I'd worry about, and the decoder can't see it.

**`uniqueItems` is here on purpose.** I said the decoder doesn't enforce it, and my shape lint would fail if it appeared in the shape. So it moves to `no-duplicate-transactions`, where the linter's `schema` function enforces it after generation. This is what it looks like when a keyword moves out of the bedrock and into the landscaping. It only catches exact repeats, though. Two transactions sharing an `EndToEndId` with different amounts would pass, and a real bundle would need a function comparing just that field.

**The debtor is bound.** Who's paying isn't a question for a model. The debtor's name and account come in as `const` values, and the currencies this business has approved become the enum.

## How it runs as part of inference

1. **Input rules run first**, including the mod-97 check on our own debtor account. It's cheap to find out before spending anything on inference that the account on file is wrong.
2. **The shape is bound and compiled**, in 144 milliseconds on my laptop against DeepSeek's real tokenizer.
3. **The decoder generates.** It can't emit an unapproved currency or a number where a string belongs.
4. **Output rules run on the envelope**, comparing the amounts, counting the transactions, and checking the dates against today.
5. **On failure, it retries once, then goes to a person.** Fewer retries than the other bundles, on purpose. A model that gets the arithmetic wrong twice on a payment shouldn't get a third try.
6. **A person releases the payment.** No bundle changes that.

## What the fixtures showed

These are hand-written documents testing each path, not model output.

- A clean single-line instruction passed everything.
- A broken one **was accepted by the decoder**: two transactions under a header that says one, a control sum for one, an exact duplicate transaction, a creditor IBAN with one wrong digit, and an execution date in the past. The rules flagged all five.
- A Bitcoin ticker in the currency field, and a bare number in `CtrlSum`, were refused by the decoder.
- A debtor account failing its own check digits and a missing invoice were stopped by the input rules.

The second result is the one worth sitting with. It's a document the decoder considers valid, and a bank's systems would bounce it, or worse, not bounce all of it. One wrong IBAN digit is usually caught by the check. A correct IBAN that belongs to someone else isn't caught by anything here.

## What's still missing

That last sentence is the real limit. These rules prove that the instruction is internally consistent. They don't prove the creditor is who the invoice says, that the invoice is genuine, or that it should be paid. A supplier who changes their bank details by email is a fraud pattern, and a model extracting those new details perfectly and consistently makes it worse. Checks like confirmation of payee, the vendor master and sanctions screening sit outside of this file and need to stay there.

My first post also described a dispute shape and a remittance one, and I left both out. Disputes would need the card network reason codes I couldn't source publicly last time, and I still won't guess at them. Remittance matching would need the bank statement as context, which is a much larger envelope. Also, `ReqdExctnDt` being today or later says nothing about cutoff times or bank holidays, and those are the checks a real payment file fails on.

Payments has had an agreed shape for decades. What a bundle adds is a place to write down the relationships inside that shape, the ones that have always been in bank guides as prose. Those were going to be checked by somebody anyway. A model in the loop just means they have to be checked by something that doesn't get tired.
