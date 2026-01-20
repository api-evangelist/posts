---
published: true
layout: post
title: A 3rd-Party Notion API Sandbox to Provide a Safer Agent Sandbox
date: 2026-01-20T09:00:00.000Z
tags:
  - Agents
  - Semantics
  - Web
  - JSON-LD
  - Pricing
  - Plans
  - Capabilities
  - Economics
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/citizenship-miami-beach-walkway.jpg
---
I am creating a series of [3rd-party Notion API sandbox](https://github.com/naftiko/notion-sandbox) for my team to develop against, and provide safe spaces for Naftiko customers to develop agents against. The foundation of my Notion API sandbox is OpenAPI, combined with MIcrocks to deliver the mock, and Bruno to provide client access to the sandbox. The first piece of the journey is to produce a complete OpenAPI artifact for the Notion API, but without Notion maintaining their own, I have to produce one through a mix of scripts, AI, and good old fashion hands-on domain-expert refinements and organization.

It would be nice if every API producer would maintain a robust and complete OpenAPI for their APIs, but not all do. I have a script that I can point at Notion’s developer portal and it will generate an APIs.json that isolates the documentation, pricing, rate limits, SDKs, and other essential elements needed to work with APIs. The script will isolate not just the main documentation page, but it will crawl and provide a list of the sub-pages of the reference documentation for any API. When done identifying all the pages, my script will feed each page into Claude’s API to generate an OpenAPI 3.1 for each page.

As this script runs, I am always out there looking for community created OpenAPIs, Postman Collections, or other artifacts I can use to inform my work. Notion has an official Postman workspace with a collection for their API—which I quickly convert into OpenAPI to use to inform my work. But I know from experience that Postman Collections are rarely a complete representation of the surface area for an API. They are more often a representation of what is needed to onboard or test an API, and some companies lack any automated way to keep their Postman Collections in sync with their primary build process, documentation, and other parts of their operations.

In the end, I end up with a jumble of OpenAPI paths, operations, parameters, and schema that I still have to validate are correct. Claude hallucinates a whole lot of paths and parameters from across these documentation reference pages, and what is contained in these documentation pages doesn’t match what was in the Postman Collection. So as much as I’d like to automate this, and be able to say that my crawler and AI does all the magic—I know better. I still have to go through each individual path and verify manually against the documentation. I have to audit the documentation for an official count of paths, and I use that to run through and verify each path in my OpenAPI. From there I still have to onboard with an API, obtain a key, and begin to actually make sure each individual operation will actually result in a real response when in my client.

[Once I have published the OpenAPI I have to a GitHub repo](https://github.com/naftiko/notion-sandbox/tree/main/openapi), I then use a script to spider each request and response and make sure there is an example present. If there isn’t one, I then ask Claude to generate the example for me. When done I published the “complete” OpenAPI to Microcks to produce a mock server, and then [I generate a Bruno collection from my OpenAPI](https://github.com/naftiko/notion-sandbox/tree/main/bruno/Notion%20API), add the [localhost Microcks mock path to my Bruno environment](https://github.com/naftiko/notion-sandbox/blob/main/bruno/Notion%20API/environments/Notion.bru) and begin testing out each individual operation. This is as far as I’ve gotten. I will be spending the week certifying each mock operation alongside a production operation to validate my OpenAPI, but also the schemas I am using to generate examples. I’ve published this all to GitHub as a Notion API Sandbox for my team to use, and get to work planning my next bit of work to certify each individual API endpoint in the sandbox.

Once each individual API path and schema for request and responses are “certified”, I will get to work producing rich examples for any agent to cut its teeth on. Providing variations of pages, databases, and the other magic that Notion provides. I don’t want to do this work before each schema is validated, because the JSON Schema for each request and response is how I articulate to Claude what I want, and validate what Claude gave me back is indeed what I need. From there I will create different business scenarios based upon how people I am talking to are using Notion, and take advantage of Microcks to use OpenAPI Overlays to offer a rich suite of example data for my team and customers to use with the Notion Sandbox as they develop agents. Once this blueprint is done, I will be expanding this sandbox to the 25+ other services I have identified as part of the Naftiko Signals program.

If you are looking for sandboxes for the 3rd-party or internal APIs that you are building agents around, feel free to ping me, and I am happy to add an API to my list, and provide an open-source GitHub repo with a Open API and Bruno Collection—then you can use Microcks and Bruno to bring the sandbox to life. 

Just ping me at kinlane@naftiko.io.