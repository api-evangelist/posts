---
published: true
layout: post
title: Fundamental Spectral Rules For Governing Your JSON Schema
tags:
  - JSON Schema
  - Spectral
  - Governance
  - Schema
  - Registry
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-docks-oakland-4.jpeg
---
I can’t articulate the importance of enterprise organizations getting their schema house in order as a starting point for API governance. There is an exponential amount of instability and friction introduced across the enterprise because teams are properly using JSON Schema. To augment my services for helping enterprise organizations manage their JSON Schema via GitHub, I am providing customers with a base set of Spectral rules to begin defining the maturity of the schema you are publishing to your Git repository.

## Identifier
Every schema added to the central GitHub repository must have a unique identifier applied to each of the schema, giving each object a source of truth no matter where it might find itself across the enterprise.

```
  json-schema-2020-12-id-error:
    description: Schema MUST have a unique identifier for each object.
    message: Schema MUST Have a $id.
    severity: error
    given: $
    then:
      field: "$id"
      function: truthy
  json-schema-2020-12-id-info:
    description: Schema MUST have a unique identifier for each object.
    message: Schema Has an $id.
    severity: info
    given: $
    then:
      field: "$id"
      function: falsy 
  json-schema-2020-12-id-source-url-error:
    description: The id for a schema MUST have a valid URL pointing to the central register.
    message: The $id for schema MUST reference the central registry.
    severity: error
    given: $
    then:
      field: "$id"
      function: pattern
      functionOptions:
        match: \b(example.com)\b
  json-schema-2020-12-id-source-url-info:
    description: The id for a schema MUST have a valid URL pointing to the central register.
    message: The $id for schema references the central registry.
    severity: info
    given: $
    then:
      field: "$id"
      function: pattern
      functionOptions:
        notMatch: \b(example.com)\b
```

I will add more rules and regexes to get more explicit with the naming conventions applied as part of the unique identifier, but this is a damn good place to start when it comes to governing the source of truth for your schema.

## Schema
Next up, every schema should have a $schema property present, and be using the latest draft of the JSON Schema specification—so very important. This work augments my existing policy and rule work across OpenAPI and other artifacts in use.

```
  json-schema-2020-12-schema-error:
    description: Schema MUST have a $schema property.
    message: Schema MUST Have a $schema.
    severity: error
    given: $
    then:
      field: "$schema"
      function: truthy
  json-schema-2020-12-schema-info:
    description: Schema MUST have a $schema property.
    message: Schema Has a $schema.
    severity: info
    given: $
    then:
      field: "$schema"
      function: falsy  
  json-schema-2020-12-schema-draft-error:
    description: The $schema for a schema MUST use the latest draft
    message: The $schema for schema MUST use the latest draft.
    severity: error
    given: $
    then:
      field: "$schema"
      function: pattern
      functionOptions:
        match: 'https://json-schema.org/draft/2020-12/schema'
  json-schema-2020-12-schema-draft-info:
    description: The $schema for a schema MUST use the latest draft
    message: The $schema for schema uses the latest draft.
    severity: info
    given: $
    then:
      field: "$schema"
      function: pattern
      functionOptions:
        notMatch: 'https://json-schema.org/draft/2020-12/schema'
```

This set of rules will have one of the biggest impacts across the enterprise in helping stabilize things, but is one that will take a shit ton of work to implement because you are going to have to update a lot of libraries and tooling across the enterprise.

## Title
Now I want to make sure every object has a name, but also that it is applied as the title of the object. This is something we’ll have to align with the unique identifier naming patterns, but having the title property present and meeting minimum governance is critical.

```
  json-schema-2020-12-title-error:
    description: Schema MUST have a title for the entire object, describing an object in plain language.
    message: Schema MUST Have a Title.
    severity: error
    given: $
    then:
      field: title
      function: truthy
  json-schema-2020-12-title-info:
    description: Schema MUST have a title for the entire object, describing an object in plain language.
    message: Schemas Has a Title.
    severity: info
    given: $
    then:
      field: title
      function: falsy
  json-schema-2020-12-title-pascal-case-error:
    description: Schema names should always be PascalCase, and be used in title for a schema to help ensure readability and consistency.
    message: Schema Title MUST Be PascalCase.
    severity: error
    given: $
    then:
      - field: title
        function: pattern
        functionOptions:
          match: ^[A-Z](([a-z]+[A-Z]?)*)$
      - field: title
        function: pattern
        functionOptions:
          match: ^[A-Z](([a-z0-9]+[A-Z]?)*)$
  json-schema-2020-12-title-pascal-case-info:
    description: Schema names should always be PascalCase, and be used in title for a schema to help ensure readability and consistency.
    message: Schema Title Are PascalCase.
    severity: info
    given: $
    then:
      - field: title
        function: pattern
        functionOptions:
          notMatch: ^[A-Z](([a-z]+[A-Z]?)*)$
      - field: title
        function: pattern
        functionOptions:
          notMatch: ^[A-Z](([a-z0-9]+[A-Z]?)*)$
  json-schema-2020-12-title-length-error:
    description: Schema names and resulting title should be kept to less than 25 characters.
    message: Schema Names MUST Be Less Than 25 Characters
    severity: error
    given: $
    then:
      field: title
      function: length
      functionOptions:
        max: 25       
  json-schema-2020-12-title-length-error:
    description: Schema names and resulting title should be kept to greater than 3 characters.
    message: Schema Names MUST Be Greater Than 3 Characters
    severity: error
    given: $
    then:
      field: title
      function: length
      functionOptions:
        min: 3                 
```

You will want to adjust the minx and max values to match the needs of your organizations and it is a fun one to bike shed with teams producing schema, but these rules provide a great place to begin when doing this important work.

## Description
Now let’s apply similar logic to the description for each object, which is absent on most any schema I struggle across, so just making sure there is a description, along with a minimum bar for length and other things is a good place to start.

```
  json-schema-2020-12-description-error:
    description: Schema MUST have a description for the entire object, explaining in plain language what the object is for.
    message: Schema MUST Have a Description.
    severity: error
    given: $
    then:
      field: description
      function: truthy
  json-schema-2020-12-description-info:
    description: Schema MUST have a description for the entire object, explaining in plain language what the object is for.
    message: Schemas Has a Description.
    severity: info
    given: $
    then:
      field: description
      function: falsy
  json-schema-2020-12-description-length-error:
    description: The description for a schema should not be too long, helping keep it as readable and consumable as possible by users.
    message: Schema Description MUST be Less Than 250 Characters
    severity: error
    given: $
    then:
      field: description
      function: length
      functionOptions:
        max: 250
```

Once I get the base in place I will also move towards applying some sort of vocabulary that will trigger rules when certain forbidden words are used, and identify things that are better expressed as JSON Schema properties, allowing us to get more precise with governance.
 
## Types
Next, let’s establish a baseline for object types by requiring there is a type property at the top level, making sure we are always explicit with any JSON Schema we’ve published, ensuring the fundamentals are always present.

```
  json-schema-2020-12-type-error:
    description: All schema must have a type property.
    message: Schema MUST Have Type Property
    severity: error
    given: $
    then:
      field: type
      function: truthy
  json-schema-2020-12-type-info:
    description: All schema must have a type property.
    message: Schema Have Type Property
    severity: info
    given: $
    then:
      field: type
      function: falsy        
```

I don’t want to be opinionated at the type level yet, and am looking to get feedback for what else should be present here when it comes to requiring an object or array, focusing on just the fundamentals right now.

## Property Names
Moving on to the properties of each object, we always want to be making sure our casing of object properties are consistent across the enterprise, making sure objects use consistent naming and have at least one property present.

```
  json-schema-2020-12-properties-names-camel-case-error:
    description: All schema properties should be camel case for consistency.
    message: Schema Property Names MUST Be camelCase.
    severity: error
    given: $.properties
    then:
      - field: "@key"
        function: pattern
        functionOptions:
          notMatch: ^[A-Z][a-z0-9]*[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$
  json-schema-2020-12-properties-names-camel-case-info:
    description: All schema properties should be camel case for consistency.
    message: Schema Property Names Are camelCase.
    severity: info
    given: $.properties
    then:
      - field: "@key"
        function: pattern
        functionOptions:
          match: ^[A-Z][a-z0-9]*[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$
  json-schema-2020-12-properties-names-max-error:
    description: It makes sense to keep schema property names a consistent length.
    message: Schema Properties Name Length MUST Be Less Than 25
    severity: error
    given: $.properties
    then:
      field: "@key"
      function: length
      functionOptions:
        max: 25
  json-schema-2020-12-properties-names-min-error:
    description: It makes sense to keep schema property names a consistent length.
    message: Schema Properties Name Length MUST Be More Than 3
    severity: error
    given: $.properties
    then:
      field: "@key"
      function: length
      functionOptions:
        min: 3        
```

There is a lot to think about when it comes to the property object depending on how you use more advanced JSON Schema elements, but this is meant to be a starting place for anyone looking to govern their schema and covers the examples available on the JSON Schema site.

## Property Descriptions
All properties should have descriptions, keeping them not too short and not too long, and similar object descriptions, you will want to get more precise with a vocabulary and other ways of fine tuning how teams are describing properties.

```
  json-schema-2020-12-properties-descriptions-error:
    description: Schema property descriptions should be complete and useful to users.
    message: Schema Properties MUST Have Description
    severity: error
    given: $.properties.*
    then:
      field: description
      function: truthy
  json-schema-2020-12-properties-descriptions-info:
    description: Schema property descriptions should be complete and useful to users.
    message: Schema Properties Have Description
    severity: info
    given: $.properties.*
    then:
      field: description
      function: falsy
  json-schema-2020-12-properties-descriptions-length-error:
    description: Schema property descriptions should not be too long, helping ensure they aren't too verbose and complex.
    message: Schema Properties Description MUST Be Less Than 250 Characters
    severity: error
    given: $.properties.*
    then:
      field: description
      function: length
      functionOptions:
        max: 250
  json-schema-2020-12-properties-descriptions-length-error:
    description: Schema property descriptions should not be too short, helping ensure they are actually helpful.
    message: Schema Properties Description MUST Be More Than 10 Characters.
    severity: error
    given: $.properties.*
    then:
      field: description
      function: length
      functionOptions:
        min: 10 
```

Ideally this work is not being done by developers and is being handled by a central set of architects and content writers, because developers are going to always write the shortest and least helpful descriptions for properties.

## Types
Similar to object type, we want to establish the baseline for property types, but I am also refraining from going deep down this rabbit hole yet, and will get more advanced here with other types, regexes, and approaches to standardizing vocabulary at this layer.

```
  json-schema-2020-12-type-error:
    description: All schema properties must have a type property.
    message: Schema MUST Have Type Property
    severity: error
    given: $.properties.*
    then:
      field: type
      function: truthy
  json-schema-2020-12-type-info:
    description: All schema properties must have a type property.
    message: Schema Have Type Property
    severity: info
    given: $.properties.*
    then:
      field: type
      function: falsy               
```

It will take some research harvesting common JSON Schema in use out there to understand how people are using property types — I know we can go a long way based upon the spec, but the real value of governance comes in aligning it to the enterprise.         

## Properties Required
I threw required in here as well, but I am skeptical that this is a fundamentals based upon how more advanced JSON schema elements are used, but what the hell — I am open to push back on whether this should be part of the basics, as well as properties, based upon $def and other ways of using.

```
  json-schema-2020-12-required-error:
    description: All schema should have a required property.
    message: Schema MUST Have a Required Property for Objects.
    severity: error
    given: $
    then:
      field: required
      function: truthy
  json-schema-2020-12-required-info:
    description: All schema should have a required property.
    message: Schema Have a Required Property for Objects.
    severity: info
    given: $
    then:
      field: required
      function: falsy
  json-schema-2020-12-required-error:
    description: All schema should have at least one required property.
    message: MUST Be At Least One Tag
    given: $
    severity: error
    then:
      field: required
      function: length
      functionOptions:
        min: 1
```

What is required can get pretty freaky, so I am skeptical of the governance around this, but will harvest the JSON Schema from common API providers to see how they are expressing things, then come up with some basics based upon what I see.

## Just the Fundamentals
It was hard for me to stop there, but beginning with the fundamentals while keeping simple is so important. I was talking to Ben from JSON Schema this morning and told him I’d share my base set, and I want to do some more marketing and storytelling around my base JSON Schema management services via GitHub repositories, so this starter Spectral ruleset satisfies these needs. While there are plenty of folks governing JSON Schema with Spectral via OpenAPI, there aren’t many folks who are governing the maturity of their JSON Schema by themselves using Spectral rules.

I will bundle these rules up with the CI/CD pipelines and other automation I am applying to the schema I am managing via GItHub repositories. All schema published to a central schema registration should pass all these rules. Another thing to note with these rules is that I strive to always have positive and negative for each pattern I am governing, which is not something others are doing, but I feel is critical to the behavioral aspect of API governance across teams. If you want to get at the rules [I’ve published to a GitHub Gist](https://gist.githubusercontent.com/kinlane/61ee94aa579d6067e8a5e85261caad1f/raw/f0662566e539693b636d626ed66d6ac28922f070/json-schema-2020-12-spectral-rules-1.yml), but will also include via the API Commons rules gallery when I have more time.