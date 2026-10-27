---
published: true
layout: post
title: 'Automate Clusters, User Access, And Patching With Red Hat'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/automate-clusters-user-access-and-patching-with-red-hat.png
date: 2026-10-27 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Red Hat
  - IT Infrastructure Management
  - Identity & Access Management
  - Vulnerability Management
  - Hybrid Cloud
  - Enterprise
---

If you are responsible for the servers and cloud systems your business runs on, the work never really stops: spin up an environment for a new project, give a new hire access, run the same maintenance job across a fleet of machines, and find out which systems still need a security patch. Red Hat lets you do much of that through APIs, which are a way for other software, or an AI assistant, to carry out those tasks for you instead of someone clicking through consoles. Everything I have catalogued is on their [APIs.io profile](https://apis.io/providers/red-hat/).

## What Red Hat does

Red Hat provides enterprise open source software, including Linux, cloud, container, and Kubernetes technologies. Kubernetes is the system many companies use to run their applications in containers across groups of servers called clusters. Red Hat describes itself as a leading provider in that space. Around those products it publishes APIs for subscriptions, cluster management, security, cost tracking, image building, and patching. More at [redhat.com](https://www.redhat.com).

## What you can get done

### [IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/)

Creating and looking after the clusters your applications run on, so a new environment is a request to software rather than a ticket that waits in a queue.

- `GET /api/clusters_mgmt/v1/clusters` lists your clusters.
- `POST /api/clusters_mgmt/v1/clusters` creates a new cluster.
- `GET /api/clusters_mgmt/v1/clusters/{cluster_id}` gets the details of one cluster.
- `PATCH /api/clusters_mgmt/v1/clusters/{cluster_id}` changes a cluster.
- `DELETE /api/clusters_mgmt/v1/clusters/{cluster_id}` removes a cluster you no longer need.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

Deciding who can sign in and how. This covers adding users and connecting the login systems your company already uses.

- `GET /admin/realms/{realm}/users` lists users.
- `POST /admin/realms/{realm}/users` creates a user.
- `GET /admin/realms/{realm}/identity-provider/instances` lists the outside login providers connected.
- `POST /api/clusters_mgmt/v1/clusters/{cluster_id}/identity_providers` connects a login provider to a cluster.

### [IT Operations Management](https://apis.io/capabilities/it-operations-management/)

Repeatable maintenance. A job template is a saved, reusable automation job, such as updating software across many machines.

- `GET /api/v2/job_templates/` lists job templates.
- `POST /api/v2/job_templates/` creates one.
- `PATCH /api/v2/job_templates/{id}/` changes one.
- `DELETE /api/v2/job_templates/{id}/` removes one.

### [Vulnerability Management](https://apis.io/capabilities/vulnerability-management/)

Knowing where you are exposed. Errata are Red Hat's published fixes and advisories for its software.

- `GET /katello/api/v2/errata` lists available errata.
- `GET /api/v2/hosts/{id}/errata` lists the errata that apply to one machine.
- `GET /repository/{repository}/manifest/{manifestref}/security` gets security information for a container image.

## Workflows that put it together

A workflow is a recipe of several API calls in a set order that finishes one job.

- [Build Inventory and Template](https://apis.io/arazzos/red-hat/red-hat-aap-build-inventory-and-template-workflow/) resolves an organization, creates an inventory, builds a job template on it, and launches a first run.
- [Provision and Run Job](https://apis.io/arazzos/red-hat/red-hat-aap-provision-and-run-job-workflow/) creates a job template, launches it, and follows the job to completion.
- [Launch, Monitor, and Cancel Job](https://apis.io/arazzos/red-hat/red-hat-aap-launch-monitor-cancel-job-workflow/) runs an existing job and cancels it if it stalls.
- [Inspect a System](https://apis.io/arazzos/red-hat/red-hat-insights-inspect-system-workflow/) pulls fleet statistics, finds a system by name, and retrieves its detail.
- [Triage a Rule's Affected Systems](https://apis.io/arazzos/red-hat/red-hat-insights-rule-affected-systems-workflow/) finds a high-risk advisor rule and lists the systems it affects.
- [Provision Realm Role and User](https://apis.io/arazzos/red-hat/red-hat-keycloak-provision-role-and-user-workflow/) confirms a realm, creates a role, and creates a user in it.

## Getting started

Red Hat is listed as enterprise with self-serve signup. Start with the [Red Hat management API documentation](https://access.redhat.com/management/api) and read about [API authentication](https://access.redhat.com/articles/3626371). For specific products there is documentation for [Advanced Cluster Management](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15) and [Advanced Cluster Security](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_security_for_kubernetes/4.5). On APIs.io, look at the [Subscription Management API](https://apis.io/apis/red-hat/red-hat-subscription-management-api/), the [Patch API](https://apis.io/apis/red-hat/red-hat-patch-api/), the [Vulnerability Management API](https://apis.io/apis/red-hat/red-hat-vulnerability-management-api/), and the [Cost Management API](https://apis.io/apis/red-hat/red-hat-cost-management-api/), all from the [Red Hat profile](https://apis.io/providers/red-hat/).

Start with the patching question, which systems need what, because it is the one that tends to keep people up at night.
