# IMAGE SEO & CONTENT MAP
494 images measured on 4 September 2026.

---

## 1. Measured state — this is already good

| Metric | Value |
|---|---|
| Total `<img>` elements | 494 |
| With alt text | 486 |
| Empty alt | 8 — all logo SVGs and the decorative world map. **Correct**: decorative images should have empty alt |
| **Generic numbered alts** (`"Atarashi photography — 3"`) | **0** |
| Median alt length | **15 words** |
| Range | 3–30 words |
| Alts under 5 words | 60, of which ~54 are the site logo (`"Francesco La Rosa"`) — correct |

**Do not run a sitewide alt rewrite.** The alt text on this site is better than on most
professional photography sites. What follows is a model to *maintain* it and a short list of
genuine gaps.

## 2. The model — six questions per image

For every image that matters, the alt answers as many of these as are **verifiably** true:

| | Question | Example source |
|---|---|---|
| WHO | person, couple, brand, artist, team | "Trainer Claudio Patania" |
| WHAT | action, object, environment | "demonstrating a controlled pour" |
| WHERE | venue, city, country | "Club Barman dello Stretto, Messina" |
| WHEN | year, season, edition — only if known | "Barcelona 2020" |
| WHY | project context | "pre-season testing" |
| MEDIUM | photograph / film still / event photography | "Stills pulled from the finished film" |

### The scale, worked

| Quality | Example |
|---|---|
| ✗ Forbidden | `Atarashi event photography — 47` |
| ~ Weak | `Atarashi festival crowd, Messina 2026` |
| ✓ Correct | `Atarashi festival crowd during the evening programme at Arena Capo Peloro, Messina` |
| ✗ Also forbidden | Adding "Francesco La Rosa" to every alt for SEO |

**Live examples that already meet the standard** (copy this register, do not "improve" it):

> *"Overhead view of the Mercedes W11 number 44 in its pit box, mechanics handling front tyre blankets, Formula 1 pre-season testing, Barcelona 2020"*
> *"Students practising pour accuracy into a Fabbri Spritz glass during a mixology class in Messina"*
> *"A road sign for Villafranca Tirrena seen from an ATM vehicle on the route out of Messina"*
> *"A hand lifting a glass cloche off a bowl of amaretti cookies, mirror reflection beside it"*

## 3. Hard rules

1. **Specificity beats repetition.** Never keyword-stuff.
2. **Never claim a location that is not verified.** "Messina" is not a default suffix.
3. **Never identify a person unless the identity is genuinely known.** The F1 set does this
   correctly — Kimi Räikkönen is named because his suit text is legible; one silhouette is
   deliberately left generic.
4. **Never add the photographer's name to every alt.** Reserve it for hero, OG and portrait
   images where authorship is the subject.
5. **In a large gallery, meaningful context beats manufactured uniqueness.** Twenty frames from
   one wedding do not need twenty different phrasings of the same room — they need each frame
   described for what it actually shows.
6. **Do not rename deployed files.** It breaks references and caching for no ranking gain.
   Descriptive filenames apply to *new* assets only.
7. **Italian alts are written in Italian**, not translated word-for-word from English.

## 4. Filename convention (new assets only)

`<client-or-project>-<subject>-<qualifier>.jpg` — lowercase, hyphenated, no dates unless the
date is part of the identity.

Already correct on the site:
`f1-barcelona-2020-mercedes-pit-box-overhead.jpg` · `atm-messina-christmas-tram.jpg` ·
`white-milano-magnapars.jpg` · `frame-villa-bougainvillea.jpg`

Weaker, but **leave them alone** — they are deployed: `club-barman-001.jpg`,
`casa-irrera-005.jpg`, `smashers-06.jpg`. Their alt text carries the meaning, which is what
matters. Filenames are a minor signal; broken references are not.

## 5. Genuine gaps

| P | Page | Gap | Action |
|---|---|---|---|
| **P3** (D-16) | `aston-martin-peroni.html` | Four alts are 3–4 words: `"Aston Martin detail shot"`, `"Aston Martin detail, Prague"`, `"Aston Martin, Prague architecture"`, `"Aston Martin closing frame"` — against a 15-word site median | Rewrite these four (and their four Italian counterparts) to name the location and the light condition: e.g. *"Aston Martin parked in Prague's Old Town Square at night, flat winter light on the wet cobbles"* |
| **P3** | `food.html` | Restaurant alts name the venue (Sancta, Grecale, Loves Sushi) but never the city | Add "Messina" **only where verified** for each venue |
| **P3** | `club-barman.html` | 37 alts, some naming the venue and trainer, others generic ("Bartender in a black vest…") | Bring the weakest third up to the level of `club-barman-002/004`. Do not touch the rest |
| **P4** | sitewide | No `ImageObject` schema anywhere | Only add it to genuinely standalone images — a gallery does not need it |

## 6. Per-project image inventory

| Project | Images | Alt quality | Priority |
|---|---|---|---|
| Club Barman | 37 | Mixed — strong where named, generic where not | P3 |
| White Milano | 27 | Strong — visitors, stands, Magna Pars, White Dinner all named | keep |
| Formula 1 | 25 | **Best on the site** — car, number, session, circuit, year | keep as the reference standard |
| Ondrej & Dominika | 23 | Strong — specific moments, not "wedding photo" | keep |
| Sicilian Ceremony | 21 | Strong — Noto, Vendicari, the villa all named | keep |
| Atarashi | 15 | Strong | keep |
| Food hub | 13 | Strong on dish and venue, missing city | P3 |
| ATM Messina | 11 | Strong — the Villafranca route sign is exemplary | keep |
| Wedding hub | 11 | Strong | keep |
| Casa Irrera | 10 | Strong — texture, surface, branding all described | keep |
| Aston Martin | 9 | **Weakest** | **P3, act** |
| Luxury Story | 8 | Adequate | P4 |
| Smashers | 7 | Strong | keep |
| Cettina Bucca | 3 | Video-led page — few stills by design | keep |

## 7. What to review whenever an image changes

Filename (new assets only) → alt (EN) → alt (IT) → visible caption → surrounding page context →
OG image if it is a hero → the internal anchor text that leads to the page.

Not `title` attributes: they duplicate alt, are not read by most screen readers, and add
nothing for search.

## Asset integrity note — 2026-09-04

`luxury-story/frames/frame-hallway.jpg` and `frame-couple.jpg` held **each other's
image**. Section 02 (Preparation, tagged "Before the ceremony") was therefore showing
an outdoor seaside toast under alt text describing a candlelit corridor, and the only
unused frame in the folder was the corridor itself.

The file *names* were right; the *bytes* were swapped. Fixed by swapping the JPEGs back
and regenerating the AVIF/WebP derivatives — no HTML change was needed, because the
existing alt text then matched again. `frame-couple.jpg` (the couple by the coast) is
now used in section 03.

**The lesson for future passes: an alt-text audit that only reads HTML cannot catch
this.** Filename, alt text and HTML all agreed with each other; only the image disagreed.
Where a frame carries a factual claim, open it.
