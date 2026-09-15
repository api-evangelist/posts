---
published: true
layout: post
title: 'Onboarding Shipped As An Agent Skill'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/onboarding-shipped-as-an-agent-skill.png
date: 2026-09-15
author: Kin Lane
tags:
  - Agents
  - Onboarding
  - MCP
  - Security
  - Skills
  - APIs.io
  - APIs
---
Here is how you install BoltMCP. You clone `github.com/boltmcp/boltmcp`. You move your access key into the `keys/` directory. You open Claude Code in that directory and type `/install-boltmcp`.

That is the documented path. Not the alternative path, not the clever path — the first thing on the installation page, with manual instructions offered below it as the fallback. Their own words: *"This documentation site is also bundled as an Agent Skill, which Claude Code can use to walk you through the installation process."*

I have been circling onboarding for months now, and getting nowhere, and saying so. The developer portal argument I keep having with people ends in the same place every time: the portal is an artifact that API management vendors built because everyone else was building one, and onboarding is the thing underneath it that actually matters and that nobody has solved. In the last month I have had three separate conversations dead-end on exactly this. What does a catalog hand a bot so the bot can figure out the fastest path to getting started with a provider? Everyone agrees it is the seam. Nobody has an artifact.

BoltMCP has an artifact. It is 9KB of markdown and it is public, and the interesting part is not the part you would expect.

## The part you would expect

The `SKILL.md` is a runbook. It asks four questions — new cluster or existing, what tier, which cloud, what domain — and it derives the defaults intelligently rather than making you answer into a void. If `gcloud` is on your workstation it defaults to Google. If it knows your work email it proposes `boltmcp.` plus your company domain, and tells you that is why it proposed it. Then it walks the docs in the order `docs/meta.json` declares, and at the end you have a running install you can log into.

It is a good runbook. It also encodes things a human-written install doc never bothers to say, because a human reader would not need them. Do not use `kubectl get ... -w`, because a streaming watch never terminates and is useless to a non-interactive agent. Use `kubectl wait --for=condition=Ready`, but do not pair it with a label selector that can match a completed migration pod, because a `Completed` pod has no `Ready` condition and you will block until timeout. Do not substitute `sleep N` for a real readiness check. Warn the user before anything that takes over a minute.

That is operational knowledge that normally lives in a staff engineer's head and gets rediscovered by every customer in turn. Writing it down for the agent had the side effect of writing it down at all.

## The part you would not expect

Sitting next to the skill in the same repository is `.claude/settings.json`. It is eleven lines. This is the whole of it:

```json
{
  "permissions": {
    "deny": [
      "Bash(kubectl get secret *)",
      "Read(./keys/**/*.json)",
      "Bash(./scripts/deny/*)",
      "Bash(*vault operator *)",
      "Bash(*vault login *)"
    ],
    "allow": ["Skill(install-boltmcp)", "Bash(./scripts/allow/*)"]
  },
  "model": "opus",
  "effortLevel": "medium"
}
```

A vendor shipped guardrails for the agent that installs the vendor's own product. I have not seen that before, from anyone, and I think it is a genuinely new artifact type.

Read what it actually says. The agent may not read your access key, even though the key is the thing it needs you to have. It may not run `vault login` or `vault operator` — the unseal and bootstrap ceremony stays with a human, and the skill prose says so separately, telling the agent to present those commands to you rather than run them. It may not `kubectl get secret`.

And then there are two directories, `scripts/allow` and `scripts/deny`, and exactly one script in each.

## Sixteen secrets it can create, one it cannot read

`scripts/allow/create-secrets.sh` is allowed. That script generates sixteen credentials with `openssl rand -hex 32` and writes them into Kubernetes — database superuser, seven service passwords, four OIDC client secrets, the Keycloak admin password, the BoltMCP admin password, an inspector API token. The agent is trusted to run it unattended.

`scripts/deny/get-login-details.sh` is denied. That script prints your dashboard URL, your Keycloak console URL, your username, and then this:

```bash
kubectl get secret boltmcp-auth -n boltmcp \
  -o jsonpath='{.data.boltmcp-admin-password}' | base64 -d
```

The agent has to hand that one to you and step back. The skill says to do exactly that: at the end of a successful install, *tell the user what command to run*, using the script in the deny directory.

Sit with the shape of that for a second, because it is the whole argument. The dividing line is not privilege, and it is not blast radius. The agent is trusted to mint sixteen credentials it will never see. It is not trusted to echo one credential it already has cluster permission to fetch. What separates the allowed script from the denied script is a single property: **whether a secret ends up in the transcript.**

That is the right line. It is not the line most people are drawing. The reflex when you hand an agent production access is to reason about what it might *break*, and the deny lists people write reflect that — no `delete`, no `apply`, no `--force`. BoltMCP's deny list is not about destruction at all. Every command on it is read-only. It is about exfiltration into a context window, which is a log, which gets scrolled and screen-shared and pasted into a ticket and retained by somebody.

The skill prose makes the reasoning explicit where the JSON cannot. Checking that you are logged into your cloud provider, it says: **do not run commands that print credentials** — `gcloud auth print-access-token` is named specifically — *"they leak tokens into the terminal output."* Then it supplies the identity-only substitute for each of the three clouds. `gcloud auth list --filter=status:ACTIVE --format='value(account)'`, which prints an email and nothing else. `aws sts get-caller-identity`, which prints an IAM identity and not a credential. `az account show --query user.name -o tsv`.

Those are the same probes, and only those probes, that I would want in a hardening guide. They are in an install script.

## Two layers that agree

There is one more detail worth pulling out, because it is the difference between a policy and a posture.

The skill runs `get-workstation-info.sh` before it does anything else, to see what CLI tools you have and what clusters you can reach. That script looks in `./keys` for your access key. It lists the filenames. It never `cat`s the file. And the prose reinforces it in plain language: *"You don't have permission to read the file, just note its location."*

So the same rule is stated three times, in three registers. The permission layer denies `Read(./keys/**/*.json)`. The script is written so the question never arises. The prose tells the agent why. Belt, braces, and an explanation — and the explanation is the part that generalizes, because an agent that understands *why* the key is off-limits will extend the rule to the case nobody enumerated.

Most security policy fails at exactly that boundary. You can enumerate the commands you thought of. The one that burns you is the one you did not.

## What it does not solve, said plainly

I want to be careful here, because I have been waiting for somebody to solve onboarding and it would be easy to announce that somebody did.

This does not solve credential acquisition. Look at step two of the install: *move your BoltMCP access key to the keys directory.* That key arrives by human hand, out of band, through a design-partner arrangement. There is no public sign-up. There is no published pricing. There is no self-service anything. Every hard part of getting a key is still exactly as hard as it was, and this artifact begins one step after that problem ends.

That is the same wall three conversations hit last month, and it is still standing. What BoltMCP has done is make everything *downstream* of the key deterministic and machine-executable, which is not nothing — it is most of the calendar time in an enterprise install — but it is not the seam itself.

I should also say what BoltMCP is, since I am holding them up. Self-hosted MCP platform, one Helm chart into your own Kubernetes cluster, your identity provider, your Vault, your OPA, your OTel. No vendor-hosted service. A UK company with a preview product and 368 stars. In our own catalog they score low, and correctly so — they publish no OpenAPI, their REST API is deliberately never given an ingress hostname, and their tool surface is defined per-tenant by the customer. I am not pointing at a mature API program. I am pointing at one file.

## The asks

**Publish the permissions file, whoever you are.** If you ship an install path an agent can drive, the deny list is part of the product and it belongs in the public repository next to the runbook. It tells a prospective customer's security team, in eleven reviewable lines, what the vendor's agent is and is not permitted to do on their workstation. That is a better security artifact than most vendor trust pages, and it costs an afternoon.

**Use the transcript test, not the blast-radius test.** When you decide what your agent may run, ask what ends up in the context window, not just what gets modified. Read-only commands are the ones that leak. `get secret`, `print-access-token`, anything that decodes and echoes. Those deserve a deny rule more than `delete` does, because nobody's instinct flags them.

**Split your scripts by who may run them.** The `scripts/allow` and `scripts/deny` convention is the cheapest good idea in this whole thing. It moves the policy decision out of a config file that nobody reads and into the directory structure, where it is obvious at a glance and stays correct when someone adds a script.

**Write the runbook for the agent and keep it for the humans.** The three paragraphs on Kubernetes readiness in that skill are better than the equivalent section in most Helm chart documentation, and they exist because someone had to explain it to a machine that could not infer it. Writing for an agent is a forcing function for writing down what you actually know.

I have said for a while that onboarding is the durable concept and the portal is the disposable one. I did not expect the first real counter-example to the "nobody has shipped this" complaint to arrive as a markdown file and a permissions list in a public repo, from a company with no API at all. But that is where it is, it is nine kilobytes, and you can read the whole thing in ten minutes.

Go read it. Then go look at what your own install instructions would do to an agent that followed them literally.
