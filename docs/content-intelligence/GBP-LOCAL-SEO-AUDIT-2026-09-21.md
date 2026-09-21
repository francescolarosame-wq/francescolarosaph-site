# Google Business Profile + local SEO audit — 21 September 2026

Read-only pass. **Nothing on the profile was changed.** Every value below was
read live from the owner view of the profile, Google Maps, Search Console and
the repository on 2026-09-21. Where a field was opened in an editor to read the
dropdown, the editor was cancelled without saving.

Place ID: `ChIJNSejUqfadagRSbTG02PTbUw` · listing verified, managed by this account.

---

## 1. Current state — field by field

| Field | Current value | Change? | Reason | Risk |
|---|---|---|---|---|
| Business name | `Francesco La Rosa- Fotografo e Videomaker` | **Decide** | Contains a descriptor ("Fotografo e Videomaker"). Google's guideline is the real-world name only; the site, Instagram and every asset use plain **Francesco La Rosa**. Descriptors in names are the most common suspension trigger. Also has a stray hyphen glued to "Rosa-" | Medium if left; low if changed (it only gets *more* compliant) |
| Primary category | `Servizio di produzione di video` | **Decide** | The **only** category on the profile. Set as primary in July 2026 at Francesco's own request ("most paid work is video"). The site is now photography-first and the profile is invisible on every photography query (see §8) | Category change triggers a re-review; usually approved within days |
| Secondary categories | **none** | **Yes** | In July the profile carried Fotografo, Fotografo per matrimoni, Fotografo commerciale, Servizio di editing video, Web designer. **All are gone.** Whether Google dropped them in review or they were removed later is unknown — the live state is one category | Low |
| Address | Hidden — service-area business ("solo servizi a domicilio") | No | Correct for a photographer without a client-facing studio | — |
| Service area | `Messina ME, Italia` only | **Yes** | Work is verifiably done across Sicily (Noto, Taormina, Milazzo, Capo Peloro) and abroad. Sicily-wide areas are honest; a city list is not | Low |
| Phone | `340 188 0970` · SMS enabled | No | — | — |
| Website | `http://www.francescolarosaph.com/` | **Yes** | `http`, not `https`. Redirects, but every other surface uses https | Nil |
| Social links | Instagram, LinkedIn | Add YouTube | The site's `sameAs` carries YouTube; GBP doesn't | Nil |
| Hours | Mon–Sat **24 h**, Sun closed | **Decide** | "Open 24 hours" on a photographer reads as spam and is the kind of thing reviewers flag. Options: realistic hours, or no hours at all (appointment-based) | Low |
| Special hours | none | No | — | — |
| Opening date | 30 Nov 2023 | Flag | Site says "professional since 2018". Probably the P.IVA date — fine if so, but it's an inconsistency a reader can see | Nil |
| Description | 750-char Italian text — **see §4** | **Yes** | Leads with social-media video, political campaigns, real estate, nightlife, social media management. None of that is on the site. No weddings, fashion, motorsport, no international scope | Nil |
| Services | 15, **all video**, all from Google's default list | **Yes** | Includes things never offered: real-estate videography, voice-over, family videos, video marketing. Zero photography services | Low |
| Photos | ~12 photos + 3 videos, last upload 18 days ago, every item "<100 views" | Curate | Food/pastry dominates (~6). Weddings ×2, motorsport ×2. **No fashion, no events, no photo of Francesco at work, no brand/commercial** | Nil |
| Reviews | **2**, both 5★, **both unanswered** | Reply | Alessandro Maugeri (Saints, 3 wks ago) and Carmine Filice (Local Guide, 2 wks ago — "worked with Francesco at a UK wedding": reads as a colleague, not a client) | Nil |
| Attributes | Only unset option labels visible; nothing wrong set publicly | No | — | — |
| Products / bookings | none | No | Not relevant to the business model | — |
| Verification | Verified | — | — | — |
| Warnings / pending edits | none visible | — | — | — |
| Duplicates | none — the only other "La Rosa Francesco" on Maps is a closed tobacconist | — | — | — |
| Profile strength | "Completa le informazioni" prompt showing | — | Google's own meter says incomplete | — |
| Performance (Apr–Sep) | 423 profile views · **6 interactions** · <50 search appearances | — | Discovery terms: "francesco la rosa piazza armerina" (a different person), "videomaker messina" | — |

---

## 2. Category — what the dropdown actually offers

Verified live in the editor (cancelled, not saved): typing "Fotografo" returns
**Fotografo · Fotografo aereo · Fotografo commerciale · Fotografo per matrimoni**.
July testing (recorded in memory) also confirmed **Servizio di editing di video**
and **Web designer** exist, and that **"Videomaker" / "Videografo" do not exist**
as categories — "Servizio di produzione di video" is the closest.

Not confirmed to exist: a fashion-photographer or event-photographer category.
The editor's autocomplete only renders on the first query per session, so
exhaustive enumeration wasn't possible; nothing beyond the four above should be
assumed.

### Proposal

| | Current | Proposed |
|---|---|---|
| **Primary** | Servizio di produzione di video | **Fotografo** |
| Secondary 1 | — | Fotografo per matrimoni |
| Secondary 2 | — | Fotografo commerciale |
| Secondary 3 | — | **Servizio di produzione di video** (kept, demoted) |

Four categories, all real, all on the site. Not proposed: Fotografo aereo
(drones are rental gear, not a service line), Web designer (not on the site),
Servizio di editing video (a sub-task, covered by video production).

**This needs your decision, not mine.** In July you moved video to primary
because that's where the money was. If that's still true, keep it primary and
add the three photography categories underneath — you'd still gain visibility on
photography queries. If the site's photography-first positioning now reflects
the business, flip it.

---

## 3. NAP consistency

| Surface | Name | Phone | Address | Notes |
|---|---|---|---|---|
| GBP | Francesco La Rosa- Fotografo e Videomaker | 340 188 0970 | hidden (SAB) | |
| Site footer (all pages) | Francesco La Rosa | **none** | Via Consolare Pompea 1871, Messina | Site publishes a street address GBP hides |
| Site contact page | — | **none, no email** | same | Form only |
| Site JSON-LD `ProfessionalService` | Francesco La Rosa — Photography & Filmmaking | **none** | street address | No `telephone`, no `sameAs`, no `@id` |
| Site JSON-LD `Person` | Francesco La Rosa | — | Messina, ME | `sameAs`: Instagram, YouTube, Maps, Cherrydeck — **no LinkedIn** |
| Instagram bio | Francesco La Rosa 🇮🇹 | — | "Messina, Italia" | "Available Video e Foto" |
| LinkedIn headline | "Specialista fotografo presso Formula 1" | — | — | **Overstates**: the site says FIA accreditation, not team employment |

Inconsistencies: (1) phone exists only on GBP; (2) address exists only on the
site; (3) LinkedIn is on GBP but not in site `sameAs`; (4) YouTube is on the
site but not on GBP; (5) the LinkedIn headline contradicts the site's own
carefully-verified F1 wording.

---

## 4. Description

**Current (750 chars, IT):**
> Fotografo e videomaker professionista a Messina. Realizzo video per social media, campagne politiche, real estate, eventi e locali notturni. Specializzato in produzione video per Instagram, Facebook e web, con color grading professionale in DaVinci Resolve. Offro anche gestione social media e strategie di contenuto per aziende, candidati e privati. Consegna rapida e risultati su misura per ogni cliente. Contattami per un preventivo gratuito.

Problems: political campaigns, real estate, nightlife, social-media management —
none on the site. No weddings, no fashion, no motorsport, no Sicily/international
scope, no brands or couples. It describes a different business.

**Proposed (IT, ~700 chars — the profile's language is Italian):**
> Francesco La Rosa è fotografo e filmmaker con base a Messina, in Sicilia. Lavora su matrimoni e destination wedding, moda ed editoriale, campagne per brand, eventi e motorsport, con un approccio documentaristico: la giornata non viene messa in pausa per la camera. Fotografia e video nascono spesso insieme, dalla stessa persona. Ha lavorato per case di moda siciliane fino alla Colombo Fashion Week, con accredito FIA nel paddock di Formula 1, per aziende pubbliche e per coppie che arrivano in Sicilia da tutto il mondo. Disponibile in Sicilia, in Italia e all'estero, in italiano, inglese e spagnolo.

Every clause maps to a page on the site. No superlatives, no "migliore", no
keyword list.

---

## 5. Services — proposed list

Twelve real services, each on the site. Replaces the 15 default video ones.

| Category | Service | Description (IT) |
|---|---|---|
| Fotografo | Fotografia di matrimonio | Reportage documentaristico del matrimonio, in Sicilia e destination |
| Fotografo | Fotografia di moda ed editoriale | Lookbook, campagna e sfilata per case di moda e brand |
| Fotografo | Fotografia per brand e commerciale | Immagini per campagne, prodotto e comunicazione aziendale |
| Fotografo | Fotografia di eventi | Copertura di eventi, festival e serate dall'interno della produzione |
| Fotografo | Fotografia motorsport e automotive | Paddock accreditato, dettaglio tecnico e campagne auto |
| Fotografo | Fotografia food e prodotto | Piatti, pasticceria e prodotto per ristoranti e riviste |
| Fotografo | Ritratti | Ritratto professionale e lifestyle |
| Video | Film di matrimonio | Film documentaristico del matrimonio, montaggio e color grading |
| Video | Video per brand e campagne | Branded content e contenuti per social e web |
| Video | Video di eventi | Recap e copertura video di eventi e festival |
| Video | Video istituzionale e corporate | Comunicazione per aziende ed enti pubblici |
| Video | Direzione della fotografia | DP e camera per cortometraggi e progetti narrativi |

No prices — the site's services page carries them; duplicating them in GBP
creates a second place to keep in sync.

Dropped from the current list: video marketing, real-estate videography,
voice-over, family videos, aerial videography, pre/post-production as separate
lines.

---

## 6. Media library — proposed structure

Currently: cover (dark), logo, ~6 food, 2 wedding, 2 motorsport, 3 videos. All
under 100 views each. Missing entirely: fashion, events, brand, Francesco himself.

Proposed 12–15 items, in this order of priority, all from existing site assets:

1. **Cover** — a working frame: F1 paddock overhead or Aston Martin Old Town Square (identity, not food)
2. **Francesco at work** — 1 frame (the About page's on-set image)
3. **Weddings** ×3 — Sicilian Ceremony street banquet, Luxury Story band procession, Ondrej & Dominika poppy field
4. **Fashion** ×2 — Cettina Colombo runway, WHITE Milano
5. **Motorsport** ×2 — keep the existing two
6. **Events** ×2 — Atarashi, Saints
7. **Brand / commercial** ×1 — Club Barman
8. **Food** ×2 — keep the two strongest Casa Irrera frames, remove the other four
9. **Video** — keep the 3, replace the FLR logo loop with a real film still if possible

Nothing new needs to be shot; nothing gets uploaded twice.

---

## 7. Search Console (since launch, 20 Aug – 19 Sep)

12 clicks · 384 impressions · 3.1% CTR · avg position 8.4.
**48 pages indexed** (was 17 on 3 Sep) · 4 "redirect" (http/non-www, expected) · 4 "discovered, not indexed" · **0 404s**. Sitemap: 52 URLs, read 17 Sep, OK.

| Local query | Impr. | Position | Status |
|---|---|---|---|
| videomaker messina | 9 | 2.3 | strongest |
| fotografo messina | 4 | 3.0 | appears |
| fotografo messina vicino a me | 2 | 1.5 | appears |
| videomaker vicino a me | 2 | 1.0 | appears |
| produzione video messina | 1 | 1.0 | appears |
| video matrimonio messina | 1 | 8.0 | appears |
| fotografo messina moda | 0 | — | **absent** |
| fotografo messina matrimonio | 0 | — | **absent** |
| fotografo moda sicilia | 0 | — | **absent** |
| fashion photographer messina | 0 | — | **absent** |
| wedding photographer messina | 0 | — | **absent** |
| photographer messina | 0 | — | **absent** |
| fotografo eventi messina | 0 | — | **absent** |

Where the site appears it ranks 1–3. It simply doesn't appear on anything
photography-specific.

---

## 8. Local ranking — Google Maps, first 9 results, searched from Messina

| Query | Present? | Position | Who ranks |
|---|---|---|---|
| fotografo messina | **no** | — | Foto shops and studios with storefronts: Foto Video Costa, PHOTO IN, Studio Agozzino, DigitalWork |
| fotografo messina matrimonio | **no** | — | PHOTO IN, Agozzino, Foto Video Costa, Pam Studio Pro, Juna Photography, Antonio Fenga |
| fotografo messina moda | **no** | — | Foto Video Costa, Professional Photo, Agozzino, Gino Florena |
| fotografo eventi messina | **no** | — | (venues intrude) Agozzino, PHOTO IN, Lucas Zanelli |
| fotografo moda sicilia | **no** | — | Sicily-wide: Clara Pintaudi, AGphotoStudios, Alessandro Tondo |
| fashion photographer messina | **no** | — | Professional Photo, Agozzino |
| wedding photographer messina | **no** | — | Agozzino, PHOTO IN, Juna, Gianmarco Vetrano |
| photographer messina | **no** | — | Foto Video Costa, DigitalWork |
| **videomaker messina** | **yes** | **#4** | DigitalWork, OS video maker, Foto Video Costa, **Francesco La Rosa**, Viomar |

One search origin only (Messina, logged in). This is proximity-weighted and not
a universal position — but 0/8 on photography with a single video category is
not a proximity effect, it's a category effect. Note the competitors are almost
all storefront studios; a service-area business starts behind them on the map
pack regardless.

---

## 9. Entity & authority map — local sources

| Source | URL | Relationship | Location signal | Industry signal | Authority | Site links to it? | Should site link? | Should it link back? | Notes |
|---|---|---|---|---|---|---|---|---|---|
| **Comune di Messina** (official) | comune.messina.it/it/news/messina-through-our-eyes… | Names "videomaker Francesco La Rosa" for *Messina Through Our Eyes* (with DJ Marco Ursino), 23 Sep 2025, backed by the municipality | Messina — the strongest possible | video | **Institutional — highest on the board** | no | yes, from a case study | would be a real backlink | **Confirm it's him** (no handle in the piece; "due giovani messinesi" fits). Not on the site at all |
| LetteraEmme | letteraemme.it/messina-through-our-eyes… | same story, "Redazione", 23 Sep 2025 | Messina | video | Local editorial | no | yes | possible | no link, no handle |
| StrettoWeb | strettoweb.com/2025/09/nasce-messina-through-our-eyes… | same story | Messina | video | Local editorial | no | yes | possible | |
| Radio Taormina | radiotaormina.it/2025/09/24/messina-through-our-eyes… | same story | Sicily | video | Local media | no | optional | possible | |
| Gazzetta del Sud | (2021 feature, verified earlier) | editorial mention, by name | Messina | photo | High | **yes** (About) | already | no link today | |
| TempoStretto | — | **nothing found for this Francesco** | — | — | — | — | — | — | Only a "Fabio La Rosa" and unrelated items |
| Cherrydeck | cherrydeck.com/francescolarosa.ph | own profile, unlinked mention | Messina | photo | Moderate | yes (sameAs) | already | can't — no website field | closed |
| Tripadvisor / Airbnb (Prague) | — | **not found** | — | — | — | — | — | — | Old-site testimonials cite "Prague Airbnb Experience clients"; no live listing found. NEEDS FRANCESCO |
| NYBF | newyorkbusinessfellowship.com + IG | client, 3 verified collabs | New York | corporate video | Moderate | yes | already | credit request | |
| LinkedIn | linkedin.com/in/francesco-la-rosa-2a79a419a | own profile | — | — | — | **no** | add to `sameAs` | — | headline overstates F1 |
| Atarashi / Saints / Cettina / WHITE Milano | (verified in AUTHORITY-ASSET-MAP.md) | clients | Sicily / Milan / Colombo | photo+video | Moderate | yes | already | credit requests | |
| FONDENTE / Tano Lenzo | YouTube 4n2QwuVypmA, Horcynus Festival | DP credit | Messina | film | Moderate | yes | already | — | |
| **Formula 1 / Carlos Sainz** | — | **do not attribute** | — | — | — | — | — | — | Nothing verified ties a Sainz mention to this Francesco. Keep to "FIA-accredited paddock access, Barcelona 2020" |

**Excluded — other people named Francesco La Rosa, all surfacing on the brand SERP:**
the Catania film director (*Strade Strette*, Premio Cultura 2026, LiveSicilia 2023
"pluripremiato videomaker siciliano"), a Catania freelance videomaker on LinkedIn
(industrial worker by profession), the artist @francescolarosaart, and a graphic
designer on altervista. GBP's own discovery data shows "francesco la rosa piazza
armerina" — another person again. **Entity disambiguation is a live problem,
not a theoretical one.**

---

## 10. Local SEO pages — what exists

| Intent | Page | Exists? | Verdict |
|---|---|---|---|
| Wedding photography (+ Sicily) | `/wedding.html`, `/it/matrimoni.html`, 3 case studies | yes | Strong. No new page |
| Fashion photography | `/photography.html#brand-fashion`, Cettina, WHITE Milano | yes | Covered. No new page |
| Event photography | `/photography.html#events`, Atarashi, Saints | yes | Covered |
| Commercial / brand photography | `/photography.html`, Club Barman, Casa Irrera, Smashers | yes | Covered |
| Motorsport photography | `/motorsport.html`, F1, Aston Martin | yes | Strong |
| "Fotografo Messina" as a query | homepage + `/it/fotografia.html` | yes | Served by existing pages + GBP |

**No new pages are needed. No city pages.** The gap is not pages — it is the
profile's category and the absence of photography signals on GBP.

---

## 11. Citations

| Citation | State | Action |
|---|---|---|
| Google Business Profile | current, inconsistent name/phone vs site | fix per §1 |
| Instagram | current, consistent | none |
| LinkedIn | current, headline inconsistent | soften headline to match the site |
| YouTube | current | add to GBP |
| Cherrydeck | current, unlinked | none possible |
| Facebook page | 87 likes, inactive | either update NAP + link, or leave; don't create noise |
| Comune di Messina / LetteraEmme / StrettoWeb | editorial mentions, no link | see §9 |
| Generic directories (PagineGialle etc.) | none found | **do not create** — no value for this business model |

---

## 12. Structured data

`Person` (48 nodes, one `@id`) is correct. Gaps:

- `ProfessionalService` on contact page: no `telephone`, no `sameAs`, not linked to the Person `@id`.
- `Person.sameAs` lacks LinkedIn (which GBP already declares).
- Nothing to remove; nothing to add "for the sake of schema".

---

## 13. Priorities

**P0 — must fix**
1. Description describes a different business (political campaigns, real estate, SMM).
2. Zero photography categories on a photography-first business.
3. Two unanswered reviews.

**P1 — high impact**
4. Primary-category decision (§2).
5. Services list: replace 15 default video items with 12 real ones.
6. Service area: Sicily-wide, honestly.
7. Hours: replace "24 h".
8. Business name: drop the descriptor (decision).
9. Phone on the site + `telephone` in schema; LinkedIn in `sameAs`; https on GBP website; YouTube on GBP.
10. Media library: 12–15 curated items replacing food-heavy set.

**P2 — medium**
11. Messina Through Our Eyes: confirm, then a short case study and a link to the Comune page.
12. LinkedIn headline.
13. Ethical review-request system (§14).

**P3 — optional**
14. Facebook page NAP.
15. Opening-date note.

---

## 14. Ethical review acquisition — trigger-based

No incentives, no gating, no scripted phrases, no "5 stelle", no "menziona Messina".
Ask **every** client at the same trigger regardless of how the job went. One
message, one link, no follow-up pressure.

| Client type | Trigger | Window | Message (IT) | Tracking |
|---|---|---|---|---|
| Wedding | Final gallery + film delivered | 1–2 weeks after delivery | "Ciao [nome], grazie ancora per avermi fatto raccontare il vostro giorno. Se avete due minuti, mi farebbe piacere leggere com'è stata l'esperienza dal vostro punto di vista — qui: [link]. Qualunque cosa vogliate scrivere va bene." | date sent / reviewed y-n |
| Brand / fashion | Campaign or collection delivered | within 1 week | "Ciao [nome], il materiale è consegnato. Se vi va di lasciare due righe sull'esperienza di lavorare insieme, il link è questo: [link]. Grazie." | same |
| Event | Final deliverables sent | within 1 week | "Ciao [nome], ecco tutto. Se hai voglia di raccontare com'è andata, il link è: [link]." | same |
| Long-term collaborator | End of a completed project (not per shoot) | at project close | "Siamo alla fine di [progetto]. Se ti va di scrivere qualcosa sull'esperienza, qui: [link]." | same |

Link: the GBP short review URL (from "Chiedi recensioni"). Never a pre-filled text.

---

## 15. Review response guidelines

- Reply within a week. Address the person by name. One or two sentences.
- Mention the actual project only when it's the natural thing to say — never to insert a keyword.
- Thank them for the specific thing they said, not for "the 5 stars".
- No links, no "contattaci per…", no hashtags, no city names inserted for SEO.
- Never copy a reply between reviews.

Drafts for the two open reviews:

**Alessandro Maugeri** — "Grazie Alessandro. Lavorare a Saints è sempre stata una cosa a due direzioni: tu tieni la sala com'è, e a me resta da guardare. A presto per la prossima."

**Carmine Filice** — "Grazie Carmine — è stata una bella giornata, e non solo per il matrimonio. Alla prossima, ovunque sia."

*(Both need your OK before posting.)*

---

## 16. Not changed, and why

Nothing was changed in this pass. Everything in §13 waits for your decisions
on: primary category, business name, hours, and the description text.

---

## 17. Revised proposal — positioning update of 21 Sep 2026

Francesco confirmed: **equally photographer and filmmaker**. Video visibility is
not to be reduced; photography visibility is to be built; the commercial
verticals are **Wedding · Fashion · Events**, with Commercial/Brand, Motorsport
and **Rental** as additional business activities. Rental must stay visible
wherever Google allows it accurately.

This replaces §2, §4 and §5 above.

### Categories (Google forces one primary — this is not a positioning choice)

| | Value | Why |
|---|---|---|
| Primary | **Servizio di produzione di video** (unchanged) | It is the category that already ranks (#4). Changing the primary triggers a re-review and risks that position for nothing |
| Secondary | **Fotografo** | The photography entity itself |
| Secondary | **Fotografo per matrimoni** | Vertical 1 |
| Secondary | **Fotografo commerciale** | Fashion, brand, events, motorsport all sit here in Google's taxonomy |

Four categories. No fashion/event/rental category exists in the taxonomy
(rental was tested exhaustively in July — nothing); none is forced.

### Services — by vertical, both media, plus rental

Services in GBP are free text under a category, so rental *can* be listed
accurately without a rental category.

| Vertical | Service | Category |
|---|---|---|
| **Wedding** | Fotografia di matrimonio | Fotografo per matrimoni |
| | Film di matrimonio | Servizio di produzione di video |
| | Destination wedding in Sicilia | Fotografo per matrimoni |
| **Fashion** | Fotografia di moda ed editoriale | Fotografo commerciale |
| | Video di moda e sfilate | Servizio di produzione di video |
| | Campagne e lookbook | Fotografo commerciale |
| **Events** | Fotografia di eventi | Fotografo |
| | Video di eventi | Servizio di produzione di video |
| | Contenuti per eventi e festival | Servizio di produzione di video |
| Commercial / brand | Fotografia per brand e prodotto | Fotografo commerciale |
| | Branded content video | Servizio di produzione di video |
| Motorsport | Fotografia e video motorsport | Fotografo commerciale |
| **Rental** | **Noleggio attrezzatura foto e video** — Sony full-frame, ottiche, stabilizzatori, monitor, droni | Servizio di produzione di video |
| Film | Direzione della fotografia | Servizio di produzione di video |

14 services. Replaces the 15 default video ones. Dropped: video marketing,
real-estate videography, voice-over, family videos, pre/post-production lines.

### Description (IT, ~740 chars)

> Francesco La Rosa è fotografo e filmmaker con base a Messina, in Sicilia. Fotografia e video nascono insieme, dalla stessa persona, con un approccio documentaristico: la giornata non viene messa in pausa per la camera. Lavora su matrimoni e destination wedding, moda ed editoriale, eventi e festival, campagne per brand e motorsport — dalle case di moda siciliane alla Colombo Fashion Week, dal paddock di Formula 1 con accredito FIA alle aziende pubbliche. Noleggia inoltre attrezzatura foto e video professionale: corpi Sony full-frame, ottiche, stabilizzatori, monitor e droni. Disponibile in Sicilia, in Italia e all'estero, in italiano, inglese e spagnolo.

### Rental — where it lives

| Surface | State | Action |
|---|---|---|
| GBP category | no accurate category exists | none — not forced |
| GBP services | — | add "Noleggio attrezzatura foto e video" (above) |
| GBP description | absent | one sentence (above) |
| Website | `/rental.html` + `/it/noleggio.html`, in the main nav, real gear list | already correct |
| Structured data | `Service` on both rental pages | fine; add `telephone` when the phone goes on the site |
| External | — | no rental directory is worth a listing; the site page + GBP service is the honest maximum |

### Media library — by vertical, both media

Cover: a working frame (F1 paddock or Aston Martin). Then Francesco at work ×1;
Wedding ×3; Fashion ×2; Events ×2; Commercial ×1; Motorsport ×2; Food ×2;
Rental ×1 (a kit shot, if one exists — otherwise nothing, no stock); Video ×3.
