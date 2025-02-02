---
published: true
layout: post
title: Bridging API Rules, Guidance, Experiences, and the Lifecycle Using Policies
tags:
  - Rules
  - Guidance
  - Experience
  - Lifecycle
  - Policies
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-bay-bridge-second-half.jpeg
---
I realize that it is hard to follow all of my work. That is fine. It is primarily for me to make sense of where I am going with this work, while also priming the pump for API governance conversation with my customers. I am also very aware that most won’t see my work because it is simply a bunch of YAML in a GitHub repository. People need interfaces to see the work and understand the relationships between all of the YAML schema I am working on. To help me articulate to some partners and customers while I am still working on a user interface for working with, I wanted to try and break things down here in a post, and via the README for each of the schema I am using to deliver API governance (guidance).

My API governance work centers around the current reality of API governance focusing on linting OpenAPI definitions using Spectral rules. This approach to API governance holds a lot of potential when it comes to stabilizing and standardizing API operations, yet this potential will be diminished when it comes up against common business concerns present across API operations. This is why I am introducing four additional schemas that help balance the technical details covered by Spectral linting OpenAPI, with the introduction of key business considerations. These schemas are also linked using Spectral rules and indexed using an APIs.json which contains references to an OpenAPI, as well as other business considerations—here is the schema stack I am using.

- **Rules** - Modular rules that currently only use Spectral, but will expand to other linting engines in the future when needed.
- **Policies** - Modular policies that define the business rationale behind governance, linking to guidance, experience, and lifecycle.
- **Guidance** - Modular text and videos that help explain a specific business or technical aspect of API governance (guidance).
- **Experience** - Modular human experiences that are encountered by business and technical stakeholders across API operations.
- **Lifecycle** - A single lifecycle with multiple standardized schemas that link policies with specific stages of a common API lifecycle.

I acknowledge that these schemas are new and not adopted by any service or tooling provider. I acknowledge that everyone is only focused on the first rules portion of this stack. However, I see guidance from API producers in the form of API guidelines, which is sometimes, but not always directly linked to actual executable Spectral rules. I link guidance to rules through policies. I also link experience to rules through policies. I link it all to the API lifecycle through policies. I acknowledge everyone is starting with rules, but it is something that could be expanded upon schema by schema, with the alignment with business goals using policies being the first logical step. I am honest with myself about the work ahead of me to get adoption of these schemes, but I am confident that with more storytelling and some simple user interfaces and meaningful reports, I will change more people’s minds. 

I am contributing all of these schemas to the [API Commons](https://apicommons.org/) so others can use them. I am rapidly iterating on them to support my API governance dashboard and services. My approach to API governance and the API Commons schema are rapidly evolving based upon my work on APIs.io and API Evangelist APIs, but also those of my customers—here is what you can get at currently.

| Schema     | Details | Repo | Repo |
| 