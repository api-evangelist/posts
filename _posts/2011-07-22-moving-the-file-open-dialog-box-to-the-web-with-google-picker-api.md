---
layout: post
title: Moving the File Open Dialog Box to the Web with Google Picker API
url: >-
  http://apievangelist.com/2011/07/22/moving-the-file-open-dialog-box-to-the-web-with-google-picker-api/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Web
  - Open
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/file-open-dialog.png)The file open dialog box is an important tool that we use every day, but we very rarely notice it or think much about it.

On the Windows platform, using the file open dialog box, we see our desktop, my documents or whatever was the last hell hole of a folder we were working in.

On the Mac, using the file open dialog box, it seems like I eternally live in my downloads folder with the occasional venture do my documents or desktop folders. Maybe that's just me?

More and more I find myself living in my Amazon S3, which I still access via my Firefox S3Fox extension versus the Amazon Console. Old habits die hard. Regardless, more of my world is living in the clouds.

The file open dialog box just doesn't have the same meaning in the clouds. Its a desktop, localized tool. When we open it, we see that local desktop mess we've created and maintained (well sort of).

When we open a web dialog, we don't see much. It seems to be something made up, nothing near the meaning of when we open it locally. Or we are forced to paste the URL of a single file or page into a textbox.

Google is [making a move to re-invent the file open dialog box](http://googlecode.blogspot.com/2011/07/get-picky-with-google-picker-api.html "making a move to re-invent the File Open Dialog"), in context of the web, and the context of your Google workspace.

With the [Google Picker API](http://code.google.com/apis/picker/docs/index.html "Google Picker API"), any developer can build a web-based file open dialog box. In Google's opinion, a web-based file open dialog box should provide a user with a more modern experence:

*   **Familiar** � A look-and-feel that users will recognize.
*   **Graphical** � A dialog experience, with many views showing previews or thumbnails.
*   **Streamlined** � An inline, modal window, so users never leave the main application.

I would add that users need to see, and have access to the content they use most. In this day and age, this means on and offline content. Google Picker API gives you access to what you use most on the Google platform. This makes sense in the context of the Google vision.

As a developer Google Picker API provides you display access to a users:

*   Google Docs (Folders, Docs, Spreadsheets, Presentations)
*   Picasa Web Folders
*   Videos (Youtube?)

Since I use Google Docs and Picassa heavily, this will help, but I still don't consider this the next generation of the file open dialog box.

I would like to see all of my Google Data (I'm sure Google is working on this), and other sources of data I use regularly. I need my Flickr, Amazon S3, Twitter, Instapaper, Evernote, Github, Pinboard and any other relevant applications I use.

Will Google open up access to other services, allow them to register their services, and offer access within the new, web-based vision of the file open dialog box?

I agree the file open dialog box is ready for an overhaul. I like Google's style. I think they have the talent and resources to make it happen. I also think they will recognize the importance of opening up access to other services.

**One last random thought:** When will my file open dialog box give me access to my [Locker Project](http://lockerproject.org/ "Locker Project") data?