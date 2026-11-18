---
published: true
layout: post
title: 'Automate Builds, Pull Requests And Releases With Azure DevOps'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/automate-builds-pull-requests-and-releases-with-azure-devops.png
date: 2026-11-18 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Azure DevOps
  - Continuous Integration Management
  - Software Construction Management
  - Software Release & Deployment Management
  - Product Discovery & Backlog Management
  - DevOps
  - Project Management
---

If your team builds software, a lot of the week disappears into small, repeated chores. Kicking off a build, checking whether it passed, opening a pull request, filing a bug, pushing a release out to the next environment, and then telling everyone it happened. Most teams do these by clicking through screens. [Azure DevOps](https://apis.io/providers/microsoft-azure-devops/) lets you do all of them through an API, which means a script, an internal tool, or an AI assistant can do the clicking for you.

An API is a set of doors into a service that other software can knock on. Instead of a person logging in, a program sends a request and gets an answer back. That is what turns a tool your developers use into something the rest of the business can automate around.

## What Azure DevOps does

Azure DevOps is Microsoft's set of developer services for teams to plan work, collaborate on code, and build and deploy applications. It covers the backlog (Azure Boards), the code (Azure Repos), the builds and releases (Azure Pipelines) and the testing (Test Plans). You can find it through [Microsoft](https://www.microsoft.com/).

## What you can get done

### Run and track your builds

[Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/) is the practice of building and checking your software automatically every time someone changes it. The API lets you define the build, start it, and find out whether it worked, so a status page or a chat bot can answer "is main green?" without anyone opening a dashboard.

- `GET /build/definitions` lists the build pipelines set up in a project.
- `POST /build/definitions` creates a new build pipeline.
- `POST /build/builds` queues a build of a chosen pipeline on a chosen branch.
- `GET /build/builds` lists recent builds, filtered by status, result or who asked for them.
- `GET /build/builds/{buildId}` tells you whether a build succeeded and what code it ran against.

### Manage code reviews

[Software Construction Management](https://apis.io/capabilities/software-construction-management/) covers the day-to-day handling of code: repositories, commits and pull requests. A pull request is a proposed change that teammates review before it is merged in. Automating it means you can open, comment on and close reviews from your own tools.

- `GET /git/repositories/{repositoryId}/pullrequests` lists the open pull requests in a repository.
- `POST /git/repositories/{repositoryId}/pullrequests` opens a new pull request.
- `PATCH /git/repositories/{repositoryId}/pullrequests/{pullRequestId}` completes, abandons or retargets one.
- `POST /git/repositories/{repositoryId}/pullrequests/{pullRequestId}/threads` leaves a review comment.
- `GET /git/repositories/{repositoryId}/commits` lists commits, for example between two dates.

### Ship releases to each environment

[Software Release & Deployment Management](https://apis.io/capabilities/software-release-deployment-management/) is about moving a finished build into testing, staging and production in a controlled way.

- `GET /release/definitions` lists the release pipelines in your project.
- `POST /release/releases` starts a new release, optionally as a draft.
- `GET /release/releases/{releaseId}` shows the deployment status of each environment.
- `GET /release/deployments` lists deployments, so you can see which failed last week.

### Keep the backlog moving

[Product Discovery & Backlog Management](https://apis.io/capabilities/product-discovery-backlog-management/) covers the work items your team plans and tracks: bugs, tasks and stories.

- `POST /wit/workitems/{type}` files a new bug or task.
- `GET /wit/workitems/{id}` returns the current state of a work item.
- `PATCH /wit/workitems/{id}` changes its state or assignee, or links it to another item.

### Tell other systems when things happen

With [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/) you can have Azure DevOps call your own endpoint when something happens, like a code push. `POST /hooks/subscriptions` sets that up and `GET /hooks/subscriptions` lists what is already in place. Testing has its own capability too, [Software Quality Engineering](https://apis.io/capabilities/software-quality-engineering/), where `POST /testplan/plans` creates a test plan for a sprint.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order to finish one job. These are written in Arazzo, an open format for describing those recipes so software can follow them.

- [Provision a Build Definition and Run It](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-build-definition-provision-workflow/) creates a build pipeline, confirms it, and queues its first build.
- [Queue and Monitor a Build](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-build-queue-monitor-workflow/) starts a build and checks on it until it finishes.
- [Retrieve Artifacts of the Latest Successful Build](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-build-artifacts-retrieval-workflow/) finds the newest passing build and lists what it produced.
- [Create a YAML Pipeline and Start Its First Run](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-pipeline-create-run-workflow/) sets up a pipeline from a file in your repository and runs it.
- [Commit a File via a Git Push](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-git-push-commit-workflow/) pushes a new commit to a branch and confirms it landed.
- [Project Repository Inventory](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-project-repository-inventory-workflow/) lists a project's repositories, branches and pull requests.
- [Board Bug Acknowledgement](https://apis.io/arazzos/microsoft-azure-devops/microsoft-azure-devops-board-bug-comment-workflow/) queries a board column and acknowledges the top bug.

## Ask for it in plain language

We publish a conversational overlay for these APIs, which maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions it covers:

- "Which builds failed on the main branch recently?"
- "How do I kick off a build of a specific definition on a chosen branch?"
- "Which pull requests are still open against main in a repository?"
- "How do I file a new bug in Azure Boards?"
- "What is the deployment status of each environment in a release?"
- "How do I send a webhook to my endpoint whenever code is pushed?"

You can see one of them in the [Build Definitions phrasing overlay](https://apis.io/overlays/microsoft-azure-devops/microsoft-azure-devops-build-definitions-api-phrasing-overlay/).

## Getting started

Azure DevOps is paid with a free trial and self-serve signup. One example from the [Pricing section of the profile](https://apis.io/providers/microsoft-azure-devops/#pricing) is $40 per extra Microsoft-hosted CI/CD parallel job. Microsoft's documentation covers the [Core API](https://learn.microsoft.com/en-us/rest/api/azure/devops/core/), the [Graph API](https://learn.microsoft.com/en-us/rest/api/azure/devops/graph/) and [authentication](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/authentication-guidance).

On APIs.io you can browse the full [Azure DevOps profile](https://apis.io/providers/microsoft-azure-devops/) and individual APIs such as the [Core API](https://apis.io/apis/microsoft-azure-devops/azure-devops-core-api/), the [Search API](https://apis.io/apis/microsoft-azure-devops/azure-devops-search-api/), the [Audit API](https://apis.io/apis/microsoft-azure-devops/azure-devops-audit-api/) and the [Policy API](https://apis.io/apis/microsoft-azure-devops/azure-devops-policy-api/).

Pick the one chore your team repeats most, probably "did the build pass?", and automate that first.
