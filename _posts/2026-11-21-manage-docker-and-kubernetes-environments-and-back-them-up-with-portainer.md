---
published: true
layout: post
title: 'Manage Docker And Kubernetes Environments And Back Them Up With Portainer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-docker-and-kubernetes-environments-and-back-them-up-with-portainer.png
date: 2026-11-21 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Portainer
  - IT Infrastructure Management
  - Deployment Orchestration
  - Disaster Recovery & Resilience
  - Container Management
  - Kubernetes
---

Your software runs in containers, maybe on a few servers in the office, some in the cloud and a handful at remote sites, and keeping track of what is running where, who can change it, and whether you could recover if it all went down is a full-time job. Portainer gives you one console for all of it, and an API so your scripts, your deployment pipeline or an AI assistant can do the same work without clicking through that console. An API is just a way for one piece of software to ask another to do something. Everything I have catalogued is on the [Portainer APIs.io profile](https://apis.io/providers/portainer/).

## What Portainer does

Portainer provides a centralized management platform for Kubernetes, Docker, Swarm and Podman workloads across many clusters. Containers are a way of packaging an application so it runs the same everywhere; Kubernetes and Docker are the most common tools for running them. Portainer adds enterprise sign-in features such as SSO, LDAP and OIDC, GitOps deployment workflows (deploying whatever is in a code repository) and self-service guardrails, aimed at teams that govern containerized applications across on-premises, cloud and edge environments. The company is at [portainer.io](https://www.portainer.io/).

## What you can get done

### [IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/)

Portainer calls each server or cluster it manages an environment. These calls let you keep an inventory of them and see what is running inside, which is the starting point for any audit or capacity plan.

- `GET /endpoints` lists every environment Portainer manages.
- `POST /endpoints` registers a new environment, such as a new server or cluster.
- `GET /endpoints/{id}` inspects one environment in detail.
- `GET /kubernetes/{id}/applications` lists the applications running across all namespaces in a Kubernetes cluster.
- `DELETE /endpoints/{id}` removes an environment you have retired.

### [Deployment Orchestration](https://apis.io/capabilities/deployment-orchestration/)

A stack is a group of containers that make up one application. Managing stacks through the API means a release can be pushed, inspected or rolled back by your pipeline instead of by hand, including at remote edge sites.

- `GET /stacks` lists your stacks.
- `GET /stacks/{id}/file` retrieves the file that defines a stack, handy for checking exactly what is deployed.
- `PUT /stacks/{id}` updates a stack, which is how a new version goes out.
- `PUT /stacks/{id}/associate` attaches an orphaned stack to a new environment.
- `GET /edge_stacks` lists the stacks deployed to edge locations.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

Who can touch production matters. These calls manage users and resource controls, the rules for who can see or change a given resource.

- `POST /users` creates a user.
- `GET /users/{id}/memberships` shows which teams a user belongs to.
- `POST /resource_controls` sets who can access a resource.
- `DELETE /users/{id}` removes a user.

### [Disaster Recovery & Resilience](https://apis.io/capabilities/disaster-recovery-resilience/)

If the management console itself is lost, you want to get it back quickly.

- `POST /backup` creates an archive with a snapshot of Portainer's system data.
- `POST /restore` restores the system from a backup file.

Scheduling that backup call nightly is about the cheapest insurance you can buy.

## Getting started

Portainer is open core, an open source project plus a commercial product, with freemium self-serve signup. The [Pricing section of the profile](https://apis.io/providers/portainer/#pricing) records a Starter plan at $1,045/yr. The [Portainer documentation](https://docs.portainer.io/) covers installing it and using the API.

On APIs.io, read the [Portainer Auth API](https://apis.io/apis/portainer/portainer-auth-api/) first to see how your scripts sign in, then the [Portainer Endpoints API](https://apis.io/apis/portainer/portainer-endpoints-api/), the [Portainer Backup API](https://apis.io/apis/portainer/portainer-backup-api/) and the [Portainer Edge Stacks API](https://apis.io/apis/portainer/portainer-edge-stacks-api/). The rest is on the [Portainer profile](https://apis.io/providers/portainer/).

If you do one thing this week, script the backup call and confirm a restore actually works.
