---
published: true
layout: post
title: "Tyk and the Quiet Superpower of Extending OpenAPI"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/tyk-extending-openapi.png
date: 2026-06-26
author: Kin Lane
tags:
  - OpenAPI
  - API Gateway
  - Tyk
  - Vendor Extensions
  - API Operations
---
Extending the OpenAPI specification is a widely used, but seldom talked about superpower of the specification. People who aren't in the know hit the wall with what the specification can't do, and they move on and create a new specification — where those in the know understand the specification has become the lingua franca of API operations over the last 16 years, and craft their own extensions for the specification to make it do what they need it to do.

I remember hearing that Tyk had gone all in on the OpenAPI specification, but honestly I was too busy with whatever my hustle was in the moment to actually tune in. It happens. Now I have the time and the interest to learn more about their approach, and I wanted to break down the schema for how Tyk is extending the OpenAPI specification — but also look at a robust example of how the API gateway provider has tackled making API operations declarative.

Tyk's extension lives under a single vendor extension key at the root of an OpenAPI 3 document: `x-tyk-api-gateway`. Everything Tyk needs to run an API as a gateway — but that OpenAPI itself has no opinion about — is tucked into that one object. The OpenAPI portion of the document stays clean and portable, fully usable by any other OpenAPI-aware tool, while the gateway-specific concerns sit alongside it in their own namespace. They organize that namespace into four primary sections — `info`, `server`, `upstream`, and `middleware` — plus an `errorOverrides` section, and they've deliberately kept it minimal, so anything your API doesn't need can simply be left out.

## The Schema

Here is a distilled JSON Schema for the entire `x-tyk-api-gateway` extension, rendered in YAML. This mirrors the canonical schema Tyk ships in their gateway source ([`apidef/oas/schema/x-tyk-api-gateway.json`](https://github.com/TykTechnologies/tyk/blob/master/apidef/oas/schema/x-tyk-api-gateway.json)), collapsed to its meaningful shape so you can read it in one sitting rather than chasing `$ref`s across a thousand lines.

```yaml
$schema: "http://json-schema.org/draft-07/schema#"
title: X-Tyk-API-Gateway
description: >-
  The Tyk Vendor Extension. A single object placed at the root of an OpenAPI 3
  document under the key `x-tyk-api-gateway`, carrying all gateway configuration
  that OpenAPI itself does not describe.
type: object
additionalProperties: false
required:
  - info
  - upstream
  - server
properties:

  # ------------------------------------------------------------------
  # INFO — metadata Tyk uses to manage the API proxy
  # ------------------------------------------------------------------
  info:
    type: object
    additionalProperties: false
    required: [name, state]
    properties:
      id:          { type: string, description: Unique API identifier within Tyk }
      dbId:        { type: string, description: Internal database object id }
      orgId:       { type: string, description: Owning organization id }
      name:        { type: string, description: Human-readable API name }
      expiration:  { type: string, description: RFC3339 date when the API expires }
      state:
        type: object
        additionalProperties: false
        properties:
          active:   { type: boolean, description: Whether the API is live and proxying }
          internal: { type: boolean, description: Hide from external routing; internal-only }
      versioning:
        type: object
        additionalProperties: false
        properties:
          enabled:         { type: boolean }
          name:            { type: string }
          default:         { type: string, description: Default version name }
          location:        { type: string, enum: [header, url-param, url] }
          key:             { type: string, description: Header or param carrying the version }
          stripVersioningData: { type: boolean }
          fallbackToDefault:   { type: boolean }
          versions:
            type: array
            items:
              type: object
              properties:
                name: { type: string }
                id:   { type: string }

  # ------------------------------------------------------------------
  # SERVER — the client-to-gateway integration
  # ------------------------------------------------------------------
  server:
    type: object
    additionalProperties: false
    required: [listenPath]
    properties:
      listenPath:
        type: object
        required: [value]
        properties:
          value: { type: string, description: Base path Tyk listens on, e.g. /my-api/ }
          strip: { type: boolean, description: Strip the listen path before proxying upstream }
      authentication:
        type: object
        properties:
          enabled:               { type: boolean }
          stripAuthorizationData: { type: boolean }
          baseIdentityProvider:  { type: string }
          hmac:           { type: object }
          oidc:           { type: object }
          custom:         { type: object }
          securitySchemes:
            type: object
            description: >-
              Maps OpenAPI securitySchemes to Tyk auth (token, jwt, oauth,
              basic, hmac, custom, externalOAuth) with token location and config.
      clientCertificates:
        type: object
        properties:
          enabled:   { type: boolean }
          allowlist: { type: array, items: { type: string } }
      gatewayTags:
        type: object
        properties:
          enabled: { type: boolean }
          tags:    { type: array, items: { type: string } }
      customDomain:
        type: object
        properties:
          enabled:      { type: boolean }
          name:         { type: string }
          certificates: { type: array, items: { type: string } }
      detailedActivityLogs: { type: object, properties: { enabled: { type: boolean } } }
      detailedTracing:      { type: object, properties: { enabled: { type: boolean } } }
      eventHandlers:        { type: array, items: { type: object } }
      ipAccessControl:
        type: object
        properties:
          enabled: { type: boolean }
          allow:   { type: array, items: { type: string } }
          block:   { type: array, items: { type: string } }
      batchProcessing: { type: object, properties: { enabled: { type: boolean } } }
      protocol: { type: string, enum: [http, https, h2c, tcp, tls] }
      port:     { type: integer, minimum: 1, maximum: 65535 }

  # ------------------------------------------------------------------
  # UPSTREAM — the gateway-to-backend integration
  # ------------------------------------------------------------------
  upstream:
    type: object
    additionalProperties: false
    description: Requires either `url` or `loadBalancing`.
    properties:
      url: { type: string, description: Upstream/backend target URL }
      serviceDiscovery:
        type: object
        properties:
          enabled:           { type: boolean }
          queryEndpoint:     { type: string }
          dataPath:          { type: string }
          useTargetList:     { type: boolean }
          cache:             { type: object }
      uptimeTests:
        type: object
        properties:
          enabled: { type: boolean }
          tests:   { type: array, items: { type: object } }
      mutualTLS:
        type: object
        properties:
          enabled:            { type: boolean }
          domainToCertificates: { type: array, items: { type: object } }
      certificatePinning:
        type: object
        properties:
          enabled:                  { type: boolean }
          domainToPublicKeysMapping: { type: array, items: { type: object } }
      rateLimit:
        type: object
        properties:
          enabled:  { type: boolean }
          rate:     { type: integer }
          per:      { type: string, description: Interval, e.g. 60s, 1m, 1h }
      authentication:
        type: object
        description: Auth Tyk presents to the upstream (basic, oauth, request signing)
        properties:
          enabled: { type: boolean }
          basicAuth:      { type: object }
          oauth:          { type: object }
          requestSigning: { type: object }
      loadBalancing:
        type: object
        properties:
          enabled: { type: boolean }
          targets:
            type: array
            items:
              type: object
              properties:
                url:    { type: string }
                weight: { type: integer }
      preserveHostHeader:   { type: object, properties: { enabled: { type: boolean } } }
      preserveTrailingSlash: { type: boolean }
      tlsTransport:
        type: object
        properties:
          insecureSkipVerify: { type: boolean }
          minVersion:         { type: string }
          maxVersion:         { type: string }
          ciphers:            { type: array, items: { type: string } }
      proxy: { type: object, description: Outbound proxy used to reach the upstream }

  # ------------------------------------------------------------------
  # MIDDLEWARE — the request/response processing chain
  # ------------------------------------------------------------------
  middleware:
    type: object
    additionalProperties: false
    properties:
      global:
        type: object
        description: Middleware applied to every endpoint on the API
        properties:
          pluginConfig:   { type: object, description: Custom plugin driver + bundle config }
          cors:
            type: object
            properties:
              enabled:           { type: boolean }
              allowedOrigins:    { type: array, items: { type: string } }
              allowedMethods:    { type: array, items: { type: string } }
              allowedHeaders:    { type: array, items: { type: string } }
              exposedHeaders:    { type: array, items: { type: string } }
              allowCredentials:  { type: boolean }
              maxAge:            { type: integer }
              optionsPassthrough: { type: boolean }
          cache:
            type: object
            properties:
              enabled:               { type: boolean }
              timeout:               { type: integer }
              cacheAllSafeRequests:  { type: boolean }
              cacheResponseCodes:    { type: array, items: { type: integer } }
          prePlugins:                  { type: array, items: { type: object } }
          postAuthenticationPlugins:   { type: array, items: { type: object } }
          postPlugins:                 { type: array, items: { type: object } }
          responsePlugins:             { type: array, items: { type: object } }
          transformRequestHeaders:     { type: object }
          transformResponseHeaders:    { type: object }
          contextVariables: { type: object, properties: { enabled: { type: boolean } } }
          trafficLogs:      { type: object, properties: { enabled: { type: boolean } } }
          requestSizeLimit: { type: object, properties: { enabled: { type: boolean }, value: { type: integer } } }
          ignoreCase:    { type: object, properties: { enabled: { type: boolean } } }
          skipRateLimit: { type: boolean }
          skipQuota:     { type: boolean }
      operations:
        type: object
        description: >-
          Per-endpoint middleware keyed by the OpenAPI operationId. Each entry
          may set any of the fields below.
        additionalProperties:
          type: object   # keyed by operationId
          properties:
            allow:                { type: object, properties: { enabled: { type: boolean } } }
            block:                { type: object, properties: { enabled: { type: boolean } } }
            ignoreAuthentication: { type: object, properties: { enabled: { type: boolean } } }
            internalEndpoint:     { type: object, properties: { enabled: { type: boolean } } }
            validateRequest:
              type: object
              properties:
                enabled:           { type: boolean }
                errorResponseCode: { type: integer }
            mockResponse:
              type: object
              properties:
                enabled:          { type: boolean }
                code:             { type: integer }
                body:             { type: string }
                headers:          { type: array, items: { type: object } }
                fromOASExamples:  { type: object }
            transformRequestMethod:
              type: object
              properties:
                enabled:   { type: boolean }
                toMethod:  { type: string }
            transformRequestBody:
              type: object
              properties:
                enabled: { type: boolean }
                format:  { type: string, enum: [xml, json] }
                body:    { type: string, description: Base64 template }
                path:    { type: string }
            transformResponseBody:
              type: object
              properties:
                enabled: { type: boolean }
                format:  { type: string, enum: [xml, json] }
                body:    { type: string }
                path:    { type: string }
            transformRequestHeaders:
              type: object
              properties:
                enabled: { type: boolean }
                add:     { type: array, items: { type: object } }
                remove:  { type: array, items: { type: string } }
            transformResponseHeaders:
              type: object
              properties:
                enabled: { type: boolean }
                add:     { type: array, items: { type: object } }
                remove:  { type: array, items: { type: string } }
            cache:
              type: object
              properties:
                enabled:              { type: boolean }
                cacheResponseCodes:   { type: array, items: { type: integer } }
                timeout:              { type: integer }
            enforceTimeout:
              type: object
              properties:
                enabled: { type: boolean }
                value:   { type: integer, description: Timeout in seconds }
            rateLimit:
              type: object
              properties:
                enabled: { type: boolean }
                rate:    { type: integer }
                per:     { type: string }
            urlRewrite:
              type: object
              properties:
                enabled:  { type: boolean }
                pattern:  { type: string }
                rewriteTo: { type: string }
                triggers:  { type: array, items: { type: object } }
            virtualEndpoint:
              type: object
              properties:
                enabled:        { type: boolean }
                functionName:   { type: string }
                body:           { type: string, description: Base64 JS source }
                proxyOnError:   { type: boolean }
                requireSession: { type: boolean }
            circuitBreaker:
              type: object
              properties:
                enabled:            { type: boolean }
                threshold:          { type: number }
                sampleSize:         { type: integer }
                coolDownPeriod:     { type: integer }
                halfOpenStateEnabled: { type: boolean }
            trackEndpoint:       { type: object, properties: { enabled: { type: boolean } } }
            doNotTrackEndpoint:  { type: object, properties: { enabled: { type: boolean } } }
            requestSizeLimit:
              type: object
              properties:
                enabled: { type: boolean }
                value:   { type: integer }

  # ------------------------------------------------------------------
  # ERROR OVERRIDES — customize gateway error responses
  # ------------------------------------------------------------------
  errorOverrides:
    type: object
    properties:
      enabled: { type: boolean }
      value:
        type: array
        items:
          type: object
          properties:
            code:    { type: integer }
            match:   { type: string }
            response:
              type: object
              properties:
                statusCode: { type: integer }
                body:       { type: string }
                headers:    { type: array, items: { type: object } }
```

A few design choices are worth noticing. Nearly every feature is an object with its own `enabled` flag rather than a bare value — which is what lets Tyk keep the extension minimal. You can declare a feature, leave it disabled, and turn it on later without restructuring the document. The `middleware.operations` map keys directly off the standard OpenAPI `operationId`, so the Tyk configuration binds to your existing OpenAPI paths instead of duplicating them. And the four-section split — who calls you (`server`), who you call (`upstream`), what happens in between (`middleware`), and what the thing is (`info`) — is a clean mental model for the entire life of a request.

## A Comprehensive Example

Here's a single OpenAPI 3 document that exercises a wide swath of the extension: token auth, CORS, a custom listen path, an upstream with rate limiting, API versioning, and a set of per-operation middleware including request validation, a mock response, caching, a URL rewrite, and an enforced timeout. The OpenAPI half is deliberately ordinary — the point is how `x-tyk-api-gateway` rides alongside it.

```yaml
openapi: 3.0.3
info:
  title: Widget API
  version: 1.0.0
  description: A small catalog API, fronted by Tyk.

servers:
  - url: https://api.example.com/widgets/

paths:
  /widgets:
    get:
      operationId: listWidgets
      summary: List all widgets
      responses:
        "200":
          description: A list of widgets
          content:
            application/json:
              schema:
                type: array
                items: { $ref: "#/components/schemas/Widget" }
    post:
      operationId: createWidget
      summary: Create a widget
      requestBody:
        required: true
        content:
          application/json:
            schema: { $ref: "#/components/schemas/Widget" }
      responses:
        "201": { description: Created }

  /widgets/{id}:
    get:
      operationId: getWidget
      summary: Get a single widget
      parameters:
        - name: id
          in: path
          required: true
          schema: { type: string }
      responses:
        "200":
          description: A widget
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Widget" }
              examples:
                sample:
                  value: { id: "demo-1", name: "Demo Widget", price: 9.99 }

  /health:
    get:
      operationId: healthCheck
      summary: Liveness probe
      responses:
        "200": { description: OK }

components:
  securitySchemes:
    apiKey:
      type: apiKey
      in: header
      name: Authorization
  schemas:
    Widget:
      type: object
      required: [name]
      properties:
        id:    { type: string }
        name:  { type: string }
        price: { type: number }

# ====================================================================
# The Tyk Vendor Extension
# ====================================================================
x-tyk-api-gateway:

  info:
    name: Widget API
    state:
      active: true
      internal: false
    versioning:
      enabled: true
      name: v1
      default: v1
      location: header
      key: x-api-version
      fallbackToDefault: true
      versions:
        - name: v1
          id: widget-api-v1

  server:
    listenPath:
      value: /widgets/
      strip: true
    protocol: http
    port: 8080
    authentication:
      enabled: true
      stripAuthorizationData: true
      securitySchemes:
        apiKey:
          enabled: true
          header:
            enabled: true
            name: Authorization
    cors:
      enabled: true
    ipAccessControl:
      enabled: false
    detailedTracing:
      enabled: true

  upstream:
    url: http://widgets.internal:9000/
    rateLimit:
      enabled: true
      rate: 100
      per: 60s
    uptimeTests:
      enabled: true
    tlsTransport:
      minVersion: "1.2"

  middleware:
    global:
      cors:
        enabled: true
        allowedOrigins: ["https://app.example.com"]
        allowedMethods: [GET, POST, OPTIONS]
        allowedHeaders: [Authorization, Content-Type]
        allowCredentials: true
        maxAge: 3600
      cache:
        enabled: true
        timeout: 30
        cacheAllSafeRequests: false
        cacheResponseCodes: [200]
      trafficLogs:
        enabled: true

    operations:

      # Validate incoming POST bodies against the Widget schema
      createWidget:
        validateRequest:
          enabled: true
          errorResponseCode: 422
        rateLimit:
          enabled: true
          rate: 10
          per: 60s

      # Cache the read-heavy list endpoint at the edge
      listWidgets:
        cache:
          enabled: true
          cacheResponseCodes: [200]
          timeout: 60
        enforceTimeout:
          enabled: true
          value: 5

      # Serve a canned response straight from the OAS example — no upstream call
      getWidget:
        mockResponse:
          enabled: true
          fromOASExamples:
            enabled: true
            code: 200
            contentType: application/json

      # Rewrite the public /health path to the upstream's /status endpoint,
      # and let it through without authentication
      healthCheck:
        ignoreAuthentication:
          enabled: true
        urlRewrite:
          enabled: true
          pattern: "/health$"
          rewriteTo: "/status"

  errorOverrides:
    enabled: true
    value:
      - code: 404
        match: "not found"
        response:
          statusCode: 404
          body: '{"error":"That widget does not exist."}'
          headers:
            - name: Content-Type
              value: application/json
```

Read it top to bottom and the whole operational posture of the API is right there in front of you. The `info` block says what this is and how it's versioned. The `server` block says who's allowed to call it and how they authenticate. The `upstream` block says where the real service lives and how hard clients are allowed to hit it. And the `middleware.operations` map — keyed to the very same `operationId`s declared up in `paths` — says exactly what Tyk should do on each route: validate `createWidget`, cache and time-box `listWidgets`, mock `getWidget` directly from its OpenAPI example, and quietly rewrite and un-authenticate the health check. None of that lives in a separate config store or a console UI you have to screenshot to document. It lives in the API definition.

## Why This Matters

This is what extending OpenAPI is supposed to look like. Tyk didn't fork the format, didn't invent a parallel DSL, and didn't ask you to maintain a second file that drifts out of sync with your spec. They took the one document teams already write — the OpenAPI definition — and gave it a place to carry the operational truth that OpenAPI was never designed to hold. The describe-your-API layer and the run-your-API layer finally live in the same file, under the same version control, reviewed in the same pull request.

The payoff is that API operations become declarative. Instead of clicking through a dashboard to configure rate limits, auth, caching, and rewrites — and then trying to remember to document all of it somewhere else — you write it down once, in a schema-validated artifact, and the gateway becomes a function of that artifact. That's GitOps for the API layer. It's diffable, it's portable, and it's auditable. And because the OpenAPI portion stays clean and standards-compliant, every other tool in your pipeline — docs generators, mock servers, SDK generators, linters — keeps working, blissfully ignorant of the Tyk extension sitting next to it.

It's also a quiet vote of confidence in OpenAPI as the lingua franca of API operations. Tyk could have decided the specification wasn't enough and walked away to build their own thing. Instead they bet that the gravity of OpenAPI — sixteen years of tooling, mindshare, and muscle memory — was worth more than the freedom of a clean-sheet format, and they extended it to do what they needed. That's the move the people in the know keep making, and it's why the specification keeps absorbing more of the API lifecycle every year. Tyk's `x-tyk-api-gateway` is a particularly complete example of the pattern, and a good argument for why you should reach for an extension before you reach for a whole new spec.
