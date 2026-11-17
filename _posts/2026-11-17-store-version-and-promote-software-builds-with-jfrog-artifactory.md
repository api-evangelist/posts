---
published: true
layout: post
title: 'Store, Version And Promote Software Builds With JFrog Artifactory'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/store-version-and-promote-software-builds-with-jfrog-artifactory.png
date: 2026-11-17 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - JFrog Artifactory
  - Package Registries & Distribution
  - Continuous Integration Management
  - Software Release & Deployment Management
  - DevOps
  - CI/CD
---

If your team ships software, you are producing a steady pile of files at the end of every build: packages, libraries, container images, installers. Somebody has to keep track of which version is which, who is allowed to download it, and which build is actually ready to go out the door. Doing that by hand, or in a shared folder, breaks down fast. JFrog Artifactory is built to hold all of it in one place, and it does the work through an API, which means your build tools, your scripts, or an AI assistant can store, find and promote those files for you. You can see the full profile on [APIs.io](https://apis.io/providers/artifactory/).

## What JFrog Artifactory does

JFrog describes Artifactory as a universal artifact repository manager. An "artifact" is just the finished output of a build, the thing you actually install or deploy. Artifactory supports the major package formats and build tools, including Maven, Gradle, npm, NuGet, PyPI, Docker, Helm, RubyGems and CocoaPods, and it sits at the center of the wider JFrog Platform. It plugs into continuous integration and delivery pipelines (CI/CD, the automated systems that build and ship code) through plugins for Jenkins, GitHub Actions, CircleCI and others. You can learn more on the [JFrog website](https://www.jfrog.com/).

## What you can get done

APIs.io maps Artifactory to 4 business capabilities. Here is what each one means for your business.

### [Package Registries & Distribution](https://apis.io/capabilities/package-registries-distribution/)

This is the heart of it: a single, controlled place to publish the things your team builds and to pull down the things it depends on, container images included. Instead of hunting for the right file, everyone gets the same approved version from the same place.

- `PUT /{repoKey}/{itemPath}` uploads (deploys) a file into a repository.
- `GET /{repoKey}/{itemPath}` downloads a stored file.
- `GET /api/storage/{repoKey}/{itemPath}` reads the details about a file or folder.
- `POST /api/copy/{srcRepoKey}/{srcItemPath}` copies a file to another location; `POST /api/move/{srcRepoKey}/{srcItemPath}` moves it.
- `GET /v2/{name}/manifests/{reference}` fetches a container image's manifest, the description of what is inside it.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

Not everyone should be able to publish or delete your software. This capability lets you manage who has an account and which groups they belong to, so access follows your org chart instead of a shared password.

- `GET /api/security/users` lists the people with accounts.
- `PUT /api/security/users/{username}` creates or replaces a user.
- `DELETE /api/security/users/{username}` removes a user when they leave.
- `GET /api/security/groups` lists groups, and `GET /api/security/groups/{groupName}` shows one group's details.

### [Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/)

Every build leaves a record: what went into it, what came out, and when. Keeping those records lets you answer the question "what exactly did we ship?" and clean up old builds on a schedule so storage does not grow forever.

- `PUT /api/build` publishes the information about a finished build.
- `GET /api/build/{buildName}` lists the runs of a build.
- `GET /api/build/{buildName}/{buildNumber}` reads the details of a single run.
- `POST /api/build/retention/{buildName}` sets how long old builds are kept.
- `DELETE /api/build/{buildName}` deletes a build record.

### [Software Release & Deployment Management](https://apis.io/capabilities/software-release-deployment-management/)

Most teams move software through stages, such as development, testing and production. Promotion is the step where a build is approved to move forward, and doing it through the API means the approval is recorded and repeatable.

- `POST /api/build/promote/{buildName}/{buildNumber}` promotes a build to the next repository stage.

## Workflows that put it together

A workflow is a recipe: several API calls run in a set order to finish a whole job. APIs.io lists 18 Arazzo workflows for Artifactory; here are some of them.

- [Deploy, Tag, and Search Artifact](https://apis.io/arazzos/artifactory/artifactory-deploy-tag-search-artifact-workflow/) uploads a file, labels it with properties, then finds it again by those labels.
- [Compare Build Versions](https://apis.io/arazzos/artifactory/artifactory-compare-build-versions-workflow/) confirms a build exists and shows what changed since an earlier one.
- [Create User and Verify Membership](https://apis.io/arazzos/artifactory/artifactory-create-user-verify-membership-workflow/) sets up a group, adds a new person to it, and reads them back to confirm.
- [Create Group-Scoped Access Token](https://apis.io/arazzos/artifactory/artifactory-create-group-scoped-access-token-workflow/) creates a group and issues an access key limited to it.
- [Configure Repository Replication](https://apis.io/arazzos/artifactory/artifactory-configure-repository-replication-workflow/) creates a repository and schedules copies of it to another location.
- [Checksum Search and Retrieve](https://apis.io/arazzos/artifactory/artifactory-checksum-search-retrieve-workflow/) finds a file by its fingerprint and reads where it lives.
- [AQL Find and Delete Artifact](https://apis.io/arazzos/artifactory/artifactory-aql-find-and-delete-artifact-workflow/) searches with Artifactory's query language and removes the first match.
- [Decommission Repository](https://apis.io/arazzos/artifactory/artifactory-decommission-repository-workflow/) checks a repository's settings, confirms it exists, then deletes it.

## Getting started

Artifactory is a paid, hosted service: you call JFrog's endpoint with your own credentials. Plans start with Pro at $50/ Month; see the [pricing section on APIs.io](https://apis.io/providers/artifactory/#pricing) for the details. Start with JFrog's guide to [authentication](https://jfrog.com/help/r/jfrog-rest-apis/authentication), then the [Artifactory Query Language](https://jfrog.com/help/r/jfrog-artifactory-documentation/artifactory-query-language) docs for searching what you have stored.

On APIs.io you can browse the [Artifacts & Storage API](https://apis.io/apis/artifactory/artifactory-artifacts-storage-api/), the [Build Promotion API](https://apis.io/apis/artifactory/artifactory-build-promotion-api/), the [AQL Search API](https://apis.io/apis/artifactory/artifactory-aql-search-api/) and the [Replication API](https://apis.io/apis/artifactory/artifactory-replication-api/), or start from the [JFrog Artifactory profile](https://apis.io/providers/artifactory/).

If your builds already land in a dozen places, pick one pipeline, point it at Artifactory, and let the API keep the record for you.
