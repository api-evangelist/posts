---
published: true
layout: post
title: Developing Spectral Rules for AWS API Gateway OpenAPI Extensions
date: 2025-05-09T09:00:00.000Z
tags:
  - Governance
  - Gateways
  - OpenAPI
  - Extensions
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-nyc-streeet-dark-steam-1.jpeg
---
You can lint your OpenAPI artifacts in your CI/CD pipelines, but if you aren’t actually using it to configure your API gateway, and then validating the outputs of the configuration are in alignment with your API governance goals—-it is all just talk. It will be different with each API gateway, but AWS API Gateway allows you to configure your APIs using OpenAPI, but then you can also retrieve an [updated OpenAPI output from the gateway with the following potential OpenAPI extensions applied](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html).

- **x-amazon-apigateway-any-method object** - Specifies the OpenAPI Operation Object for the API Gateway catch-all ANY method in an OpenAPI Path Item Object. This object can exist alongside other Operation objects and will catch any HTTP method that wasn't explicitly declared.
- **x-amazon-apigateway-cors object** - Specifies the cross-origin resource sharing (CORS) configuration for an HTTP API. The extension applies to the root-level OpenAPI structure. To learn more, see Configure CORS for HTTP APIs in API Gateway.
- **x-amazon-apigateway-api-key-source property** - Specify the source to receive an API key to throttle API methods that require a key. This API-level property is a String type. For more information about configuring a method to require an API key, see Configure a method to use API keys with an OpenAPI definition.
- **x-amazon-apigateway-auth object** - Defines an authorization type to be applied for authorization of method invocations in API Gateway.
- **x-amazon-apigateway-authorizer object** - Defines a Lambda authorizer, Amazon Cognito user pool, or JWT authorizer to be applied for authorization of method invocations in API Gateway. This extension applies to the security definition in OpenAPI 2 and OpenAPI 3.
- **x-amazon-apigateway-authtype property** - For REST APIs, this extension can be used to define a custom type of a Lambda authorizer. In this case, the value is free-form. For example, an API may have multiple Lambda authorizers that use different internal schemes. You can use this extension to identify the internal scheme of a Lambda authorizer.
- **x-amazon-apigateway-binary-media-types property** - Specifies the list of binary media types to be supported by API Gateway, such as application/octet-stream and image/jpeg. This extension is a JSON array. It should be included as a top-level vendor extension to the OpenAPI document.
- **x-amazon-apigateway-documentation object** - Defines the documentation parts to be imported into API Gateway. This object is a JSON object containing an array of the DocumentationPart instances.
- **x-amazon-apigateway-endpoint-configuration object** - Specifies details of the endpoint configuration for an API. This extension is an extended property of the OpenAPI Operation object. This object should be present in top-level vendor extensions for Swagger 2.0. For OpenAPI 3.0, it should be present under the vendor extensions of the Server object.
- **x-amazon-apigateway-gateway-responses object** - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-gateway-responses.html
- **x-amazon-apigateway-gateway-responses.gatewayResponse object** - Defines a gateway response of a given response type, including the status code, any applicable response parameters, or response templates.
- **x-amazon-apigateway-gateway-responses.responseParameters object** - Defines a string-to-string map of key-value pairs to generate gateway response parameters from the incoming request parameters or using literal strings. Supported only for REST APIs.
- **x-amazon-apigateway-gateway-responses.responseTemplates object** - Defines GatewayResponse mapping templates, as a string-to-string map of key-value pairs, for a given gateway response. For each key-value pair, the key is the content type. For example, "application/json" and the value is a stringified mapping template for simple variable substitutions. A GatewayResponse mapping template isn't processed by the Velocity Template Language (VTL) engine.
- **x-amazon-apigateway-importexport-version** - Specifies the version of the API Gateway import and export algorithm for HTTP APIs. Currently, the only supported value is 1.0. To learn more, see exportVersion in the API Gateway Version 2 API Reference.
- **x-amazon-apigateway-integration object** - Specifies details of the backend integration used for this method. This extension is an extended property of the OpenAPI Operation object. The result is an API Gateway integration object.
- **x-amazon-apigateway-integrations object** - Defines a collection of integrations. You can define integrations in the components section of your OpenAPI definition, and reuse the integrations for multiple routes. Supported only for HTTP APIs.
- **x-amazon-apigateway-integration.requestTemplates object** - Specifies mapping templates for a request payload of the specified MIME types.
- **x-amazon-apigateway-integration.requestParameters object** - For REST APIs, specifies mappings from named method request parameters to integration request parameters. The method request parameters must be defined before being referenced.
- **x-amazon-apigateway-integration.responses object** - Defines the method's responses and specifies parameter mappings or payload mappings from integration responses to method responses.
- **x-amazon-apigateway-integration.response object** - Defines a response and specifies parameter mappings or payload mappings from the integration response to the method response.
- **x-amazon-apigateway-integration.responseTemplates object** - Specifies mapping templates for a response payload of the specified MIME types.
- **x-amazon-apigateway-integration.responseParameters object** - Specifies mappings from integration method response parameters to method response parameters. You can map header, body, or static values to the header type of the method response. Supported only for REST APIs.
- **x-amazon-apigateway-integration.tlsConfig object** - Specifies the TLS configuration for an integration.
- **x-amazon-apigateway-minimum-compression-size** - Specifies the minimum compression size for a REST API. To enable compression, specify an integer between 0 and 10485760. To learn more, see Payload compression for REST APIs in API Gateway .
- **x-amazon-apigateway-policy** - Specifies a resource policy for a REST API. To learn more about resource policies, see Control access to a REST API with API Gateway resource policies. For resource policy examples, see API Gateway resource policy examples.
- **x-amazon-apigateway-request-validator property** - Specifies a request validator, by referencing a request_validator_name of the x-amazon-apigateway-request-validators object map, to enable request validation on the containing API or a method. The value of this extension is a JSON string.
- **x-amazon-apigateway-request-validators object** - Defines the supported request validators for the containing API as a map between a validator name and the associated request validation rules. This extension applies to a REST API.
- **x-amazon-apigateway-request-validators.requestValidator object** - Specifies the validation rules of a request validator as part of the x-amazon-apigateway-request-validators object map definition.
- **x-amazon-apigateway-tag-value property** - Specifies the value of an AWS tag for an HTTP API. You can use the x-amazon-apigateway-tag-value property as part of the root-level OpenAPI tag object to specify AWS tags for an HTTP API. If you specify a tag name without the x-amazon-apigateway-tag-value property, API Gateway creates a tag with an empty string for a value.

You can develop Spectral rules for any of these AWS API Gateway OpenAPI extensions, extending the reach of your API governance to the runtime. Once you publish or distribute your OpenAPI to a specific stage with your API gateway you can request the OpenAPI output for that API, and then run your additional set of Spectral rules against the OpenAPI to ensure that the actual configuration of the API gateway actually matches with what you are looking to accomplish. These extensions span many dimensions of how you are operating your APIs, and helps you expand API governance to security, documentation, and other backend considerations.