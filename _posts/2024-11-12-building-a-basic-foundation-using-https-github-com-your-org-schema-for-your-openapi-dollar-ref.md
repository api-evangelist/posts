---
published: true
layout: post
title: >-
  Building a Basic Foundation — Using https://github.com/your-org/schema for
  Your OpenAPI $ref
tags:
  - OpenAPI
  - JSON Schema
  - References
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-subway-platform.jpeg
---
It is fascinating how complex we can make things through us technologists overthinking things. One example of this is around the usage of $ref in OpenAPI, JSON Schema, and AsyncAPI. It is one are of API operations we continue to overthink and under deliver on, and I am always looking for ways to help people get a handle on things. I am not pointing fingers here, because I am struggling with how to properly reference things in my APIs.json specification, while also struggling with stabilizing the conversation across OpenAPI, AsyncAPI, and JSON Schema while I was helping lead conversations in these spaces. This stuff is hard, but we need to begin to get more pragmatic and bring home some realistic solutions.

So, where do we start? Well, let’s begin with acknowledging this conversation is a minefield, as articulated by Phil in [OpenAPI & AsyncAPI $ref: Advanced Guide](https://bump.sh/blog/openapi-asyncapi-ref-usage-guide), and Jonas in [The Reference Rabbit Hole](https://www.asyncapi.com/blog/the-reference-rabbit-hole). But, let’s not fret too hard about the big picture, because I’ve seen this cause paralysis which ends up causing more problems than actually going down this rabbit hole will cause—-and, we have to start somewhere. I recommend beginning with establishing a source of truth for just your schema referenced in your OpenAPI. How do you do this? 

- **GitHub Repository** - Setup a GitHub (or GitLab or BitBucket) organization and repository called schema.
- **Folder Structure** - Create a single, or other meaningful folder structure for how you will organize the schema.
- **README** - Publish a README that explains what you are doing and that this is the central source of truth for schema.
- **Manage Schema** - Begin managing your schema centrally and referencing using a full URL to your schema repo.

Now, immediately you’re going to hit challenges when editing and working with any OpenAPI that are using a reference to your centralized schema. You will hit auth issues, and realize that the services and tooling you are using to manage your OpenAPI suck at following references. This is good. This is going to push you to think through how you assemble and disassemble your OpenAPI at different stages of the API lifecycle. The next thing you will need to do is come up with a solid approach to how and when you keep things separated and when you need things combined into a single OpenAPI. I understand that this will take work and probably throw a monkey wrench in your work, but you will learn a lot along the way, and you will be better off for it.

The lack of a source of truth for your schema is one of the top paint points for API producers. But having a centralized repository that stores the JSON Schema you use in your OpenAPI will immediately force you to standardize on the latest draft of the schema, and open up the reusability of these schema in AsyncAPI, validation, and other aspects of operations. You will realize that you’ve made some bad decisions in the services and tooling you’ve adopted, and will have to submit some PR to your open source tools and put pressure on the commercial ones. It is a decision that will create more work right away, but save massive amounts of work and headache down the road. I will keep working on guides to more sophisticated approaches to doing this with a schema registry, but for many of the companies I worked with in the past, starting with a GitHub repository, a simple folder structure, and a README is a damn good place to start.