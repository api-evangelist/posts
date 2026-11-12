---
published: true
layout: post
title: 'Find The Deprecated API Operations That Never Say When They Go Away'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-the-deprecated-api-operations-that-never-say-when-they-go-away.png
date: 2026-11-12
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Deprecation
  - API Lifecycle
  - Governance
  - OpenAPI
---

Marking an API operation as deprecated is the easy part. You flip `deprecated: true` in the OpenAPI and move on. What breaks consumers isn't the flag. It's the missing date. A deprecated operation that never says when it goes away leaves every team that depends on it guessing, and an agent wired to it has no idea anything is wrong at all. I wanted a quick way to see the honest migration picture for any API description, so today's tool is `deprecation_posture`, which sits behind `POST /governance/deprecation` on the API Evangelist API.

It does one thing. It walks an OpenAPI (or AsyncAPI, Arazzo or JSON Schema) and reports every deprecated operation, whether that operation announces a sunset (an `x-sunset` date, or a `Sunset` or `Deprecation` response header), and any deprecated schema fields. It's read-only and free.

## What I gave it

I didn't want a toy example, so I gave it a real one with known history: the GitHub v3 REST Teams API, the Teams slice of [GitHub's public REST description](https://github.com/github/rest-api-description) as we keep it in the API Evangelist network for [GitHub on APIs.io](https://apis.io/providers/github/). GitHub moved team endpoints from `/teams/{team_id}` to org-scoped `/orgs/{org}/teams/{team_slug}` years ago, and the old routes are still in the description, marked deprecated. It's 156 KB of OpenAPI, version 1.1.4.

The arguments were just two:

- `document`: the full YAML of the Teams API, as a string.
- `context`: "Find which deprecated GitHub Teams operations announce a sunset."

## What came back

The answer came back in under a second, and the summary is the whole story:

```json
{
  "summary": {
    "deprecatedOperations": 16,
    "announcingSunset": 0,
    "missingSunset": 16,
    "deprecatedFields": 0
  },
  "operations": [
    { "method": "get",    "path": "/teams/{team_id}",
      "operationId": "teams/get-legacy",
      "announcesSunset": false, "sunset": null, "headers": [] },
    { "method": "delete", "path": "/teams/{team_id}",
      "operationId": "teams/delete-legacy",
      "announcesSunset": false, "sunset": null, "headers": [] },
    { "method": "put",    "path": "/teams/{team_id}/repos/{owner}/{repo}",
      "operationId": "teams/add-or-update-repo-permissions-legacy",
      "announcesSunset": false, "sunset": null, "headers": [] },
    ...
  ],
  "deprecatedFields": []
}
```

Sixteen deprecated operations. Zero of them announce a sunset. All sixteen are the `-legacy` team routes: get, update and delete a team, list and manage members and memberships, list and manage repository permissions, list pending invitations, list child teams. These aren't edge cases. Membership and repository permissions are the heart of how organizations use teams.

Here's the part I want to be honest about, because the tool doesn't tell you it. GitHub isn't silent. I opened the YAML, and every one of these operations carries a warning in its description: "**Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the Get a team by name endpoint." A person reading the docs gets the message. But it's prose. There is no date, no `x-sunset`, no `Sunset` header declared on a single response, and the word "sunset" doesn't appear anywhere in the file. So `deprecation_posture` correctly scores all sixteen as missing a sunset, and the reason matters: the notice was written for people, not for machines.

That's the gap this tool is built to show. "Closing down" with no date is the posture that breaks consumers, because nobody can plan against it. A CI job can't fail on it. A dependency report can't sort it. An agent picking an operation from the contract sees `deprecated: true` at best and a paragraph of Markdown at worst. And the warning has been in place long enough that "closing down" has stopped meaning anything in particular.

The tool has a limit too, and it's worth knowing. It reads what the description declares. It doesn't call GitHub to see whether the live responses actually send a `Sunset` header. If a provider sends the header at runtime but never documents it, this report will undercount. The fix for that is the same as the fix for GitHub: write it into the contract.

## What that makes possible

- **A deprecation gate in CI.** Run it on every pull request that touches your OpenAPI, and fail the build when `missingSunset` goes above zero. Nobody gets to deprecate something without saying when it leaves.
- **An honest migration list for consumers.** Point it at the descriptions of the APIs you depend on, not just the ones you publish. The `operations` array is the list of calls in your code that are on borrowed time, and `sunset: null` tells you which ones you can't schedule around.
- **Safer agents.** Before you hand a contract to an agent, run this and either drop the deprecated operations or add the dates. An agent will happily pick a `-legacy` route if it looks like the shortest path.
- **A conversation with the provider.** Sixteen operations with a warning and no date is a specific, polite ask: give us the date, as `x-sunset` or a `Sunset` header ([RFC 8594](https://www.rfc-editor.org/rfc/rfc8594)).

If you want to see how a provider's deprecations move between releases, the next step is `diff_api_versions`, which compares two versions of the same description and calls out what broke.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/governance` toolset), call `deprecation_posture` with your document. Over REST it's one call:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/deprecation \
  -H 'Content-Type: application/json' \
  -d '{"document": "<your OpenAPI as YAML or JSON>"}'
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), the MCP server is in the [MCP docs](https://developer.apievangelist.com/mcp-server), and [getting started](https://developer.apievangelist.com/getting-started) walks you through a key. Run it on the API you publish and the three you depend on most, and see how many of your deprecations actually say when they go away.
