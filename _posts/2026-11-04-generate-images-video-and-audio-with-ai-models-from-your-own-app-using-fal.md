---
published: true
layout: post
title: 'Generate Images, Video And Audio With AI Models From Your Own App Using fal'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/generate-images-video-and-audio-with-ai-models-from-your-own-app-using-fal.png
date: 2026-11-04 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - fal
  - Artificial Intelligence Management
  - Model Inference
  - Configuration & Secrets Management
  - Generative AI
  - Image Generation
---

You want product shots without a photo shoot, a short video for every listing, or a feature in your own app where customers type a description and get an image back. The AI models that can do this exist, but running them takes expensive graphics hardware most businesses do not own. [fal](https://apis.io/providers/fal-ai/) runs those models for you and lets you use them through an API, a way for software to talk directly to other software, so your app, a script or an AI assistant can ask for an image or a video and get the result back.

## What fal does

fal, the company Features and Labels, Inc., is a generative media platform: it hosts AI models that create images, video and audio, including well-known ones like FLUX, Veo 3, Kling and Stable Diffusion, on graphics processors (GPUs) that scale up and down with demand. You send a request to a model and fal handles the hardware. Developers can also deploy their own models with fal Serverless, and rent dedicated GPU machines through fal Compute. fal describes its API as the fastest for running these models; that is their claim. More on the [fal website](https://www.fal.ai/).

## What you can get done

### [Artificial Intelligence Management](https://apis.io/capabilities/artificial-intelligence-management/)

Generating a video can take a while, so fal works like a queue, a waiting line: you hand in a job, get a ticket number back, and collect the result when it is ready. That means your app never freezes waiting on a model, and you can cancel jobs you no longer need so you do not pay for them.

- `POST /{model_owner}/{model_name}` hands a prompt to a model and returns a request ID, the ticket number.
- `GET /{model_owner}/{model_name}/requests/{request_id}/status` checks whether the job is waiting, running or done.
- `GET /{model_owner}/{model_name}/requests/{request_id}` fetches the finished image or video.
- `PUT /{model_owner}/{model_name}/requests/{request_id}/cancel` stops a job that is still waiting or running.

### [Model Inference](https://apis.io/capabilities/model-inference/)

Inference is the moment a model actually produces its output. For interactive features, people would rather watch the result appear than stare at a spinner.

- `POST /{model_owner}/{model_name}/stream` runs a model and sends back its output piece by piece as it is generated.

### [Configuration & Secrets Management](https://apis.io/capabilities/configuration-secrets-management/)

If you deploy your own model on fal, it often needs passwords or keys for other services. Secrets keep those out of your code.

- `GET /serverless/secrets` lists the names of the secrets your apps can use, without showing their values.
- `POST /serverless/secrets` creates or replaces a secret.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them.

- [Queue Inference](https://apis.io/arazzos/fal-ai/fal-ai-queue-inference-workflow/) submits a job, checks the queue until it is done, then fetches the result.
- [Upload Asset Then Run Inference](https://apis.io/arazzos/fal-ai/fal-ai-upload-then-inference-workflow/) uploads a reference image, then runs a model against it.
- [Upload, Run Image-To-Image With Webhook](https://apis.io/arazzos/fal-ai/fal-ai-image-to-image-result-workflow/) uploads an image and submits a job that calls you back when it finishes.
- [Submit And Conditionally Cancel](https://apis.io/arazzos/fal-ai/fal-ai-submit-and-cancel-workflow/) submits a job, checks it once and cancels it if it has not finished.
- [Streaming Inference](https://apis.io/arazzos/fal-ai/fal-ai-stream-inference-workflow/) runs a model and receives its output as it arrives.
- [Set And Verify Serverless Secret](https://apis.io/arazzos/fal-ai/fal-ai-set-and-verify-secret-workflow/) saves a secret and confirms it is there.

## Ask for it in plain language

We have written conversational overlays for fal, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they map:

- "How do I send a prompt to a fal model like flux/schnell and get a request ID back?"
- "Can I get a webhook callback when my queued image or video generation job finishes?"
- "How do I download the generated image or video once my queued request has completed?"
- "Can I stop a generation job that's still waiting in the queue or already running?"
- "Can I watch intermediate frames or diffusion steps arrive live instead of waiting for the final result?"

You can see one of them on the [fal Apps API phrasing overlay](https://apis.io/overlays/fal-ai/fal-ai-apps-api-phrasing-overlay/).

## Getting started

fal is a paid, hosted service: you call their endpoint and pay for what you generate. Browse the [model gallery](https://fal.ai/models) to find a model that fits the job, then read the documentation on [real-time](https://fal.ai/docs/model-apis/real-time) use. On APIs.io you can browse the [fal profile](https://apis.io/providers/fal-ai/), the [Queue API](https://apis.io/apis/fal-ai/fal-ai-queue-api/), the [Storage API](https://apis.io/apis/fal-ai/fal-ai-storage-api/) and the [Models Catalog API](https://apis.io/apis/fal-ai/fal-models-catalog-api/). Pick one image you make by hand every week, find the model that makes it, and try the Queue Inference recipe on it.
