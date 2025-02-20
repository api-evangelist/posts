---
layout: post
title: Some Potentially Very Powerful API Orchestration With The Amazon API Gateway
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-api-gateway-icon.png
author:
  name: kinlane
tags:
  - Orchestration
  - Gateway
  - Amazon
  - Power
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-api-gateway-icon.png)](https://aws.amazon.com/api-gateway/)

I sat down for a second, more in-depth look at the [Amazon API Gateway](https://aws.amazon.com/api-gateway/). When it first released [I took a stroll through the interface, and documentation](http://apievangelist.com/2015/07/09/the-new-aws-api-gateway-anyone-who-does-not-do-this-will-be-fired-thank-you-have-a-nice-day--jeff-bezos/), but this time, I got my hands dirty playing with the moving parts, and considering how the solution fits into the overall API deployment picture.

**API Design Tools**  
[As soon as you land on the Amazon API Gateway dashboard page](https://console.aws.amazon.com/apigateway/home), you can get to work adding APIs by defining endpoints, crafting specific methods (paths), the crafting the details of your HTTP resources (verbs), and round off your resources with parameters, headers, and underlying data models. You can even map the custom sub-domain of your choosing to your Amazon API Gateway generated API, giving it exactly the base URL you need.

**API Mapping Templates**  
One feature provided by the Amazon API Gateway that I find intriguing is the mapping templates. Using the data models and the mapping template tool, you can transform data from one schema to another. This is very interested when you are thinking about evolving your own legacy APIs, but I'm also thinking it could come in real handy for mapping to public APIs, and demonstrating to clients what is possible with a next version--designed from the outside-in-[mapping is something I've wanted to see for some time now](http://apievangelist.com/2014/12/04/swagger-api-definition-mapper/).

**API Integration Types**  
Up until now, in this review, we are just talking about designing APIs, and possibly mapping our data models together. There are many other ways you can gateway existing systems, databases, and other resources using Amazon API Gateway, but the one that seems to be getting the lions share of the discussion, is deploying APIs with Lambda functions as the back-end.

**API Integration Using Lambda Functions**  
Lambda functions give you the ability to create, store, and manage Node.js and Java code snippets, and wire up these resources using the Amazon API Gateway. When you create your first Lambda function, you are given a small selection of blueprints, like a microservice, or db connection, which also allows you to edit your code inline, upload a .zip file, and pull a .zip file from Amazon S3 (where is the Github love).

**Identity & Access Management (IAM)**  
The Amazon API Gateway gives you some pretty simple ways to secure your APIs using API keys, but then also gives you the whole [AWS IAM platform,](https://aws.amazon.com/iam/) and resources to put to leverage as well. I think most of the IAM will be more than many API providers will need, but for those that need this, I can see this part of their gateway solution sealing the deal.

**Scaling Lambda Functions Behind**  
Being scalable is one of the promises of a Lambda backed API deployed using Amazon API Gateway, which I can see being pretty alluring for devops focused teams. You can allocate each Lambda function to posses the memory it needs, and individually monitor and scale as needed. While I see the recent containerization movement taking care of 50% of the API back-end needs, I can also see that being able to quickly scale individual functions as you need using the cloud, taking care of the other 50%.

**Events For Lambda Functions**  
Another powerful aspects of a Lambda function, is you can engineer them to response to events. Using the interface, command line, or API, you can define one or many event sources for each Lambda function. Amazon provides some pretty interesting sources for triggering each Lambda function.

*   **[Amazon Kinesis](https://aws.amazon.com/kinesis/)** - Real-time data processing
*   **[Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit)** - Voice interaction with devices
*   **[Amazon Cognito](https://aws.amazon.com/cognito/)** - Storing mobile user data
*   **[Amazon DynamoDB](https://aws.amazon.com/dynamodb/)** - A NoSQL database 
*   **[Amazon S3](https://aws.amazon.com/s3/)** - Secure object storage
*   **[Amazon SNS](https://aws.amazon.com/sns)** - Push notification service

Those six event sources provide some pretty potent event sources for triggering specific functions in your vast Lambda code library.  You can rely on running code stored as Lambda functions using the API you deploy using Amazon API Gateway and / or you can have your code run in response to a variety of these events you define.

**Beyond Lambda**  
When it comes to defining a back-end for the APIs you deploy using Amazon API Gateway, Lambda is just the beginning. Amazon provides three other really interesting ways to power APIs. I see a lot of potential in managing code using Lambda, and using it to scale the back-end of many APIs pretty quickly, but these areas provide some pretty interesting potential as well.

**HTTP Proxy**  
A quick way to put Amazon API Gateway to use is as a proxy for an existing API. When you think about the potential in this area, when put mapping templates to work, transforming the methods, resources, and models. I haven't mapped it to any existing APIs yet, but will make sure and do so soon, to better understand the HTTP proxy potential.

**Mock Integration**  
Another way to quickly deploy an API is mock your integration, providing a quick API that can be used to hack on, making sure an API will meet developer's needs. You may even want to mock an existing public API, rather than use a live resoure as you are developing an application. There are many uses for mock integration. 

**AWS Service Proxy**  
The final way Amazon gives provides for you to power your API(s), is by proxying an existing AWS service. This opens up the entire AWS cloud stack for exposing as API resources, using the Amazon API Gateway. This reminds me of other existing API gateway solutions, except instead of your on-premise, legacy infrastructure, this is your in the cloud, more recent infrastructure. I'm guessing this will incentivize many companies to migrate their legacy infrastructure into the cloud, or at least make it cloud friendly, so you can put the AWS service proxy to use--lots of possibilities here.

**Defining The Stages Of Your Lifecycle**  
Going beyond the types of integration you can employ when crafting, and deploying APIs using the Amazon API Gateway, the platform also provides a way to define stages that APIs will exist in from design, development, QA, production, or any other stage you wish. I like the concept of having a stage defined for each API, designating where it exists on the API life-cycle. I tend to just have dev and prod, but this might make me consider this a little more deeply, as it seems to be a big part of defining the API journey.

**API Monitoring By Default**  
Amazon has built in monitoring by default into the API Gateway, and Lambda functions. You can connect APIs, and their designated integration back-end to [CloudTrail](https://aws.amazon.com/cloudtrail/), and monitor everything about your operations. CloudTrail is very much a cloud infrastructure logging solution over API analytics solutions, but I could see it evolve into something more than just monitoring and logging, providing an overall awareness of API consumption. Maybe an opportunity for the ecosystem to step in via the API(s).

**CLI An API For The API Gateway**  
You have to admit, Amazon gets interfaces, making sure every service on the platform has a command line interface as well as an API. This is where a lot of the API orchestration magic will come into play in my opinion. The ability to automate every aspect of API design, deployment, management, and monitoring, across your whole stack, using an API is the future. 

**There Are Some Limitations**  
There are some [current limitations of the Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html). They limit things to 60 APIs maximum per AWS account, 300 resources maximum per API, 10 stages maximum per API, and 10-second timeout for both AWS Lambda and HTTP back-end integration. They are just getting going, so I'm sure they are just learning how people will be using the API deployment and management infrastructure in the cloud, and we'll see this evolve considerably.

**What Will This Cost?**  
Lambda is providing the first 1 million requests per month for  free, and $0.20 per 1 million requests thereafter, or $0.0000002 per request. The Amazon API Gateway costs $3.50 per million API calls received, plus the cost of data transfer out, in gigabytes. It will be interesting to see what this costs at scale, but I'm sure overall, it will be very inexpensive to operate like other AWS services, and with time the cost will come down even further as they dial it all in.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/amazon-api-gateway-screen.png)](https://aws.amazon.com/api-gateway/)

**AWS API Gateway Has Me Thinking**  
I won't be adopting AWS right away, I'd prefer to watch it evolve some more, but overall I like where they are taking things. The ability to quickly deploy code with Lambda, and use blueprints to clone, and deploy the code-behind APIs, has a lot of potential. Most of my APIs are just simple code that either returns data from a database, and conducts some sort of programmatic function, making Lambda pretty attractive, especially when it comes to helping you scale and monitor everything by default. 

[My original criticism of the platform still stands](http://apievangelist.com/2015/07/10/aws-is-selling-the-api-solution-the-enterprise-will-buy-not-necessarily-the-api-solution-they-need/). Amazon is courting the enterprise with this, providing the next generation of API gateway for the legacy resources we have all accumulated in the cloud. Something that really doesn't help large companies sort through their technical debt, allowing them to just grow it, and manage it in the cloud. Win for AWS, so honestly it makes sense, even though it doesn't deliver critical API life-cycle lessons the enterprise will need along way to actually make change.

This is a reason I won't be getting hooked on Lambda + Amazon API Gateway anytime soon, because I really don't want to be locked into their services. I'm a big fan of my platform employing common, open server tooling (Linux, Apache, NGINX, MySQL, PHP), and not relying on specialty solutions to make things efficient--I rely on my skills, and experience and knowledge of the resources I'm deploying, to deliver efficiency at scale. My farm to table approach to deploying APIs, keeps me in tune with my supply chain, something that may not work for everyone.

While the tooling I use may not be the most exciting, it is something I can move from AWS, and run anywhere. All of my APIs can easily be recreated on any hosting environment, and I can find skills to help me with this work almost anywhere in the world. After 25 years of managing infrastructure, I'm hyper-aware of lock-in, even the subtle moves that happen over time. However, my infrastructure is much smaller than many of the companies who will be attracted to AWS Lambda + API Gateway, which actually for me, is another big part of the API lesson and journey, but if you don't know this already, I'll keep it to myself.

I'd say AWS gives a healthy nod to the type of platform portability I'm looking for, with the ability to import and export your back-end code using Lambda, [and the ability to use API definitions like Swagger as part of Amazon API Gateway emerge](https://aws.amazon.com/about-aws/whats-new/2015/07/introducing-swagger-importer-easily-import-swagger-api-definitions-into-amazon-api-gateway/). These two things will play a positive role in the overall portability, and interoperability of the platform, but doing this for the deeper connections made with other AWS services, will be a lot harder to evolve from if you ever have to migrate from AWS.

For now, I'll keep playing with Amazon API Gateway, because it definitely holds a lot of potential for some very powerful API orchestration, add while the platform may not work for me 100%, AWS is putting some really interesting concepts into play.