---
published: true
layout: post
title: 'I Do Wake Up Wanting To Update A Resource'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-do-wake-up-wanting-to-update-a-resource.png
date: 2026-11-13
author: Kin Lane
tags:
  - API Design
  - Resources
  - Experience APIs
  - Events
  - Personas
  - Discovery
---
Gregory Koberger, the founder of ReadMe and Restless.ai, [posted on LinkedIn today](https://lnkd.in/p/e4pcr9xu) about how most RESTful APIs are organized around resources, with create, read, update and delete for each one. His point was this:

> The thing is nobody wakes up wanting to update a resource.
>
> They want to get something done. And most APIs make you assemble that yourself out of a handful of CRUD calls, because nobody put the time into thinking through what the person on the other end is actually trying to accomplish.

He finished by saying that as your API becomes your product, you should treat it like one, and build it around helping someone get the outcome they want, not just around how to work the data. I agree with most of that. But I couldn't let the first line go, because I do wake up wanting to update a resource. I did it this morning.

## What my morning actually looked like

I updated a podcast conversation. The transcript needed changes. The guest's details needed changes. Then it needed publishing to the RSS feed, SoundCloud and YouTube. Then I needed a story written about it, published, and syndicated out to social.

Some of that is updating a resource, plain and simple. A transcript is a resource. A guest is a resource. I want to change them, and I want an API that lets me do exactly that, without wrapping it in someone else's idea of what I'm trying to accomplish.

Some of it is a task that only makes sense as an outcome. "Publish this conversation everywhere it goes" is not one CRUD call, and I shouldn't have to assemble it from twelve of them every time. That's where Gregory is right. An experience oriented API for that task would save me, and any agent working for me, a lot of work.

So when I answered his question, my answer was d) all of the above.

## It isn't resource versus experience

I need resource oriented APIs to manage my digital resources. I also need experience oriented APIs that take on the tasks that produce the experience I'm after. These aren't competing philosophies. They're layers. The experience APIs are usually built on top of the resource APIs, and when the experience doesn't fit what I need today, I fall back to the resources underneath.

If you only give me experiences, I'm stuck the moment my need is slightly different from the one you designed for. If you only give me resources, I'm doing your product thinking for you on every integration. Picking one isn't the design decision. Knowing which jobs deserve which shape is.

## And I need events

I'd add one more thing to Gregory's argument. I need to be notified when things happen across that whole experience. When the transcript changes, when the episode goes live on YouTube, when the story gets published, when a syndication fails. Without events, I'm polling every resource I touched to find out whether the outcome I asked for actually happened.

So it isn't resource versus experience versus event. It's all three. What I need is a diverse API toolbox, and the job of API design is choosing the right tool for each job.

## Who gets which tools

Someone else in the thread made a good point: a toolbox that big becomes its own problem. If you hand every consumer every resource, every workflow and every event, you've just traded one kind of confusion for another.

That's why you define your personas and your use cases first. Then you tag your OpenAPI operations, and your other artifacts too, your MCP tools, events, prompts and resources, by the persona and use case they serve. I'm a special case. I'm the uber persona who wants everything for my own platform. Most of your consumers are not, and you shouldn't give them everything. You should give them what their job needs.

That's where this lands for me. It isn't really a design argument. It's a discovery and onboarding argument. The resources, the experiences and the events can all exist. The work is helping each consumer, human or agent, find the handful that matter to them, without working backwards through everything else you built.

Thanks to Gregory for starting the conversation. What's the most common thing people do with your API that doesn't have a single endpoint? It's a good question. I'd follow it up with this one: which of your consumers actually need that endpoint, and how will they find it?
