# EventPix — Pitch Script

**AI Youth Festa · ~6 minutes · 14 slides**

Word-for-word spoken script. Timings match the presenter notes in `slides.md`.
Pace is roughly 140 words per minute — if you run fast, the slack is in slide 6
(bib search) and slide 8 (the three architecture cards), in that order.

**Delivery rules**
- The demo on slide 4 is the pitch. Everything before it earns attention for it;
  everything after it justifies it. Do not talk over the video.
- Say every assumed number *as* an assumption, before you say the number.
- The traction on slide 13 is measured, one week of soft opening. Say it exactly as it is
  written and go no further — no extrapolation, no annual figures, no revenue implied from it.
- **Model names, dimensions and thresholds are off the slides on purpose.** Speak at the
  level of the slide. The specifics live in the Q&A section below — give them once, only if
  a judge presses, and offer a private walkthrough rather than more detail into the room.
- At six minutes there is no room to recover a lost slide. If you fall behind, drop
  the slack items above rather than speeding up.

---

## 1 — Cover · `0:00 – 0:20`

> Good morning. This is **EventPix**.
>
> A guest at an event takes a selfie, and instantly gets every photo they appear in,
> out of thousands. The photographer who took those photos gets paid for them.
>
> We built it for Laos — and we built all of it.

*(Move immediately. Don't linger on the cover.)*

---

## 2 — One guest, three steps · `0:20 – 0:50`

> Picture one guest at a marathon. Today her photos sit in a folder nobody can search,
> and the photographer who took them never gets paid.
>
> **[click]** Eight thousand photos are shot before eight in the morning. Five of them
> are her.
>
> **[click]** So how does she find hers? She takes one selfie. No app to install, no
> account to create.
>
> **[click]** And she pays by scanning a QR code — Lao QR, and online payment through
> the banking app already in her pocket. Then the photos are hers.
>
> **[click]** Three steps. No app, no card.

*(The slide is three pictures — don't read the headlines out loud. Land the last line,
pause a beat, move on.)*

---

## 3 — What EventPix does · `0:50 – 1:10`

> EventPix fixes all three. You upload as you shoot; we find every face and every bib
> number, watermark the previews, and take payment through the bank apps your guests
> already have.
>
> Three roles: **creators** — photographers and organizers — who shoot and earn;
> **customers**, the guests, who need no app and no account to search; and
> **contributors**, a fleet of photographers on one event, each paid for the photos
> they personally shot.
>
> Connect, shoot, process, publish, find. Photos land straight from the camera, and
> nothing goes public until the creator releases the batch.

---

## 4 — The moment, in the real product · `1:10 – 1:50`

*(Start the video. Then talk over almost none of it.)*

> This is the shipped product, not a mockup.
>
> She opens the gallery link — no app, no account.
>
> She takes a selfie.
>
> …and that's every photo she's in, ranked by confidence, in about a second.

*(Let it finish. Then:)*

> That selfie was a query, not an upload. It's deleted within the hour.

*(If a judge asks why the gallery is blue: the public gallery is themed per event —
marathon ships blue. The app chrome is always EventPix red.)*

---

## 5 — The AI · Face search · `1:50 – 2:20`

> Here's how that works — and this is the part I want to be precise about: **every model
> runs on our own infrastructure. No third-party AI service ever sees a photo.**
>
> **[click]** Her selfie becomes **[click]** a fingerprint. Not a picture — a private
> mathematical signature of a face, and there's no way back from it to the photo.
>
> Every face in every photo was fingerprinted the moment it was uploaded. Per face, not
> per photo — so a group shot of eight people can be found by any one of the eight.
>
> **[click]** And the search compares fingerprint to fingerprint, never photo against
> photo, and ranks what it finds by how confident it is. All of it inside our own system.
>
> The backend ranks every result. The gallery shows the match count today — the per-photo
> score is computed, we just haven't put it on the tile yet.

*(The model, the dimensions and the thresholds are deliberately not on this slide. Do not
volunteer them. See the Q&A section if a judge presses.)*

---

## 6 — Bib search · `2:20 – 2:40`

> Marathons are our hardest case and our best one: eight thousand photos, and every runner
> is wearing their primary key.
>
> We read the number off the bib automatically as the photo arrives, and index it alongside
> the face — so a runner can just type their race number.
>
> And step three is where naive versions of this fail. Reading a number off a moving runner
> is never perfect. If you only accept an exact match, you hand the runner an empty gallery
> and they conclude nobody photographed them. So a misread digit still finds the right
> photos.

*(Slack slide: if behind, say only the close-enough-still-counts sentence.)*

---

## 7 — Why EventPix is different · `2:40 – 3:00`

> One decision, and everything else on this slide follows from it. We run the models
> ourselves — detection, embeddings, bib reading — on machines we operate. Nothing
> biometric goes to anyone else's endpoint.
>
> **[click]** Which means the cost per photo is ours to optimize. Every photo is
> processed once, at upload, not again on every search — so the eight-thousand-and-first
> photo of an event costs zero.
>
> **[click]** And that is the only reason a Day Pass can be six dollars thirty. A
> per-call API would bill us eight to twenty-four dollars on this one event — more than
> the whole pass, before a single download is sold.
>
> **[click]** Last one: rented inference means rented pricing. Rate limits, price
> changes, deprecations — all outside our control. We know what an event costs before
> the shoot starts.
>
> The unit economics *are* the architecture.

*(The $0.001 per image is a public commodity rate, not a quote we hold — do not name a
vendor. If pressed on volume discounts: they exist and they don't change the argument —
the point is whose line item the marginal cost is.)*

---

## 8 — Architecture · `3:00 – 3:25`

> One photo's path, end to end: the camera uploads straight into the event, our API queues
> it, our AI engine does the faces and the bib numbers, the results go into the photo store,
> and the gallery updates live while the shoot is still going.
>
> That middle box is one box on purpose — what's inside it is ours.
>
> **[click]** One thing I'll pick out: we run an **upload server inside the API itself**.
> Sony, Canon and Nikon bodies can upload over FTP natively — so the photographer configures
> the camera once and never opens a laptop at the venue again.

*(Slack slide: the three cards are droppable. Don't read all three.)*

---

## 9 — Responsible faces, built for Laos · `3:25 – 3:50`

> This is a face-recognition product, so: selfies are deleted within the hour, and
> embeddings are stored against photos, not people. There is no face-to-name index
> to leak. Uploads are private until a creator releases them by hand.
>
> And it's built for Laos, not translated into it. Lao is the product's fallback
> language; English is secondary.
>
> Checkout hands off to Lao QR and online payment — the apps guests already have.
> We store no card or account data. Card penetration here is low, so a checkout that
> assumes a Visa card converts at nearly zero. The payment rail isn't a detail; it's
> the product working or not working.

---

## 10 — How it makes money · `3:50 – 4:20`

> Two revenue lines. Creators subscribe for storage — six plans, and the Day and Week
> passes exist because most photographers work per event, not per month.
>
> And the platform takes a cut of downloads: thirty–seventy with a solo photographer,
> or thirty–twenty–fifty across platform, organizer and photographers on a fleet event.
> Every sale is attributed to whoever actually took that photo, which is what makes a
> ten-photographer marathon possible at all.
>
> One event, in dollars. **And I want to flag the assumption before I give you the number:**
> assume six hundred finishers, and assume fifteen percent of them buy — that's the
> number we're launching to learn. At the shipped three-photo bundle price — four sixty-five
> — that's four hundred and nineteen dollars gross: a hundred and twenty-six to the
> platform, eighty-four to the organizer, two hundred and nine to the photographers.
>
> The prices and the split are real — they're the product's defaults. The conversion
> rate is a guess, and I'm calling it one.

---

## 11 — How big this gets · `4:20 – 4:40`

> So the unit is real: a hundred and thirty-two dollars to us per event of that size — a hundred
> and twenty-six from downloads, plus the Day Pass the photographer bought to run it. And the
> events already on the platform are that size: nineteen events, about a thousand photos each.
>
> Which means the whole business is one multiplication, and the multiplier is event volume.
>
> **[click]** A hundred events a year is thirteen thousand dollars. **[click]** Five hundred is
> sixty-six. **[click]** Two thousand is a quarter of a million.
>
> **And I'll say plainly what those are:** nobody has counted how many events run in Laos in a
> year, so those are brackets to think in, not a forecast — and they are not projected off our
> first week. Finding the real number is what the next quarter is for.

*(Three clicks, one bar each. Do NOT let the tiers sound like a plan, and do not multiply the
traction slide out loud — nineteen events in a week is not nine hundred a year.)*

---

## 12 — What's built, and what's next · `4:40 – 5:00`

> Face search, bib number search, camera ingest, the live gallery, payments and payouts are
> all working today.
>
> And what isn't: safety screening on uploads — the checks and the suspension logic are
> wired, the model is the piece we're dropping in. And search speed at scale: we're
> re-engineering how fingerprints are stored so search stays under two seconds at ten
> thousand photos in a single event. That's our own bottleneck, and we know exactly where
> it is.

---

## 13 — One week of soft opening · `5:00 – 5:20`

> We soft-opened a week ago. Twenty thousand five hundred photos have gone through the
> pipeline since. Five and a half thousand guests came to look for themselves — five
> hundred and twenty-five of them in our busiest single hour.
>
> Twenty-six photographers signed up, twenty of them on a paid plan, and they've run
> nineteen events.
>
> That's a small number of creators and I'll say so before you do. But the loop closed:
> someone signed up, paid, uploaded, and guests showed up and searched. One week, no
> marketing spend.

---

## 14 — Close · `5:20 – 5:40`

> Somewhere there's a photo of you that you have never seen.
>
> We're building the thing that hands it to you.
>
> Capture every moment. Find every memory. Thank you — I'm happy to take questions.

---

# Q&A — prepared answers

**"How many users do you have?"**
> Twenty-six creators in the first week of soft opening, twenty of them paying, across
> nineteen events — that's the slide you just saw. It's small and it's a week old. What
> it tells us is that the loop closes end to end; it doesn't yet tell us what conversion
> looks like, and I won't extrapolate off seven days.

**"Twenty of twenty-six paying — is that real?"**
> They're on paid tiers, mostly Day and Week passes bought for a specific event, which is
> exactly what those plans are for. The three-month free trial is still open to them, so
> the ones who paid did it because they had an event to run that week.

**"What revenue did those nineteen events make?"**
> Too early to quote. We're measuring download conversion now — that's the number the
> whole model hangs on, and I'd rather come back to you with it than guess from one week.

**"Isn't this just Google Photos?"**
> Google Photos doesn't take Lao QR, doesn't pay a photographer, and doesn't let a
> guest search an event they have no account for. We're not a personal photo library;
> we're the sales channel between a photographer and the people in their frames.

**"Does anyone actually pay for event photos?"**
> Sportograf does it at marathon scale in Europe, so the model is proven — but nobody
> has proven it in Laos. That's the honest answer, and it's exactly why the bank-app
> checkout matters as much as the AI does.

**"What's the risk you haven't retired?"**
> The technical risk is gone — it's built and live, and people are using it. What nobody has shown
> is that a guest in Laos will pay for a photo they might screenshot out of a group
> chat. Two things make them decide: the preview is watermarked, and face search turns
> *finding your photo* from a thing that never happens into a thing that takes seconds.

**"What if the conversion rate is lower than fifteen percent?"**
> At five percent the platform takes forty-two dollars from that event; at
> twenty-five, two hundred and nine. Everything hangs on that one number, which is
> why we're launching to measure it rather than to defend it.

**"Which model / library are you using?"**
> We build and run our own recognition stack on our own hardware — that's the part I'd
> rather not spell out from the stage, because it's the piece competitors would copy. Happy
> to walk through it with you properly after the session. What I can tell you is that no
> third-party AI service ever sees one of our photos.

**"What's the actual vector math?"**
> *(Only if they press a second time.)* One pgvector query with a cosine distance
> threshold of 0.6, in `backend/src/modules/search/service.ts` — confidence is one minus
> distance, and each photo scores on its best-matching face. Face embeddings come from
> InsightFace `buffalo_l`, 512 dimensions, on ONNX Runtime; bib numbers come from Tesseract
> with a fuzzy fallback. I can pull the code up if you'd like to see it.

**"Why don't you show the match percentage per photo?"**
> It's computed and returned per photo — we render the aggregate count today.
> Showing it per tile is a UI change, not a model change.

**"Why is the demo gallery blue when your brand is red?"**
> The public gallery is themed per event — five presets plus a custom colour. Marathon
> ships blue. The app chrome is always EventPix red.

**"Why are you quoting dollars if you operate in Laos?"**
> The app bills in kip — a Day Pass is a hundred and thirty-five thousand kip. I'm
> showing dollars at twenty-one thousand five hundred to one so the numbers mean
> something to a regional audience. Both are on the slide.

**"Can the revenue split be changed?"**
> Yes, per event — but never retroactively. Sales already made keep the split that
> was in force when they happened.

**"What about national scale / annual revenue?"**
> A hundred and thirty-two dollars to the platform per event of that size, so the business
> scales on event volume and organizer fleet contracts, not on any single event. That's the
> slide with the three bars: a hundred events a year is thirteen thousand dollars, two thousand
> is a quarter of a million. What I won't do is tell you which of those is the real number —
> nobody has counted the events in this country, so those are brackets, not a forecast, and
> I'm not going to annualize seven days of traction to get there. Measuring actual event
> volume is the point of the next quarter.

**"Where does two thousand events come from?"**
> It's an upper bracket, not a claim. The honest answer is we don't know yet. The reason it
> isn't absurd is fleet contracts — one organizer signs once and brings many events with them,
> so the thing to watch is organizer deals, not photographer signups.

**"Why not just use AWS Rekognition / an API?"**
> Cost and custody. Eight thousand photos per event through per-call pricing costs
> more than the event earns, and we'd be handing biometric data to a third party.

**"Are those real people in your demo images?"**
> No, and our own landing page labels them as illustrative. On a face-recognition
> product, the demo imagery is an ethics decision too.
