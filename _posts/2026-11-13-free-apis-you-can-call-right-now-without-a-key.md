---
published: true
layout: post
title: 'Free APIs You Can Call Right Now, Without a Key'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/free-apis-you-can-call-right-now-without-a-key.png
date: 2026-11-13 16:00:00 +0000
author: Kin Lane
tags:
  - Free APIs
  - Public APIs
  - Getting Started
  - Open Data
---
If you're learning how APIs work, testing an AI agent's tool calls, or just want real data for a demo, the hardest part is often signing up. Every one of the APIs below works without a key, an account or a credit card. You paste the example URL into a browser or `curl` and get data back.

I called every example request on November 9, 2026, with no key, and each one returned real data. They're taken from the [APIs.io playground](https://apis.io/playground), a curated list of APIs that are safe to experiment with. Calling them can't move money, send a message or touch anyone's personal data.

## Try one first

The simplest way to see what an API is: open this in your browser.

```
https://api.frankfurter.dev/v1/latest
```

You'll get the current euro reference exchange rates back as JSON. That's an API call: a URL, a request, and structured data you could use in code, a spreadsheet or an agent.

## The list

**Money and the economy**
- **[Frankfurter](https://apis.io/providers/frankfurter/):** foreign exchange reference rates, current and historical. Try `https://api.frankfurter.dev/v1/latest`.
- **[Bureau of Labor Statistics](https://apis.io/providers/bls/):** US employment, wages, prices and productivity data. Try `https://api.bls.gov/publicAPI/v2/surveys`. Without a key you get a smaller daily allowance, and a free registration raises it.

**Weather, water and energy**
- **[Yr (Norwegian Meteorological Institute)](https://apis.io/providers/yr-no/):** weather forecasts for anywhere on Earth. Try `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=40.71&lon=-74.01`. It requires a User-Agent header that identifies you, such as your app name and an email address. Browsers send one automatically; in code, set your own.
- **[USGS Water Services](https://apis.io/providers/usgs-water/):** US streamflow, groundwater and water-quality observations. Try `https://api.waterdata.usgs.gov/ogcapi/v0/collections/agency-codes`.
- **[Carbon Intensity API](https://apis.io/providers/carbon-intensity/):** how clean Great Britain's electricity grid is right now, with forecasts. Try `https://api.carbonintensity.org.uk/intensity`.
- **[Elexon](https://apis.io/providers/elexon/):** UK electricity market data, covering settlement, generation and demand. Try `https://data.elexon.co.uk/bmrs/api/v1/balancing/acceptances/all/latest`.

**Words, research and games**
- **[Datamuse](https://apis.io/providers/datamuse/):** rhymes, synonyms and words that sound alike. The tiny responses make it good for chaining calls. Try `https://api.datamuse.com/words?rel_rhy=code&max=3`.
- **[arXiv](https://apis.io/providers/arxiv/):** metadata for millions of research preprints in physics, maths and computer science. Try `https://oaipmh.arxiv.org/oai?verb=Identify`. It returns XML, not JSON.
- **[Scryfall](https://apis.io/providers/scryfall/):** every Magic: The Gathering card. It's large, clean and generous, which makes it a good first API to explore. Try `https://api.scryfall.com/bulk-data`.

**For developers**
- **[OpenAPI Generator](https://apis.io/providers/openapi-generator/):** generates client SDKs from an OpenAPI file. Try `https://api.openapi-generator.tech/api/gen/clients` to see the languages it supports. I wrote more about [what OpenAPI is here](https://apievangelist.com/2017/01/25/the-openapi-specification-version-30-highlights/).

## Be a good guest

"Free and no key" doesn't mean "unlimited". These are mostly run by public institutions and open-source communities:
- Keep request volumes modest.
- Cache responses instead of calling every second.
- Set a User-Agent that says who you are.
- Read each provider's terms before building something people depend on.

If you need guaranteed uptime or higher limits, most of them offer a free registration or a paid tier.

## Finding more

APIs.io indexes tens of thousands of APIs. The [playground](https://apis.io/playground) is the starting set, re-checked so the examples keep working. If you're connecting an AI assistant, the APIs.io MCP server offers the same list as a tool, so an agent can find a safe API to practise on by itself.

When you're ready for APIs that need a key, the [OpenAI](https://apievangelist.com/2026/11/06/openai-api-pricing-what-every-model-costs-per-million-tokens/), [Twilio](https://apievangelist.com/2026/11/12/twilio-api-pricing-what-a-text-message-costs-and-what-gets-added/) and [DocuSign](https://apievangelist.com/2026/11/11/docusign-api-pricing-what-the-developer-plans-cost-and-what-you-get/) pricing breakdowns cover what the commercial ones cost.
