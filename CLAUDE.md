# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A [Slidev](https://sli.dev/) deck: the **EventPix** pitch for the AI Youth Festa competition
(~8 minutes, 19 slides, English). It presents the product built at
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
- `style.css` — auto-loaded global styles: self-hosted `@fontsource` imports, the `--ep-*` brand
  tokens (with an `.ep-dark` override for dark slides), and the `.card` / `.chip` / `.match-chip`
  / `.data` / `.accent` / `.muted` / `.subtle` / `.lao` helpers the slides use.
- `public/eventpix-logo.svg` — the real logo, copied from the frontend; used as a CSS mask.
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
  renders it per photo yet. Slide 9 says so explicitly; keep that sentence.
- NSFW classification is a stub (`processor/app/services/nsfw_service.py` returns 0.0) and
  belongs only on the roadmap slide.
- The ≤2s-over-10K-photos figure is a spec target, not a benchmark — roadmap slide only.
- There are no user, event, or revenue numbers anywhere in the source. Don't invent any.

The per-event gallery themes on slide 6 are real: five presets in `frontend/lib/event-themes.ts`
(marathon ships **blue** `#1D6FE8`, which is why the demo video and screenshots are blue).

## Deployment

Configured for both Netlify (`netlify.toml`, Node 24) and Vercel (`vercel.json`); both run
`npm run build`, publish `dist/`, and rewrite all routes to `/index.html` for SPA routing.
