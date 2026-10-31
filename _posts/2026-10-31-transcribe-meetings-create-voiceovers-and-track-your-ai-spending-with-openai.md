---
published: true
layout: post
title: 'Transcribe Meetings, Create Voiceovers And Track Your AI Spending With OpenAI'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/transcribe-meetings-create-voiceovers-and-track-your-ai-spending-with-openai.png
date: 2026-10-31 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - OpenAI
  - Speech & Voice
  - Model Inference
  - Usage Metering
  - Identity & Access Management
  - Artificial Intelligence
  - Generative AI
---

Maybe you have a stack of meeting recordings nobody will ever listen to, product copy that needs a voiceover, or a growing AI bill nobody can explain. Typing into a chat window does not get you far with that kind of work, because someone has to sit there doing it one item at a time. [OpenAI](https://apis.io/providers/openai/) offers the same technology through an API, a way for software to talk directly to other software, so your own systems or an AI assistant can run these jobs across all of your recordings, documents and teams.

## What OpenAI does

Most people know OpenAI through ChatGPT. Separately, it publishes a single REST API covering text and reasoning, embeddings (a way of turning text into numbers so software can find similar meaning), images, audio and speech, video, moderation, file storage and search, batch processing, fine-tuning and evaluation. There is also a full administration side for projects, users, groups, roles, API keys, usage and audit logs. OpenAI publishes the machine-readable description of that API itself, with 242 operations. More on the [OpenAI website](https://openai.com/).

## What you can get done

### Turn recordings into text, and text into speech

Speech and voice services handle audio in both directions. A recorded meeting or support call becomes searchable text, and a script becomes a voiceover without booking a studio. A transcript is usually the point where a recording becomes something your business can actually use.

- `POST /audio/transcriptions` transcribes an audio recording.
- `POST /audio/translations` turns foreign-language speech into English text.
- `POST /audio/speech` turns text into spoken audio.
- `POST /audio/voice_consents` uploads the speaker's consent recording, a step tied to creating a custom voice.

### Put a model to work on your own text

Model inference is the technical name for asking a model something and getting an answer. It is what lets your software summarize a thousand support tickets, sort incoming email or draft product descriptions, all using your instructions.

- `POST /chat/completions` sends a conversation to a model and gets a reply.
- `GET /chat/completions` lists chat completions you have stored.
- `GET /chat/completions/{completion_id}` retrieves one stored completion.
- `DELETE /chat/completions/{completion_id}` deletes a stored completion.

### See where the money is going

[Usage Metering](https://apis.io/capabilities/usage-metering/) answers the question your finance team will eventually ask. AI services charge by consumption, often in tokens, the small pieces of text a model reads and writes. These reports let you break down your spend and catch a runaway project early.

- `GET /organization/costs` reports your organization's spending over time.
- `GET /organization/usage/completions` reports token usage on text models.
- `GET /organization/usage/audio_transcriptions` reports transcription usage.
- `GET /organization/usage/audio_speeches` reports text-to-speech usage.

### Control who can do what

[Identity & Access Management](https://apis.io/capabilities/identity-access-management/) comes into its own once more than a few people use this. Giving a whole group a role keeps you from setting permissions person by person, and makes access easy to audit.

- `POST /organization/groups/{group_id}/roles` gives a group an organization role.
- `DELETE /organization/groups/{group_id}/roles/{role_id}` removes that role.
- `GET /projects/{project_id}/groups/{group_id}/roles` lists the roles a group holds in a project.
- `POST /projects/{project_id}/groups/{group_id}/roles` gives a group a role in a project.

### Train a model on your own examples

[Artificial Intelligence Management](https://apis.io/capabilities/artificial-intelligence-management/) includes fine-tuning, which means training a model on examples of the work you want, so it picks up your format or tone.

- `POST /fine_tuning/jobs` starts a fine-tuning job.
- `POST /fine_tuning/alpha/graders/run` scores a sample output with a grader, a set of rules for judging results.
- `POST /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions` shares a trained model with other projects in your organization.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 17 for OpenAI, including:

- [Batch Job](https://apis.io/arazzos/openai/openai-batch-job-workflow/) uploads a file of requests, runs them as a batch and waits for completion. OpenAI prices this kind of processing at a 50% discount, with results within 24 hours.
- [Download Batch Results](https://apis.io/arazzos/openai/openai-download-batch-results-workflow/) retrieves a finished batch and downloads its output.
- [Chat then Speak](https://apis.io/arazzos/openai/openai-chat-then-speak-workflow/) generates a written reply and then reads it aloud as audio.
- [Moderate then Generate Image](https://apis.io/arazzos/openai/openai-generate-image-workflow/) screens an image request and generates the image only when it is allowed.
- [Fine-Tuning Job](https://apis.io/arazzos/openai/openai-fine-tuning-job-workflow/) uploads a training file, runs the job and reads the result.

## Ask for it in plain language

Our conversational overlay for OpenAI maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "What's the way to turn a meeting recording into text in its original language?"
- "How do I convert a paragraph of text into an MP3 voiceover?"
- "Can I take a Spanish audio clip and get an English transcript back?"
- "How much has my organization spent on the API since the start of the month?"
- "Can I break my costs down by project or line item?"
- "How do I grant an organization-level role to a whole group at once?"

You can browse one in the [OpenAI Audio phrasing overlay](https://apis.io/overlays/openai/openai-audio-api-phrasing-overlay/).

## Getting started

Access is paid, and authentication uses an API key tied to a project. Start with the documentation for the [Responses API](https://platform.openai.com/docs/api-reference/responses), the [text generation guide](https://platform.openai.com/docs/guides/text) and the [deep research guide](https://developers.openai.com/api/docs/guides/deep-research/). On APIs.io, see the [OpenAI profile](https://apis.io/providers/openai/), the [Responses API](https://apis.io/apis/openai/openai-responses-api/), the [Batch API](https://apis.io/apis/openai/openai-batch-api/) and the [Moderations API](https://apis.io/apis/openai/openai-moderations-api/). Try it with one recording you already have, and set up the cost report before you scale to the rest.
