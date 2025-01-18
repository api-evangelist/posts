---
published: true
layout: post
title: Bound Document Printer with Box.net and Mimeo Connect
image: http://kinlane-productions2.s3.amazonaws.com/cloud-storage/Box-logo-new.jpg
author:
  name: kinlane
tags:
  - Print
---
As the [Mimeo.com](http://www.mimeo.com "Mimeo.com") API Evangelist one of my jobs is to find other platforms, services and technology that goes well with the [Mimeo Connect Cloud Print API](../../ "Mimeo Connect Cloud Print API").

One such platform that I've identified as a Mimeo.com partner platform is [Box.net](http://www.box.net "Box.net").

Box.net provides a complete cloud storage platform, with a powerful developer platform and application directory called OpenBox.

Mimeo.com provides commercial printing of many types of bound documents including spiral bound, magazine style, and perfect bound, and with Mimeo Connect Cloud Print API you can integrate printing of these using Box.net

_\*\*\* Heads up!! This requires basic understanding of box.net and programming with PHP \*\*\*_

To do this I sign up for a [Box.net developers account](http://www.box.net/developers "Box.net Developer Account") and add new OpenBox application:

*   Give Application Name and Description
*   Assign a description page for the application that tells about the printer.

An important part of this application is a callback URL for when users first add the Box.net application. This has to be a page you host that handles the Box.net oAuth, which gives this bound document printer access to a users account.

Another important part of each application are whats called _service actions_. Service actions which will show up for any user who adds this application to their Box.net account from OpenBox.

For my Open Box Application I create a new service action: ![](https://kinlane-productions2.s3.amazonaws.com/Box.net/Open-Box.png)

*   Give Application Service Action a title like, **_Bound Document Printer @ Mimeo_**
*   Choose which document extensions my printer supports, PDF for now
*   Enter a callback function which Box.net will send user when printing document
*   Enter callback parameters such as URL, Title, Extension of Box.net file to be printed.

Save your service action, fill out any other relevant parts of your application and hit save as well.

This creates your application at Box.net.

Now you need put together the code that integrates Box.net with your Mimeo.com account using the Mimeo Connect Cloud Print API.

First you need the OAuth piece of code described above, you can [download this at Github](https://github.com/mimeoconnect/Mimeo-Box.net "download at Github"). It requires the following files:

*   box\_config.php
*   boxlibphp5.php
*   class.curl.php
*   index.php

This will allow your bound document printer to OAuth with Box.net.

Now you need the actual code that lets you pull the file being passed by Box.net and print uses Mimeo.com.

Here is a sample code file for doing this:

The above code sample demonstrates how to build a [bound document printer using Box.net cloud storage and Mimeo Connect Cloud Print API](../../blog/blog_detail.php?ID=90 "bound").

With this bound document printer you can public books, magazines, newsletters, reports and many other types of bound documents.

You can build any custom bound document with your Mimeo.com account, with specific binding, paper, folds, covers, and much more. Then merge this document with any multi-page document from Box..net

Any company can build a Box.net Cloud Printer and publish to the OpenBox directory, to allow commercial printing using

Mimeo.com You can dowload a complete library of [PHP code samples for integrating Box.net with Mimeo.com](https://github.com/mimeoconnect/Mimeo-Box.net "PHP code samples for integrating Box.net with Mimeo.com") at Github.