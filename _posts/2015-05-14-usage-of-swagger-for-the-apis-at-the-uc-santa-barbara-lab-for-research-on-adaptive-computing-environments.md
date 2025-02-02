---
layout: post
title: >-
  Usage Of Swagger For The APIs At The UC Santa Barbara Lab for Research on
  Adaptive Computing Environments
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/UCSB-RACELab.png
author:
  name: kinlane
tags:
  - Environment
  - Research
  - Environments
  - Swagger
  - APIs
  - Usage
---
_This is a Github issue submission I received, i[n response to whether or not anyone is doing anything interesting with Swagger](http://apievangelist.com/2015/05/13/are-you-doing-anything-interesting-with-swagger-or-know-someone-who-is/). In the lead up to [talks about Swagger next week at Gluecon, in Colorado.](http://apievangelist.com/2015/05/13/it-will-be-a-busy-week-for-api-industry-next-week-at-gluecon/) I'm pretty impressed with this work at UCSB, and while I am processing it, I wanted to share with you, and hopefully stimulate others to share what they are working on behind the scenes, using Swagger--[I've gotten some pretty cool submissions so far](https://github.com/kinlane/swagger/issues)._

We use Swagger in a series of on going research projects at the [RACELab](http://www.cs.ucsb.edu/~ckrintz/racelab.html) of UC Santa Barbara. Our research focuses on designing and implementing new mechanisms for governing APIs in cloud platforms. Following are some of our published works that make use of Swagger.

*   [Towards Automatically Estimating Porting Effort between Web Services APIs](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6930607) -- International Conference on Services Computing 2014
*   [Using Syntactic and Semantic Similarity of Web APIs to Estimate Porting Effort](http://www.hipore.com/ijsc/2014/IJSC-Vol2-No4-2014-pp1-14-Jayathilaka.pdf) -- International Journal of Services Computing, vol. 2, No. 4, Oct-Dec 2014
    
*   [EAGER: Deployment-time API Governance for Modern PaaS Clouds](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=7092929) -- IEEE International Conference on Cloud Engineering 2015, Future of PaaS Workshop
    
*   [REST Web Service Maintenance Through API Policy Enforcement](http://www.cs.ucsb.edu/research/tech-reports/2014-08) -- UCSB Computer Science Tech Report

In first two papers, we use Swagger as a mechanism for describing the syntax and semantics of web APIs. The base Swagger standard covers all the crucial syntactic features of the APIs. We extended the base Swagger specification to include some simple axiomatic semantics (API preconditions and postconditions). We use this syntactic and semantic information to measure the similarity between different API alternatives.

In EAGER (Enforced API Governance Engine for REST), we use the base Swagger 1.1 standard to describe all APIs deployed into the cloud. We auto-generate Swagger descriptions from Java (JAXRS) source code at the compile-time using a custom Maven plug-in. Once uploaded to the cloud, we use Swagger descriptions to validate APIs, enforce policies on them and establish the backward compatibility between different versions of the same API. This way we can prevent or warn the API developer when a backward incompatible API change is being rolled out into a production cloud.