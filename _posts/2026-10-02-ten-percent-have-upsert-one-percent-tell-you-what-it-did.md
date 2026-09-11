---
published: true
layout: post
title: 'Ten Percent Have Upsert. One Percent Tell You What It Did.'
date: 2026-10-02
author: Kin Lane
tags:
  - OpenAPI
  - CRM
  - HubSpot
  - Pipedrive
  - Salesforce
  - Design
  - Agents
  - Integration
---
A question went around LinkedIn this week that I have been chewing on since: why is upsert not simply required of every CRM API? The person asking had done the arithmetic in the only place that matters, which is a running integration. Syncing to HubSpot was five nodes. Syncing the same objects to Pipedrive was more than twenty, because before you can write anything you have to search for the record, branch on whether you found it, and then call create or update — per object, every time. Skip that check once and you have manufactured a duplicate in somebody's CRM.

So I went and measured it. I have 119,154 OpenAPIs sitting in the catalog across 8,006 providers, and "does this API let me create-or-update in one call" turns out to be a question you can answer mechanically. The answer is more interesting than the complaint.

Start with the thing being complained about. Here is HubSpot's, which is the reference implementation and deserves to be read closely:

```
POST /crm/objects/2026-03/contacts/batch/upsert

inputs:
  - id: person@example.com
    idProperty: email
    properties: { firstname: ..., lastname: ... }
```

The word `upsert` in the path is the least important thing here. `idProperty` is the load-bearing part. It says: match on *my* identifier, not yours. Email, or a customer number out of my billing system, or whatever column I already treat as unique. That single field is what moves identity resolution across the wire — HubSpot does the matching, inside the transaction, instead of me doing it in two round trips and hoping nothing changed in between.

And then the response comes back with this, per record:

```
results:
  - id: '51'
    new: true
    properties: {...}
```

`new`. A boolean saying whether that call created something or updated something. Two hundred on success, two hundred and seven when part of the batch failed. That is the whole pattern: you declare the key, it does the match, it tells you which branch it took.

Pipedrive is the counterexample, and it is worse than it first appears. There is no upsert on persons, organizations, or deals — the only thing in its entire surface that names create-or-update is a roles endpoint. But grep its OpenAPI for "upsert" and you get plenty of hits, because Pipedrive named its *response schemas* `UpsertPersonResponse` and `UpsertOrganizationResponse` — on `addPerson` and `updatePerson`, two ordinary operations that do exactly one thing each. That is internal service naming leaking into a public contract. Anyone who builds this detection with a naive text search scores Pipedrive as having the capability it conspicuously lacks. I nearly did. It is a good reminder that a spec is evidence about a vendor's internals as much as it is a description of an API, and that [Pipedrive puts more in its OpenAPI than most](https://apievangelist.com/2026/09/28/pipedrive-put-a-price-on-every-tool-call/) either way.

Now the numbers, across those 8,006 providers with a machine-readable contract:

- **788 (9.8%)** have an operation actually named as create-or-update.
- **598 (7.5%)** accept a caller-supplied key to match on — `idProperty`, `external_id`, `id_type`, `match_on`.
- **179 (2.2%)** have the behavior but only mention it in a description, usually on a `PUT /{id}`. Real capability, invisible to any machine reading the contract.
- **55 (0.7%)** return something that says whether the record was created or updated.
- **63 (0.8%)** have all of it together.

That fourth number is the one I did not expect and cannot stop looking at. Nearly ten percent of providers ship an upsert. Under one percent tell you what it did.

Think about what that means on the receiving end. You fire a batch of two thousand records at an endpoint that helpfully creates-or-updates, it returns two hundred, and you have no idea whether you just onboarded nineteen hundred new customers or touched nineteen hundred existing ones. You cannot report on it. You cannot reconcile it. You cannot trigger a welcome sequence off it without going back and asking, which is exactly the extra round trip the upsert was supposed to delete. The capability got shipped and the receipt got left out, and the receipt is most of the value.

It matters more now than it did. I put idempotency at nine points [inside the Agent Readiness Score](https://apievangelist.com/2026/08/30/inside-the-agent-readiness-score/) because agents retry, and idempotency is what stands between a retry and a duplicate. Upsert is the same argument one level up. An agent that cannot tell an insert from an update cannot describe what it just did to your system — and "what did you just change" is the question you will be asking it constantly.

The shapes vary more than I anticipated, which is its own finding. Salesforce has had this since API version 46 and encodes it entirely in the URL — `PATCH /sobjects/{OBJECT}/{FIELD_NAME}/{FIELD_VALUE}` — so the external ID field is a path segment and there is no body flag at all. Zendesk went with a verb: `POST /api/v2/organizations/create_or_update`. Salesloft made it a resource, `POST /person_upserts`. Twenty CRM does not add an endpoint at all, it hangs `upsert: true` off the ordinary create. Five vendors, five different opinions about where this belongs in an HTTP interface, and only a handful of them close the loop by telling you the outcome.

That variety is the reason I do not think this gets solved by telling everyone to add an endpoint called upsert. The name is the cheap half and the part vendors are already reasonably good at. Whether it is a path segment, a verb, a resource, or a flag matters far less than whether the two hard commitments are made: let me name the key you match on, and tell me what you did with it. Salesforce made both of those commitments in API version 46, which is not a recent product decision — it is a decision old enough to have children in high school, and most of the market still has not caught up to it.

So if I were going to legislate anything here, it would not be the operation. It would be the boolean. Eight hundred and ninety-nine providers can already create-or-update in a single call. Thirty-nine of them will tell you which one happened. Adding `new: true` to a response body is close to free, it turns an opaque write into an auditable one, and it is the difference between a sync you can report on and a sync you have to go back and interrogate. Upsert is not rare. Knowing what your upsert did is rare, and that is the part worth asking for.
