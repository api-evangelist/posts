---
layout: post
title: The API Definition For The Tyk API Gateway
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_02_25_at_9.00.37_pm.png
atomdate: 2017-02-27T20:00:00.000Z
tags:
  - Gateway
  - Definition
---
If you are selling a service you should have an API. It is something you hear me talk about a lot here on the blog. I push on this subject because it is important, and there are numerous API service providers out there who do not have an API or choose to not make them available. In a DevOps, continuous integration world, we need the entire stack to have APIs--making our API platforms programmatic, just like the data, content, and algorithms we are making available via the APIs we are deploying.

If you need an example of this in the wild, [you don't have to look much further than my partner in crime Tyk](http://tyk.management.apievangelist.com/), who have a simple API for their API gateway--no matter where you deploy the gateway, you can manage it using it's APIs. The Tyk API Gateway API provides you with a base set of paths for you to manage your gateway.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/tyk_io_logo.png)

An open source, lightweight, fast and scalable API Gateway. Set rate limiting, request throttling, and auto-renewing request quotas to manage how your users access your API. Tyk supports access tokens, HMAC request signing, basic authentication and OAuth 2.0 to integrate old and new services easily. Tyk can record and store detailed analytics which can be segmented by user, error, endpoint and client ID across multiple APIs and versions. Integrate your existing or new applications with Tyk using a simple REST API, Tyk even support hot-reloads so you can introduce new services without downtime.

*   [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-portal-developers.jpg)](http://tyk.io/)
*   [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-blog-icon.png)](https://tyk.io/news-2/)
*   [![](https://s3.amazonaws.com/kinlane-productions2/building-blocks/x-signup.png)](/admin/blog/)
*   [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-bug.png)](/admin/blog/)
*   [![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-terms-conditions.png)](/admin/blog/)

Tyk API Management Paths Available

([OpenAPI Spec](https://raw.githubusercontent.com/kinlane/tyk-api-management/master/_data/api-commons/tyk/tyk-api-management-openapi-spec.json))

*   **/tyk/apis/ -- Get APIs** \[GET\] - Gets a list of \*API Definition\* objects that are currently live on the gateway
*   **/tyk/apis/ -- Create API** \[POST\] - Create an \*API Definition\* object
*   **/tyk/apis/{apiID} -- Delete API** \[DELETE\] - Deletes an \*API Definition\* object, if it exists
*   **/tyk/apis/{apiID} -- Get API** \[GET\] - Gets an \*API Definition\* object, if it exists
*   **/tyk/apis/{apiID} -- Update API** \[PUT\] - Updates an \*API Definition\* object, if it exists
*   **/tyk/health/ -- Check Health** \[GET\] - Gets the health check values for an API if it is being recorded
*   **/tyk/keys/ -- Get Keys** \[GET\] - Gets a list of \*key\* IDs (will only work with non-hashed installations)
*   **/tyk/keys/create -- Create Key** \[POST\] - Create a new \*API token\* with the \*session object\* defined in the body
*   **/tyk/keys/{keyId} -- Remove Key** \[DELETE\] - Remove this \*API token\* from the gateway, this will completely destroy the token and metadata associated with the token and instantly stop access from being granted
*   **/tyk/keys/{keyId} -- Add Custom Key** \[POST\] - Add a pre-specified \*API token\* with the \*session object\* defined in the body, this operatin creates a custom token that dsoes not use the gateway naming convention for tokens
*   **/tyk/keys/{keyId} -- Update Key** \[PUT\] - Update an \*API token\* with the \*session object\* defined in the body, this operatin overwrites the existing object
*   **/tyk/oauth/authorize-client/ -- OAuth Authorize Client** \[POST\] - The final request from an authorising party for a redirect URI during the Tyk OAuth flow
*   **/tyk/oauth/clients/create -- OAuth Create Client** \[POST\] - Create a new OAuth client
*   **/tyk/oauth/clients/{apiId} -- OAuth Get Clients** \[GET\] - Get a list of OAuth clients bound to this back end
*   **/tyk/oauth/clients/{apiId}/{clientId} -- Delete Client** \[DELETE\] - Delete the OAuth client
*   **/tyk/oauth/refresh/{keyId} -- Invalidate Key** \[DELETE\] - Invalidate a refresh token
*   **/tyk/reload/ -- Reload Gateway** \[GET\] - Will reload the targetted gateway
*   **/tyk/reload/group -- Reload Group** \[GET\] - Will reload the cluster via the targeted gateway

The Tyk API Gateway provides a base set of API management features that can be deployed in the cloud, on-premise, or on-device. Making the key ingredients for API management programmable.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_02_25_at_9.00.37_pm.png)

Tyk's API Gateway represents just one component in any API operation's toolbox. [Tyk also provides an OpenAPI for the API gateway](https://github.com/TykTechnologies/tyk-swagger-definitions/blob/master/tyk_gateway_api.yml) making things much more plug and play as part of any API life cycle--something [I've made even more discoverable using APIs.json](https://raw.githubusercontent.com/kinlane/tyk-api-management/master/_data/api-commons/tyk/apis.json). Their approach provides a nice blueprint that all API providers should be following--well-defined APIs for all your services (open source if you can ;-).

I track on any service or tool I include in my research like it has an API. If it does have an API, I profile it like I did with Tyk. If it doesn't, I will harass them until they have an API. If you are building tools, or selling services to the API space, you should have an API, as well as provide OpenAPI and APIs.json definitions for all your goods.