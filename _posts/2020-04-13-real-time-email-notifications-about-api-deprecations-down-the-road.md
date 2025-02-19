---
published: true
layout: post
title: Real Time Email Notifications About API Deprecations Down the Road
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/braceros-domingo-ulloa-desert-road-mountains.jpg
author:
  name: kinlane
tags:
  - Deprecations
  - Communication
---
I got an email from GitHub after firing up an older Postman collection I had. The collection was originally engineered to just pass in a GitHub token using a query parameter, which historically has been accepted, but is something that will be going away soon. It makes sense, and while query parameters are much easier for authentication, using headers is just a more logical and secure way to pass your tokens in with each API call. The token usage itself isn't what caught my attention, what gave me pause was the usage of real time email to notify users of features they are currently using which will be going away in the future.

Here is the amil I got my GitHub about my usage of the deprecating access token query parameter:

> _
> 
> Hi @kinlane,  
>   
> On March 24th, 2020 at 03:55 (UTC) your personal access token (\[TOKEN NAME) using \[USER AGENT\] was used as part of a query parameter to access an endpoint through the GitHub API:  
>   
> [https://api.github.com/search/repositories](https://api.github.com/search/repositories)  
>   
> Please use the Authorization HTTP header instead, as using the \`access\_token\` query parameter is deprecated. If this token is being used by an app you don't have control over, be aware that it may stop working as a result of this deprecation.  
>   
> Depending on your API usage, we'll be sending you this email reminder on a monthly basis for each token and User-Agent used in API calls made on your behalf.
> 
> Just one URL that was accessed with a token and User-Agent combination will be listed in the email reminder, not all.  
>   
> Visit [https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param) for more information about suggested workarounds and removal dates.  
>   
> Thanks,  
> The GitHub Team
> 
> _

I like this type of communication from API providers. I think this is a nice addition to any API management solution. Where you could flag any element of an API and when analytics reveals a developer using this feature, a transactional email is send off to the user. Allowing API providers to be more organized about how they plan for deprecations, and craft messages that go out to API consumers in real time, educating them about changes in the API landscape. Anyways, it was just a simple API thought out of my inbox for a Monday morning that I wanted to put out to the universe.