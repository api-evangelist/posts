---
published: true
layout: post
title: 'The AWS API Gateway Extensions Are A De Facto Standard'
date: 2026-09-08
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - AWS
  - API Gateway
  - Standards
  - APIs.io
  - APIs
---
There is a category of standard that nobody sets out to create. It happens when a thing gets large enough that its internal conventions become everybody's conventions, not by agreement but by gravity. The `x-amazon-apigateway-` extensions are that kind of standard, and I found them in more providers' OpenAPI documents than any other hyperscaler vocabulary in the [APIs.io](https://apis.io/extensions/) catalog.

`x-amazon-apigateway-authtype` appears in 107 providers. That is the number that stopped me. A hundred and seven different companies have an AWS-specific key sitting in a document they publish to the world. `x-aws-signingName` appears in 65. `x-amazon-apigateway-integration` shows up in ten providers, `x-amazon-apigateway-authorizer`, `x-amazon-apigateway-api-key-source` and `x-amazon-apigateway-gateway-responses` in five each.

The reason for that spread is simple and worth stating, because it explains something about how vocabularies actually propagate. AWS API Gateway can import an OpenAPI document to configure itself, and it can export one describing what it is configured as. The extensions are how the round trip carries the parts of a gateway configuration that OpenAPI has no words for — which backend an operation integrates with, how the request gets transformed on the way in, which authorizer runs, where the API key comes from. So the moment a company runs its API on AWS API Gateway and exports the definition for its documentation, the gateway's private configuration language rides out into a public document.

That is not sloppiness on anybody's part. That is what an export is. But it means the vocabulary spread through a completely different mechanism than Speakeasy's or Redocly's did. Nobody at those 107 companies chose `x-amazon-apigateway-authtype`. It arrived.

Which makes the case for registration different, and I think stronger.

When a vendor's extension spreads because customers opt into the vendor's tooling, you can at least argue the customers know what they signed up for. When it spreads because it fell out of an export, the people publishing the key mostly do not know it is there, and definitely have not thought about what a downstream reader will make of it. I have fetched a lot of these documents. In most of them the AWS keys are just present, unremarked, alongside the parts the company actually wrote.

And a reader encountering `x-amazon-apigateway-integration` is holding real information. That key describes the backend an operation actually routes to — the Lambda, the HTTP endpoint, the service integration, the request and response mappings. From a discovery standpoint that is enormously interesting, and from a security standpoint it is occasionally more than the publisher meant to share. Either way, the tool reading it has to guess what it is looking at, because there is no registry entry to consult.

I want to give AWS proper credit on one point: this vocabulary is documented. The API Gateway extension reference is public, it is complete, and it is maintained. Like Microsoft, AWS did the writing-down. What is missing is the one-line pointer in the place a stranger would think to look.

The registry is not a big commitment. It is `registries/_extension`, one markdown file per key, a name and a description and a link to your own documentation. AWS's entry for `x-amazon-apigateway-integration` could be four lines and a URL, and it would immediately be more useful than what exists now, which is nothing.

So the asks.

**Register the gateway vocabulary.** The five or six keys that appear in exported documents are the ones that matter: `-integration`, `-authtype`, `-authorizer`, `-api-key-source`, `-gateway-responses`, `-request-validator`. Every one of them already has documentation to point at. This is the lightest lift of any vendor in this series, because the content exists and only the pull request is missing.

**Sponsor the OpenAPI Initiative.** AWS is a Linux Foundation member many times over and knows exactly how this works. OpenAPI is the format that API Gateway imports and exports, that the AWS SDKs and the CLI are generated against, and that a very large share of AWS customers describe their services in. The Initiative is small, it is funded by member support, and the gap between how much AWS depends on the spec and how much AWS puts into the spec's stewardship is wider than it should be for a company of that size.

**Get involved in the specification work.** AWS has the largest deployed gateway in the world and therefore the largest corpus of evidence about what people actually put in OpenAPI documents and what happens when they do. That is exactly the input the Special Interest Groups need, and it is not represented in those conversations at anything close to the weight AWS's footprint would suggest.

There is a version of this where AWS goes further than registration, and I will say it out loud because I think it is the right end state. A meaningful portion of the `x-amazon-apigateway-` vocabulary is not AWS-specific at all. Backend integration, request transformation, authorizer binding and validation policy are things every gateway does. The reason each vendor has its own private spelling is that OpenAPI never described the gateway layer, so everyone filled the hole locally. AWS is in a position to propose the shared version of that rather than just documenting the AWS version, and doing so would make the strongest possible statement about where the company sits in this ecosystem.

Tomorrow, ReadMe, whose extension is quietly carrying working code in eighty companies' contracts.
