---
layout: service
section: Services
title: Governance Rollout
summary: Adopt governance on an estate that already exists — a phased rollout built on a ratcheting baseline and sanctioned exceptions, so teams stop routing around the rules.
nav: Services
sub: Governance
---

<div class="row gx-xl-9">
  <div class="col-12">
    <section>

      <!-- Breadcrumb -->
      <p class="small text-muted mb-2"><a href="/services/" class="text-decoration-none">&larr; All Services</a> &middot; <a href="/services/governance/" class="text-decoration-none">Governance</a></p>

      <!-- Header -->
      <div class="d-flex align-items-center mb-3">
        <img src="/images/services/pipelines.png" alt="" width="64" height="64" class="me-3 flex-shrink-0">
        <h1 class="fs-3 mb-0">{{ page.title }}</h1>
      </div>
      <p class="lead text-muted mb-4">{{ page.summary }}</p>

      <!-- Story -->
      <div class="mb-2" style="max-width: 46rem;">
        <p class="mb-3">Most governance advice assumes a clean slate. Real estates are not clean &mdash; they are hundreds of specs that predate whatever standard you just wrote. Turn a strict ruleset loose on that and you get a wall of red, every build fails, and within a week someone quietly deletes the CI step. The rules didn't lose on the merits; they lost because there was no honest way to adopt them incrementally.</p>
        <p class="mb-3">I help you roll governance out the way it actually sticks. We <strong>snapshot the estate as it is today</strong> into a ratcheting baseline, so existing violations are acknowledged rather than pretended away, and the pipeline fails only on <em>new</em> problems from day one. Then we burn the baseline down on a schedule the teams can live with. This is the difference between governance that runs and governance that gets switched off.</p>
        <p class="mb-3">The other half of a rollout is exceptions &mdash; because there is always a legacy endpoint, a deadline, or a deliberate deviation that can't be fixed yet. I learned this standing up API governance at a large financial institution in New York, where every line of business was its own tribe with its own strong opinions. The thing that worked was not a stricter linter; it was a <strong>sanctioned exceptions process</strong>: you could have an exception, but it was owned, time-boxed, and written down &mdash; and if you wanted to reuse it, you came to the governance review and argued for it. An exception maker built into the tooling is what stops people from routing around the standard entirely.</p>
        <p class="mb-3">This is people work as much as tooling work. As a longtime Spectral maintainer put it to me, the hard problems here are organizational, not technical &mdash; teams cannot even agree on what counts as a breaking change. My job is to give you a rollout the tribes will actually accept.</p>
        <p class="mb-3">I build the supporting tools in the open, so you can start free and keep what you build: <a href="https://baseline.apicommons.org">Governance Baseline</a> snapshots today's violations and fails only new ones, <a href="https://waivers.apicommons.org">Governance Waivers</a> makes every exception sanctioned, owned, and expiring, and <a href="https://scorecard.apicommons.org">Governance Scorecard</a> shows whether the estate is actually getting healthier over time.</p>

        <h2 class="fs-6 fw-semibold mt-4 mb-2">What you walk away with</h2>
        <ul class="text-muted">
          <li>A ratcheting baseline so governance can adopt on a legacy estate without a wall of red</li>
          <li>A sanctioned exceptions process &mdash; owned, time-boxed, and reviewed &mdash; instead of teams disabling rules</li>
          <li>A phased burn-down plan and the review cadence to run it</li>
          <li>Governance the lines of business will accept, because it meets them where they are</li>
        </ul>
      </div>

      <!-- Related reading -->
      <div class="mb-4" style="max-width: 46rem;">
        <h2 class="fs-6 fw-semibold mb-2">Related reading &amp; tools</h2>
        <ul class="text-muted mb-0">
          <li><a href="https://baseline.apicommons.org">Governance Baseline</a> &mdash; snapshot the estate, fail only new violations, burn it down</li>
          <li><a href="https://waivers.apicommons.org">Governance Waivers</a> &mdash; sanctioned, owned, expiring exceptions</li>
          <li><a href="https://scorecard.apicommons.org">Governance Scorecard</a> &mdash; is the estate getting healthier over time?</li>
          <li><a href="/services/governance/rules/">Rules</a> and <a href="/services/governance/pipelines/">Pipelines</a> services &mdash; craft the rules and wire the enforcement</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="card border-0 shadow-sm mt-4" style="max-width: 46rem;">
        <div class="card-body">
          <h2 class="fs-5 mb-2">Start with the research</h2>
          <p class="text-muted mb-3">Everything I know about sequencing a rollout across an organization is already written down, priced, and yours to read tonight — no call, no scoping, no proposal. Start there.</p>
          <ul class="list-unstyled mb-3">
            <li class="mb-3">
              <a href="https://papers.apievangelist.com/papers/fundamentals-of-the-api-lifecycle/">The Fundamentals of the API Lifecycle</a> <span class="badge bg-dark align-middle ms-1">$25</span><br>
              <span class="text-muted small">Every stage, what it owes the next one, and where teams skip.</span>
            </li>
            <li class="mb-3">
              <a href="https://papers.apievangelist.com/papers/fundamentals-of-api-governance/">The Fundamentals of API Governance</a> <span class="badge bg-dark align-middle ms-1">$25</span><br>
              <span class="text-muted small">Governance is 75% people work — here's the other 25%.</span>
            </li>
          </ul>
          <p class="text-muted small mb-3"><strong>Free first:</strong> your Kin Score and Agent Readiness are already published on <a href="https://apis.io">APIs.io</a>. Look yourself up before you buy anything — the score costs nothing and it is the same rubric all of this research is built from.</p>
          <p class="mb-0"><a href="https://papers.apievangelist.com/" class="btn btn-dark btn-sm">Browse all research &rarr;</a></p>
        </div>
      </div>

      <p class="text-muted small mt-3" style="max-width: 46rem;">If you would rather have this done with you than do it yourself, I take a small number of engagements a year — <a href="mailto:info@apievangelist.com?subject=Governance%20Rollout">info@apievangelist.com</a>.</p>

    </section>
  </div>
</div>
