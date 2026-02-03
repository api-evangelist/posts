---
published: true
layout: post
title: What is the Diff Between Bruno Collection and OpenCollection
date: 2026-02-03T09:00:00.000Z
tags:
  - Bruno
  - OpenCollection
  - Clients
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-soliders-fighting-statue.jpg
---
[Bruno](https://bit.ly/4fpe6FO) has been slow rolling their release of their new [OpenCollection format](https://bit.ly/4tgOeDk) to augment the Bruno Collection, and continue grabbing mindshare from Postman Collections, while simultaneously embracing the OpenAPI specification. I needed to undersstand the diff between the two specs to support work at Naftiko, but also as par tof my continued reporting from the frontlines of the specification wars.

## The Basics: Structure and Philosophy

At their core, both formats organize API requests into collections, but they take fundamentally different approaches to structure.

**Bruno Collection** embraces simplicity with a flat, straightforward structure. Metadata lives at the top level with fields like `version`, `uid`, and `name`. This design reflects Bruno's philosophy as a lightweight, Git-friendly API client that prioritizes developer experience over feature complexity.

**Open Collection** takes a more enterprise-oriented approach, separating concerns into distinct objects. Collection metadata lives in an `info` object that can include authors, summaries, and versioning. Configuration has its own dedicated `config` section, and there's even an `extensions` object for custom data—a nod to the OpenAPI specification's extensibility model.

```json
// Bruno Collection - flat and simple
{
  "version": "1",
  "uid": "abc123...",
  "name": "My API Collection",
  "items": []
}

// Open Collection - structured and extensible
{
  "opencollection": "1.0.0",
  "info": {
    "name": "My API Collection",
    "summary": "A collection for testing our REST API",
    "version": "2.1.0",
    "authors": [{ "name": "Jane Doe", "email": "jane@example.com" }]
  },
  "config": {},
  "items": []
}
```

## Protocol Support: Where Open Collection Shines

One of the most significant differences lies in protocol support.

| Protocol | Bruno | Open Collection |
|----------|:-----:|:---------------:|
| HTTP/REST | ✅ | ✅ |
| GraphQL | ✅ | ✅ |
| gRPC | ❌ | ✅ |
| WebSocket | ❌ | ✅ |

Bruno focuses exclusively on HTTP and GraphQL—covering the vast majority of API testing needs. Open Collection, however, extends support to gRPC and WebSocket, making it more suitable for teams working with microservices architectures or real-time applications.

If your stack includes gRPC services or WebSocket connections, Open Collection provides native support with dedicated request types, streaming configurations, and protocol-specific metadata.

## Request Structure: Flat vs Layered

The way each format structures individual requests reveals their different priorities.

**Bruno** keeps requests flat and readable:

```json
{
  "uid": "req123",
  "type": "http-request",
  "name": "Get Users",
  "request": {
    "url": "https://api.example.com/users",
    "method": "GET",
    "headers": [],
    "params": [],
    "body": { "mode": "none" },
    "auth": { "mode": "bearer", "bearer": { "token": "{{token}}" } },
    "script": {
      "req": "// pre-request script",
      "res": "// post-response script"
    }
  }
}
```

**Open Collection** separates concerns into distinct layers:

```json
{
  "info": {
    "name": "Get Users",
    "type": "http",
    "description": "Retrieves all users from the system",
    "seq": 1,
    "tags": ["users", "read"]
  },
  "http": {
    "url": "https://api.example.com/users",
    "method": "GET",
    "headers": [],
    "params": []
  },
  "runtime": {
    "variables": [],
    "scripts": [
      { "type": "before-request", "code": "// pre-request" },
      { "type": "after-response", "code": "// post-response" }
    ],
    "assertions": [],
    "actions": [],
    "auth": { "type": "bearer", "token": "{{token}}" }
  },
  "settings": {
    "timeout": 5000,
    "followRedirects": true
  },
  "examples": []
}
```

This separation in Open Collection makes it easier to reason about different aspects of a request independently, but Bruno's approach is more immediately readable and requires less boilerplate.

## Authentication: Comprehensive Options

Both formats support common authentication methods, but Open Collection offers broader coverage:

| Auth Type | Bruno | Open Collection |
|-----------|:-----:|:---------------:|
| AWS Signature V4 | ✅ | ✅ |
| Basic | ✅ | ✅ |
| Bearer Token | ✅ | ✅ |
| Digest | ✅ | ✅ |
| OAuth 2.0 (Client Credentials) | ✅ | ✅ |
| OAuth 2.0 (Password) | ✅ | ✅ |
| OAuth 2.0 (Authorization Code) | ✅ | ✅ |
| OAuth 2.0 (Implicit) | ❌ | ✅ |
| API Key | ❌ | ✅ |
| NTLM | ❌ | ✅ |
| WSSE | ❌ | ✅ |

Open Collection's OAuth 2.0 implementation is particularly comprehensive, with support for PKCE, custom token placement, auto-refresh settings, and additional parameters for each flow.

## Variables and Environments

Both formats support environment-based variable management, but with different levels of sophistication.

**Bruno** uses a straightforward approach:

```json
{
  "uid": "env123",
  "name": "Production",
  "variables": [
    {
      "uid": "var1",
      "name": "baseUrl",
      "value": "https://api.example.com",
      "type": "text",
      "enabled": true,
      "secret": false
    }
  ]
}
```

**Open Collection** introduces typed values, variants, and inheritance:

```json
{
  "name": "Production",
  "color": "#e74c3c",
  "description": "Production environment configuration",
  "extends": "Base",
  "dotEnvFilePath": ".env.production",
  "variables": [
    {
      "name": "baseUrl",
      "value": { "type": "string", "data": "https://api.example.com" }
    },
    {
      "name": "timeout",
      "value": [
        { "title": "Fast", "selected": false, "value": { "type": "number", "data": "1000" } },
        { "title": "Normal", "selected": true, "value": { "type": "number", "data": "5000" } },
        { "title": "Slow", "selected": false, "value": { "type": "number", "data": "30000" } }
      ]
    },
    {
      "secret": true,
      "name": "apiKey",
      "type": "string"
    }
  ],
  "clientCertificates": []
}
```

The variant system in Open Collection is particularly powerful for A/B testing scenarios or when you need to quickly switch between different configuration presets.

## Testing and Assertions

**Bruno** handles testing through script strings in the `tests` field and simple key-value assertions.

**Open Collection** provides structured assertions with dedicated fields:

```json
{
  "assertions": [
    {
      "expression": "res.status",
      "operator": "eq",
      "value": "200",
      "disabled": false,
      "description": "Status should be 200 OK"
    },
    {
      "expression": "res.body.users.length",
      "operator": "gt",
      "value": "0",
      "description": "Should return at least one user"
    }
  ]
}
```

Open Collection also introduces **Actions**—runtime operations that can automatically set variables based on response data:

```json
{
  "actions": [
    {
      "type": "set-variable",
      "phase": "after-response",
      "selector": {
        "expression": "res.body.token",
        "method": "jsonq"
      },
      "variable": {
        "name": "authToken",
        "scope": "collection"
      }
    }
  ]
}
```

## Enterprise Features in Open Collection

Several features in Open Collection cater to enterprise use cases:

### Proxy Configuration
```json
{
  "proxy": {
    "enabled": true,
    "inherit": false,
    "config": {
      "protocol": "http",
      "hostname": "proxy.company.com",
      "port": 8080,
      "auth": { "username": "user", "password": "pass" },
      "bypassProxy": "localhost,127.0.0.1"
    }
  }
}
```

### Client Certificates for mTLS
```json
{
  "clientCertificates": [
    {
      "domain": "api.secure.com",
      "type": "pem",
      "certificateFilePath": "./certs/client.crt",
      "privateKeyFilePath": "./certs/client.key",
      "passphrase": "{{certPassword}}"
    }
  ]
}
```

### Request Settings with Inheritance
```json
{
  "settings": {
    "http": {
      "encodeUrl": true,
      "timeout": "inherit",
      "followRedirects": true,
      "maxRedirects": 10
    }
  }
}
```

## What Bruno Does Differently

While Open Collection has more features, Bruno's design choices offer their own advantages:

### UID-Based References
Every object in Bruno has a unique 21-character alphanumeric identifier, making it easier to track and reference items programmatically:

```json
{
  "uid": "a1b2c3d4e5f6g7h8i9j0k",
  "activeEnvironmentUID": "x9y8z7w6v5u4t3s2r1q0p"
}
```

### Runner Results Storage
Bruno collections can store execution results directly:

```json
{
  "runnerResult": {
    "lastRun": "2024-01-15T10:30:00Z",
    "passed": 45,
    "failed": 2,
    "duration": 12500
  }
}
```

### Filesystem Integration
The `pathname` fields throughout Bruno's schema reflect its tight integration with the filesystem, supporting its Git-friendly approach where collections are stored as directories with individual `.bru` files.

## Making the Choice

**Choose Bruno Collection if:**

- You primarily work with HTTP and GraphQL APIs
- You value simplicity and readability
- Git-based collaboration is central to your workflow
- You want minimal schema overhead

**Choose Open Collection if:**

- You need gRPC or WebSocket support
- Your team requires enterprise features like mTLS or proxy configuration
- You want structured assertions and automated actions
- Extensibility and typed values matter to your workflow
- You're building tooling that needs to support multiple API types

## Conclusion

Both Bruno Collection and Open Collection represent thoughtful approaches to API collection management. Bruno prioritizes developer experience and Git integration with a lean, focused schema. Open Collection aims for comprehensive coverage of enterprise needs with support for multiple protocols and advanced features.

I am keen on understanding the differences in properties, but also the protocols. That is key. I am also interested in helping contribute to the examples conversation as I am heavily using Bruno collection for sandboxes, and I want to continue with Open Collection--leveraging the Microcks example format as a standalone, cross-spec alternative to defining rich workflows, scenarios, and use cases.

