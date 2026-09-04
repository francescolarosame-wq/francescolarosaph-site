# GEO & ENTITY MAP
Places, organisations and people that appear in the work — how they connect, and how they
should be expressed in copy, alt text and structured data.

---

## 1. Why this matters more than usual here

The site's single biggest search weakness is **entity disambiguation**: at least two other
Francesco La Rosas work in video in Sicily, one of them Catania-based with genuine press
coverage. Google has to be able to tell them apart. Entities are the mechanism that does that.

Measured on 4 Sep 2026: the site has **110 JSON-LD blocks and zero `@id` anchors** (D-04).
Every case study declares a brand-new anonymous `Person` named "Francesco La Rosa" as its
`creator`. Nothing tells a search engine that all 27 of them are the same person, or that this
person is the one with the Google Business Profile in Messina.

That is the highest-leverage technical finding in this whole system.

## 2. Geographic hierarchy

```
Messina  ← home base, primary entity, must never be diluted
├─ Torre Faro / Capo Peloro / Strait of Messina   → Atarashi
├─ Villafranca Tirrena                            → ATM Messina
├─ Ikesia Beach Club                              → Saints
├─ Via Consolare Pompea (business address)        → contact.html
└─ Messina Cocktail Week                          → Club Barman

Sicily
├─ Milazzo (Horizon)                              → Atarashi
├─ Catania / Misterbianco                         → Atarashi (vehicle leg)
├─ Noto · Castelluccio di Noto                    → Sicilian Ceremony
├─ Riserva di Vendicari                           → Sicilian Ceremony
├─ Riserva dello Zingaro                          → Luxury Story
└─ Taormina                                       → ASM

Italy
└─ Milan · Tortona Fashion District · Magna Pars  → WHITE Milano
   Rome                                           → FONDENTE (festival submissions)

International
├─ Prague, Czech Republic                         → Ondrej & Dominika · Aston Martin × Peroni
│                                                    · Josh & Julie · Manifesto Market
├─ Barcelona, Spain · Circuit de Barcelona-Catalunya → Formula 1 2020
├─ New York City, USA                             → New York Business Fellowship
├─ Boston, USA                                    → Noah & Jessie
├─ Colombo, Sri Lanka                             → Cettina Bucca / Colombo Fashion Week
└─ Hong Kong & Macao                              → personal documentary work
```

**Rule:** a location is only named where the work verifiably happened there. Prague appears on
four projects because he lived there four years — that is a real geographic footprint, not a
service-area claim. Hong Kong and Macao stay labelled *personal work* and never migrate into a
commercial service list.

## 3. Organisation entities

| Entity | Type | Projects | Notes for copy |
|---|---|---|---|
| Cettina Bucca | Fashion house, est. 2010, "Italian Emotional Couture" | B | Longest relationship; the only Level 1 fashion credit |
| WHITE Milano | International fashion trade show | C, B | Never claim a credit — none exists |
| Colombo Fashion Week | International fashion week | B | Verified via credited reel + independent press |
| Italian Embassy in Colombo · Italian Design Days | Institutional context | B | Corroborated by alpifashionmagazine |
| Atarashi (@atarashi.paris / @atarashi.festival) | Music & culture brand | A | Published his photographs; not an explicit credit |
| Saints Music Atelier | Nightlife promoter | F | 3 explicit credits + the Google review |
| Dose | Nightlife identity | G | No published proof yet |
| Club Barman dello Stretto | Bartender association | H | President Claudio Patania |
| Messina Cocktail Week | Local event | H | Entry point for the relationship |
| Fabbri 1905 | Beverage brand | H | Present in frame; ⚠ confirm before naming in copy |
| Casa Irrera | High pastry house | I | ⚠ confirm the magazine |
| Smashers | Burger brand, first Italian location | D | Founder relationship since 2021 |
| New York Business Fellowship | Business immersion program | E | 2 Instagram collaborations |
| ATM Messina | Municipal public transport | P | Institutional; role = videomaker |
| ASM Taormina | Municipal services | Q | Two videos, section only |
| Aston Martin · Peroni Libera 0.0% | Automotive / beverage | N | Partnership announced Feb 2021 |
| Formula 1 · FIA · Formula Racer | Motorsport | O | Accreditation wording is fixed |
| Mercedes-AMG (W11) · Ferrari (SF1000) · Williams (FW43) · PETRONAS | Teams / cars | O | Only where visibly confirmed |
| Horcynus Festival | Film festival, Messina | M | FONDENTE premiere, 5 Aug 2025 |
| Manifesto Market Prague · Banuia · Labels | Event / fashion partners | R | Named, no case study |
| Gazzetta del Sud | Newspaper | — | **The strongest external entity, entirely absent from the site** |

## 4. People entities

| Person | Role | Where | Rule |
|---|---|---|---|
| Francesco La Rosa | Photographer & filmmaker | everywhere | The entity being disambiguated |
| Alessandro Maugeri | Founder, Saints Music Atelier | Google review, homepage + Saints | Named with role and company — correct |
| Tano Lenzo | Director, FONDENTE | FONDENTE | Direction is his; never blur |
| Claudio Patania | President, Club Barman dello Stretto | Club Barman | Named with role |
| Giovanni Gallina · Carlos Tacchetto | Founders, NYBF | NYBF | Named as client founders |
| Milan Balkins | DP/director of one sequence | videography.html | Credited with an asterisk — correct |
| Peppe Cucè | Co-author, Hong Kong & Macao | videography.html | Correct |
| Kimi Räikkönen | Driver | F1 | Identified only from visible suit text |
| Lucrezia & Giulio · Luna & Leonardo | Couples | JSON-LD / brief | ⚠ confirm whether they may be named in body copy |
| Josh & Julie · Noah & Jessie · Ondrej & Dominika | Couples | wedding pages | Already named — permission assumed from prior sessions |

## 5. The entity graph as it should be expressed in schema

This is the fix for D-04 and D-05. It is a structural change, not a content change, and it is
the single highest-leverage item in this whole system.

**Step 1 — one canonical Person node, with a stable `@id`:**

```jsonc
{
  "@type": "Person",
  "@id": "https://www.francescolarosaph.com/#francesco",
  "name": "Francesco La Rosa",
  "jobTitle": "Photographer & Filmmaker",
  "knowsLanguage": ["it", "en", "es"],          // ← currently missing entirely (D-02)
  "address": { "@type": "PostalAddress", "addressLocality": "Messina",
               "addressRegion": "ME", "addressCountry": "IT" },
  "sameAs": [
    "https://www.instagram.com/francescolarosa.ph/",
    "https://www.youtube.com/@francescolarosa18",
    "<Google Business Profile URL>",             // ← the disambiguation anchor
    "<LinkedIn>", "<Facebook>",
    "https://cherrydeck.com/francescolarosa.ph",
    "<Gazzetta del Sud article URL>"             // ← editorial corroboration
  ]
}
```

**Step 2 — every other node references it instead of re-declaring a person:**

```jsonc
"creator": { "@id": "https://www.francescolarosaph.com/#francesco" }
```

**Step 3 — case studies gain their real geography and time:**

```jsonc
"locationCreated": { "@type": "Place", "name": "Circuit de Barcelona-Catalunya, Barcelona, Spain" },
"dateCreated": "2020",
"about": [ { "@type": "Organization", "name": "Formula 1" } ]
```

Today, **not one** `CreativeWork` on the site carries `locationCreated` or `dateCreated`. Every
geographic fact in this document exists in prose and in alt text, and none of it exists in a
form a machine reads as a place.

**Do not add:** `Review` or `AggregateRating` markup for the single Google review. One review
marked up for stars is exactly the self-serving pattern the existing documentation rules out,
and the review already does its job as visible, attributed, linked human proof.

## 6. Entity clusters for internal linking

Links must carry contextual value. These clusters are the justification.

```
FASHION      Cettina Bucca ↔ WHITE Milano ↔ Colombo Fashion Week
             (the causal chain: Colombo produced the WHITE relationship — already stated
              in copy on both pages, correctly)

WEDDING      Luxury Story ↔ Sicilian Ceremony   (the same family, three years apart —
                                                 the strongest link on the site)
             Luxury Story ↔ Ondrej & Dominika   (destination discretion, two countries)

EVENTS       Atarashi ↔ Saints ↔ Dose ↔ Club Barman
             (Messina nightlife and culture ecosystem)

PRAGUE       Aston Martin × Peroni ↔ Ondrej & Dominika
             (the client who came back for his own wedding — currently stated on
              Ondrej's page; it should be visible from the Aston Martin page too)

MOTORSPORT   Formula 1 Barcelona ↔ Aston Martin × Peroni ↔ /motorsport.html

FILM         FONDENTE ↔ /videography.html#short-films ↔ cinematography language

INSTITUTIONAL ATM Messina ↔ ASM Taormina ↔ /videography.html#corporate
```

### Measured link weaknesses (D-10, D-14)

| Page | Inbound internal links | Comment |
|---|---|---|
| `videography/short-films/fondente/` | **1** | 140K views, full Movie schema, one route in |
| `atm-messina.html` | **1** | Serves the best-performing commercial query |
| `dose.html` | 2 | |
| `smashers.html` | 2 | |
| `new-york-business-fellowship.html` | 2 | Already ranking at position 5 |
| `atarashi.html` | 10 | Correctly weighted |

The fix is not "more links". It is that four pages carrying real commercial or authority value
sit at the edge of the graph while hub pages link to each other repeatedly.
