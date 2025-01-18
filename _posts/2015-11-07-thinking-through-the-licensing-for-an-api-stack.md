---
layout: post
title: Thinking Through The Licensing For An API Stack
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-licensing-stack.png
author:
  name: kinlane
tags:
  - Licensing
  - Stack
---
[I've spent a lot of time thinking through the licensing we apply to APIs, as part of my work on the Oracle v Google API copyright case](http://apievangelist.com/2015/08/22/what-we-can-do-to-make-a-difference-in-the-wake-of-oracle-v-google-api-copyright-case/). The licensing around APIs is still in flux, with the current precedent being that APIs are copyrightable. Even though I do not believe this stance, I encourage API designers to make sure and apply one of the more liberal Creative Commons licenses to your API definitions, taking a pre-emptive stance in the conversation.

In my experience most API providers, let alone consumers and the public at large, do not understand the separation between an APIs definition, and the code that runs the API, and often even the code that consumes an API. To help us visualize the separation, as well as think through the licensing implications of each layer, [I have setup a specific research project that addresses API licensing](http://licensing.apievangelist.com/), in hopes of spending time regularly researching the topic, as well as telling stories that help people navigate how to license their APIs.

Here is how I'd break down the five most common layers of the API licensing stack, and some ideas for how you can apply licenses to these layers of API operations.

**Server Code -** For many APIs, your server code will be your secret sauce and kept proprietary, but for those of you who wish to open source this critical layer, here are some options. To help you navigate the licensing, I recommend using [Github's Choose a License](http://choosealicense.com/).

*   **[Apache](http://www.apache.org/licenses/LICENSE-2.0)** - The Apache License is a free software license written by the Apache Software Foundation (ASF). The Apache License requires preservation of the copyright notice and disclaimer. Like other free software licenses, the license allows the user of the software the freedom to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software, under the terms of the license, without concern for royalties.
*   **[GPL](http://www.gnu.org/licenses/gpl-3.0.en.html)** - The GNU General Public License (GNU GPL or GPL) is the most widely used\[6\] free software license, which guarantees end users (individuals, organizations, companies) the freedoms to run, study, share (copy), and modify the software. Software that allows these rights is called free software and, if the software is copylefted, requires those rights to be retained.
*   **[MIT](https://opensource.org/licenses/MIT)** - The MIT License is a free software license originating at the Massachusetts Institute of Technology (MIT). It is a permissive free software license, meaning that it permits reuse within proprietary software provided all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

**Data** \- Serving up data is one of the most common reasons for deploying an API, and the [Open Data Commons](http://opendatacommons.org/), provides us with some licensing options.

*   **[Public Domain Dedication and License (PDDL)](http://opendatacommons.org/licenses/pddl/)** — The PDDL places the data(base) in the public domain (waiving all rights).
*   **[Attribution License (ODC-By)](http://opendatacommons.org/licenses/by/)** — You are free to share, create, and adapt, as long as you attribute the data source.
*   **[Open Database License (ODC-ODbL)](http://opendatacommons.org/licenses/odbl/)** — You are free to share, create, and adapt, as long as you attribute the data source, share-aloe, and keep open.

**Content -** Separate from the data, APIs are being used to server up short, and long form content, where liberal [Creative Common](http://creativecommons.org/) licenses should be considered.

*   **[CC BY](http://creativecommons.org/licenses/by/4.0/)** - This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered.
*   **[CC BY-SA](http://creativecommons.org/licenses/by-sa/4.0) -** This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to copyleft free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use.
*   **[CC0](https://creativecommons.org/about/cc0)** - Use this universal tool if you are a holder of copyright or database rights, and you wish to waive all your interests in your work worldwide.

**API Definition -** The part of the discussion be defined (unfortunately) by the Oracle v Google Java API copyright legal battle, and in light of the ruling, I urge you to consider one of the more liberal [Creative Common](http://creativecommons.org/) licenses.

*   **[CC BY](http://creativecommons.org/licenses/by/4.0/)** - This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered.
*   **[CC BY-SA](http://creativecommons.org/licenses/by-sa/4.0) -** This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to copyleft free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use.
*   **[CC0](https://creativecommons.org/about/cc0)** - Use this universal tool if you are a holder of copyright or database rights, and you wish to waive all your interests in your work worldwide.

**Client Code -** Separate from your server side code, you should make sure all of your client side code SDKs, PDKs, and starter kits have an open source license applied-o-remember you are asking them to potentially integrate this into their business operations. Again I recommend using [Github's Choose a License](http://choosealicense.com/) to help you navigate this decision.

*   **[Apache](http://www.apache.org/licenses/LICENSE-2.0)** - The Apache License is a free software license written by the Apache Software Foundation (ASF). The Apache License requires preservation of the copyright notice and disclaimer. Like other free software licenses, the license allows the user of the software the freedom to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software, under the terms of the license, without concern for royalties.
*   **[GPL](http://www.gnu.org/licenses/gpl-3.0.en.html)** - The GNU General Public License (GNU GPL or GPL) is the most widely used\[6\] free software license, which guarantees end users (individuals, organizations, companies) the freedoms to run, study, share (copy), and modify the software. Software that allows these rights is called free software and, if the software is copylefted, requires those rights to be retained.
*   **[MIT](https://opensource.org/licenses/MIT)** - The MIT License is a free software license originating at the Massachusetts Institute of Technology (MIT). It is a permissive free software license, meaning that it permits reuse within proprietary software provided all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

This list does not reflect all of the licensing opportunities available to you. These reflect the licensing options that I recommend you consider, as part of your API operations. I want as many APIs to thoughtfully consider the licensing for their entire API stack, and I'm kick-starting these research to provide a short, concise guide for API providers to consider. 

If I get my way, every layer of the API stack will be licensed as openly as possible, however I add some extra concern for the [API definition layer](http://definitions.apievangelist.com/). I know many of my readers will argue that this is just code, and should be licensed along side your server side code, but this is not true-modern API definitions are increasingly available as JSON, YAML, Markdown, that is telling a very important story that is having a significant impact on how we do business, and live our personal lives--a story that should be able to retold and echoed across the digital landscape, without licensing restrictions.

[My API licensing research](http://licensing.apievangelist.com/) is just getting going. I will be rounding it off with examples of the approach used by leading API providers, news and stories I curated from across the space, as well as more [API Commons](http://apicommons.org) tooling that helps you define the licensing for your API, and share in a machine readable way.