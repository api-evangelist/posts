---
published: true
layout: post
title: 'I Mapped Every MCP Working Group, Interest Group, And Extension'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-mapped-every-mcp-working-group-interest-group-and-extension.png
date: 2026-10-30
author: Kin Lane
tags:
  - Model Context Protocol
  - MCP
  - Governance
  - Standards
  - Specifications
  - AI Agents
---
I've been sitting in on the MCP Agents Working Group, and this month it stopped being a working group. On October 16 it was converted to an interest group, its Tasks work and the leads behind it moved over to a renamed Tasks and Events Working Group, and the conversation in the room shifted to how interest groups can "spawn" extensions. Every thread I pull on in MCP right now leads back to the same place: the extensions model.

I realized I didn't actually have a clear picture of the whole thing. How many groups are there? When do they meet? What rules do they operate under? What have they produced? And where does all of that land in the specification? So I went and pulled it all together from the source: every charter in the `docs/community/` folder of the [specification repository](https://github.com/modelcontextprotocol/modelcontextprotocol), the 595 events on the public [meeting calendar](https://meet.modelcontextprotocol.io), the SEP index, and every `ext-` and `experimental-ext-` repository in the organization. Here is what it looks like as of today.

<div class="mca"><div class="wide"><div class="stats" id="stats"></div></div></div>

## The specification, with extensions

The first thing I wanted to see was the shape of the specification itself. MCP is deliberately keeping its core small. The core is the base protocol, two transports, authorization, a handful of interaction patterns, and the server and client features most of us already know: tools, resources, prompts and elicitation. It is also starting to shed features. Roots, Sampling and Logging were deprecated by SEP-2577 and, under the new feature lifecycle policy, have to stay deprecated for at least twelve months before they can be removed.

New protocol surface is going somewhere else now. It's going into extensions, which live in their own repositories and move through three stages: Experimental, Beta and Stable. An extension can be promoted into core from Beta or Stable, but only one extension is currently marked for that trip, and it's Tasks. Every extension has to be owned by a working group or an interest group, so I put the owning group on each card below.

<div class="mca"><div class="wide">
 <div class="map">
  <div class="core" id="core"></div>
  <div class="board" id="board"></div>
 </div>
</div></div>

The pipeline behind this board is just as interesting as the board itself. Of the 45 SEPs that have been merged, only four are on the Extensions Track. But a good chunk of the 32 SEP pull requests open right now would either land as an extension or reshape one, and the question my own group is chartered to answer, whether there needs to be an Agents Extension alongside Tasks, is sitting right in the middle of it.

<div class="mca"><div class="wide">
 <h3>In the pipeline: open SEPs and evaluations that would add or reshape extensions</h3>
 <div class="pipe"><div class="row" id="pipe"></div></div>
</div></div>

## How the governance actually works

The governance is what changed under my feet, so I wanted to understand it properly rather than pick it up secondhand on calls. MCP runs two kinds of groups. Interest groups exist to identify problems, gather use cases and make recommendations, and they decide things by rough consensus that isn't binding on anyone. Working groups exist to build. They write SEPs, ship reference implementations, and make binding decisions through lazy consensus, a formal vote if someone blocks, and escalation to the Core Maintainers if the vote doesn't settle it.

What makes the extensions model matter is that it gives interest groups a path to produce something concrete without becoming a working group. An extension enters the Experimental stage on an Extension Maintainer's say-so, with no SEP required, as long as a group owns it. The SEP only becomes mandatory at Beta, and Stable requires a second SEP, two interoperating implementations and a conformance scenario. Here's the full path, and the rules side by side.

<div class="mca"><div class="wide">
 <div class="flow" id="flow"></div>
 <div class="cmp"><table>
  <thead><tr><th></th><th>Interest Group</th><th>Working Group</th></tr></thead>
  <tbody>
   <tr><td>Purpose</td><td>Identify and discuss problems</td><td>Build concrete solutions</td></tr>
   <tr><td>Output</td><td>Problem statements, use cases, recommendations; may own an experimental extension</td><td>SEPs, reference implementations, code</td></tr>
   <tr><td>Leadership</td><td>Facilitator(s), Member+ on contributor ladder</td><td>Lead(s), 2–3 hrs/week commitment</td></tr>
   <tr><td>Sponsorship</td><td colspan="2">Two Core Maintainers or one Lead Maintainer</td></tr>
   <tr><td>Decisions</td><td>Rough consensus, non-binding</td><td>Binding: lazy consensus (5/10 days) → vote (50% quorum, majority; 2/3 for scope) → Core Maintainer escalation</td></tr>
   <tr><td>Formation</td><td>Discord <code>#wg-ig-group-creation</code> template, then charter PR</td><td>Charter PR approved via CODEOWNERS by Core Maintainers</td></tr>
   <tr><td>Reporting</td><td>Keep charter and member list current</td><td>Quarterly updates (Jan / Apr / Jul / Oct) in GitHub Discussions</td></tr>
   <tr><td>Meetings</td><td colspan="2">Open, on meet.modelcontextprotocol.io 7 days ahead, agenda in Discussions, notes within 48 hours, Google Meet transcription only</td></tr>
   <tr><td>Retirement</td><td>Core or Lead Maintainers, when no longer active</td><td>Lead or Core Maintainer proposes; also on completion or sustained inactivity</td></tr>
  </tbody></table></div>
</div></div>

## Every chartered group

With the rules in hand, I wanted the roster. There are 22 chartered groups right now: 14 working groups and 8 interest groups. For each one I pulled the leads and the organizations they come from, the meeting cadence the charter promises, the actual slot on the public calendar, how many meetings have been held, the Discord channel, the repositories, and the SEPs the charter points to. You can filter by type or search for a person, an organization or a SEP number. The Agents group is highlighted because it's mine.

<div class="mca"><div class="wide">
 <div class="controls">
  <button type="button" data-f="all" aria-pressed="true">All</button>
  <button type="button" data-f="WG" aria-pressed="false">Working Groups</button>
  <button type="button" data-f="IG" aria-pressed="false">Interest Groups</button>
  <input id="q" type="search" placeholder="Filter by name, lead, org, SEP" aria-label="Filter groups">
 </div>
 <div class="grid" id="groups"></div>
 <p class="src">Meeting slots are in UTC, taken from the next scheduled occurrence on the public calendar. “Held” counts calendar events before 2026-10-30 across every series name the group has used.</p>
</div></div>

## What the calendar remembers

Charters only tell you about the groups that exist on paper today. The calendar tells you what has actually been happening, and it goes back to September 2025. When I plotted every meeting series on it, a second community showed up: groups that have met for months without a charter, and groups that quietly stopped meeting without ever being formally retired. The Gateways Interest Group has held 41 meetings, more than almost anyone, and there's no charter for it in the repository. Server Identity, Mixup Protection, Fine-Grained Auth and Primitive Grouping all ran for a while and then went quiet.

<div class="mca"><div class="wide">
 <p class="mute">Each bar runs from a series’ first to its last scheduled meeting. Solid blue bars are working groups, solid purple bars are interest groups, and dashed red bars have no charter in the repository. The vertical line marks today, and the number after each bar is how many meetings it has held.</p>
 <div class="tl" id="tl"></div>
</div></div>

## Gaps and patterns

Putting all of this in one place surfaced things I wouldn't have noticed from inside any single group. None of this is a criticism of the people doing the work. Most of these groups are run by volunteers carving time out of day jobs. But if extensions are going to be how MCP grows, the bookkeeping around who owns what is going to matter a lot more than it has so far.

<div class="mca"><div class="wide"><ul class="notes" id="notes"></ul></div></div>

## Who is leading

The last thing I wanted to understand was who is actually at the front of these rooms. Across the 22 charters, Anthropic holds 10 lead or facilitator seats and Bloomberg holds 8, and a handful of people carry several groups at once. Sambhav Kothari from Bloomberg leads five of them. That's a lot of trust and a lot of load resting on a small number of shoulders, and it's worth keeping in mind as more interest groups start spinning up extensions that someone will have to maintain.

<div class="mca"><div class="wide">
 <div class="cmp"><table><thead><tr><th>Organization</th><th>Lead / facilitator seats</th></tr></thead><tbody id="orgs"></tbody></table></div>
</div></div>

I'm going to keep this current. I already pull the published meeting notes for a handful of the MCP groups into my standards-meetings work, and the next step is to cover every chartered group so I can tell you not just who is meeting, but what they're actually deciding. If you're in one of these groups and I've got something wrong about it, let me know. I'd rather be corrected in public than stay wrong.

<p class="src" style="font-size:.85rem;color:#5b6878">Sources: github.com/modelcontextprotocol/modelcontextprotocol (docs/community, docs/extensions, seps/, docs/specification/draft), meet.modelcontextprotocol.io/ics/events.ics, and the ext- and experimental-ext- repositories in the modelcontextprotocol organization, pulled October 30, 2026.</p>

{% include mcp-atlas.html %}
