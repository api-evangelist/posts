---
published: true
layout: post
title: 'Check Two OpenAPI Versions For Breaking Changes, And Know What It Cannot See'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/check-two-openapi-versions-for-breaking-changes-and-know-what-it-cannot-see.png
date: 2026-11-02
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - OpenAPI
  - Breaking Changes
  - Versioning
  - Governance
---
This is the third story in my series on what each API Evangelist operation can do. [Friday I searched sixteen years of research](https://apievangelist.com/2026/10/30/search-sixteen-years-of-api-research-from-one-call/). Today I'm back to the contract, with a question every API team has before they merge: will this change break anybody?

Reading a YAML diff tells you which lines moved, not what happens to the people integrating with you. The MCP tool for that question is `diff_api_versions`, and the REST operation behind it is `POST /governance/diff`. You hand it two OpenAPI documents, and it classifies each change it finds as breaking, non-breaking or an addition. It's free.

## What I gave it

I wanted real changes that I could check the answers against, so I used the git history of the [Train Travel API](https://github.com/bump-sh-examples/train-travel-api), the public sample OpenAPI that Bump.sh maintains. I passed the full text of `openapi.yaml` from two commits as `old` and `new`, and picked pairs where the commit message says what changed:

```json
{ "old": "<openapi.yaml at the earlier commit>", "new": "<openapi.yaml at the later commit>" }
```

These comparisons mattered:

- [Require POST body when making a payment](https://github.com/bump-sh-examples/train-travel-api/commit/8ab5896e11f3113b3346c72289d6d1fe449bbf5b)
- [CVC type should be string, not integer](https://github.com/bump-sh-examples/train-travel-api/commit/21ca3d352d8332af1c90a85b1e592a8182f44918)
- [Missing required fields for booking](https://github.com/bump-sh-examples/train-travel-api/commit/ff649fc378145fc055b5bbf39521271f6e960e93)
- Version 1.2.1 on OpenAPI 3.1 to the [latest version 1.3.0 on OpenAPI 3.2](https://github.com/bump-sh-examples/train-travel-api/commit/d0996aff3c4951a3c3618e2744e011ae6115f2f5)
- That same pair in reverse

## What came back

The payment commit is a one-line change, adding `required: true`, and the tool nailed it:

```json
{
  "compatible": false,
  "summary": { "breaking": 1, "nonBreaking": 0, "additions": 0, "total": 1 },
  "changes": [{
    "type": "request-body-required",
    "level": "breaking",
    "message": "Request body is now required on POST /bookings/{bookingId}/payment",
    "location": "/bookings/{bookingId}/payment post"
  }]
}
```

That commit left `info.version` at 1.0.0, so the version number gave no warning. The tool did. That's the job I want this for, and `compatible` is a single field a pipeline can act on.

Now the part you need to know before you trust it. Here is what it said about the next two commits:

| Change, confirmed in the YAML | What the tool returned |
| --- | --- |
| `cvc` changes from `type: integer` to `type: string` in `components/schemas/BookingPayment` | `compatible: true`, 0 changes |
| `Booking` schema gains `required: [trip_id, passenger_name]` | `compatible: true`, 0 changes |

Both are the kind of change a consumer can feel. A client sending `cvc` as a number no longer matches the contract, and a client leaving out `passenger_name` no longer matches it either. The tool saw nothing, because neither change is at a level these results show it looking: both live inside a schema under `components`. `compatible: true` here means "I found nothing at the levels I compare." It does not mean "safe."

The 1.2.1 to 1.3.0 comparison shows a second gap. The tool reported one change, `Path added: /trips/{id}`. Checking the documents myself, that's correct, but the release also added a `query` operation to `/stations`, one of the new things in OpenAPI 3.2, and it didn't appear. The new `/trips/{id}` path also holds its operation in 3.2's `additionalOperations`, and the result names the path without saying anything about that operation. If you've moved to 3.2, expect the tool to undercount the new surface.

Reversing the pair worked the way it should. Going from 1.3.0 back to 1.2.1 returned `compatible: false` with `Path removed: /trips/{id}` as breaking.

Comparing the latest version back to the May 2024 payment commit turned up one more thing I'd argue with. Removing the `search`, `coordinates` and `country` query parameters from `GET /stations` came back as `parameter-removed` at `non-breaking`. They're optional parameters, so an old client's request is still well formed, but a client filtering by `country` has lost that feature. I'd want that one flagged for a person to look at.

## What that makes possible

- **Catch structural breaks in CI.** Run it on every pull request against the published contract and fail when `compatible` is false. Removed paths and newly required bodies get stopped before they merge, whatever the version number says.
- **Write a changelog from a diff.** The `message` strings are readable enough to draft release notes, and the `level` helps sort them.
- **Give an agent a check before it edits a contract.** An agent changing an OpenAPI can compare its output to the original and report what it did. The tool is read-only, so that's safe to allow.
- **Pair it with schema-level review.** Until it looks inside `components`, treat a clean result as covering paths, operations, parameters and request bodies only, and review changes to your schemas separately.

## Try it

It's free and needs no key. From any MCP client, connect to `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/governance`) and call `diff_api_versions`. Over REST:

```sh
jq -n --rawfile old old.yaml --rawfile new new.yaml '{old:$old,new:$new}' \
  | curl -s -X POST https://api.apievangelist.com/v1/governance/diff \
      -H 'Content-Type: application/json' -d @-
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) explain how to connect a client. Point it at the last two versions of your own contract, then open the YAML diff next to it and see what your schemas changed that the result doesn't mention. That's the honest way to learn what this tool will and won't do for you today.
