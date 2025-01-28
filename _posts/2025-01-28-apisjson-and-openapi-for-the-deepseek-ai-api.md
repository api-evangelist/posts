---
published: true
layout: post
title: APIs.json and OpenAPI for the DeepSeek AI API
tags:
  - DeepSeek
  - OpenAPI
  - Artificial Intelligence
  - AI
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-arrow-in-ground.jpeg
---
What better way to spend the day than playing with the [DeepSeek AI API](https://contracts.apievangelist.com/store/deepseek/). At first search there isn’t an OpenAPI or other artifacts for the API available so we got to work creating a single OpenAPI for each of the APIs they offer. We crafted four separate OpenAPIs for each of the primary capabilities, then we wrapped them in [a single APIs.json](https://github.com/api-evangelist/deepseek/blob/main/apis.yml) to help provide other relevant links to other resources that will help you make your decision on how you will be using DeepSeek AI in your applications and systems.

- [**DeepSeek Chat Completion API**](https://github.com/api-evangelist/deepseek/blob/main/openapi/deepseek-chat-completion-api-openapi.yml)
- [**DeepSeek Fill-In-the-Middle (FIM) Completion API**](https://github.com/api-evangelist/deepseek/blob/main/openapi/deepseek-fim-completion-openapi.yml)
- [**DeepSeek Lists Models API**](https://github.com/api-evangelist/deepseek/blob/main/openapi/deepseek-lists-models-api-openapi.yml)
- [**DeepSeek User Balance API**](https://github.com/api-evangelist/deepseek/blob/main/openapi/deepseek-user-balance-api-openapi.yml)

Make sure and review those terms of service, privacy and licensing before putting DeepSeek AI API to work. We won’t be creating collections for the API because everything you need should be available in the OpenAPI. We will be diving into the reuse of OpenAI APIs in their interface as a separate story, as the design decisions speak volumes about what they are looking to accomplish. After that we’ll spend a little more time in their GitHub organization to inventory what is available and the story it tells about their approach. You can find everything [published to API Evangelist](https://contracts.apievangelist.com/store/deepseek/), or you can grab what you need from the [GitHub repository](https://github.com/api-evangelist/deepseek) behind.


