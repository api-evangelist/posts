---
published: true
layout: post
title: "What I Learned About JOSE on Today's OpenAPI Call"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-i-learned-about-jose-on-todays-openapi-call.png
date: 2026-10-08
author: Kin Lane
tags:
  - OpenAPI
  - Security
  - JOSE
  - JWT
  - Standards
  - Specifications
---
I sat in on the OpenAPI Technical Developer Community call this morning, and somewhere in the middle of a conversation about where the specification goes next, Henry Andrews stopped to explain JOSE for anyone who didn't know it. I'm one of the people who only half knew it. I have used JWTs for years, and I have written about [JSON Web Token for API message integrity](https://apievangelist.com/2017/08/08/api-message-integrity-with-json-web-token-jwt/), but I had never really stepped back and looked at the family the token comes from. So I went and did my homework, and I wanted to share what I learned, because I think it matters for anyone describing APIs in 2026.

## JOSE is where JWTs come from

JOSE stands for JSON Object Signing and Encryption. It is an IETF family of specifications, and the JWT most of us meet in an `Authorization` header is just the most visible part of it:

- **JWS** ([RFC 7515](https://www.rfc-editor.org/rfc/rfc7515)) — signed, integrity-protected content.
- **JWE** ([RFC 7516](https://www.rfc-editor.org/rfc/rfc7516)) — encrypted content.
- **JWK** ([RFC 7517](https://www.rfc-editor.org/rfc/rfc7517)) — a JSON representation of the keys themselves, which is what a `jwks_uri` hands you.
- **JWA** ([RFC 7518](https://www.rfc-editor.org/rfc/rfc7518)) — the algorithms all of the above refer to.
- **JWT** ([RFC 7519](https://www.rfc-editor.org/rfc/rfc7519)) — compact claims, carried as a JWS or a JWE.

Henry also pointed out that JOSE has media types of its own, including `application/jose`, which I hadn't thought about. If you want a readable tour of how the pieces fit together, the [documentation for the `jose` Python library](https://jose.readthedocs.io/en/latest/) walks through JWK, JWS, JWE and JWT in a few pages and is a good place to start.

## The instructions travel with the data

This is the part that changed how I think about it. A JOSE object isn't just data that happens to be signed. It is encoded, signed or encrypted JSON that carries **its own instructions for how it was built**, in a header alongside the content. A JWT breaks down into a header with those instructions — which algorithm, which key, what type — and a payload with the claims.

That matters for OpenAPI because a JSON Schema can describe the payload just fine, but it cannot describe the instructions. A schema can tell you a token has an `exp` claim. It cannot tell you the token must be signed with `ES256` using a key from a particular `jwks_uri`. And as Henry made clear, the OpenAPI community doesn't want to make people infer that kind of thing from schemas. It only works when someone writes the exact perfect schema, which in practice almost nobody does.

The direction he described is to treat JOSE as a matter of media type support, the way OpenAPI already handles multipart and form-encoded content: keep a schema for validating the data, and add a separate object beside it that describes how to interact with the content and map between what the schema models and what is actually on the wire. He was clear this is roadmap thinking, not a proposal, so I'm describing the direction, not a design.

It also explained something about security profiles I had felt but never put into words. When something like FAPI 2.0 says *you may sign with these algorithms and not those*, it is mostly constraining the **instructions**, not the data. That's exactly the layer our API descriptions are weakest at.

## The working group is busy again

The thing I didn't expect when I went digging: the [IETF JOSE working group](https://datatracker.ietf.org/wg/jose/about/) is active again. The core specifications are from 2015, but the group is now working on JSON Web Proofs and JSON Proof Tokens, the algorithms behind them, HPKE-based encryption for JWE, post-quantum and composite signatures, and a draft to deprecate the `none` algorithm and `RSA1_5`. That last one is overdue, and the first few are where verifiable credentials and selective disclosure live, which is exactly where agent identity and payments are heading.

## Why I care

I have spent a lot of time this year arguing that our API contracts carry the *what* well and the *how* badly. JOSE is a clean example. The claims are describable today. The instructions for producing and verifying them — the part that decides whether a client can actually call your API, and whether an agent can present a credential safely — mostly aren't. Watching the people who maintain OpenAPI work through that out loud was the most useful hour of my week.

I've added [JOSE to the API Evangelist standards catalog](https://standards.apievangelist.com/store/jose/), linked to the entries I already had for JWS, JWE, JWK and JWT, so the family reads as a family. Thanks to Henry for taking the time to explain it on the call.
