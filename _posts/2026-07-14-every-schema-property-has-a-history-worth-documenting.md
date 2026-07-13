---
published: true
layout: post
title: Every Schema Property Has a History Worth Documenting
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/every-schema-property-has-a-history-worth-documenting.png
date: 2026-07-14
author: Kin Lane
tags:
  - JSON Schema
  - OpenAPI
  - Overlays
  - Governance
  - Schema
  - Provenance
  - Enterprise
---

Back in 2019 I spent a stretch at F5 Networks on a task that sounds small until you look at the number: producing JSON Schema for more than 2,500 schema objects that made up the BIG-IP product. It was preparation for what the teams there were calling "Modular BIG-IP," and the honest state of the world was a large, aging pile of XSDs that had accreted over fifteen years of a product doing a lot of different jobs for a lot of different customers. My job was to translate those XSDs into JSON Schema, one object at a time. But translation was the easy part. The part that mattered — the part almost nobody budgets for — was everything I attached to each property along the way.

I did not just want a machine-readable shape. I wanted every property to carry its own story.

## What "doing the schema" actually means

When you tell an enterprise you are going to "do the schemas," they hear a mechanical conversion job. Take the old format, emit the new format, move on. That framing is exactly why so much schema work produces something technically valid and practically useless. A property named `connectionLimit` with type `integer` validates fine and tells you nothing.

For every one of those BIG-IP objects, the real work was making each property legible on its own terms:

- **A description** written for a human, not a restatement of the field name. What is this property, in plain language, and what does setting it actually do to the device?
- **Regular expressions** where a value has a real format — an address, a name pattern, an identifier — so the constraint lives in the schema instead of in someone's memory.
- **Shape** — `minimum`, `maximum`, `minLength`, `maxLength`, enumerated values — the boundaries that turn "integer" into "an integer that means something here."
- **Provenance** — and this is the one I care about most, the one this whole post is about.

Provenance means each property records its own history. When was this property added? Why? What part of the product introduced it, and which part of the customer base did it serve? In a product with fifteen years of organic growth and 2,500-plus objects, that history is not trivia. It is the difference between a schema you can safely evolve and a schema everyone is afraid to touch because no one remembers why a field exists or who would scream if it disappeared.

## Provenance is the property most schemas are missing

Every enterprise I have worked with has this problem, and almost none of them have written it down. The knowledge exists — it lives in the head of the one engineer who has been there long enough — but it is not in the schema. So when a team goes to deprecate a field, split an object, or tighten a constraint, they are doing archaeology instead of engineering. They are guessing at intent.

Provenance turns that guessing into a lookup. If every property can tell you when it arrived, what problem it solved, and who depends on it, then change stops being scary. Deprecation becomes a decision you can defend with a record instead of a hunch. New engineers can read the object model and understand not just its current shape but the forces that shaped it. This is the work that lets a "Modular BIG-IP" — or any next-generation rebuild of a legacy object model — actually happen, because you can finally see what you are carrying and why.

This is not F5-specific. Any enterprise sitting on a large, long-lived data model — insurance, banking, telco, healthcare, government — has exactly the same untold history buried in exactly the same kind of schema. The bigger and older the object model, the more valuable the provenance, and the more expensive its absence. If you operate one of these models and this is landing a little too close to home, that is the work I do, and I am happy to help you get it done.

## JSON Schema is happy to carry the history

Here is the good news for anyone worried this means inventing a whole new format: it does not. JSON Schema already tolerates what you need. Validators ignore keywords they do not recognize, which means you can extend a schema with your own annotation keywords and validation behavior does not change at all. Your extra metadata rides along, inert, until something that understands it comes looking.

So a property can carry a provenance block right next to its type and its constraints:

```json
{
  "connectionLimit": {
    "type": "integer",
    "minimum": 0,
    "maximum": 4294967295,
    "description": "Maximum concurrent connections allowed to the virtual server before new connections are refused.",
    "x-provenance": {
      "added": "2011-03",
      "version": "10.2.0",
      "reason": "Introduced to give service providers a hard ceiling on connections per virtual server during DDoS mitigation.",
      "introducedBy": "LTM module",
      "servedCustomer": "Service provider / carrier deployments",
      "supersedes": null,
      "status": "active"
    }
  }
}
```

Nothing there breaks validation. A validator sees `type`, `minimum`, and `maximum`, enforces those, and steps right over `x-provenance`. But now the property carries its own history in a structured, machine-readable form — and that block is worth exactly as much as the discipline you put into filling it out. Do it once, at the moment you are already touching every property anyway, and you never have to reconstruct it later.

## Overlays keep provenance out of the validation path

Now the design question that this raises, and the part I want people to take away. You do not necessarily want that provenance living inside the schema you validate against in production. Validation schemas want to be lean, fast, and unambiguous. Documentation, search, discovery, and governance want to be rich. Those are two different audiences with two different needs pulling on the same object, and jamming everything into one file serves neither well.

This is exactly what [OpenAPI Overlays](https://spec.openapis.org/overlay/latest.html) are for. An overlay is a separate document that describes a set of changes — target a node, add or update its content — and applies them to an OpenAPI definition without editing the original. Keep your clean, minimal schemas as the source of truth that services validate against. Then maintain the provenance as an overlay that layers the `x-provenance` annotations on top, targeting each schema property and injecting its history.

Apply the overlay and you get the enriched view: the schema that feeds your documentation portal, your discovery layer, your search index, your governance tooling — every property annotated with when and why it exists. Skip the overlay and you get the lean contract your runtime enforces. Same underlying objects, two projections, one of them provenance-rich and one of them provenance-free, and you never had to choose. It is the same separation-of-concerns move I use across the [APIs.io](https://apis.io) network, where an `x-apievangelist` overlay carries my enhancements on top of a provider's contract without ever editing the provider's contract.

The provenance lives where humans and machines can search it. The validation stays clean. Nobody has to trade one for the other.

## The work enterprises keep putting off

The pattern is simple to describe and hard to fund: translate honestly, annotate richly, record the history of every property, and use overlays so that history shows up in discovery and documentation without ever slowing down validation. It is unglamorous. It does not demo well. It is also the single highest-leverage thing most enterprises with a large object model could do to make the next decade of change survivable.

I did it across 2,500 objects at F5 because a next-generation product literally could not move forward until the old model could explain itself. Your model is trying to tell you the same thing. Every property has a history. The only question is whether you have written it down — and whether you can see it when you go looking. If you want help doing this across your own schemas, [this is exactly the kind of work I take on](https://apievangelist.com).
