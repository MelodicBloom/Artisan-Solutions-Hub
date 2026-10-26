# Issue #2 — G0–G3 recovery evidence ledger

**Status:** in progress; this ledger is not a deployment, usability, accessibility, booking, testimonial, adoption, or production-AI certification.

**Purpose:** record the smallest auditable baseline for converting the A-Team Repair Solutions codebase into a truthful portfolio case study. It preserves the distinction between source-inspected behavior and runtime-verified behavior.

## Baseline

| Field | Recorded value |
| --- | --- |
| Repository | `MelodicBloom/Artisan-Solutions-Hub` |
| Baseline ref | `main` at `c43c34f328870e7b66dc7b42deac673dbd91f0e1` |
| README blob | `52cbe58095641a0557ae7fd5c14ed56a30496fea` |
| Source-inspection date | 2026-10-26 |
| Runtime evidence | Not recorded in this ledger |
| Browser evidence | Not recorded in this ledger |

The top-level README previously described an aspirational artisan marketplace, while the application source implements an A-Team Repair Solutions contractor-service prototype. The application commits inspected are dated 2026-03-03; the README baseline commit is dated 2026-05-29. Commit metadata for the inspected application work records Replit Agent-assisted changes. Human design ownership, the scope of agent assistance, and rights/permissions for media remain unconfirmed.

## Claim register

| Area | Source-inspected implementation | Safe portfolio wording | Not established / do not claim |
| --- | --- | --- | --- |
| Services to estimate | `Services.tsx` links each package to `/schedule?service=…`; `Schedule.tsx` reads the query parameter to initialize the service selector. | “Prototype explores a package-to-estimate-request handoff.” | Completed or usable booking flow |
| Estimate request | `Schedule.tsx` uses a Zod client schema and posts to `POST /api/estimates`; `server/routes.ts` parses the database insert schema and stores an estimate. | “Prototype contains an estimate-request form and persistence endpoint.” | Calendar availability, an actual booking, confirmation email, or a generated Google Meet link |
| Lead intake | `ShowMySpace.tsx` uses a Zod client schema and posts to `POST /api/leads`; `server/routes.ts` stores a lead. | “Prototype contains a schema-validated client intake flow backed by a lead endpoint.” | Follow-up within 24 hours, quoted response, or production lead operations |
| Gallery | `Gallery.tsx` fetches `/api/gallery`, filters items, uses before/after and single-image portfolio modes, and exposes click/touch/Enter/Space handlers plus a modal. | “Prototype includes a gallery interaction model with a separate portfolio mode.” | That images are authorized, represent the named work, or are valid before/after pairs |
| AI visualizer | `SpaceVisualizer.tsx` posts to `/api/visualize`; `server/routes.ts` calls configured OpenAI-compatible Replit integration paths for text and image generation, with a client error toast and server 500 catch. | “Source contains an AI concept-image route with an error path.” | Provider availability, generated output quality, construction feasibility, cost/latency, or production readiness |

## G0 — status and provenance reconciliation

**Result: partially recorded; not passed.**

- The README now names the contractor-service UX prototype and links to this ledger.
- Static source inspection establishes the routes listed above, but not that they ran successfully.
- Replit Agent commit metadata establishes agent-assisted implementation history at the commit level; it does not establish human design authorship or asset rights.
- `replit.md` describes 20 “verified” before/after pairs. No independent media-permission, chain-of-custody, or visual-pair validation record accompanies that statement.
- The `server/routes.ts` seed function creates named testimonials when the testimonial table is empty. Treat every testimonial as prototype content unless independent consent and attribution evidence is attached.
- The homepage contains unsupported operational and social-proof text, including “500+ Projects Completed,” “12+ Years Experience,” “4.9★ Average Rating,” “100% Satisfaction Rate,” “Licensed & insured,” and “Satisfaction guaranteed.” These must be removed from any recruiter-facing runtime capture or independently substantiated before use.

## G1 — clean-install and build evidence

**Result: not run.**

No fresh checkout and clean-install command output is attached to this baseline. Run the following from a disposable checkout at the baseline SHA and attach unedited console logs with exit codes:

```sh
git checkout c43c34f328870e7b66dc7b42deac673dbd91f0e1
node --version
npm --version
npm ci
npm run check
npm run build
```

Required receipt fields:

| Field | Required value |
| --- | --- |
| Commit SHA | Exact checked-out SHA |
| OS / architecture | Runner value |
| Node and npm versions | Direct command output |
| Lockfile integrity | `npm ci` exit code and log |
| Type check | `npm run check` exit code and log |
| Production build | `npm run build` exit code and log |
| Generated output | `dist/` listing or build summary, with no client data included |
| Failures | Exact command, exit code, and relevant log excerpt |

Do not convert an earlier Replit preview, source inspection, or a successful install on another commit into G1 evidence.

## G2 — browser proof matrix

**Result: not run.**

Use an isolated, disposable database only; never enter real leads or client data. Capture a dated screenshot plus browser/version, viewport, URL, action, expected result, observed result, and pass/fail for every row.

| Flow | 375px | 1440px | Required observation |
| --- | --- | --- | --- |
| Service handoff | pending | pending | Selecting “Book This Package” opens Schedule and preserves the intended service |
| Estimate validation | pending | pending | Blank and malformed inputs expose visible errors; valid disposable input reaches an observed server response |
| Lead validation | pending | pending | Same error/success boundary, without treating a success screen as a real follow-up promise |
| Gallery filter/modal | pending | pending | Filter changes items; card opens one modal; close control, Escape, overlay, and focus return work as observed |
| Touch interaction | pending | n/a | One tap produces one intended modal action; check for click/touch duplicate activation |
| Comparison slider | pending | pending | Mouse/touch movement behaves as observed; before/after labels remain truthful to provenance |
| Responsive layout | pending | pending | No horizontal clipping or unreachable primary controls |
| Reduced motion | pending | pending | Record browser preference state and observed behavior; no compliance claim from this check alone |
| AI disabled/error | pending | pending | With provider intentionally unavailable, the UI presents the observed failure state without implying a generated concept |

The gallery source has both `onClick` and `onTouchEnd` card handlers. It calls `preventDefault()` in the touch handler, but the one-tap/one-action behavior still requires browser evidence.

## G3 — operational and trust boundaries

**Result: not passed.**

1. **Booking:** `POST /api/estimates` stores a record; no calendar integration, availability check, email sender, or Meet-link generator was found in the inspected route. The Schedule success UI promises email within two hours and a personalized Google Meet link; do not use it as proof of working booking.
2. **Lead operations:** `POST /api/leads` persists data. No CRM handoff, notification, consent retention policy, or response-time mechanism was located in the inspected paths.
3. **Testimonials and metrics:** seeded names and homepage statistics are not evidence of clients, ratings, adoption, completed projects, licensure, insurance, or satisfaction.
4. **Media:** image presence in `client/public/images` or `attached_assets` does not establish authorization, project identity, location, or before/after continuity. A project-level asset register must record owner/permission, source, pair ID, and approved display context before publication.
5. **AI:** the route forms prompts from user-entered room details and returns a generated image when its provider configuration works. It is a concept visualizer only; it cannot support construction, safety, price, code-compliance, or feasibility claims.
6. **Accessibility:** semantic and keyboard-oriented source patterns exist in the gallery, but no assistive-technology, keyboard, contrast, focus-order, or reduced-motion verification record exists. Do not claim accessibility compliance.

## Next bounded verification action

Run G1 against the pinned SHA in a fresh checkout. If—and only if—`npm ci`, `npm run check`, and `npm run build` have recorded results, start a disposable runtime with a non-production database and execute the G2 matrix. Keep the public-facing case study blocked until the booking, testimonial, media, and AI boundaries above are either removed from its captures or independently evidenced.

## Evidence boundary

A file path, commit message, API route, source read, static validation pattern, or successful build can establish only the narrow fact it directly demonstrates. It does not establish visual quality, user adoption, production operation, media rights, legal status, accessibility compliance, or real-world service delivery.
