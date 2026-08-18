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
duration: 10min
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

<div class="mosaic">
  <img src="/landing/mosaic-03.deb608c0.webp" alt="" />
  <img src="/landing/mosaic-07.a67f4f68.webp" alt="" />
  <img src="/landing/mosaic-11.0756cfa3.webp" alt="" />
  <img src="/landing/mosaic-15.2ce0e386.webp" alt="" />
  <img src="/landing/mosaic-02.696fdf3f.webp" alt="" />
  <img src="/landing/mosaic-09.996a1151.webp" alt="" />
  <img src="/landing/mosaic-13.ccd6dbc7.webp" alt="" />
  <img src="/landing/mosaic-05.ccf372cc.webp" alt="" />
</div>
<div class="scrim" />

<div class="relative z-10">

<BrandLogo :size="60" />

<p class="text-2xl mt-5 mb-6 muted">Capture every moment. <span class="accent">Find every memory.</span></p>

<div class="flex gap-2 flex-wrap">
  <span class="chip">Face &amp; bib search built in</span>
  <span class="chip">Camera to gallery, no laptop</span>
  <span class="chip">Checkout in the bank app they already have</span>
</div>

<p class="mt-8 text-sm subtle data">AI YOUTH FESTA · eventpix.ai</p>

</div>

<style scoped>
.mosaic {
  position: absolute; inset: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
}
.mosaic img { width: 100%; height: 100%; object-fit: cover; }
.scrim {
  position: absolute; inset: 0;
  background: linear-gradient(100deg, #0a0a0a 34%, rgba(10,10,10,.88) 62%, rgba(10,10,10,.55) 100%);
}
</style>

<!--
[0:00 — 0:30] Open with the name and the promise, then get off this slide fast.

"EventPix is an AI-powered photo platform for events. Two sentences: guests find
themselves in thousands of photos by taking a selfie. Photographers get paid for
the photos they take. We built it for the Lao market."
-->

---
layout: default
---

# The week after every event

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click>

### For the photographer

A marathon produces <span class="data accent">8,000</span> photos in one morning.
Then the messages start.

<div class="card mt-4 italic muted">
"Can you send me the ones I'm in?"
</div>

<p class="mt-4 muted text-sm">
Answered by hand, one guest at a time, for a week. The photos that nobody asks for
are never seen and never paid for.
</p>

</div>

<div v-click>

### For the guest

The album link arrives three days late. It has thousands of photos in it.
You scroll for ten minutes, give up, and never see the one good picture
somebody took of you.

<p class="mt-4 muted text-sm">
No app to install. No account. If finding yourself takes more than a few seconds,
it doesn't happen at all.
</p>

</div>

</div>

<div v-click class="mt-8 text-lg">
The photo exists. The person in it never sees it. <span class="accent">Nobody gets paid.</span>
</div>

<!--
[0:30 — 1:20] This is the emotional setup. Don't rush it — the judges have all
been in an event WhatsApp group waiting for photos.

Land the last line and pause before the next slide.
-->

---
layout: center
class: text-center
---

<div class="relative inline-block mb-8">
  <img src="/landing/mosaic-09.996a1151.webp" class="h-[190px] rounded-xl object-cover" alt="" />
  <FaceBox :conf="97" show-score top="12%" left="36%" width="26%" height="27%" />
</div>

<h2 class="max-w-3xl mx-auto leading-snug">
EventPix exists for one emotional beat: the instant a person sees
<span class="accent">themselves</span> in a photo they didn't know existed.
</h2>

<p class="mt-6 subtle text-sm">Everything else in the product is in service of that moment.</p>

<!--
[1:20 — 1:45] Say the sentence, let it sit for a beat, move on.

The corner ticks are the app's real face-detection treatment. They are white, not
brand red, on purpose: red rectangles over red-heavy event photography read as an
error state.
-->

---
layout: two-cols-header
---

# What EventPix does

::left::

<div class="pr-6">

Upload as you shoot. EventPix finds every face and bib number, watermarks the
previews, and takes payment through the bank apps your guests already use.

<div class="mt-6 space-y-3">
  <PipelineStage n="01" title="Creators" detail="Photographers and event organizers. They shoot, publish, and earn." />
  <PipelineStage n="02" title="Customers" detail="Event guests. No app install, no account needed to search." />
  <PipelineStage n="03" title="Contributors" detail="A fleet of photographers on one event, paid per photo they shot." />
</div>

</div>

::right::

<img src="/landing/app-mobile-search.fbd95176.webp" class="rounded-xl border border-white/10 shadow-2xl max-h-[380px] mx-auto" alt="Face search results on a phone" />

<p class="text-center text-xs subtle mt-3">Two event modes: <b>Monetized</b> (watermarked previews, paid downloads) or <b>Sharing</b> (free).</p>

<!--
[1:45 — 2:20] One sentence of what it is, then the three roles. Keep it tight —
the demo does the real explaining.
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

<p class="mt-6 text-sm subtle">
Not a mockup. This is the shipped app driven in a headless browser with a fake camera
device — the gallery collapsing to one person's photos is the app doing it, not a video
of our idea of it.
</p>

</div>

</div>

<!--
[2:20 — 3:10] THE MONEY SLIDE. Shut up and let it play once through.

Narrate only: "guest opens the gallery link… takes a selfie… and that's every
photo she's in, sorted by confidence."

If the video does not autoplay, click it. Poster frame is set so a still is never blank.
-->

---
layout: default
---

# One product, every event's colors

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

The app chrome is always EventPix red. The **public gallery** is not — a creator picks a
theme and the event wears its own colors, scoped so it never leaks into the rest of the product.

<div class="mt-5 space-y-2 text-sm">
  <div class="flex items-center gap-3"><span class="sw" style="background:#D6336C" /> Wedding <span class="data subtle ml-auto">#D6336C</span></div>
  <div class="flex items-center gap-3"><span class="sw" style="background:#1D6FE8" /> Marathon <span class="data subtle ml-auto">#1D6FE8</span></div>
  <div class="flex items-center gap-3"><span class="sw" style="background:#C9A24A" /> Corporate <span class="data subtle ml-auto">#C9A24A</span></div>
  <div class="flex items-center gap-3"><span class="sw" style="background:#7C3AED" /> Party <span class="data subtle ml-auto">#7C3AED</span></div>
  <div class="flex items-center gap-3"><span class="sw sw-custom" /> Custom <span class="data subtle ml-auto">creator-picked</span></div>
</div>

<p class="mt-5 text-xs subtle">
So the marathon gallery you just saw is blue by design, not by accident.
</p>

</div>

<div class="grid grid-cols-3 gap-3">
  <img src="/landing/cta-phone-running.0fbb21f3.webp" class="rounded-xl w-full" alt="Marathon-themed gallery" />
  <img src="/landing/cta-phone-wedding.c1e781e1.webp" class="rounded-xl w-full" alt="Wedding-themed gallery" />
  <img src="/landing/cta-phone-corporate.a2e9e6f3.webp" class="rounded-xl w-full" alt="Corporate-themed gallery" />
</div>

</div>

<style scoped>
.sw { width: 18px; height: 18px; border-radius: 6px; display: inline-block; }
.sw-custom { background: conic-gradient(#e60023, #1D6FE8, #7C3AED, #C9A24A, #e60023); }
</style>

<!--
[cut this slide first if the clock is tight — it is the only one that is explanation
rather than argument]

It earns its place if a judge notices the demo gallery is blue while the deck is red.
Answer before they ask: the gallery is themed per event, five presets plus custom.
-->

---
layout: default
---

# End to end

<div class="grid grid-cols-5 gap-3 mt-6">

<div v-click class="card">
  <div class="data accent text-xs">01</div>
  <div class="font-semibold mt-1">Connect</div>
  <p class="text-xs muted mt-2">Scan a QR to pair the phone app, or drop SFTP credentials into the camera.</p>
</div>

<div v-click class="card">
  <div class="data accent text-xs">02</div>
  <div class="font-semibold mt-1">Shoot</div>
  <p class="text-xs muted mt-2">Photos upload straight from the camera. No laptop at the venue.</p>
</div>

<div v-click class="card">
  <div class="data accent text-xs">03</div>
  <div class="font-semibold mt-1">Process</div>
  <p class="text-xs muted mt-2">EXIF, thumbnail, face embeddings, bib OCR and a safety check run automatically.</p>
</div>

<div v-click class="card">
  <div class="data accent text-xs">04</div>
  <div class="font-semibold mt-1">Publish</div>
  <p class="text-xs muted mt-2">Nothing goes public until the creator releases the batch.</p>
</div>

<div v-click class="card">
  <div class="data accent text-xs">05</div>
  <div class="font-semibold mt-1">Find</div>
  <p class="text-xs muted mt-2">A guest opens the link, takes a selfie or types a bib number, and buys.</p>
</div>

</div>

<div v-click class="grid grid-cols-3 gap-4 mt-8">
  <img src="/landing/route-qr.c084b3d7.webp" class="rounded-lg border border-white/10 h-[120px] w-full object-cover" alt="QR pairing" />
  <img src="/landing/camera-back-lcd.2396f42a.webp" class="rounded-lg border border-white/10 h-[120px] w-full object-cover" alt="Camera back LCD" />
  <img src="/landing/live-gallery-monitor.65743da0.webp" class="rounded-lg border border-white/10 h-[120px] w-full object-cover" alt="Live gallery monitor" />
</div>

<!--
[3:10 — 3:50] Five steps, five clicks. Do not read the cards out loud — say the
verb and add one detail.

Step 4 is worth a sentence: publishing is explicit, so a bad frame never reaches
the public gallery by accident.
-->

---
layout: section
class: text-center ep-dark
---

# The AI

<p class="text-xl mt-4 muted">
Every model runs on <span class="accent">our own infrastructure</span>.
</p>

<p class="mt-6 subtle text-sm">Not one LLM API call in the codebase.</p>

<!--
[3:50 — 4:00] Section break. This is the part the competition is actually judging,
so signpost it clearly.
-->

---
layout: two-cols-header
---

# Face search

::left::

<div class="pr-6 text-sm">

**Model** — InsightFace `buffalo_l` (ArcFace) on ONNX Runtime, self-hosted.
Detection size <span class="data">640</span>, threshold <span class="data">0.5</span>.

**Index time** — every detected face becomes a <span class="data accent">512-dim</span>
embedding, stored per photo. One photo, many faces.

**Query time** — the guest's selfie is embedded, then matched by
<span class="accent">cosine distance</span> across the event.

<div class="mt-4 space-y-2">
  <PipelineStage n="→" title="Threshold 0.6" detail="Distance above this is not a match." />
  <PipelineStage n="→" title="confidence = 1 − distance" detail="What the results are ranked by." />
  <PipelineStage n="→" title="MIN() per photo" detail="A photo scores on its best-matching face." />
</div>

</div>

::right::

```sql
-- backend/src/modules/search/service.ts
SELECT i.id,
       MIN(emb::vector <=> $selfie::vector)
         AS distance
FROM   items i,
       jsonb_array_elements(i.face_embeddings) emb
WHERE  i.event_id = $event
  AND  i.is_published
  AND  i.deleted_at IS NULL
GROUP  BY i.id
HAVING MIN(emb::vector <=> $selfie::vector) < 0.6
ORDER  BY distance ASC;
```

<div class="flex items-center gap-3 mt-5 justify-center">
  <div class="relative">
    <img src="/landing/mosaic-02.696fdf3f.webp" class="h-[92px] w-[92px] rounded-xl object-cover" alt="" />
    <FaceBox :conf="97" show-score top="18%" left="30%" width="34%" height="34%" />
  </div>
  <span class="match-chip"><b>6</b> face matches found</span>
</div>

<p class="text-center text-xs subtle mt-4 px-6">
The backend ranks every result by confidence; the gallery currently surfaces the match
<i>count</i>, and the per-photo score is available but not yet shown.
</p>

<!--
[4:00 — 4:50] The technical core. Judges will want to see that we understand what
we built, not that we called an API.

Key beat: embeddings are per FACE, not per photo — a group shot carries eight
embeddings and can be found by any of the eight people in it.

If asked about the score: it is computed and returned per photo, we just render the
aggregate today. Showing it per-tile is a UI change, not a model change.
-->

---
layout: two-cols-header
---

# Bib search

::left::

<div class="pr-6">

Marathons are our hardest case and our best one: <span class="data accent">8,000</span>
photos, and every runner is wearing their primary key.

<div class="mt-5 space-y-2">
  <PipelineStage n="01" title="Tesseract, PSM 7" detail="Downscaled to 640px, treated as a single text line." />
  <PipelineStage n="02" title="Regex \b\d{2,6}\b" detail="Extract candidate bib numbers, dedup, preserve order." />
  <PipelineStage n="03" title="Exact match OR fuzzy" detail="OCR substitutes characters — 8 for B, 0 for O — so the query falls back to a fuzzy match rather than returning nothing." />
</div>

<p class="mt-5 text-sm muted">
Runs once at upload, per event, opt-in. The guest just types their race number.
</p>

</div>

::right::

<img src="/landing/search-bib.35a9d29e.webp" class="rounded-xl border border-white/10 shadow-2xl" alt="Bib number search" />

<!--
[4:50 — 5:20] Point out that step 3 is where naive implementations fail: OCR is
never clean, so an exact-match-only search returns an empty gallery and the
runner assumes there are no photos of them.
-->

---
layout: default
---

# Why self-hosted, not an API

<div class="grid grid-cols-3 gap-5 mt-10">

<div class="card" v-click>
  <div class="text-3xl accent data">₭0</div>
  <div class="font-semibold mt-2">per inference</div>
  <p class="text-sm muted mt-2">
    One marathon is 8,000 photos and every one gets face detection, embedding and OCR.
    Per-call pricing would cost more than the download revenue on a whole event.
  </p>
</div>

<div class="card" v-click>
  <div class="text-3xl accent"><carbon:locked /></div>
  <div class="font-semibold mt-2">Faces never leave</div>
  <p class="text-sm muted mt-2">
    Guest selfies and embeddings stay on our infrastructure. We never hand
    biometric data to a third party — which is not a claim you can make while
    posting faces to someone else's endpoint.
  </p>
</div>

<div class="card" v-click>
  <div class="text-3xl accent"><carbon:earth-southeast-asia /></div>
  <div class="font-semibold mt-2">Priced for Laos</div>
  <p class="text-sm muted mt-2">
    A Day Pass is <span class="data">₭135,000</span>. That price only exists
    because our marginal cost per photo is compute we already own.
  </p>
</div>

</div>

<!--
[5:20 — 5:50] This is the argument that separates us from a hackathon project
that wraps an API. Say it plainly: the unit economics ARE the architecture.
-->

---
layout: default
---

# Architecture

```mermaid {scale:0.75, theme:'base', themeVariables:{primaryColor:'#fff1f2', primaryBorderColor:'#e60023', primaryTextColor:'#111820',lineColor:'#737373', fontFamily:'Work Sans, sans-serif'}}
flowchart LR
  B[Browser] --> P[Next.js<br/>proxy] --> A
  CAM[Camera<br/>phone] -->|SFTP<br/>QR| A
  BANK[BCEL<br/>LDB · JDB] -->|PubNub| A
  A[Elysia API<br/>on Bun] -->|BullMQ| W[Python worker<br/>InsightFace · Tesseract]
  A --> DB[(Postgres<br/>pgvector)]
  A --> S3[(Cloudflare R2)]
  W --> DB
  W --> S3
  W -->|Redis<br/>pub/sub| A
  A -->|SSE| B
```

<div class="grid grid-cols-3 gap-4 mt-6 text-xs muted">
  <div><span class="accent font-semibold">Backend</span> — Bun + Elysia, Drizzle, Casbin RBAC, Pino</div>
  <div><span class="accent font-semibold">Frontend</span> — Next.js 16, React 19, Tailwind v4</div>
  <div><span class="accent font-semibold">Processor</span> — Python 3.10, InsightFace, ONNX, pgvector</div>
</div>

<!--
[5:50 — 6:20] Trace one photo through the diagram with your finger: camera → API →
queue → worker → back to the gallery over SSE. That is the whole system in one path.

Note the browser never talks to the API directly — every call goes through the
Next.js proxy, which holds the token and refreshes it transparently.
-->

---
layout: default
---

# Three things we're proud of

<div class="space-y-3 mt-6 text-sm">

<div class="card" v-click>
  <div class="font-semibold">An SFTP server inside the API process</div>
  <p class="text-xs muted mt-1 leading-relaxed">
    Sony, Canon and Nikon bodies can upload over FTP natively. So we run an ssh2-based
    SFTP endpoint that writes straight to object storage — the photographer configures
    the camera once and never opens a laptop at the venue again.
  </p>
</div>

<div class="card" v-click>
  <div class="font-semibold">Photos appear in the gallery while the shutter is still going</div>
  <p class="text-xs muted mt-1 leading-relaxed">
    The Python worker publishes to a Redis channel when a photo finishes processing;
    the API relays it to every open gallery over SSE. Guests watch the event fill up live.
  </p>
</div>

<div class="card" v-click>
  <div class="font-semibold">Watermarks are never pre-generated</div>
  <p class="text-xs muted mt-1 leading-relaxed">
    Previews are rendered on demand and cached, with the cache key derived from the
    watermark itself — so a creator changing their watermark invalidates every stale
    preview automatically, instead of us re-rendering thousands of images up front.
  </p>
</div>

</div>

<!--
[6:20 — 6:55] Pick TWO of these three depending on the clock. The SFTP one always
lands because it is the least expected.
-->

---
layout: default
---

# Handling faces responsibly

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="card">
  <div class="font-semibold accent">Selfies are deleted within 1 hour</div>
  <p class="text-sm muted mt-2">The search photo is a query, not an asset. It is never added to the gallery and never kept.</p>
</div>

<div class="card">
  <div class="font-semibold accent">Embeddings are not linked to identity</div>
  <p class="text-sm muted mt-2">We store vectors against photos, not against people. There is no face-to-name index to leak.</p>
</div>

<div class="card">
  <div class="font-semibold accent">Publishing is always explicit</div>
  <p class="text-sm muted mt-2">Uploads are private by default. A creator releases each batch by hand, so no photo becomes searchable by accident.</p>
</div>

<div class="card">
  <div class="font-semibold accent">Originals live in a vault</div>
  <p class="text-sm muted mt-2">Monetized originals are encrypted at rest in a private bucket, reachable only through a signed URL valid 24 hours and 3 downloads.</p>
</div>

</div>

<p class="mt-6 text-sm subtle">
Our own landing page labels its people as illustrative, not real event guests — because on a
face-recognition product, the demo imagery is an ethics decision too.
</p>

<!--
[6:55 — 7:30] Do not skip this slide for time. It is a face-recognition product in
front of judges; showing that we thought about it is worth more than another feature.
-->

---
layout: two-cols-header
---

# Built for Laos, not translated into it

::left::

<div class="pr-6 text-sm">

### Lao is the default

<p class="lao text-base accent mb-2">ຄົ້ນຫາດ້ວຍໃບໜ້າຂອງທ່ານ</p>

Not a language toggle bolted on at the end — Lao is the fallback language of the
product and English is secondary. Type, spacing and line height were chosen so Lao
and English are equally first-class.

### Payment where the money already is

Checkout hands off to <b>BCEL One</b>, <b>LDB</b>, <b>JDB</b> or Lao QR — the banking
apps guests already have on their phone. Confirmation comes back in real time.

<p class="mt-3 text-sm muted">
We store no card or account data. The bank does the sensitive part; we listen for
the confirmation.
</p>

</div>

::right::

<div class="space-y-3">
  <div class="card">
    <div class="text-sm font-semibold">Why this matters</div>
    <p class="text-xs muted mt-2">
      Card penetration is low. A checkout that assumes a Visa card is a checkout that
      converts at nearly zero here — the payment rail is not a detail, it is the product
      working or not working.
    </p>
  </div>
  <img src="/landing/cta-phone-running.0fbb21f3.webp" class="rounded-xl border border-white/10 max-h-[220px] mx-auto" alt="Event gallery on a phone" />
</div>

<!--
[7:30 — 8:00] The localisation point is a differentiator against any imported
competitor. Google Photos does not take BCEL One.
-->

---
layout: two-cols-header
---

# How it makes money

::left::

<div class="pr-6">

### Creators subscribe for storage

| Plan | Price | Storage |
|---|---|---|
| Free trial | <span class="data">₭0</span> / 3 mo | 5 GB |
| Day Pass | <span class="data">₭135,000</span> / day | 5 GB |
| Week Pass | <span class="data">₭220,000</span> / wk | 10 GB |
| Starter | <span class="data">₭300,000</span> / mo | 12 GB |
| Plus | <span class="data">₭590,000</span> / mo | 32 GB |
| Pro | <span class="data">₭800,000</span> / mo | 64 GB |

<p class="text-xs subtle mt-2">Day and Week passes exist because most photographers work per event, not per month.</p>

</div>

::right::

### And the platform takes a cut of downloads

<div class="card mt-4">
  <div class="text-sm font-semibold">Solo photographer</div>
  <div class="text-lg mt-2"><span class="accent data">30%</span> platform · <span class="accent data">70%</span> photographer</div>
</div>

<div class="card mt-3">
  <div class="text-sm font-semibold">Organizer with a photographer fleet</div>
  <div class="text-lg mt-2 data">
    <span style="color:#ff6b78">30%</span> ·
    <span style="color:#e60023">20%</span> ·
    <span style="color:#8a0015">50%</span>
  </div>
  <p class="text-xs muted mt-2">
    Platform, organizer, photographers. Configurable per event, and every sale is
    attributed to whoever actually took that photo — so ten photographers on one
    marathon each get paid for their own frames.
  </p>
</div>

<!--
[8:00 — 8:35] Two revenue lines, and the second one is the interesting one:
per-photo attribution is what makes a fleet event possible at all.

If asked: splits are adjustable but never retroactive — sales already made keep
the split that was in force.
-->

---
layout: default
---

# What's actually built

<div class="grid grid-cols-4 gap-4 mt-10">
  <div class="card text-center">
    <div class="text-3xl data accent">668</div>
    <div class="text-xs muted mt-1">commits since Feb 2026</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl data accent">66k</div>
    <div class="text-xs muted mt-1">lines of TypeScript &amp; Python</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl data accent">34</div>
    <div class="text-xs muted mt-1">backend test files</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl data accent">3</div>
    <div class="text-xs muted mt-1">deployed environments</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div v-click>

### Not a prototype

Three services, one monorepo, built by a team of three. Tests run against a real
Postgres and the real application — not mocks — covering auth, payments, checkout,
cart, search, KYC and admin.

</div>

<div v-click>

### Shipped on rails

Six CI pipelines, filtered per package, building containers and deploying to
dev, UAT and production on self-hosted runners.

</div>

</div>

<!--
[8:35 — 9:00] Be precise here: these are engineering facts, not traction claims.
We are not going to invent user numbers. If a judge asks about users, answer
honestly about where we are in launch.
-->

---
layout: two-cols-header
---

# Shipped, and next

::left::

<div class="pr-6">

### Working today

<div class="space-y-2">
  <PipelineStage n="✓" title="Face search" detail="InsightFace embeddings, pgvector cosine match, confidence ranking." />
  <PipelineStage n="✓" title="Bib OCR search" detail="Tesseract extraction with fuzzy fallback." />
  <PipelineStage n="✓" title="Camera ingest" detail="SFTP plus QR-paired mobile upload." />
  <PipelineStage n="✓" title="Real-time gallery" detail="Redis pub/sub to SSE." />
  <PipelineStage n="✓" title="Payments &amp; payouts" detail="Bank-app checkout, per-photo revenue attribution." />
</div>

</div>

::right::

### Next

<div class="space-y-2">
  <PipelineStage n="→" :shipped="false" title="NSFW classifier" detail="The pipeline stage, thresholds and account-suspension logic are already wired — the model itself is the piece we are dropping in." />
  <PipelineStage n="→" :shipped="false" title="Native pgvector column + ANN index" detail="Embeddings are stored as JSONB and cast at query time today. Moving to a real vector column with an approximate index is how we hold our sub-2-second target at 10,000 photos." />
  <PipelineStage n="→" :shipped="false" title="Near-duplicate review" detail="Perceptual hashes are computed; the creator-facing review UI is not built yet." />
</div>

<!--
[9:00 — 9:30] Being explicit about what is not finished buys credibility for
everything on the left column. Say the pgvector one out loud — it shows we know
where our own bottleneck is.
-->

---
layout: center
class: text-center
---

<BrandLogo :size="56" class="mb-6" />

<p class="text-2xl mt-3 muted">Capture every moment. <span class="accent">Find every memory.</span></p>

<p class="mt-10 subtle text-sm data">eventpix.ai</p>

<!--
[9:30 — 10:00] Close on the promise, not on a feature list.

"Somewhere there is a photo of you that you have never seen. We are building the
thing that hands it to you." Then take questions.
-->
