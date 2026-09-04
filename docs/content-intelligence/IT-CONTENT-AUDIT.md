# IT CONTENT AUDIT
Italian is not a translation of the site. It is the edition that currently carries the traffic.

**Context that changes the priority of this document:** 6 of the top 9 landing pages in Google
Search Console are `/it/`, and `videomaker messina` — the one commercial query with real
traction — sits at position 2.0 on `/it/video.html`. Italian is the commercial front line, not
the secondary language.

---

## 1. Headline finding

**The Italian is genuinely well written, not machine-translated.** It reads as Italian prose:
sentence rhythm is rebuilt rather than mirrored, idiom is native ("Poca luce, movimento
costante, nessuna seconda possibilità"), and the Google review is correctly presented in its
**original Italian** with the label *"testo originale"* while the English page says *"translated
from the Italian original"*. That is exactly right, and it is a detail most bilingual sites get
wrong.

Structural parity is complete: 27/27 pages, identical image counts, identical heading counts,
identical schema types, identical Instagram proof URLs. See
[EN-IT-PARITY-MATRIX.md](EN-IT-PARITY-MATRIX.md) for the measurements.

What is wrong is a short, specific list.

## 2. Defects

### D-03 · Untranslated English headings (P0)

Two Italian pages end on an English call to action while the other 25 end on **"Collaboriamo."**

| Page | Current | Should be |
|---|---|---|
| `it/atm-messina.html` | `Let'sCollaborate.` | `Collaboriamo.` |
| `it/fondente.html` | `Let'sCollaborate.` | `Collaboriamo.` |

Measured: 25 Italian pages use *Collaboriamo*, 2 do not. This is a two-line fix and it is P0
because it is the closing element of the page — the last thing a prospective Italian client
reads before the contact form.

### D-12 · Anglicisms in headings (P2)

`it/servizi.html` — the pricing page, i.e. the page a serious enquiry reads last — carries:

| Current heading | Problem | Suggested |
|---|---|---|
| "Servizi foto **only**" | English adverb inside an Italian heading | "Solo foto" |
| "Servizi video **only**" | same | "Solo video" |
| "**Bundle full** (foto + video + web + social)" | doubly English, and "bundle full" is not English word order either | "Pacchetti completi" |
| "**Video content social** (solo editing)" | three English nouns stacked | "Contenuti video per i social (solo montaggio)" |

`it/motorsport.html` meta description opens *"Motorsport photography di Francesco La Rosa"* —
an English noun phrase followed by Italian. "Motorsport" alone is acceptable Italian usage;
"Motorsport photography di" is not.

These are not stylistic preferences. On a page about price, mixed-language headings read as
a template rather than as a person, and they undercut exactly the local authority the page is
trying to build.

### D-13 · Grammar and terminology (P2)

| Page | Current | Issue | Correct |
|---|---|---|---|
| `it/matrimoni.html` | "film di matrimonio cinematografici e **documentaristi**" | "documentaristi" is the noun (*documentary-makers*), not the adjective | "documentaristici" |
| `it/motorsport.html`, `it/fotografia.html` | "**accredito** FIA" | *accredito* is a banking credit; the FIA issues an *accreditamento* | "accreditamento FIA" |
| `it/matrimoni.html` | "una **produzione in destinazione** di tre giorni" | literal calque of "destination production" | "una produzione destination di tre giorni" or "un destination wedding di tre giorni" |
| `it/matrimoni.html` | "**gli scatti** fissano un singolo momento decisivo" | acceptable, but "la fotografia ferma" is more natural against the film/photo contrast being drawn | optional |

### Positioning drift on the Italian homepage (P2)

| EN `index.html` h2 | IT `it/index.html` h2 |
|---|---|
| "Born in Messina, **shooting since 2018** — weddings, fashion and motorsport…" | "Nato a Messina, **in giro con la macchina fotografica dal 2018**…" |

*"In giro con la macchina fotografica"* — "out and about with the camera" — is warm, but it
reads as a hobbyist. The English says *professional since 2018*; the Italian says *carrying a
camera around since 2018*. On the language edition that carries the traffic, and against the
entity-disambiguation problem described in `docs/query-page-matrix.md`, this is the wrong
signal. The Italian About page gets it right ("Fotografo e filmmaker **dal 2018**") — the
homepage should match its own About page.

## 3. Where Italian is *better* than English

Worth preserving deliberately, not "correcting" toward the English:

- **The Google review** appears in its original Italian on `/it/`, translated on `/`. Correct
  in both directions, and labelled honestly in both.
- **`it/atm-messina.html`** — "la normale realtà del produrre per un'organizzazione a controllo
  pubblico" is more precise than the English "the ordinary reality of producing for a publicly
  owned organisation", because *organizzazione a controllo pubblico* is the actual Italian
  administrative category.
- Italian pages run **5–12% longer** than their English counterparts across the board. That is
  normal Italian expansion, not padding — it means nothing was cut in translation.

## 4. Where IT is thinner than EN

Measured: **nowhere.** Every Italian page equals or exceeds its English counterpart in word
count, images, headings, schema and Instagram proof. There is no page where the Italian
visitor gets less than the English one.

The single exception is qualitative, not quantitative: the two English CTAs above (D-03).

## 5. What Italian must never become

- A literal translation. It is currently a parallel edition; keep it that way.
- Keyword-stuffed. `videomaker messina` ranks at position 2 with the page written as it is.
  Do not add the phrase again to defend it.
- A place where English terms leak in because they were faster to leave alone.

## 6. IT-specific opportunity

Italian carries the impressions but the Italian tree has **no Italian-language proof surface**
of its own beyond the mirrored Instagram blocks — no Italian press, no Italian directory
presence. The Gazzetta del Sud feature (D-09) is **in Italian**, about a Messina photographer,
in a Messina newspaper. It belongs on `/it/chi-sono.html` first, and on `/about.html` second —
not the other way round. That is the highest-value Italian-language content addition available.
