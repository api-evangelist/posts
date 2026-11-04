---
published: true
layout: post
title: 'Host Your Code, Track Issues And Ship Releases On Your Own Servers With Gitea'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/host-your-code-track-issues-and-ship-releases-on-your-own-servers-with-gitea.png
date: 2026-11-04 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Gitea
  - Software Construction Management
  - Software Product Engineering Management
  - Package Registries & Distribution
  - DevOps
  - Version Control
---

Maybe your team writes software and you want the code, the bug reports and the release history living somewhere you control, not on someone else's cloud. Maybe you already have that, and what you really want is for the busywork to happen on its own: a new project set up the same way every time, an issue opened when something breaks, a release published when the work is done. [Gitea](https://apis.io/providers/gitea/) can do all of this, and it does it through an API, a way for software to talk directly to other software, so your scripts, your other tools or an AI assistant can run it for you.

## What Gitea does

Gitea is an open-source, self-hosted Git service. Git is the system most developers use to track every change to their code, and a Git service is the place where that code lives and where people review each other's work. Gitea bundles code hosting, code review, issue tracking, project boards, a package registry and a build system it calls Gitea Actions, which is compatible with GitHub Actions. The project is governed by CommitGo, Inc., which also sells Gitea Enterprise for companies running it themselves and Gitea Cloud for those who would rather have it hosted. More on the [Gitea website](https://about.gitea.com/).

## What you can get done

### [Software Construction Management](https://apis.io/capabilities/software-construction-management/)

This is the heart of it, with 197 operations behind it: repositories, the folders where a project's code and history live. Being able to create, move and tidy them by API means you can bring a project over from another server in one step and keep every project configured the same way.

- `POST /repos/migrate` imports an existing repository from another Git server.
- `GET /repos/search` finds repositories matching a keyword across the whole server.
- `GET /repos/{owner}/{repo}` looks up one repository's details, like its default branch and visibility.
- `PATCH /repos/{owner}/{repo}` changes a repository's settings, such as renaming it or archiving it.

### [Software Product Engineering Management](https://apis.io/capabilities/software-product-engineering-management/)

Issues are the to-do list of a software team: bugs, feature requests and questions. With 69 operations here, your monitoring tools or help desk can open issues automatically, and you can report on open work across every project at once.

- `GET /repos/issues/search` searches issues across every repository you have access to.
- `GET /repos/{owner}/{repo}/issues` lists one repository's issues, filtered by label or milestone.
- `POST /repos/{owner}/{repo}/issues` opens a new issue, with people, labels and a milestone attached.
- `GET /repos/{owner}/{repo}/issues/comments` pulls every issue comment posted in a repository.

### [Package Registries & Distribution](https://apis.io/capabilities/package-registries-distribution/)

A package is a bundle of finished code that other projects install. Gitea keeps a registry of them, so you can see what has been published and clean out what you no longer want.

- `GET /packages/{owner}` lists the packages a user or organization has published.
- `GET /packages/{owner}/{type}/{name}` lists every published version of a package.
- `GET /packages/{owner}/{type}/{name}/-/latest` gets the newest version.
- `DELETE /packages/{owner}/{type}/{name}` removes a package and all of its versions.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them.

- [Bootstrap Repository With Tracking Issue](https://apis.io/arazzos/gitea/gitea-bootstrap-repo-with-tracking-issue-workflow/) creates a repository, opens a tracking issue in it and adds a kickoff comment.
- [Feature Branch To Merged Pull Request](https://apis.io/arazzos/gitea/gitea-branch-pull-request-merge-workflow/) creates a branch, opens a pull request and merges it.
- [Commit File On New Branch And Open Pull Request](https://apis.io/arazzos/gitea/gitea-commit-file-and-open-pr-workflow/) adds a file on a new branch and asks for it to be reviewed.
- [Draft Then Publish Release](https://apis.io/arazzos/gitea/gitea-draft-then-publish-release-workflow/) creates a draft release, attaches a file, then publishes it.
- [Create Milestone With Tracked Issue](https://apis.io/arazzos/gitea/gitea-milestone-with-issue-workflow/) sets up a milestone and opens an issue assigned to it.
- [Comment And Close Issue](https://apis.io/arazzos/gitea/gitea-comment-and-close-issue-workflow/) posts a closing comment and closes the issue.

## Ask for it in plain language

We have written a conversational overlay for Gitea, a layer on top of its API description that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions it maps:

- "How do I import an existing repository from another git server into Gitea?"
- "Can I search issues across every Gitea repository I have access to at once?"
- "How do I archive a repo or make it private after it was created?"
- "Can I assign people, labels and a milestone while filing an issue?"
- "What is the newest published version of a package?"

You can see one of them on the [Gitea Issue API phrasing overlay](https://apis.io/overlays/gitea/gitea-issue-api-phrasing-overlay/).

## Getting started

Gitea is open core: an open-source project you can run yourself, plus a commercial hosted product, with a free way in and self-serve signup. Start with the documentation for [Gitea Actions](https://docs.gitea.com/usage/actions/overview), [packages](https://docs.gitea.com/usage/packages/overview) and [webhooks](https://docs.gitea.com/usage/webhooks), and the guide to [OAuth2 authentication](https://docs.gitea.com/development/oauth2-provider). On APIs.io you can browse the [Gitea profile](https://apis.io/providers/gitea/), the [Repository API](https://apis.io/apis/gitea/gitea-repository-api/), the [Issue API](https://apis.io/apis/gitea/gitea-issue-api/) and the [Actions API](https://apis.io/apis/gitea/gitea-actions-api/). If your team keeps doing the same setup by hand for every new project, pick that one chore and let the Bootstrap workflow do it.
