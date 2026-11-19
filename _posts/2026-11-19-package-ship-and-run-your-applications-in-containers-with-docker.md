---
published: true
layout: post
title: 'Package, Ship And Run Your Applications In Containers With Docker'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/package-ship-and-run-your-applications-in-containers-with-docker.png
date: 2026-11-19 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Docker
  - Configuration & Secrets Management
  - IT Infrastructure Management
  - Containers
  - DevOps
---

If your business runs its own software, a website, an internal tool, a customer portal, you have probably heard the complaint "it worked on my machine." Getting an application to run the same way on a laptop, a test server and in production is a real cost. [Docker](https://apis.io/providers/docker/) solves that by packaging software into containers, and everything Docker does can be driven through an API, so your build scripts, your operations tools, or an AI assistant can run it for you.

An API is a set of doors into a service that other software can knock on. A program sends a request, like "start this container" or "clean up unused storage," and gets an answer back.

## What Docker does

Docker is a platform for developers and system administrators to build, share and run applications in containers. A container packages code together with everything it depends on, so it deploys the same way in every environment. You can find them at [docker.com](https://www.docker.com/).

## What you can get done

### Keep passwords and settings out of your code

[Configuration & Secrets Management](https://apis.io/capabilities/configuration-secrets-management/) is how you hand running software the settings and secrets it needs, such as database passwords or API keys, without writing them into the code where anyone can read them. A secret is any value that must stay private.

- `POST /secrets/create` stores a new secret.
- `GET /secrets` lists the secrets you have stored.
- `POST /secrets/{id}/update` updates a secret.
- `DELETE /secrets/{id}` removes one.
- `POST /configs/create` stores a non-secret configuration, like a settings file.

### Manage the storage your applications use

[IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/) covers the machinery underneath your applications. For Docker that includes volumes, which are storage that survives when a container is stopped or replaced.

- `POST /volumes/create` creates a storage volume.
- `GET /volumes` lists your volumes.
- `GET /volumes/{name}` inspects one.
- `DELETE /volumes/{name}` removes a volume.
- `POST /volumes/prune` deletes volumes nothing is using, freeing disk space.

## Workflows that put it together

A workflow is a recipe: several calls made in a set order to finish one job. We publish these for Docker as Arazzo workflows on APIs.io.

- [Build, Tag, and Push an Image](https://apis.io/arazzos/docker/docker-build-and-push-image-workflow/) checks registry credentials, builds an image, tags it and pushes it where your servers can pull it.
- [Deploy a Replicated Swarm Service with a Secret](https://apis.io/arazzos/docker/docker-deploy-swarm-service-workflow/) creates a secret, deploys a service that runs several copies and uses it, and watches it come up.
- [Reclaim Disk Space on a Host](https://apis.io/arazzos/docker/docker-reclaim-disk-space-workflow/) measures disk use, cleans out stopped containers, unused images, volumes, networks and build cache, then measures again.
- [Snapshot a Running Container as an Image](https://apis.io/arazzos/docker/docker-commit-container-to-image-workflow/) pauses a container, saves it as a new image and tags it.
- [Create a Volume and Mount It Into a Container](https://apis.io/arazzos/docker/docker-provision-volume-workflow/) creates storage and attaches it to a running container.
- [Run a Command Inside a Running Container](https://apis.io/arazzos/docker/docker-exec-command-in-container-workflow/) runs a command in a container and reads back whether it succeeded.

## Getting started

Docker is freemium. Its Docker Personal plan is $0; the other plans are in the [Pricing section of the Docker profile](https://apis.io/providers/docker/#pricing). Everything starts at the [Docker documentation](https://docs.docker.com/).

On APIs.io you can browse the full [Docker profile](https://apis.io/providers/docker/) and APIs such as the [Container API](https://apis.io/apis/docker/docker-container-api/), the [Image API](https://apis.io/apis/docker/docker-image-api/), the [Secret API](https://apis.io/apis/docker/docker-secret-api/) and the [Service API](https://apis.io/apis/docker/docker-service-api/).

Start with the disk-space workflow: it is safe, useful on any Docker machine, and shows you how the API works in a few calls.
