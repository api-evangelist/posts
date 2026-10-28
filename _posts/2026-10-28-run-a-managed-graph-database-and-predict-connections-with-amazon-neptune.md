---
published: true
layout: post
title: 'Run A Managed Graph Database And Predict Connections With Amazon Neptune'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/run-a-managed-graph-database-and-predict-connections-with-amazon-neptune.png
date: 2026-10-28 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Amazon Neptune
  - Artificial Intelligence Management
  - IT Infrastructure Management
  - Database
  - Graph Database
---

Some business questions are really questions about connections. Which customers are linked to the same fraudulent card? Which products are bought together? Who knows whom in your network? A spreadsheet or an ordinary database struggles with these, because the answer lives in the relationships, not the rows. [Amazon Neptune](https://apis.io/providers/amazon-neptune/) is a database built for exactly that, and you can set it up, load it and run it through an API, so your own software, your operations scripts, or an AI assistant can do the work instead of someone clicking through the AWS console.

## What Amazon Neptune does

Amazon describes Neptune as a fully managed graph database service for applications that work with highly connected datasets. A graph database stores things (people, accounts, products) and the links between them. Neptune supports the two common ways of modelling that, property graph and RDF, and the query languages that go with them: Gremlin, SPARQL and openCypher. Managed means Amazon runs the servers, backups and patching for you. More on the [Amazon Neptune page](https://aws.amazon.com/neptune/).

## What you can get done

### Stand up and look after the database

[IT Infrastructure Management](https://apis.io/capabilities/it-infrastructure-management/) is the plumbing: creating a database cluster (a group of servers working as one database), changing it, pausing it when you are not using it, and removing it.

- `POST /` with the create action provisions a new Neptune database cluster.
- `POST /?Action=ModifyDBCluster` changes a cluster's settings, such as how long backups are kept.
- `POST /?Action=StopDBCluster` stops a running cluster, and `POST /?Action=StartDBCluster` starts it again.
- `POST /?Action=CreateDBInstance` adds another server to a cluster.
- `POST /?Action=DeleteDBCluster` deletes a cluster you no longer need.

### Train models that learn from your connections

[Artificial Intelligence Management](https://apis.io/capabilities/artificial-intelligence-management/) is Neptune ML: using machine learning on your graph to predict things, such as a likely link between two accounts, that are not yet recorded.

- `POST /ml/dataprocessing` prepares your graph data, stored in S3, for training.
- `GET /ml/dataprocessing/{jobId}` tells you whether that preparation is finished.
- `POST /ml/modeltraining` starts training a model.
- `POST /ml/endpoints` deploys the trained model so you can ask it for predictions.
- `GET /ml/endpoints` lists the prediction endpoints you have running.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 25 for Neptune, including:

- [Bulk Loader Start and Poll](https://apis.io/arazzos/amazon-neptune/amazon-neptune-bulk-loader-poll-workflow/) loads data from S3 and waits until the load completes.
- [Analytics Create Graph from Import Task](https://apis.io/arazzos/amazon-neptune/amazon-neptune-analytics-import-task-workflow/) creates a Neptune Analytics graph filled from S3.
- [Analytics Snapshot and Restore](https://apis.io/arazzos/amazon-neptune/amazon-neptune-analytics-snapshot-and-restore-workflow/) snapshots a graph and restores it into a new one.
- [Analytics Reset Graph](https://apis.io/arazzos/amazon-neptune/amazon-neptune-analytics-reset-graph-workflow/) empties a graph and waits until it is ready again.
- [Gremlin Add and Count Vertices](https://apis.io/arazzos/amazon-neptune/amazon-neptune-gremlin-add-and-count-vertices-workflow/) adds records to a graph and counts them back.

## Ask for it in plain language

Our conversational overlay for Neptune maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "What Neptune DB clusters do I have provisioned?"
- "How do I provision a new Amazon Neptune database cluster?"
- "Can I rename an existing Neptune cluster or change its backup retention?"
- "How do I prepare graph data in S3 for Neptune ML training?"
- "Is my ML data processing job done?"

You can see one in the [DB Clusters phrasing overlay](https://apis.io/overlays/amazon-neptune/amazon-neptune-db-clusters-api-phrasing-overlay/).

## Getting started

Neptune is paid, with [pricing on the AWS site](https://aws.amazon.com/neptune/pricing/), and it is a hosted service you call. The AWS guides cover [querying with Gremlin](https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-gremlin.html), [querying with openCypher](https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-opencypher.html) and [what Neptune Analytics is](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html). On APIs.io, see the [Amazon Neptune profile](https://apis.io/providers/amazon-neptune/), the [DB Clusters API](https://apis.io/apis/amazon-neptune/amazon-neptune-db-clusters-api/), the [Data Processing API](https://apis.io/apis/amazon-neptune/amazon-neptune-data-processing-api/) and the [Graph Snapshots API](https://apis.io/apis/amazon-neptune/amazon-neptune-graph-snapshots-api/). Write down the one relationship question your business keeps asking, and test whether a graph answers it before you build anything bigger.
