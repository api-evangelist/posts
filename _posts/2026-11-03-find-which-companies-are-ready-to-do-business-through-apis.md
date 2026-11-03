---
published: true
layout: post
title: 'Find Which Companies Are Ready To Do Business Through APIs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-which-companies-are-ready-to-do-business-through-apis.png
date: 2026-11-03
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Company Insights
  - Banking
  - Enterprise
---

If you sell API tooling, run partnerships, or are trying to figure out which large enterprises are actually ready to integrate with you, you need a list. Not a list of logos. A list ranked by how much technology signal each company puts out into the world. That is what `find_company_insights` does on the API Evangelist MCP server, and it is backed by the REST operation `GET /insights/companies`. It is the index that sits in front of the company profiles I've been building out across the Fortune 1000 and the API providers in the APIs.io catalog, and it is free.

## What I gave it

I called it twice, live, this morning. First with no query at all, just `{"limit": 10}`, to see who sits at the top of the whole index. Second with `{"q": "bank", "limit": 10}`, because banking is the sector I've spent the most time profiling and I wanted to see how the name match behaves.

## What came back

The first call reports 6,572 profiled companies across 658 pages. The top ten, ranked by `readiness_total`:

```
jp-morgan-chase        Financial Services / Banking        2656
unitedhealth-group     Healthcare / Managed Care           2179
booz-allen-hamilton    (no industry)                       2136
leidos                 Defense / Aviation & Defense Tech   2129
citi                   Financial Services / Banking        2103
mastercard             Fintech / Payment Networks          2027
oracle                 Enterprise Software / ERP           2013
scotiabank             Financial Services / Banking        2010
salesforce             CRM / Marketing                     1957
kyndryl-holdings       Enterprise Software / ITSM          1922
```

Three banks and a payment network in the top ten. That matches what I see every time I dig into the sector: banks put out an enormous amount of technology signal, in hiring, in developer programs, in regulatory open banking work. Two government contractors, Booz Allen Hamilton and Leidos, sitting at three and four is the kind of thing you don't expect until you look at how much technology hiring and contracting they do.

The second call, searching "bank," came back with 19 matches. The top of the list:

```
scotiabank                 2010
td                         1555   (TD Bank Group)
commonwealth-bank          1295
m-and-t-bank               1072
cullen-frost-bankers        490
allica-bank                 338
bank-of-america              93
stark-bank                   90
deutsche-bank                24
10x-banking-technology...  null
```

Here is where I have to be honest about my own tool. Bank of America at 93 and Deutsche Bank at 24 are not real reflections of those companies. Bank of America runs one of the larger technology operations on the planet. A score that low tells me the profile is thin, not that the bank is. The readiness total measures the signal I have collected, and for some companies I simply haven't collected much yet. The tenth result has a `null` readiness, which means it is in the index but not scored at all.

The search is also a name match, not an industry filter. JP Morgan Chase and Citi, the top two banks in the whole index, don't show up for "bank" because the word isn't in their names. If you want every bank, search by name for the ones you know, or move up to the industry and peer tools. And Booz Allen Hamilton has no industry assigned, even while it sits third overall. That's a gap in my data I'll fix.

## What that makes possible

- **Build a target list in one call.** Sales and partnership teams can pull the top of the index, or page through all 658 pages, and get slugs they can hand straight to `get_company_insight` for the full profile.
- **Spot the profiles that need work.** A low or null readiness next to a name you know is a big company is a signal that the data is thin. That's useful for me, and useful for anyone deciding how much to trust a number.
- **Give an agent a starting point.** An agent researching a sector can call this first to resolve a company name to a slug, then call the per-company, peers and gaps tools without guessing.
- **Compare within a sector.** Scotiabank at 2010 against TD at 1555 against Commonwealth Bank at 1295 is a quick read on who is putting out the most technology signal among peers.

## Try it

It's free, no Pro plan needed. On MCP, connect to `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/insights`) and call `find_company_insights`. Over REST:

```sh
curl "https://api.apievangelist.com/v1/insights/companies?q=bank&limit=10"
```

The operation is documented in the [API reference](https://developer.apievangelist.com/api), the MCP server is covered in the [MCP docs](https://developer.apievangelist.com/mcp-server), and the [getting started guide](https://developer.apievangelist.com/getting-started) walks through keys. The deeper insight tools are listed on the [plans page](https://developer.apievangelist.com/plans/).
