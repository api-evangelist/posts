---
layout: service
section: Services
title: Integrations
summary: Describe your integrations as portable, forkable Arazzo workflows built on your OpenAPI contracts — instead of building and maintaining one more one-off connector.
nav: Services
sub: Discovery
---

<div class="row gx-xl-9">
  <div class="col-12">
    <section>

      <!-- Breadcrumb -->
      <p class="small text-muted mb-2"><a href="/services/" class="text-decoration-none">&larr; All Services</a> &middot; <a href="/services/discovery/" class="text-decoration-none">Discovery</a></p>

      <!-- Header -->
      <div class="d-flex align-items-center mb-3">
        <img src="/images/services/integrations.png" alt="" width="64" height="64" class="me-3 flex-shrink-0">
        <h1 class="fs-3 mb-0">{{ page.title }}</h1>
      </div>
      <p class="lead text-muted mb-4">{{ page.summary }}</p>

      <!-- Story -->
      <div class="mb-2" style="max-width: 46rem;">
        <p class="mb-3">You should not have to build integrations anymore. You should be able to describe them. Every company still rebuilds the same connectors by hand &mdash; one team wires up the CRM, another wires up the same CRM the other direction, a consultant writes a bespoke version, and a no-code platform adds one more. The underlying operation is always the same: call this operation, capture that field from the response, and pass it as the input to the next one. That is a description, not a codebase.</p>
        <p class="mb-3">I take the integrations your operations depend on and rebuild them as <a href="https://spec.openapis.org/arazzo/latest.html">Arazzo</a> workflows &mdash; the workflow member of the OpenAPI family. Each one references the real OpenAPI contracts for the APIs involved, chains verified operations step by step, and lives as readable, versionable YAML in your own repository. There is nothing to install and no black-box runtime. Your team forks a workflow instead of downloading a connector, and edits it instead of configuring it.</p>
        <p class="mb-3">The result is an integration page that is honest about how the work actually happens. When an integration breaks, you can read why. When you need a new one, you describe it against the specs you already publish. The authority over how systems connect moves back to the people who maintain the interfaces, where it belongs.</p>

        <h2 class="fs-6 fw-semibold mt-4 mb-2">What you walk away with</h2>
        <ul class="text-muted">
          <li>A catalog of your key integrations described as forkable Arazzo workflows, not proprietary connectors</li>
          <li>Each workflow grounded in the real OpenAPI contracts and verified operations for the APIs involved</li>
          <li>An integration page your partners and developers can read, fork, and edit &mdash; version-controlled in your own repository</li>
          <li>A repeatable pattern for describing the next integration instead of building it from scratch</li>
        </ul>
      </div>

      <!-- Related reading -->
      <div class="mb-4" style="max-width: 46rem;">
        <h2 class="fs-6 fw-semibold mb-2">Related reading</h2>
        <ul class="text-muted mb-0">
          <li><a href="/2026/07/01/arazzo-workflows-are-your-new-integration/">Arazzo Workflows Are Your New Integration</a></li>
          <li><a href="https://documentation.apicommons.org">API Documentation</a> &mdash; the free tool that renders your Arazzo workflows as step timelines</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="card border-0 shadow-sm mt-4" style="max-width: 46rem;">
        <div class="card-body">
          <h2 class="fs-5 mb-2">Let's work together</h2>
          <p class="text-muted mb-3">If your team keeps rebuilding the same integrations by hand, let's describe them once as Arazzo workflows instead.</p>
          <p class="mb-0"><a href="mailto:info@apievangelist.com?subject=Integrations%20services" class="btn btn-outline-secondary btn-sm">Get in touch — info@apievangelist.com</a></p>
        </div>
      </div>

    </section>
  </div>
</div>
