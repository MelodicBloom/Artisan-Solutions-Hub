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
| Runtime evidence | [G1 receipt, 2026-10-27](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40488286520) for recovery source `4d529ea7928ceab641ea11fd3daa83aec602025c`, rooted at the baseline below |
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

**Result: passed for recovery source `4d529ea7928ceab641ea11fd3daa83aec602025c`, whose verified merge-base is baseline `c43c34f328870e7b66dc7b42deac673dbd91f0e1`.** This is not a passing result for the immutable baseline by itself.

A fresh run that checked out the exact baseline first recorded a real failure: [run 40487518065](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40487518065) completed `npm ci`, then `npm run check` exited 2 and the build did not run. The recovery source includes narrowly scoped TypeScript and explicit empty-provider-response handling fixes; the G1 workflow asserts its ancestry before it performs the checks. Do not retroactively call the baseline a G1 pass.

| Receipt field | Recorded result |
| --- | --- |
| Workflow receipt | [run 40488286520](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40488286520), job “Clean install, type check, build” |
| Recovery source SHA | `4d529ea7928ceab641ea11fd3daa83aec602025c` |
| Verified application baseline | `c43c34f328870e7b66dc7b42deac673dbd91f0e1` |
| Runner | GitHub-hosted Ubuntu 24.04.5 x64 |
| Runtime | Node `v22.23.2`; npm `10.9.8` |
| Clean install | `npm ci` passed; 482 packages added. The command reported 22 audit vulnerabilities (1 low, 4 moderate, 16 high, 1 critical); they were not remediated or assessed by this proof sprint. |
| Type check | `npm run check` (`tsc`) passed |
| Production build | `npm run build` passed; Vite client build and bundled server completed |
| Build observations | The log reports stale Browserslist data, a PostCSS `from`-option warning, and a 1.1 MB server bundle warning. These were not treated as passing-quality or production-readiness findings. |

The receipt proves only the named commands for that recovery source. It does not establish browser behavior, accessibility compliance, booking, testimonial authenticity, media rights, user adoption, or production AI operation. Earlier Replit previews and source inspection remain insufficient substitutes for this recorded run.

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

G1 is recorded for the recovery source above; G2 remains unrun. Start G2 only in a disposable runtime with a non-production database, then attach the matrix’s dated browser receipts. Keep the public-facing case study blocked until the booking, testimonial, media, and AI boundaries above are either removed from its captures or independently evidenced.

## Evidence boundary

A file path, commit message, API route, source read, static validation pattern, or successful build can establish only the narrow fact it directly demonstrates. It does not establish visual quality, user adoption, production operation, media rights, legal status, accessibility compliance, or real-world service delivery.
