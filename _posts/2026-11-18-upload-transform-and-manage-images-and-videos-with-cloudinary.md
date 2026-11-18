---
published: true
layout: post
title: 'Upload, Transform And Manage Images And Videos With Cloudinary'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/upload-transform-and-manage-images-and-videos-with-cloudinary.png
date: 2026-11-18 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Cloudinary
  - Media Asset Management
  - Photo & Image Libraries
  - Digital Asset Management
  - Image Processing
---

If your business puts pictures and video on a website, in an app, or in a product catalog, you already know the grind. Someone uploads a photo, someone else resizes it for mobile, another copy gets cropped for a thumbnail, and nobody is sure which version is the real one. [Cloudinary](https://apis.io/providers/cloudinary/) takes that work on, and it does it through an API, which means your website, your store, or an AI assistant can upload, change and organize media without a person in the loop.

An API is a set of doors into a service that other software can knock on. A program sends a request, like "store this photo" or "give me this video as one file," and gets an answer back. That is how media handling moves out of someone's inbox and into your systems.

## What Cloudinary does

Cloudinary is a cloud-based service for managing digital media, images and video, for websites and mobile applications. It handles uploading and transforming media, administering assets and the environments they live in, and managing users and permissions. You can find it at [cloudinary.com](https://cloudinary.com/).

## What you can get done

### Get media in, and keep it organized

[Media Asset Management](https://apis.io/capabilities/media-asset-management/) is the whole life of a media file: bringing it in, describing it, and eventually removing it. With Cloudinary, your product upload form or your content system can send files straight to storage, including very large videos sent in pieces.

- `POST /v1_1/{cloud_name}/{resource_type}/upload` uploads an image, video or other file.
- `POST /v1_1/{cloud_name}/upload` uploads a file and works out what kind it is for you.
- `POST /v1_1/{cloud_name}/{resource_type}/upload_chunked` sends a large file one piece at a time.
- `POST /v1_1/{cloud_name}/{resource_type}/destroy` deletes an asset you no longer need.
- `POST /v1_1/{cloud_name}/video/concat` stitches several video clips into a single MP4.

There is even `POST /v1_1/{cloud_name}/{resource_type}/text`, which turns a line of text into an image, handy for banners and labels.

### Change media you have already stored

[Photo & Image Libraries](https://apis.io/capabilities/photo-image-libraries/) covers storing, organizing and transforming images. A transformation is any change to the file: resizing, cropping, converting format. Cloudinary can also do these on the fly through the delivery address itself, using its [Transformation URL API](https://apis.io/apis/cloudinary/transformations/).

- `POST /{resource_type}/explicit` applies actions to an asset you already uploaded, like tagging it or preparing new sizes ahead of time.

### Beyond the core

Cloudinary's catalog reaches further than those two capabilities, with APIs for asset metadata and tags, collections that publish shareable pages, AI video analysis that writes a visual transcription of a video, billing usage, and [backup retrieval](https://apis.io/apis/cloudinary/cloudinary-backup-api/). Cloudinary can also [notify your systems](https://apis.io/apis/cloudinary/notifications/) when an upload finishes or an asset is deleted.

## Ask for it in plain language

We publish conversational phrasing for Cloudinary's APIs, mapping everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they cover:

- "How do I tag an existing image or video?"
- "Can I apply eager transformations to an asset I already uploaded?"

Eager transformations simply means preparing the resized or converted versions ahead of time, rather than when someone first asks for them.

## Getting started

Cloudinary is freemium with self-serve signup, and it is a hosted service, so you call their endpoint rather than running anything yourself. Its Free plan is $0; the rest is in the [Pricing section of the Cloudinary profile](https://apis.io/providers/cloudinary/#pricing). Cloudinary's documentation covers the [Admin API](https://cloudinary.com/documentation/admin_api), the [transformation reference](https://cloudinary.com/documentation/transformation_reference) and [notifications](https://cloudinary.com/documentation/notifications).

On APIs.io you can browse the full [Cloudinary profile](https://apis.io/providers/cloudinary/) and APIs such as the [Transformation URL API](https://apis.io/apis/cloudinary/transformations/), [Notifications and Webhooks](https://apis.io/apis/cloudinary/notifications/) and the [Backup API](https://apis.io/apis/cloudinary/cloudinary-backup-api/).

Start with the upload: point your product form at Cloudinary and let every other size come from that one original.
