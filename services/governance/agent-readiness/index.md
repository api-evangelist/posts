---
layout: service
section: Services
title: Agent Readiness
summary: Score your public API surface against the Agent Readiness framework — a neutral, evidence-based read on how safely an autonomous agent can actually drive your APIs, with a prioritized roadmap to raise it.
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
        <img src="/images/services/agent-readiness.png" alt="" width="64" height="64" class="me-3 flex-shrink-0">
        <h1 class="fs-3 mb-0">{{ page.title }}</h1>
      </div>
      <p class="lead text-muted mb-4">{{ page.summary }}</p>

      <!-- Story -->
      <div class="mb-2" style="max-width: 46rem;">
        <p class="mb-3">A human developer can paper over a lot of API friction &mdash; an ambiguous error, an undocumented idempotency convention, a prose-only auth description, an HTML-only changelog. An autonomous agent cannot. Every implicit convention a human silently absorbs is a place an agent gets stuck, retries blindly, double-charges a card, or hallucinates a payload. Agent readiness is the discipline of removing those implicit conventions and replacing them with machine-readable signals.</p>
        <p class="mb-3">I score your public API surface against my open <a href="https://github.com/api-evangelist/agent-readiness">Agent Readiness framework</a> &mdash; a nine-dimension model covering spec presence, auth-model clarity, idempotency, error semantics, rate-limit headers, dry-run, examples, MCP, and event contracts, plus the forward-looking signals of <code>/.well-known/api-catalog</code>, machine-readable consent, and identified agent traffic. Each dimension is scored 0&ndash;3 from a real evidence URL, and rolled up into an overall posture you can compare against reference providers like Stripe, GitHub, and Twilio.</p>
        <p class="mb-3">Because the framework is public and I use it the same way across every provider on <a href="https://apis.io">APIs.io</a>, the number is neutral &mdash; not a badge I sell, but an honest outside read your teams and stakeholders can trust. It works as a one-time baseline, and it works even better as a <strong>before-and-after</strong>: score today, ship your improvements, and I re-score against the same rubric so you can prove exactly how far you moved.</p>

        <h2 class="fs-6 fw-semibold mt-4 mb-2">What you walk away with</h2>
        <ul class="text-muted">
          <li>A scored scorecard across all twelve dimensions, each backed by a specific evidence URL</li>
          <li>A prioritized remediation roadmap &mdash; what to fix, in what order, to move each dimension up</li>
          <li>A benchmark against reference and peer providers, so the score has market context</li>
          <li>A re-assessment pass that quantifies your improvement as a defensible delta</li>
        </ul>
      </div>

      <!-- Related reading -->
      <div class="mb-4" style="max-width: 46rem;">
        <h2 class="fs-6 fw-semibold mb-2">Related reading</h2>
        <ul class="text-muted mb-0">
          <li><a href="https://github.com/api-evangelist/agent-readiness">The Agent Readiness framework</a> &mdash; the open nine-dimension model, schema, and vocabulary</li>
          <li><a href="/2026/05/20/api-evangelist-scores-83-percent-agent-ready/">API Evangelist Scores 83% Agent Ready</a></li>
          <li><a href="/2026/05/16/making-the-api-evangelist-network-agent-readable/">Making the API Evangelist Network Agent-Readable</a></li>
          <li><a href="/services/governance/reviews/">Reviews</a> &mdash; the broader honest outside read on your APIs and governance</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="card border-0 shadow-sm mt-4" style="max-width: 46rem;">
        <div class="card-body">
          <h2 class="fs-5 mb-2">Let's work together</h2>
          <p class="text-muted mb-3">If you want a neutral third-party read on how agent-ready your APIs really are &mdash; and a clear path to raise it &mdash; that is exactly what I do. Let's talk.</p>
          <p class="mb-0"><a href="mailto:info@apievangelist.com?subject=Agent%20Readiness%20assessment" class="btn btn-outline-secondary btn-sm">Get in touch — info@apievangelist.com</a></p>
        </div>
      </div>

    </section>
  </div>
</div>
