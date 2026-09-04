# VIDEO SEO & CONTENT MAP
Measured 4 September 2026. The site is video-led — `videography.html` alone carries 30 embedded
clips — but only four pages carry `VideoObject`, and that is the correct proportion.

---

## 1. Inventory

### YouTube-hosted films — the four `VideoObject` pages

| Page | YouTube ID | Schema | Poster | Assessment |
|---|---|---|---|---|
| `luxury-story.html` | `b7HuCW_x3UQ` | `VideoObject` | `luxury-story-hero.jpg` (in HTML) | **D-01 blocks this page.** Schema `thumbnailUrl` points at the generic brand OG image, not the real poster. `uploadDate: "2023"` is not ISO 8601 |
| `sicilian-ceremony.html` | `jPex_9hjT_8` | `VideoObject` | film frame | Correct |
| `ondrej-dominika.html` | `8Bj7rnel3Ts` | `VideoObject` | film frame | Correct |
| `videography/short-films/fondente/` | `4n2QwuVypmA` | `Movie` + `VideoObject` | `img.youtube.com/vi/…/hqdefault.jpg` | **Best-formed on the site** — director correctly attributed to Tano Lenzo in both nodes. `datePublished: "2025"` is not ISO 8601 |

### Self-hosted MP4 — no schema, correctly

| Page | Clips | Role |
|---|---|---|
| `videography.html` | **30** | The portfolio surface — wedding films, short films, event coverage, corporate & institutions (ATM, ASM), food, reels, fashion (Cettina, Labels), WHITE Milano, personal work |
| `atarashi.html` | 8 | Embedded evidence inside the narrative |
| `cettina-bucca.html` | 5 | Collection films |
| `white-milano.html` | 5 | Recap + three designer/buyer interviews |
| `atm-messina.html` | 4 | The four institutional pieces |
| `photography.html` | 4 | Section motion |
| `saints.html` | 2 | Recaps |
| `new-york-business-fellowship.html` | 2 | Teaser + Day 6 recap |
| `index`, `about`, `rental`, `club-barman`, `dose`, `smashers` | 1 each | Atmosphere / hero |

## 2. VideoObject policy

> A video gets `VideoObject` only if it is **independently useful as a search result**.
> A decorative background loop, a section transition or a 6-second reel does not qualify.

Current state — **four qualify, and exactly four have it.** This is correct and should not be
"expanded for SEO". Adding `VideoObject` to 30 portfolio clips on `videography.html` would be
schema spam on a page whose purpose is browsing, and it would dilute the four that matter.

### Candidates for promotion — only if the underlying asset changes

| Candidate | Would qualify if… | Priority |
|---|---|---|
| Atarashi cinematic weekend film | it is published as a single standalone film with its own page or a stable hosted URL | P2 |
| ATM Messina — the four pieces | they were given individual titles, dates and a stable URL each | P3 |
| WHITE Milano June 2026 recap | it becomes a standalone published film rather than an embedded clip | P3 |

## 3. Defects

| ID | P | Defect | Fix |
|---|---|---|---|
| **D-01** | **P0** | `luxury-story.html` states "The finished film was never posted publicly" while embedding it from YouTube under the label *"Luxury Story · watch on YouTube"*. Present in **both** languages | Confirm which is true. If a portfolio edit exists with the family's permission, reword the sentence (e.g. "was never released as content — it exists for the family; this is the portfolio edit, shared with their permission"). If not, remove the embed and the `VideoObject` |
| **D-11a** | P2 | `uploadDate: "2023"` and `datePublished: "2025"` are years, not dates | Use ISO 8601 (`2023-07-15`) or drop the property. A bare year is not a valid `Date` |
| **D-11b** | P2 | `luxury-story` `VideoObject.thumbnailUrl` = `/assets/images/brand/og-image.png` | Point it at `luxury-story-hero.jpg` — the poster the page already uses |
| **D-10** | P2 | FONDENTE — the only `Movie`-schema asset, 140K+ views — has **one** inbound internal link | Link it from `about.html` (cinematography), `photography.html`, and the Continue Exploring block of at least two case studies |

## 4. Metadata model for every published film

| Field | Rule | Example (Ondrej & Dominika) |
|---|---|---|
| Title | Project name — place — type. No "Official Video" | Ondrej & Dominika — Wedding Film, Prague |
| Description | What the film *is*, one sentence; then the method | A documentary wedding film outside Prague — natural light, vintage colour treatment, and a story about understanding people beyond language |
| Year | ISO where a date exists | 2023-xx-xx |
| Location | Real place, in schema as `locationCreated` | Outside Prague, Czech Republic |
| Role | Exact, never inflated | Wedding filmmaker (for FONDENTE: **DP & camera**, direction Tano Lenzo) |
| Poster | A frame from the film, never the brand OG image | `frame-*.jpg` |
| Embed | `youtube-nocookie.com` | already correct sitewide |
| Loading | Below-fold: `data-lazy-video` + `<source data-src>` + poster. Hero only: `preload="auto"` | already correct |
| Internal links | Its hub + at least one related case study | see D-10 |

## 5. Instagram video proof — recorded separately, never as VideoObject

Instagram embeds are *proof*, not owned media. They are never marked up as `VideoObject`,
because the video is not hosted here and the site is not its publisher.

| Publication account | URL | Type | Credit level | What it proves |
|---|---|---|---|---|
| @cettinabucca | `reel/DcNreUHtRUw/` | Reel | **L1 — caption credit "Video @francescolarosa.ph"** | Named authorship on a fashion film |
| @cettinabucca | `reel/DGVCH86Nq2V/` | Reel | L2 — tagged with @colombofashionweek + @whiteshowofficial | The Colombo / WHITE chain |
| @cettinabucca | `reel/DQea78bCFxU/` | Reel | L2 — tagged | **Documented, not published on site (D-08)** |
| @cettinabucca | `reel/DQLxCkIjUgU/` | Reel | L2 — tagged | **Documented, not published on site (D-08)** |
| @saints.musicatelier | `reel/DaYbY7SObVy/` | Reel | **L1 — "Ph: @francescolarosa.ph"** | Season opener, 26 June |
| @saints.musicatelier | `reel/DbL4oClOja5/` | Reel | **L1 — same** | 26 July recap |
| @saints.musicatelier | `reel/Dbq2T6KuiI3/` | Reel | **L1 — same**, with @weare.romeo | 19 July recap |
| @newyorkbusinessfellowship | `reel/DUMbyhUkaUw/` | Reel | L2 — Instagram collaboration | Winter 2026 teaser |
| @newyorkbusinessfellowship | `reel/DUd11liERTU/` | Reel | L2 — Instagram collaboration | Day 6 recap |
| @atarashi.paris + @atarashi.festival | `p/DcQ4l__jxqE/` | Carousel | L3 — published by client, slides 1/2/8/13/14/16 are his | Client publication |

Confidence is recorded per row and mirrored in [PROOF-AUTHORITY-MAP.md](PROOF-AUTHORITY-MAP.md).
The on-page label must always match the level: *"published by"* for L3, *"an Instagram
collaboration with"* for L2, *"credits the video to him by name"* for L1. The site currently
gets every one of these labels right.
