---
layout: post
title: The Tyk Wordpress API Portal
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_05_at_6.44.14_pm.png
atomdate: 2017-03-07T20:00:00.000Z
tags:
  - Portal
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_05_at_6.44.14_pm.png)](https://opentransportdata.swiss/en/)

I am finally seeing more solutions available for API providers when it comes to publishing an portal for their API operations. [I've long had my minimum viable API portal definition](http://portal.minimum.apievangelist.com/), which I recently [deployed to support the Miami Open211 API](https://apievangelist.com/2017/03/02/my-developer-portal-checklist-for-a-human-services-api/), and [I also wrote about AWS serverless approach to an API portal](http://apievangelist.com/2017/02/28/the-aws-serverless-api-portal/). Next up, is [a WordPress solution from my API management partner Tyk](https://tyk.io/2017/03/01/new-wordpress-api-portal-plugin/).

The WordPress API portal solution has the following features:

*   Automatic developer registration on Tyk when developers sign up in WP
*   Configuration of API policies available for token registration
*   Developers may request an access token for the available API policies
*   Automatic or manual approval of key requests
*   Storage of token (references) by name and API policy
*   Revoking of tokens by developer
*   Display usage statistics per key
*   Request quota usage per key

All the basics you need when standing up a basic API operation. If WordPress is your go-to content management system, then it might make sense for you to think about API portal in these terms. The [Swiss Federal Railways (SBB-CFF-FFS)](https://opentransportdata.swiss/en/) is already using the plugin in production, and you can [download the plugin on Github](https://github.com/liip/wp-tyk-dev-portal), or find it [over at WordPress.org](https://wordpress.org/plugins/tyk-developer-portal/).

We need multiple versions of API portals like this, designed for every type of platform a company, organization, institution, and government agency might be already using as a default platform for their operations. This is why API management providers [need to follow Tyk's lead and make sure your solution is API driven](http://apievangelist.com/2017/02/27/the-api-definition-for-the-tyk-api-gateway/)\--practicing what you preach so that your API management solution can be integrated anywhere.