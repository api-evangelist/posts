---
published: true
layout: post
title: Prepping for a Discussion Around What Can Be Lost With AI-Generated API Code
tags:
  - Artificial Intelligence
  - AI
  - OpenAPI
  - JSON Schema
  - Code Generation
  - Boilerplate
  - SDKs
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-fixing-cross.jpg
---
I was having a lively debate on social media with the folks over at Ambassador about [AI-Driven Boilerplate Code Automation](https://www.getambassador.io/blog/boilerplate-code-automation), but in the context of API operations. We have a podcast recording scheduled to talk through the topic, but to prime the pump and get my brain heading in the right direction I wanted to publish a story of how I’d push back on their narrative. I've grabbed the highlights from their post and broke out below to help me digest, but also respond a little  more coherently.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>What is Boilerplate Code Automation?</strong><br>
Boilerplate Code Automation refers to the process of using tools, scripts, or frameworks to generate repetitive code structures automatically, reducing the need for manual writing.
</div>

Makes sense here. No pushback. You definitely want to be automating as much as you can on the backend and frontend of your API operations, allowing developers to focus on the core value. Developers definitely do not like repeating themselves.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>Understanding Boilerplate Code Automation</strong><br>
Configuration files: Setting up environments, dependencies, and project structures.
API endpoints: Defining routes and handlers for web applications.
Database models: Structuring tables, relationships, and queries.
</div>

This is starting to feel like it is getting a little broader than what I'd include in the end to end API lifecycle, but I can still work with it. I am not convinced that all teams will be faced with anything beyond the core "API endpoints", but I think this still applies, and we can widen the scope of rules to include platform, devops, architects, database, etc. 

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>Advantages</strong><br>
Speed: Automating repetitive code writing saves hours of development time.
Consistency: Ensures uniform coding styles and best practices across projects.
Error Reduction: Minimizes human errors introduced through repetitive coding.
Focus on Core Logic: Frees developers to concentrate on complex, high-value tasks.
</div>

All makes sense and core to the argument I'd make for automating boilerplate code generation in any context. It doesn't really give me anything to push back on yet, because this is all par for the course with existing API code generation practices. It is always good to see articulated so concisely--we are aligned here.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>How AI is changing boilerplate code generation</strong><br>
</div>

Ok, now I feel like we are getting more into the spirit of the debate we are having and specifically how AI is changing what we already do with API code generation. This is where I feel like they are working to differentiate the current state from the proposed AI-induced or AI-enabled state they are proposing.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>1. Context Code Generation:</strong> AI models can examine a project's context, including the programming language, framework, and required functionality, to develop code that integrates easily into the existing process. 
</div>

OK. Sounds nice. But the devil is in the details of that context you speak of. I'm skeptical that AI is going to have all that. I am even more skeptical that this isn't something I'd rather have my team doing. They have this context. My team's senior people have all of this in a way that is more reliable than any AI model could possibly have, and it is something I want my junior developers to be learning and picking up--building their muscle. This is just a bridge too far for me. I just don't have this much faith in AI, sorry. Broad stroke.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>2. Consistency and Best Practices:</strong> AI ensures that the generated code meets industry standards and best practices. It can enforce consistent naming conventions, proper error handling, and efficient code structures. This lowers the risk of errors and guarantees that the codebase is maintainable and scalable.
</div>

First part of this, I feel like again we are getting out of my wheelhouse for the API lifecycle and moving into the wider SLDC--which I would tap out of. I don't dictate how an organization does this, I just help adapt the API lifecycle to their existing practices.

Second, if we are talking about server or client side code generation for APIs, the configuration of proxies and gateways, clients, etc. Then all of this is codified into API governance rules and applied to JSON Schema, OpenAPI, APIs.json, and other artifacts used. Again, I wouldn't trust any LLM to have this context, and I want the feedback loop with my teams producing APIs to evolve what these standards and best practices are as part of their regular work. There is no one-size fits all here, or one definition to drive this -- it will vary from domain to domain. AI alone will set this work back in my opinion.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>3. Customization and Flexibility:</strong> Unlike static templates, AI-powered tools can be tailored to specific project requirements. Developers can provide specific inputs, such as database schemas or an API spec, and the AI can develop code that matches the inputs. This level of customization was previously unattainable with traditional automation tools.
</div>

OK, gonna have to take issue here. "Unlike static templates, AI-powered tools can be tailored to specific project requirements." This is a widespread and dangerous view of what JSON Schema and OpenAPIs are. Static. So, not true. Underneath these artifacts you have Git. Layer on top of these artifacts you have APIs.json, Arazzo, and Overlays specification (not even getting to AsyncAPI, etc.) You have a village of product, architect, designers, security, engineers, platform, and other people layering down their domain knowledge into these "static templates". This is where you get at why I push back on AI. This is where the expertise comes in. This is where collaboration occurs. This is where communication and feedback happens. I just don't buy the argument AI magically gives us "customization and flexibility" here. Sorry. ;-(

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>4. Speed and Efficiency:</strong> Speed is one important benefit of AI-powered boilerplate code generation. What once took hours or even days can now be completed in seconds. This enables developers to focus on solving complex problems and providing value to end users.
</div>

OK, sure. Quality of that? At what expense to building internal capacity? What price will junior developers pay? How does the generation of boilerplate code as part of the API lifecycle evolve and inform the iteration of code generation and what constitutes boilerplate tomorrow -- today's custom code is tomorrow's boilerplate. These "static templates" are the accumulation of that knowledge and inform the generation of code over time. Time will tell on this one. I think there is so much more lost in the reduction of "What once took hours or even days can now be completed in seconds".

But let's work through the steps provided...

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>Step 1: Select the Right Tool</strong><br>
AI-Powered Code Generators – Tools like GitHub Copilot and OpenAI Codex generate code from natural language descriptions, making it easy to scaffold entire components or modules.
Scaffolding Tools – Frameworks like Yeoman and Create React App provide ready-made templates for different types of projects, such as web or mobile applications.
Automated Code Generators – Tools like Blackbird, an API development platform (AI-Powered Code Gen) simplify boilerplate code creation with a structured and developer-friendly approach, allowing you to generate code quickly and customize it as needed.
</div>

OK, again this feels very SLDC and just an API lifecycle. Can't speak too much.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>Step 2: Define Your Requirements</strong><br>
The programming language and framework.
The type of application (web app, mobile app, API, etc.).
Core features like user authentication, database integration, and API endpoints.
</div>

OK, this feels wider and just way too coupled for my preference. It really feels antithetical to why we do APIs. Are we going to tightly couple everything now? There is a lot of context needed to navigate all of that and a lot of reasons why we've been decoupling all of this for the last 25 years. But, OK. What gets lost when database just becomes schema for endpoints--a lot.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>Step 3: Generate Code</strong><br>
Once the requirements are set, you can use Blackbird to create a structured codebase effortlessly. With a simple command, Blackbird can generate a foundational setup tailored to your project’s needs. Create a Blackbird account here, install the CLI for your operating system (Linux, Mac, or Windows) to start generating boilerplate code in seconds.
</div>

OK, sounds nice.

<div style="padding: 10px; background-color: ##F7F7F8; border: 1px solid #000; margin-bottom: 10px;">
<strong>Step 4: Customize and Extend</strong><br>
Boilerplate code provides a strong starting point, but customization is key. With Blackbird, developers can easily modify and extend the generated code to fit their project's unique requirements—whether integrating third-party libraries, refining architecture, or adding new functionality.
</div>

Sounds par for the course, and where the devil in the details will emerge.

OK, I think I have what I need to engage in a coherent conversation with the folks from Ambassador. 

In these situations I don't think my opinion is needed or of particular use:

- **Wider Software Development Lifecycle (SDLC)** - I just don't have any strong opinions, and there are plenty of folks with more experience who can help make the argument for or against AI here.
- **No API Strategy or Capacity Present** - For companies who don't have an API strategy or any internal API capacity, this type of push button vendor-driven boilerplate code-generation makes sense. 

Now, if you have an API strategy, are just a little bit further along in your API journey, and you have API talent on your team--then I have strong opinions about why artificial intelligence isn't what you want to be doing over the current approaches--here are a few reasons I caution towards outsourcing entirely to AI.

- **Beyond Code** - Those "static templates" (aka OpenAPI & JSON Schema) used to automate code generation are used in so many other ways--documentation, mock servers, testing, security, client, proxies, and more -- a lot is resting on the quality of those "static templates" and the alignment with thes areas.
- **API Governance** - The "Consistency and Best Practices" (aka API Governance) is applied to the "static templates" (aka OpenAPI & JSON Schema) using governance rules, but these rules are also evolved over time as part of the feedback loop between governance, platforms, and teams producing APIs--you don't want to lose this.
- **Intellectual Property** - That context informing the generation of your boilerplate code is your intellectual property. Sure there are plenty of common patterns and standards in use there, but those "static templates" (aka OpenAPI & JSON Schema) are the API contracts for your enterprise digital resources and capabilities. 

This is where I push back on uncritical usage of artificial intelligence. I don't dispute that there are some useful and interesting use cases for AI as part of API operations--I have a list of things I use it for daily. But it ain't the answer everyone is looking for across the board, and it comes with a cost, and in some cases provides a nice trojan force for extracting value and intellectual property from the enterprise. AI just reflects a more advanced and evolved version of the extraction I've seen with APIs and API-related services over the last 15 years. 

So, in conclusion. Regarding, "How AI is changing boilerplate code generation", the only one that stands out for the reason why you'd want to do boilerplate code generation as part of the API lifecycle is that "4. Speed and Efficiency" is a priority. "1. Context Code Generation" and "2. Consistency and Best Practices" are your intellectual property and internal capacity, don't outsource if possible. Regarding "3. Customization and Flexibility", I just don't see how AI provides this over existing approaches, with the following added overhead of AI.

- Environmental
- Financial Costs
- Advanced Skills
- Overall Quality
- Unsure Accuracy

In the end, I just believe humans can deliver on this promise more reliably using well managed, governed, and agreed upon API contracts. These are contracts that get completed, hardened, and iterated upon over time, as part of the generation of server and client-side code, as well as a menagerie of all artifacts used to enrich the overall developer experience. I'd really like for the Ambassador and other AI enthusiasts to prove me wrong, but honestly I think y'all are missing a whole lot of expertise, collaboration, communication, and other very human things that are required to deliver high quality APIs for our applications--something that isn't always replicable with AI.
