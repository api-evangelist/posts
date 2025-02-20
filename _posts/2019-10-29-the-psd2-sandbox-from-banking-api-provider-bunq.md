---
published: true
layout: post
title: The PSD2 Sandbox From Banking API Provider bunq
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bunq_psd2_sandbox.png
author:
  name: kinlane
tags:
  - Financial
  - Standards
  - PSD2
  - Sandbox
  - Banking
---
I am a big fan of all API providers who offer sandboxes, and providing synthetic APIs, data, and other resources. It should be the default operating mode for anyone offering a public API, but it is definitely a requirement of providers who operate in regulated industries. With this in mind I am always on the hunt for sandboxes to showcase as I’m profiling APIs, so I was pleased to find [a sandbox for banking API provider bunq](https://www.bunq.com/api/psd2-sandbox), and impressed to learn it was also a PSD2 compliant sandbox—meeting the requirements of the EU banking API standard.  
  
As a PSD2 service provider, either an Account Information Service Provider (AISP) or Payment Initiation Service Provider (PISP), you will need a license from your local supervisor, and your unique electronic identification, authentication and trust services (eIDAS) certificate number to start using the PSD2-compliant bunq API in production. To help jumpstart developers, bunq provides their PSD2 compliant sandbox where you can generate a pseudo certificate, and get to work developing your application on top of the bunq sandbox API.  
  
[The bunq PSD2 sandbox API](https://www.bunq.com/api/developer) provides different interaction abilities based upon your role, adding another interesting dimension to the sandbox, targeting specific personas defined by the EU banking regulation:

*   **Account Information Service Provider (AISP)** \- With AISP you get to read account information like: legal name, IBAN, nationality, card validity data, account balance and transaction history.
*   **Payment Initiation Service Provider (PISP) -** With PISP you can read account information including legal name and IBAN. You can also initiate payments.

In addition to [providing documentation for PSD2 service providers](https://doc.bunq.com/#/psd2), bunq also provides [documentation for helping service providers move to production](https://doc.bunq.com/#/moving-to-production) once they have successfully developed and tested their application against the sandbox API. Providing a pretty solid look at how an API provider can operate a sandbox, but also an example of how industry API standards and regulation can be emulated within sandbox environments, helping standardize how industry compliant applications are developed.  
  
I am adding bunq to the list of PSD2 APIs that I showcase. I’m also adding the industry compliant sandbox as a building block to my research. It provides a pretty important example of how API sandboxes can be used in service of not just the standardization of APIs, but the standardization of them in service of regulatory forces. An API sandbox is a critical building block for API providers, helping them virtualize APIs and data for developers. Making it easier to confidently develop applications on top of APIs, without the concern of having to work with production data, increasing the chance that mistakes might be made.