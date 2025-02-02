---
layout: post
title: Adding Behavior-Driven Development Assertions To My API Research
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-check3.png
atomdate: 2016-10-06T22:00:00.000Z
tags:
  - My
  - Research
  - ddi
  - Assertions
---
I was [going through Chai, a behavior, and test driven assertion library](http://chaijs.com/api/assert/), and spending some time learning about behavior driven development, or BDD, as it applies to APIs today. This is one of the topics I've read about and [listened to talks from people I look up to](http://www.pragmaticapi.com/blog/2013/11/10/bdd-for-apis-talk-at-apistrat-sf-2013), but just haven't had the time to invest too many cycles in learning more. As I do with other interesting, and applicable areas, I'm going to add as a research area, which will force me to bump it up in priority.

In short, BDD is how you test to make sure an API is doing what is expected of it. It is how the smart API providers are testing their APIs, during development, and production to make sure they are delivering on their contract. Doing what I do, I started going through the leading approaches to BDD with APIs, and came up with these solutions:

*   [Chai](http://chaijs.com) - A BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
*   [Jasmine](http://jasmine.github.io/) - A behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. 
*   [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on [Node.js](http://nodejs.org/) and in the browser, making asynchronous testing _simple_ and _fun_.
*   [Nightwatch.js](http://nightwatchjs.org/) - Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. 
*   [Fluent Assertions](http://www.fluentassertions.com/) - Fluent Assertions is a set of .NET extension methods that allow you to more naturally specify the expected outcome of a TDD or BDD-style test.
*   [Vows](http://vowsjs.org/) - Asynchronous behaviour driven development for Node.
*   [Unexpectd](http://unexpected.js.org/) - The extensible BDD assertion toolkit

If you know of any that I'm missing, please let me know. I will establish a research project, add them to it, and get to work monitoring what they are up to, and better track on the finer aspects of BDD. As I was searching on the topic I also came across these references that I think are worth noting, because they are from existing providers I'm already tracking on.

*   [Runscope](https://www.runscope.com/docs/api-testing/assertions) - Discussing BDD using Runscope API monitoring.
*   [Postman](http://blog.getpostman.com/2015/09/29/writing-a-behaviour-driven-api-testing-environment-within-postman/) - Discussing BDD using Postman API client.

I am just getting going with this area, but it is something I'm feeling goes well beyond just testing and touches on many of the business and political aspects of API operations I am most concerned with. I'm looking to provide ways to verify an API does what it is supposed to, as well as making sure an API sizes up to claims made by developers or the provider. I'm also on the hunt for any sort of definition format that can be applied across many different providers--something I could include as part of APIs.json indexes and OpenAPI Specs.

Earlier I had written on [the API assertions we make, believe in, and require for our business contracts](http://apievangelist.com/2016/04/08/the-api-assertions-we-make-believe-in-and-require-for-our-business-contracts/). This is an area I'm looking to expand on with this API assertion research. I am also looking to include BDD as part of [my thoughts on algorithmic transparency](http://apievangelist.com/2016/08/04/pushing-for-more-algorithmic-transparency-using-apis/), exploring how BDD assertions can be used to validate the algorithms that are guiding more of our personal and business worlds. It's an interesting area that I know many of my friends have been talking about for a while but is now something I want to work to help normalize for the rest of us who might not be immersed in the world of API testing.