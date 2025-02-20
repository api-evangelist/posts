---
published: true
layout: post
title: Pulling Your Twitter Bookmarks Via The Twitter API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/nazi-invasion-border-crossing-through-fence.jpg
author:
  name: kinlane
tags:
  - Twitter
  - Bookmarks
---
[I created two Twitter API capabilities the other day to help someone pull a list of their Twitter favorites using the Twitter API](http://apievangelist.com/2019/12/29/pulling-links-from-those-tweets-you-have-favorited/). They said they wanted bookmarks and I assumed they used favorites in the same way I do (as bookmarks), and created one Postman collection for pulling API favorites, and another to parse the URLs present in the body. I use Twitter public likes as a way of bookmarking, then I harvest those via the Twitter API--something I've done for over a decade. I had heard of Twitter bookmarks, and seen them in the desktop and mobile apps, but hadn't really made the shift in my brain. So I assumed they were talking about likes. DOH! Anyways, they tweeted back at me and helped me realize misconception. Ok, so how do we still get them their bookmarks? After some quick investigation there is no Twitter API for your private bookmarks, making the pulling of your data a little more challenging, but not impossible.

This is where I began helping people not just understand the technology of APIs, but also the politics of API operations. Meaning Twitter has an API for your bookmarks, they just don't want you to get at it via the public API (I am not sure why). Anyways, in this scenario I can't make a ready to go Postman collection for you to use, I am going to have to teach you a little bit more Postman Kung Fu, and teach you how to sniff out the APIs that exist behind everything you do each day. It is still something you can do without programming, and with Postman you can still get at your data in the same way we did for the public Twitter favorites API. You just have to be curious enough to not turn away as I pull back the curtain of the world of APIs a little bit more, with a simple walk through. Something that will ultimately give you more control over your data, and how you take control over your digital presence.

First, a couple of assumptions I am making here -- let's get these out of the way upfront this time, rather than after the fact.

*   **[Postman Installed](https://www.postman.com/downloads/)** - You have downloaded and installed Postman on your Windows or Mac machine.
*   **Twitter Account** \- You already have a Twitter account and you have bookmarks stored within it.
*   **Chrome Browser** - For this API exercise you will need to be accessing your Twitter in Chrome.

Next, you will need [to install the Postman Interceptor as an extension for Chrome](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en), which we will be using to intercept web traffic as we browse Twitter, and route through our Postman, capturing the API call being made to pull your bookmarks--connecting our Postman client with our Chrome browser.

[![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/0-postman-interceptor.png)](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en)

Once you have Interceptor installed in Chrome, you need to go back to your Postman client, and configure the proxy before turning on the firehose in the browser. There are a couple of things we need to do in Postman before we are ready to be capturing traffic. To begin I always make sure I'm working in a relevant Postman workspace, so that my collections do not get lost in my personal workspace.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/1-postman-workspace.png)

Choose an existing workspace, or select to create a new workspace to get this work done. Then go ahead and create a new Postman collection called _**"Web Traffic"**_, which we can use to route all of our web traffic into, creating a single bucket for everything coming in.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/2-new-postman-collection.png)

Now that we have a collection to route our traffic, let's configure our Postman client to accept traffic from our Chrome Browser, turning all of the web traffic Ito individual requests that can be save, shared, and executed. To configure the Postman proxy, click on the little satellite dish in the top right corner of the application.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/3-postman-proxy-corner.png)

Once the settings window pops up we are going to click on interceptor as the source, making sure it is grabbing traffic from the Google Chrome browser extension, connecting Postman and the browser in real time.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/4-postman-proxy-source.png)

Next, we will want to turn on capturing requests by selecting the ON button, which will turn the light next to INTERCEPTOR CONNECTED green. Preparing postman for receiving web traffic coming from the Chrome browser.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/5-postman-proxy-capture.png)

Now we want to choose the collection we created as the place to save requests to, choosing **"Collections: Web Traffic"** from the dropdown, which hopefully isn't too long depending on how you manage your API workspaces.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/6-postman-proxy-save-requests-to.png)

Next we will need to turn on the firehose in our Chrome browser, but before we do **[I recommend you visit Twitter and load up your bookmarks page](https://twitter.com/i/bookmarks)**, so that we are prepared to refresh the page and make the underlying API call once we turn on Interceptor. Once the page has loaded, go ahed and click on the round orange Postman Interceptor icon in the toolbar of your Chrome browser.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/7-chrome-postman-interceptor.png)

Turn on Interceptor, refresh your page, then go ahead and click to turn Interceptor back off. If you leave on you will tracking every single API call being made by every browser tab you have open. Something that might be interesting for exploration in the future, but right now we are only interested in a single API call, and we don't want to be drowned by web traffic. In the brief second I have turned on and was refreshing the bookmarks page almost 50 single API calls were made in my Chrome browser, and I'm just interested in one. To find the AP request we are looking for go back to your Postman client, and type "bookmark" in your search filter toolbar in the top / left corner.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/8-postman-collection-bookmark-filter.png)

You will notice that our Postman Interceptor captured the call to the Twitter Bookmark API for us, complete with all the parameters, and most importantly, it also captures all the headers for the API call, complete with the authentication we will need to actually make the API call.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/9-postman-collection-bookmark-headers.png)

Before I continue I always save my requests, giving each request a a meaningful name and description that describes what they do, and I store them in small portable, sharable, and executable Postman collections.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/10-postman-collection-save-bookmark.png)

Once I save my request, I go ahead and turn off my proxy in Postman and Chrome, and I delete the "Web Traffic" collection--I do not need the other requests, I now have the request that I need.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/11-postman-collection-delete-collection.png)

Now that I have a single API call that Twitter uses to display my bookmarks in the web application. Sadly, this API isn't available publicly as part of the API, but I"m guessing Twitter has its reasons. Anyways, thanks to Postman, we can still get at our data behind web applications, even when providers don't want us to. Go ahead and hit send on the API request, returning the JSON listing of all your bookmarks.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/12-postman-collections-json-response.png)

As we did with the other two collections, we want to craft a script that will sift through the JSON and pull out the links we are wanting for each of the bookmarked Tweets. Since I can't create a collection as part of this project, here is the script you will need to paste in Postman.

Go ahead and copy / paste the content of this script then go back to Postman and click on the tests tab for your Twitter bookmark request. The script will take the results from the Twitter API, and render it to the visualizer for us.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/13-postman-collections-test-tab.png)

Once we have added the script to our Postman request, we can click send again, making the call to the Twitter bookmark API, parsing the JSON with our script, and publishing to the Postman Visualizer tab, rendering only our Tweets and the URLs we bookmarked.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/twitter-bookmarks/14-postman-collection-visualizer.png)

That is it. Phew. Hopefully it wsn't too many steps for. It is a little more involved than [our other API capabilities](https://github.com/api-evangelist/capabilities), but once you master this one you should be a little more equipped for reverse engineering the web applications you depend on each day. Depending on how many bookmarks you will be pulling, you may need to tweak your request, and eventually your authorization tokens will expire and you will need to recreate your request using the Postman Interceptor. Sorry, there is no way around it until Twitter adds the bookmark API to their public API--right now your Twitter developer tokens will not work for Twitter bookmarks. ;-(

I didn't expect to go from 101 level to 201 level API stuff as a next step, but there isn't any alternative in this situation. I feel like simple capability-driven Postman API collections are within reach of developers and non-developers alike. I also feel like proxying your web traffic, and sifting through the resulting exhaust for API gems is something within reach too. Postman isn't just for developers and APIs aren't either. If you use the web, you should have have some sort of awareness of what is happening behind the curtain of the web applicatons you use daily. Postman + Interceptor allow you to do this without writing code, or really understanding how it all works. Hopefully it provides a quick glimpse at what is going on behind the scenes, and wets your appetite enough to convince you play around a little more.