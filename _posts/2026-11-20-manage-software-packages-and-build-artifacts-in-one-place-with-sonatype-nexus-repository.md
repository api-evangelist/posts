---
published: true
layout: post
title: 'Manage Software Packages And Build Artifacts In One Place With Sonatype Nexus Repository'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-software-packages-and-build-artifacts-in-one-place-with-sonatype-nexus-repository.png
date: 2026-11-20 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Sonatype Nexus Repository
  - Identity & Access Management
  - Artifact Management
  - Software Supply Chain
  - DevOps
---

If your business writes software, it also collects a pile of things that software depends on: open source packages, container images, the builds your team produces every day, and more and more often the AI models you pull down to work with. When that pile lives in a dozen places, nobody can say for certain what is in use, who can get at it, or what to clean up. Sonatype Nexus Repository is one place to keep all of it, and it can be run through an API, which means your own software, your build system, or an AI assistant can ask it questions and take care of the routine work for you. You can see the full profile on [APIs.io](https://apis.io/providers/nexus/).

## What Sonatype Nexus Repository does

Nexus Repository, formerly called Nexus Repository Manager, is Sonatype's artifact repository manager. An "artifact" is just a finished piece of software: a package, a container image, a build output, or a machine learning model. Nexus holds these across Maven, npm, Docker/OCI, PyPI, NuGet, Helm, Go, Hugging Face and many other formats, so your developers pull from and publish to one trusted source instead of reaching straight out to the internet. Sonatype offers it as a free self-hosted Community Edition, as Pro, Pro+ and Enterprise editions, and as Nexus Repository Cloud. You can read more on the [Sonatype website](https://www.sonatype.com/products/sonatype-nexus-repository).

One detail I appreciate: every Nexus instance serves its own REST API under `/service/rest`, and publishes the machine-readable description of that API at `/service/rest/swagger.json` on the same server. Whatever version you run, the documentation for its API is sitting right next to it.

## What you can get done

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

The first question anyone asks about a central store of software is "who can get into it?" Nexus lets you answer that without clicking through admin screens. Your security or compliance team can pull a current list of every account and every role on demand, feed it into an access review, or compare it against your employee directory to spot people who left and still have a login.

- `GET /v1/security/users` lists the users on the repository manager.
- `GET /v1/security/roles` lists the roles that define what those users are allowed to do.

That is the one business capability APIs.io has mapped to operations for Nexus so far, but the API itself is grouped into more areas than that, and they are worth knowing about:

- **Finding what you have.** The [Search API](https://apis.io/apis/nexus/nexus-search-api/), [Components API](https://apis.io/apis/nexus/nexus-components-api/) and [Assets API](https://apis.io/apis/nexus/nexus-assets-api/) let you look up which packages and files are stored, so you can answer "are we using this library anywhere?" in seconds.
- **Controlling storage.** The [Blob store API](https://apis.io/apis/nexus/nexus-blob-store-api/) and the [Azure blob store API](https://apis.io/apis/nexus/nexus-azure-blob-store-api/) manage where all of those files physically live, including on Microsoft Azure.
- **Keeping things tidy.** The [Cleanup policies API](https://apis.io/apis/nexus/nexus-cleanup-policies-api/) sets rules for removing old builds you no longer need, and the [Tasks API](https://apis.io/apis/nexus/nexus-tasks-api/) covers the scheduled jobs that carry that work out.
- **Fencing off content.** The [Content selectors API](https://apis.io/apis/nexus/nexus-content-selectors-api/) defines which parts of the repository a given group of people can see.
- **Keeping an eye on health.** The [Status API](https://apis.io/apis/nexus/nexus-status-api/) tells a monitoring tool whether the server is up and ready.

Put together, that is the outline of a store you can run largely hands-off: software checks it, cleans it, and reports on who has access, while your team gets on with building.

## Getting started

Access is freemium with self-serve signup: the Community Edition is free to run on your own servers, and the paid editions add more. If cost is part of your decision, the [pricing section on APIs.io](https://apis.io/providers/nexus/#pricing) lays out the editions; as one example, the Pro Edition (Cloud) is listed at $1,950.

Because each Nexus server documents its own API, the best place to start once you have an instance is that instance's `/service/rest/swagger.json`. Beyond that, the [APIs.io profile](https://apis.io/providers/nexus/) gathers every API in one place, and the [Search API](https://apis.io/apis/nexus/nexus-search-api/), [Blob store API](https://apis.io/apis/nexus/nexus-blob-store-api/) and [Cleanup policies API](https://apis.io/apis/nexus/nexus-cleanup-policies-api/) pages are good first stops.

If your team is already juggling packages and builds across too many places, the next step is simple: stand up the free Community Edition, list your users and roles through the API, and see what you learn about who can touch your software.
