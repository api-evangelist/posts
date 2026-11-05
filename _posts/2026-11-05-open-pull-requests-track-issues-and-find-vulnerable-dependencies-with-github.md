---
published: true
layout: post
title: 'Open Pull Requests, Track Issues And Find Vulnerable Dependencies With GitHub'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/open-pull-requests-track-issues-and-find-vulnerable-dependencies-with-github.png
date: 2026-11-05 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - GitHub
  - Software Construction Management
  - Continuous Integration Management
  - Vulnerability Management
  - Software Product Engineering Management
  - Software Development
  - Developer Tools
---

Your company's code lives on GitHub, and so does a growing share of the work around it: the bug reports, the review conversations, the automated tests, and the security warnings about libraries you depend on. Most people deal with all of it through the website. But if you have ever wanted a report of every open security alert across the whole company, or a ticket opened automatically when a customer emails support, or a build result posted against a commit from a system GitHub has never heard of, that is API work. [GitHub](https://apis.io/providers/github/) exposes nearly everything you can do on the site through an API, a way for software to talk directly to other software, so your other tools, a script or an AI assistant can do it for you.

## What GitHub does

GitHub is where software teams store code and work on it together. The GitHub REST API lets developers interact programmatically with GitHub resources including repositories, users, organizations, pull requests, issues, and more. On APIs.io we track 39 separate APIs under the GitHub umbrella, from the ones everybody knows, like [Repos](https://apis.io/apis/github/github-repos-api/) and [Issues](https://apis.io/apis/github/github-issues-api/), to narrower ones like [Releases](https://apis.io/apis/github/github-releases-api/), [Deployments](https://apis.io/apis/github/github-deployments-api/) and [Search](https://apis.io/apis/github/github-search-api/). GitHub's own [REST documentation](https://docs.github.com/en/rest/issues) is organised the same way, one page per area.

## What you can get done

We have mapped GitHub's operations to 16 business capabilities. These are the four most people will actually reach for.

### [Software Construction Management](https://apis.io/capabilities/software-construction-management/)

A pull request is a proposed change to the code, bundled with the discussion about whether to accept it. This is the largest capability, with 203 operations covering pull requests, review comments and the raw Git objects underneath, and it is where an automated reviewer or a release bot does its work.

- `GET /repos/{owner}/{repo}/pulls` lists the pull requests open in a repository, optionally only those aimed at a particular branch.
- `POST /repos/{owner}/{repo}/pulls` opens a pull request from one branch into another, as a draft if you want.
- `GET /repos/{owner}/{repo}/pulls/comments` lists every line-level review comment across all pull requests in a repository, which is how you audit review activity.
- `PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}` edits a review comment someone left on a diff.
- `POST /repos/{owner}/{repo}/git/blobs` uploads a file's raw content into the repository without cloning anything.

### [Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/)

Continuous integration means every change is built and tested automatically. GitHub Actions is GitHub's own system for that, and check runs are how any test system, GitHub's or someone else's, reports a pass or fail against a specific commit. There are 149 operations here.

- `POST /repos/{owner}/{repo}/check-runs` lets your own build system report a result against a commit, with a conclusion and a summary.
- `GET /repos/{owner}/{repo}/check-runs/{check_run_id}` reads the status and conclusion of one check run.
- `GET /orgs/{org}/actions/cache/usage` tells you how much Actions cache storage your organization is using in total.
- `GET /enterprises/{enterprise}/actions/permissions/workflow` shows what permissions workflows get by default across your enterprise, including whether they may approve pull requests.
- `PUT /enterprises/{enterprise}/actions/permissions/workflow` sets those defaults, for example making the workflow token read-only everywhere.

### [Vulnerability Management](https://apis.io/capabilities/vulnerability-management/)

Dependabot is GitHub's scanner for known vulnerabilities in the libraries your code depends on. Through the API you can pull every alert across the company into one place, which is the report security teams keep asking for.

- `GET /enterprises/{enterprise}/dependabot/alerts` lists vulnerable dependencies open across every repository in your enterprise, filterable to just the critical ones.
- `GET /orgs/{org}/dependabot/alerts` does the same for one organization, and can narrow to alerts affecting a single package.
- `PUT /orgs/{org}/dependabot/secrets/{secret_name}` stores a credential, such as a private registry token, that Dependabot needs across the organization.
- `GET /advisories` lists GitHub's global security advisories, and `GET /advisories/{ghsa_id}` reads one of them.

### [Software Product Engineering Management](https://apis.io/capabilities/software-product-engineering-management/)

Issues are GitHub's tickets: bugs, feature requests and tasks, with assignees, labels and milestones. Opening them by API is how a support desk or a monitoring system can file work directly with the engineers.

- `GET /repos/{owner}/{repo}/issues` lists a repository's issues, filterable by milestone, assignee, creator or who was mentioned.
- `POST /repos/{owner}/{repo}/issues` files a new issue, with assignees, labels and a milestone set at the moment it is opened.
- `GET /repos/{owner}/{repo}/assignees` lists who can be handed issues in a repository.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them, and GitHub has 20 of them on APIs.io.

- [Create Repository and Open First Issue](https://apis.io/arazzos/github/github-create-repository-and-issue-workflow/) creates a repository and opens its first tracking issue, the starting point for any new project.
- [Create Label and Triage an Issue](https://apis.io/arazzos/github/github-create-label-and-triage-issue-workflow/) makes sure a triage label exists, opens an issue and applies the label.
- [Create a Milestone and Assign an Issue to It](https://apis.io/arazzos/github/github-create-milestone-and-issue-workflow/) creates a milestone, then opens an issue inside it.
- [Commit a File to a New Branch](https://apis.io/arazzos/github/github-commit-file-to-new-branch-workflow/) branches off the default branch and commits a new file to it.
- [Dispatch a Workflow and Poll the Run](https://apis.io/arazzos/github/github-dispatch-workflow-and-poll-run-workflow/) triggers a GitHub Actions workflow, finds the run it started and waits for it to finish.

## Ask for it in plain language

We have written conversational overlays for GitHub, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. There are 33 of them, one per API. These are the kinds of questions they map:

- "What pull requests are open in a repository right now?"
- "How do I open a pull request from my feature branch into main?"
- "Which vulnerable dependencies are open across every repo in our enterprise?"
- "How does my app report a CI result against a specific commit?"
- "Can I set assignees, labels and a milestone at the moment I open an issue?"
- "What issues are assigned to me across all my repos, including organization repositories?"

You can see one of them on the [Actions API phrasing overlay](https://apis.io/overlays/github/github-actions-api-phrasing-overlay/).

## Getting started

GitHub is a freemium, hosted service with self-serve signup: a free account can call the API straight away, and the paid tiers add the organization and enterprise features above. The documentation is split by area, for example [Issues](https://docs.github.com/en/rest/issues), [Gists](https://docs.github.com/en/rest/gists) and [Licenses](https://docs.github.com/en/rest/licenses). On APIs.io you can browse the [GitHub profile](https://apis.io/providers/github/), the [Issues API](https://apis.io/apis/github/github-issues-api/), the [Repos API](https://apis.io/apis/github/github-repos-api/) and the [Projects API](https://apis.io/apis/github/github-projects-api/). Pick the one chore your team does by hand every week on the GitHub website, and start there.
