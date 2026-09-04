# Image SEO Content Map

**Current state: 249 masters, 840 optimized variants, 494 `<img>` elements, 0
without alt text.** The technical layer is done. This document governs the
*semantic* layer.

## The model

For every significant image: **WHO · WHAT · WHERE · WHEN · WHY · MEDIUM ·
RELATIONSHIP** — but only the components that are actually verified.

```
BAD       "Atarashi event photography — 47"
BETTER    "Atarashi festival crowd and stage, Messina, Sicily"
BEST      "Atarashi festival crowd under the checkerboard roof at Arena
           Capo Peloro, Messina"
```

## Tiering — not every image gets the same treatment

| Tier | Applies to | Alt policy |
|---|---|---|
| **T1 — hero / OG / schema image** | 1–2 per page | Full semantic sentence: subject, action, place, project, year |
| **T2 — section image** | 1–5 per page | Subject + place or project. Must explain its own chapter |
| **T3 — gallery** | 14–35 per page | Concise, meaningfully distinct. **Do not manufacture false uniqueness** |
| **T4 — decorative layer** | backgrounds | Descriptive alt on the `<img>`, `aria-hidden` on the wrapper (existing pattern) |

## Per-project entity strings

Use these as the vocabulary; assemble only verified parts.

| Project | WHO | WHERE | WHEN | MEDIUM |
|---|---|---|---|---|
| Atarashi | artists, crowd, Defenders, DJ booth | Capo Peloro / Milazzo / Bellavista / La Punta, Messina | **unconfirmed** | event photography / film still |
| Cettina Bucca | collection, accessories, models | Messina · Colombo, Sri Lanka | 2023– · Feb 2025 | fashion film still / fashion photography |
| WHITE Milano | garments, designers, stands | Tortona, Milan | **unconfirmed** | fashion trade-show photography |
| Saints | DJ, crowd, tram of the night | Messina · Ikesia Beach Club | **unconfirmed** | nightlife photography / film still |
| Luxury Story | Lucrezia & Giulio, guests, band | Sicily · Riserva dello Zingaro | 2023 | wedding film still |
| Sicilian Ceremony | Luna & Leonardo, family | Noto · Castelluccio di Noto · Vendicari | 2026 | wedding film still |
| Ondrej & Dominika | the bride, the couple, guests | outside Prague | 2023 | wedding film still |
| F1 Barcelona | Räikkönen, crews, cars | Circuit de Barcelona-Catalunya | 2020 | motorsport photography |
| Aston Martin | the car | Old Town Square, Prague | 2021 | automotive photography |
| ATM Messina | buses, tram, drivers, staff | Messina · Villafranca Tirrena | **unconfirmed** | institutional film still |
| Casa Irrera | desserts, pastry | Messina | **unconfirmed** | product photography |
| FONDENTE | Lena, Paola | — | 2025 | film still |

## Hard rules

1. **Never** add "Francesco La Rosa" to an alt purely for SEO. It belongs in
   proof-bearing alts (client-published fallbacks, credited work) and heroes.
2. **Never** claim a venue that is not verified for that specific frame.
3. **Never** identify a person unless identity is established — Räikkönen
   qualifies (suit text); the F1 silhouette does not.
4. **Never** repeat identical alt text across two images on the same page.
5. Do not keyword-stuff. One place reference per alt is enough.

## Known defect
`food.html` — carousel labels say **Kajiki**, filenames say `loves-sushi-*`.
Alts were corrected against the actual images in STEP 24, but the client naming
is still unresolved (P0-6).

## Filenames
Semantic naming is already the standard: `f1-barcelona-2020-kimi-raikkonen-pit-lane.jpg`,
`atm-messina-safety-campaign-poster.jpg`, `frame-band-procession.jpg`. Keep it.
Legacy numbered names remain only on `club-barman-0NN` and `f1-0N` — acceptable,
since page context carries those.
