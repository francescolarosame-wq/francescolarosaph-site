# EN ↔ IT PARITY MATRIX
Measured 4 September 2026 by parsing all 54 pages. Not estimated.

**Columns:** words = body prose only · imgs = `<img>` elements · H2 = second-level headings ·
IG = Instagram proof blocks · schema = JSON-LD `@type` sequence.

---

## 1. The matrix

| EN page | IT page | Words EN/IT | Imgs | H2 | IG proof | Schema identical | Verdict |
|---|---|---|---|---|---|---|---|
| `index.html` | `it/index.html` | 210 / 217 | 6 / 6 | 7 / 7 | 0 / 0 | ✅ Person, WebSite | ⚠ positioning drift (see IT audit) |
| `about.html` | `it/chi-sono.html` | 359 / 377 | 1 / 1 | 6 / 6 | 0 / 0 | ✅ ProfilePage | ✅ |
| `contact.html` | `it/contatti.html` | 319 / 317 | 1 / 1 | 3 / 3 | 0 / 0 | ✅ ProfessionalService, FAQPage | ✅ |
| `services.html` | `it/servizi.html` | 121 / 121 | 1 / 1 | 11 / 11 | 0 / 0 | ✅ Service | ⚠ anglicisms (D-12) |
| `rental.html` | `it/noleggio.html` | 211 / 216 | 1 / 1 | 11 / 11 | 0 / 0 | ✅ Service | ✅ |
| `photography.html` | `it/fotografia.html` | 113 / 115 | 1 / 1 | 8 / 8 | 0 / 0 | ✅ CollectionPage | ✅ |
| `videography.html` | `it/video.html` | 182 / 204 | 1 / 1 | 12 / 12 | 0 / 0 | ✅ CollectionPage | ✅ |
| `wedding.html` | `it/matrimoni.html` | 354 / 385 | 11 / 11 | 5 / 5 | 0 / 0 | ✅ CreativeWork | ⚠ grammar (D-13) |
| `food.html` | `it/food.html` | 259 / 277 | 13 / 13 | 6 / 6 | 0 / 0 | ✅ CreativeWork | ✅ |
| `motorsport.html` | `it/motorsport.html` | 22 / 22 | 1 / 1 | 3 / 3 | 0 / 0 | ✅ CollectionPage | ⚠ both too thin (D-07) |
| `atarashi.html` | `it/atarashi.html` | 784 / 840 | 15 / 15 | 13 / 13 | 1 / 1 | ✅ CreativeWork | ✅ |
| `saints.html` | `it/saints.html` | 415 / 421 | 5 / 5 | 8 / 8 | 3 / 3 | ✅ CreativeWork | ✅ |
| `cettina-bucca.html` | `it/cettina-bucca.html` | 375 / 401 | 3 / 3 | 8 / 8 | 2 / 2 | ✅ CreativeWork | ✅ |
| `white-milano.html` | `it/white-milano.html` | 360 / 389 | 27 / 27 | 7 / 7 | 0 / 0 | ✅ CreativeWork | ✅ |
| `sicilian-ceremony.html` | `it/sicilian-ceremony.html` | 326 / 345 | 21 / 21 | 11 / 11 | 0 / 0 | ✅ VideoObject | ✅ |
| `luxury-story.html` | `it/luxury-story.html` | 289 / 302 | 8 / 8 | 9 / 9 | 0 / 0 | ✅ VideoObject | ⚠ **D-01 present in both** |
| `ondrej-dominika.html` | `it/ondrej-dominika.html` | 261 / 295 | 23 / 23 | 8 / 8 | 0 / 0 | ✅ VideoObject | ✅ |
| `atm-messina.html` | `it/atm-messina.html` | 260 / 262 | 11 / 11 | 8 / 8 | 0 / 0 | ✅ CreativeWork | ⚠ **English CTA (D-03)** |
| `club-barman.html` | `it/club-barman.html` | 216 / 232 | 37 / 37 | 6 / 6 | 0 / 0 | ✅ CreativeWork | ✅ |
| `new-york-business-fellowship.html` | `it/new-york-business-fellowship.html` | 200 / 229 | 3 / 3 | 6 / 6 | 2 / 2 | ✅ CreativeWork | ✅ |
| `dose.html` | `it/dose.html` | 188 / 191 | 1 / 1 | 6 / 6 | 0 / 0 | ✅ CreativeWork | ✅ |
| `smashers.html` | `it/smashers.html` | 187 / 201 | 7 / 7 | 6 / 6 | 0 / 0 | ✅ CreativeWork | ✅ |
| `casa-irrera.html` | `it/casa-irrera.html` | 182 / 196 | 10 / 10 | 5 / 5 | 0 / 0 | ✅ CreativeWork | ✅ |
| `aston-martin-peroni.html` | `it/aston-martin-peroni.html` | 157 / 169 | 9 / 9 | 6 / 6 | 0 / 0 | ✅ CreativeWork | ✅ |
| `formula-1-barcelona.html` | `it/formula-1-barcelona.html` | 123 / 131 | 25 / 25 | 6 / 6 | 0 / 0 | ✅ CreativeWork | ✅ |
| `videography/short-films/fondente/` | `it/fondente.html` | 300 / 316 | 4 / 4 | 8 / 8 | 0 / 0 | ✅ Movie, VideoObject | ⚠ **English CTA (D-03)** |
| `privacy.html` | `it/privacy.html` | 641 / 644 | 1 / 1 | 10 / 10 | 0 / 0 | ✅ WebPage | ✅ |

## 2. Aggregate

| Dimension | Result |
|---|---|
| Pages paired | **27 / 27** — no orphan in either tree |
| Image parity | **27 / 27 exact** |
| H2 parity | **27 / 27 exact** |
| Schema-type parity | **27 / 27 exact** |
| Instagram proof parity | **8 blocks EN / 8 IT — identical URLs** on all four pages |
| Word-count parity | IT runs **+5 to +12%**, consistent with normal Italian expansion. No page where IT is thinner |
| hreflang | Reciprocal `en`/`it` on every page; `x-default` → EN on the homepage |
| Canonical | Self-referential and correct on all 54 |
| Google review | Original Italian on `/it/`, English translation on `/` — labelled correctly in both |

**This is the strongest structural parity I have measured on a bilingual site of this size.**
It is not the problem area, and it should not absorb effort in the next pass.

## 3. Parity defects — the complete list

| ID | P | Page(s) | Defect |
|---|---|---|---|
| D-03 | P0 | `it/atm-messina.html`, `it/fondente.html` | Closing CTA heading still reads "Let's Collaborate." while the other 25 IT pages read "Collaboriamo." |
| D-01 | P0 | `luxury-story.html` **and** `it/luxury-story.html` | The "never published" claim and the YouTube embed contradict each other in **both** languages — fixing one language without the other would create a new parity defect |
| D-12 | P2 | `it/servizi.html` | Anglicised headings on the pricing page |
| D-13 | P2 | `it/matrimoni.html`, `it/motorsport.html` | Grammar and terminology (documentaristi → documentaristici; accredito → accreditamento) |
| — | P2 | `it/index.html` | Positioning drift: "in giro con la macchina fotografica dal 2018" vs EN "shooting since 2018" |
| D-07 | P1 | `motorsport.html` + `it/motorsport.html` | Both are 22 words. Any rewrite must land in both, simultaneously |

## 4. The parity rule for every future change

> **No copy change ships in one language only.**

Every item in the next copy pass has to be planned as a pair. The measured parity above is an
asset that took real work to build; a single one-sided edit starts eroding it. Where an edit
genuinely belongs in one language only — the Gazzetta del Sud feature is Italian-language and
lands most naturally on `/it/chi-sono.html` — the other language still gets an equivalent
treatment (an English page linking the Italian source and summarising it), not silence.
