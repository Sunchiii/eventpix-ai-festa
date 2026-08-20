# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A [Slidev](https://sli.dev/) deck: the **EventPix** pitch for the AI Youth Festa competition
(~6.5 minutes, 15 slides, English). `KEP.jpeg` is the competition's Document Review scoring
table — five weighted criteria the deck is built to answer: AI technology & innovation (30),
business viability (20), SDG contribution & social impact (20), ASEAN market readiness &
global scalability (20), team & execution capability (10). It presents the product built at
`/Users/lasun/projects/eventpix` — an AI-powered event-photo discovery and monetization
platform for the Laos market.

## Commands

- `pnpm install` — install (pnpm is the package manager; `pnpm-workspace.yaml` carries required config)
- `pnpm dev` — dev server with HMR at http://localhost:3030, opens the browser
- `pnpm build` — static SPA build into `dist/`
- `pnpm export` — export to PDF/PNG/PPTX (requires `pnpm add -D playwright-chromium` first)

No test or lint setup exists.

## Structure

- `slides.md` — the whole deck. Slides are separated by `---`; each slide may carry its own
  YAML frontmatter (`layout:`, `class:`). The first frontmatter block is deck-wide config.
  The last HTML comment in each slide is the presenter note, and every slide has one carrying
  the spoken beat plus a running time budget — keep those in sync when editing content.
- `components/*.vue` — auto-imported into slides by filename, no import statement needed.
  - `FaceBox.vue` — white corner ticks + red score chip over a photo; mirrors the app's
    `face-box.tsx`. Absolutely positioned, so its parent needs `relative`.
  - `BrandLogo.vue` — the real aperture-"P" mark (CSS-masked) plus the "EventPix" wordmark.
  - `PipelineStage.vue` — numbered stage card; `:shipped="false"` renders the muted "not yet built" variant.
  - `DemoVideo.vue` — plays/pauses with `onSlideEnter`/`onSlideLeave`.
  - `ScaleBar.vue` — labelled horizontal bar for the scale slide; `pct` is the fill width and
    `tone` (0-2) indexes the same three-tone red ramp the revenue split uses.
  - `TeamMember.vue` — round photo + name + role row for the team slide. `photo` is a
    `/team/<file>` path; if it is absent or fails to load the avatar falls back to the
    member's initials (the honorific is skipped), so the slide never shows a broken image.
  - `SdgNote.vue` — one official UN SDG tile plus a single line of copy; `side="right"` flips
    the tile to the other end. The artwork is scaled and otherwise untouched — see below.
- `style.css` — auto-loaded global styles: self-hosted `@fontsource` imports, the `--ep-*` brand
  tokens (with an `.ep-dark` override for dark slides), and the `.card` / `.chip` / `.match-chip`
  / `.data` / `.accent` / `.muted` / `.subtle` / `.lao` helpers the slides use.
- `public/eventpix-logo.svg` — the real logo, copied from the frontend; used as a CSS mask.
- `public/sdg/sdg-0{3,8,9}.png` — the official UN flat goal icons from
  `sdgs.un.org/sites/default/files/goals/E_SDG_Icons-0N.jpg`, scaled to 200px and nothing else.
  Referenced as `/sdg/<file>`, so the path prefix **must stay in `scripts/fix-base.mjs`'s
  `targets`** or they 404 on the Pages subpath deploy.
- `public/team/{savath,chilanhouth,lasun}.jpg` — the three team headshots, referenced as
  `/team/<file>`, so the prefix **must stay in `scripts/fix-base.mjs`'s `targets`**. All three
  are 512×512 square crops, because `TeamMember.vue` renders them as circles with
  `object-fit: cover`. Sources: `savath.jpg` from Laligence's public about page
  (`laligence.ai/images/savath.JPEG`, already square); `chilanhouth.jpg` and `lasun.jpg` were
  supplied by the team as CMS URLs (`cms.laligence.ai/uploads/…`) and are **tight face crops**
  of full-length photos — the originals are a conference shot with a microphone and a casual
  garden photo, and the crop is what makes them sit level with the studio portrait. Recrop from
  the original rather than rescaling these if a bigger version is ever needed. Do not substitute
  stock or generated portraits.

  Chilanhouth's crop offset is load-bearing: a bright yellow banner sits immediately left of his
  head in the original, and at a wider crop it lands inside the circle roughly 27px from the face
  centre — too close for the desaturation mask below to remove without greying the face. The
  420px crop at (300, 120) is the widest one that keeps the whole face and zero yellow.

  **The avatars desaturate their background only.** `TeamMember.vue` stacks two copies of the
  photo: a `grayscale(1)` base, and a full-colour copy on top masked to a centred radial
  gradient, so skin keeps its colour and the surroundings go neutral. This is what lets a
  conference snapshot and a garden photo sit beside a studio portrait without looking like three
  unrelated images. Measured on the rendered slide, background rings come out at 0–0.01
  saturation against 0.27–0.36 on the faces. If you change the crop, re-check the mask stops —
  they are tuned to these three images.
- `public/landing/*` — imagery and the demo video, copied from
  `eventpix/frontend/public/landing/`. Referenced as `/landing/<file>`; filenames are
  content-hashed, so re-copying from the source repo may change them.

Slides use UnoCSS attributify and utility classes and iconify icon components (`<carbon:edit />`).

**Watch for class-name collisions with UnoCSS.** A scoped component class named `.ring` silently
picked up UnoCSS's `ring` box-shadow utility and drew a blue box around every confidence ring;
component classes are prefixed (`.ep-ring`) to avoid this.

## Design

The deck mirrors the **shipped** frontend so it reads as a slice of the product. The source of
truth is `/Users/lasun/projects/eventpix/frontend/app/globals.css` — *"EventPix brand primitives
— Red + Charcoal + White (Brand Guideline v1.0)"*:

- Primary Red `#e60023` (`#ff2d3d` on dark), Deep Red `#b8001c`, soft tint `#fff1f2`
- Charcoal `#111820` on white; Light Gray `#f7f7f7`; borders `#e5e5e5`
- Poppins (headings, via the seriph theme's serif slot) · Work Sans (body) · Geist Mono (all
  numbers, prices, IDs) · Noto Sans Lao
- 10px base radius: cards 18px with a `ring-1` at 10% foreground and **no drop shadow**
  (matching `frontend/components/ui/card.tsx`), buttons/chips 26px pill

Most slides are light. The cover and the "The AI" divider carry `ep-dark` on their slide class,
which is the same trick the landing uses — `components/landing/final-cta.tsx` and
`CameraPipeline`'s `tone="dark"` force `className="dark"` on individual bands.

`components/BrandLogo.vue` reproduces `frontend/components/brand/brand-logo.tsx`: the mark is
`public/eventpix-logo.svg` painted through a CSS mask so it inherits the brand colour rather
than the file's black fill.

**Ignore `/Users/lasun/projects/eventpix/design.md`.** It is an unshipped proposal — its own
header says so — and none of it landed. Its marigold/lacquer palette, Hanken/Bricolage fonts and
"confidence ring" were all in an earlier draft of this deck and were wrong. Do not reintroduce
them.

### Vertical rhythm — the bottom of a slide

The canvas is **980 × 552** and `.slidev-layout` is `px-14 py-10`, so content has **868 × 472**
to live in and the safe bottom edge is **y = 512**. Anything below that sits in the padding;
anything below 552 is silently clipped. The decorative corner mark (`style.css`, `::after`)
occupies x 35–53 / y 510–528, so left-aligned footnotes must clear 512 too.

Every content slide is tuned so its lowest painted element lands in a **470–512** band — that
is what keeps the deck from jumping as you advance. The cover is the exception and the script
flags it as "dead-space": its text block sits high on purpose over a full-bleed mosaic. When editing a slide, re-check it with
`scripts/measure-slides.mjs`: start `pnpm dev`, then `node scripts/measure-slides.mjs`. It walks
every text range and media box in the visible `.slidev-layout` at its final click state and
prints the max bottom per slide (and per column on `two-cols-header`), plus a screenshot of each
slide into `shots/`. It needs `playwright-chromium`, which is a devDep (also what `pnpm export`
uses).

**Utility classes on a `<p>` need a `!` prefix.** Slidev's base sets `.slidev-layout p { @apply
my-4 leading-6 }`, which outranks a plain `mt-3` or `leading-snug` — those were silently doing
nothing, which is what pushed several slides past the bottom edge. Write `!mt-3`, `!leading-snug`
on paragraphs; the utilities are fine unprefixed on `div`s.

A slide's `<style scoped>` block *can* reach a child component's root element (Vue puts the
parent's scope id there), which is how "What EventPix does",
"Bib search", "Proven next door" and "The team" shave `PipelineStage`'s `.stage` padding
and "How big this gets" resizes `ScaleBar`'s track. Use that instead of editing the component when
only one slide is tight.

Fonts are **self-hosted** via `@fontsource` with `fonts.provider: none`, so the deck renders
identically with no network at the venue. Don't switch back to the Google provider.

## Claims discipline

Every figure in the deck traces to the EventPix repo. Do not add claims the source can't support:

- **There is no per-photo confidence ring or match badge in the shipped gallery.** A grep for
  `confidence|similarity|score` across `frontend/features/gallery`, `frontend/components/gallery`
  and `frontend/app/(public)/e` returns nothing. The real result UI is one aggregate chip,
  "{n} face matches found". The percentage visual the deck does use (`components/FaceBox.vue`)
  mirrors `frontend/components/landing/face-box.tsx`, which is landing decoration with
  hardcoded values — the backend genuinely computes `confidence = 1 − distance`, but nothing
  renders it per photo yet. "The AI · Face search" says so explicitly; keep that sentence.
- NSFW classification is a stub (`processor/app/services/nsfw_service.py` returns 0.0) and
  belongs only on the roadmap slide.
- The ≤2s-over-10K-photos figure is a spec target, not a benchmark — roadmap slide only.
- **Traction is user-supplied, not repo-derived.** "One week of soft opening" carries
  the only usage numbers in the deck — 26 creators / 20 on paid tiers, 19 events, 20,589 photos,
  5.62k unique visitors, 525 peak visitors/hour, 1,673,310 requests — reported by the team from
  one week of soft opening (as of 2026-08-19). They are not in the repo and cannot be verified
  from it. Do not change, round up, extrapolate, annualize, or derive revenue from them, and do
  not add any other usage number without the user supplying it the same way.

**SDG impact is argued qualitatively, and it has no slide of its own.** Goals 8, 3 and 9 are
carried by three `SdgNote` tiles placed inline where their evidence already sits: **8** under the
revenue-split card on "How it makes money", **9** under the left column of "The AI · Face search",
**3** on the closing line of "One guest, three steps". Each is one sentence, and each states a
*mechanism the product already ships* — the shipped 70/50 split and per-photo attribution, the
self-hosted stack, face search making a finish-line photo findable. There are **no impact metrics,
beneficiary counts, participation effects or environmental figures**, because nothing in the repo
or the supplied traction can support one. Do not add any. In particular, SDG 3 is a mechanism
("we make the photo findable"), never a measured effect ("we increased participation in sport").
The only environmental statement permitted is the architectural one already on "Why EventPix is
different" — each photo is processed once at upload, not again on every search — with no energy
or carbon number attached. The fuller spoken argument lives in the presenter notes and in
`SCRIPT.md`'s "Which SDGs does this address?" answer; that is deliberate, because the deck shows
the goals and the presenter explains them.

**The SDG artwork is the UN's, and it may only be scaled.** `public/sdg/*` are the official flat
goal icons. Per the UN's SDG communications guidelines: no recolouring (not to the deck's red, not
to charcoal), no cropping, no rotation, no distortion, no UN emblem, and nothing that implies the
UN endorses EventPix. `SdgNote.vue` therefore styles the line, never the `<img>` beyond width and
height. If a tile ever needs to be smaller than ~30px, cut the line instead — below that the goal
number stops reading and the tile is decoration.

**Team facts are user-supplied.** The team slide names three people — **Dr Savath Saypadith,
Mr Chilanhouth Nitvongkhay, Mr Lasun Vongveodee** — and they have the same standing as the
traction numbers: they come from the team, not the repo, and must not be embellished with
expertise, awards or prior companies. Two standing constraints, both the team's own choice:
all three carry the flat label **"Team member"** — do not invent CEO/CTO/AI-lead titles — and
**no personal background appears on the slide at all**. That includes Dr Savath's public
academic record (PhD Osaka University, lecturer at NUOL, published face-recognition work); it
is verifiable and it is relevant to the AI criterion, and it is still excluded on purpose. Do
not re-add it.

The execution evidence beside them *is* repo-derived and verifiable — 671 commits between
2026-02-12 and 2026-08-18 in `/Users/lasun/projects/eventpix` (`git log`). Re-derive it rather
than trusting the number here if the source repo has moved on. The git identities do **not**
map one-to-one onto the three named people: Lasun Vongveodee commits as `Rachan Lamoolphal` /
`Sunchii` (626), and `Khatthaphone` (45) is a contributor who is not on the team slide. That is
why the deck states the commit count and date range but never a contributor *count* — it used
to say "two people built all of it", and that line is gone on purpose.

**The market slide is external, and cited.** "Proven next door. First at home." carries the only
figures in the deck that come from outside both the repo and the team: ThaiRun / `photo.thai.run`
in Thailand runs Face X (face and bib search for runners) and is reported to sell ~40,000 race
photos a month, returning 80%+ of revenue to the photographer. These are *reported* figures from
Thai press ([SME Thailand Club](https://www.smethailandclub.com/startup-techstartup/4811.html)),
labelled as such on the slide — do not round them, extrapolate from them, present Thailand as a
market EventPix operates in, or derive any EventPix number from them. The claim "EventPix is the
first AI event-photo platform in Laos" is **user-supplied**, same standing as the traction numbers:
not verifiable from the repo or any source, stated flat on purpose, and defended on the slide by
the three things no Lao platform does (face search, bib search, kip payout via Lao QR). Do not
soften it and do not add a market-size figure — no credible TAM number for Laos or the region
exists, and a soft one would undercut the sourcing discipline that makes the rest of the deck work.

**The two modelled slides.** "One event, in USD" walks a single marathon through the revenue
split. Its hard numbers are the shipped defaults a creator sees when they create a monetized
event — `frontend/app/(creator)/creator/events/new/page.tsx:45-48`: a 30/20/50 platform /
organizer / photographer split and `₭40,000 / ₭100,000 / ₭160,000` for 1, 3 and 5 photos. The
finisher count and the conversion rate are assumptions, are labelled as such on the slide, and
**must stay labelled**. This is a narrow, deliberate exception so the 30% take-rate has something
to be 30% *of* — it is not a precedent for adding traction numbers anywhere else.

"How big this gets" is the second, and it is downstream of the first: `$126` (the platform's
30% of that modelled event) plus the shipped `$6.30 / ₭135,000` Day Pass = **$132.30 per event**,
multiplied out at 100 / 500 / 2,000 events a year (`$13,230 / $66,150 / $264,600`). **The event
volumes are illustrative brackets, not a forecast, and the slide and the presenter note both say
so — keep that.** Two hard rules: they must NOT be derived from the week-one traction (annualizing
"19 events in one week" is forbidden, on the slide, in the notes and in `SCRIPT.md`), and the
aggregate USD figures carry no kip equivalent because they are not amounts the app ever bills.
The one figure derived from supplied traction is `20,589 / 19 ≈ 1,080` photos per event, labelled
"week one, observed" — an average, not revenue and not a projection. The deck used to refuse
annual figures outright; that refusal is gone from `slides.md` and `SCRIPT.md` on purpose, and
what replaced it is "here are the brackets, and here is why they are brackets".

**Currency.** The app bills in kip, but the deck presents to an ASEAN audience, so USD is the
primary figure on every slide and the kip original sits beside it in `.subtle` type. The rate is
**₭21,500 = $1**, stated on the pricing slide. If a kip figure changes, reconvert at that rate —
do not let the two drift apart, and do not drop the kip original (it is what ties the numbers to
the shipped app).

The per-event gallery themes named in the demo slide's presenter note are real: five presets in `frontend/lib/event-themes.ts`
(marathon ships **blue** `#1D6FE8`, which is why the demo video and screenshots are blue).

## Deployment

Configured for both Netlify (`netlify.toml`, Node 24) and Vercel (`vercel.json`); both run
`npm run build`, publish `dist/`, and rewrite all routes to `/index.html` for SPA routing.

**GitHub Pages** is the third target: `.github/workflows/deploy.yml` builds on every push to
`main` and publishes to https://sunchiii.github.io/eventpix-ai-festa/. Because a project page
serves from a subpath, it runs `pnpm build:pages` (`slidev build --base /eventpix-ai-festa/`)
rather than `pnpm build` — Netlify and Vercel keep using the base-`/` `build` script. Vite only
rewrites its own emitted URLs and the ones in `index.html`, so `scripts/fix-base.mjs` prefixes the
root-absolute `public/` references that survive into the bundles (`/landing/*` in the slide chunks,
`url(/eventpix-logo.svg)` in the CSS). Keep new public-asset paths in that script's `targets` list.
No SPA rewrite rule is needed: Slidev emits `dist/404.html` and Pages serves it for unknown routes.
`dist/` is no longer tracked in git.
