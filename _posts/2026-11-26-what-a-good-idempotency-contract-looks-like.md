---
published: true
layout: post
title: 'What a Good Idempotency Contract Looks Like'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-a-good-idempotency-contract-looks-like.png
date: 2026-11-26 15:00:00 +0000
author: Kin Lane
tags:
  - Idempotency
  - Agents
  - OpenAPI
  - Errors
  - Design
---
This week I emailed a few dozen API providers one question each. No scorecard, no list of things to fix, just a single question about the one thing our profile of them was missing. Several of the questions were some version of "if an agent retries this request, does it happen twice?" Within a day, three providers had written back with a careful answer, and one of them had shipped the change before replying.

I want to write down what those answers had in common, because together they describe an idempotency contract better than most of the documentation I read.

## Why agents make this urgent

A human developer who gets a timeout usually goes and looks before trying again. An agent retries. That is what it is built to do, and most of the time it is the right call. But when the request sends a message, starts a paid job, or buys something, the retry is a second message, a second job, a second charge. The client cannot know whether the first attempt landed, and nothing in most contracts lets it say "this is the same request as before."

That is all idempotency is: a way for the client to say that, and for the server to answer it honestly.

## The parts of the contract

Reading the replies side by side, a complete contract has seven parts.

**A key the client chooses.** Most providers take an `Idempotency-Key` header. One also accepts it as a body field, which helps clients that can't easily set headers. Another reused an identifier the client was already sending, a client-generated file id, and made that the key. Any of these works, as long as it is the client's value, chosen before the first attempt.

**A scope.** One provider spelled it out exactly: the key is scoped per account and per endpoint. Without a stated scope a client can't tell whether reusing a key on a different operation is a collision or a fresh request.

**A window.** Twenty-four hours was the common answer, and it covers any sane retry policy. One provider chose fifteen minutes on purpose, and their reason is the most interesting thing anyone told me. Their key is a payment signature that is public on-chain. An unbounded replay would let anyone who saw the payment collect the result. So they bound the replay to a short window and to the client IP that made the original request. That is a security decision expressed as an idempotency rule, and they wrote it down.

**A replay signal.** When a retry is answered from the stored result, say so. One provider sets an `Idempotency-Replayed: true` header, and another returns `"replayed": true` in the body. The agent then knows it got the original outcome and not a second one, which matters when it is keeping its own records.

**An answer for the request that is still running.** The hard case is the retry that arrives while the first attempt is still in progress. One provider returns `409 Conflict`. Another returns `202` with `pending: true` and a message to retry shortly, which tells the client exactly what to do. Either is fine. Leaving it undefined is not.

**An answer for the same key with a different request.** If the key matches but the payload doesn't, that is a client bug, and `422 Unprocessable Entity` says so. One provider was explicit that their match is on the key alone, not the content, and told clients to use a fresh UUID for every new request. Both approaches are defensible. The contract has to say which one it is.

**What happens on failure.** One provider releases the key when the dispatch fails, so the client can retry safely. Another keeps the key burned after the window and returns `409`, and never re-serves the result. Again, either can be right. A client just has to be able to find out which.

## Put it where a machine can read it

Two of the three already had most of this behaviour. They just described it in an operation's prose, where a person reads it and a machine never sees it. A sentence buried in a long description doesn't help an agent building a request. The same sentence on the field's own description, or a declared header parameter in the OpenAPI, does.

This is also where scoring comes in. On our rubric an API cannot reach the agent-native band without declared idempotency on its write operations, however strong it is otherwise. Prose does not count. A declared field does.

## The part I keep thinking about

None of these answers came from a standards document. They came from providers who had thought about how their own system fails and decided what a client deserves to know. One question was enough to get it written down, and one provider changed its API within a day of reading it. Another, asked a different single question about its error format, moved every API it runs to `application/problem+json` the same day.

If you run an API with write operations, try answering the seven parts above for your most expensive one. If you can't answer one of them, that's the one an agent will find for you.
