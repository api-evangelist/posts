---
published: true
layout: post
title: Google Makes the Interactions API the Front Door to Gemini
date: 2026-06-22
author: Kin Lane
tags:
  - Artificial Intelligence
  - Agents
  - API Design
  - Gemini
  - Google
  - State Management
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/google-makes-the-interactions-api-the-front-door-to-gemini.png
---
Google [moved the Gemini Interactions API to general availability](https://blog.google/innovation-and-ai/technology/developers-tools/interactions-api-general-availability/), and I want to pay attention to it not because it is another model endpoint, but because of what it says about where API design is heading in this agentic moment. They are calling it "a single unified endpoint for Gemini models and agents with server-side state, background execution, tool combination and multimodal generation," and that sentence is doing a lot of work. It is Google quietly admitting that the request/response shape we have all been building against—`generateContent`, send the whole conversation every time, get a single completion back—was never going to carry the weight of agents that think, call tools, and run for minutes at a time.

The piece I keep circling is the server-side state. Instead of resending the entire chat history on every call, you pass a `previous_interaction_id` and let Google hold the thread. That is a real design decision with real consequences. It moves the conversation from being a stateless artifact you own and replay, to being a stateful resource that lives on their side for 55 days on the paid tier, one day on the free tier, or not at all if you set `store=false`. There is convenience in that, and there is also a quiet gravity well. The more your agentic workflow depends on state you don't hold, the more the endpoint becomes the thing you are actually building on, not the model.

> *"The legacy generateContent API remains fully supported, but frontier capabilities for long-running models and agents will land exclusively on the Interactions API."*

That is the line that matters for anyone making a long-term bet. `generateContent` is not being deprecated, but it is being frozen out of the interesting future. The new surface area—managed agents in a remote Linux sandbox, Deep Research as two tunable agent versions, built-in tools like Google Search and Maps combined with your own functions, tool results that now return images and not just text—all of that lands here first and, increasingly, only here. They also reworked the schema away from chat roles toward typed steps: `user_input`, `thought`, `function_call`, `model_output`. That is an honest reflection of what an agent interaction actually is, and it is a better primitive than pretending everything is a chat message.

So I did what I do with everything worth tracking—I added it to [the Gemini provider in my catalog](https://apis.io/providers/google-gemini/) and pushed the artifacts through to [APIs.io](https://apis.io). It now sits alongside the other fourteen Gemini APIs with its documentation, API reference, authentication, getting-started, and migration guide all indexed, so you can see it next to `generateContent`, the Live API, and the rest of the surface area Google is shipping. Seeing them side by side is the whole point, because the story here is not one new API—it is a provider redrawing its front door and deciding which door the next generation of capabilities walks through.

I am genuinely glad to see an API designed from the ground up for agents instead of bolted onto a chat-completion endpoint, and the typed-step schema and observable execution steps are the kind of thing I have been asking providers for. I am also going to keep watching the state-retention defaults, the pricing tiers, and how much of your workflow ends up living on Google's side versus yours. A unified endpoint is a convenience and a commitment at the same time. Worth adopting with eyes open, and worth tracking right alongside every other provider making the same move this year.

<!-- paper-link -->

---

**Going deeper: [The State of Artificial Intelligence APIs](https://papers.apievangelist.com/papers/state-of-artificial-intelligence-apis/?ae_ref=apievangelist.com&ae_pos=post-footer)**

4,904 AI companies scored — the industry selling agents produces a machine-readability distribution indistinguishable from the average of every other industry in the catalog.

[Read the paper — $500](https://papers.apievangelist.com/papers/state-of-artificial-intelligence-apis/?ae_ref=apievangelist.com&ae_pos=post-footer)
