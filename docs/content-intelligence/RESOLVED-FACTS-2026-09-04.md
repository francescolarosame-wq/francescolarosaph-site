# Resolved Facts — 4 September 2026 (STEP 26)

Dates below were established from **camera EXIF (`DateTimeOriginal`) and video
container metadata**, not inference. Method: read the original files in
`SELEZIONE RISTRETTA SITO`, cross-check against what each page already claims.

## Dates now established

| Project | Established | Evidence | Published on site? |
|---|---|---|---|
| **Atarashi** | **31 July – 2 August 2026** | 37 source JPGs, Sony ILCE-7M4, `DateTimeOriginal` 2026:07:31 21:50 → 2026:08:02 22:25. Day counts 31 Jul ×11, 1 Aug ×6, 2 Aug ×20 — matching the page's own "the 31st / the 1st / the 2nd" | ✅ published |
| **WHITE Milano** | **February 2026 edition** | 20 source JPGs, 26–27 Feb 2026 | ❌ not yet in copy |
| **ATM Messina** | **Sept 2024 – July 2025** | Container `creation_time`: Festival Mobilità 20 Sep 2024 · Fest 2.0 21 Sep 2024 · Natale 7 Dec 2024 · "22 Luglio" 23 Jul 2025 (one day after 22 July 2025) | ❌ deliberately unclaimed |
| **ASM Taormina** | **Dec 2024 – Mar 2025** | ASM 02 7 Dec 2024 · ASM 04 22 Mar 2025 | ❌ |
| **NYBF** | **Winter 2026** | NYC01PREWINTER 31 Jan 2026 · FELLOW POV 18 Feb 2026 — matches the "Winter 2026 teaser" already on the page | partially |
| **Casa Irrera** | **Oct–Nov 2024** | 11 JPGs, 8 Oct 2024 ×7 + 22 Nov 2024 ×4 | ❌ |
| **Smashers** | **11 June 2025** | 10 JPGs, all 2025:06:11 | ❌ |
| **Love's Sushi** | 27 Nov 2024 | 6 JPGs | n/a |
| **Sancta** | Oct–Nov 2024 | 6 JPGs | n/a |
| **Grecale** | Oct–Nov 2024 | 12 JPGs | n/a |
| **Josh & Julie** | **August 2022** | 3 JPGs, 25 Aug 2022 | ❌ |
| **Noah & Jessie** | **August 2023** | 14 JPGs, 27–28 Aug 2023 | ❌ |

> Casa Irrera has **two** capture dates (8 Oct and 22 Nov 2024) while the page
> says "about two and a half hours on site". Either two sessions, or the 2.5 h
> refers to one of them. **CONFIRM before publishing a date.**

## Client naming — resolved

**The food client is Love's Sushi, not Kajiki.** The source folder is
`FOOD/FOTO/LOVE'S SUSHI`; no Kajiki folder exists anywhere in the archive, and
the site's files are `loves-sushi-*`. Three carousel labels said "Kajiki" —
corrected in EN and IT.

## Cettina Bucca credited posts — resolved

Verified on Instagram: `DQea78bCFxU` (FW25 look, 31 Oct 2025) tags
`@francescolarosa.ph` inside a collaborator list. The page's body copy — "four of
the brand's published Reels tag Francesco La Rosa… the strongest is this one,
where the caption credits the video to him by name" — was **already correct**.
The fact panel's "Five credited posts" was the error. Corrected.

Two verified reels remain unpublished on the site: `DQea78bCFxU` and
`DQLxCkIjUgU` (FW25 outfits, 24 Oct 2025).

## A correction to the STEP 25 audit

The Saints 19 July post `DbL4oClOja5` was recorded as "published by client". The
live caption reads **"𝐏𝐡: @francescolarosa.ph"**, and the page already said so.
**Saints carries three explicit credits, not two.** The earlier misclassification
came from an audit script that paired each permalink with the next `field-hint`
in document order, which stopped being the same section after the STEP 24
re-ordering. No page change was required.

Corrected proof register:

| Post | Client | Level |
|---|---|---|
| `DaYbY7SObVy` | Saints | **L1 explicit credit** |
| `Dbq2T6KuiI3` | Saints | **L1 explicit credit** |
| `DbL4oClOja5` | Saints | **L1 explicit credit** |
| `DcNreUHtRUw` | Cettina Bucca | **L1 explicit credit** ("Video @francescolarosa.ph") |
| `DGVCH86Nq2V` | Cettina Bucca | L3 published by client |
| `DcQ4l__jxqE` | Atarashi | L3 published, per-slide attribution |
| `DUMbyhUkaUw` | NYBF | L2 collaboration |
| `DUd11liERTU` | NYBF | L2 collaboration |

**4 × L1 · 2 × L2 · 2 × L3.**

## Still open — needs Francesco

| # | Question | Why it blocks copy |
|---|---|---|
| 1 | **Luxury Story location.** The YouTube title is *"Lucrezia e Giulio, Castelluccio di Noto, Wedding 2023"*, but the page says the final day was at a villa inside the **Riserva dello Zingaro** — which is ~300 km away, in Trapani province. Vendicari is the reserve near Noto. Which is right? | A named location is currently possibly wrong on a flagship page |
| 2 | **Was the Luxury Story film published or not?** The page says it "was never posted publicly", yet it is embedded from YouTube (`b7HuCW_x3UQ`, 16:42, 72 views, ~2 years old, no description). Unlisted-but-embedded is plausible; the sentence as written still contradicts the page | A factual self-contradiction on the same screen |
| 3 | Casa Irrera — **which magazine**, and was the feature published? | Would convert an L7 into an L5 |
| 4 | Saints season year | Dates given without a year |
| 5 | Should Francesco's father's role as Atarashi event designer be disclosed? | Relationship disclosure, editorial call |

## Video weight audit

The homepage hero is **not** the problem. `showreel.mp4` is 14.1 MB at 1920×1080
/ 3.0 Mbps for 39 s — a reasonable encode. The over-weight assets are card
previews encoded at 3–4× the bitrate they need:

| File | Size | Encode | At ~2 Mbps | Saving |
|---|---|---|---|---|
| `cettina-bucca/outfit-car.mp4` | 26.1 MB | 1600×900 @ **7.59 Mbps** | ~6.9 MB | −19.2 MB |
| `nybf/fellow-pov.mp4` | 24.3 MB | 1600×900 @ **6.28 Mbps** | ~7.7 MB | −16.6 MB |
| `cettina-bucca/maggio.mp4` | 18.2 MB | 1600×900 @ **8.45 Mbps** | ~4.3 MB | −13.9 MB |
| `white-milano/recap.mp4` | 20.2 MB | 1600×900 @ 4.45 Mbps | ~9.1 MB | −11.1 MB |
| `cettina-bucca/beach.mp4` | 12.4 MB | 960×1706 @ 5.16 Mbps | ~4.8 MB | −7.6 MB |

**~68 MB recoverable from five files** at the ATM reference standard (1.8 Mbps),
with no visible quality loss at card size. All five are lazy-loaded, so this is a
scroll-cost fix, not an LCP fix — P2, not P0.

Eager loading was audited and is **correct**: only three videos load eagerly
(`showreel` on the homepage, `atm-natale` on the ATM hero, `saints-sunset` on the
Saints hero) and all three are above-the-fold heroes.
