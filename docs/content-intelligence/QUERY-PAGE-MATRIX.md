# QUERY → PAGE MATRIX
Consolidates and supersedes `docs/keyword-page-map.md` (28 Aug) and `docs/query-page-matrix.md`
(3 Sep). Those files remain valid as historical measurements; this one is the assignment rule.

**Binding rule:** intent is mapped to a page that already deserves to rank. No page is created
to chase a keyword, and no keyword is inserted into copy that reads better without it.

---

## 1. What the data actually says (GSC, 28 days to 1 Sep 2026)

4 clicks · 82 impressions · 4.9% CTR · average position 10.5 · 17 of 52 URLs indexed.

| Query | Impr. | Position | Assigned page | Status |
|---|---|---|---|---|
| francesco la rosa | 7 | weak | `/` | **The branded query underperforms.** At least two other Francesco La Rosas work in video in Sicily, one Catania-based with real press. This is an entity problem, not a copy problem |
| videomaker messina | 4 | **2.0** | `/it/video.html` | The one commercial query with traction. Defend it — do not touch the page's keyword density |
| new york business fellowship | 3 | 5.0 | `/new-york-business-fellowship.html` | Serving already |
| fotografo messina vicino a me | 2 | — | `/it/fotografia.html` | The Google Business Profile is the lever here, not the site |
| la rosa francesco | 2 | 2.5 | `/` | Same disambiguation issue |
| produzione video messina | 1 | — | `/it/video.html` | Matches the GBP category exactly; ATM Messina is the proof |
| fotografia | 1 | — | — | **Do not chase.** Too broad, no commercial value |
| francesco la rosa facebook | 1 | — | — | Navigational. No action |

**Three facts follow from this and shape everything below.**
1. Italian carries the impressions — 6 of the top 9 landing pages are `/it/`.
2. The branded query is the weakest area, and it is fixed with citations, not paragraphs.
3. 32 URLs are "discovered – currently not indexed", with **0** 404s and **0** "crawled – not
   indexed". That is crawl priority, which is bought with external links.

## 2. Assignment matrix

### Cluster 1 · Brand / identity — **P1, authority-bound**

| Query | Primary | Secondary | Supporting proof | Note |
|---|---|---|---|---|
| francesco la rosa | `/` | `/about.html` | Google review, Gazzetta feature *(not yet on site)* | Needs `sameAs` + `@id` + press, not copy |
| la rosa francesco | `/` | `/about.html` | as above | |
| francesco la rosa fotografo messina | `/it/` | `/it/chi-sono.html` | GBP | The disambiguating form — Messina, not Catania |
| francesco la rosa videomaker | `/it/video.html` | `/` | ATM Messina | Matches the GBP category verbatim |

**The four signals that separate him in the index and must never be diluted:** *Messina* (not
Catania) · *photographer **and** filmmaker* · *since 2018* · the GBP name *"Francesco La Rosa -
Fotografo e Videomaker"*.

### Cluster 2 · Wedding — **the largest commercial opportunity**

| Query | Primary | Secondary | Supporting case study |
|---|---|---|---|
| destination wedding photographer Sicily | `/wedding.html` | `/photography.html` | Sicilian Ceremony, Luxury Story |
| destination wedding videographer Sicily | `/wedding.html` | `/videography.html` | **Luxury Story** |
| luxury wedding photographer Sicily | `/wedding.html` | — | Luxury Story, Sicilian Ceremony |
| documentary wedding photographer Sicily | `/wedding.html` | — | Ondrej & Dominika |
| wedding videographer Messina | `/it/matrimoni.html` | `/it/video.html` | Sicilian Ceremony |
| fotografo matrimonio Sicilia | `/it/matrimoni.html` | `/it/fotografia.html` | Sicilian Ceremony |
| videografo matrimonio Sicilia | `/it/matrimoni.html` | — | Luxury Story |
| Noto wedding videographer | `/sicilian-ceremony.html` | `/wedding.html` | Sicilian Ceremony |
| Prague wedding videographer | `/ondrej-dominika.html` | `/wedding.html` | Ondrej & Dominika |
| international wedding photographer Sicily | `/wedding.html` | — | Ondrej & Dominika (cross-cultural) |

Each wedding page must prove something **different** — see
[COPY-DNA-LIBRARY.md](COPY-DNA-LIBRARY.md) §4. If they all say "documentary and cinematic",
they compete with each other rather than covering the cluster.

### Cluster 3 · Fashion — **best external proof, no search signal yet**

| Query | Primary | Secondary | Supporting |
|---|---|---|---|
| fashion photographer Sicily | `/photography.html#brand-fashion` | `/cettina-bucca.html` | 4 credited reels |
| fashion videographer Italy | `/videography.html` | `/cettina-bucca.html` | Cettina, WHITE |
| fashion film Sicily | `/videography.html` | `/cettina-bucca.html` | Collection films |
| fashion photographer Milan | `/white-milano.html` | `/photography.html` | WHITE Milano |
| fashion trade show photographer Milan | `/white-milano.html` | — | WHITE Milano |
| Italian fashion brand content | `/cettina-bucca.html` | — | 3-year relationship |
| Colombo Fashion Week | `/cettina-bucca.html` | — | Credited reel + alpifashionmagazine corroboration |

### Cluster 4 · Events, nightlife, culture

| Query | Primary | Secondary | Supporting |
|---|---|---|---|
| event photographer Sicily | `/photography.html#events` | `/atarashi.html` | Atarashi client publication |
| event videographer Sicily | `/videography.html` | `/saints.html` | 3 Saints credits + Google review |
| music event videographer Messina | `/videography.html` | `/atarashi.html` | Atarashi |
| nightlife photographer Messina | `/saints.html` | `/dose.html` | Saints credits |
| festival photographer Italy | `/atarashi.html` | — | Atarashi |
| fotografo eventi Messina | `/it/fotografia.html` | `/it/saints.html` | Saints |

### Cluster 5 · Motorsport & automotive — **strongest asset, weakest page**

| Query | Primary | Secondary | Supporting |
|---|---|---|---|
| Formula 1 photographer Barcelona | `/formula-1-barcelona.html` | `/motorsport.html` | 24 frames, FIA accreditation |
| F1 paddock photographer | `/formula-1-barcelona.html` | — | Same |
| motorsport photographer Italy | `/motorsport.html` | `/formula-1-barcelona.html` | **Page is 22 words — D-07** |
| automotive photographer Prague | `/aston-martin-peroni.html` | `/motorsport.html` | Aston Martin |
| Aston Martin photographer | `/aston-martin-peroni.html` | — | Aston Martin |

### Cluster 6 · Food & hospitality

| Query | Primary | Secondary | Supporting |
|---|---|---|---|
| food photographer Messina | `/food.html` | `/casa-irrera.html` | Casa Irrera, Smashers |
| restaurant photographer Sicily | `/food.html` | `/smashers.html` | Sancta, Grecale, Loves Sushi |
| fotografo food Messina | `/it/food.html` | `/it/casa-irrera.html` | Casa Irrera |
| cocktail / bar content Messina | `/club-barman.html` | `/food.html` | Club Barman, Messina Cocktail Week |

### Cluster 7 · Corporate & institutional — **new and underexploited**

| Query | Primary | Secondary | Supporting |
|---|---|---|---|
| produzione video Messina | `/it/video.html` | `/it/atm-messina.html` | **ATM Messina** |
| video istituzionale Messina | `/it/atm-messina.html` | `/it/video.html` | ATM — 4 campaigns |
| corporate video New York | `/new-york-business-fellowship.html` | `/videography.html` | NYBF collaborations |
| video aziendale Sicilia | `/it/video.html` | `/it/atm-messina.html` | ATM, ASM |

### Cluster 8 · Cinematography

| Query | Primary | Supporting |
|---|---|---|
| director of photography Sicily | `/videography/short-films/fondente/` | FONDENTE, Movie schema, 140K views |
| short film cinematographer Italy | `/videography/short-films/fondente/` | FONDENTE |

## 3. Queries the site should NOT target

| Query | Why not |
|---|---|
| `fotografia`, `photography` | Informational, no commercial value, unwinnable |
| `wedding photographer Italy` (unqualified) | National head term against agencies and directories with years of authority |
| `fotografo matrimonio` (unqualified) | Same |
| Any "photographer in [city he has visited once]" | Would require location pages, which are explicitly forbidden here |
| `francesco la rosa facebook` | Navigational to another property |
| Camera / gear review terms | Not the business |

## 4. Queries that need *authority*, not content

These already have a page that deserves them. Writing more will not move them.

- `francesco la rosa` — needs `sameAs`, `@id`, the Gazzetta citation, GBP linkage.
- `destination wedding photographer Sicily` — needs a real backlink from a venue, planner or
  publication.
- `fashion photographer Sicily` — the four Cettina credits exist; what is missing is a link
  from the brand's website.
- The 32 unindexed URLs — need crawl priority, which comes from external links.

## 5. Queries that need content that does not exist yet

| Query | What is missing | Priority |
|---|---|---|
| motorsport photographer Italy | `/motorsport.html` has 22 words | **P1** |
| Formula 1 photographer | 24 frames carried by 123 words | P2 |
| director of photography Sicily | FONDENTE has one inbound link | P2 |
| video istituzionale Messina | ATM has one inbound link | P2 |

## 6. The rule for the next copy pass

Every page keeps **one** primary intent. Where a page currently serves two (e.g.
`/videography.html` carrying both event and corporate intent), the secondary intent is served
by a *linked case study*, not by adding a second keyword theme to the hub. That is what the
case studies are for.
