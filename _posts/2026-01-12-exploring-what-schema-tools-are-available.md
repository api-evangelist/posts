---
published: true
layout: post
title: Exploring What Schema Tools Are Available
date: 2026-01-12T09:00:00.000Z
tags:
  - Schema
  - JSON Schema
  - Tools
  - Editors
  - Viewers
  - Validators
  - Generators
  - IDE
  - Govenrance
  - Discovery
  - Registries
image: >-
  https://kinlane-images.s3.amazonaws.com/shared/blue-circuit-docks-water-front.jpg
---

My Naftiko team [asked me for more information on what schema tools are available](https://github.com/naftiko/go-to-market/issues/31). Well, more specifically they asked schema explorers there were, but I thought it was an opportunity to take a fresh look at the JSON Schema tooling I use, and what was available out there. While comprehensive, [the JSON Schema tooling list can also be overwhelming](https://json-schema.org/tools?query=&sortBy=name&sortOrder=ascending&groupBy=toolingTypes&licenses=&languages=&drafts=&toolingTypes=&environments=&showObsolete=false&supportsBowtie=false), which is common for community tooling lists. So, I just wanted to take a curated approach understanding what was out there.

- **JSON Schema Viewer** ([Website](https://json-schema.app/start)) ([GitHub](https://github.com/atlassian-labs/json-schema-viewer)) - Simple multipage documentation of JSON Schema documents.
- **JSON SChema Viewer** ([GitHub](https://github.com/usebruno/json-schema-viewer)) - A visual explorer for any JSON Schema document.
- **AlterSchema** ([Website](https://alterschema.sourcemeta.com/)) ([GitHub](https://github.com/sourcemeta-research/alterschema)) - Transform JSON Schema documents between different versions.
- **Hyperjump** ([Website](https://json-schema.hyperjump.io/)) ([GitHub](https://github.com/hyperjump-io/json-schema)) - Validation and bundling tool for JSON Schema and OpenAPI.
- **AJV** ([Website](https://ajv.js.org/)) ([GitHub](https://github.com/ajv-validator/ajv)) ([GitHub Action](https://github.com/marketplace/actions/ajv-validate-json-s)) - A JSON Schema for Javascript and the browser.
- **JSON Editor** ([Website](https://github.com/json-editor/json-editor)) ([GitHub](https://json-editor.github.io/json-editor/)) - A simple visual editor for JSON objects using JSON Schema and form.
- **JSON Schema Builder** ([Website](https://json.ophir.dev/)) ([GitHub](https://github.com/lovasoa/jsonjoy-builder)) - A simple editor for JSON Schema with visual editor.
- **JSON Schema Store** ([Website](https://www.schemastore.org/)) ([GitHub](https://github.com/schemastore/schemastore/)) ([VSCode](https://marketplace.visualstudio.com/items?itemName=remcohaszing.schemastore)) - A registry of many common JSON Schema artifacts for use.
- **JSON Schema Studio** ([Website](https://marketplace.visualstudio.com/items?itemName=istalri.json-schema-studio)) - A powerful VS Code extension for converting JSON to TypeScript interfaces.
- **Smart JSON Schema** ([Website](https://marketplace.visualstudio.com/items?itemName=FabianReyes.smart-json-schema)) - Simplify the generation of JSON schemas from existing JSON files.
- **Spectral** ([GitHub](https://github.com/stoplightio/spectral)) ([GitHub Action](https://github.com/marketplace/actions/spectral-linting)) ([VSCode](https://marketplace.visualstudio.com/items?itemName=stoplight.spectral)) - Linting rules and governance for any schema.
- **VSCode IDE** ([Docs](https://code.visualstudio.com/docs/languages/json)) ([Post](https://linkedlist.ch/json-schema-vscode_74/)) - Using intellisense in VSCode using any JSON Schema artifact.

I think the coverage from web tools to CLI to CI/CD pipelines to VSCode is an import series of dimensions to highlight, especially when it comes to how the Naftiko Fabric is looking to build on top of what already exists out there. I purposefully show VSCode intellisense and validation, which I will look at from the perspecive of other IDEs out there. I include AJV in there because it is so ubiqutious, but I personally prefer using Hyperjump when I can.

This list is intentionally curated and not exhaustive. It reflects what I am using, and provide a nice cross section of the schema landscape. I stopped short of how JSON Schema is applied to other standards, as well as how new schema specifications like JSON Structure--which I will dive into next. The goal here was to provide a nice slice of the schema tooling available for viewing, exploring, editing, discovering, validating, and governing, which reflects the primary goals of what we are doing with schema and JSON schema on any given day.

<!-- paper-link -->

---

**Going deeper: [The JSON Schema Standard](https://reports.apievangelist.com/reports/the-json-schema-standard/?ae_ref=apievangelist.com&ae_pos=post-footer)**

9,439,146 schema objects measured inside published API contracts — and an industry still writing with the vocabulary it had in 2013.

[Read the paper — $500](https://reports.apievangelist.com/reports/the-json-schema-standard/?ae_ref=apievangelist.com&ae_pos=post-footer)
