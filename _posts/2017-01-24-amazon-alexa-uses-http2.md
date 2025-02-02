---
layout: post
title: Amazon Alexa Uses HTTP/2
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-http2.jpg
atomdate: 2017-01-24T20:00:00.000Z
tags:
  - HTTP
  - HTTP/2
  - Amazon
---
I track on the different approaches used by API providers so that I know where to find examples of leading approaches to API design and deployment. Then I write about them so that I have something to reference across my research. I keep an eye out for [API providers who employ hypermedia as part of their API design](http://hypermedia.apievangelist.com/apis/), as well as companies who are putting HTTP/2 to work as part of their design and deployment.

[The Amazon Alexa Voice Service API employs HTTP/2 as part of their voice-enablement platform](https://developer.amazon.com/public/solutions/alexa/alexa-voice-service/docs/managing-an-http-2-connection). I'm still learning about HTTP/2 so I was pleased to see the amount of education they provide in their documentation, outlining some of the key terms and concepts at play;

*   **Frame:** The basic protocol unit in HTTP/2; each frame serves a different purpose, for example, HEADERS and DATA frames form the basis of HTTP requests and responses.
*   **Stream:** An independent, bi-directional sequence of frames exchanged between a client and server within an HTTP/2 connection. For detailed information, see [Streams and Multiplexing in RFC 7540](https://tools.ietf.org/html/rfc7540#section-5).
*   **Interfaces:** AVS exposes interfaces (SpeechRecognizer, AudioPlayer, SynchronizeState, etc.) that provide your product access to Alexa’s built-in skills.
*   **Downchannel:** A stream you create in your HTTP/2 connection, which is used to deliver directives from the cloud to your client. The downchannel remains open in a half-closed state from the device and open from AVS for the life of the connection. The downchannel is primarily used to send cloud-initiated directives and audio attachments to your client
*   **Cloud-initiated Directives:** Directives sent from the cloud to your client. For example, when a user adjusts device volume from the Amazon Alexa App, a directive is sent to your product without a corresponding voice request.

They also provide details on crafting the [HTTP/2 Message Headers](https://developer.amazon.com/public/solutions/alexa/alexa-voice-service/docs/avs-http2-requests#headers), how to construct the [HTTP/2 Multipart Messages](https://developer.amazon.com/public/solutions/alexa/alexa-voice-service/docs/avs-http2-requests#messages), and what to expect with [HTTP/2 Responses](https://developer.amazon.com/public/solutions/alexa/alexa-voice-service/docs/avs-http2-requests#responses). They have language SDKs in C / C++([nghttp2](https://nghttp2.org/)), C / C++([curl and libcurl](http://curl.haxx.se/)), Java ([OkHttp](https://github.com/square/okhttp)), Java [Netty](http://netty.io/)), Java([Jetty](http://git.eclipse.org/c/jetty/org.eclipse.jetty.project.git/tree/?h=master)). I am particularly interested in learning more about how the "Cloud-initiated Directives" works, allowing actions to be sent as part of each connection.

I'm tracking on the moving parts so that I can evolve my own understanding of HTTP/2 in action, and start building a list of APIs who are taking a step forward when it comes to their HTTP infrastructure. It helps to have several different providers to point at when I'm talking about new approaches. I also like to aggregate the common elements that are present, and hopefully, begin to establish a common set of building blocks present when HTTP/2 is put to use.