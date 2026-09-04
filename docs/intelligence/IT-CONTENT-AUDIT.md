# IT Content Audit

**Headline: the Italian is in better shape than expected.** It is idiomatic, not
translated, and structurally identical to EN on all 27 pairs.

## Evidence it is native, not translated

Natural Italian constructions throughout — "sartoria italiana" (not *casa di
sartoria*), "copertura multicamera", "azienda del trasporto pubblico di Messina",
"girati in città e lungo le linee", "il tipo di serata costruita su un DJ set".
These are choices a translator working literally would not make.

Word ratios EN→IT run **0.99–1.10**, which is the natural expansion range for
Italian. No page is a padded or truncated translation.

## Defects found

| # | Page | Issue | Severity |
|---|---|---|---|
| 1 | `it/matrimoni.html` | "film di matrimonio cinematografici e **documentaristi**" — must be *documentaristici*. The noun form means "documentary-makers". Every other IT page uses the adjective correctly | **P0** |
| 2 | `it/chi-sono.html` | "Solo **sette anni fa**" — mirrors the EN relative-date problem and contradicts "dal 2018" in the same page's meta description | **P0** |
| 3 | `it/atarashi.html` | "questo agosto" — no year, mirrors EN | **P0** |
| 4 | `it/cettina-bucca.html` | "**Cinque** post accreditati" while the EN body says "four" — IT has picked one side of an unresolved EN contradiction | **P0** |

## Anglicisms — assessed, mostly fine

`location`, `budget`, `showreel`, `venue`, `wedding`, `engagement`, `mood` all
appear in IT. In Italian creative and events industry usage these are standard
and **should not be "corrected"** — replacing "location" with *ubicazione* would
make the copy read worse, not better. No action.

## Where IT is genuinely equal or better

- `it/atm-messina.html` — "comunicazione istituzionale più che pubblicitaria in
  senso commerciale" is a cleaner formulation than the EN equivalent.
- `it/cettina-bucca.html` — carries the same founding date, trading name and
  Colombo context as EN, with no loss.
- Proof labelling — "credito in didascalia", "pubblicato da", "in
  collaborazione con" map exactly onto the EN distinctions.

## Verdict
**No IT rewrite is needed.** Fix the four defects above and the Italian tree is
sound. This is unusual and worth protecting — do not regenerate IT pages
wholesale in the next pass.
