---
published: true
layout: post
title: 'Create Jira Issues, Publish Confluence Pages And Manage Team Access With Atlassian'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/create-jira-issues-publish-confluence-pages-and-manage-team-access-with-atlassian.png
date: 2026-10-30 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Atlassian
  - Project Management
  - Identity & Access Management
  - Continuous Integration Management
  - Productivity
  - Collaboration
---

If your team runs on Jira and Confluence, a good part of your week is probably spent copying. A customer complaint becomes a ticket by hand, a status report gets retyped into a wiki page, and every new hire means someone working through a list of groups and products to set up. You may be looking for a way to stop doing that. [Atlassian](https://apis.io/providers/atlassian/) makes this work available through APIs, a way for software to talk directly to other software, so your other systems, or an AI assistant, can open tickets, publish pages and manage who has access for you.

## What Atlassian does

Atlassian is a software company that develops collaboration, productivity and project management tools. The names you are likely to know are Jira for tracking work and Confluence for team documents, along with Jira Service Management for service desks and Bitbucket for storing software code. Each of those has its own APIs, and all of them are profiled in one place on APIs.io. More on the [Atlassian website](https://www.atlassian.com/).

## What you can get done

### Turn requests into tracked work

[Project Management](https://apis.io/capabilities/project-management/) here is Jira's issue tracking. An issue is one unit of work: a task, a bug or a request. Once software can create issues, the form on your website, the alert from your monitoring tool or the email from a customer can land in the right project without anyone retyping it.

- `POST /rest/api/3/issue` creates one issue or subtask.
- `POST /rest/api/3/issue/bulk` creates up to 50 issues in one request, handy for moving a list out of a spreadsheet.
- `GET /rest/api/3/issue/createmeta` shows which projects and issue types you are allowed to create in.
- `PUT /rest/api/3/issue/archive` archives up to 1,000 issues by ID or key.
- `POST /rest/api/3/issue/archive` archives up to 100,000 issues matching a search, for when an old project needs clearing out.

### Control who has access

[Identity & Access Management](https://apis.io/capabilities/identity-access-management/) is about joiners and leavers. Connect it to your HR process and new starters arrive with the right access, while people who leave lose it the same day instead of whenever someone remembers.

- `GET /v1/orgs/{orgId}/users` lists the accounts your organization manages.
- `POST /v2/orgs/{orgId}/users/invite` invites people to your organization.
- `DELETE /v2/orgs/{orgId}/directories/{directoryId}/users/{accountId}` removes someone from a directory.
- `GET /v2/orgs/{orgId}/directories/{directoryId}/users/count` gives you a headcount without listing everyone.
- `GET /v1/orgs/{orgId}/groups` lists the groups in your organization.

### See whether your software builds are healthy

[Continuous Integration Management](https://apis.io/capabilities/continuous-integration-management/) covers Bitbucket Pipelines, which automatically build and test code when it changes. If you manage developers rather than being one, this is what lets a dashboard answer "did that pass?" without interrupting anybody.

- `GET /repositories/{workspace}/{repo_slug}/pipelines` lists the pipeline runs for a code repository.
- `POST /repositories/{workspace}/{repo_slug}/pipelines` starts a new run.
- `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses` shows the build results for one change.

### Follow your releases

[Software Release & Deployment Management](https://apis.io/capabilities/software-release-deployment-management/) tracks what went out and who holds the keys. A deploy key is a credential that gives a machine access to one repository, which makes it worth auditing.

- `GET /repositories/{workspace}/{repo_slug}/deployments` shows the deployment history of a repository.
- `GET /repositories/{workspace}/{repo_slug}/deploy-keys` lists the deploy keys with access to a repository.
- `DELETE /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}` revokes one right away.

### Tell your other systems when something happens

[Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/) sets up webhooks, messages Atlassian sends to a web address of yours when an event happens across a Bitbucket workspace.

- `GET /workspaces/{workspace}/hooks` lists the webhooks installed on a workspace.
- `POST /workspaces/{workspace}/hooks` creates one.
- `DELETE /workspaces/{workspace}/hooks/{uid}` stops one for good.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 17 for Atlassian, including:

- [Jira Create and Assign Issue](https://apis.io/arazzos/atlassian/atlassian-create-and-assign-issue-workflow/) creates an issue, assigns it to someone and confirms the assignment.
- [Jira Create Issue and Transition](https://apis.io/arazzos/atlassian/atlassian-create-issue-and-transition-workflow/) creates an issue and moves it to a new status.
- [Jira Create Project and First Issue](https://apis.io/arazzos/atlassian/atlassian-create-project-and-first-issue-workflow/) stands up a new project and seeds it with its first issue.
- [Confluence Create and Update Page](https://apis.io/arazzos/atlassian/atlassian-create-and-update-page-workflow/) creates a page, reads its version and publishes an updated body.
- [Confluence Create Child Page](https://apis.io/arazzos/atlassian/atlassian-create-child-page-workflow/) confirms a parent page and creates a new page under it.
- [Confluence Create Page with Label](https://apis.io/arazzos/atlassian/atlassian-create-page-with-label-workflow/) creates a page and tags it so it can be found later.

## Ask for it in plain language

Our conversational overlay for Atlassian maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "Can I create many Jira issues in a single request?"
- "Can I archive every issue that matches a JQL search in one go?"
- "Can I invite several people to my organization by email at once?"
- "Did CI pass on this commit?"
- "How do I revoke a deploy key's access to one repository?"
- "How do I get notified of events from every repository in a workspace?"

You can see one in the [Atlassian Analytics phrasing overlay](https://apis.io/overlays/atlassian/atlassian-analytics-api-phrasing-overlay/).

## Getting started

Atlassian has a free tier with self-serve signup, and you call its hosted service. The Jira Software reference is a good place to begin: read about the [backlog](https://developer.atlassian.com/cloud/jira/software/rest/api-group-backlog/), [boards](https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/) and [epics](https://developer.atlassian.com/cloud/jira/software/rest/api-group-epic/). On APIs.io, see the [Atlassian profile](https://apis.io/providers/atlassian/), the [Jira Software Board API](https://apis.io/apis/atlassian/atlassian-jira-software-board-api/), the [Jira Software Sprint API](https://apis.io/apis/atlassian/atlassian-jira-software-sprint-api/) and the [Jira Service Management Customer API](https://apis.io/apis/atlassian/atlassian-jira-service-management-customer-api/). Pick the one ticket your team retypes most often and automate that first.
