---
theme: seriph
colorSchema: light
title: EventPix — Find every face, fund every photographer
info: |
  ## EventPix
  AI-powered event photo discovery and monetization, built for Laos.

  Pitch deck for AI Youth Festa.
class: text-left ep-dark
transition: slide-left
comark: true
duration: 6min
fonts:
  # Families are self-hosted via @fontsource (imported in style.css), so the deck
  # never depends on a network connection at the venue.
  provider: none
  sans: Work Sans
  serif: Poppins
  mono: Geist Mono
drawings:
  persist: false
layout: cover
---

<div class="ep-mosaic">
  <div class="ep-tile"><img src="/landing/mosaic-03.deb608c0.webp" alt="" /></div>
  <div class="ep-tile"><img src="/landing/mosaic-07.a67f4f68.webp" alt="" /></div>
  <div class="ep-tile">
    <img src="/landing/mosaic-11.0756cfa3.webp" alt="" />
    <FaceBox :conf="97" show-score top="33%" left="35%" width="25%" height="21%" />
  </div>
  <div class="ep-tile">
    <img src="/landing/mosaic-15.2ce0e386.webp" alt="" />
    <FaceBox top="13%" left="37%" width="22%" height="18%" />
  </div>
  <div class="ep-tile"><img src="/landing/mosaic-02.696fdf3f.webp" alt="" /></div>
  <div class="ep-tile"><img src="/landing/mosaic-09.996a1151.webp" alt="" /></div>
  <div class="ep-tile">
    <img src="/landing/mosaic-13.ccd6dbc7.webp" alt="" />
    <FaceBox :conf="94" show-score top="15%" left="41%" width="17%" height="14%" />
  </div>
  <div class="ep-tile">
    <img src="/landing/mosaic-05.ccf372cc.webp" alt="" />
    <FaceBox top="9%" left="18%" width="24%" height="20%" />
    <FaceBox :conf="91" show-score top="8%" left="52%" width="24%" height="22%" />
  </div>
  <div class="ep-scan" />
</div>
<div class="scrim" />

<div class="relative z-10">

<BrandLogo :size="60" />

<p class="text-2xl !mt-5 !mb-6 muted">Capture every moment. <span class="accent">Find every memory.</span></p>

<div class="flex gap-2 flex-wrap">
  <span class="chip">Face &amp; bib search built in</span>
  <span class="chip">Camera to gallery, no laptop</span>
  <span class="chip">Checkout in the bank app they already have</span>
</div>

<p class="!mt-8 text-sm subtle data">AI YOUTH FESTA · eventpix.ai</p>

</div>

<style scoped>
/* Class names are ep-prefixed on purpose: bare .mosaic / .tile / .scan collide
   with UnoCSS utilities (see CLAUDE.md — .ring once drew a box round every ring). */
.ep-mosaic {
  position: absolute; inset: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
}
.ep-tile { position: relative; }
.ep-tile img { width: 100%; height: 100%; object-fit: cover; }

/* One slow detector pass over the whole mosaic. Sits above the photos, below the
   scrim, so it never crosses the logo at full strength. */
.ep-scan {
  position: absolute; left: 0; right: 0; top: 0;
  height: 26%;
  pointer-events: none;
  mix-blend-mode: screen;
  background:
    linear-gradient(to bottom,
      transparent 0%,
      color-mix(in srgb, var(--ep-primary) 10%, transparent) 82%,
      color-mix(in srgb, var(--ep-primary) 55%, transparent) 99%,
      transparent 100%);
  border-bottom: 2px solid color-mix(in srgb, var(--ep-primary) 70%, transparent);
  opacity: .5;
  animation: ep-sweep 5s cubic-bezier(.4, 0, .6, 1) infinite;
}
@keyframes ep-sweep {
  0%, 18%   { transform: translateY(-26%); opacity: 0; }
  26%       { opacity: .5; }
  90%       { opacity: .5; }
  100%      { transform: translateY(100%); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .ep-scan { animation: none; opacity: 0; }
}

.scrim {
  position: absolute; inset: 0;
  background: linear-gradient(100deg, #0a0a0a 34%, rgba(10,10,10,.88) 62%, rgba(10,10,10,.42) 100%);
}
</style>

<!--
[0:00 — 0:20] Name and promise, then get off this slide fast.

"EventPix is an AI photo platform for events. A guest takes a selfie and gets every
photo they're in. The photographer gets paid. Built for Laos, and we built all of it."
-->

---
layout: default
---

# One guest, three steps

<div class="grid grid-cols-3 gap-5 mt-6">

<div v-click class="card rounded-xl overflow-hidden">
  <img src="/landing/crew-photographers.ac7e98be.webp" class="h-[140px] w-full object-cover" alt="A crew of event photographers at the start line" />
  <div class="p-4">
    <p class="text-xl !leading-tight"><span class="data accent">8,000</span> photos by 8am</p>
    <p class="text-sm muted !mt-1">Five of them are you.</p>
  </div>
</div>

<div v-click class="card rounded-xl overflow-hidden">
  <div class="relative">
    <img src="/landing/search-face.4cc6a85e.webp" class="h-[140px] w-full object-cover object-top" alt="A runner's face at the finish line" />
    <FaceBox top="8%" left="15%" width="26%" height="64%" />
  </div>
  <div class="p-4">
    <p class="text-xl !leading-tight">How do you find yours?</p>
    <p class="text-sm muted !mt-1">Scan your face — no app, no account.</p>
  </div>
</div>

<div v-click class="card rounded-xl overflow-hidden">
  <img src="/landing/route-qr.c084b3d7.webp" class="h-[140px] w-full object-cover" alt="A phone showing a QR code" />
  <div class="p-4">
    <p class="text-xl !leading-tight">Scan, pay, get them</p>
    <p class="text-sm muted !mt-1">Lao QR and online payment.</p>
  </div>
</div>

</div>

<div v-click class="mt-6 text-xl">
Three steps. <span class="accent">No app, no card.</span>
</div>

<!--
[0:20 — 0:50] One guest's journey, one click per panel — the scale, the question, the
answer. The slide only carries the headline; the story is spoken.

Say the problem once before the first click, then don't come back to it. Panel 3 plants
the bank-app argument for later. Land the closing line, pause, move on.
-->

---
layout: two-cols-header
---

# What EventPix does

::left::

<div class="pr-6">

Upload as you shoot. EventPix finds every face and bib number, watermarks the
previews, and takes payment through the bank apps your guests already use.

<div class="mt-4 space-y-2">
  <PipelineStage n="01" title="Creators" detail="Photographers and event organizers. They shoot, publish, and earn." />
  <PipelineStage n="02" title="Customers" detail="Event guests. No app install, no account needed to search." />
  <PipelineStage n="03" title="Contributors" detail="A fleet of photographers on one event, paid per photo they shot." />
</div>

<p class="!mt-2 text-xs subtle !leading-snug">Connect → shoot → process → publish → find. Nothing goes public until the creator releases the batch.</p>

</div>

::right::

<img src="/landing/app-mobile-search.fbd95176.webp" class="rounded-xl border border-white/10 shadow-2xl max-h-[268px] mx-auto" alt="Face search results on a phone" />

<div class="grid grid-cols-2 gap-3 mt-2">
  <div>
    <img src="/landing/monetized-card.c02cb81e.webp" class="rounded-lg border border-white/10 h-[72px] w-full object-cover" alt="A monetized event" />
    <p class="text-center text-xs !mt-1 !leading-snug"><b>Monetized</b> <span class="muted">— watermarked previews, paid downloads</span></p>
  </div>
  <div>
    <img src="/landing/sharing-card.d2ebb1ab.webp" class="rounded-lg border border-white/10 h-[72px] w-full object-cover" alt="A sharing event" />
    <p class="text-center text-xs !mt-1 !leading-snug"><b>Sharing</b> <span class="muted">— free for everyone</span></p>
  </div>
</div>

<style scoped>
/* Three stages plus an intro paragraph and a footnote: shave the stage padding so the
   footnote clears the bottom edge and the corner mark. */
.stage { padding-top: .45rem; padding-bottom: .45rem; }
</style>

<!--
[0:50 — 1:10] One sentence of what it is, then the three roles, then the pipeline line
in a single breath. Don't elaborate — the demo does the real explaining.
-->

---
layout: default
---

# The moment, in the real product

<div class="grid grid-cols-[200px_1fr] gap-10 mt-4">

<div class="h-[380px]">
  <DemoVideo
    src="/landing/flow-face-search.1b881e10.mp4"
    poster="/landing/flow-face-search-poster.b345f430.webp"
    class="h-full w-auto"
  />
</div>

<div class="pt-2">

<div class="space-y-3">
  <PipelineStage n="01" title="She opens the gallery link" detail="No app, no account. Just a URL the organizer shared." />
  <PipelineStage n="02" title="She takes a selfie" detail="The photo is a query. It is embedded, matched, and deleted within the hour." />
  <PipelineStage n="03" title="The gallery collapses to her" detail="Every photo she appears in, ranked by confidence, in about a second." />
</div>

<p class="!mt-6 text-sm subtle">
Not a mockup. This is the shipped app driven in a headless browser with a fake camera
device — the gallery collapsing to one person's photos is the app doing it, not a video
of our idea of it.
</p>

</div>

</div>

<!--
[1:10 — 1:50] THE MONEY SLIDE. Shut up and let it play once through.

Narrate only: "guest opens the gallery link… takes a selfie… and that's every
photo she's in, sorted by confidence."

If the video does not autoplay, click it. Poster frame is set so a still is never blank.

If a judge asks why the demo gallery is blue while the deck is red: the public gallery is
themed per event — five presets in the product (wedding, marathon, corporate, party, custom)
and marathon ships blue. The app chrome is always EventPix red.
-->

---
layout: two-cols-header
---

# The AI · Face search

::left::

<div class="pr-6 text-sm">

Every model runs on <span class="accent">our own infrastructure</span>. No third-party
AI service ever sees a photo, and there is not one LLM API call in the codebase.

**A face becomes a fingerprint.** Not a picture — a private mathematical signature
of the face, and there is no way back from it to the photo.

**Every face, the moment it is uploaded.** Per face, not per photo: a group shot of
eight people can be found by any one of the eight.

**The search compares fingerprint to fingerprint** — never photo against photo — and
ranks what it finds by how confident it is. All of it inside our own system.

</div>

::right::

<div v-click class="flex items-center gap-4">
  <div class="relative shrink-0">
    <img src="/landing/mosaic-02.696fdf3f.webp" class="h-[64px] w-[64px] rounded-xl object-cover" alt="" />
    <FaceBox top="20%" left="28%" width="38%" height="38%" />
  </div>
  <div>
    <div class="data accent text-xs">01</div>
    <div class="font-semibold text-sm">Her selfie</div>
    <p class="text-xs muted !mt-0">A query, not an upload. Deleted within the hour.</p>
  </div>
</div>

<div v-click>

<div class="accent text-center text-base leading-none !my-0.5"><carbon:arrow-down /></div>

<div class="card card-soft !py-2">
  <div class="data accent text-xs">02</div>
  <div class="font-semibold text-sm">A private fingerprint</div>
  <div class="data text-xs !mt-1 whitespace-nowrap overflow-hidden">[ 0.021, −0.144, 0.907, −0.038, 0.612, … ]</div>
  <p class="text-xs muted !mt-1">A fingerprint, not a photo. Faces are never compared as pixels.</p>
</div>

</div>

<div v-click>

<div class="accent text-center text-base leading-none !my-0.5"><carbon:arrow-down /></div>

<div class="data accent text-xs">03</div>
<div class="font-semibold text-sm">Ranked against every face at the event</div>

<div class="flex items-end gap-3 mt-2">
  <div class="relative shrink-0 mb-3">
    <img src="/landing/mosaic-05.ccf372cc.webp" class="h-[56px] w-[56px] rounded-lg object-cover" alt="" />
    <FaceBox :conf="97" show-score top="18%" left="30%" width="36%" height="36%" />
  </div>
  <div class="relative shrink-0 mb-3">
    <img src="/landing/mosaic-09.996a1151.webp" class="h-[56px] w-[56px] rounded-lg object-cover" alt="" />
    <FaceBox :conf="91" show-score top="18%" left="30%" width="36%" height="36%" />
  </div>
  <div class="relative shrink-0 mb-3">
    <img src="/landing/mosaic-14.dd2f62eb.webp" class="h-[56px] w-[56px] rounded-lg object-cover" alt="" />
    <FaceBox :conf="88" show-score top="18%" left="30%" width="36%" height="36%" />
  </div>
  <span class="match-chip mb-3"><b>6</b> face matches found</span>
</div>

<p class="text-xs subtle !mt-2 !leading-snug">
The backend ranks every result by confidence; the gallery currently surfaces the match
<i>count</i>, and the per-photo score is available but not yet shown.
</p>

</div>

<!--
[1:50 — 2:20] The core of the pitch. Open with the self-hosted line — it is the whole
differentiator — then walk the three steps: selfie, fingerprint, ranked matches.

DELIBERATELY NOT ON THE SLIDE: the model, its dimensions and the thresholds. They are
ours. Speak at the level of the slide and let the fingerprint metaphor do the work.

Key beat: fingerprints are per FACE, not per photo — a group shot carries eight of them
and can be found by any of the eight people in it.

Backup, only if a judge presses (say it once, do not volunteer it): InsightFace buffalo_l
(ArcFace) on ONNX Runtime, 512-dim embeddings, one pgvector query with a cosine distance
threshold of 0.6, confidence = 1 − distance, MIN() per photo, in
backend/src/modules/search/service.ts. If they want more than that, offer a private
walkthrough after the session rather than saying it into the room.

If asked about the score: computed and returned per photo, we just render the aggregate
today. Showing it per-tile is a UI change, not a model change.
-->

---
layout: two-cols-header
---

# Bib search

::left::

<div class="pr-6">

Marathons are our hardest case and our best one: <span class="data accent">8,000</span>
photos, and every runner is wearing their primary key.

<div class="mt-4 space-y-2">
  <PipelineStage n="01" title="We read the number off the bib" detail="Every photo is scanned automatically the moment it is uploaded." />
  <PipelineStage n="02" title="Every number found is indexed" detail="The race number becomes a way to search the event, alongside the face." />
  <PipelineStage n="03" title="Close enough still counts" detail="Reading a number off a moving runner is never perfect. A misread digit still finds the right photos, instead of telling the runner there are none." />
</div>

<p class="!mt-3 text-sm muted !leading-snug">
Runs once at upload, per event, opt-in. The guest just types their race number.
</p>

</div>

::right::

<div class="space-y-3">
  <img src="/landing/search-bib.35a9d29e.webp" class="rounded-xl border border-white/10 shadow-2xl max-h-[250px] mx-auto" alt="Bib number search" />
  <img src="/landing/crew-photographers.ac7e98be.webp" class="rounded-xl border border-white/10 h-[130px] w-full object-cover" alt="A crew of photographers at a marathon start line" />
</div>

<style scoped>
.stage { padding-top: .45rem; padding-bottom: .45rem; }
</style>

<!--
[2:20 — 2:40] One point only: step 3 is where naive implementations fail. Number reading
is never clean, so an exact-match-only search returns an empty gallery and the runner
assumes there are no photos of them.

Backup if pressed: Tesseract at PSM 7 on a 640px downscale, a \b\d{2,6}\b regex to pull
candidates, then exact match with a fuzzy fallback for the classic substitutions (8 for B,
0 for O). Keep it off the slide.

[slack slide — if you are running long, cut to the fuzzy-fallback sentence and move on]
-->

---
layout: default
---

# Why EventPix is different

<p class="muted !-mt-3 text-sm">We run the AI ourselves, not through an API — three consequences, and one risk we never carry.</p>

<div class="grid grid-cols-2 gap-2.5 mt-1">

<div class="card !py-2">
  <div class="flex items-center gap-2 accent">
    <div class="text-lg leading-none"><carbon:locked /></div>
    <div class="data text-xs">01</div>
  </div>
  <div class="font-semibold mt-1">No third party</div>
  <div class="text-xs accent">Our models, running on machines we operate</div>
  <p class="text-[11.5px] muted !mt-1.5 !leading-tight">
    Detection, face embeddings and bib reading all run on our own infrastructure. Nothing
    biometric is posted to someone else's endpoint — a promise you cannot make while renting
    inference.
  </p>
</div>

<div class="card !py-2" v-click>
  <div class="flex items-center gap-2 accent">
    <div class="text-lg leading-none"><carbon:chip /></div>
    <div class="data text-xs">02</div>
  </div>
  <div class="font-semibold mt-1">Optimized for lower infrastructure cost</div>
  <div class="text-xs accent">One pass per photo, at upload</div>
  <p class="text-[11.5px] muted !mt-1.5 !leading-tight">
    Each photo is processed once as it lands — not again on every search. Compute is a fixed
    box we already own, so the 8,001st photo of an event costs
    <span class="data accent">₭0</span>.
  </p>
</div>

<div class="card !py-2" v-click>
  <div class="flex items-center gap-2 accent">
    <div class="text-lg leading-none"><carbon:currency-dollar /></div>
    <div class="data text-xs">03</div>
  </div>
  <div class="font-semibold mt-1">Therefore: a lower price</div>
  <div class="text-xs accent">A <span class="data">₭135,000</span> day, not a per-call bill</div>
  <p class="text-[11.5px] muted !mt-1.5 !leading-tight">
    The whole Day Pass would go to inference before we served a single download. Owning the
    compute is why the pass can be <span class="data">$6.30</span> and still leave margin at a
    Laos price point.
  </p>
</div>

<div class="card !py-2" v-click>
  <div class="flex items-center gap-2 accent">
    <div class="text-lg leading-none"><carbon:security /></div>
    <div class="data text-xs">04</div>
  </div>
  <div class="font-semibold mt-1">No vendor risk</div>
  <div class="text-xs accent">The cost of an event is fixed, and it is ours</div>
  <p class="text-[11.5px] muted !mt-1.5 !leading-tight">
    Rate limits, price changes and model deprecation all sit outside our control if the
    inference is rented. We know what an event costs before the shoot starts.
  </p>
</div>

</div>

<div class="card !py-2 mt-2">
  <div class="flex items-center gap-6 flex-wrap">
    <div class="text-xs muted">A mid-size marathon<br /><span class="data">8,000</span> photos</div>
    <div class="text-xs">
      What the creator pays us
      <div><span class="data text-base">$6.30</span> <span class="subtle">₭135,000 · shipped price</span></div>
    </div>
    <div class="text-xs">
      What a per-call API would bill us
      <div><b class="data accent text-base">$8–24</b> <span class="subtle">₭172,000+</span></div>
    </div>
    <p class="text-xs subtle flex-1 min-w-[220px] !my-0 !leading-snug">
      At <span class="data">$0.001</span> per image — commodity face-API pricing, not a quote we
      hold. Every photo is billed more than once.
    </p>
  </div>
</div>

<!--
[2:40 — 3:00] The argument that separates us from a hackathon project that wraps an API.
Four cards, three clicks — read the chain, do not read the cards.

01 no third party → [click] 02 which is why the cost per photo is ours to optimize →
[click] 03 which is why the Day Pass can be $6.30 and still leave margin. Say the strip
out loud, slowly: the photographer pays us $6.30 for the whole day, and a per-call API
would bill us more than that on one event — before a single download is sold.

[click] 04 is the one-liner for the judge who asks "why not just use an API": the cost
would not be ours to control.

The $0.001 per image is a public commodity rate, not a quote we hold — the slide says so.
Do not name a vendor.

Why the range is $8–24 and not $8: every photo is detected, fingerprinted and number-read, so
it bills more than once. The slide says "billed more than once"; this is the detail behind it.

If pressed on volume discounts: they exist, and they do not change the argument. The point
is not that per-call is expensive, it is that the marginal cost is someone else's line item
instead of ours — which is exactly what you cannot build a ₭135,000 day rate on.
-->

---
layout: two-cols-header
---

# Responsible faces, built for Laos

::left::

<div class="pr-6 text-sm">

### Handling faces responsibly

<div class="space-y-2 mt-3">
  <PipelineStage n="✓" title="Selfies are deleted within 1 hour" detail="The search photo is a query, not an asset. Never added to the gallery, never kept." />
  <PipelineStage n="✓" title="Embeddings are not linked to identity" detail="Vectors are stored against photos, not people. There is no face-to-name index to leak." />
  <PipelineStage n="✓" title="Publishing is always explicit" detail="Uploads are private by default; a creator releases each batch by hand." />
  <PipelineStage n="✓" title="Originals live in a vault" detail="Encrypted at rest, reachable only through a signed URL valid 24 hours and 3 downloads." />
</div>

</div>

::right::

<div class="text-sm">

### Built for Laos, not translated into it

<p class="lao text-base accent !mt-3 !mb-2">ຄົ້ນຫາດ້ວຍໃບໜ້າຂອງທ່ານ</p>

Lao is the product's fallback language and English is secondary — not a toggle bolted on
at the end.

<div class="card mt-4">
  <div class="text-sm font-semibold">Payment where the money already is</div>
  <p class="text-xs muted !mt-2">
    Checkout hands off to <b>Lao QR</b> and online payment — the banking apps guests
    already have. Confirmation comes back in real time, and we store no card or
    account data.
  </p>
  <p class="text-xs muted !mt-2">
    Card penetration is low here. A checkout that assumes a Visa card converts at nearly
    zero — the payment rail is not a detail, it is the product working or not working.
  </p>
</div>

</div>

<!--
[3:00 — 3:25] Do not skip this slide for time. It is a face-recognition product in front
of judges; showing that we thought about it is worth more than another feature.

Left column: say two of the four, not all four. Right column is the differentiator against
any imported competitor — Google Photos does not take Lao QR.

If asked about the demo imagery: our own landing page labels its people as illustrative,
not real event guests. On a face-recognition product that is an ethics decision too.
-->

---
layout: two-cols-header
---

# How it makes money

::left::

<div class="pr-6 text-xs">

<div class="font-semibold text-base mb-1">Creators subscribe for storage</div>

| Plan | Price | Storage |
|---|---|---|
| Free trial | <span class="data">$0</span> / 3 mo | 1 GB |
| Day Pass | <span class="data">$6.30</span> <span class="subtle">₭135,000</span> / day | 5 GB |
| Week Pass | <span class="data">$10.20</span> <span class="subtle">₭220,000</span> / wk | 10 GB |
| Pro | <span class="data">$37</span> <span class="subtle">₭800,000</span> / mo | 64 GB |

<p class="text-xs subtle !mt-1 !leading-snug">Six plans in all. Day and Week passes exist because most photographers work per event, not per month. USD at ₭21,500 = $1; the app charges in kip.</p>

<div class="font-semibold text-base mt-4">And the platform takes a cut of downloads</div>

<div class="card !py-2 mt-2">
  <div class="text-xs font-semibold">Solo <span class="muted font-normal">·</span> Fleet</div>
  <div class="text-sm mt-1 data">
    <span class="accent">30%</span> / <span class="accent">70%</span>
    <span class="muted mx-2">·</span>
    <span style="color:#ff6b78">30%</span> ·
    <span style="color:#e60023">20%</span> ·
    <span style="color:#8a0015">50%</span>
  </div>
  <p class="text-xs muted !mt-1 !leading-snug">
    Every sale is attributed to whoever took that photo — so ten photographers on one
    marathon each get paid for their own frames.
  </p>
</div>

</div>

::right::

<div class="text-xs">

<div class="font-semibold text-base mb-1">One event, in USD</div>

<div class="card !py-3">
  <div class="text-xs font-semibold">A mid-size marathon</div>

| | |
|---|---|
| Finishers <span class="subtle">assumed</span> | <span class="data">600</span> |
| Who buy a photo <span class="subtle">assumed</span> | <span class="data">15%</span> → <span class="data">90</span> |
| 3-photo bundle <span class="subtle">shipped default</span> | <span class="data">$4.65</span> <span class="subtle">₭100,000</span> |
| **Gross** | <b class="data accent">$419</b> <span class="subtle">₭9,000,000</span> |

  <div class="text-sm !mt-2 data">
    <span style="color:#ff6b78">$126</span> ·
    <span style="color:#e60023">$84</span> ·
    <span style="color:#8a0015">$209</span>
  </div>
  <p class="text-xs muted !mt-1">Platform, organizer, photographers — the product's shipped defaults.</p>
</div>

<p class="text-xs subtle !mt-6 !leading-snug">
Prices and split are real. <b>The conversion rate is a guess, and we are calling it one</b> —
it is the number we are launching to learn. The photographer paid a
<span class="data">$6.30</span> Day Pass to run this event.
</p>

</div>

<style scoped>
/* Both columns are table-heavy; the default row padding overflows the slide. */
td, th { padding: .28rem .5rem !important; line-height: 1.3; }
/* the modelled-event table sits alone in its column — let it breathe a little more */
.card td, .card th { padding: .42rem .5rem !important; }
</style>

<!--
[3:25 — 3:55] Two revenue lines. Say the assumption BEFORE the number, not after:
"assume 15% of finishers buy — that's the number we're launching to find out."
Volunteering it is what makes the rest credible.

The interesting half is per-photo attribution — it is what makes a fleet event possible at all.

If asked about sensitivity: at 5% buying the platform takes $42 (₭900,000) from this event;
at 25%, $209 (₭4,500,000).

If asked what risk is left: the technical risk is gone — the product is live and people are using it.
What nobody has shown is that a guest in Laos will pay for a photo they might screenshot
out of a group chat. Watermarked previews and seconds-fast face search are what make them decide.

If asked about national scale: that is the next slide — $126 here plus the Day Pass is
$132 to the platform per event, and the business scales on event volume and organizer
fleet contracts. Give the brackets there, and label them as brackets.

If asked whether anyone pays for event photos: that is the next slide — ThaiRun sells about
40,000 race photos a month in Thailand off face and bib search (their reported figure), and
Sportograf does it at marathon scale in Europe. Nobody has proven it in Laos — that's the
honest answer.

Splits are adjustable but never retroactive. Per-photo prices are configurable;
₭40,000 / ₭100,000 / ₭160,000 ($1.85 / $4.65 / $7.45) for 1, 3 and 5 photos are the
shipped defaults. All USD on the slides is converted at ₭21,500 = $1 — the app bills in kip.
-->

---
layout: two-cols-header
---

# Proven next door. First at home.

<p class="muted !-mt-2 text-sm">Someone already built this business one border away. Nobody has built it here.</p>

::left::

<div class="pr-6 text-xs">

<div class="font-semibold text-base mb-2">Thailand — the model already works</div>

<div class="card !py-4">
  <div class="text-sm font-semibold">ThaiRun · <span class="data">photo.thai.run</span></div>
  <div class="text-xs accent">Face X — face and bib search for runners</div>

  <div class="flex gap-8 mt-4">
    <div>
      <div class="data text-2xl accent">40,000</div>
      <div class="text-xs muted">race photos sold a month</div>
    </div>
    <div>
      <div class="data text-2xl accent">80%+</div>
      <div class="text-xs muted">of revenue back to the photographer</div>
    </div>
  </div>
</div>

<p class="text-xs muted !mt-4 !leading-snug">
Same product, same sport, one border away. A guest searching by face — and paying for the photo
she finds — is not a hypothesis. It is a business running at scale in the market next to ours.
</p>

<p class="text-xs subtle !mt-2 !leading-snug">
Figures as reported for ThaiRun / Face X in Thai press. Their numbers, not ours, and not
measured by us.
</p>

</div>

::right::

<div class="text-xs">

<div class="font-semibold text-base mb-2">Laos — nobody has built it</div>

<div class="space-y-2 mt-2">
  <PipelineStage n="✗" :shipped="false" title="No face search on an event gallery" detail="Photos sit in Facebook albums and Drive folders. Finding yourself means scrolling thousands." />
  <PipelineStage n="✗" :shipped="false" title="No bib-number search" detail="Organizers hand out a link, not an index. The number on the shirt is searchable nowhere." />
  <PipelineStage n="✗" :shipped="false" title="No photographer paid in kip" detail="No local platform settles a sale through Lao QR — so nobody sells. The photos are given away." />
</div>

<div class="card !py-2 mt-2">
  <p class="text-sm font-semibold accent !my-0">EventPix is the first AI event-photo platform in Laos.</p>
  <p class="text-[11.5px] muted !mt-1.5 !leading-tight">
    First here, then the same rail across ASEAN. The AI does not care which country the marathon
    is in — the payment rail does, and that is the part we build per market.
  </p>
</div>

</div>

<style scoped>
/* Four stacked blocks in the right column: shave the stage padding so the closing card
   clears the bottom edge. Works because a child component's root element carries the
   parent's scope id. */
.stage { padding-top: .45rem; padding-bottom: .45rem; }
</style>

<!--
[3:55 — 4:20] The market slide. Two beats: it works next door, and here it does not exist.

Lead with ThaiRun as VALIDATION, not as a threat. "In Thailand, ThaiRun runs face and bib
search for runners — reported at about forty thousand race photos sold a month, with more
than eighty percent going back to the photographer." Say the word "reported" out loud; those
are their figures, from Thai press, and the slide says so.

The point is one sentence: somebody already proved that a guest will pay for the photo she
finds. We are not testing the model, we are bringing it to a market that has none.

Then the right column, fast — do not read all three. "In Laos there is no face search, no bib
search, and no way for a photographer to actually get paid. So the photos get given away."

Land the claim flat: we are the first AI event-photo platform in Laos.

If a judge names a competitor: concede the specific, hold the general — nobody here does face
search, bib search and a kip payout in one product. Do NOT imply we operate in Thailand; it is
the comparable, not a market we have entered. Do not derive any EventPix number from theirs.

This slide is the slack if you are running long — it is positioning, not product.
-->

---
layout: two-cols-header
---

# How big this gets

::left::

<div class="pr-6 text-xs">

<div class="font-semibold text-base mb-3">The unit is real</div>

<div class="card !py-4">
  <div class="text-xs font-semibold">One mid-size event, to EventPix</div>

| | |
|---|---|
| Cut of downloads <span class="subtle">shipped split</span> | <span class="data">$126</span> |
| Creator's Day Pass <span class="subtle">shipped price</span> | <span class="data">$6.30</span> <span class="subtle">₭135,000</span> |
| **Per event** | <b class="data accent">$132</b> |

</div>

<div class="card-soft card !py-4 mt-6">
  <div class="text-xs font-semibold">Week one, observed</div>
  <p class="text-xs muted !mt-1 !leading-snug">
    <span class="data">19</span> events · about <span class="data">1,080</span> photos each —
    the events already running on EventPix are the size we just modelled.
  </p>
</div>

<p class="text-xs subtle !mt-8 !leading-snug">
So the question is not what an event is worth. It is <b>how many events</b>.
</p>

</div>

::right::

<div class="text-xs">

<div class="font-semibold text-base mb-5">What that becomes, at volume</div>

<div class="space-y-16">
  <div v-click><ScaleBar label="100 events" note="a year" value="$13.2K" :pct="5" :tone="0" /></div>
  <div v-click><ScaleBar label="500 events" note="a year" value="$66.2K" :pct="25" :tone="1" /></div>
  <div v-click><ScaleBar label="2,000 events" note="a year" value="$264.6K" :pct="100" :tone="2" /></div>
</div>

<p class="text-xs subtle !mt-14 !leading-snug">
<b>The volumes are assumptions, and we are calling them that.</b> Nobody has counted how many
events run in Laos in a year — so these are brackets to think in, not a forecast, and they are
not projected from our first week. Measuring the real number is what the next quarter is for.
</p>

</div>

<style scoped>
/* The left table sits inside a card; default row padding pushes it past the card edge. */
td, th { padding: .55rem .5rem !important; line-height: 1.3; border-top: 0 !important; }
/* the bars carry the slide; give them a little more presence */
.ep-bar-track { height: 14px; }
.ep-bar-value { font-size: 1.2rem; }
table { margin: .4rem 0 0 !important; }
</style>

<!--
[4:20 — 4:40] The scale slide. Say "assume" BEFORE each number, same discipline as the
previous slide — that is what keeps this credible instead of hand-wavy.

Lead with the unit: "the previous slide gave us a hundred and thirty-two dollars to the
platform per event — a hundred and twenty-six from downloads, plus the day pass the
photographer bought to run it."

Then: "so the whole business is one multiplication, and the multiplier is event volume."
Click the three bars. Hundred events a year is thirteen thousand dollars; five hundred is
sixty-six; two thousand is two hundred and sixty-five.

Do NOT present the tiers as a forecast — they are brackets. Do NOT derive them from the
traction slide; nineteen events in one week is NOT nine hundred a year and you must not
say that, even if a judge does the arithmetic out loud.

Exact figures if pressed: $13,230 / $66,150 / $264,600 at $132.30 per event.

If asked where 2,000 comes from: it is an upper bracket, not a claim. Say plainly that
the honest answer is we do not know yet, and that a fleet contract with one organizer
covers many events at once — which is why organizer deals, not photographer signups,
are the thing to watch.
-->

---
layout: default
---

# What's built, and what's next

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">

<div>

<div v-click class="font-semibold text-base">Working today</div>

<div v-click class="space-y-2 mt-2">
  <PipelineStage title="Face search" detail="Our own recognition models, results ranked by confidence.">
    <template #icon><carbon:face-activated /></template>
  </PipelineStage>
  <PipelineStage title="Bib number search" detail="Numbers read automatically at upload, with a close-match fallback.">
    <template #icon><carbon:barcode /></template>
  </PipelineStage>
  <PipelineStage title="Camera ingest, live gallery" detail="Cameras upload straight into the event; guests see photos appear live.">
    <template #icon><carbon:camera /></template>
  </PipelineStage>
  <PipelineStage title="Payments &amp; payouts" detail="Bank-app checkout, per-photo revenue attribution.">
    <template #icon><carbon:wallet /></template>
  </PipelineStage>
</div>

<div v-click class="grid grid-cols-3 gap-2 mt-2">
  <img src="/landing/camera-back-lcd.2396f42a.webp" class="rounded-lg h-[52px] w-full object-cover ring-1 ring-black/10" alt="A camera back, uploading straight into the event" />
  <img src="/landing/live-gallery-monitor.65743da0.webp" class="rounded-lg h-[52px] w-full object-cover ring-1 ring-black/10" alt="The live gallery on a monitor at the venue" />
  <img src="/landing/monetized-card.c02cb81e.webp" class="rounded-lg h-[52px] w-full object-cover ring-1 ring-black/10" alt="A monetized event card" />
</div>

</div>

<div>

<div v-click class="font-semibold text-base">Next</div>

<div v-click class="space-y-3 mt-2">
  <PipelineStage :shipped="false" title="Safety screening for uploads" detail="The checks, thresholds and account-suspension logic are wired — the model is the piece we are dropping in.">
    <template #icon><carbon:security /></template>
  </PipelineStage>
  <PipelineStage :shipped="false" title="Search speed at scale" detail="Re-engineering how fingerprints are stored, so search stays under our two-second target at 10,000 photos in one event.">
    <template #icon><carbon:flash /></template>
  </PipelineStage>
  <PipelineStage :shipped="false" title="Near-duplicate review" detail="Duplicate detection already runs on every upload; the creator-facing review screen is not built yet.">
    <template #icon><carbon:image-copy /></template>
  </PipelineStage>
</div>

</div>

</div>

<!--
[4:40 — 5:00] Walk the left column first, then the right. Do not pre-empt the traction
on the next slide.

Being explicit about what is NOT finished buys credibility for the left column. Say the
search-speed one out loud — it shows we know where our own bottleneck is, without saying
what the fix is.

Five clicks: shipped heading, the four shipped cards, the photo strip, then the Next
heading and its three cards.
-->

---
layout: default
---

# One week of soft opening

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="card text-center !py-10">
    <div class="text-4xl data accent">20,589</div>
    <div class="text-sm muted mt-2">photos uploaded</div>
  </div>
  <div class="card text-center !py-10">
    <div class="text-4xl data accent">5,620</div>
    <div class="text-sm muted mt-2">unique visitors</div>
  </div>
  <div class="card text-center !py-10">
    <div class="text-4xl data accent">1,673,310</div>
    <div class="text-sm muted mt-2">requests served</div>
  </div>
</div>

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="card text-center !py-7">
    <div class="text-3xl data">26</div>
    <div class="text-xs muted">creators signed up <span class="subtle">· 20 on a paid-tier subscription</span></div>
  </div>
  <div class="card text-center !py-7">
    <div class="text-3xl data">19</div>
    <div class="text-xs muted">events created</div>
  </div>
  <div class="card text-center !py-7">
    <div class="text-3xl data">525</div>
    <div class="text-xs muted">peak unique visitors in one hour</div>
  </div>
</div>

<p class="text-xs subtle !mt-10 !leading-snug">
Seven days, no paid marketing, no press — photographers we reached directly. Small numbers,
but they are <b>ours</b>, and the platform carried the load: twenty thousand photos indexed for
face and bib search, and a five-hundred-guest hour that nobody had to babysit.
</p>

<!--
[5:00 — 5:20] This is the slide that answers "is anyone using it", so do not rush it.

Lead with the load, not the vanity number: "one week of soft opening, twenty thousand
photos through the pipeline, five hundred guests in our busiest hour."

Then be honest about the size: twenty-six creators is small and you should say so before
a judge does. The point is not scale, it is that the loop closed — a photographer signed
up, paid, uploaded, and guests came and searched.

Do NOT extrapolate. No annual figures, no "if this continues". If asked about revenue
from these events, say what is true: we are measuring conversion now and it is too early
to quote a rate.

If asked what a subscription is: twenty of the twenty-six are on a paid tier — mostly Day
and Week passes, because they bought them for a specific event.

The 1.67M requests figure is infrastructure, not people — use it only if a judge probes
whether the system holds up.
-->

---
layout: center
class: text-center
---

<img src="/landing/cta-celebration.746fa47d.webp" class="rounded-2xl h-[230px] w-auto mx-auto object-cover mb-8" alt="" />

<BrandLogo :size="52" />

<p class="text-2xl !mt-4 muted">Capture every moment. <span class="accent">Find every memory.</span></p>

<p class="!mt-6 subtle text-sm data">eventpix.ai</p>

<!--
[5:20 — 5:40] Close on the promise, not on a feature list.

"Somewhere there is a photo of you that you have never seen. We are building the
thing that hands it to you." Then take questions.
-->
