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
| Browser evidence | [G2 static-specimen receipt](../evidence/g2/receipt.json), 2026-10-27 13:45 UTC (09:45 ET); homepage only, no API backend |

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

A later [G1 run at the gallery-focus recovery head](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40536497014) also passed the same install, check, and build steps at `6f4246d866efb4a4af4af667af6cde37e7078d1d`. The receipt proves only the named commands for each recovery source. It does not establish browser behavior, accessibility compliance, booking, testimonial authenticity, media rights, user adoption, or production AI operation. Earlier Replit previews and source inspection remain insufficient substitutes for this recorded run.

## G2 — browser proof matrix

**Result: two contexts recorded; full G2 remains open.** The static Vercel specimen homepage receipt below has no API backend. A separate disposable Express + PostgreSQL browser receipt now exercises 20 interactions at 375px and 1440px; it does not validate the static deployment or resolve its deep-link 404.

### Receipt: static specimen homepage

| Field | Recorded value |
| --- | --- |
| URL | `https://artisan-hub-specimen.vercel.app/` |
| Captured | 375px: 2026-10-27T13:45:25Z (09:45:25 ET); 1440px: 2026-10-27T13:45:29Z (09:45:29 ET) |
| Browser | Headless Google Chrome 156.0.8078.47 via Playwright; `networkidle` + 2.5 s settle; full-page capture |
| Viewports | 375×812 (page height 5795px) and 1440×900 (page height 3518px) |
| Screenshots | [`docs/evidence/g2/g2-375.png`](../evidence/g2/g2-375.png), [`docs/evidence/g2/g2-1440.png`](../evidence/g2/g2-1440.png) |
| Raw receipt | [`docs/evidence/g2/receipt.json`](../evidence/g2/receipt.json) (headings, links, buttons, console, HTTP errors) |
| `pageerror` | None at either viewport |
| Console errors | 3 per viewport: `404` for `/api/gallery`, `/api/testimonials`, `/api/articles` |
| Horizontal overflow | None observed (`scrollWidth` equals viewport width at both sizes) |
| UI present | Header nav (Home, Services, Gallery, Articles, Show My Space, AI Visualizer; hamburger at 375px), `tel:` link, "Free Estimate" → `/schedule`; hero with "Get a Free Video Estimate" and "See Our Work"; ten service category cards → `/services`; philosophy section; CTA band to `/visualizer` and `/show-my-space`; footer nav |
| UI absent | Homepage testimonial, gallery, and article sections are data-driven and get no data (the API returns 404) |
| Client routing | Navigating in-app to `/services`, `/visualizer`, `/gallery` renders those pages with no `pageerror`. A **direct** request for any deep link (for example `GET /services`) returns Vercel `404 NOT_FOUND`: the deployment has no SPA rewrite |

**Truthfulness defect visible in the capture:** the rendered homepage still shows "500+ Projects Completed", "12+ Years Experience", "4.9★ Average Rating", and "100% Satisfaction Rate" (see G0). These screenshots are **not recruiter-safe** until those claims are removed or substantiated. They are not fixed here: this was a copy change, not a one-line rendering bug, and so out of narrow-fix scope.

### Matrix

| Flow | 375px | 1440px | Observation |
| --- | --- | --- | --- |
| Homepage render / responsive layout | **pass (static)** | **pass (static)** | It renders and has no horizontal overflow or `pageerror`. Data-driven sections are empty |
| Service handoff | pending | pending | `/services` renders via client routing; "Book This Package" → Schedule was not exercised |
| Estimate validation | **blocked** | **blocked** | The specimen has no `/api/estimates`. It needs a disposable Express + Postgres runtime |
| Lead validation | **blocked** | **blocked** | Same as above (`/api/leads`) |
| Gallery filter/modal | **fail on specimen** | **fail on specimen** | `/api/gallery` returns 404, so the specimen has no items to filter or open |
| Touch interaction | **blocked** | n/a | It depends on gallery items |
| Comparison slider | **blocked** | **blocked** | It depends on gallery items |
| Reduced motion | pending | pending | Not recorded |
| AI disabled/error | pending | pending | On the specimen, `POST /api/visualize` returns 404, so the provider is effectively unavailable. The UI error state was not captured |

The gallery source has both `onClick` and `onTouchEnd` card handlers. It calls `preventDefault()` in the touch handler, but the one-tap/one-action behavior still requires browser evidence.

### Receipt: disposable full-stack runtime

The [G2 workflow run 40536497062](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40536497062) checked out `6f4246d866efb4a4af4af667af6cde37e7078d1d`, built the client/server, initialized a GitHub Actions PostgreSQL 16 service, started Express at `http://127.0.0.1:5000`, and ran headless Chromium with `prefers-reduced-motion: reduce`. Its [artifact](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40536497062#artifacts) contains `receipt.json` and 20 viewport screenshots (artifact ID `12749206155`, SHA-256 `6a614f87761a4805e39843dd98f6c912b23a0d1d7f84bbbdf4c6c52aa8060454`). The test used fictitious `example.invalid` contact data and an inert loopback AI configuration. The run recorded **20 passing scripted observations, zero failing assertions**. This describes the tested recovery head in the isolated CI runtime only.

| Flow | 375px | 1440px | Observed boundary |
| --- | --- | --- | --- |
| Package to Schedule | pass | pass | Selected Moving Day package survives in the Schedule selector |
| Estimate form | pass | pass | Blank name and malformed email feedback visible; fictitious valid POST returned 201 |
| Lead form | pass | pass | Blank name and malformed email feedback visible; fictitious valid POST returned 201 |
| Gallery filtering and dialog | pass | pass | 25 seeded items narrowed to 6 Countertops; one dialog opens; close control dismisses it and focus returns to the card after the recovery focus fix |
| Card input | one tap/one dialog observed | Enter opens; Escape closes | No duplicate dialog observed on the tested gesture |
| Comparison | tap changed clip to approximately 79% | mouse changed clip to approximately 79% | Gesture position changed the CSS comparison clip; media identity, image pairing, and visual correctness remain unverified |
| Layout and motion preference | no document overflow; preference active | no document overflow; preference active | Other routes, reachable controls, animation behavior, and assistive technology were not audited |
| AI failure path | pass | pass | Injected HTTP 503 displayed failure toast and no generated result; no provider request was made |

The first runtime browser run [40536059252](https://github.com/MelodicBloom/Artisan-Solutions-Hub/actions/runs/40536059252) found focus did not return to the gallery card on close at either width. The source fix records the opener element and restores focus on dialog close; the passing run above verifies this specific regression. Escape assertions were initially checked before the exit transition; the harness now waits for dialog closure.

**Still pending for full G2:** overlay dismissal, portfolio showcase mode, an actual touch drag rather than a tap on the comparison, controls across all primary routes, and visual review of the screenshots. Simulating `prefers-reduced-motion` establishes the browser preference state, not that every animation honors it. The static specimen still has API 404s and direct deep-link 404s. Do not publish its captures as project proof while the unverified homepage claims remain visible.

## G3 — operational and trust boundaries

**Result: boundaries documented from source and the live specimen; the trust gate itself is not passed** (unsupported runtime claims remain in UI copy).

### Route inventory (source: `server/routes.ts`, wired by `server/index.ts`)

| Route | Backing | What it does | What it does **not** guarantee |
| --- | --- | --- | --- |
| `GET /api/gallery[?category=]` | Express → Drizzle/Postgres (`server/storage.ts`, `server/db.ts`) | Returns `gallery_items` rows | Media permission, project identity, or valid before/after pairs. Rows come from `seedDatabase()` in `server/routes.ts` when the table is empty; several seed entries reuse one image as both "before" and "after" |
| `GET /api/articles`, `GET /api/articles/:slug` | Express → Postgres | Returns seeded articles (404 if slug missing) | Expertise or licensure. Seed copy says "we are licensed electricians", which is unsubstantiated |
| `GET /api/testimonials` | Express → Postgres | Returns `testimonials` rows | Authenticity. All five are inserted by `seedDatabase()` (`Jennifer M.`, `David K.`, …) and have no consent or attribution evidence |
| `POST /api/leads` | Express → `insertLeadSchema.parse` → Postgres | Stores a lead (201) or returns 400 with the Zod message | Notification, CRM handoff, a response-time SLA, or a retention/consent policy. Nothing beyond the insert exists |
| `POST /api/estimates` | Express → `insertVideoEstimateSchema.parse` → Postgres | Stores a video-estimate request | A **booking**: there is no calendar, availability check, email sender, or Meet-link generation. The `Schedule.tsx` success copy over-promises |
| `POST /api/visualize` | Express → OpenAI SDK (`AI_INTEGRATIONS_OPENAI_API_KEY` / `_BASE_URL`, server env only) | Gets a text concept (`gpt-5.2`) and then an image (`gpt-image-1`). Returns 400 if `description` is missing, **502** if the image provider returns no `b64_json`, and 500 on any thrown error | Output quality, feasibility, safety, code compliance, cost, or latency. There is no rate limit or auth, so anyone who can reach the server can spend provider credits |

**Not wired:** the `server/replit_integrations/{chat,image,audio,batch}` modules are not imported by `server/index.ts` or `server/routes.ts`, so they expose no routes. Do not cite them as features.

**Empty provider responses:** if the chat completion returns no content, `visualization` becomes `""` and image generation still runs. If the image response is empty, the route returns 502 "Image generation returned no image data". `SpaceVisualizer.tsx` shows an error toast when the response is not ok. Missing provider env causes the SDK call to throw, and the route returns 500 "Failed to generate visualization".

**Empty database:** on boot, `registerRoutes` runs `seedDatabase().catch(console.error)`. With an empty DB, it inserts prototype gallery, article, and testimonial content. This seeded content is **prototype fixture data, not evidence**.

**Static vs. server (live specimen, observed 2026-10-27 13:45 UTC):** `artisan-hub-specimen.vercel.app` serves the Vite client build only. Every `/api/*` path returns Vercel 404, so on the specimen **no call reaches Express or a database**: no leads or estimates can be stored and no AI provider is called. Forms there can only reach their client-side validation or error states.

**Secrets:** the only server secrets referenced are `DATABASE_URL` (`server/db.ts`) and `AI_INTEGRATIONS_OPENAI_*` (`server/routes.ts`). A source grep finds no `process.env`/`import.meta.env` reads under `client/src`. A grep of the deployed bundle `/assets/index-DxLJ-Zkg.js` finds no `sk-…` keys, `AI_INTEGRATIONS*`, `DATABASE_URL`, or `OPENAI` strings. This shows absence in that bundle at that time only, not a secrets-management audit.

### Non-claims (must hold for any recruiter-facing use)

1. **Booking:** no production booking, calendar, confirmation email, or Meet link.
2. **Lead operations:** persistence only (on a server deployment); none on the specimen.
3. **Testimonials and metrics:** seeded testimonials and homepage statistics (500+, 12+, 4.9★, 100%, "Licensed & insured", "Satisfaction guaranteed") are not evidence of anything.
4. **Media:** there is no permission, chain-of-custody, or pair-validity record. A project-level asset register (owner/permission, source, pair ID, display context) is required before publication.
5. **AI:** a concept visualizer only, unauthenticated and unmetered. It cannot support construction, safety, price, code-compliance, or feasibility claims.
6. **Accessibility:** no assistive-technology, keyboard, contrast, focus-order, or reduced-motion verification record. Do not claim compliance.

## Next bounded verification action

1. Inspect the uploaded G2 screenshots and close the remaining browser rows: overlay dismissal, showcase mode, touch drag, route controls, and observed reduced-motion behavior.
2. Remove or independently substantiate the homepage statistics and the Schedule/lead follow-up promises before a recruiter-facing capture. Verify revised copy in the disposable runtime at both widths.
3. Decide whether the static specimen should gain an SPA rewrite and backend, or remain explicitly labeled a frontend specimen with nonfunctional API routes. G3 and G4 remain blocked pending provenance, media rights, and recruiter-safe content.

## Evidence boundary

A file path, commit message, API route, source read, static validation pattern, or successful build can establish only the narrow fact it directly demonstrates. It does not establish visual quality, user adoption, production operation, media rights, legal status, accessibility compliance, or real-world service delivery.
