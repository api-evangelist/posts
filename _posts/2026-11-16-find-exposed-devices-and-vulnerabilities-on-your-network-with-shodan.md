---
published: true
layout: post
title: 'Find Exposed Devices And Vulnerabilities On Your Network With Shodan'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-exposed-devices-and-vulnerabilities-on-your-network-with-shodan.png
date: 2026-11-16 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Shodan
  - Vulnerability Management
  - Security
  - Threat Intelligence
---

Most businesses do not have a complete picture of what they have connected to the internet: an old server, a security camera, a router someone set up years ago, a database left open by mistake. Attackers go looking for exactly those things. Shodan lets you see what they would see, and it does it through an API, an application programming interface, so your own software (or an AI assistant) can check your exposure on a schedule instead of you remembering to. Here is the [Shodan profile on APIs.io](https://apis.io/providers/shodan/).

## What Shodan does

[Shodan](https://www.shodan.io/) calls itself the world's first search engine for internet-connected devices. It continuously crawls the public internet to build a searchable database of servers, IoT devices, industrial control systems, routers, webcams, databases and any other host that exposes a service. Alongside REST, Streaming and Trends APIs, it offers on-demand scanning, network alerts, DNS lookups, the InternetDB API and the CVEDB vulnerability database. We index 5 Shodan APIs, including the [CVE API](https://apis.io/apis/shodan/shodan-cve-api/).

## What you can get done

### [Find and fix vulnerabilities](https://apis.io/capabilities/vulnerability-management/)

A vulnerability is a known weakness in a piece of software, and each one gets an ID called a CVE. Shodan connects the two halves of the job: what is exposed on your network, and which known weaknesses affect it.

- `GET /cves` searches the vulnerability database.
- `GET /cve/{cveId}` gets the full details of one vulnerability.
- `POST /shodan/scan` asks Shodan to scan your own addresses right now.
- `GET /shodan/scan/{id}` checks on a scan's progress.
- `GET /shodan/ports` lists the ports, the numbered doors a service listens on, that Shodan crawls.

## Workflows that put it together

A workflow is a recipe: several API calls in a set order that finish one job. We have mapped 15 for Shodan, and these are the ones I would start with:

- [Domain Reconnaissance](https://apis.io/arazzos/shodan/shodan-domain-recon-workflow/) lists a domain's DNS records, resolves a subdomain, and inspects the host behind it.
- [InternetDB Vulnerability Triage](https://apis.io/arazzos/shodan/shodan-internetdb-vuln-triage-workflow/) pulls the free InternetDB record for an IP address, then details one of its known vulnerabilities.
- [CVEDB Product Vulnerability Enrichment](https://apis.io/arazzos/shodan/shodan-cve-enrichment-workflow/) turns a product name into its vulnerability list and full details.
- [Network Alert Lifecycle](https://apis.io/arazzos/shodan/shodan-network-alert-lifecycle-workflow/) creates an alert on your address ranges, turns on a trigger, and keeps the list of addresses up to date.
- [Alert With Notifier](https://apis.io/arazzos/shodan/shodan-alert-with-notifier-workflow/) sets up where alerts get delivered and attaches it to an alert.
- [Account Overview](https://apis.io/arazzos/shodan/shodan-account-overview-workflow/) shows your plan's limits and your own IP address.

## Getting started

Shodan is freemium with self-serve signup. Plans are in the [Pricing section of the APIs.io profile](https://apis.io/providers/shodan/#pricing), where a Membership is listed at $49 (one-time). Every request uses an API key, described in Shodan's [API requirements](https://developer.shodan.io/api/requirements). The docs are the [REST API](https://developer.shodan.io/api), the [Streaming API](https://developer.shodan.io/api/stream) and the [Trends API](https://developer.shodan.io/api/trends). On APIs.io, see the [Shodan profile](https://apis.io/providers/shodan/), the [Account API](https://apis.io/apis/shodan/shodan-account-api/) and the [Directory API](https://apis.io/apis/shodan/shodan-directory-api/).

Only scan addresses you own or are authorized to test, and start by looking up your own office IP.
