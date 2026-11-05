---
published: true
layout: post
title: 'Provision Quantum Workspaces And Submit Quantum Jobs With Microsoft Azure Quantum'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/provision-quantum-workspaces-and-submit-quantum-jobs-with-microsoft-azure-quantum.png
date: 2026-11-05 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Microsoft Azure Quantum
  - IT Infrastructure Management
  - Quantum Computing
  - Microsoft Azure
---

Someone on your research or engineering team wants to try a quantum computer. Not buy one, just run a small program on real quantum hardware and see what comes back. The practical questions are the boring ones: where does the program run, who pays for it, how do you stop a job that is burning budget, and how do you tell whether the machine you want is even available today. [Microsoft Azure Quantum](https://apis.io/providers/microsoft-quantum/) answers all of that through an API, a way for software to talk directly to other software, so a script, your cloud tooling or an AI assistant can set up the workspace, submit the job and read the result without anyone clicking through the Azure portal.

## What Microsoft Azure Quantum does

Azure Quantum is Microsoft's cloud quantum computing service. Microsoft describes it as an open, multi-vendor platform, which means one account gives you access to quantum hardware from several makers, including IonQ, Quantinuum, Pasqal and Rigetti, alongside Microsoft's own Q# programming language, the Quantum Development Kit and a Resource Estimator that works out what a fault-tolerant quantum program would need to run. The development kit is free and open source, and it accepts programs written in Q#, Qiskit, Cirq and OpenQASM, so a team that already uses one of those does not start over. Azure Quantum Elements adds chemistry, materials and high-performance computing simulation on top. More on the [Microsoft website](https://www.microsoft.com/).

The piece this post is about is the workspace API. A workspace is the container inside your Azure subscription that holds your quantum jobs, your chosen hardware providers, your quotas and the storage account your results land in. Everything else hangs off it.

## What you can get done

### [IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/)

Before anyone runs a quantum program, somebody has to create a workspace, attach a storage account, pick which hardware providers it can use and tag it so finance knows which project to bill. That is infrastructure work, and it is the same shape as provisioning any other cloud resource. There are 9 operations behind this capability, and these are the ones you will use most.

- `POST /subscriptions/{subscriptionId}/providers/Microsoft.Quantum/locations/{location}/checkNameAvailability` checks whether the workspace name you want is free in a region before you try to create it.
- `GET /subscriptions/{subscriptionId}/providers/Microsoft.Quantum/workspaces` lists every quantum workspace across your whole subscription, which is how you find out what already exists.
- `GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}` reads one workspace's configuration, including which providers and storage account it is set up with.
- `PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}` creates a new workspace, or changes an existing one's properties and managed identity.
- `PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}` changes only the resource tags, so you can relabel a workspace for cost tracking without touching anything else.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them, and Azure Quantum has 6 of them on APIs.io. Together they cover the whole life of a quantum job, from checking the machine is awake to cancelling a run that has gone wrong.

- [Azure Quantum Workspace Bootstrap](https://apis.io/arazzos/microsoft-quantum/microsoft-quantum-workspace-bootstrap-workflow/) reads a workspace, checks it finished provisioning, lists its keys and lists the hardware providers on offer.
- [Azure Quantum Discover an Available Target](https://apis.io/arazzos/microsoft-quantum/microsoft-quantum-discover-available-target-workflow/) lists the status of each provider in a workspace and only picks a target that is actually available.
- [Azure Quantum Quota Capacity Check](https://apis.io/arazzos/microsoft-quantum/microsoft-quantum-quota-capacity-check-workflow/) lists the workspace quotas, checks there is headroom left, and stages storage only when there is.
- [Azure Quantum Submit Job and Retrieve Results](https://apis.io/arazzos/microsoft-quantum/microsoft-quantum-submit-job-poll-results-workflow/) stages the input, creates the job, polls until it finishes and reads the location of the output.
- [Azure Quantum Session Lifecycle](https://apis.io/arazzos/microsoft-quantum/microsoft-quantum-session-lifecycle-workflow/) opens a session, submits a job into it, lists the session's jobs and closes it.
- [Azure Quantum Cancel a Running Job](https://apis.io/arazzos/microsoft-quantum/microsoft-quantum-cancel-running-job-workflow/) looks a job up, checks it is still running, cancels it and confirms the cancellation.

If your team is nervous about quantum spend, the quota check and the cancel recipe are the two to wire up first.

## Ask for it in plain language

We have written conversational overlays for Azure Quantum, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they map:

- "Is the quantum workspace name I want already taken in this region?"
- "Which Azure Quantum workspaces exist across my whole subscription?"
- "What providers and storage account is my quantum workspace set up with?"
- "How do I create a new Azure Quantum workspace?"
- "How do I tag a quantum workspace for cost tracking without touching its other settings?"

You can see one of them on the [Subscriptions API phrasing overlay](https://apis.io/overlays/microsoft-quantum/microsoft-quantum-subscriptions-api-phrasing-overlay/).

## Getting started

Azure Quantum is a paid, hosted service with self-serve signup: you create a workspace in your Azure subscription and call Microsoft's endpoints. The language and tooling are documented in the [Q# overview](https://learn.microsoft.com/en-us/azure/quantum/qsharp-overview) and the [Q# API reference](https://learn.microsoft.com/en-us/qsharp/api/), and the [introduction to resource estimation](https://learn.microsoft.com/en-us/azure/quantum/intro-to-resource-estimation) explains how to work out what a program would cost in qubits and time before you run it anywhere. On APIs.io you can browse the [Microsoft Azure Quantum profile](https://apis.io/providers/microsoft-quantum/), the [Workspaces API](https://apis.io/apis/microsoft-quantum/microsoft-quantum-workspaces-api/), the [Azure Quantum Python SDK](https://apis.io/apis/microsoft-quantum/azure-quantum-python-sdk/) and the [Resource Estimator](https://apis.io/apis/microsoft-quantum/resource-estimator/). Start by having whoever runs your Azure account create one workspace, then hand the Submit Job recipe to the person who wrote the program.
