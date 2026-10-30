---
published: true
layout: post
title: 'Run, Cancel And Re-Run Your Software Builds Automatically With GitHub Actions'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/run-cancel-and-re-run-your-software-builds-automatically-with-github-actions.png
date: 2026-10-30 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - GitHub Actions
  - Continuous Integration Management
  - Configuration & Secrets Management
  - DevOps
  - Developer Tools
---

If your business ships software, you probably know the morning routine. Someone asks whether last night's build passed, someone else goes hunting for why it failed, and a release sits waiting because the one person who knows which button to press is in a meeting. You may be searching for a way to make that routine run itself. [GitHub Actions](https://apis.io/providers/github-actions/) can do this through an API, a way for software to talk directly to other software, which means your own tools, or an AI assistant, can start, watch and clean up your builds without anyone clicking through a screen.

## What GitHub Actions does

GitHub Actions is GitHub's hosted platform for CI/CD and workflow automation. CI/CD stands for continuous integration and continuous deployment, which is the practice of automatically building, testing and releasing software every time someone changes it. If your code lives in GitHub, Actions is what runs those automated steps.

The API surface covers more than kicking off a job. It lets a caller dispatch and cancel workflow runs, check on runs and jobs, read and prune logs, artifacts and caches, rotate encrypted secrets and variables, set permissions, and manage self-hosted runners, the machines of your own that can do the work. For a business, that adds up to one thing: your delivery process becomes something other systems can operate and report on.

## What you can get done

### Trigger builds and keep track of what they produced

[Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/) is the everyday work of building and testing your software. The business outcome is simple. Releases can start from whatever system already knows it is time, whether that is a ticket closing or a schedule, and anyone can answer "did it work?" without asking an engineer. It also covers artifacts, the files a build leaves behind, such as the finished package you plan to ship.

- `GET /repos/{owner}/{repo}/actions/workflows` lists the automated workflows defined in a repository, the place your code is stored.
- `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches` starts a workflow on demand.
- `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs` shows the run history of one workflow.
- `PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable` pauses a workflow without deleting it.
- `GET /repos/{owner}/{repo}/actions/artifacts` lists the build files stored across a repository.

### Keep passwords and settings out of your code

[Configuration & Secrets Management](https://apis.io/capabilities/configuration-secrets-management/) looks after the sensitive values your builds need, like the passwords and keys that let them reach other services. A secret is one of those values, stored encrypted. A variable is a plain setting that is not sensitive. Being able to manage them from software means that when a key leaks, or a staff member leaves, you can change it in every project from one script instead of working through them by hand.

- `GET /repos/{owner}/{repo}/actions/secrets` lists the names of a repository's secrets without exposing their values.
- `PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}` creates a secret or replaces its value.
- `DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}` removes a secret.
- `GET /repos/{owner}/{repo}/actions/organization-secrets` shows which organization secrets are shared with a repository.
- `POST /repos/{owner}/{repo}/actions/variables` adds a new non-secret setting.

## Workflows that put it together

A workflow here means something slightly different from the build workflows above. It is a recipe of several API calls in order that finishes a real job, written down in a standard format called Arazzo. APIs.io catalogs 11 for GitHub Actions, including:

- [Dispatch and Track a Workflow Run](https://apis.io/arazzos/github-actions/github-actions-dispatch-and-track-run-workflow/) starts a workflow, finds the run it created, waits for it to complete and lists its jobs.
- [Inspect Failed Job Logs](https://apis.io/arazzos/github-actions/github-actions-inspect-failed-job-logs-workflow/) finds the latest failed run and the job that failed, then gets you to its log.
- [Re-run Failed Jobs and Track](https://apis.io/arazzos/github-actions/github-actions-rerun-failed-run-workflow/) re-runs only the jobs that failed in the most recent failed run and waits for the result.
- [Cancel a Workflow Run and Confirm](https://apis.io/arazzos/github-actions/github-actions-cancel-run-workflow/) requests a cancellation, checks that it took, and forces it if the run gets stuck.
- [Approve a Pending Deployment](https://apis.io/arazzos/github-actions/github-actions-approve-pending-deployment-workflow/) finds the environments waiting on sign-off, approves them and follows the run to completion.
- [Prune Repository Caches](https://apis.io/arazzos/github-actions/github-actions-prune-repo-caches-workflow/) reads cache usage and deletes the largest cache to reclaim space.

## Ask for it in plain language

Our conversational overlay for GitHub Actions maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I kick off a workflow on demand through the API?"
- "Can I see only the failed runs of one workflow on a given branch?"
- "Can I pause a scheduled workflow so it stops triggering?"
- "Can I delete a leaked repository secret by name?"
- "Which organization-level secrets can my repository's workflows access?"

You can see one in the [GitHub Actions Jobs phrasing overlay](https://apis.io/overlays/github-actions/github-actions-jobs-api-phrasing-overlay/).

## Getting started

GitHub Actions has a free tier with self-serve signup, and you call its hosted service. Start with the [Actions REST documentation](https://docs.github.com/en/rest/actions) and the [authentication guide](https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api), which explains the tokens every request needs to carry. On APIs.io, see the [GitHub Actions profile](https://apis.io/providers/github-actions/), the [Workflow Runs API](https://apis.io/apis/github-actions/github-actions-workflow-runs-api/), the [Secrets API](https://apis.io/apis/github-actions/github-actions-secrets-api/) and the [Self-Hosted Runners API](https://apis.io/apis/github-actions/github-actions-self-hosted-runners-api/). Ask whoever runs your software to wire up the failed-log workflow first, since it answers the question you already ask every morning.
