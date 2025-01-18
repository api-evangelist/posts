---
published: true
layout: post
title: API, OpenAPI, Collections, Docs, Explorer, Playground, SDKs, and Integrations
tags:
  - OpenAPI
  - Collections
  - Documentation
  - Explorers
  - Playgrounds
  - Clients
  - SDKs
  - Integrations
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-nyc-intersection.jpg
---

<style>
  #bound{
    border-eradius: 10px;
    border: 2px solid #000;
    margin: 5px;
    padding: 10px;
    height: 300px;   
  }
  #bound2{
    border-radius: 10px;
    border: 2px solid #000;
    margin: 5px;
    padding: 30px;
    height: 300px;    
  }
</style>

There was a healthy dose of déjà vu this last week at the [intersection of static API documentation, interactive API documentation, clients as well as SDKs](https://apievangelist.com/2025/01/10/the-intersection-of-static-docs-interactive-docs-explorer-and-api-clients/). We were already neck deep thinking and writing about this intersection when Fabrizio Ferri Benedetti published the [Seven-Action Documentation Model](https://passo.uno/seven-action-model/), and Bruno Pedro wrote about [producer-oriented docs](https://apichangelog.substack.com/p/producer-oriented-api-documentation), which further got us thinking. Then Lorna Mitchell added [guidance on saving edits to OpenAPI as an overlay](https://lornajane.net/posts/2025/save-edits-to-openapi-as-an-overlay), and then [Bump went and published their API Explorer](https://docs.bump.sh/product-updates/2025/01/09/api-explorer/). TO help us make sense of everything will continue telling stories at this intersection this week, further connecting it all with what we talked about with [Ben Hutton from The Guild on the Podcast this last Monday on SDKs](https://conversations.apievangelist.com/store/2025-01-06-ben-hutton-guild/).

Consuming all of these stories, while also reviewing Bump's approach to their API explorer alongside a [recent review of Scalar](https://scalar.com/), combined with continued work around Postman and Bruno all begs for some fresh investigation into the technology, but also business, policies, and people at this intersection of APIs, gateways, OpenAPI, collections, static documentation, interactive documentation, explorers, playgrounds, clients, SDKs, and integrations. To help us better understand the pros and cons as well as the incentives behind producing or consuming APIs at this intersection, we broken down each property, and did a little thinking from the perspective of the API producer or consumers.

<div class="row">
  <div class="col">
      <p style="text-align: center;"><strong>A Property of API Operations</strong></p>
  </div>
  <div class="col">
    <p style="text-align: center;"><strong>The View of the API Producer</strong></p>
  </div>
  <div class="col">
    <p style="text-align: center;"><strong>The View of the API Consumer</strong></p>
  </div>  
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">api</span><strong>API</strong> - Provide</p>
      <ul>
        <li>Authentication</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
        <li>Examples</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer is interested in providing useful digital resources and capabilities available as an HTTP API, using a framework, custom code, databases, and backend services to deliver APIs that deliver intended resources or capabilities.</p>
  </div>
  <div class="col" id="bound2">
      <p>The API consumer is not in the picture yet, but ideally their needs have be considered as part of the development of an API, introducing some of what the consumer will want down stream in the original design of the HTTP API being developed.</p>
  </div>  
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">mitre</span><strong>OpenAPI</strong> - Contract</p>
      <ul>
        <li>Authentication</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
         <li>Schema</li>
        <li>Examples</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer designs and/or generates an OpenAPI that describes the surface area of their HTTP APIs, which can be used to generate documentation, mock servers, SDKs, and automate the usage of APIs in clients and via integrations.</p>
  </div>
  <div class="col" id="bound2">
      <p>At this point, an API consumer can take the OpenAPI and generate their own documentation, mock servers, and SDKs, as well as use to automate their API consumption in clients, and via integrations needed to power their applications of an API.</p>
  </div> 
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">apps</span><strong>Collections</strong> - Executable</p>
      <ul>
        <li>Authentication</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Examples</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer can generate Postman, Bruno, or Insomnia collections for an entire API or for a specific business use case, test scenario, or other intended usage of an HTTP, distributing each executable use case wherever it is needed.</p>
  </div>
  <div class="col" id="bound2">
      <p>Now an API consumer can take the Postman, Bruno, or Insomnia collection and manually execute the collection via a cloud workspace or locally on their desktops, as well as bake into CI/CD piplines used to deploy applications and integrations.</p>
  </div>  
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">docs_add_on</span><strong>Static Docs</strong> - Publish</p>
      <ul>
        <li>Authentication</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
        <li>Examples</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer will often hand-craft or generate static API documenation for an API, ensuring that the authentication, paths, operations, parameters, headers, request bodies, reponses, and examples are available to help onboard on API.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumers can use static API documentation to onboard with an API, learning about the authentication, paths, operations, parameters, headers, request bodies, reponses, and examples via portal, wikis, and other places documentation is published.</p>
  </div> 
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">docs_apps_script</span><strong>Interactive Docs</strong> - Available</p>
      <ul>
        <li>Authentication</li>
        <li>Keys</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
        <li>Examples</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer dynamically generate API documenation for an API using an OpenAPI, ensuring that the authentication, paths, operations, parameters, headers, request bodies, reponses, and examples are available to help onboard on API.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumers can use API documentation to onboard with an API, learning about the authentication, paths, operations, parameters, headers, request bodies, reponses, and examples in a hands-on and interactive way wherever documentation is published.</p>
  </div> 
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">explore</span><strong>Explorer</strong> - Provide</p>
      <ul>
        <li>Authentication</li>
        <li>Keys</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
        <li>Examples</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer can embed or make portal an explorer for an HTTP, allowing all or part of an API to be navigated and explored, reducing the overall cognitive load of an API, and introducing it to API consumer incrementally, allowing them to make requests and see responses.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumers can use API explorers to be introduced to all or part of an API, allowing consumers to incrementally navigate, configure and make requests to an API, and see raw responses or visualized in a way that will make more sense to consumers onboarding with an API.</p>
  </div> 
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">settings_slow_motion</span><strong>Playground</strong> - Onboard</p>
      <ul>
        <li>Authentication</li>
        <li>Keys</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
        <li>Examples</li>
        <li>Data</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>An API producer can provide an entire playground and sandbox for API consumers to learn about and onboard with an API, but also make requests and responses to an API, returning synthentic and sample data for a variety of business use cases that will help consumers onboard with an API. Providing a safe space to vett, onboard, and integrate applications into a platform using HTTP APIs.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumers can use API playgrounds to learn about and onboard with an API, making the experience interactive and hands-on, providing synthetic and rich sample data to demonstrate making requests and responses to an API, helping speed up the onboarding and integration of APIs. Offering consumers a safe space to learn about an API and demonstrate the value they provide with their integration, without directly accessing production resources.</p>
  </div>  
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">settings_applications</span><strong>Clients</strong> - Distribute</p>
      <ul>
        <li>Authentication</li>
        <li>Keys</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
        <li>Examples</li>
        <li>Data</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>By publishing Postman, Bruno, and Insomnia collections and even OpenAPIs, an API producer is automatically making their APIs available for use in leading API clients, making all or part of an API automatically available for discovery, exploration, and automating testing and other business processes.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumers can take OpenAPIs, as well as Postman, Bruno, and Insomnia collections back into the enterprise and use them to automate documentation, mock servers, SDKs, testing, security, integration, and other time and cost saving approaches to putting APIs to work in applications.</p>
  </div>  
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">code</span><strong>SDKs</strong> - Integrate</p>
      <ul>
        <li>Authentication</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>API producers can generate and hand-craft software development kits (SDKs) for their API, providing SDKs in a variety of programming languages, standardizing the design of an API in the programming lanugages that will matter most to the consumers of those APIs.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumer can choose to take an SDK and use it as part of their infrastructure, applications, and integrations, or they can choose to also generate their own SDKs using the OpenAPI or collection provided by an API producer, shifting who's code utlimately ends up being used.</p>
  </div> 
</div>
<div class="row">
  <div class="col" id="bound">
      <p><span style="cursor:pointer; position:relative; margin-left: 3px; margin-right: 2px; top: 7px;" class="material-symbols-outlined fs-4 text-emphasis">integration_instructions</span><strong>Integrations</strong> - Plug and Play</p>
      <ul>
        <li>Authentication</li>
        <li>Paths</li>
        <li>Operations</li>
        <li>Parameters</li>
        <li>Headers</li>
        <li>Request Bodies</li>
        <li>Responses</li>
        <li>Schema</li>
      </ul>       
  </div>
  <div class="col" id="bound2">
      <p>API producers can provide ready to go integrations with common platforms that API consumers will want to be integrating with, offering low-code or no-code options for consuming an API, reducing the overall time and cost to integrate and apply API resources and capabilities.</p>
  </div>
  <div class="col" id="bound2">
      <p>API consumer can choose from a buffet of integrations an API producer has made available, making it easy for API consumers to put digital resources and capabilities to use in their business operations. Integrations lower the API consumers cost and burden, and can also provide the opportunity to request new integrations.</p>
  </div>  
</div>
<br>
There is a lot to learn at this intersection. There is a lot to think about when it comes to analytics and observability across this spectrum. There is also a lot to think about when it comes to surveillance and privacy. There is a lot to consider when it comes to what an API producer is going to want versus what an API consumer is going to want. The reason an API consumer will want an OpenAPI over an SDK will vary from industry to industry, and enterprise to enterprise. As with other areas of API operations, the answers here are more about people and policies then it is about technology. 

Next we will explore examples of each of these properties and who the service providers are, as well as the open-source tooling. The commercial versus open-source of this conversation is another important aspect of this intersection. None of these properties are anything new, hence the déjà vu reference at the opening of this post, and the commercial viability, investment, and availability of open-source will continue to shape the conversation moving forward, just as it has for the last fifteen years. The business of all of this shapes the technology and what consumers want or do not want, and if we can find the right balance, we can keep this intersection vibrant and producing value, while minimizing repeating our the same mistakes of our past simply because services and tooling disappear with each wave of acquisitions.
