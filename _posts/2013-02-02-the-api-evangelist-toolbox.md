---
layout: post
title: The API Evangelist Toolbox
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/toolbox.jpg
author:
  name: kinlane
tags:
  - API Evangelist
  - Evangelist
  - Toolbox
---
I've spent a lot of time lately looking for new tools that will help you plan, develop, deploy and manage APIs.  My goal is to keep refining the [API Evangelist Tool](/apitools/) section to provide complete API tool directory you can filter by language or other tag.  

I've added a number of open source tools to my database lately.  But I know there are many more out  there.  So I put out on the Twitterz that I was looking for anything that is missing. Here is what I got:

> @[kinlane](https://twitter.com/kinlane) [runscope.com/oauth\_tool](http://t.co/Wwk1Tzus "http://runscope.com/oauth_tool")
> 
> — John Sheehan (@johnsheehan) [February 2, 2013](https://twitter.com/johnsheehan/status/297837952980090881)

> @[kinlane](https://twitter.com/kinlane) [github.com/devo-ps/carte](https://t.co/ByyitCE8 "https://github.com/devo-ps/carte")
> 
> — John Sheehan (@johnsheehan) [February 2, 2013](https://twitter.com/johnsheehan/status/297838071062331392)

> @[kinlane](https://twitter.com/kinlane) I/O docs. what all do you want it to cover? i’d put requestb.in, localtunnel, hurl.it, @[postmanclient](https://twitter.com/postmanclient)...
> 
> — John Sheehan (@johnsheehan) [February 2, 2013](https://twitter.com/johnsheehan/status/297839139041202176)

> @[kinlane](https://twitter.com/kinlane) [httpbin.org](http://t.co/kLPvwHWm "http://httpbin.org"), [foauth.org](http://t.co/XnKkB8rB "http://foauth.org") as well
> 
> — John Sheehan (@johnsheehan) [February 2, 2013](https://twitter.com/johnsheehan/status/297839175711981568)

> @[johnsheehan](https://twitter.com/johnsheehan) @[kinlane](https://twitter.com/kinlane) and [j.mp/WenvTn](http://t.co/q4gdDwZx "http://j.mp/WenvTn")
> 
> — Phil Leggetter (@leggetter) [February 2, 2013](https://twitter.com/leggetter/status/297840321310646272)

> @[kinlane](https://twitter.com/kinlane) Fiddler.Can't work with HTTP on Windows and not have fiddler installed.
> 
> — Darrel Miller (@darrel\_miller) [February 2, 2013](https://twitter.com/darrel_miller/status/297842539019513856)

> @[kinlane](https://twitter.com/kinlane) @[darrel\_miller](https://twitter.com/darrel_miller) in that case, Charles Proxy too
> 
> — John Sheehan (@johnsheehan) [February 2, 2013](https://twitter.com/johnsheehan/status/297847719693803521)

Resulting in the following tools being suggested:

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/Carte-Logo.png)](https://github.com/devo-ps/carte)

**[Carte](https://github.com/devo-ps/carte)** - Carte is a simple Jekyll based documentation website for APIs. It is designed as a boilerplate to build your own documentation and is heavily inspired from Swagger and I/O docs. Fork it, add specifications for your APIs calls and customize the theme. Go ahead, see if we care.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/Charles-Proxy-Logo.png)](http://www.charlesproxy.com/)

**[Charles Proxy](http://www.charlesproxy.com/)** - Charles is an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information).

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/fiddler-logo.png)](http://www.fiddler2.com/fiddler2/)

**[Fiddler](http://www.fiddler2.com/fiddler2/)** - Fiddler is a Web Debugging Proxy which logs all HTTP(S) traffic between your computer and the Internet. Fiddler allows you to inspect traffic, set breakpoints, and "fiddle" with incoming or outgoing data. Fiddler includes a powerful event-based scripting subsystem, and can be extended using any .NET language.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/foauth-logo.png)](http://foauth.org)

**[foauth.org: OAuth for one](http://foauth.org)** \- OAuth is a great idea for interaction between big sites with lots of users. But, as one of those users, it’s a pretty terrible way to get at your own data. That’s where foauth.org comes in, giving you access to these services in three easy steps.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/hurl-logo.png)](http://www.hurl.it/)

**[Hurl](http://www.hurl.it/)** - Hurl makes HTTP requests. Enter a URL, set some headers, view the response, then share it with others. Perfect for demoing and debugging APIs.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/httpbin-logo.png)](http://httpbin.org)

**[httpbin: HTTP Request & Response Service](http://httpbin.org)** - Testing an HTTP Library can become difficult sometimes. PostBin.org is fantastic for testing POST requests, but not much else. This exists to cover all kinds of HTTP scenarios. Additional endpoints are being considered. All endpoint responses are JSON-encoded.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/inspectb-in-logo.png)](http://inspectb.in/)

**[InspectB.in](http://inspectb.in/)** - InspectBin is based on the idea of RequestBin (requestb.in), set your http client or webhook to point to your InspectBin url. We will collect http requests and show it in a nice and friendly way, live!

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/io-docs-logo.jpg)](https://github.com/mashery/iodocs)

**[I/O Docs](https://github.com/mashery/iodocs)** - I/O Docs is a live interactive documentation system for RESTful web APIs. By defining APIs at the resource, method and parameter levels in a JSON schema, I/O Docs will generate a JavaScript client interface. API calls can be executed from this interface, which are then proxied through the I/O Docs server with payload data cleanly formatted (pretty-printed if JSON or XML).

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/localtunnel-logo.png)](http://progrium.com/localtunnel/)

**[localtunnel](http://progrium.com/localtunnel/)** - The easiest way to share localhost web servers to the rest of the world.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/postman-rest-client-logo.png)](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm)

**[Postman - REST Client](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm)** - Postman helps you be more efficient while working with APIs. Postman is a scratch-your-own-itch project. The need for it arose… Postman helps you be more efficient while working with APIs. Postman is a scratch-your-own-itch project. The need for it arose while one of the developers was creating an API for his project. After looking around for a number of tools, nothing felt just right. The primary features added initially were a history of sent requests and collections. A number of other features have been added since then. Here is a small list.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/requestbin-logo.png)](http://requestb.in/)

**[RequestBin](http://requestb.in/)** - RequestBin lets you create a URL that will collect requests made to it, then let you inspect them in a human-friendly way. Use RequestBin to see what your HTTP client is sending or to look at webhook requests.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-tools/runscope-logo.png)](ttps://www.runscope.com/oauth_tool)

**[Runscope - OAuth2 Token Generator](ttps://www.runscope.com/oauth_tool)** - Tools for developers consuming APIs in their mobile and web apps.

All tools have been added to the [API Evangelist toolbox](/apitools/).  As I continue to work with and define, I will add more meta data that will help you find the tool your looking for. 

Thanks John Sheehan ([@johnsheehan](https://twitter.com/johnsheehan)),  Phil Leggetter ([@leggetter](https://twitter.com/leggetter)) and Darrel Miller ([@darrel\_miller](https://twitter.com/darrel_miller)).