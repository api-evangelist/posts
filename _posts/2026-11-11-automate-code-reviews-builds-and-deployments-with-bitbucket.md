---
published: true
layout: post
title: 'Automate Code Reviews, Builds And Deployments With Bitbucket'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/automate-code-reviews-builds-and-deployments-with-bitbucket.png
date: 2026-11-11 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Bitbucket
  - Software Construction Management
  - Continuous Integration Management
  - Software Release & Deployment Management
  - DevOps
  - Developer Tools
---

If you run a software team, a lot of the week goes to small coordination chores: making sure the right person reviews every change, checking whether the build passed, knowing what got deployed to production and when, and keeping the bug list in order. Most teams do this by clicking around a web interface. If your code lives in Bitbucket, all of that can also be done through an API, which is a way for software, a script, or an AI assistant to do the clicking for you. I keep a profile of [Bitbucket on APIs.io](https://apis.io/providers/bitbucket/) that maps out what is possible.

## What Bitbucket does

Bitbucket is a Git-based source code repository hosting service owned by Atlassian. It offers commercial plans and free accounts, along with CI/CD pipelines (CI/CD means automatically building, testing and shipping code every time it changes), code reviews through pull requests, and collaboration tools for development teams. You can find it at [bitbucket.org](https://bitbucket.org/).

## What you can get done

### [Software Construction Management](https://apis.io/capabilities/software-construction-management/)

This is the day-to-day of writing and reviewing code: commits, pull requests and who signs off on them. The useful business outcome is consistency. You can make sure every new pull request automatically lands in front of the right reviewers, and trace any change back to where it was reviewed.

- `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests` finds the pull requests that contain a given commit.
- `GET /repositories/{workspace}/{repo_slug}/default-reviewers` lists who gets added automatically as a reviewer.
- `PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}` adds someone to that list.
- `GET /repositories/{workspace}/{repo_slug}/effective-default-reviewers` shows reviewers including those inherited from the project.
- `GET /repositories/{workspace}/{repo_slug}/commit/{commit}` looks up a single commit, its author and message.

### [Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/)

Continuous integration is the habit of building and testing every change automatically. Through the API you can start a build, see how recent builds went, and let an outside build tool report its results back onto the code, so everyone sees a green or red mark in one place.

- `GET /repositories/{workspace}/{repo_slug}/pipelines` lists pipeline runs in a repository.
- `POST /repositories/{workspace}/{repo_slug}/pipelines` starts a pipeline run.
- `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses` lists the build results on a commit.
- `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build` reports a build result from another system.
- `POST /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables` adds a setting or secret to one deployment environment.

### [Software Release & Deployment Management](https://apis.io/capabilities/software-release-deployment-management/)

Once code is built it has to be shipped somewhere. This covers the deployment history and the access keys build servers use to pull your code, which matters both for knowing what is live and for keeping access tidy.

- `GET /repositories/{workspace}/{repo_slug}/deployments` lists what has been deployed from a repository.
- `GET /repositories/{workspace}/{repo_slug}/deploy-keys` lists the access keys installed on a repository.
- `POST /repositories/{workspace}/{repo_slug}/deploy-keys` gives a build server access to a single repository.
- `DELETE /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}` revokes a key, for example one that leaked.

### [Software Quality Engineering](https://apis.io/capabilities/software-quality-engineering/)

Bitbucket repositories can carry their own issue tracker. The API lets you file bugs from other systems, such as a support desk, and back the whole list up.

- `GET /repositories/{workspace}/{repo_slug}/issues` lists the issues filed against a repository.
- `POST /repositories/{workspace}/{repo_slug}/issues` files a new issue with priority, kind and assignee.
- `POST /repositories/{workspace}/{repo_slug}/issues/export` starts an export of every issue to a zip archive.
- `GET /repositories/{workspace}/{repo_slug}/components` lists the components issues can be filed against.

### [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/)

A webhook is a message Bitbucket sends to another system the moment something happens, such as a push. This is how you get chat notifications, trigger downstream jobs, or keep a dashboard current without anyone checking by hand.

- `GET /hook_events/{subject_type}` lists the events you can subscribe to.
- `GET /repositories/{workspace}/{repo_slug}/hooks` lists the webhooks installed on a repository.
- `POST /repositories/{workspace}/{repo_slug}/hooks` creates a webhook.
- `DELETE /repositories/{workspace}/{repo_slug}/hooks/{uid}` removes one that is no longer needed.

## Ask for it in plain language

Bitbucket's operations carry a conversational overlay, which maps plain questions to the API call that answers them, so an AI assistant knows which call to make. These are the kinds of questions it maps:

- "Which pull request was this commit reviewed and merged in?"
- "How do I make someone review every new pull request in a repository automatically?"
- "Did the builds pass on this commit?"
- "What has been deployed from this repository recently?"
- "How do I revoke a deploy key from one repo?"
- "How do I get notified when someone pushes to one repo?"

You can see one of them in the [Bitbucket Branch Restrictions API phrasing overlay](https://apis.io/overlays/bitbucket/bitbucket-branch-restrictions-api-phrasing-overlay/).

## Getting started

Bitbucket is a hosted service with self-serve signup, and you call its endpoints directly. It has a Free plan at $0; the rest of the plans are in the [Bitbucket pricing section](https://apis.io/providers/bitbucket/#pricing). Start with the [API reference](https://developer.atlassian.com/bitbucket/api/2/reference/) and the [authentication guide](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication). On APIs.io, the [Bitbucket profile](https://apis.io/providers/bitbucket/) links every API, including the [Pipelines API](https://apis.io/apis/bitbucket/bitbucket-pipelines-api/), the [Deployments API](https://apis.io/apis/bitbucket/bitbucket-deployments-api/), the [Commit statuses API](https://apis.io/apis/bitbucket/bitbucket-commit-statuses-api/) and the [Issue tracker API](https://apis.io/apis/bitbucket/bitbucket-issue-tracker-api/).

Pick the one chore your team repeats most, like assigning reviewers or checking builds, and automate that first.
