---
layout: post
title: Watching Out For Your API Keys &amp; Tokens On Open Internet
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-keys-servers.png
atomdate: 2016-08-25T18:00:00.000Z
tags:
  - Tokens
  - Keys
  - Open
---
I was just learning about [Auth0's new password breach detection service](https://auth0.com/blog/announcing-password-breach-detection/), adding to the numerous reasons why you'd use their authentication service, instead of going at it on your own. It's an important concept I wanted to write about so that it was added to my research, and present in my thinking around API [authentication](http://authentication.apievangelist.com) and [security](http://security.apievangelist.com/) going forward.

Keeping an eye out for important identity and authentication related information used as part of my API consumption is a lot of work--it is something that I'd love to see more platforms assist me with. [I've written about AWS communicating with me around my API keys](http://apievangelist.com/2015/07/07/time-to-remove-or-rotate-your-api-access-keys/), and I could see an API key and token management solution be built on top of their [AWS Key Management Service](https://aws.amazon.com/documentation/kms/). I've also received emails from Github about my OAuth token that show up in a public repo (happened once ;-( ).

Many application developers do not have the discipline to always manage API keys & tokens in a safe and secure way (guilty). It seems like something that could become default for API providers--if you issue keys and tokens, then maybe you should be helping consumers keep an eye out for them on the open Internet << Which smells like an opportunity for some API-focused security startup. 

Have you seen any other API providers provide key and token monitoring services? Is there anything that you do as an API consumer to keep an eye out for your own keys and tokens? Search for them on Github via the API? Manually search on Google? I am curious to learn more about what people are doing to manage their API keys and tokens.