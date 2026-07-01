---
published: true
layout: post
title: "If You're Using Spectral, It Is Now Gathering Data About You — Opt Out"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/if-youre-using-spectral-it-is-now-gathering-data-opt-out.png
date: 2026-07-02
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Telemetry
  - Privacy
  - OpenAPI
---
I spend a lot of time telling you to run Spectral, so I owe you the other half of the story. On June 30th a pull request landed in the Spectral repository with the entirely unremarkable title `chore: added scarf telemetry to cli`, and with twenty-nine lines of changes the linter I keep recommending started phoning home. If you have Spectral in your toolbox — and after the governance series I just wrote, I hope you do — you should know that it is now gathering data about your usage, and you should decide on purpose whether you want to let it.

Here is what actually changed. Spectral now uses [Scarf](https://scarf.sh/), through the `scarf-js` package, to collect what the README calls "anonymized installation analytics." The important word in that sentence is *installation* — this runs when you `npm install` Spectral, not every time you lint a document. But do not let "installation" lull you, because in a modern governance setup you are installing Spectral constantly. Every CI/CD run that provisions a fresh environment, every Docker image build, every developer who clones the repo and runs install, every ephemeral pipeline container — each one is an install event, and each one is a ping. What Scarf sends on that ping is the package and version you're pulling, your IP address (which gets turned into a coarse geographic location and, via reverse DNS, frequently the name of your company or ISP), your operating system and platform, and your Node version. Scarf's position is that this is anonymized and contains no personal data. Maybe. But your IP address resolving to your employer's network is exactly the kind of thing plenty of teams would rather not broadcast, and "anonymized" is doing a lot of quiet work in that sentence.

I want to be fair about this, because I am not here to dunk on Stoplight. Scarf is a legitimate, widely-used tool, and open-source maintainers have every right to understand who is using their work — that visibility is often what keeps a project funded and alive. The mechanism is honest, the opt-out is real, and it is documented right there in the README rather than buried. I even chuckled at the tell that the README copy-pastes its analytics section from somewhere else and opens with "SwaggerUI uses Scarf" — the boilerplate nature of that paragraph is a pretty good sign of how normalized install-time telemetry has quietly become across our whole ecosystem. That is the actual story here. This is not one linter doing something sneaky; it is one more data point in a trend where the open-source tools we build our governance on are increasingly instrumented by default.

So opt out — deliberately, and everywhere it matters. You have two clean ways to do it. The first is to set the `scarfSettings.enabled` field to `false` in your project's `package.json`, which is the version-controlled, reviewable, travels-with-the-repo option and the one I'd reach for:

```
// package.json
{
  // ...
  "scarfSettings": {
    "enabled": false
  }
  // ...
}
```

The second is to set the environment variable `SCARF_ANALYTICS` to `false` in whatever environment installs your packages — `SCARF_ANALYTICS=false npm install` — which is the right lever for your CI/CD runners and build images, the places where the installs actually pile up. Put it in both if you want belt and suspenders.

There is a governance lesson sitting underneath all of this, and it is the same one I keep coming back to. The consumer decides. You do not get to be surprised by what your tools do; part of running a governance practice is knowing the provenance and the behavior of every tool in your pipeline, telemetry included, and making a conscious call about it instead of accepting the default. Add "does this tool phone home, and do we want it to" to the checklist you already run against your dependencies. Spectral is still a great linter and I am still going to tell you to use it. I am just also going to tell you to read the twenty-nine lines that changed on June 30th, and to opt out with intent.
