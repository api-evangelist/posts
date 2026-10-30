---
published: true
layout: post
title: 'Scale, Stop And Start Your Kubernetes Clusters Automatically With Azure Kubernetes Service'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/scale-stop-and-start-your-kubernetes-clusters-automatically-with-azure-kubernetes-service.png
date: 2026-10-30 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Azure Kubernetes Service
  - IT Infrastructure Management
  - Cloud
  - Kubernetes
---

If your business runs its applications on Azure, there is a good chance a monthly bill has made you ask an uncomfortable question: why are we paying for all those servers overnight, when nobody is using them? The next questions are usually how to add capacity before a busy season, and how to stop depending on one engineer's memory to do it. [Azure Kubernetes Service](https://apis.io/providers/microsoft-azure-kubernetes-service/) can take those jobs on through an API, a way for software to talk directly to other software, so a scheduled script, your internal tools or an AI assistant can resize, stop and start your infrastructure on request.

## What Azure Kubernetes Service does

Kubernetes is the widely used system for running applications across a group of servers, called a cluster, and it restarts and rearranges those applications as needed. It is powerful, and it is a lot of work to look after. Azure Kubernetes Service, usually shortened to AKS, is Microsoft's hosted version. Azure takes on the operational overhead, including critical tasks like health monitoring and maintenance, and your team focuses on what runs on top. More on the [Microsoft website](https://www.microsoft.com/).

Two terms are worth knowing before going further. A node is one of the servers in a cluster, and a node pool, which Azure's API calls an agent pool, is a group of identical nodes. Most of what affects your bill comes down to how many nodes you have in which pools, and that is what this API lets you control.

## What you can get done

### Run your infrastructure from software instead of by hand

[IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/) is the one capability here, and APIs.io maps 24 operations to it. They divide into two practical jobs.

The first is knowing what you have. Before anyone can make a decision about cost or risk, they need an accurate list of clusters, and in larger organizations those lists tend to go stale. These calls let you build an inventory that is always current:

- `GET /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters` lists every AKS cluster across your Azure subscription, your account's billing boundary.
- `GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters` narrows that list to one resource group, a folder for related Azure resources.
- `GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools` lists the node pools in one cluster.

The second is changing capacity and keeping it current. Adding room for a sales event, removing a pool nobody uses, and checking for upgrades before they become urgent are all things you can schedule rather than remember:

- `PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}` adds a node pool, or changes the size and settings of an existing one.
- `DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}` removes a node pool you no longer use.
- `GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/upgradeProfiles/default` tells you whether an upgrade is available for a node pool.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. Many AKS jobs take minutes, so most of these recipes include polling, which simply means checking back until the work is done. APIs.io catalogs 10 for AKS, including:

- [Stop Cluster](https://apis.io/arazzos/microsoft-azure-kubernetes-service/azure-kubernetes-service-stop-cluster-workflow/) stops a running cluster and waits until it has finished. Pointed at a test environment in the evening, this is the job that answers the overnight question.
- [Start Cluster](https://apis.io/arazzos/microsoft-azure-kubernetes-service/azure-kubernetes-service-start-cluster-workflow/) starts a stopped cluster and fetches the credentials needed to use it.
- [Scale Node Pool](https://apis.io/arazzos/microsoft-azure-kubernetes-service/azure-kubernetes-service-scale-node-pool-workflow/) reads a pool, changes its node count and waits for the change to finish.
- [Add Node Pool and Poll](https://apis.io/arazzos/microsoft-azure-kubernetes-service/azure-kubernetes-service-add-node-pool-workflow/) adds a new pool and waits until it is ready.
- [Provision Cluster and Fetch Credentials](https://apis.io/arazzos/microsoft-azure-kubernetes-service/azure-kubernetes-service-provision-cluster-workflow/) creates a cluster, waits for it and retrieves the admin credentials.
- [Rotate Cluster Certificates](https://apis.io/arazzos/microsoft-azure-kubernetes-service/azure-kubernetes-service-rotate-certificates-workflow/) renews the security certificates on a cluster and refreshes user credentials.

## Ask for it in plain language

Our conversational overlay for AKS maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I see every AKS cluster across my whole Azure subscription?"
- "What node pools does my AKS cluster have?"
- "How do I add a new node pool to an existing AKS cluster?"
- "Can I scale or change the settings of a node pool that already exists?"
- "Is there an upgrade available for one of my AKS node pools?"

You can see one in the [Managed Clusters phrasing overlay](https://apis.io/overlays/microsoft-azure-kubernetes-service/microsoft-azure-kubernetes-service-managed-clusters-api-phrasing-overlay/).

## Getting started

You can sign up for AKS yourself, and Microsoft publishes the [pricing details](https://azure.microsoft.com/en-us/pricing/details/kubernetes-service/). For how access works, read the [identity concepts](https://learn.microsoft.com/en-us/azure/aks/concepts-identity) and [how to control access to cluster credentials](https://learn.microsoft.com/en-us/azure/aks/control-kubeconfig-access). If timing matters to you, see [planned maintenance](https://learn.microsoft.com/en-us/azure/aks/planned-maintenance), which covers when updates can be deployed. On APIs.io, see the [AKS profile](https://apis.io/providers/microsoft-azure-kubernetes-service/), the [Managed Clusters API](https://apis.io/apis/microsoft-azure-kubernetes-service/microsoft-azure-kubernetes-service-managed-clusters-api/), the [Agent Pools API](https://apis.io/apis/microsoft-azure-kubernetes-service/microsoft-azure-kubernetes-service-agent-pools-api/) and the [Maintenance Configurations API](https://apis.io/apis/microsoft-azure-kubernetes-service/azure-kubernetes-service-maintenance-configurations-api/). Ask your team which non-production cluster could safely stop tonight, and start there.
