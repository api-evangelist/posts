---
layout: post
title: My Minimum Viable API Footprint Definition
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-footprint.png
author:
  name: kinlane
tags:
  - My
  - Definition
---
This is something I talk about often, but it has been a while since I’ve done a story dedicated to it, so I wanted to make sure and take a fresh look at what I’d consider to be a minimum viable footprint for any API—I don’t care if it is public or not. This definition has grown out of five years of monitoring the approach taken by leading API providers, and [is also baked into what I’d consider to be a minimum viable APIs.json definition](http://apisjson.org/2015/02/08/a-minimum-viable-apisjson-file-for-your-apis/)—which provides an important index for API operations.

What do I want to see when I visit a developer area? More importantly, what does your average developer, or API consumer need when they land on your API portal? Let’s look at the basics:

*   **Portal -** A clean, easily accessible, prominently place portal landing page. This shouldn’t be buried with your help section, it should be located at developer.\[yourdomain\].com. '
*   **Description -** As soon as developers land, they need a simple, concise explanation of what an API does. Actually describe what the API does, not just that it provides programmatic access to your products and services.
*   **Getting Started -** Give everyone, even non-developers as place to start, helping us understand what is needed to get started with API integration, from signing up for an account to where do I find support.
*   **Documentation -** Deliver, simple, clean, and up to date documentation, preferably of the interactive kind with a Swagger or API Blueprint behind.
*   **Authentication -** Help developers understand authentication. There are a handful of common approaches from BasicAuth, and API keys, to oAuth--provide a simple overview of how authentication is handled.
*   **Self-Service Registration -** How do I sign up? Give me a link to a self-service account signup, and make it as easy for me to create my new account, and go from idea to live integration as fast as possible—don’t make me wait for initial approval, that can come later.
*   **Code -** Provide consumers with code, whether they are samples, libraries, or full blown Software Development Kits (SDKs) and Platform Development Kits (PDK). Make sure as many possible languages are provided, not just the languages you use.
*   **Direct Support -** Give API consumers a way to reach you via email, ticketing system, chat, or good ol fashioned phone.
*   **Self-Service Support -** Provide self service support options via FAQ, Knowledgbases, Forums and other proven ways developers can find the answers they need, when they need.
*   **Communication -** Setup the proper communication channels like a blog and PR section, as well as a healthy social presence on Twitter, LinkedIn, Facebook, or other places your audience already exists.
*   **Pricing -** Even if an API is free, provide an overview of how the platform makes it money, and generates value — enough to keep it up and running, so I know, as an API consumer I can depend on. Let me know all pricing levels, and provide insight into other partner opportunities.
*   **Rate Limits -** Provide a clear overview of how the platform is rate limited, even if they are to protect service availability, let consumers know what to expect.
*   **Roadmap -** Give consumers a look at what is coming in the future, keeping it as a simple, forecast of the short and long term future of an API.
*   **Change Log -** Provide us consumers with a list of all changes that have been made to platform operations, don’t limit to just API changes, and include significant roadmap milestones that have been reached.
*   **Status -** Offer a real-time status dashboard of the platform, with a history view of platform status, that consumers can use as a decision making tool, as well as get current platform status.
*   **Github -** Use Github for all aspects of your API platform operations from hosting code, to providing support via issues, to actually hosting your entire developer portal on Github Pages.
*   **Terms of Service -** Provide, easy to find, and understand terms of service for platform operations, helping API consumers understand what they are in for.
*   **APIs.json -** A machine readable index of any API driven platform, providing a single place to find not just the API endpoints, but also all of the essential building blocks of API operations listed above.

This is my shortlist, of common building blocks that every API platform should have. Part of the reason I’m publishing this, is to provide a fresh look at what I’d consider to be the minimum viable footprint, but [I’m also working to get my own API portal for my new master API stack up to snuff](https://kin-lane.github.io/master/), meeting my own criteria. Without a checklist, I forget what some of the essential building blocks are—you know the cobbler's kids have the worst shoes and all.

After I’m done making sure my own API portal meets this criteria, something I can programmatically measure when done, via the APIs.json file, I will provide a self-service evaluation tool that anyone can use to measure whether or not their own portal meets my minimum viable API footprint definition.