---
published: true
layout: post
title: Governing API Authentication
date: 2025-05-09T09:00:00.000Z
tags:
  - Governance
  - Security
  - Authentication
  - OWASP
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/citizenship-surveillance-cameras_36569244062_o.jpg
---
Governance spans multiple dimensions of our API operations, but few areas get people thinking and talking about API governance than talking about the security of your APIs. I am working with customers to think through the details of the [OWASP Top 10 API Security Risks](https://owasp.org/API-Security/editions/2023/en/0x11-t10/), and up at the top of the list is [broken authentication](https://owasp.org/API-Security/editions/2023/en/0xa2-broken-authentication/), which forgetting to actually configure and enforce API authentication across APIs being a pretty common slice of this API security. API security and API governance overlap in many ways that can be confusing for teams producing APIs, so I wanted to take a look at governing the security of APIs using keys, which speaks to the OWASP broken authentication policy.

### OpenAPI
To help guide this conversation we have a demo products API defined as an OpenAPI 3.1, which we can use to demonstrate multiple layers of governing the security, or more specifically the authentication of our products API, helping minimize our risk against OWASP broken authentication API security policy.

```
openapi: 3.1.0
info:

  title: Products API
  description: |
    This is a template APIs.json for a products API, to be used in storytelling, training, and knowledge bases.
  
  version: 0.1.0

  contact:
    name: API Evangelist
    url: https://apievangelist.com
    email: info@apievangelist.com

  termsOfService: http://example.com/terms/

  license: 
    name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
    identifier: CC-BY-NC-SA-4.0
    url: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en

externalDocs:
  description: Products API Landing Page
  url: http://example.com/products

servers:
  - url: https://api.example.com
    description: Production

tags:

  - name: Products
    description: | 
      Placing and managing of products placed for products.

paths:

  /products:
    get:
      operationId: getProducts
      summary: Retrieves Products
      description: Returns a list of all products for the authenticated user.
      security:
        - apiKeys: []
      tags:
        - Products
      responses:
        '200':
          description: A list of products
          headers:
            RateLimit:
              $ref: '#/components/headers/RateLimit'
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/WrapperResponseCollection'
              examples:
                ProductCollection:
                  $ref: '#/components/examples/ProductCollection'
            application/xml:
              schema:
                $ref: '#/components/schemas/WrapperResponseCollection'
              examples:
                ProductCollection:
                  $ref: '#/components/examples/ProductCollection'                 
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '403':
          $ref: '#/components/responses/Forbidden'
        '429':
          $ref: '#/components/responses/TooManyRequests'
        '500':
          $ref: '#/components/responses/InternalServerError'
    post:
      operationId: createProduct
      summary: Create Product
      description: Creating a new product for sending to a recipient.
      tags:
        - Products
      security:
        - apiKeys: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Product'
            examples:
              Product:
                $ref: '#/components/examples/Product'                           
          application/xml:
            schema:
              $ref: '#/components/schemas/Product'
            examples:
              Product:
                $ref: '#/components/examples/Product'            
      responses:
        '201':
          description: Product Successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/WrapperResponseObject'
              examples:
                SingleProduct:
                  $ref: '#/components/examples/SingleProduct'                    
            application/xml:
              schema:
                $ref: '#/components/schemas/WrapperResponseObject'
              examples:
                SingleProduct:
                  $ref: '#/components/examples/SingleProduct'        
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '403':
          $ref: '#/components/responses/Forbidden'          
        '404':
          $ref: '#/components/responses/NotFound'
        '409':
          $ref: '#/components/responses/Conflict'
        '429':
          $ref: '#/components/responses/TooManyRequests'
        '500':
          $ref: '#/components/responses/InternalServerError'     

components:               

  securitySchemes:
    apiKeys:
      type: apiKey
      name: api-key
      in: header

  parameters:

    ProductId: 
        name: productId
        in: path
        required: true
        description: The ID of the product to retrieve.
        schema:
          type: string
          format: uuid
          minLength: 36
          maxLength: 36     
          pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$     
        example: 1725ff48-ab45-4bb5-9d02-88745177dedb                                                       

```            

### OpenAPI Security Schemes Object
The OpenAPI specification gives us the ability to define a standardized set of security schemes and store them centrally so that they they can be reused across an OpenAPI for an API, and in this situation we are going to be governing that API keys are centrally defined as part of the [OpenAPI security schemes](https://spec.openapis.org/oas/latest.html#security-scheme-object-0).

### Security Definition
Making sure we have a securitySchemes object in our components repository for the OpenAPI.

```
openapi-security-schemes-error:
  description: >-
    Having components security schemes ensures that the security definition for an API have been standardized and are able to be applied across APIs
  message: Components MUST Have a Security Schemes
  severity: error
  given: $.components
  then:
    field: securitySchemes
    function: truthy
```      

### API Key
Making sure we have an APIKeys securitySchemes object that we will reference for each operation.

```
openapi-security-schemes-api-key-error:
  description: >-
    Having components security schemes which possesses an api-key property that allows to configure how API keys are applied to operations.
  message: Components MUST Have a Security Schemes API Keys 
  severity: error
  given: $.components.securitySchemes
  then:
    field: apiKeys
    function: truthy
```

### Type
Further enforcing that the securitiySchema actually has a type of APIKey, being as precise as we can.

```
openapi-security-schemes-api-key-type-error:
  description: >-
    Having components security schemes which possesses an api-key property that allows to configure how API keys are applied to operations have a type of apiKey set.
  message: Components MUST Have a Security Schemes API Keys Type
  severity: error
  given: $.components.securitySchemes.apiKeys
  then:
    - field: type
      function: pattern
      functionOptions:
        match: >-
          \b(apiKey)\b
```

### In 
Making sure that the API key is actually put into the header as part of each API request being made.

```
openapi-security-schemes-api-key-in-error:
  description: >-
    Having components security schemes which possesses an api-key property that allows to configure how API keys are applied to operations have a in of header set.
  message: Components MUST Have a Security Schemes API Keys In Header
  severity: error
  given: $.components.securitySchemes.apiKeys
  then:
    - field: in
      function: pattern
      functionOptions:
        match: >-
          \b(header)\b
```

### Name
Also making sure the name of the header used is correct, so that we can further validate it is correct.

```
openapi-security-schemes-api-key-name-error:
  description: >-
    Having components security schemes which possesses an api-key property that allows to configure how API keys are applied to operations have a name of api_key set.
  message: Components MUST Have a Security Schemes API Keys Name 
  severity: error
  given: $.components.securitySchemes.apiKeys
  then:
    - field: name
      function: pattern
      functionOptions:
        match: >-
          \b(api-key)\b
```

There are approaches that you can roll all of these up into fewer rules, but I prefer to separate out each dimension, as you may want to customize beyond what is shown here, leaving out steps, but more importantly each individual rule provides an opportunity for guiding teams and helping them learn about security, OpenAPI, and OWASP Top 10.

# Operations
Now that we have our central security definition defined as part our our components, we can reference that configuration across every single operation where it is needed, and with these rules we can govern there is a security definition, but also that it specifically applies to our API keys definition, getting very granular in how we are linting our OpenAPI.

### Definition
Making sure that every GET, POST, PATCH, PUT, and DELETE all have a security property applied to them.

```
openapi-operation-security-definitions-error:
  description: >-
    Each API operation should have a security definition referencing the
    central security scheme express for an OpenAPI
  message: Operations MUST Have a Security Definition
  severity: error
  given: $.paths.*[get,post,patch,put,delete]
  then:
    field: security
    function: truthy
```

### API Keys
Making sure the security property actually references our central apiKeys property of the security scheme we defined.

```
openapi-operation-security-definitions-keys-error:
  description: >-
    Each API operation should have a security definition referencing the central security scheme express for an OpenAPI referencing apiKeys property.
  message: Operations MUST Have a Security Definition for API Keys
  severity: error
  given: $.paths.*[get,post,patch,put,delete]
  then:
    field: '@key'
    function: pattern
    functionOptions:
      notMatch: >-
        \b(apiKeys)\b  
```

These rules will apply across all operations. If you have a mix of API paths that have other security definitions or maybe some that do not have authentication, I recommend publishing them in separate OpenAPIs, or add more nuance to these rules. 

# Enforcement
Now we should have a secure API that requires there are API keys right? Well, not exactly. Your OpenAPI is only as strong as where it is enforced. Linting that the security scheme is present and applied across all operations within your OpenAPI doesn’t actually ensure your API has the authentication properly defined—it will take additional layers of governance to properly enforce this.

# Pipeline
The first step of API governance enforcement of API authentication security as defined by OWASP broken authentication policy is making sure you are enforcing the Spectral API governance rules I have outlined above. However, this will only ensure that teams have put them in their OpenAPI, and to truly govern authentication security you will need to go further to ensure the OpenAPI is actually used to configure the API gateway, and even test for externally on an API to API basis.

# Gateway
The second and most important step is to actually lint the configuration of your API gateway to ensure what is defined as part of your OpenAPI truly reflects what is happening in the runtime. Now, there are too many gateways out there for me to demonstrate this, but for my API operations, I am automating the pulling of [the configuration for each API method](https://docs.aws.amazon.com/apigateway/latest/api/API_GetMethod.html) and using a suite of Spectral rules to lint this output as part of a pipeline, or once you publish an API to a specific stage, you can export the OpenAPI for your AWS configured API and have a suite of Spectral rules that lint the [AWS API Gateway extensions](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html).

# Testing
After that you should probably have some API tests that check to see if you have implemented API authentication properly, but this goes out of the realm where I focus, and like the gateway, I will leave to you to approach testing using OWASP Zap or some other tooling that you are using to test your APIs. 

# Doesn’t Stop There
Governing the authentication of your APIs as part of wider API security practices doesn’t stop with these rules I’ve showcased here. If you are using JWT or OAuth there will be additional layers of consideration. You should be governing the contents of your JWT as a separate suite of rules, and you should looking at your OAuth Scopes and other artifacts as well. If you are using OpenAPI Policy Agent (OPA), you might be taking a different approach that may or may not overlap with your API governance concerns.

The goal of this post is to make sure you are considering the overlay of API governance and API security. It is also meant to help you consider how you are enforcing your APIs as part of your CI/CD pipelines, but also how you are configuring your API gateway and potentially linting and enforcing the configuration of your API gateway. Depending on what infrastructure and approach you use for your pipelines and gateways, this will vary, but I want to just highlight that this is all API governance and goes well beyond just the design of your APIs.
