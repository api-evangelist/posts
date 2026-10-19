---
published: true
layout: post
title: 'Five Thousand Official SDKs, And Nine Thousand That Are Not'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/five-thousand-official-sdks-and-nine-thousand-that-are-not.png
date: 2026-10-20
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - SDKs
  - Developer Experience
  - Agents
---
One of the markets we built this week isn't an industry at all. It cuts across the whole catalog: which API providers publish their own official SDKs.

## How we measured it

We started from the SDK links the catalog already stores for each provider and checked every one against the package registry it lives on: npm, PyPI, the Go module proxy, Maven Central, NuGet, RubyGems, and crates.io. That was 15,094 candidate packages across 3,802 providers.

A package only counts as official when two things are true. Its homepage or repository lives on the provider's own domain or the provider's own GitHub organization. And the publisher, by email domain or organization, matches the provider too. Both legs, every time.

## What we found

5,008 official SDK packages across 1,808 providers.

| Registry | Providers with an official SDK |
|---|---|
| npm | 1,238 |
| PyPI | 523 |
| Go | 386 |
| Maven | 226 |
| RubyGems | 102 |
| NuGet | 89 |
| crates.io | 26 |

JavaScript is still the default developer surface by a wide margin. Python is the clear second, which matches what agents are written in. Rust is barely on the board.

The more interesting number is the other one. Roughly 8,900 of the packages that look like a provider's SDK aren't official. They are community wrappers, forks, abandoned experiments, and in a few cases utility libraries that just borrowed a name. One of our own spot checks caught a fork of a color library being counted as an SDK, which is how we ended up widening the filter.

## Why this belongs in the Kin Score

Agents don't read documentation the way people do. They install packages. When a coding agent is asked to integrate with an API, the first thing it usually does is search a package registry for the provider's name, and it takes whatever comes back. If the official SDK isn't clearly the provider's, the agent may well pick the wrapper with the better README.

That makes officiality an agent-readiness question, not just a developer experience nicety. A provider whose SDK homepage points at its own domain, and whose packages are published under its own organization, is telling an agent which package to trust. A provider whose ecosystem is mostly community packages is leaving that decision to whoever named their package first.

We also record staleness. An official SDK with no release in 24 months is marked lapsed. Plenty of providers have an official package that hasn't moved since before their current API version shipped.

## What providers can do

The fix is small and entirely in the provider's hands:

- Point every SDK's homepage and repository at your own domain or GitHub organization.
- Publish under an organization or email domain that matches your company.
- Link your SDKs from your developer portal and your APIs.json.
- Ship releases, or mark the package deprecated when you stop.

These SDK edges don't move market positions today. They sit alongside them as a distribution signal. But they are now part of what the Kin Score knows about a provider, and they are one of the clearest signals an agent has.
