# Karmøy Rørteknikk — modern website implementation plan

Status: planning document  
Scope: turn the current Astro prototype into a complete, credible, production-ready company website  
Primary audience: homeowners, commercial customers, industrial customers, contractors, and local partners on Haugalandet

## Implementation progress — 22 June 2026

- [x] Rebuilt the responsive visual system, header, navigation, footer, homepage, service template, and contact presentation.
- [x] Added locally bundled GSAP motion and retained Lottie animation with reduced-motion support.
- [x] Researched public company facts and documented sources in `COMPANY_RESEARCH.md`.
- [x] Expanded company, approval, apprenticeship, capability, and project-reference content from public sources.
- [x] Generated and optimized three original illustration images; all project usage is visibly labelled as illustration.
- [x] Added a signature GSAP scroll experience with animated technical schematics, layered plant-room imagery, and responsive fallbacks.
- [x] Refined the signature sequence with path-bound flow tracers, layered pulse feedback, a higher-quality background encode, and a lower-loss parallax zoom.
- [x] Directed the signature section as a three-act scroll narrative with live telemetry, system-state transitions, a convergence payoff, and a full-screen circular handoff.
- [x] Added velocity-reactive energy, persistent route packets, a blueprint scan pass, and a circular reveal into the first featured project.
- [x] Added a reproducible Browserslist override and restored clean type/build checks.
- [ ] Obtain company approval for facts, project naming, current certifications, contacts, and operating hours.
- [ ] Replace generated project imagery with approved authentic company photography.
- [ ] Configure and test `PUBLIC_CONTACT_FORM_ENDPOINT`.
- [ ] Complete privacy/legal copy and production analytics decision.
- [ ] Perform final browser, accessibility, performance, and device QA before public launch.

## 1. Outcome

Build a fast, accessible Norwegian website that makes Karmøy Rørteknikk look established and technically capable, explains its services clearly, proves its experience, and converts visitors into phone calls and qualified enquiries.

The finished site should:

- communicate the difference between residential VVS and industrial/specialist work within seconds;
- establish trust with real projects, certifications, people, partners, and local presence;
- provide a clear next action on every page;
- send contact requests to a real destination with reliable success/error handling;
- remain easy to update from local content now and Headless WordPress later;
- meet accessibility, SEO, performance, privacy, and responsive-layout requirements.

## 2. Current repository audit

### What is already solid

- Astro 5 static site with TypeScript, React support, Sass, sitemap integration, and a clean `src/` structure.
- Reusable layout, header, navigation, hero, cards, footer, rich text, form, and map components.
- Local JSON content with a WordPress REST fallback abstraction.
- Static routes for ten content pages plus contact and 404 pages.
- Basic responsive navigation, reduced-motion handling, canonical URLs, Open Graph metadata, and `PlumbingService` schema.
- Local business details and service navigation are centralized.

### Gaps that keep it at prototype level

- Most internal pages use the same hero + one text card template, so services are not explained or differentiated deeply enough.
- The homepage repeats generic cards but lacks proof, featured work, process, customer segments, testimonials, accreditations, and a strong closing CTA.
- Project cards use placeholder SVGs; the current image library has only three general stock-style photos.
- The contact form does not submit anywhere; it logs data to the browser and always shows success after client-side validation.
- Map geocoding happens on every visit and Leaflet, GSAP, and map resources are loaded at runtime from third-party CDNs.
- The global stylesheet is one large file and the visual system is only partially defined.
- Icons mix inline SVG, an unrelated icon collection, and a single Lottie animation.
- Several hero pages have no page-specific image and fall back to a generic gradient.
- Content values are too narrow for a complete site: no service detail structures, project slugs/case studies, testimonials, certifications, team, FAQs, or social links.
- SEO is basic: no per-page social image, breadcrumb/service/project schema, explicit robots policy beyond the file, or content-driven metadata validation.
- No test suite, visual regression checks, lint rules, automated formatting check, or CI workflow is present.
- Dependencies are not installed in the current checkout, so `npm run lint` and `npm run build` could not be baseline-verified during this audit (`astro: command not found`).

## 3. Product and content decisions to confirm

Do not invent these claims. Collect and approve them before launch:

- exact legal company name, organization number, phone, email, fax relevance, and opening/emergency hours;
- all active services and which customer types each service targets;
- geographic service area and whether emergency/call-out work is offered;
- valid certifications, approvals, memberships, safety standards, and warranty language;
- team names, roles, experience, and approved portraits;
- 6–10 real projects with customer permission, location, scope, challenge, solution, result, and photos;
- 3–6 approved testimonials or named references;
- correct supplier/partner names, logos, URLs, and permission to display them;
- contact-form recipient, required fields, consent text, retention policy, spam protection, and preferred form provider/backend;
- privacy-policy owner and analytics/cookie requirements;
- whether WordPress will be used at launch or remains a future option.

## 4. Recommended information architecture

Keep navigation short and intent-based:

1. Hjem (`/`)
2. Tjenester
   - Sanitær og VVS (`/sanitaer-vvs`)
   - Industrirør og prosess (new or rename an existing route)
   - Plastsveising (`/plastsveising`)
   - Gass (`/gass`)
   - Gjenvinningsanlegg (`/gjenvinningsanlegg`)
3. Prosjekter (`/prosjekter` with individual `/prosjekter/[slug]` case studies)
4. Om oss (`/om-oss`)
5. Kontakt (`/kontakt-oss`)

Move `Referanser`, `Samarbeid`, and `Leverandører` out of the primary navigation unless they contain enough unique visitor value. Their strongest content can become trust sections on Home, About, and Project pages. Keep standalone pages only if there is meaningful approved content.

Add utility routes:

- `/personvern` — privacy and form-data policy;
- a designed `/404` with service links and contact action.

## 5. Visual direction

Use a precise, industrial-modern visual language rather than a generic rounded-card template.

- Palette: retain brand blue as the anchor; add deep navy/graphite, warm off-white, steel grey, and a restrained safety-orange accent.
- Typography: use a locally hosted variable sans-serif with strong Norwegian character support; establish a clear display/body scale.
- Layout: wider full-bleed image moments, asymmetric editorial grids, stronger section rhythm, and fewer floating white cards.
- Imagery: prioritize real staff, installations, welding detail, industrial environments, completed bathrooms, and regional context. Define consistent crops and focal points.
- Graphic language: technical line details, pipe/path motifs, restrained grid patterns, and simple consistent SVG icons.
- Motion: small purposeful transitions and reveal effects only; no decorative Lottie unless it strengthens meaning. Respect `prefers-reduced-motion` and avoid layout shifts.
- UI states: visible hover, keyboard focus, active navigation, loading, success, error, empty, and disabled states.

## 6. Page blueprints

### Homepage

1. Utility/header area with logo, compact navigation, phone action, and primary “Be om tilbud” CTA.
2. Full-width hero with specific value proposition, residential/industrial qualifier, two CTAs, and a real flagship image.
3. Trust strip: service area, years/experience claim, certifications, and response expectation—only with verified facts.
4. Audience split: “Bolig og næring” and “Industri og prosess” with clear paths.
5. Services overview with five concise service cards linking to detail pages.
6. Featured projects with real imagery and measurable scope/result where permitted.
7. Why Karmøy Rørteknikk: local response, certified expertise, documentation, and predictable delivery.
8. Simple project process: enquiry → assessment/site visit → proposal → delivery/documentation.
9. Testimonial/reference section with approved attribution.
10. Partner/supplier logo row if permissions exist.
11. Local coverage section with address/map link and service-area copy.
12. Strong closing CTA with phone and enquiry options.

### Service pages

Use one reusable service layout populated by structured content:

1. Service-specific hero and CTA.
2. Short outcome-focused introduction.
3. “Dette hjelper vi med” capability list.
4. Customer types and typical use cases.
5. Method/process and documentation delivered.
6. Relevant certifications and materials/technologies.
7. Related project case studies.
8. Service-specific FAQs.
9. Related services.
10. Contact CTA prefilled with the service name.

Each service must have unique copy and images; do not only swap the title.

### Projects index and case studies

- Add useful category filters only if there are enough projects; otherwise use a simple curated grid.
- Replace all placeholder artwork with approved photos.
- Give each project a detail page containing overview, customer/context, challenge, scope, solution, delivery facts, gallery, and result.
- Make customer names optional so anonymized industrial work can still be shown credibly.
- Use image captions and descriptive alternative text.

### About

- Company story and local base.
- Residential and industrial competence.
- Team/roles with real portraits if approved.
- Certifications, quality/safety approach, and working principles.
- Partners presented as supporting evidence, not filler.
- Recruitment CTA only if the business is actively hiring.
- Closing contact CTA.

### Contact

- Phone and email above the fold, with response expectations that are operationally true.
- Enquiry form with service/project type, name, phone/email, message, optional attachment only if the backend supports safe handling, and privacy consent.
- Real server submission, spam protection, rate limiting, accessible error summary, and honest success state.
- Static map or embedded map with fixed coordinates; do not geocode the address in each visitor's browser.
- Address, opening hours, service area, organization number, and privacy link.

### Supporting pages

- References/partners/suppliers: consolidate where possible; use approved logos and concise descriptions.
- Privacy: explain form processing, analytics/cookies, processors, retention, and contact rights in reviewed language.
- 404: clear recovery links, search only if justified by content volume, and direct contact action.

## 7. Component and content architecture

### Components to add or refactor

- `SiteHeader` with active route, desktop CTA, and robust mobile drawer.
- `Hero` variants for home, service, project, and compact pages.
- `SectionHeader`, `ButtonLink`, `Icon`, `TrustBar`, `ServiceCard`, `ProjectCard`, `Testimonial`, `LogoCloud`, `ProcessSteps`, `FaqList`, `Breadcrumbs`, `ContactCta`, and `MediaFigure`.
- Layouts: `ServiceLayout.astro` and `ProjectLayout.astro` instead of conditionals in `[slug].astro`.
- Split global Sass into tokens, reset/base, layout utilities, and component-scoped styles. Keep global selectors limited.
- Replace string-injected icons with a small typed SVG icon system.
- Prefer Astro components and browser-native behavior. Keep React only where stateful interactivity materially benefits the form.

### Content model to add

Define typed structures for:

- `Service`: slug, title, summary, audience, capabilities, process, certifications, FAQs, hero, related projects, CTA;
- `Project`: slug, title, summary, category, location, client visibility, dates, scope, challenge, solution, results, hero, gallery;
- `Person`, `Testimonial`, `Partner`, `Certification`, `FAQ`, `SEO`, and expanded `SiteSettings`;
- media objects with source, width, height, alt text, caption, focal point, and attribution.

Use Astro content collections with schemas for local content so malformed or incomplete entries fail at build time. Adapt WordPress responses into the same domain types; page components should never know which backend supplied the data.

Avoid unrestricted HTML injection for newly structured content. If WordPress rich text remains, sanitize it before rendering and constrain supported elements.

## 8. Technical implementation

### Foundation

- Install dependencies, run the existing checks, and fix baseline failures before redesign work.
- Lock the supported Node version and package manager; commit the lockfile.
- Add ESLint or the chosen Astro lint setup, Prettier check mode, and a CI workflow for type check, build, and tests.
- Decide launch content source early; remove unneeded runtime branches if WordPress is not actually required.

### Responsive and accessibility

- Design mobile-first at approximately 360, 768, 1024, and 1440 px; test content-driven breakpoints rather than device names.
- Meet WCAG 2.2 AA: semantic landmarks/headings, keyboard navigation, visible focus, contrast, target sizes, labels, error association, and reduced motion.
- Add current-page navigation state, predictable dropdown keyboard behavior, dialog focus management if using a mobile drawer, and no hover-only content.
- Test with keyboard, VoiceOver or equivalent, 200% zoom, and automated axe checks.

### Performance

- Use Astro image optimization with explicit dimensions, responsive `srcset`, modern formats, and priority only for the LCP image.
- Self-host fonts and critical icons; subset where practical.
- Remove runtime GSAP/Lottie/Leaflet CDN dependencies unless they provide measured value.
- Use CSS transitions and IntersectionObserver for minimal reveals, or ship the animation package locally.
- Use fixed map coordinates and load an interactive map only on intent; a linked static preview may be sufficient.
- Target mobile Lighthouse: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95 on representative production pages.

### Forms, privacy, and security

- Select a real form route/provider compatible with static deployment (for example a serverless endpoint or managed form service).
- Validate on client and server, normalize data, use a honeypot plus rate limiting/Turnstile where appropriate, and never log personal enquiries in the browser.
- Return real pending, success, validation, rate-limit, and server-error states.
- Add privacy consent and link, document processors/retention, and avoid non-essential third-party requests before consent if analytics are added.
- Sanitize CMS HTML and add a Content Security Policy compatible with required services.

### SEO and sharing

- Add title/description/OG image fields per content entry and a reusable metadata component.
- Add `LocalBusiness`/`PlumbingService`, `Service`, `BreadcrumbList`, and `Article` or project schema where truthful.
- Generate a branded default social image and project-specific variants.
- Add breadcrumb UI, meaningful internal links, sitemap verification, robots rules, favicon/app icons, and a useful web manifest only if needed.
- Keep one descriptive H1 per page and write unique Norwegian titles and descriptions.

## 9. Delivery phases and checklist

### Phase 0 — business inputs and baseline

- [ ] Install dependencies and capture clean `lint`/`build` baseline.
- [ ] Confirm launch content source, hosting, form delivery, analytics, and privacy approach.
- [ ] Approve sitemap and primary conversion action.
- [ ] Gather verified company facts, claims, certifications, contacts, and policies.
- [ ] Gather and obtain permission for photography, projects, testimonials, and partner logos.
- [ ] Create an image/content inventory showing missing assets and owners.

### Phase 1 — design system and shell

- [ ] Define tokens for color, type, spacing, radius, shadow, container, and motion.
- [ ] Implement font loading, base styles, buttons, links, form controls, cards, and media rules.
- [ ] Rebuild header/navigation, footer, mobile call action, breadcrumbs, and reusable CTA.
- [ ] Create representative desktop and mobile homepage/service compositions before scaling to all pages.
- [ ] Validate keyboard behavior, focus, contrast, and reduced motion.

### Phase 2 — typed content and core components

- [ ] Add schema-validated content collections/domain types.
- [ ] Implement service, project, testimonial, partner, FAQ, and SEO models.
- [ ] Build reusable section components and dedicated service/project layouts.
- [ ] Keep local and WordPress adapters compatible with the same types.
- [ ] Add clear build errors for missing required content and media metadata.

### Phase 3 — complete pages

- [ ] Build the full homepage blueprint.
- [ ] Build and populate every service page with unique content.
- [ ] Build projects index and at least 3 strong case studies before launch.
- [ ] Complete About, Contact, Privacy, and 404 pages.
- [ ] Consolidate or improve References, Cooperation, and Suppliers pages.
- [ ] Replace every placeholder image and generic/unsupported claim.

### Phase 4 — conversion and production integrations

- [ ] Connect the contact form to a real endpoint and recipient.
- [ ] Add spam protection, server validation, privacy consent, and failure states.
- [ ] Replace browser geocoding with fixed coordinates/static map strategy.
- [ ] Add analytics only after defining events, consent needs, and ownership.
- [ ] Track phone clicks, email clicks, form starts, successful submissions, and key service/project navigation without collecting unnecessary personal data.

### Phase 5 — quality assurance and launch

- [ ] Run type check, production build, link check, and content-schema validation in CI.
- [ ] Test Chrome, Safari, Firefox, and Edge; current iOS and Android sizes.
- [ ] Test keyboard, screen reader, zoom/reflow, reduced motion, slow network, and JavaScript failure paths.
- [ ] Run Lighthouse and axe on Home, one Service, one Project, Contact, Privacy, and 404.
- [ ] Verify form delivery, reply-to behavior, spam handling, map fallback, canonical URLs, structured data, sitemap, and robots.
- [ ] Compress final media, check copyright/consent, proofread Norwegian copy, and confirm all business claims.
- [ ] Configure production domain, HTTPS, redirects, security headers, error monitoring, backups/content ownership, and a rollback path.

## 10. Definition of done

The redesign is complete when:

- every navigation route has purposeful, approved content and no placeholders;
- the homepage and each service page state audience, offer, proof, and next action clearly;
- at least three real project case studies demonstrate the work;
- the contact form delivers real messages and handles all states truthfully;
- the site works across target viewport sizes and browsers without horizontal overflow or broken navigation;
- WCAG 2.2 AA checks and the accessibility test checklist pass;
- production build, type check, content validation, and automated tests pass in CI;
- performance targets are met on production-like mobile testing;
- metadata, schema, sitemap, canonicals, privacy copy, and business details are verified;
- no page depends on placeholder media, unapproved claims, browser console logging, or avoidable runtime CDN failure.

## 11. Recommended first implementation slice

Start with one vertical slice rather than restyling every existing route at once:

1. confirm business inputs and collect one strong real project plus core photography;
2. establish tokens, typography, header, footer, buttons, media, and responsive layout;
3. build the complete homepage and one service page using the new typed content model;
4. connect and verify the production contact form;
5. test accessibility and performance, adjust the system, then scale it to remaining services and projects.

This slice tests the design language, content model, conversion path, and production integrations before repetition makes changes expensive.
