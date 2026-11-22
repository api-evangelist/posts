---
published: true
layout: post
title: 'Track Code Quality Issues And Quality Gate Status With SonarQube'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/track-code-quality-issues-and-quality-gate-status-with-sonarqube.png
date: 2026-11-22 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - SonarQube
  - Software Quality Engineering
  - Code Quality
  - Security
---

You manage a software team, or you pay for one, and you want a straight answer to a simple question: is our code getting better or worse, and is anything risky about to ship? Most teams already run SonarQube to scan their code, but the answers stay inside its dashboard. Through its API, which is a way for one piece of software, or an AI assistant, to ask another for data, those answers can flow into your release process, your reports and your chat. I keep what I know about SonarQube on its [APIs.io profile](https://apis.io/providers/sonarqube/).

## What SonarQube does

SonarQube is SonarSource's code quality and code security platform. It comes as SonarQube Server, which you run yourself in several editions, as the hosted SonarQube Cloud, and as tools for the developer's editor and command line. It reads your source code and flags bugs, security weaknesses and maintainability problems. Every SonarQube Server instance exposes a Web API covering projects, issues, measures, quality gates, rules, users, webhooks and administration. SonarSource also publishes an official MCP server, so AI assistants can work with SonarQube directly. The company is at [sonarsource.com](https://www.sonarsource.com/).

## What you can get done

### [Software Quality Engineering](https://apis.io/capabilities/software-quality-engineering/)

A quality gate is SonarQube's pass-or-fail verdict on a project: a set of conditions, such as no new critical security issues, that code has to meet. Reading that verdict through the API is how teams stop a release automatically when the code is not ready, and how managers get trend reports without opening another tool.

- `GET /issues/search` searches the issues SonarQube has found, so you can pull the open security findings for a project into a report or a ticket system.
- `GET /qualitygates/list` lists the quality gates defined on your instance.
- `GET /qualitygates/project_status` returns whether a project currently passes its quality gate, the single call a release pipeline needs.
- `GET /measures/component` returns a project's measures, such as coverage, duplication and issue counts, for dashboards and trend lines.

Beyond quality engineering, SonarQube's Web API is broader than these four calls. The [SonarQube Projects API](https://apis.io/apis/sonarqube/sonarqube-projects-api/) creates and manages projects, the [SonarQube Rules API](https://apis.io/apis/sonarqube/sonarqube-rules-api/) covers the rules analysis runs against, and the [SonarQube System API](https://apis.io/apis/sonarqube/sonarqube-system-api/) reports on the health of the instance itself.

## Getting started

SonarQube lists a freemium model with self-serve signup. SonarSource says its Developer edition is priced per instance, per year, based on your lines of code; the rest of what I have recorded is in the [Pricing section of the profile](https://apis.io/providers/sonarqube/#pricing). The [Web API documentation](https://docs.sonarsource.com/sonarqube-server/latest/extension-guide/web-api/) explains authentication with tokens, and your own instance documents its API too.

On APIs.io, start with the [SonarQube Quality Gates API](https://apis.io/apis/sonarqube/sonarqube-quality-gates-api/), then the [SonarQube Issues API](https://apis.io/apis/sonarqube/sonarqube-issues-api/) and the [SonarQube Measures API](https://apis.io/apis/sonarqube/sonarqube-measures-api/). Everything else is on the [SonarQube profile](https://apis.io/providers/sonarqube/). Wire the quality gate status into your release process first; it is one call and it changes behaviour immediately.
