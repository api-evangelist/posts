---
published: true
layout: post
title: Govern in the IDE, Where the Work Happens
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/govern-in-the-ide-where-the-work-happens.png
date: 2026-07-01
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Developer Experience
  - Shift Left
  - APIs
---
The earliest place you can govern an API is the editor, and it is also the place with the best return on the effort, because it's where the engineer is actually working and most open to help. [Spectral](https://apievangelist.com/2026/06/28/spectral-rules-machine-readable-enforcement/) runs as an IDE extension, which means the exact same ruleset that gates your [CI pipeline](https://apievangelist.com/2026/07/02/ci-cd-pipelines-make-governance-consistent/) can underline a violation in VS Code the instant it gets typed, with the documentation URL one hover away. That is a small piece of configuration with an outsized effect on how governance feels, and feelings matter more in this work than most engineers want to admit.

Think about the emotional difference between the two ways an engineer can encounter the same finding. A lint error that shows up in CI, after they've committed and pushed and moved on, feels like getting caught. It's a red build, a failure, an interruption that drags them back to something they thought they'd finished. The identical finding surfaced in their editor, before they've even committed, feels like help. It's a spell-checker for their API contract, quietly pointing out that this property name doesn't match the convention while they still have the whole thing in their head and fixing it costs nothing. Same rule, same severity, same underlying policy — completely different experience, entirely because of where it showed up in their workflow.

This is also where the just-in-time guidance idea finally pays off in full. I've been hammering on putting a documentation URL on every Spectral rule so that each finding links back to its human-readable policy, and the IDE is where that loop closes most beautifully. The engineer trips a rule, hovers over the squiggle, reads the one-paragraph policy explaining why the rule exists, and learns the why right there in the flow of the work. Not in a post-mortem, not in a review meeting a week later, not in a wiki they'll never find — in the editor, in the moment, while it's still relevant to what they're doing. That is how governance actually teaches, and teaching is most of what governance is supposed to do.

I want to be clear about why this is the friendliest face of governance, because I think a lot of programs get the order exactly backwards. They lead with the blocking CI gate, the thing that stops the build, and they treat the IDE as a nice-to-have they'll get to eventually. That's backwards. The IDE is where you should lead, because it converts governance from a gate you slam into at the end into guidance you receive continuously while you work. By the time an engineer hits CI, they shouldn't be surprised by anything, because their editor already told them and they already fixed it. The pipeline becomes a backstop for the rare miss rather than the primary place anyone experiences the rules.

If you do nothing else to make governance feel less adversarial — and making it feel less adversarial is half the battle, as we'll get into when we talk about [the people work](https://apievangelist.com/2026/07/05/api-governance-is-75-percent-people-work/) — get your ruleset into your developers' editors. It's a modest amount of setup. The payoff is that governance starts showing up as a helpful colleague looking over their shoulder instead of a bouncer at the door, and that shift in how it feels does more for adoption than any amount of mandate from above. Govern where the work happens, as early as the work happens, and most of the friction you've come to expect from governance simply never materializes.
