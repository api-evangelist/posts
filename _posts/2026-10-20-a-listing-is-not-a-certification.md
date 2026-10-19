---
published: true
layout: post
title: 'A Listing Is Not A Certification'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-listing-is-not-a-certification.png
date: 2026-10-20
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - Standards
  - Conformance
  - Methodology
---
When you build a market layer out of public registers, you quickly find two very different kinds of entry, and the Kin Score has to treat them differently.

## Two kinds of entry

The first kind is a listing. The CNCF landscape lists 2,431 projects and members. The OpenSSF landscape lists its members. AgGateway publishes its members. A listing says a company takes part. It is real, and it is cheap.

The second kind is a certification. The CNCF's Certified Kubernetes program publishes 1,579 conformance submissions from 185 vendors, product by product and version by version. ODVA only lists vendors whose products passed its conformance testing. OPC Foundation certifies products against OPC UA. FedRAMP authorizes cloud services at specific impact levels. Peppol certifies access points. BACnet Testing Laboratories lists tested device profiles. A certification says someone outside the company checked.

Both belong in a market. They don't deserve the same weight.

## How the Kin Score separates them

A listing alone puts a provider in the "standard" position, at a modest depth. That stays true even when it feels generous. In cloud native, 52 providers reached standard on a single landscape listing, Helm, Linkerd, and K3s among them. We decided to keep them there. The position says they participate. Depth is what says how much.

Certification adds depth, and each register gets its own ceiling. We set every ceiling the same way, from the data: the widest current vendor in that register. FedRAMP caps at three authorized impact levels. Certified Kubernetes caps at three product types. Peppol caps at two, access point and SMP. GS1 GDSN caps at two, item and price. BACnet caps at eighteen, because Siemens holds eighteen listed device profiles. Lapsed certifications count for nothing.

The result is that depth now separates the two kinds of provider within the same position. Certified Kubernetes platforms read between 35 and 53. A landscape listing alone reads 17.2.

## The bug that hid it

We found something embarrassing on the way there. A certified register writes two records about a vendor from the same piece of evidence: a participation edge, and a report-only "compatible" edge recording which standard it speaks. Our depth code looked the evidence up and kept the last record it saw, which was the compatible one. Then it skipped it, because compatible edges are report-only.

So every certified vendor had been losing its certification. 1WorldSync, Salsify, and Siemens read 17.2, the same as a company that only joined a member list. Rockwell and KUKA had no depth at all.

With the fix, 1WorldSync, Salsify, and Siemens read 40.9. Rockwell reads 23.6 and KUKA 19.4. Trustwell, which is a GS1 solution partner without a certified data pool, stays at 17.2, which is exactly right.

I'm sharing that one because it is the kind of mistake that hides in any scoring system. Nobody notices a score that is wrong in a plausible direction. The way we caught it was by asking why two companies with obviously different evidence had identical numbers.

## Why the distinction matters for agents

An agent choosing a provider for a regulated job doesn't need to know who joined an association. It needs to know who passed. The difference between a listing and a certification is the difference between "this company says it supports the standard" and "someone checked." The Market layer now carries that difference all the way through to the score, and every certified entry links back to the register that issued it.
