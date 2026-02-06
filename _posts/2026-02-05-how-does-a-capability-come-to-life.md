---
published: true
layout: post
title: How Does a Capability Come to Life?
date: 2026-02-05T09:00:00.000Z
tags:
  - Capabilities
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-docks-water-front-ships-containers.jpg
---
As I work to define Naftiko, and specifically what a capability is, I wanted to explore how a capability comes to life. But let’s start with my current definition of what a capability is. 

A capability is a human and machine-readable definition of something you want to accomplish as part of business operations. It could be simple like scheduling a calendar event, or different portions of a supply chain. A capability integrates data, functions, and potentially events. A capability should matter to technical and non-technical stakeholders.

Capabilities are JSON or YAML stored in a Git repository, but can be used anywhere. Capabilities are editable in any JSON or YAML editor and integrated development environment of choice. Capabilities have a developer experience as well as a user experience—working to balance the creation, editing, and evolution of a capability by any stakeholder.

When answering the question—how does a capability come to life, it is important to examine in four separate dimensions:

- Business or Engineering
- Greenfield or Brownfield
- Created or Forked
- Manual or Automated

There are plenty of other properties of a capability to consider, but how one comes to life, these are critical to understanding.

A capability could start as a simple title and description, expressed as YAML or JSON.

Then you would add one or more stakeholders to discuss and contribute to what a capability is. 

A capability could be defined by drag and dropping existing OpenAPI, AsyncAPI, MCP Servers, Postman Collections, Bruno Collections, or a HAR file.

A capability could come to life in a simple web form on the Web, or via a YAML file in an IDE—editing, autocompleting, and defining incrementally.

A capability could come to life by turning on a proxy, gathering web traffic, and then asking non-technical or technical stakeholders to refine.

A capability could come to life by turning on a scanner or crawler which gathers any evidence of data and APIs and combing into a capability.

A capability could come to life by asking a LLM to generate it, and refine it based upon the needs of business or engineering stakeholders.

A capability could come to life by forking an existing capability, or aggregating multiple capabilities into a single new artifact and taking in a new direction.

A capability can reflect a new business outcome with entirely greenfield (new) data and integrations, or it could reflect a new business outcome using brownfield (existing) data and integrations.

Whether a capability is initiated by a business stakeholder or engineering stakeholder will matter. 

Whether a capability is owned by multiple business and engineering stakeholders will matter. 

Most people will not care about the JSON or YAML for a capability, and have different properties of a capability that matter to wha they want to accomplish.

Each step taken after a new capability is created should be guided, governed, and integrated into the existing tooling a business or engineering stakeholder already uses.

It is unlikely that anyone will create a new capability from scratch, but it should be easy to do.

It is more likely that a capability will be discovered as part of the Naftiko Fabric on GitHub, GitLab, Bitbucket, or via Backstage, or Naftiko application—then forked.

Actually, a capability should be forked and deployed from anywhere.

A capability might just be mocked or simulated, and never see production.

A capability might be heading for production.

The intent of the person bringing a capability to life will matter.

The people who contribute to a capability and help sustain it will matter.

A capability must be equal parts business and engineering for it to remain alive.