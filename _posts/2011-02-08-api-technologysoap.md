---
layout: post
title: API Technology - SOAP
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - SOAP
  - SOA
  - Technology
---
[![](http://kinlane-productions2.s3.amazonaws.com/SOAP.png)](http://oreilly.com/catalog/9780596000950)SOAP, or [Simple Object Access Protocol](http://en.wikipedia.org/wiki/SOAP "SOAP"), is an XML-based protocol that allows applications to exchange information over the Internet using [HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") or [RPC](http://en.wikipedia.org/wiki/Remote_procedure_call "Remote procedure call").

SOAP uses Extensible Markup Language (XML) for its message format. The SOAP Messaging Framework consists of:

*   **Processing Model** - Rules for processing a SOAP message
*   **Extensibility Model** - SOAP features and SOAP modules
*   **Underlying Protocol Binding Framework** - Rules for defining a binding to an underlying protocol that can be used for exchanging SOAP messages
*   **Message Construct** - Structure of a SOAP message

A SOAP message returning a users information might look like: SOAP was originally designed in 1998 as a Microsoft project and became a [W3C Recommendation](http://www.w3.org/TR/soap/) in June 2003.

Even though SOAP has a long history with enterprise development, it has not seen the same adoption with the web 2.0 developer community, in no small part due to its complex and verbose nature.

SOAP is far from dead, but in the new generation of web-based APIs, RESTful interfaces returning JSON are fast replacing the bulky SOAP interfaces that returns XML.