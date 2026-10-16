---
published: true
layout: post
title: 'Five MCP Servers Put A Price In The Tool In Four Different Shapes'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/five-mcp-servers-put-a-price-in-the-tool-in-four-different-shapes.png
date: 2026-10-16
author: Kin Lane
tags:
  - MCP
  - Monetization
  - x402
  - Agents
  - Pricing
  - APIs
---
A couple of weeks ago I wrote about how [Pipedrive put a price on every tool call](https://apievangelist.com/2026/09/28/pipedrive-put-a-price-on-every-tool-call/): an `x-token-cost` on all 371 operations, in Pipedrive's own rate-limit currency, sitting right next to the description an agent uses to decide what to call. Since then I sat in on a presentation from Zuplo on how they approach monetizing MCP servers, and it left me wanting to know how everyone else is expressing what a tool costs. Not what they charge, but *where they write it down*.

So I looked, and then I measured.

## Five places the price lives

There is no field for price in the MCP specification. What exists instead is a spectrum, ordered by how early an agent can see the number:

1. **In the payment handshake.** The [x402 MCP transport](https://github.com/x402-foundation/x402/blob/main/specs/transports-v2/mcp.md) defines how payment travels in `_meta` (`x402/payment` going in, `x402/payment-response` coming back). It defines how you pay. It does not define where the price is advertised.
2. **On the tool definition.** A price object riding along in `tools/list`. Guides recommend it, and they already disagree on the key name.
3. **In the tool description.** "Costs $0.01 per call." A model can read it. A machine cannot add it up.
4. **In the gateway.** This is where Zuplo sits. They meter only the tool calls, so protocol chatter stays free, and resolve the subscription behind the API key, with the charging logic in code. [xpay](https://docs.xpay.sh/en/products/mcp-monetization) keeps a per-tool price map in its config. The price is real, but the agent can't see it until after the call, or until it is denied.
5. **On a pricing page or marketplace listing.** A document for humans, which is where API pricing has lived for twenty years.

## What the servers actually say

The [APIs.io](https://apis.io/) catalog knows about 616 remote MCP servers. I sent each one an `initialize` and a `tools/list`, with no credentials and nothing else. 197 handed over their tools, 3,786 of them, and I read every one for a price.

About 24 servers state a price, and almost all of them do it in prose: "$0.002 per request," "0.001 USDC via x402 on Base, first 3 calls free per wallet," "Costs $1.00 per event, charged when queued and refunded if rejected." Our own apis.io MCP server is in this group, describing its per-result price in sentences. I am not throwing stones from outside this house.

Only five servers put the price in a field a machine can read, and between them they used four different shapes:

- `_meta["agents-x402/priceUSD"]`: `0.01`, alongside `freeCallsPerDay: 100`
- `_meta["x402/asset"]` and `_meta["x402/network"]`: USDC on Base, with no amount on the tool at all
- `x402_price_usd`: the string `"$0.15"`, plus `x402_units: 15`
- `pricing`: `"~100 sats base"`, next to `supported_payments`

Two of the five share the `agents-x402` namespace. They are the only two that agree on anything.

One server skips the tool level entirely and answers the MCP endpoint with an HTTP 402 and an x402 `accepts` block. That puts a price on the whole server as one unit.

Five implementations, four shapes, amounts as numbers, as dollar strings, as satoshis and as token base units. This is the pattern I keep seeing with OpenAPI extensions: the same idea invented in isolation, unregistered, each implementation unable to see the others.

## Pricing is not just a number

The prose turned out to be the most interesting part, because it shows what a standard would actually have to carry. In about two dozen servers I found:

- free allowances per day, per month, per wallet and per caller
- refunds when a moderation step rejects the submission
- failed calls that are not charged
- metering by megabyte, by second of video, by record returned
- caps on a single request
- credits, with stated exchange rates to USDC
- fee formulas: `max($0.05, value × tier_bps / 10000)`

A `price` field holding one amount would capture almost none of this. Pipedrive's integer, which is a cost in a budget rather than a price in a currency, is a different thing again, and so is Telnyx's `light`/`medium`/`heavy`.

## Who is doing it, and who is not

Every server openly declaring a tool price is a small, x402-native seller. None of the large SaaS providers with MCP servers in the catalog expose a tool-level cost to an anonymous caller. Of the 616, 315 answered with a 401, 403 or 422. Gateway-priced servers like the ones Zuplo describes live behind that wall, and no scan of mine can see their prices. That is the point of a gateway, and it is also the problem. An agent planning a hundred calls cannot budget against a number it only learns by spending.

## What I would like to see

- **A cost vocabulary that lives on the tool, not in the prose.** The MCP spec, an OpenAPI extension that flows through into generated tools, or both. It needs a unit (currency, credit or rate-limit budget), an amount, a basis (per call, per unit, per result), and free allowances.
- **The x402 folks settling the advertising side, not just the payment side.** The transport spec is good, and the discovery side is wide open. That gap is how you end up with `agents-x402/priceUSD` and `x402_price_usd` in the same month.
- **Gateways publishing what they meter.** If Zuplo or anyone else is already holding a per-tool price map, emitting it into `tools/list` is a small step, and it would make the price visible to agents before they call.

I wrote up the full spectrum, with sources, and the scan as research, and I'll rerun the scan periodically to see whether any of these spellings start to converge. Right now it is five servers, four shapes, and the field is still wide open, which is the best time to agree on one.
