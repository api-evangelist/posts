---
layout: post
title: Expressing What An API Does As Well As What Is Possible Using OpenAPI
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/tool/openapi-spec.png
atomdate: 2017-05-01T22:00:00.000Z
tags:
  - OpenAPI
  - Open
---
I am working to update [my OpenAPI definitions for AWS, Google, and Microsoft](http://apievangelist.com/2017/05/01/quantifying-the-api-landscape-across-amazon-google-and-microsoft/) using some other OpenAPIs I've discovered on Github. When a new OpenAPI has entirely new paths available, I just insert them, but when it has an existing path I have to think more critically about what is next. Sometimes I dismiss the metadata about the API path as incomplete or lower quality than the one I have already. Other times the content is actually more superior than mine, and I incorporate it into my work. Now I'm also finding that in some cases I want to keep my representation, as well as the one I discovered, side by side--both having value.

This is one reason I'm not 100% sold on the fact that just API providers should be crafting their own OpenAPis--sure, the API space would be waaaaaay better if ALL API providers had machine readable OpenAPIs for all their services, but I would want it to end here. You see, API providers are good (sometimes) at defining what their API does, but they often suck at telling you what is possible--which is why they are doing APIs. I have a lot of people who push back on me creating OpenAPIs for popular APIs, telling me that API providers should be the ones doing the hard work, otherwise it doesn't matter. I'm just not sold that this is the case, and there is an opportunity for evolving the definition of an API by external entities using OpenAPI.

To help me explore this idea, and push the boundaries of how I use OpenAPI in my API storytelling, I wanted to frame this in the context of the Amazon EC2 API, which allows me to deploy a single unit of compute into the cloud using an API, a pretty fundamental component of our digital worlds. To make any call against the Amazon EC2 I send all my calls to a single base URL:

`_ec2.amazonaws.com_`

With this API call I pass in the "action" I'd like to be taken:

`_?Action=RunInstances_`

Along with this base action parameter, I pass in a handful of other parameters to further define things:

`_&ImageId=ami-60a54009&MaxCount=1&KeyName=my-key-pair&Placement.AvailabilityZone=us-east-1d_`

Amazon has never been known for superior API design, but it gets the job done. With this single API call I can launch a server in the clouds. When I was first able to do this with APIs, is when the light really went on in my head regarding the potential of APIs. However, back to my story on expressing what an API does, as well as what is possible using OpenAPI. AWS has done an OK job at expressing what Amazon EC2 API does, however they suck at expressing what is possible. This is where API consumers like me step up with OpenAPI and provide some alternative representations of what is possible with the highly valuable API.

When I define the Amazon EC2 API using the OpenAPI specification I use the following:

`_swagger: '2.0'   info:   title: Amazon EC2   host: ec2.amazonaws.com   paths:   /:        get:             summary: The Amazon EC2 service             _o_perationId: ec2API        parameters:             - in: query               name: action   _`

The AWS API design pattern doesn't lend itself to reuse when it comes to documentation and storytelling, but I'm always looking for an opportunity to push the boundaries, and I'm able to better outline all available actions, as individual API paths by appending the action parameter to the path:

`_swagger: '2.0'   info:   title: Amazon EC2   host: ec2.amazonaws.com   paths:   /_?Action=RunInstances_/:        get:             summary: Run a new Amazon EC2 instance             _o_perationId: runInstance_`

Now I'm able to describe [all 228 actions you can take with the single Amazon EC2 API path](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html) as separate paths in any OpenAPI generated API documentation and tooling. I can give them unique summaries, descriptions, and operationId. OpenAPI allows me to describe what is possible with an API, going well beyond what the API provider was able to define. I've been using this approach to better quantify the surface area of APIs like Amazon, Flickr, and others who use this pattern for a while now, but as I was looking to update my work, I wanted to take this concept even further.

While appending query parameters to the path definition has allowed me to expand how I describe the surface area of an API using OpenAPI, I'd rather keep these parameters defined properly using the OpenAPI specification, and define an alternative way to make the path unique. To do this, I am exploring the usage of #bookmarks, to help make duplicate API paths more unqiue in the eyes of the schema validators, but invisible to the server side of things--something like this:

_swagger: '2.0'  
info:  
title: Amazon EC2  
host: ec2.amazonaws.com  
paths:  
/#RunInstance/:  
     get:  
          summary: Run a new Amazon EC2 instance  
          _o_perationId: runInstance  
_  __parameters:__     __- in: query__               __name: action  
               __default: __RunInstances______ 

I am considering how we can further make the path unique, by predefining other parameters using default or enum:

_swagger: '2.0'  
info:  
title: Amazon EC2  
host: ec2.amazonaws.com  
paths:  
/#RunWebSiteInstance/:  
     get:  
          summary: Run a new Amazon EC2 website instance  
          _description: The ability to launch a new website running on its own Amazon EC2 instance, from a predefined AWS AMI._   
          _o_perationId: runWebServerInstance  
_  __parameters:__     __- in: query__               __name: action  
               __default: __RunInstances______   
     __- in: query__               __name: _ImageId_  
               __default: ___ami-60a54009_______ 

I am still drawing in the lines of what the API provider has given me, but I'm now augmenting with a better summary and description of what is possible using OpenAPI, which can now be reflected in documentation and other tooling that is OpenAPI compliant. I can even prepopulate the default values, or available options using enum settings, tailoring to my team, company, or other specific needs. Taking an existing API definition beyond its provider interpretation of what it does, and getting to work on being more creative around what is possible.

Let me know how incoherent this is. I can't tell sometimes. Maybe I need more examples of this in action. I feel like it might be a big piece of the puzzle that has been missing for me regarding how we tell stories about what is possible with APIs. When it comes to API definitions, documentation, and discovery I feel like we are chained to a provider's definition of what is possible, when in reality this shouldn't be what drives the conversation. There should be definitions, documentation, and discovery documents created by API providers that help articulate what an API does, but more importantly, there should be a wealth of definitions, documentation, and discovery documents created by API consumers that help articulate what is possible.