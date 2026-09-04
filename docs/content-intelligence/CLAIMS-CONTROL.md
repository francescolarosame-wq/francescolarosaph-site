# CLAIMS CONTROL
The single authority on what may be written about Francesco La Rosa on this website.

If a sentence you are about to write is not supported by a row in §1, it does not ship.

---

## 1. Claims that may be made

### Identity

| Claim | Source | Confidence | Where used |
|---|---|---|---|
| Photographer and filmmaker | first-party, consistent sitewide | Certain | everywhere |
| Based in Messina, Sicily | first-party + GBP + Cherrydeck + Gazzetta | Certain | everywhere |
| Professional since 2018 | first-party, GBP, Cherrydeck | Certain | `/`, `/about`, schema |
| Photography since childhood; began at 14 | first-party + **Gazzetta 2021** | Certain | `/about` |
| Started in street photography | first-party | Certain | `/about` |
| Works in Italian, English and Spanish | first-party | Certain | `/about`, `/wedding`, `/` — **must be made consistent, see §3 D-02** |
| Four years in Prague, two in the United States | first-party | Certain | `/about` |
| Available worldwide, Sicily as base | first-party | Certain | `/`, `/contact` |
| Works as a single photo-and-video resource | first-party, demonstrated across the portfolio | Certain | positioning |
| Documentary approach, minimal intervention | first-party, consistent | Certain | everywhere |
| Colour grading is a deepening focus | first-party | Certain | `/about`, `/videography` |

### Projects and roles

| Claim | Source | Confidence |
|---|---|---|
| Covered Atarashi's Sicilian weekend from a production pass, across three venues | first-party + client publication | Certain |
| Ongoing content for Cettina Bucca since 2023 | first-party + 4 credited reels | Certain |
| Documented Cettina Bucca at Colombo Fashion Week 2025 | credited reel + alpifashionmagazine | Certain |
| Part of WHITE Milano's production team across multiple editions | first-party | High — **no external credit exists** |
| Photography, multicam and recap video for Saints | 3 explicit credits + Google review | Certain |
| Recurring event content for Dose through 2024 | first-party | High |
| Visual identity and social content for Club Barman dello Stretto, from Messina Cocktail Week Dec 2024 and properly from 2026 | first-party | High |
| Editorial pastry shoot for Casa Irrera, Sony A7 IV, ~2.5 hours, bounced flash | first-party | High |
| Three-day destination wedding film in Sicily, ~80% guests from outside Sicily | first-party | High |
| The same family returned three years later for a second wedding | first-party, stated on two pages | High |
| Documentary wedding film outside Prague, 2023 | first-party | High |
| **Director of Photography and Camera on FONDENTE (2025), directed by Tano Lenzo** | first-party + credits | Certain |
| FONDENTE premiered at Horcynus Festival, 5 Aug 2025 | first-party | High |
| FONDENTE submitted to five festivals in Rome; 140K+ views | first-party | High |
| Aston Martin contacted him directly through social media; three-day shoot in Prague, winter 2021 | first-party | High |
| **FIA-accredited paddock and pit lane access, Circuit de Barcelona-Catalunya, 2020, in collaboration with Formula Racer** | first-party + Gazzetta corroboration | Certain |
| **Videomaker on ATM Messina; direction and strategy belonged to others** | first-party | Certain |
| Two videos for ASM Taormina — video only | first-party | Certain |
| Pre-launch and daily recap video for NYBF | 2 Instagram collaborations | Certain |
| Photo and video for the Smashers launch; relationship with the founder since 2021 | first-party | High |

### External proof

| Claim | Source | Confidence |
|---|---|---|
| Cettina Bucca credits the video to him by name | caption "Video @francescolarosa.ph" | Certain |
| Saints credits the photography in three captions | "Ph: @francescolarosa.ph" ×3 | Certain |
| Atarashi published his photographs | client carousel, slides identified | Certain |
| NYBF published two pieces as Instagram collaborations | Instagram collaboration interface | Certain |
| 5-star Google review from Alessandro Maugeri, Founder of Saints Music Atelier | Google | Certain |
| Featured in Gazzetta del Sud, 21 Feb 2021 | the article | Certain — **not yet used on the site** |

## 2. Claims that must NOT be made

| Forbidden | Why |
|---|---|
| "Credited by WHITE Milano" | Authenticated review: **0 credits in 7 posts** |
| "Credited by Smashers" | **0 credits in 4 posts** |
| "Credited by NYBF" | Collaborations are L2, not written credits |
| Any award, prize or festival *selection* | Only "submitted to five festivals" is verified. The Gazzetta line about a Czech contest top-10 belongs to 2021 and may be quoted **as Gazzetta reported it**, never restated as a standalone achievement |
| Any reach, engagement, sales or follower outcome for a client | Never verified for any project |
| "Trusted by Aston Martin" / "Official photographer for…" | The brief was a campaign shoot, not a role |
| "Team", "studio", "we", "our clients" | He is an individual professional |
| "Award-winning" | No award is on record |
| Any client name not already on the site | Requires a completed intake form |
| A year for ATM Messina | **Deliberately unstated.** Do not add one |
| "Published in [magazine]" for Casa Irrera | The shoot was *for* a feature; publication is unconfirmed |
| Naming an F1 car, driver or team not visible in frame | The existing set is disciplined; keep it |
| `AggregateRating` / `Review` schema for stars | One review, self-serving markup |
| Location-page claims ("photographer in X") for cities visited once | No location pages |
| "Since 2017" / "seven years" as a moving anchor | Anchor to **2018**; a relative phrase decays |

## 3. Open conflicts — resolve before the copy pass

| ID | Conflict | Resolution rule |
|---|---|---|
| **D-01** | `luxury-story.html`: "The finished film was never posted publicly" vs. a YouTube embed of that film, in both languages | **Ask Francesco.** Neither version may be assumed. This is the one blocking item in the system |
| **D-02** | Languages: site says Italian/English/Spanish; `llms.txt` says Italian/English; Person schema says nothing | Site copy wins (tier 1 beats tier 5). Fix `llms.txt`, add `knowsLanguage: ["it","en","es"]` |
| — | Step 25 brief places **Castelluccio** in Luxury Story; the site places Castelluccio di Noto in Sicilian Ceremony | Repository documentation outranks the brief (tier 2 > tier 3). No change made. Confirm |
| — | Step 25 brief names the couples (Lucrezia & Giulio, Luna & Leonardo); body copy does not | Naming requires permission. Confirm before publishing |
| — | Brief says Atarashi's designer was Francesco's father; the site does not mention it | True but unpublished. **Editorial decision, not a factual one** — disclosure may weaken the "won on merit" reading. Confirm intent |

## 4. Confidence vocabulary

| Level | Meaning | May appear as |
|---|---|---|
| **Certain** | Verified in ≥2 independent places, or externally documented | Plain statement |
| **High** | First-party, internally consistent, nothing contradicting it | Plain statement in his own voice |
| **Medium** | Single source, no corroboration | Hedged, or omitted |
| **Requires confirmation** | Conflicting or unverified | **Never published** |

## 5. The test, before any sentence ships

1. Which row in §1 supports it?
2. Is the proof level labelled correctly — L1 vs L2 vs L3?
3. Would Francesco be comfortable if the client read this sentence?
4. Does it survive translation into the other language unchanged in meaning?
5. Is it first person, singular, and his?

Five yeses, or it does not ship.
