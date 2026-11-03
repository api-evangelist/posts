---
published: true
layout: post
title: 'Store, Rotate And Recover Passwords And API Keys With Amazon Secrets Manager'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/store-rotate-and-recover-passwords-and-api-keys-with-amazon-secrets-manager.png
date: 2026-11-03 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Amazon Secrets Manager
  - Identity & Access Management
  - Configuration & Secrets Management
  - Security
  - Secrets
---

Maybe your database passwords live in a configuration file nobody wants to touch, an API key for a payment provider has been the same since the day someone pasted it in, or a teammate left and you are not sure which credentials they knew. The job is simple to say: keep these secrets in one safe place, change them regularly, and hand them only to the software that needs them. [Amazon Secrets Manager](https://apis.io/providers/amazon-secrets-manager/) does that work through an API, a way for software to talk directly to other software, so your own systems, your deployment scripts or an AI assistant can store, rotate and fetch secrets for you instead of a person doing it by hand.

## What Amazon Secrets Manager does

Amazon Secrets Manager is the AWS service for managing database credentials, API keys and other secrets throughout their lifecycle, from the moment they are created to the day they are retired. It keeps them in one central place and has built-in integration with Amazon RDS, Amazon Redshift and Amazon DocumentDB, so it can rotate the passwords for those databases automatically without your applications needing to change. More on the [Amazon Secrets Manager website](https://aws.amazon.com/secrets-manager/).

## What you can get done

### Keep track of every credential you hold

[Identity & Access Management](https://apis.io/capabilities/identity-access-management/) is the business of controlling who and what can get in. For secrets, that starts with knowing what you have. Instead of hunting through spreadsheets and config files, you get one list of every stored credential, with its metadata (the details around a secret, like its description, tags and rotation settings) available without exposing the secret itself.

- `POST /#CreateSecret` stores a new secret, such as a database password or an API key.
- `POST /#ListSecrets` lists the secrets stored in your AWS account, with filtering and sorting.
- `POST /#DescribeSecret` shows a secret's details and rotation settings without revealing its value.
- `POST /#ReplicateSecretToRegions` copies a secret to other AWS regions, so systems running elsewhere can use it.

### Change passwords on a schedule, not after an incident

Rotation means replacing a credential with a new one on a regular basis, so a leaked password stops working before anyone can do much with it. Doing it by hand is the step that always gets skipped. Here a secret can point at a Lambda function (a small piece of code AWS runs for you) that performs the change.

- `POST /#RotateSecret` turns on rotation for a secret and starts a rotation.
- `POST /#CancelRotateSecret` cancels rotation that is in progress or scheduled.
- `POST /#UpdateSecretVersionStage` moves a label like "current" from one version of a secret to another.
- `POST /#ListSecretVersionIds` lists the versions a secret has gone through.

### Hand secrets to your applications at runtime

[Configuration & Secrets Management](https://apis.io/capabilities/configuration-secrets-management/) is about the moment an application actually needs the password. Rather than baking credentials into code, the application asks for the current value when it starts, which means a rotated password reaches every service without a redeploy.

- `POST /#GetSecretValue` retrieves the decrypted value of a secret.
- `POST /#BatchGetSecretValue` retrieves several secret values in one call.
- `POST /#PutSecretValue` stores a new encrypted version of a secret's value.
- `POST /#StopReplicationToReplica` turns a replicated copy into a standalone secret.
- `POST /#RemoveRegionsFromReplication` stops copying a secret to regions you no longer use.

### Delete carefully, and undo mistakes

Deleting the wrong credential can take down a production system, so deletion here is not instant. A secret is scheduled for deletion with a recovery window, and during that window you can bring it back.

- `POST /#DeleteSecret` deletes a secret and all of its versions after a recovery window.
- `POST /#RestoreSecret` cancels a scheduled deletion and restores the secret.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 8 for Amazon Secrets Manager, including:

- [Generate Password and Store Secret](https://apis.io/arazzos/amazon-secrets-manager/amazon-secrets-manager-generate-password-and-store-secret-workflow/) generates a random password, stores it as a new secret and reads it back to confirm it was saved.
- [Rotate and Describe](https://apis.io/arazzos/amazon-secrets-manager/amazon-secrets-manager-rotate-and-describe-workflow/) starts rotation with a Lambda rotation function, then confirms rotation is configured.
- [Find and Delete Secret](https://apis.io/arazzos/amazon-secrets-manager/amazon-secrets-manager-find-and-delete-secret-workflow/) searches for a secret by name and, only if it finds a match, schedules it for deletion.
- [Restore Deleted Secret](https://apis.io/arazzos/amazon-secrets-manager/amazon-secrets-manager-restore-deleted-secret-workflow/) cancels a scheduled deletion and confirms the deletion date was cleared.
- [Put New Version and Verify](https://apis.io/arazzos/amazon-secrets-manager/amazon-secrets-manager-rotate-version-and-verify-workflow/) stores a new version of a secret and reads the current value to confirm the update.
- [Tag Secret and Verify](https://apis.io/arazzos/amazon-secrets-manager/amazon-secrets-manager-tag-secret-and-verify-workflow/) attaches tags to a secret, which helps when you need to know which team or project owns it.

## Ask for it in plain language

Our conversational overlay for Amazon Secrets Manager maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I set up automatic rotation for a stored database credential?"
- "Which secrets are stored in my AWS account?"
- "Can I see a secret's details without exposing its encrypted value?"
- "What rotation settings and tags does a particular secret have?"
- "How do I undo the deletion of a secret during its recovery window?"
- "Can I get back a secret I marked for deletion by mistake?"

You can browse one in the [Amazon Secrets Manager Rotation phrasing overlay](https://apis.io/overlays/amazon-secrets-manager/amazon-secrets-manager-rotation-api-phrasing-overlay/).

## Getting started

Access is freemium, and it is a hosted service, meaning you call AWS's endpoint rather than running anything yourself. Start with the [Secrets Manager API reference](https://docs.aws.amazon.com/secretsmanager/latest/apireference/). On APIs.io, see the [Amazon Secrets Manager profile](https://apis.io/providers/amazon-secrets-manager/), the [Secrets API](https://apis.io/apis/amazon-secrets-manager/amazon-secrets-manager-secrets-api/), the [Rotation API](https://apis.io/apis/amazon-secrets-manager/amazon-secrets-manager-rotation-api/), the [Secret Value API](https://apis.io/apis/amazon-secrets-manager/amazon-secrets-manager-secret-value-api/) and the [Passwords API](https://apis.io/apis/amazon-secrets-manager/amazon-secrets-manager-passwords-api/). Pick the one database password that worries you most, move it into Secrets Manager, and turn on rotation before you move the rest.
