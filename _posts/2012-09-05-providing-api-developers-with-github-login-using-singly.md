---
layout: post
title: Providing API Developers with Github Login Using Singly
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/singly-plus-github.png
author:
  name: kinlane
tags:
  - Github
  - Developers
  - Login
  - Git
---
[![](https://s3.amazonaws.com/kinlane-productions2/singly/singly-plus-github.png)](https://singly.com/docs/github)

I’m building a small API that I want to allow developers to register for. I don’t want to make it a complicated registration process, I just want them to provide some sort of credentials and I will issWue a key that they can use to make API calls.

To keep it simple I’m offering a login using a [Github](http://www.github.com "Github") account. Every developer has a Github account right? Well if they don’t, they should. The easiest way there is to enable your API with a Github login is Singly.

Using [Singly](http://www.singly.com "Singly"), I sign in with my Github account (this is where I got this idea), then I [add a new application](https://singly.com/apps/new), giving it the root URL and callback URL of my API developer area.

[![](https://s3.amazonaws.com/kinlane-productions2/singly/Singly-Application-Github.png)](https://singly.com/apps/new)

Next I need to link up my Github account to my Singly account, by [adding an application to my Github account](https://github.com/settings/applications). I give it a name, URL and when adding the callback, I add a Singly specific callback--Singly will handle the rest.

![](https://s3.amazonaws.com/kinlane-productions2/singly/Github-App-Settings.png)

Now I just add a login with Github button to my developer area with the following URL: 

*   _https://api.singly.com/v0/services/github?access\_token=my\_token_

When one of my API developers click on the Github login, it will route them to Github for OAuth, back to Singly and to my API callback URL where I can grab the authorization code for the user.

Now I can reference my API developer using their Github account, using their profile image, name as well as having some stats about the user like how many repositories they have, number of followers and who they follow--which provides me a pretty good baseline metric for distinguishing active developers vs. in-active developers.

[![](https://s3.amazonaws.com/kinlane-productions2/kinlane-github.png)](https://github.com/kinlane)

Github login should be default for all API providers. It reduces developer on-boarding friction with an API, and uses the social network that makes the most sense for API developers.