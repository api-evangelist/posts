---
title: "My /me API Using Naftiko"
date: 2026-04-07
tags:
    - Nafitko
    - /me
    - Sovereign
    - Aggregate
image: >-
  https://kinlane-images.s3.amazonaws.com/shared/copper-circuit-kin-chesapeake.jpg   
---
[For years I've been writing on API Evangelist about the idea of a personal API footprint](https://apievangelist.com/2017/01/09/the-api-driven-marketplace-that-is-my-digital-self/) — the idea that every individual should have a single, coherent surface representing themselves across the dozens (or hundreds) of services they touch every day. I've explored this with partners, sketched it at Postman, and watched the pattern slowly become normalized inside individual APIs: GitHub has `/user`, Slack has `auth.test`, Spotify has `/me`, Notion has `/users/me`, Bluesky has `getProfile`. Almost every platform now agrees that "me" is a high priority API resource,they just don't agree on what "me" looks like, where it lives, or how to compose it.

With today's [alpha release of Naftiko](https://naftiko.io/product/), I can finally stop talking about this and start iterating on it for realz. So I built the /me capability, a single Naftiko 0.5 capability file that defines my personal API footprint as both an HTTP API and an MCP server, covering 84 of the services I actually depend on.

## The Capability

This personal capability does three things for me that helps me standardize the concept of what a /me API does.

1. **Consumes** the services I use, normalizing how I read from them — whether they speak REST, RSS, or only render HTML.
2. **Exposes an HTTP API** on port 8081 with a `GET /me` endpoint that aggregates my identity across services.
3. **Exposes an MCP server** on port 8080 with ~63 read-only tools for individual resources, plus the same aggregated `me` tool.

An important thing to highlight it's read-only by design. No writes, no posts, no deletes. This is about reading my own footprint, not making changes to any of the data. this is something I'll handle with other capabilities.

## The Services

The 84 accounts split into three access patterns based on what each service actually offers:

**Direct API access (35 services)** — the platforms that have proper APIs with bearer-token auth and a real `/me`-style endpoint. GitHub, Bluesky, Discord, Slack, Notion, Dropbox, Spotify, LinkedIn, Mastodon, Stripe, PayPal, Plaid, Wise, Cloudflare, Postman, Docker Hub, Twilio, OpenAI, Fastmail, Calendly, Zoom, Canva, DocuSign, Formspree, Buttondown, Inoreader, Bitly, EasyCron, YouTube, Pinterest, SoundCloud, Etsy, Uber, Hover, G2.

**RSS feeds (13 sources)** — read-only content streams where the service publishes a feed but no useful personal API. API Evangelist, BBC, DZone, The Economist, Hacker News, HackerNoon, Medium, NY Times, PBS, Politico, Substack, The New Stack, Crunchbase News.

**HTML pages (15 services)** — the financial, travel, civic, and institutional accounts where there's no API at all and the only way to read my own data is to scrape the page I'd otherwise log into. Amazon orders, Chase, E*TRADE, Credit Karma, Amtrak, Alaska Air, Expedia, CVS prescriptions, Extra Space, TriNet, Zillow saved homes, Ancestry, IETF, MIT, MoMA, NYPL, NY.gov.

This split is itself a statement about the state of personal APIs in 2026: about 40% of the services I use have a real API, 15% have a feed, and the remaining 45% — including most of my financial and institutional life, which will require scraping a webpage to get at my own information.

## Consumes & Produces

**On the consume side**, each service is normalized into a Naftiko `consumes` namespace with one or more resources and operations. A GitHub `consumes` block defines the bearer auth, the `/user` resource, the `/user/repos` resource, gists, and notifications. A Bluesky `consumes` block defines the AT Protocol XRPC endpoints. An RSS feed `consumes` block uses `outputRawFormat: "xml"` and maps `$.rss.channel.item` into structured arrays of titles, links, and pub dates. An HTML `consumes` block uses `outputRawFormat: "html"` to extract structured data from a rendered page.

The point is that once a service is wrapped in a `consumes` block, the rest of the capability doesn't care whether the data came from a REST API, an RSS feed, or a scraped page. Everything downstream just sees normalized JSON.

On the produce side, the capability exposes what I need to power my CLaude usage in my VSCode, desktop, and in the browser.

- **`GET /me`** — the headline endpoint. Calls the identity endpoint of 17 services in parallel (GitHub, Bluesky, Discord, Slack, Notion, Spotify, Dropbox, LinkedIn, Mastodon, Stripe, PayPal, Cloudflare, Postman, Docker, Fastmail, OpenAI, Zoom) and returns a single JSON object keyed by service. This is my personal API footprint as one HTTP response.
- **63 MCP tools** for individual resources: `get-my-repos`, `get-my-bluesky-feed`, `get-my-slack-channels`, `get-my-notion-pages`, `get-my-stripe-balance`, `get-my-spotify-recently-played`, `get-feed-hacker-news`, `get-my-amazon-orders`, and so on. Each is a thin, read-only projection over the underlying consume.
- **An MCP `account-summary` prompt** that takes a timeframe argument and asks for a cross-account activity summary.
- **An MCP `account-index` resource** describing the connected accounts and their status.

## Beyond Agents & Copilots

The natural assumption when you see "MCP server" is that this is a thing for Claude or Cursor or some other agent to call. And yes, it is. But I find it just as interesting when you treat your personal API footprint as a regular HTTP API that any application or CRON job can hit.

A few things this prototype /me capability offers:

- **A personal dashboard** — a simple web page that hits `GET /me` once and renders my current state across every service I care about. No 17 separate OAuth flows in the front-end. No 17 vendor SDKs. One endpoint.
- **A personal status page** — a public (or private) page generated from my own footprint, showing what I'm reading, writing, listening to, shipping, and spending — assembled from sources I control rather than from whatever each platform decides to surface.
- **Cross-service automations that aren't agents** — a cron job that pulls `/me` once an hour, diffs it against the previous snapshot, and writes a structured changelog. No LLM required. No prompt. Just data.
- **Personal analytics over time** — because everything flows through one API, I can log responses to a database and finally answer questions like "how has my GitHub activity correlated with my Substack posting cadence over the last year?" Today that question requires writing five separate ETL scripts.
- **A backup of my own footprint** — if my personal API is the canonical read interface to my digital life, then snapshotting it on a schedule is a backup of who I am across services, in a format I own.
- **Embedded use in other apps I build** — any side project I write can ask "what is Kin's current state?" without me wiring up another OAuth integration. The personal API is the integration.
- **A substrate for portability** — if I ever want to leave a platform, the `consumes` block for that platform is also a map of what I'd need to extract. The capability is documentation as much as it is runtime.

The agents and copilots are real, and they're definitely a consumer of this. But they're not the *reason*. The reason is that I should not have to log in to 84 different websites to understand my own life, and no individual vendor is going to solve that for me. The only entity with the incentive to build a unified read view of *me* is *me*.

## Naftiko Alpha Release

Until now, "personal API footprint" was a slide. Each time I wanted to actually build it, I hit the same wall: writing 84 bespoke integrations is a project, not a side project, and the second I finished one, three of the upstream APIs would change and I'd be back to maintenance hell.

What Naftiko gives me, and what made today the day I actually built this, is the declarative format where each service is a `consumes` block, each consume is a chunk of YAML I can edit in isolation, and the runtime handles the auth, the HTTP, the XML parsing, the HTML extraction, the MCP wiring, and the HTTP server. The capability file is ~2,000 lines, but it is *2,000 lines of declaration*, not 2,000 lines of glue code. When GitHub changes its API, I edit one resource block. When I want to add a new service, I add one `consumes` namespace and one tool.

This is the approach I've been hoping for. The personal API footprint stops being a possible and starts being a file I can iterate on, push to a repo, run, and begin iterating on over time.

## What is Next?

This first cut is intentionally read-only and intentionally broad — I wanted to see all 84 services in one file, even the ones where my only option is HTML scraping, because the gaps are part of the story. From here I want to:

- Tighten the identity-bearing services so `GET /me` returns a clean, normalized profile schema instead of a per-service object soup.
- Add a snapshot/diff layer so the capability can answer "what changed since last time" without an agent in the loop.
- Start writing the *next* layer: the things you can build on top of a personal API once you have one.
- Playing what is possible within Claude when I have access to all of this data on a reliable basis.

I can just run this capability locally for now. Keep iterating and playing with what is possible. Then I'll likely deploy using a Cloudflare worker so that I can access across machines, servers, and services--like with my CRON service. 

This capability represents Kin Lane. I need to think about the separation with API Evangelist. I also need to think about what the separation is with my Naftiko capabilities. This is something that Naftiko affords when it comes to the tagging and domain-driven capabilities, so I am not worried, and interested in seeing what is possible.

```
naftiko: "0.5"

info:
  label: "Kin Lane /me API and MCP"
  description: "Unified read-only capability providing access to my personal resources across all accounts. Exposes an /me endpoint aggregating profile and resource data, with MCP server support for agent-driven access."
  tags:
    - Personal
    - Read-Only
    - Agreggator
    - /me
  created: "2026-04-03"
  modified: "2026-04-07"

capability:

  exposes:

    # ---------------------------------------------------------------
    # HTTP API - exposes /me as a REST endpoint alongside MCP
    # ---------------------------------------------------------------
    - type: "http"
      namespace: "my-accounts-http"
      address: "0.0.0.0"
      port: 8081
      description: "Personal accounts HTTP API providing a /me endpoint for aggregated read-only profile access."
      resources:
        - name: "me"
          path: "/me"
          description: "Aggregated personal profile across all connected accounts."
          operations:
            - name: "http-get-me"
              method: "GET"
              description: "Returns aggregated identity data from all connected accounts."
              steps:
                - name: github-me
                  type: call
                  call: "github.get-me"
                - name: bluesky-me
                  type: call
                  call: "bluesky.get-profile"
                - name: discord-me
                  type: call
                  call: "discord.get-me"
                - name: slack-me
                  type: call
                  call: "slack.get-me"
                - name: notion-me
                  type: call
                  call: "notion.get-me"
                - name: spotify-me
                  type: call
                  call: "spotify.get-me"
                - name: dropbox-me
                  type: call
                  call: "dropbox.get-me"
                - name: linkedin-me
                  type: call
                  call: "linkedin.get-me"
                - name: mastodon-me
                  type: call
                  call: "mastodon.get-me"
                - name: stripe-me
                  type: call
                  call: "stripe.get-me"
                - name: paypal-me
                  type: call
                  call: "paypal.get-me"
                - name: cloudflare-me
                  type: call
                  call: "cloudflare.get-me"
                - name: postman-me
                  type: call
                  call: "postman.get-me"
                - name: docker-me
                  type: call
                  call: "docker.get-me"
                - name: fastmail-me
                  type: call
                  call: "fastmail.get-me"
                - name: openai-me
                  type: call
                  call: "openai.get-me"
                - name: zoom-me
                  type: call
                  call: "zoom.get-me"
              outputParameters:
                - name: github
                  type: object
                  mapping: "{{github-me}}"
                - name: bluesky
                  type: object
                  mapping: "{{bluesky-me}}"
                - name: discord
                  type: object
                  mapping: "{{discord-me}}"
                - name: slack
                  type: object
                  mapping: "{{slack-me}}"
                - name: notion
                  type: object
                  mapping: "{{notion-me}}"
                - name: spotify
                  type: object
                  mapping: "{{spotify-me}}"
                - name: dropbox
                  type: object
                  mapping: "{{dropbox-me}}"
                - name: linkedin
                  type: object
                  mapping: "{{linkedin-me}}"
                - name: mastodon
                  type: object
                  mapping: "{{mastodon-me}}"
                - name: stripe
                  type: object
                  mapping: "{{stripe-me}}"
                - name: paypal
                  type: object
                  mapping: "{{paypal-me}}"
                - name: cloudflare
                  type: object
                  mapping: "{{cloudflare-me}}"
                - name: postman
                  type: object
                  mapping: "{{postman-me}}"
                - name: docker
                  type: object
                  mapping: "{{docker-me}}"
                - name: fastmail
                  type: object
                  mapping: "{{fastmail-me}}"
                - name: openai
                  type: object
                  mapping: "{{openai-me}}"
                - name: zoom
                  type: object
                  mapping: "{{zoom-me}}"

    # ---------------------------------------------------------------
    # MCP Server
    # ---------------------------------------------------------------
    - type: "mcp"
      namespace: "my-accounts"
      port: 8080
      description: "Personal accounts MCP server providing read-only access to resources across all services."

      tools:

        # ---------------------------------------------------------------
        # /me - Aggregated personal profile
        # ---------------------------------------------------------------
        - name: "me"
          label: "Get My Profile"
          description: "Returns an aggregated view of my identity, profiles, and key resources across all connected accounts."
          steps:
            - name: github-me
              type: call
              call: "github.get-me"
            - name: bluesky-me
              type: call
              call: "bluesky.get-profile"
            - name: discord-me
              type: call
              call: "discord.get-me"
            - name: slack-me
              type: call
              call: "slack.get-me"
            - name: notion-me
              type: call
              call: "notion.get-me"
            - name: spotify-me
              type: call
              call: "spotify.get-me"
            - name: dropbox-me
              type: call
              call: "dropbox.get-me"
            - name: linkedin-me
              type: call
              call: "linkedin.get-me"
            - name: mastodon-me
              type: call
              call: "mastodon.get-me"
            - name: stripe-me
              type: call
              call: "stripe.get-me"
            - name: paypal-me
              type: call
              call: "paypal.get-me"
            - name: cloudflare-me
              type: call
              call: "cloudflare.get-me"
            - name: postman-me
              type: call
              call: "postman.get-me"
            - name: docker-me
              type: call
              call: "docker.get-me"
            - name: fastmail-me
              type: call
              call: "fastmail.get-me"
            - name: openai-me
              type: call
              call: "openai.get-me"
            - name: zoom-me
              type: call
              call: "zoom.get-me"
          outputParameters:
            - name: github
              type: object
              mapping: "{{github-me}}"
            - name: bluesky
              type: object
              mapping: "{{bluesky-me}}"
            - name: discord
              type: object
              mapping: "{{discord-me}}"
            - name: slack
              type: object
              mapping: "{{slack-me}}"
            - name: notion
              type: object
              mapping: "{{notion-me}}"
            - name: spotify
              type: object
              mapping: "{{spotify-me}}"
            - name: dropbox
              type: object
              mapping: "{{dropbox-me}}"
            - name: linkedin
              type: object
              mapping: "{{linkedin-me}}"
            - name: mastodon
              type: object
              mapping: "{{mastodon-me}}"
            - name: stripe
              type: object
              mapping: "{{stripe-me}}"
            - name: paypal
              type: object
              mapping: "{{paypal-me}}"
            - name: cloudflare
              type: object
              mapping: "{{cloudflare-me}}"
            - name: postman
              type: object
              mapping: "{{postman-me}}"
            - name: docker
              type: object
              mapping: "{{docker-me}}"
            - name: fastmail
              type: object
              mapping: "{{fastmail-me}}"
            - name: openai
              type: object
              mapping: "{{openai-me}}"
            - name: zoom
              type: object
              mapping: "{{zoom-me}}"

        # ---------------------------------------------------------------
        # Developer Tools
        # ---------------------------------------------------------------
        - name: "get-my-repos"
          description: "List my GitHub repositories."
          call: "github.list-my-repos"
          outputParameters:
            - name: repos
              type: array
              mapping: "$.items"

        - name: "get-my-gists"
          description: "List my GitHub gists."
          call: "github.list-my-gists"
          outputParameters:
            - name: gists
              type: array
              mapping: "$.items"

        - name: "get-my-github-notifications"
          description: "Get my GitHub notifications."
          call: "github.list-notifications"
          outputParameters:
            - name: notifications
              type: array
              mapping: "$.items"

        - name: "get-my-postman-workspaces"
          description: "List my Postman workspaces."
          call: "postman.list-workspaces"
          outputParameters:
            - name: workspaces
              type: array
              mapping: "$.workspaces"

        - name: "get-my-postman-collections"
          description: "List my Postman collections."
          call: "postman.list-collections"
          outputParameters:
            - name: collections
              type: array
              mapping: "$.collections"

        - name: "get-my-docker-repos"
          description: "List my Docker Hub repositories."
          call: "docker.list-repos"
          outputParameters:
            - name: repositories
              type: array
              mapping: "$.results"

        - name: "get-my-cloudflare-zones"
          description: "List my Cloudflare zones/domains."
          call: "cloudflare.list-zones"
          outputParameters:
            - name: zones
              type: array
              mapping: "$.result"

        - name: "get-my-cloudflare-analytics"
          description: "Get Cloudflare analytics for a zone."
          inputParameters:
            - name: zone_id
              in: body
              type: string
          call: "cloudflare.get-zone-analytics"
          with:
            zone_id: "{{zone_id}}"
          outputParameters:
            - name: analytics
              type: object
              mapping: "$.result"

        # ---------------------------------------------------------------
        # Social & Communication
        # ---------------------------------------------------------------
        - name: "get-my-bluesky-feed"
          description: "Get my Bluesky timeline."
          call: "bluesky.get-timeline"
          outputParameters:
            - name: feed
              type: array
              mapping: "$.feed"

        - name: "get-my-bluesky-notifications"
          description: "Get my Bluesky notifications."
          call: "bluesky.get-notifications"
          outputParameters:
            - name: notifications
              type: array
              mapping: "$.notifications"

        - name: "get-my-discord-guilds"
          description: "List my Discord servers."
          call: "discord.list-guilds"
          outputParameters:
            - name: guilds
              type: array
              mapping: "$.items"

        - name: "get-my-slack-channels"
          description: "List my Slack channels."
          call: "slack.list-channels"
          outputParameters:
            - name: channels
              type: array
              mapping: "$.channels"

        - name: "get-my-slack-messages"
          description: "Get recent messages from a Slack channel."
          inputParameters:
            - name: channel
              in: body
              type: string
          call: "slack.get-channel-history"
          with:
            channel: "{{channel}}"
          outputParameters:
            - name: messages
              type: array
              mapping: "$.messages"

        - name: "get-my-mastodon-timeline"
          description: "Get my Mastodon home timeline."
          call: "mastodon.get-timeline"
          outputParameters:
            - name: statuses
              type: array
              mapping: "$.items"

        - name: "get-my-mastodon-notifications"
          description: "Get my Mastodon notifications."
          call: "mastodon.get-notifications"
          outputParameters:
            - name: notifications
              type: array
              mapping: "$.items"

        - name: "get-my-reddit-feed"
          description: "Get my Reddit front page feed."
          call: "reddit.get-my-feed"
          outputParameters:
            - name: posts
              type: array
              mapping: "$.data.children"

        - name: "get-my-reddit-saved"
          description: "Get my saved Reddit posts."
          call: "reddit.get-saved"
          outputParameters:
            - name: saved
              type: array
              mapping: "$.data.children"

        # ---------------------------------------------------------------
        # Content & Productivity
        # ---------------------------------------------------------------
        - name: "get-my-notion-pages"
          description: "Search my Notion workspace."
          inputParameters:
            - name: query
              in: body
              type: string
          call: "notion.search"
          with:
            query: "{{query}}"
          outputParameters:
            - name: results
              type: array
              mapping: "$.results"

        - name: "get-my-notion-databases"
          description: "List my Notion databases."
          call: "notion.search-databases"
          outputParameters:
            - name: databases
              type: array
              mapping: "$.results"

        - name: "get-my-dropbox-files"
          description: "List files in my Dropbox."
          inputParameters:
            - name: path
              in: body
              type: string
          call: "dropbox.list-folder"
          with:
            path: "{{path}}"
          outputParameters:
            - name: entries
              type: array
              mapping: "$.entries"

        - name: "get-my-ghost-posts"
          description: "List my Ghost blog posts."
          call: "ghost.list-posts"
          outputParameters:
            - name: posts
              type: array
              mapping: "$.posts"

        - name: "get-my-buttondown-subscribers"
          description: "List my Buttondown newsletter subscribers."
          call: "buttondown.list-subscribers"
          outputParameters:
            - name: subscribers
              type: array
              mapping: "$.results"

        - name: "get-my-buttondown-emails"
          description: "List my Buttondown sent emails."
          call: "buttondown.list-emails"
          outputParameters:
            - name: emails
              type: array
              mapping: "$.results"

        - name: "get-my-canva-designs"
          description: "List my Canva designs."
          call: "canva.list-designs"
          outputParameters:
            - name: designs
              type: array
              mapping: "$.items"

        - name: "get-my-docusign-envelopes"
          description: "List my DocuSign envelopes."
          call: "docusign.list-envelopes"
          outputParameters:
            - name: envelopes
              type: array
              mapping: "$.envelopes"

        - name: "get-my-formspree-submissions"
          description: "List my Formspree form submissions."
          inputParameters:
            - name: form_id
              in: body
              type: string
          call: "formspree.list-submissions"
          with:
            form_id: "{{form_id}}"
          outputParameters:
            - name: submissions
              type: array
              mapping: "$.submissions"

        # ---------------------------------------------------------------
        # Email & Calendar
        # ---------------------------------------------------------------
        - name: "get-my-fastmail-mailboxes"
          description: "List my Fastmail mailboxes."
          call: "fastmail.list-mailboxes"
          outputParameters:
            - name: mailboxes
              type: array
              mapping: "$.list"

        - name: "get-my-calendly-events"
          description: "List my upcoming Calendly events."
          call: "calendly.list-events"
          outputParameters:
            - name: events
              type: array
              mapping: "$.collection"

        - name: "get-my-zoom-meetings"
          description: "List my upcoming Zoom meetings."
          call: "zoom.list-meetings"
          outputParameters:
            - name: meetings
              type: array
              mapping: "$.meetings"

        # ---------------------------------------------------------------
        # Finance & Payments
        # ---------------------------------------------------------------
        - name: "get-my-stripe-balance"
          description: "Get my Stripe account balance."
          call: "stripe.get-balance"
          outputParameters:
            - name: balance
              type: object
              mapping: "$"

        - name: "get-my-stripe-charges"
          description: "List recent Stripe charges."
          call: "stripe.list-charges"
          outputParameters:
            - name: charges
              type: array
              mapping: "$.data"

        - name: "get-my-paypal-transactions"
          description: "List recent PayPal transactions."
          call: "paypal.list-transactions"
          outputParameters:
            - name: transactions
              type: array
              mapping: "$.transaction_details"

        - name: "get-my-plaid-accounts"
          description: "List my linked Plaid financial accounts."
          call: "plaid.get-accounts"
          outputParameters:
            - name: accounts
              type: array
              mapping: "$.accounts"

        - name: "get-my-wise-balances"
          description: "Get my Wise multi-currency balances."
          call: "wise.get-balances"
          outputParameters:
            - name: balances
              type: array
              mapping: "$.items"

        # ---------------------------------------------------------------
        # Media & Entertainment
        # ---------------------------------------------------------------
        - name: "get-my-spotify-playlists"
          description: "List my Spotify playlists."
          call: "spotify.list-playlists"
          outputParameters:
            - name: playlists
              type: array
              mapping: "$.items"

        - name: "get-my-spotify-recently-played"
          description: "Get my recently played Spotify tracks."
          call: "spotify.get-recently-played"
          outputParameters:
            - name: items
              type: array
              mapping: "$.items"

        - name: "get-my-youtube-subscriptions"
          description: "List my YouTube subscriptions."
          call: "youtube.list-subscriptions"
          outputParameters:
            - name: subscriptions
              type: array
              mapping: "$.items"

        - name: "get-my-youtube-playlists"
          description: "List my YouTube playlists."
          call: "youtube.list-playlists"
          outputParameters:
            - name: playlists
              type: array
              mapping: "$.items"

        - name: "get-my-pinterest-boards"
          description: "List my Pinterest boards."
          call: "pinterest.list-boards"
          outputParameters:
            - name: boards
              type: array
              mapping: "$.items"

        - name: "get-my-soundcloud-tracks"
          description: "List my SoundCloud tracks and likes."
          call: "soundcloud.get-my-tracks"
          outputParameters:
            - name: tracks
              type: array
              mapping: "$.collection"

        # ---------------------------------------------------------------
        # URL & Links
        # ---------------------------------------------------------------
        - name: "get-my-bitly-links"
          description: "List my Bitly shortened links."
          call: "bitly.list-links"
          outputParameters:
            - name: links
              type: array
              mapping: "$.links"

        # ---------------------------------------------------------------
        # AI Services
        # ---------------------------------------------------------------
        - name: "get-my-openai-models"
          description: "List available OpenAI models."
          call: "openai.list-models"
          outputParameters:
            - name: models
              type: array
              mapping: "$.data"

        - name: "get-my-openai-usage"
          description: "Get my OpenAI API usage."
          call: "openai.get-usage"
          outputParameters:
            - name: usage
              type: object
              mapping: "$"

        # ---------------------------------------------------------------
        # RSS Feed Reader
        # ---------------------------------------------------------------
        - name: "get-my-inoreader-subscriptions"
          description: "List my Inoreader RSS subscriptions."
          call: "inoreader.list-subscriptions"
          outputParameters:
            - name: subscriptions
              type: array
              mapping: "$.subscriptions"

        - name: "get-my-inoreader-unread"
          description: "Get unread items from Inoreader."
          call: "inoreader.get-unread"
          outputParameters:
            - name: items
              type: array
              mapping: "$.items"

        # ---------------------------------------------------------------
        # Scheduling & Automation
        # ---------------------------------------------------------------
        - name: "get-my-easycron-jobs"
          description: "List my EasyCron scheduled jobs."
          call: "easycron.list-jobs"
          outputParameters:
            - name: jobs
              type: array
              mapping: "$.cron_jobs"

        # ---------------------------------------------------------------
        # Shopping & Marketplace
        # ---------------------------------------------------------------
        - name: "get-my-etsy-listings"
          description: "List my Etsy shop listings."
          call: "etsy.list-my-listings"
          outputParameters:
            - name: listings
              type: array
              mapping: "$.results"

        - name: "get-my-amazon-orders"
          description: "Get recent Amazon order status."
          call: "amazon-html.get-orders"
          outputParameters:
            - name: orders
              type: array
              mapping: "$.orders"

        # ---------------------------------------------------------------
        # Travel & Transportation
        # ---------------------------------------------------------------
        - name: "get-my-uber-trips"
          description: "Get my recent Uber trip history."
          call: "uber.get-trip-history"
          outputParameters:
            - name: trips
              type: array
              mapping: "$.trips"

        - name: "get-my-expedia-trips"
          description: "Get my Expedia trip itineraries."
          call: "expedia-html.get-trips"
          outputParameters:
            - name: trips
              type: array
              mapping: "$.trips"

        # ---------------------------------------------------------------
        # Domains & Hosting
        # ---------------------------------------------------------------
        - name: "get-my-hover-domains"
          description: "List my Hover domain registrations."
          call: "hover.list-domains"
          outputParameters:
            - name: domains
              type: array
              mapping: "$.domains"

        # ---------------------------------------------------------------
        # RSS Feeds - News, Tech & Content
        # ---------------------------------------------------------------
        - name: "get-feed-api-evangelist"
          description: "Get latest API Evangelist posts via RSS."
          call: "rss-feeds.api-evangelist"
          outputParameters:
            - name: items
              type: array
              mapping: "{{api-evangelist-items}}"

        - name: "get-feed-bbc"
          description: "Get latest BBC news via RSS."
          call: "rss-feeds.bbc-news"
          outputParameters:
            - name: items
              type: array
              mapping: "{{bbc-items}}"

        - name: "get-feed-dzone"
          description: "Get latest DZone articles via RSS."
          call: "rss-feeds.dzone"
          outputParameters:
            - name: items
              type: array
              mapping: "{{dzone-items}}"

        - name: "get-feed-economist"
          description: "Get latest Economist articles via RSS."
          call: "rss-feeds.economist"
          outputParameters:
            - name: items
              type: array
              mapping: "{{economist-items}}"

        - name: "get-feed-hacker-news"
          description: "Get top Hacker News stories via RSS."
          call: "rss-feeds.hacker-news"
          outputParameters:
            - name: items
              type: array
              mapping: "{{hn-items}}"

        - name: "get-feed-hackernoon"
          description: "Get latest HackerNoon articles via RSS."
          call: "rss-feeds.hackernoon"
          outputParameters:
            - name: items
              type: array
              mapping: "{{hackernoon-items}}"

        - name: "get-feed-medium"
          description: "Get latest Medium articles via RSS."
          call: "rss-feeds.medium"
          outputParameters:
            - name: items
              type: array
              mapping: "{{medium-items}}"

        - name: "get-feed-nytimes"
          description: "Get latest NY Times headlines via RSS."
          call: "rss-feeds.nytimes"
          outputParameters:
            - name: items
              type: array
              mapping: "{{nytimes-items}}"

        - name: "get-feed-pbs"
          description: "Get latest PBS news via RSS."
          call: "rss-feeds.pbs"
          outputParameters:
            - name: items
              type: array
              mapping: "{{pbs-items}}"

        - name: "get-feed-politico"
          description: "Get latest Politico articles via RSS."
          call: "rss-feeds.politico"
          outputParameters:
            - name: items
              type: array
              mapping: "{{politico-items}}"

        - name: "get-feed-substack"
          description: "Get latest Substack newsletter posts via RSS."
          call: "rss-feeds.substack"
          outputParameters:
            - name: items
              type: array
              mapping: "{{substack-items}}"

        - name: "get-feed-the-new-stack"
          description: "Get latest The New Stack articles via RSS."
          call: "rss-feeds.the-new-stack"
          outputParameters:
            - name: items
              type: array
              mapping: "{{tns-items}}"

        - name: "get-feed-crunchbase"
          description: "Get latest Crunchbase news via RSS."
          call: "rss-feeds.crunchbase"
          outputParameters:
            - name: items
              type: array
              mapping: "{{crunchbase-items}}"

      # ---------------------------------------------------------------
      # MCP Resources - Static references
      # ---------------------------------------------------------------
      resources:
        - name: "account-index"
          label: "Account Index"
          uri: "data://my-accounts/index"
          description: "Index of all connected personal accounts and their status."
          mimeType: "application/json"

      prompts:
        - name: "account-summary"
          label: "Account Summary"
          description: "Generate a summary of activity across my accounts."
          arguments:
            - name: "timeframe"
              description: "Time period to summarize (e.g. today, this-week, this-month)"
              required: false
          template:
            - role: "user"
              content: "Summarize my activity across all connected accounts for {{timeframe}}. Include notifications, messages, recent content, and any items needing attention."

  # ===================================================================
  # CONSUMES - API Services
  # ===================================================================

  consumes:

    # -----------------------------------------------------------------
    # GitHub
    # -----------------------------------------------------------------
    - namespace: "github"
      type: "http"
      baseUri: "https://api.github.com"
      authentication:
        type: "bearer"
        token: "{{github_token}}"
      inputParameters:
        - name: "github_token"
          in: "environment"
        - name: "Accept"
          in: "header"
          value: "application/vnd.github+json"
      resources:
        - name: "me"
          path: "/user"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: login
                  type: string
                  value: "$.login"
                - name: name
                  type: string
                  value: "$.name"
                - name: bio
                  type: string
                  value: "$.bio"
                - name: public_repos
                  type: integer
                  value: "$.public_repos"
        - name: "my-repos"
          path: "/user/repos"
          operations:
            - name: "list-my-repos"
              method: "GET"
              inputParameters:
                - name: sort
                  in: query
                  value: "updated"
                - name: per_page
                  in: query
                  value: "30"
              outputParameters:
                - name: items
                  type: array
                  value: "$"
        - name: "my-gists"
          path: "/gists"
          operations:
            - name: "list-my-gists"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$"
        - name: "notifications"
          path: "/notifications"
          operations:
            - name: "list-notifications"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$"

    # -----------------------------------------------------------------
    # Bluesky (AT Protocol)
    # -----------------------------------------------------------------
    - namespace: "bluesky"
      type: "http"
      baseUri: "https://bsky.social/xrpc"
      authentication:
        type: "bearer"
        token: "{{bluesky_token}}"
      inputParameters:
        - name: "bluesky_token"
          in: "environment"
      resources:
        - name: "profile"
          path: "/app.bsky.actor.getProfile"
          operations:
            - name: "get-profile"
              method: "GET"
              inputParameters:
                - name: actor
                  in: query
              outputParameters:
                - name: handle
                  type: string
                  value: "$.handle"
                - name: displayName
                  type: string
                  value: "$.displayName"
                - name: followersCount
                  type: integer
                  value: "$.followersCount"
        - name: "timeline"
          path: "/app.bsky.feed.getTimeline"
          operations:
            - name: "get-timeline"
              method: "GET"
              outputParameters:
                - name: feed
                  type: array
                  value: "$.feed"
        - name: "notifications"
          path: "/app.bsky.notification.listNotifications"
          operations:
            - name: "get-notifications"
              method: "GET"
              outputParameters:
                - name: notifications
                  type: array
                  value: "$.notifications"

    # -----------------------------------------------------------------
    # Discord
    # -----------------------------------------------------------------
    - namespace: "discord"
      type: "http"
      baseUri: "https://discord.com/api/v10"
      authentication:
        type: "bearer"
        token: "{{discord_token}}"
      inputParameters:
        - name: "discord_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/users/@me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: username
                  type: string
                  value: "$.username"
                - name: email
                  type: string
                  value: "$.email"
        - name: "guilds"
          path: "/users/@me/guilds"
          operations:
            - name: "list-guilds"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$"

    # -----------------------------------------------------------------
    # Slack
    # -----------------------------------------------------------------
    - namespace: "slack"
      type: "http"
      baseUri: "https://slack.com/api"
      authentication:
        type: "bearer"
        token: "{{slack_token}}"
      inputParameters:
        - name: "slack_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/auth.test"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: user
                  type: string
                  value: "$.user"
                - name: team
                  type: string
                  value: "$.team"
        - name: "channels"
          path: "/conversations.list"
          operations:
            - name: "list-channels"
              method: "GET"
              outputParameters:
                - name: channels
                  type: array
                  value: "$.channels"
        - name: "history"
          path: "/conversations.history"
          inputParameters:
            - name: channel
              in: query
          operations:
            - name: "get-channel-history"
              method: "GET"
              outputParameters:
                - name: messages
                  type: array
                  value: "$.messages"

    # -----------------------------------------------------------------
    # Notion
    # -----------------------------------------------------------------
    - namespace: "notion"
      type: "http"
      baseUri: "https://api.notion.com/v1"
      authentication:
        type: "bearer"
        token: "{{notion_token}}"
      inputParameters:
        - name: "notion_token"
          in: "environment"
        - name: "Notion-Version"
          in: "header"
          value: "2022-06-28"
      resources:
        - name: "me"
          path: "/users/me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: name
                  type: string
                  value: "$.name"
                - name: type
                  type: string
                  value: "$.type"
        - name: "search"
          path: "/search"
          operations:
            - name: "search"
              method: "POST"
              inputParameters:
                - name: query
                  in: body
              body:
                type: "json"
                data:
                  query: "{{query}}"
              outputParameters:
                - name: results
                  type: array
                  value: "$.results"
            - name: "search-databases"
              method: "POST"
              body:
                type: "json"
                data:
                  filter:
                    property: "object"
                    value: "database"
              outputParameters:
                - name: results
                  type: array
                  value: "$.results"

    # -----------------------------------------------------------------
    # Spotify
    # -----------------------------------------------------------------
    - namespace: "spotify"
      type: "http"
      baseUri: "https://api.spotify.com/v1"
      authentication:
        type: "bearer"
        token: "{{spotify_token}}"
      inputParameters:
        - name: "spotify_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: display_name
                  type: string
                  value: "$.display_name"
                - name: email
                  type: string
                  value: "$.email"
        - name: "playlists"
          path: "/me/playlists"
          operations:
            - name: "list-playlists"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"
        - name: "recently-played"
          path: "/me/player/recently-played"
          operations:
            - name: "get-recently-played"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"

    # -----------------------------------------------------------------
    # Dropbox
    # -----------------------------------------------------------------
    - namespace: "dropbox"
      type: "http"
      baseUri: "https://api.dropboxapi.com/2"
      authentication:
        type: "bearer"
        token: "{{dropbox_token}}"
      inputParameters:
        - name: "dropbox_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/users/get_current_account"
          operations:
            - name: "get-me"
              method: "POST"
              outputParameters:
                - name: name
                  type: string
                  value: "$.name.display_name"
                - name: email
                  type: string
                  value: "$.email"
        - name: "files"
          path: "/files/list_folder"
          operations:
            - name: "list-folder"
              method: "POST"
              inputParameters:
                - name: path
                  in: body
              body:
                type: "json"
                data:
                  path: "{{path}}"
              outputParameters:
                - name: entries
                  type: array
                  value: "$.entries"

    # -----------------------------------------------------------------
    # LinkedIn
    # -----------------------------------------------------------------
    - namespace: "linkedin"
      type: "http"
      baseUri: "https://api.linkedin.com/v2"
      authentication:
        type: "bearer"
        token: "{{linkedin_token}}"
      inputParameters:
        - name: "linkedin_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: firstName
                  type: string
                  value: "$.localizedFirstName"
                - name: lastName
                  type: string
                  value: "$.localizedLastName"

    # -----------------------------------------------------------------
    # Mastodon (kinlane.com)
    # -----------------------------------------------------------------
    - namespace: "mastodon"
      type: "http"
      baseUri: "https://mastodon.social/api/v1"
      authentication:
        type: "bearer"
        token: "{{mastodon_token}}"
      inputParameters:
        - name: "mastodon_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/accounts/verify_credentials"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: username
                  type: string
                  value: "$.username"
                - name: display_name
                  type: string
                  value: "$.display_name"
                - name: followers_count
                  type: integer
                  value: "$.followers_count"
        - name: "home-timeline"
          path: "/timelines/home"
          operations:
            - name: "get-timeline"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$"
        - name: "notifications"
          path: "/notifications"
          operations:
            - name: "get-notifications"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$"

    # -----------------------------------------------------------------
    # Reddit
    # -----------------------------------------------------------------
    - namespace: "reddit"
      type: "http"
      baseUri: "https://oauth.reddit.com"
      authentication:
        type: "bearer"
        token: "{{reddit_token}}"
      inputParameters:
        - name: "reddit_token"
          in: "environment"
      resources:
        - name: "my-feed"
          path: "/best"
          operations:
            - name: "get-my-feed"
              method: "GET"
              outputParameters:
                - name: data
                  type: object
                  value: "$.data"
        - name: "saved"
          path: "/user/me/saved"
          operations:
            - name: "get-saved"
              method: "GET"
              outputParameters:
                - name: data
                  type: object
                  value: "$.data"

    # -----------------------------------------------------------------
    # Stripe
    # -----------------------------------------------------------------
    - namespace: "stripe"
      type: "http"
      baseUri: "https://api.stripe.com/v1"
      authentication:
        type: "bearer"
        token: "{{stripe_token}}"
      inputParameters:
        - name: "stripe_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/account"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: id
                  type: string
                  value: "$.id"
                - name: business_profile
                  type: object
                  value: "$.business_profile"
        - name: "balance"
          path: "/balance"
          operations:
            - name: "get-balance"
              method: "GET"
              outputParameters:
                - name: available
                  type: array
                  value: "$.available"
        - name: "charges"
          path: "/charges"
          operations:
            - name: "list-charges"
              method: "GET"
              inputParameters:
                - name: limit
                  in: query
                  value: "25"
              outputParameters:
                - name: data
                  type: array
                  value: "$.data"

    # -----------------------------------------------------------------
    # PayPal
    # -----------------------------------------------------------------
    - namespace: "paypal"
      type: "http"
      baseUri: "https://api-m.paypal.com/v1"
      authentication:
        type: "bearer"
        token: "{{paypal_token}}"
      inputParameters:
        - name: "paypal_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/identity/oauth2/userinfo"
          inputParameters:
            - name: schema
              in: query
              value: "paypalv1.1"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: name
                  type: string
                  value: "$.name"
                - name: emails
                  type: array
                  value: "$.emails"
        - name: "transactions"
          path: "/reporting/transactions"
          operations:
            - name: "list-transactions"
              method: "GET"
              outputParameters:
                - name: transaction_details
                  type: array
                  value: "$.transaction_details"

    # -----------------------------------------------------------------
    # Plaid
    # -----------------------------------------------------------------
    - namespace: "plaid"
      type: "http"
      baseUri: "https://production.plaid.com"
      authentication:
        type: "bearer"
        token: "{{plaid_token}}"
      inputParameters:
        - name: "plaid_token"
          in: "environment"
      resources:
        - name: "accounts"
          path: "/accounts/get"
          operations:
            - name: "get-accounts"
              method: "POST"
              body:
                type: "json"
                data:
                  client_id: "{{plaid_client_id}}"
                  secret: "{{plaid_secret}}"
                  access_token: "{{plaid_access_token}}"
              outputParameters:
                - name: accounts
                  type: array
                  value: "$.accounts"

    # -----------------------------------------------------------------
    # Wise
    # -----------------------------------------------------------------
    - namespace: "wise"
      type: "http"
      baseUri: "https://api.wise.com/v4"
      authentication:
        type: "bearer"
        token: "{{wise_token}}"
      inputParameters:
        - name: "wise_token"
          in: "environment"
      resources:
        - name: "balances"
          path: "/profiles/{{profile_id}}/balances"
          inputParameters:
            - name: profile_id
              in: path
          operations:
            - name: "get-balances"
              method: "GET"
              inputParameters:
                - name: types
                  in: query
                  value: "STANDARD"
              outputParameters:
                - name: items
                  type: array
                  value: "$"

    # -----------------------------------------------------------------
    # Cloudflare
    # -----------------------------------------------------------------
    - namespace: "cloudflare"
      type: "http"
      baseUri: "https://api.cloudflare.com/client/v4"
      authentication:
        type: "bearer"
        token: "{{cloudflare_token}}"
      inputParameters:
        - name: "cloudflare_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/user"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: email
                  type: string
                  value: "$.result.email"
                - name: username
                  type: string
                  value: "$.result.username"
        - name: "zones"
          path: "/zones"
          operations:
            - name: "list-zones"
              method: "GET"
              outputParameters:
                - name: result
                  type: array
                  value: "$.result"
        - name: "zone-analytics"
          path: "/zones/{{zone_id}}/analytics/dashboard"
          inputParameters:
            - name: zone_id
              in: path
          operations:
            - name: "get-zone-analytics"
              method: "GET"
              outputParameters:
                - name: result
                  type: object
                  value: "$.result"

    # -----------------------------------------------------------------
    # Postman
    # -----------------------------------------------------------------
    - namespace: "postman"
      type: "http"
      baseUri: "https://api.getpostman.com"
      authentication:
        type: "bearer"
        token: "{{postman_token}}"
      inputParameters:
        - name: "postman_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: user
                  type: object
                  value: "$.user"
        - name: "workspaces"
          path: "/workspaces"
          operations:
            - name: "list-workspaces"
              method: "GET"
              outputParameters:
                - name: workspaces
                  type: array
                  value: "$.workspaces"
        - name: "collections"
          path: "/collections"
          operations:
            - name: "list-collections"
              method: "GET"
              outputParameters:
                - name: collections
                  type: array
                  value: "$.collections"

    # -----------------------------------------------------------------
    # Docker Hub
    # -----------------------------------------------------------------
    - namespace: "docker"
      type: "http"
      baseUri: "https://hub.docker.com/v2"
      authentication:
        type: "bearer"
        token: "{{docker_token}}"
      inputParameters:
        - name: "docker_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/user"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: username
                  type: string
                  value: "$.username"
        - name: "repos"
          path: "/repositories/{{username}}"
          inputParameters:
            - name: username
              in: path
          operations:
            - name: "list-repos"
              method: "GET"
              outputParameters:
                - name: results
                  type: array
                  value: "$.results"

    # -----------------------------------------------------------------
    # Twilio
    # -----------------------------------------------------------------
    - namespace: "twilio"
      type: "http"
      baseUri: "https://api.twilio.com/2010-04-01"
      authentication:
        type: "basic"
        username: "{{twilio_sid}}"
        password: "{{twilio_token}}"
      inputParameters:
        - name: "twilio_sid"
          in: "environment"
        - name: "twilio_token"
          in: "environment"
      resources:
        - name: "account"
          path: "/Accounts/{{twilio_sid}}.json"
          operations:
            - name: "get-account"
              method: "GET"
              outputParameters:
                - name: friendly_name
                  type: string
                  value: "$.friendly_name"
                - name: status
                  type: string
                  value: "$.status"
        - name: "messages"
          path: "/Accounts/{{twilio_sid}}/Messages.json"
          operations:
            - name: "list-messages"
              method: "GET"
              outputParameters:
                - name: messages
                  type: array
                  value: "$.messages"

    # -----------------------------------------------------------------
    # OpenAI
    # -----------------------------------------------------------------
    - namespace: "openai"
      type: "http"
      baseUri: "https://api.openai.com/v1"
      authentication:
        type: "bearer"
        token: "{{openai_token}}"
      inputParameters:
        - name: "openai_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: user
                  type: object
                  value: "$"
        - name: "models"
          path: "/models"
          operations:
            - name: "list-models"
              method: "GET"
              outputParameters:
                - name: data
                  type: array
                  value: "$.data"
        - name: "usage"
          path: "/usage"
          operations:
            - name: "get-usage"
              method: "GET"
              outputParameters:
                - name: usage
                  type: object
                  value: "$"

    # -----------------------------------------------------------------
    # Fastmail (JMAP)
    # -----------------------------------------------------------------
    - namespace: "fastmail"
      type: "http"
      baseUri: "https://api.fastmail.com/jmap/api"
      authentication:
        type: "bearer"
        token: "{{fastmail_token}}"
      inputParameters:
        - name: "fastmail_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/.well-known/jmap"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: username
                  type: string
                  value: "$.username"
                - name: accounts
                  type: object
                  value: "$.accounts"
        - name: "mailboxes"
          path: "/"
          operations:
            - name: "list-mailboxes"
              method: "POST"
              body:
                type: "json"
                data:
                  using: ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail"]
                  methodCalls:
                    - ["Mailbox/get", {"accountId": "{{account_id}}"}, "0"]
              outputParameters:
                - name: list
                  type: array
                  value: "$.methodResponses[0][1].list"

    # -----------------------------------------------------------------
    # Calendly
    # -----------------------------------------------------------------
    - namespace: "calendly"
      type: "http"
      baseUri: "https://api.calendly.com"
      authentication:
        type: "bearer"
        token: "{{calendly_token}}"
      inputParameters:
        - name: "calendly_token"
          in: "environment"
      resources:
        - name: "events"
          path: "/scheduled_events"
          operations:
            - name: "list-events"
              method: "GET"
              inputParameters:
                - name: status
                  in: query
                  value: "active"
              outputParameters:
                - name: collection
                  type: array
                  value: "$.collection"

    # -----------------------------------------------------------------
    # Zoom
    # -----------------------------------------------------------------
    - namespace: "zoom"
      type: "http"
      baseUri: "https://api.zoom.us/v2"
      authentication:
        type: "bearer"
        token: "{{zoom_token}}"
      inputParameters:
        - name: "zoom_token"
          in: "environment"
      resources:
        - name: "me"
          path: "/users/me"
          operations:
            - name: "get-me"
              method: "GET"
              outputParameters:
                - name: email
                  type: string
                  value: "$.email"
                - name: display_name
                  type: string
                  value: "$.display_name"
        - name: "meetings"
          path: "/users/me/meetings"
          operations:
            - name: "list-meetings"
              method: "GET"
              outputParameters:
                - name: meetings
                  type: array
                  value: "$.meetings"

    # -----------------------------------------------------------------
    # Canva
    # -----------------------------------------------------------------
    - namespace: "canva"
      type: "http"
      baseUri: "https://api.canva.com/rest/v1"
      authentication:
        type: "bearer"
        token: "{{canva_token}}"
      inputParameters:
        - name: "canva_token"
          in: "environment"
      resources:
        - name: "designs"
          path: "/designs"
          operations:
            - name: "list-designs"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"

    # -----------------------------------------------------------------
    # DocuSign
    # -----------------------------------------------------------------
    - namespace: "docusign"
      type: "http"
      baseUri: "https://www.docusign.net/restapi/v2.1"
      authentication:
        type: "bearer"
        token: "{{docusign_token}}"
      inputParameters:
        - name: "docusign_token"
          in: "environment"
      resources:
        - name: "envelopes"
          path: "/accounts/{{account_id}}/envelopes"
          inputParameters:
            - name: account_id
              in: path
          operations:
            - name: "list-envelopes"
              method: "GET"
              inputParameters:
                - name: from_date
                  in: query
              outputParameters:
                - name: envelopes
                  type: array
                  value: "$.envelopes"

    # -----------------------------------------------------------------
    # Formspree
    # -----------------------------------------------------------------
    - namespace: "formspree"
      type: "http"
      baseUri: "https://formspree.io/api/0"
      authentication:
        type: "bearer"
        token: "{{formspree_token}}"
      inputParameters:
        - name: "formspree_token"
          in: "environment"
      resources:
        - name: "submissions"
          path: "/forms/{{form_id}}/submissions"
          inputParameters:
            - name: form_id
              in: path
          operations:
            - name: "list-submissions"
              method: "GET"
              outputParameters:
                - name: submissions
                  type: array
                  value: "$.submissions"

    # -----------------------------------------------------------------
    # Buttondown
    # -----------------------------------------------------------------
    - namespace: "buttondown"
      type: "http"
      baseUri: "https://api.buttondown.com/v1"
      authentication:
        type: "bearer"
        token: "{{buttondown_token}}"
      inputParameters:
        - name: "buttondown_token"
          in: "environment"
      resources:
        - name: "subscribers"
          path: "/subscribers"
          operations:
            - name: "list-subscribers"
              method: "GET"
              outputParameters:
                - name: results
                  type: array
                  value: "$.results"
        - name: "emails"
          path: "/emails"
          operations:
            - name: "list-emails"
              method: "GET"
              outputParameters:
                - name: results
                  type: array
                  value: "$.results"

    # -----------------------------------------------------------------
    # Inoreader
    # -----------------------------------------------------------------
    - namespace: "inoreader"
      type: "http"
      baseUri: "https://www.inoreader.com/reader/api/0"
      authentication:
        type: "bearer"
        token: "{{inoreader_token}}"
      inputParameters:
        - name: "inoreader_token"
          in: "environment"
      resources:
        - name: "subscriptions"
          path: "/subscription/list"
          operations:
            - name: "list-subscriptions"
              method: "GET"
              outputParameters:
                - name: subscriptions
                  type: array
                  value: "$.subscriptions"
        - name: "unread"
          path: "/stream/contents/user/-/state/com.google/reading-list"
          operations:
            - name: "get-unread"
              method: "GET"
              inputParameters:
                - name: n
                  in: query
                  value: "50"
                - name: xt
                  in: query
                  value: "user/-/state/com.google/read"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"

    # -----------------------------------------------------------------
    # Bitly
    # -----------------------------------------------------------------
    - namespace: "bitly"
      type: "http"
      baseUri: "https://api-ssl.bitly.com/v4"
      authentication:
        type: "bearer"
        token: "{{bitly_token}}"
      inputParameters:
        - name: "bitly_token"
          in: "environment"
      resources:
        - name: "links"
          path: "/bitlinks"
          operations:
            - name: "list-links"
              method: "GET"
              outputParameters:
                - name: links
                  type: array
                  value: "$.links"

    # -----------------------------------------------------------------
    # EasyCron
    # -----------------------------------------------------------------
    - namespace: "easycron"
      type: "http"
      baseUri: "https://www.easycron.com/rest"
      resources:
        - name: "jobs"
          path: "/list"
          inputParameters:
            - name: token
              in: query
              value: "{{easycron_token}}"
          operations:
            - name: "list-jobs"
              method: "GET"
              outputParameters:
                - name: cron_jobs
                  type: array
                  value: "$.cron_jobs"

    # -----------------------------------------------------------------
    # YouTube Data API
    # -----------------------------------------------------------------
    - namespace: "youtube"
      type: "http"
      baseUri: "https://www.googleapis.com/youtube/v3"
      authentication:
        type: "bearer"
        token: "{{google_token}}"
      inputParameters:
        - name: "google_token"
          in: "environment"
      resources:
        - name: "subscriptions"
          path: "/subscriptions"
          operations:
            - name: "list-subscriptions"
              method: "GET"
              inputParameters:
                - name: part
                  in: query
                  value: "snippet"
                - name: mine
                  in: query
                  value: "true"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"
        - name: "playlists"
          path: "/playlists"
          operations:
            - name: "list-playlists"
              method: "GET"
              inputParameters:
                - name: part
                  in: query
                  value: "snippet"
                - name: mine
                  in: query
                  value: "true"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"

    # -----------------------------------------------------------------
    # Pinterest
    # -----------------------------------------------------------------
    - namespace: "pinterest"
      type: "http"
      baseUri: "https://api.pinterest.com/v5"
      authentication:
        type: "bearer"
        token: "{{pinterest_token}}"
      inputParameters:
        - name: "pinterest_token"
          in: "environment"
      resources:
        - name: "boards"
          path: "/boards"
          operations:
            - name: "list-boards"
              method: "GET"
              outputParameters:
                - name: items
                  type: array
                  value: "$.items"

    # -----------------------------------------------------------------
    # SoundCloud
    # -----------------------------------------------------------------
    - namespace: "soundcloud"
      type: "http"
      baseUri: "https://api.soundcloud.com"
      authentication:
        type: "bearer"
        token: "{{soundcloud_token}}"
      inputParameters:
        - name: "soundcloud_token"
          in: "environment"
      resources:
        - name: "my-tracks"
          path: "/me/tracks"
          operations:
            - name: "get-my-tracks"
              method: "GET"
              outputParameters:
                - name: collection
                  type: array
                  value: "$.collection"

    # -----------------------------------------------------------------
    # Etsy
    # -----------------------------------------------------------------
    - namespace: "etsy"
      type: "http"
      baseUri: "https://openapi.etsy.com/v3"
      authentication:
        type: "bearer"
        token: "{{etsy_token}}"
      inputParameters:
        - name: "etsy_token"
          in: "environment"
        - name: "x-api-key"
          in: "header"
          value: "{{etsy_api_key}}"
      resources:
        - name: "my-listings"
          path: "/application/shops/{{shop_id}}/listings/active"
          inputParameters:
            - name: shop_id
              in: path
          operations:
            - name: "list-my-listings"
              method: "GET"
              outputParameters:
                - name: results
                  type: array
                  value: "$.results"

    # -----------------------------------------------------------------
    # Uber
    # -----------------------------------------------------------------
    - namespace: "uber"
      type: "http"
      baseUri: "https://api.uber.com/v1.2"
      authentication:
        type: "bearer"
        token: "{{uber_token}}"
      inputParameters:
        - name: "uber_token"
          in: "environment"
      resources:
        - name: "history"
          path: "/history"
          operations:
            - name: "get-trip-history"
              method: "GET"
              outputParameters:
                - name: trips
                  type: array
                  value: "$.history"

    # -----------------------------------------------------------------
    # Hover
    # -----------------------------------------------------------------
    - namespace: "hover"
      type: "http"
      baseUri: "https://www.hover.com/api"
      authentication:
        type: "bearer"
        token: "{{hover_token}}"
      inputParameters:
        - name: "hover_token"
          in: "environment"
      resources:
        - name: "domains"
          path: "/domains"
          operations:
            - name: "list-domains"
              method: "GET"
              outputParameters:
                - name: domains
                  type: array
                  value: "$.domains"

    # -----------------------------------------------------------------
    # G2 (Company Profiles)
    # -----------------------------------------------------------------
    - namespace: "g2"
      type: "http"
      baseUri: "https://data.g2.com/api/v1"
      authentication:
        type: "bearer"
        token: "{{g2_token}}"
      inputParameters:
        - name: "g2_token"
          in: "environment"
      resources:
        - name: "products"
          path: "/products"
          operations:
            - name: "list-products"
              method: "GET"
              outputParameters:
                - name: products
                  type: array
                  value: "$.data"

    # ===================================================================
    # CONSUMES - RSS Feeds (Read-Only)
    # ===================================================================
    - namespace: "rss-feeds"
      type: "http"
      resources:
        - name: "api-evangelist"
          path: "/"
          baseUri: "https://apievangelist.com/feed.xml"
          operations:
            - name: "api-evangelist"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: api-evangelist-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"
                    - name: description
                      type: string
                      mapping: "$.description"

        - name: "bbc"
          path: "/"
          baseUri: "https://feeds.bbci.co.uk/news/rss.xml"
          operations:
            - name: "bbc-news"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: bbc-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "dzone"
          path: "/"
          baseUri: "https://feeds.dzone.com/home"
          operations:
            - name: "dzone"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: dzone-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "economist"
          path: "/"
          baseUri: "https://www.economist.com/rss"
          operations:
            - name: "economist"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: economist-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "hacker-news"
          path: "/"
          baseUri: "https://hnrss.org/frontpage"
          operations:
            - name: "hacker-news"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: hn-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: comments
                      type: string
                      mapping: "$.comments"

        - name: "hackernoon"
          path: "/"
          baseUri: "https://hackernoon.com/feed"
          operations:
            - name: "hackernoon"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: hackernoon-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "medium"
          path: "/"
          baseUri: "https://medium.com/feed/@kinlane"
          operations:
            - name: "medium"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: medium-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "nytimes"
          path: "/"
          baseUri: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          operations:
            - name: "nytimes"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: nytimes-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "pbs"
          path: "/"
          baseUri: "https://www.pbs.org/newshour/feeds/rss/headlines"
          operations:
            - name: "pbs"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: pbs-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "politico"
          path: "/"
          baseUri: "https://rss.politico.com/politics-news.xml"
          operations:
            - name: "politico"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: politico-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "substack"
          path: "/"
          baseUri: "https://kinlane.substack.com/feed"
          operations:
            - name: "substack"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: substack-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "the-new-stack"
          path: "/"
          baseUri: "https://thenewstack.io/feed/"
          operations:
            - name: "the-new-stack"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: tns-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

        - name: "crunchbase"
          path: "/"
          baseUri: "https://news.crunchbase.com/feed/"
          operations:
            - name: "crunchbase"
              method: "GET"
              outputRawFormat: "xml"
              outputParameters:
                - name: crunchbase-items
                  type: array
                  mapping: "$.rss.channel.item"
                  items:
                    - name: title
                      type: string
                      mapping: "$.title"
                    - name: link
                      type: string
                      mapping: "$.link"
                    - name: pubDate
                      type: string
                      mapping: "$.pubDate"

    # ===================================================================
    # CONSUMES - HTML Pages (Read-Only Scraping)
    # ===================================================================

    - namespace: "amazon-html"
      type: "http"
      baseUri: "https://www.amazon.com"
      resources:
        - name: "orders"
          path: "/gp/your-account/order-history"
          operations:
            - name: "get-orders"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: orders
                  type: array
                  mapping: "$.orders"

    - namespace: "expedia-html"
      type: "http"
      baseUri: "https://www.expedia.com"
      resources:
        - name: "trips"
          path: "/trips"
          operations:
            - name: "get-trips"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: trips
                  type: array
                  mapping: "$.trips"

    - namespace: "chase-html"
      type: "http"
      baseUri: "https://secure.chase.com"
      resources:
        - name: "accounts"
          path: "/web/auth/dashboard"
          operations:
            - name: "get-accounts"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: accounts
                  type: array
                  mapping: "$.accounts"

    - namespace: "etrade-html"
      type: "http"
      baseUri: "https://us.etrade.com"
      resources:
        - name: "portfolio"
          path: "/etx/pxy/my-accounts/portfolio"
          operations:
            - name: "get-portfolio"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: portfolio
                  type: object
                  mapping: "$.portfolio"

    - namespace: "creditkarma-html"
      type: "http"
      baseUri: "https://www.creditkarma.com"
      resources:
        - name: "dashboard"
          path: "/dashboard"
          operations:
            - name: "get-dashboard"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: scores
                  type: object
                  mapping: "$.scores"

    - namespace: "amtrak-html"
      type: "http"
      baseUri: "https://www.amtrak.com"
      resources:
        - name: "reservations"
          path: "/account/my-trips"
          operations:
            - name: "get-reservations"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: reservations
                  type: array
                  mapping: "$.reservations"

    - namespace: "alaskaair-html"
      type: "http"
      baseUri: "https://www.alaskaair.com"
      resources:
        - name: "trips"
          path: "/account/my-trips"
          operations:
            - name: "get-trips"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: trips
                  type: array
                  mapping: "$.trips"

    - namespace: "cvs-html"
      type: "http"
      baseUri: "https://www.cvs.com"
      resources:
        - name: "prescriptions"
          path: "/account/rx-refill"
          operations:
            - name: "get-prescriptions"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: prescriptions
                  type: array
                  mapping: "$.prescriptions"

    - namespace: "extraspace-html"
      type: "http"
      baseUri: "https://www.extraspace.com"
      resources:
        - name: "account"
          path: "/myaccount"
          operations:
            - name: "get-account"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: units
                  type: array
                  mapping: "$.units"

    - namespace: "trinet-html"
      type: "http"
      baseUri: "https://www.trinet.com"
      resources:
        - name: "dashboard"
          path: "/dashboard"
          operations:
            - name: "get-dashboard"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: info
                  type: object
                  mapping: "$.employee"

    - namespace: "zillow-html"
      type: "http"
      baseUri: "https://www.zillow.com"
      resources:
        - name: "saved-homes"
          path: "/myzillow/saved-homes"
          operations:
            - name: "get-saved-homes"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: homes
                  type: array
                  mapping: "$.homes"

    - namespace: "ancestry-html"
      type: "http"
      baseUri: "https://www.ancestry.com"
      resources:
        - name: "trees"
          path: "/family-tree"
          operations:
            - name: "get-trees"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: trees
                  type: array
                  mapping: "$.trees"

    # ===================================================================
    # CONSUMES - Institutional HTML Pages (Read-Only)
    # ===================================================================

    - namespace: "ietf-html"
      type: "http"
      baseUri: "https://www.ietf.org"
      resources:
        - name: "rfcs"
          path: "/rfc/"
          operations:
            - name: "get-recent-rfcs"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: rfcs
                  type: array
                  mapping: "$.rfcs"

    - namespace: "mit-html"
      type: "http"
      baseUri: "https://www.mit.edu"
      resources:
        - name: "news"
          path: "/news"
          operations:
            - name: "get-news"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: articles
                  type: array
                  mapping: "$.articles"

    - namespace: "moma-html"
      type: "http"
      baseUri: "https://www.moma.org"
      resources:
        - name: "exhibitions"
          path: "/calendar/exhibitions"
          operations:
            - name: "get-exhibitions"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: exhibitions
                  type: array
                  mapping: "$.exhibitions"

    - namespace: "nypl-html"
      type: "http"
      baseUri: "https://www.nypl.org"
      resources:
        - name: "events"
          path: "/events"
          operations:
            - name: "get-events"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: events
                  type: array
                  mapping: "$.events"

    - namespace: "ny-gov-html"
      type: "http"
      baseUri: "https://www.ny.gov"
      resources:
        - name: "news"
          path: "/news"
          operations:
            - name: "get-news"
              method: "GET"
              outputRawFormat: "html"
              outputParameters:
                - name: articles
                  type: array
                  mapping: "$.articles"
```