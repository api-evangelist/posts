# API Evangelist

The source for **[apievangelist.com](https://apievangelist.com)** — Kin Lane's API
Evangelist, studying the technology, business, politics, and people of APIs since 2010.

This repository is the main doorway to the API Evangelist network: the home page, the
5,000+ story blog archive, the guidance areas, and the navigation and agent-native
surfaces that tie the whole network of `*.apievangelist.com` sites together.

## What's here

It's a [Jekyll](https://jekyllrb.com/) site built with the `github-pages` gem
(Jekyll 3.10) and served from [apievangelist.com](https://apievangelist.com) (see
`CNAME`).

| Path | What it is |
| --- | --- |
| `_posts/` | The blog — 5,000+ stories ("Stories") going back to 2010. Posts can be **future-dated** to schedule publishing (see below). |
| `_layouts/` | Page templates — `default`, `post`, `service`, and `none` (for raw JSON/text output). |
| `_includes/` | Shared partials — nav (`topnav`, `sidenav-*`), `footer`, `newsletter-signup`, timelines, and the agent-native `ai-toolbar` / `webmcp` toolbars. |
| `_data/` | Site data — `nav.yml` (network navigation), `home-sections.yml` (home page network map), `knowledge.yml`, the `timeline-*.yml` sets, `tags.yml`, `network_areas.yml`, and search data. |
| `_network/` | Python tooling that builds the areas network graph, distributes agent-native / interlink / SEO surfaces across the sibling info-area repos, builds the aggregate search index, and runs the network-health crawler. |
| `index.html` | The home page. |
| `about/`, `contact/`, `services/`, `skills/`, `search/`, `timeline/`, `tags/`, `archive/`, `working/` | Top-level site sections. |
| `technology-of-apis/`, `business-of-apis/`, `evangelism-of-apis/`, `governance-of-apis/`, `history-of-apis/`, `politics-of-apis/` | The six **guidance areas** that organize API knowledge. |
| `well-known/`, `llms.txt` | Agent-native discovery surfaces — `.well-known/api-catalog`, `.well-known/api-onboarding`, `.well-known/agent-skills-index`, and an `llms.txt` for LLM/agent consumers. |

## The wider network

The home page and `_data/nav.yml` link out to the rest of the API Evangelist network,
each its own repository and subdomain — for example:

- **Discovery** — [search.](https://search.apievangelist.com) · [providers.](https://providers.apievangelist.com) · [apis.](https://apis.apievangelist.com) · [rating](https://apievangelist.com/rating/)
- **Learning** — [conversations.](https://conversations.apievangelist.com) · [papers.](https://papers.apievangelist.com) · [video.](https://video.apievangelist.com) · [newsletters.](https://newsletters.apievangelist.com)
- **Toolbox** — [solutions.](https://solutions.apievangelist.com) · [tools.](https://tools.apievangelist.com) · [standards.](https://standards.apievangelist.com) · [schema.](https://schema.apievangelist.com) · [rules.](https://rules.apievangelist.com) · [policies.](https://policies.apievangelist.com)
- **Alignment** — [lifecycle.](https://lifecycle.apievangelist.com) · [strategies.](https://strategies.apievangelist.com) · [experiences.](https://experiences.apievangelist.com) · [vocabularies.](https://vocabularies.apievangelist.com)

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. The blog archive is large, so the first build takes
a couple of minutes; `--incremental` speeds up later rebuilds.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-slug.md` with front matter:

```yaml
---
published: true
layout: post
title: 'Your Title'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-image.png
date: 2026-09-10
author: Kin Lane
tags:
  - Governance
  - OpenAPI
---
```

**Future-dating is by design.** A post dated in the future stays unpublished until its
date arrives — the daily deploy (below) rebuilds the site and publishes anything whose
date has passed, so the blog can be staged weeks ahead.

## Deployment

Deployed to **GitHub Pages** via [`.github/workflows/pages.yml`](.github/workflows/pages.yml),
which builds with the official `jekyll-build-pages` action. It runs on:

- every push to `main`,
- manual `workflow_dispatch`, and
- a daily `schedule` at **12:10 UTC** — so scheduled (future-dated) posts publish on
  their date even when nothing is pushed.

`_headers` and `_redirects` are kept in the build output for edge-config support.

_Last manual rebuild: 2026-07-19._
