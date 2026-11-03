---
published: true
layout: post
title: 'Service Level Agreements Come Back Around As SLA4OAI'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/service-level-agreements-come-back-around-as-sla4oai.png
date: 2026-11-03
author: Kin Lane
tags:
  - SLA4OAI
  - Service Level Agreements
  - OpenAPI
  - Standards
  - Plans
  - Rate Limits
  - APIs.io
---
I just added [SLA4OAI](https://standards.apievangelist.com/store/sla4oai/) to the API Evangelist standards catalog, and writing it up sent me back through my own archive. I have been writing about API service level agreements for twelve years, and most of what I asked for back then is sitting in front of me right now as working machine-readable files.

## What I was asking for

In 2014 I was talking with a fellow evangelist in the federal government about SLAs, and I [wrote about wanting a "service accord"](https://apievangelist.com/2014/03/14/api-service-accord/), a plain-English version of an SLA that would tell a consumer what they could expect from an API without the legal baggage. In 2015 I wrote that [I had a bunch of API resources and needed a plan, or several](https://apievangelist.com/2015/10/31/i-have-a-bunch-of-api-resources-now-i-need-a-plan-or-potentially-several-plans/), each with its own metrics, limits, prices and the methods it included. That same day I asked [how we were going to create the Standard & Poor's and Moody's for the API economy](https://apievangelist.com/2015/10/31/how-are-we-going-to-create-the-standard-and-poors-and-moodys-for-the-api-economy/).

In 2016 I came across [an SLA API from Site24x7](https://apievangelist.com/2016/10/03/a-service-level-agreement-api-for-api-service-providers/) and argued that this should be part of the default API management stack. In 2017 I found [17 Google services with an SLA](https://apievangelist.com/2017/04/21/the-sla-is-becoming-standard-across-google-apis/), looked at [APImetrics' score for whether an API met its SLA](https://apievangelist.com/2017/04/24/a-ranking-score-to-determine-if-your-api-was-sla-compliant/), and [wished that every stop along the life cycle had a common definition](https://apievangelist.com/2017/10/10/connecting-service-level-agreements-to-api-monitoring/) that multiple providers could measure and report on.

Then in 2018 I [wrote about SLA4OAI](https://apievangelist.com/2018/07/27/the-service-level-agreement-sla-definition-for-the-openapi-specification/), an open specification from the ISA Group at the University of Seville for describing an API's service levels alongside its OpenAPI. I liked that it was a sister specification and not something baked into OpenAPI itself. My one critique was that pricing, metrics, plans and quotas should be usable on their own, for pricing pages, billing and discovery, not only for SLA enforcement.

## What the specification looks like

SLA4OAI is a separate YAML or JSON document. An OpenAPI points to it from its `info` section using a standard extension:

```yaml
openapi: 3.1
info:
  x-sla:
    $ref: ./sla.yml
```

The SLA document then says what is counted and what each plan gets. This is the simple example from the [1.0.0 draft](https://github.com/isa-group/SLA4OAI-Specification/blob/main/versions/1.0.0-Draft.md):

```yaml
sla: 1.0.0
context:
  id: petstore-sample
  type: plans
  api:
    $ref: ./petstore-service.yml
  provider: ISAGroup
metrics:
  requests:
    type: "int64"
    description: "Number of requests"
plans:
  base:
    availability: R/00:00:00Z/23:00:00Z
  free:
    rates:
      /pets/{id}:
        get:
          requests:
            - max: 1
              period: second
    quotas:
      /pets:
        post:
          requests:
            - max: 10
              period: minute
  pro:
    pricing:
      cost: 5
      currency: EUR
      billing: monthly
    rates:
      /pets/{id}:
        get:
          requests:
            - max: 100
              period: second
```

Read it next to my 2015 post and it's the same list. Metrics are whatever you decide to count. Plans each carry their own limits and pricing. Rates and quotas are set per path and per method. The `base` plan holds what every other plan inherits, so a plan only has to say how it differs. That was pretty much the toolbox I was asking for, written down as a format instead of a wish.

## Where it came back around

The [service levels section on APIs.io](https://apis.io/sla/) now publishes 7,108 SLA4OAI documents, one for each provider we could build one for. Here is part of the one for [Asana](https://artifacts.apis.io/asana/sla/asana-sla.yml):

```yaml
sla4oas: 1.0.0
context:
  id: asana-plans
  type: plans
  provider: Asana
  x-apis-io-derivation:
    synthetic: false
    method: searched
    sources:
    - https://asana.com/trust
plans:
  base: {}
  starter:
    pricing:
      cost: 10.99
      currency: USD
      billing: monthly
  enterprise:
    x-apis-io-guarantees:
    - text: Asana offers 24/7 priority support and a 99.9% uptime commitment to Enterprise customers
      percent: 99.9
      source: https://asana.com/trust
```

Two things in there are worth pointing out. The plans and pricing are doing exactly the work I said in 2018 they should be able to do, describing what a provider sells, whether or not anybody ever enforces an SLA against it. And the uptime lives in an extension, because the specification doesn't have a place for it.

That second point surprised me. The version I wrote about in 2018 listed a Guarantees object. The 1.0.0 draft, published in November 2020, mentions guarantees, but neither the draft nor its schema defines them. `availability` says when a service is offered, not how reliably. So a 99.9% uptime promise has no standard home, and we carry it in `x-apis-io-guarantees`. What a provider reports about itself on its status page goes in a separate `x-apis-io-observed`, because a promise and a self-report are different facts. APIs.io runs no monitors, so none of these figures are measured or verified by us. They're quoted from the provider's own pages.

The numbers are humbling. Of the 7,108 documents, only 92 providers promise an uptime level on their own SLA page. Another 1,085 report uptime without promising one. The other 5,931 are synthetic bases built from the provider's plans and rate limits, and they're labeled synthetic so nobody mistakes them for a statement from the provider. Twelve years after I started asking, most providers still don't publish an SLA we could find.

There are a couple of rough edges anyone picking this up should know about. The specification text uses `sla:` as the root key while its JSON Schema and agreement sample use `sla4oas:`, and we follow the schema. Limits are set per path, so an account-wide limit, which is how most providers actually document theirs, has no standard place either. The repository was last updated in February 2023.

## Being early

This is the part I really wanted to write about. It's hard being early on a concept. You do the research, you write the posts, you profile the providers, and for years it mostly sits there. The specification I was excited about in 2018 has been a draft since 2020, and I'm sure the people at the ISA Group have felt that more than I have.

But the work was open, and that's what matters. The ISA Group published SLA4OAI under the Apache 2.0 license, with the specification, the schema and the samples all on GitHub. My posts have been public the whole time, and so has APIs.json, which is where I first indexed SLAs for those Google services. Because all of it was open, nobody had to ask permission or start over when the moment finally arrived. When we needed a format to describe what thousands of providers promise, there it was, already written down by people who had thought harder about it than I had.

So much of my earlier work is coming back around like this right now. Plans, rate limits, ratings, SLAs, machine-readable discovery. These were concepts I wrote about when there wasn't much demand for them. What changed is that agents need to read the terms an API is offered under, and they can't read a pricing page or a trust page the way a person does. Suddenly the boring, structured, machine-readable stuff is exactly what is needed.

If you're doing work like this today and it feels like nobody is paying attention, my advice is to keep doing the hard work, and make it open source. Write it down where people can find it. You don't get to choose when the world comes back around to it, but when it does, your contribution just might be the thing that gets used.

If you work on SLA4OAI, or you publish an SLA we've got wrong on APIs.io, I'd love to hear from you. And if you've ever wanted a home for uptime guarantees in the specification, I suspect it's a conversation worth restarting.
