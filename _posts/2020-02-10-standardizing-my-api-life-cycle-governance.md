---
published: true
layout: post
title: Standardizing My API Life Cycle Governance
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/amusement-park-amusement-park-2-copper-circuit.jpg
author:
  name: kinlane
tags:
  - Standards
  - Governance
---
I am working on redesigning all of my base APIs, as well as produce a mess of new ones. As part of the process I am determined to be more thoughtful and consistent in how I design and deliver the APIs. API governance always begins with using API definitions, as you can't govern something you can't measure and track, so having machine readable artifacts is essential. After that, the design of the API is the first place to look when it comes to standardizing each of the APIs coming off the assembly line. Then I am looking to do my best to begin defining, measuring, and standardizing how I do many other areas of API operations, hleping me keep track of the many moving parts of doing microsservices. 

To help me govern the life cycle for each API, I am going to be quantifying and measuring as many of the follow areas as I can. These are what I consider to be the essential building blocks of each API that I deliver, and since I'm using Postman to not just interact with these APIs once they are in production, I will be using Postman to also deliver and govern each stop along the API life cycle. Using Postman collections to define, deliver, and govern each of these areas, using scripts, runners, and monitors to automate the enforcement of standards and consistency across the APIs I am delivering on a regular basis. 

**Definitions**

*   **OpenAPI** - There is an OpenAPI for each individual API.
*   **Collection** - This is a Postman collection for each individual API.
*   **JSON Schema** - There is a JSON schema for each individual schema.

**Design**

*   **Requests**
    
    *   **Base** - Ensure the base path is planned.
    *   **Versioning** - Define how APIs are versioned.
    *   **Resource** - Evaluate each resource published.
    *   **Sub-Resources** \- Evaluate each sub-resource published.
    
    *   **Methods** - Ensure common use of HTTP methods.
    *   **Actions** - Determine how actions are taken beyond methods.
    *   **Path Parameters** \- Establish common approach for path parameters.
    *   **Query Parameters** - Establish common approach for query parameters.
    *   **HTTP Headers** - Evaluate what headers are in use.
    *   **Body** - Define how request bodies are being put to use.
    *   **Filtering** - Enure there are common approaches to querying and filtering.
    *   **Field Selection** - Determine how and if fields can be selected.
    *   **Date Selection** - Establish common approach to using dates.
    *   **Time Selection** - Establish common approach to using times.
    *   **Sorting** - Establish common approach to how sorting is done.
    *   **Pagination** - Establish common approach to pagination of results.
    *   **Granularity** - Evaluate the size, scope, and potential granularity of requests.
    *   **Content Negotiation** - Provide the ability to negotiate different content types.
*   **HTTP Methods**
    *   **GET** - Use of GET properly across all APIs.
    *   **POST** - Use of POST properly across all APIs. 
    *   **PUT** - Use of PUT properly across all APIs.
    *   **PATCH** - Use of PATCH properly across all APIs.
    *   **DELETE** - Use of DELETE properly across all APIs.
    *   **OPTIONS** - Use of OPTIONS properly across all APIs.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/amusement-park-amusement-park-2-blue-circuit.jpg)

*   **Response**
    *   **HTTP Headers** \- Ensure the common usage of standard or custom HTTP headers
    *   **Status Codes** \- Learn about, and use HTTP status codes in a consistent way across all API operations.
    *   **Error Handling** \- Establish a single error handling strategy, and apply consistently across all API operations.
    *   **Rate Limits** \- Establish a single approach to rate limiting of API resources, and apply consistently across all API operations.
    *   **Caching** - Learn about common approaches to caching, and make sure it is applied through API operations.
    *   **Request-Ids** \- Employ Request-Ids if possible providing added details for logging, auditing, and reporting on API usage.
    *   **UTF-8** - UTF-8 is a character encoding capable of encoding all possible characters, or code points.
    *   **CORS** - Enable CORS for your API endpoints, providing the most flexibility possible in making API calls.
    *   **JSONP** - Provide JSONP if you are unable to enable CORS, allowing for easier integrations.
    *   **Compression** - Gzip or other compression format for API responses.
*   **Success**
    *   **200 OK -** Standard response for successful HTTP requests. The actual response will depend on the request method used.
    *   **201 Created -** The request has been fulfilled, resulting in the creation of a new resource.
    *   **202 Accepted -** The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
    *   **204 No Content -** The server successfully processed the request and is not returning any content.

*   **Redirection**
*   *   **301 Moved Permanently** \- This and all future requests should be directed to the given URI.
    *   **302 Found** - Common way of performing URL redirection. An HTTP response with this status code will additionally provide a URL in the location header field. The user agent (e.g. a web browser) is invited by a response with this code to make a second, otherwise identical, request to the new URL specified in the location field.
    *   **303 See Other** \- The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a redirect with a separate GET message.
    *   **304 Not Modified** - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
*   **User Error**
    *   **400 Bad Request -** The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).
    *   **401 Unauthorized** - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
    *   **403 Forbidden** \- The request was a valid request, but the server is refusing to respond to it. The user might be logged in but does not have the necessary permissions for the resource.
    *   **404 Not Found** \- The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
    *   **405 Method Not Allowed** \- A request method is not supported for the requested resource; for example, a GET request on a form which requires data to be presented via POST, or a PUT request on a read-only resource.
    *   **406 Not Acceptable** \- The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
    *   **408 Request Timeout** \- The server timed out waiting for the request. According to HTTP specifications: The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.
    *   **409 Conflict -** Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
    *   **410 Gone -** Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a 404 Not Found may be used instead.
    *   **411 Length Required -** The request did not specify the length of its content, which is required by the requested resource.
    *   **412 Precondition Failed -** The server does not meet one of the preconditions that the requester put on the request.
    *   **415 Unsupported Media Type -** The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
    *   **422 Unprocessable Entity -** The request was well-formed but was unable to be followed due to semantic errors.
    *   **423 Locked -** The resource that is being accessed is locked.
    *   **428 Precondition Required -** The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.
    *   **429 Too Many Requests -** The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.
*   **Server Error**
    *   **500 Internal Server Error -** A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
    *   **501 Not Implemented -** The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API).
    *   **503 Service Unavailable -** The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
*   **Error Handling**
    *   **Error Format** - Having a common approach to delivering errors to API consumers.
    *   **Problem Details for HTTP APIs** - Leveraging RFC 7807 for machine readable details of errors in a HTTP response.
*   **Media Types**
    *   **application/json** \- Provide JSON media types for API responses.
    *   **application/xml -** Provide XML media types for API responses.
    *   **application/csv -** Provide CSV media types for API responses.
    *   **text/html -** Provide HTML media types for API responses.
    *   **application/atom+xml -** Provide ATOM media types for API responses.
*   **Schema**
    *   **Name** - Establishing a common approach to naming schema in use across APIs.
    *   **Description** - Have a clear description for each schema.
    *   **Property Names** \- Establish common practices for how schema properties are named.
    *   **Property Description** \- Ensure that all schema properties have descriptions.
    *   **Property Types** \- Establish common practices for which property types are used.
    *   **Property Requirements** \- Ensure that all properties are defined as required or not required.
    *   **JSON Schema -** Provide JSON schema represenations for all schema in use.
    *   **Schema.org** \- Consider using Schema.org representations for common data elements.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/amusement-park-amusement-park-2-purp-paper.jpg)

**Mock**

*   **API** - Provide a virtualized endpoint for each individual API.
*   **Data** - Provide virtualized data for each individual API.
*   **Versions** - There are mocks available for each version of an API.
*   **Coverage** - Ensure that I have 100% coverage of all APIs.

**Portal**

*   **GitHub Repo -** There is a GitHub repository for each indiviudal API.

**Documentation**

*   **Documentation** - There is documentation published with URL available.
*   **Versions** - There is documentation available for each version of an API.

**Testing**

*   **Assertions** - Ensure there are assertions available for each API.
*   **Monitor** - There is an testing monitor in place from multiple regions.
*   **Results** - I have the monitoring results published somewhere for evaluation.

**Database**

*   **Script** - A script is available to create the database for each API.
*   **Platform** - There is a common database platform for each API.
*   **Billing** - What does it cost me to run each database for each API.
*   **Backup** - Each database is backed up as part of regular process.
*   **Restore** - There is a process for easily restoring the database.

**Compute**

*   **Platform** - There is a common compute platform for each API.
*   **Billing** - What does it cost me to run each database for each API.
*   **Setup** - There is automation in place to setup and configure the compute.
*   **Backup** - All code and configuration is backed up as part of regular process.
*   **Restore** - There is a process for easily restoring the compute layer.

**Storage**

*   **Platform** - There is a common storage platform for each API.
*   **Billing** - What does it cost me to run each database for each API.
*   **Backup** - All storage is backed up as part of regular process.
*   **Restore** - There is a process for easily restoring the storage.

**Pipeline**

*   **Platform** - All pipeliens are delivered using common CI/CD platform.
*   **Tests** - Run the required tests at the pipeline level to ensure quality.

**Management**

*   **Platform** - There is a common database platform for each API.
*   **Billing** - What does it cost me to manage each individual API.
*   **Plan** - There is a plan in place for each individual API.
*   **Activity** - Track all activity of API consumption at the management layer.

**Logging**

*   **Shipped** - All logs are shipped to central location for evaluation and auditing.
*   **Reporting** - There is reporting in place for each of the APIs log files.

**Encryption**

*   **Certificate** - Establish and manage certificate for APIs.
*   **Default** - Enforce encryption for all APIs beind delivered.

**DNS**

*   **Mock Host** \- Ensure there is a mock host for each API.
*   **Development Host** - Ensure there is a mock host for each API.
*   **Production Host** \- Ensure there is a mock host for each API.

**Authentication**

*   **API Key** - Mock, development, and production instances all require an API key to use.

**Road Map**

*   **Add** - I can easily add items to the road map for each API.
*   **Listing** - There is a listing of road map entries for each API.
*   **Version** - The road map is organized by version.
*   **Activity** - Track the planning activity around the road map.

**Issues**

*   **Add** - I can easily add items to the road map for each API.
*   **Listing** - There is a listing of road map entries for each API.
*   **Version** - The road map is organized by version.
*   **Activity** - Track any acitivity when it comes to issues.

**Change Log**

*   **Add** - I can easily add items to the road map for each API.
*   **Listing** - There is a listing of road map entries for each API.
*   **Version** - The road map is organized by version.
*   **Activity** - Track the change log activity.

**Monitoring**

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/amusement-park-amusement-park-2-atari-asteroids.jpg)

**Mock**

*   **Monitor** - There is an uptime and availablility monitor in place for multiple regions.
*   **Results** - The monitoring results published somewhere for evaluation.

**Performance**

*   **Monitor** - There is an performance monitor in place for multiple regions.
*   **Results** - The performance results published somewhere for evaluation.

**Security**

*   **Monitor** - There is an security monitor in place
*   **Results** - The security results published somewhere for evaluation.

**Support**

*   **Contact** - There is an owner for each API responsible for supporting it.
*   **Ticket** - There is an ability to submit and manage tickets for support.
*   **Email** - An email exists for supporting each individual API.
*   **Activity** - Track the support activity for each API.

**Communication**

*   **Update** - A message, Tweet, or other update is pushed for any activity.
*   **Blog** - A blog post is written with each release of an API or other activity.
*   **Activity** - Track the communication activity for each API.

**Discovery**

*   **APIs.json** \- An APIs.json index is created for each API, and included in other indexes.

I am working to establish a single Postman request for each entry in this outline, operating as a single, or suite of collections that I can run as a monitor, or manually against each individual API I am developing--helping keep me honest. [I'd like to standardize the rules around Spectral, building upon what already exists out in the API space, contributing to a common approach to defining API design governance](https://github.com/stoplightio/spectral). My only concern is how to I use Spectral for governing non API design elements, but I'm optimistic that I will be able to use it on OpenAPI, AsyncAPI, JSON Schema, Postman Collections, as well as APIs.json--allowing me to cover all my bases when it comes to API governance.

[To help me manage this effort I have created a GitHub repository to manage all the details, issues, and help me move things forward](https://github.com/postman-api-governance/default). I need to spend some time playing with Spectral before I invest more time into the Postman collection, and writing scripts for the governance. I already have some scripting down, but it was just proof of concept stuff, and I'd rather standardize my approach using an open source format, and set of JavaScript libraries. Then I will go ahead and publish some of my APIs and begin moving them through the process I've laid out here, helping me establish some of the artifacts and metrics I will need to actually realize this list. While most of the API design elements I can rely on the OpenAPI truth for each API, but for some of the other API life cycle elements I am going to have to get creative using APIs.json, and totally inventing other artifacts to get the job done--eventually getting me where I need to be when it comes to governance.