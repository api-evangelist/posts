---
published: true
layout: post
title: 'Clockrook: Scheduled Jobs For AI Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/clockrook-scheduled-jobs-for-ai-agents.png
date: 2026-12-01 14:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent-First
  - Clockrook
  - Scheduling
  - Monitoring
---
[Clockrook](https://clockrook.com) is the scheduler in my set of [eight agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/). It lets an agent come back to something later.

## The problem it solves

Agents don't persist between sessions. If you ask one to check something tomorrow, retry a call in an hour or post something every Monday, it has no way to do that on its own. Clockrook runs the job for it: call a URL, post to a [Hookpie](https://hookpie.com) inbox, or run a tool, at a time, on a cron or after a delay, with retries. Two add-ons fit naturally: uptime checks (is this URL up, and how fast?) and change watch (tell me when this page or JSON changes).

## How an agent uses it

The MCP server has 12 tools: `create_job`, `list_jobs`, `get_job`, `run_job`, `list_runs`, `pause_job`, `resume_job`, `delete_job`, plus the shared account, usage and pricing tools. The [OpenAPI](https://clockrook.com/openapi.json) has the same operations. The minimum interval is one minute for jobs and five minutes for change watch.

## Pricing

From [the pricing JSON](https://clockrook.com/v1/pricing):

- **Runs:** 1,000 a day free, then $0.008 per 1,000.
- **Schedules:** 25 free, and free up to 1,000 active, then $0.008 per schedule a month.
- **Uptime checks:** 1,000 a month free, then $0.40 per 1,000.
- **Change-watch checks:** 100 a month free, then $5 per 1,000.

Like the rest of the platform, it's pay as you go from one prepaid balance, by card or x402.

## Safety

The main risk is someone using a scheduler to hammer a third-party site. Clockrook caps the rate per target, respects robots.txt for change watch, sends an identifying User-Agent and refuses private and internal network addresses.

## What I learned

Time is the missing primitive for agents. Most of what people actually want an agent to do involves "later" or "every." Once Clockrook and Hookpie existed, my own automations became their first customers. That's usually a good sign that you built something useful.
