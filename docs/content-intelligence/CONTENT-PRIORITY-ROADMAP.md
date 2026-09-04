# CONTENT PRIORITY ROADMAP
What to do, in order. Nothing here has been implemented — this system is the intelligence
layer, and execution is the next step.

**Rule: do not touch P3 while P0 or P1 is open.**

---

## P0 — Factual and structural inconsistencies
*Fix these before any other content work. Total effort: a few hours, plus one conversation.*

| # | Action | Pages | Blocked on |
|---|---|---|---|
| 1 | **Resolve D-01.** Is the Luxury Story YouTube film a permitted portfolio edit? Then either reword "was never posted publicly" or remove the embed — **in both languages simultaneously** | `luxury-story.html`, `it/luxury-story.html` | **Francesco's answer** |
| 2 | **Fix D-03.** Replace the English closing CTA with "Collaboriamo." | `it/atm-messina.html`, `it/fondente.html` | — |
| 3 | **Fix D-02.** Make the language claim consistent: Italian, English **and Spanish**, everywhere | `llms.txt`, plus `knowsLanguage` in Person schema | — |
| 4 | **Remove D-15.** Delete the "Form endpoint pending" paragraph from the HTML — the Formspree endpoint is live and the notice only disappears with JavaScript | `contact.html:205`, `it/contatti.html:205` | — |
| 5 | **Cherrydeck.** Add `francescolarosaph.com` to the existing profile | off-site | Francesco's login |
| 6 | **siculishh.it.** Ask them to republish a credited post with a real link | off-site | outreach |

## P1 — Positioning and authority
*This is where the return actually is. The site's problem is not copy quality.*

| # | Action | Detail |
|---|---|---|
| 7 | **Build the entity graph (D-04, D-05).** One canonical `Person` with `@id: …/#francesco`; every `CreativeWork`, `VideoObject` and `Movie` references it instead of re-declaring an anonymous person. Add `knowsLanguage`, and add GBP, LinkedIn, Facebook, Cherrydeck and the Gazzetta URL to `sameAs` | 54 pages, mechanical. **The single highest-leverage change in this system** — it directly attacks the position-26 branded query |
| 8 | **Publish the Gazzetta del Sud feature (D-09).** `/it/chi-sono.html` first, `/about.html` second | An Italian-language, journalist-written feature about a Messina photographer in a Messina daily — the exact citation that separates him from the Catania namesake. It is currently invisible on the site |
| 9 | **Unify narrative voice to first person (D-06).** 11 pages currently in third person | Do this *before* any other copy editing, because every later edit inherits the voice |
| 10 | **Rewrite `/motorsport.html` (D-07).** 22 words → a real hub | The thinnest page on the site, leading into its strongest visual asset (24 F1 frames) and a premium automotive brand. Both languages |
| 11 | **Publish the two unused Cettina Bucca reels (D-08)** | `DQea78bCFxU`, `DQLxCkIjUgU` — verified proof, already documented, free |
| 12 | **Surface CONTINUITY as an explicit theme** ([COPY-DNA-LIBRARY](COPY-DNA-LIBRARY.md) M6) | Six relationships prove repeat business and the site never says so in one place. This is the strongest commercial argument available and it is currently scattered |
| 13 | **Outreach: Cettina Bucca website credit + link** | Four credited reels already exist — the easiest ask on the list |

## P2 — SEO and GEO

| # | Action | Detail |
|---|---|---|
| 14 | Add `locationCreated` + `dateCreated` to every `CreativeWork` | Not one case study currently carries either. Every geographic fact lives in prose and none in machine-readable form |
| 15 | Fix video schema (D-11) | ISO-8601 dates; point the Luxury Story `thumbnailUrl` at the real poster instead of the brand OG image |
| 16 | Fix the internal link graph (D-10, D-14) | FONDENTE has **1** inbound link (140K views, `Movie` schema); ATM Messina has **1** (serves the best commercial query); Dose, Smashers and NYBF have 2 each. Link them from `about`, `photography`, and the Continue Exploring blocks of related case studies |
| 17 | Correct Italian grammar and anglicisms (D-12, D-13) | `it/servizi.html` headings; *documentaristi → documentaristici*; *accredito → accreditamento FIA*; the `it/motorsport.html` meta description |
| 18 | Fix the IT homepage positioning drift | "in giro con la macchina fotografica dal 2018" → "fotografo e filmmaker dal 2018", matching its own About page |
| 19 | Expand `formula-1-barcelona.html` | 24 exceptional frames carried by 123 words. The technical vocabulary is already there — give it a paragraph |
| 20 | Outreach: atarashigoestosicily.com; ask Gazzetta for a hyperlink | Converts an L5 mention into an L6 backlink |
| 21 | Ask Maugeri, Patania and the Smashers founder for Google reviews | One review is already the strongest human proof on the site. Three would change the GBP |

## P3 — Editorial refinement

| # | Action |
|---|---|
| 22 | Rewrite the four thin Aston Martin alts, and their Italian counterparts (D-16) |
| 23 | Add the city to food-hub alts where verified |
| 24 | Lift the weakest third of the 37 Club Barman alts to the level of the best |
| 25 | `about.html`: anchor "seven years ago" to 2018; split "Manifesto Market, Prague" so it does not read as two entries |
| 26 | Give `photography.html` a method statement of its own — the h1 "Editorial, not staged." is the best line on the site and is never developed |
| 27 | Expand `dose.html` and `club-barman.html` prose to match their media weight (1 and 37 images respectively) |

## P4 — Do not spend time here

- `ImageObject` schema on galleries
- Renaming deployed image files
- Any new location page
- Adding `VideoObject` to portfolio clips
- Rewriting copy that is already specific and true

---

## Suggested sequencing

| Pass | Contents | Why in this order |
|---|---|---|
| **A — Truth** | Items 1–4 | The site must stop contradicting itself before anything else is written |
| **B — Machine-readable identity** | Items 7, 14, 15 | Structural, mechanical, no copywriting risk, highest leverage |
| **C — Voice** | Item 9 | Must precede every later copy edit |
| **D — The real copy pass** | Items 10, 11, 12, 17, 18, 19 | Now safe, because voice and facts are settled |
| **E — Authority** | Items 5, 6, 8, 13, 20, 21 | Runs in parallel throughout; it is outreach, not editing |
| **F — Refinement** | Items 22–27 | Last |

## What must remain untouched

- The Google review, in full, in both languages
- The pricing transparency on `services.html`
- The role honesty on `atm-messina.html` and FONDENTE
- The refusal to claim a WHITE Milano, Smashers or NYBF credit
- The 27/27 EN↔IT structural parity
- The alt-text standard — 15-word median, zero placeholders
- The specificity throughout: cameras, hours, guest ratios, venues, and why a relationship ended
