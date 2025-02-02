---
published: true
layout: post
title: Twitter API Authorization Using Postman
image: >-
  https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/twitter-developer.png
author:
  name: kinlane
tags:
  - Twitter
  - Authorization
  - Authentication
---
[I just created a new Postman collection for validating Twitter users via the Twitter API](http://apievangelist.com/2019/12/09/validating-twitter-users-using-the-twitter-api-without-writing-code/). As part of the Postman collection documentation and tutorial I included the steps for authorizing with the Twitter API. This is something that can easily be a hurdle for developer, and will definitely run most non-developers off. In reality, setting up your own Twitter API application, then copying your API tokens and use them in a Postman collection is something anyone can accomplish. This is an authorization workflow that I will be referencing in many different Twitter API tutorials and stories on the blog, so I wanted to have as a standalone URL that I could easily share with anyone.

Before you can make any call to the Twitter API you will need to have four application tokens you can only obtain via your own Twitter developer account. The first step of this process is to setup a Twitter developer account which is different than your regular account, and can be done via [the Twitter developer portal](https://developer.twitter.com).

[![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/twitter-developer.png)](https://developer.twitter.com)

Once you have a Twitter developer account you can [visit the application listing page](https://developer.twitter.com/en/apps), and choose to create a new application in the top corner, and manage any existing application you have already added in the past. Allowing you to manage the details of your access to the Twitter API.

[![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/twitter-application-list.png)](https://developer.twitter.com/en/apps)

While creating an application there are a number of details you will need to consider, but to jumpstart your API Integration all you will need is the name, description, website URL, and tell Twitter how this app will be used. You can always edit these settings at any point in the future, so do not worry too much about them when getting started.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/twitter-application-add.png)

Once you have created your Twitter application you can visit the keys and tokens tab to obtain your consumer API keys as well as the access token and access token secret. Providing the four tokens you will need to actually authorize and make a successful call to the Twitter API using Postman.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/twitter-application-keys-and-tokens.jpg)

Now that you have the four tokens you will need to include them in the Postman collection being defined—for this exercise we will use a [basic Twitter Tweet search collection](https://documenter.postman.com/view/35240/SWE6adN7?version=latest) we already have defined. Just click on Run in Postman button in the top right corner of the Twitter Tweet Search collection, and load the collection into your Postman client.

[![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/twitter-tweet-search.png)](https://documenter.postman.com/view/35240/SWE6adN7?version=latest)

Once the collection is loaded in your Postman application, you can click on the collection and choose to edit the settings for the entire collection, which is the first step in defining how you will authorize with the API.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/edit-postman-collection.png)

Once the edit collection window pops up you can select the Authorization tab to choose OAuth 1.0 as the type of authorization, and Add auth data to Request Headers from both available dropdown. Then you can add four separate variables for your **Consumer Key** [consumer_key], **Consumer Secret** [consumer_secret], **Access Token** [access_token], and **Token Secret** [token_secret]. 

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/edit-postman-collection-authorization.png)

These variables will be applied across every request within the collection, but we will need to add a new environment that define these variables for us, and abstract away our tokens from the Postman Tweet Search collection, allowing us to use the same tokens across many different collections.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/add-postman-environment.png)

While editing our new environment we can give it a name, and add four separate variables for each of our tokens we used as part of our authorization, including [consumer_key], [consumer_secret], [access_token], and [token_secret], adding the values from the Twitter applications we have already setup above.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/define-token-variables.png)

Now we just need to make sure each API request we have in our collection inherits authorization from the collection, which will apply our Twitter environment variables to the authorization for each requestr I add to this collection.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/request-inherit-authorization.png)

Then you can go ahead and make the API request, searching for Tweets via the Twitter API, changing the query parameter to contain the search term or phrase you wish to search the API, and see the JSON response in the Postman browser.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-authorization/make-request.png)

That should provide you with everything you need to authorize with the Twitter API using OAuth 1.0 within a Postman collection, while also properly abstracting away the Twitter authorization tokens using a Postman environment. Keeping your secrets centralized and then applied across each collection, and each of the individual requests you are making.

If you have any questions about this Postman collection you can Tweet at me via @apievangelist or email me for [info@apievangelist.com](mailto:info@apievangelist.com) to establish a more private channel to discuss the way this collection works.