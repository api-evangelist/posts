---
published: true
layout: post
title: 'Add DNS Records, Block Attackers And Balance Traffic With Cloudflare'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/add-dns-records-block-attackers-and-balance-traffic-with-cloudflare.png
date: 2026-11-06 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Cloudflare
  - IT Infrastructure Management
  - Cybersecurity Management
  - Threat Detection & Response Management
  - IP Defence & Enforcement
  - Observability Management
  - Security
  - DNS
---

Your website sits behind Cloudflare, and most days you never think about it. Then a new service needs a DNS record, a bot starts hammering the login page, a lookalike domain shows up pretending to be you, or a sale is coming and one server will not cope. Each of those is a few clicks in the dashboard, which is fine until you have fifty domains or want it to happen on its own. [Cloudflare](https://apis.io/providers/cloudflare/) exposes everything in that dashboard through an API, a way for software to talk directly to other software, so your deployment tooling, a script or an AI assistant can make the change for you.

## What Cloudflare does

[Cloudflare](https://www.cloudflare.com/) describes itself as a global network designed to make everything you connect to the Internet secure, private, fast, and reliable. In practice it is the layer between the public internet and your servers: DNS, a firewall, a content cache, a load balancer and, increasingly, a place to run code and AI models at the edge. On APIs.io we track 25 separate APIs under the Cloudflare name, including [Load Balancing](https://apis.io/apis/cloudflare/cloudflare-load-balancing-api/), [WAF](https://apis.io/apis/cloudflare/cloudflare-waf-api/), [Email Routing](https://apis.io/apis/cloudflare/cloudflare-email-routing-api/), [Waiting Room](https://apis.io/apis/cloudflare/cloudflare-waiting-room-api/) and [Zero Trust](https://apis.io/apis/cloudflare/cloudflare-zero-trust-api/).

## What you can get done

We have mapped Cloudflare's operations to 26 business capabilities. These are the five a business will reach for first.

### [IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/)

A load balancer spreads visitors across several servers, so one failing or filling up is invisible to customers. This is the largest capability, with 243 operations, and it also covers the network tunnels that connect your own sites to Cloudflare.

- `GET /zones/{zone_id}/load_balancers` lists the load balancers on a domain.
- `POST /zones/{zone_id}/load_balancers` creates one over your existing server pools.
- `PATCH /zones/{zone_id}/load_balancers/{load_balancer_id}` changes part of a load balancer, such as which pool takes traffic first.
- `DELETE /zones/{zone_id}/load_balancers/{load_balancer_id}` removes one.
- `POST /accounts/{account_id}/magic/gre_tunnels` creates a GRE tunnel, a private link between your network and Cloudflare's.

### [Cybersecurity Management](https://apis.io/capabilities/cybersecurity-management/)

The web application firewall, or WAF, inspects every request before it reaches your site and blocks the ones that look like attacks. Data loss prevention profiles describe sensitive data, such as card numbers, so it can be stopped from leaving. There are 156 operations here.

- `GET /zones/{zone_id}/firewall/waf/packages/{package_id}/rules` lists the firewall rules in a package.
- `PATCH /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}` changes how one rule behaves, for example from block to challenge.
- `GET /accounts/{account_id}/dlp/profiles` lists the data loss prevention profiles on the account.
- `POST /accounts/{account_id}/dlp/profiles/custom` creates a custom profile describing data you want caught.
- `DELETE /accounts/{account_id}/dlp/profiles/custom/{profile_id}` removes one.

### [Threat Detection & Response Management](https://apis.io/capabilities/threat-detection-response-management/)

This is the investigation side: searching the email messages Cloudflare's email security has seen, acting on many of them at once, and reading reports on botnet activity. There are 71 operations.

- `GET /accounts/{account_id}/email-security/investigate` searches email messages that passed through email security.
- `POST /accounts/{account_id}/email-security/investigate/bulk` starts a bulk action, such as releasing or quarantining many messages.
- `GET /accounts/{account_id}/email-security/investigate/bulk/{job_id}` checks how that job is going.
- `GET /accounts/{account_id}/botnet_feed/asn/{asn_id}/day_report` reads a daily report of botnet traffic from a network.

### [IP Defence & Enforcement](https://apis.io/capabilities/ip-defence-enforcement/)

Brand protection watches for domains registered to look like yours. You save a query describing your brand, and Cloudflare reports the matches, which is how you find the phishing site before your customers do. There are 56 operations.

- `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries` saves a query for domains resembling your brand.
- `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/matches` lists the domains that matched.
- `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/matches/bulk-dismiss` dismisses matches you have reviewed, or restores them.
- `PATCH /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries/{query_id}` adjusts a query.

### [Observability Management](https://apis.io/capabilities/observability-management/)

Tracing follows a single request through your systems so a slow page can be explained. These operations, 33 of them, control what gets traced and where the data goes.

- `GET /zones/{zone_id}/observability/tracing/settings` reads the tracing settings on a domain.
- `PUT /zones/{zone_id}/observability/tracing/rules` replaces the rules that decide which requests get traced.
- `POST /accounts/{account_id}/workers/observability/destinations` adds a destination, such as your own monitoring tool, for the data to flow to.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. They are written in Arazzo, an open format for describing them, and Cloudflare has 23 of them on APIs.io.

- [Create DNS Record and Verify](https://apis.io/arazzos/cloudflare/cloudflare-create-dns-record-and-verify-workflow/) creates a DNS record and reads it back to confirm it was stored.
- [Block IP Access Rule](https://apis.io/arazzos/cloudflare/cloudflare-block-ip-access-rule-workflow/) blocks an address, lists the rules, then removes the block.
- [Create Firewall Rule](https://apis.io/arazzos/cloudflare/cloudflare-create-firewall-rule-workflow/) writes a filter expression and attaches a firewall rule to it.
- [Create Load Balancer](https://apis.io/arazzos/cloudflare/cloudflare-create-load-balancer-workflow/) creates a load balancer over existing pools and reads it back.
- [Configure SSL Mode](https://apis.io/arazzos/cloudflare/cloudflare-configure-ssl-mode-workflow/) reads the current encryption mode, changes it, and confirms the change.
- [Create and Activate Zone](https://apis.io/arazzos/cloudflare/cloudflare-create-and-activate-zone-workflow/) adds a new domain, triggers its activation check and waits for the result.

## Getting started

Cloudflare is a freemium, hosted service with self-serve signup: a free account can call the API straight away, and the paid plans add the firewall, brand protection and email security products above. Access starts with an API token, and the [create a token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) guide walks through it; the [load balancing](https://developers.cloudflare.com/load-balancing/) documentation covers the traffic side. We have also written 53 conversational phrasing overlays for Cloudflare, a layer that maps everyday questions to the operation that answers them, and you can see one on the [Accounts API phrasing overlay](https://apis.io/overlays/cloudflare/cloudflare-accounts-api-phrasing-overlay/). On APIs.io you can browse the [Cloudflare profile](https://apis.io/providers/cloudflare/), the [Load Balancing API](https://apis.io/apis/cloudflare/cloudflare-load-balancing-api/), the [WAF API](https://apis.io/apis/cloudflare/cloudflare-waf-api/) and the [Waiting Room API](https://apis.io/apis/cloudflare/cloudflare-waiting-room-api/). Take the one dashboard change you make most often and have it made for you; the DNS record workflow above is the usual first step.
