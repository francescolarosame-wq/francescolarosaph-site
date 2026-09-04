# EN ↔ IT Parity Matrix

Measured 3 September 2026 against local files matching production byte-for-byte.

| EN page | IT page | EN w | IT w | ratio | H2 | IG | JSON-LD | IMG | Status |
|---|---|---|---|---|---|---|---|---|---|
| index.html | it/index.html | 434 | 456 | 1.05 | 7=7 | ✓ | ✓ | ✓ | PARITY |
| about.html | it/chi-sono.html | 458 | 475 | 1.04 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| services.html | it/servizi.html | 1715 | 1734 | 1.01 | 11=11 | ✓ | ✓ | ✓ | PARITY |
| contact.html | it/contatti.html | 526 | 520 | 0.99 | 3=3 | ✓ | ✓ | ✓ | PARITY |
| rental.html | it/noleggio.html | 984 | 1008 | 1.02 | 11=11 | ✓ | ✓ | ✓ | PARITY |
| photography.html | it/fotografia.html | 298 | 297 | 1.00 | 8=8 | ✓ | ✓ | ✓ | PARITY |
| videography.html | it/video.html | 454 | 482 | 1.06 | 12=12 | ✓ | ✓ | ✓ | PARITY |
| wedding.html | it/matrimoni.html | 499 | 534 | 1.07 | 5=5 | ✓ | ✓ | ✓ | PARITY* |
| atarashi.html | it/atarashi.html | 995 | 1050 | 1.06 | 13=13 | ✓ | ✓ | ✓ | PARITY |
| cettina-bucca.html | it/cettina-bucca.html | 543 | 572 | 1.05 | 8=8 | ✓ | ✓ | ✓ | PARITY* |
| white-milano.html | it/white-milano.html | 485 | 518 | 1.07 | 7=7 | ✓ | ✓ | ✓ | PARITY |
| smashers.html | it/smashers.html | 299 | 319 | 1.07 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| new-york-business-fellowship.html | it/… | 311 | 342 | 1.10 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| saints.html | it/saints.html | 532 | 542 | 1.02 | 8=8 | ✓ | ✓ | ✓ | PARITY |
| dose.html | it/dose.html | 272 | 279 | 1.03 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| club-barman.html | it/club-barman.html | 313 | 331 | 1.06 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| casa-irrera.html | it/casa-irrera.html | 297 | 321 | 1.08 | 5=5 | ✓ | ✓ | ✓ | PARITY |
| luxury-story.html | it/luxury-story.html | 426 | 447 | 1.05 | 9=9 | ✓ | ✓ | ✓ | PARITY |
| sicilian-ceremony.html | it/sicilian-ceremony.html | 466 | 488 | 1.05 | 11=11 | ✓ | ✓ | ✓ | PARITY |
| ondrej-dominika.html | it/ondrej-dominika.html | 386 | 425 | 1.10 | 8=8 | ✓ | ✓ | ✓ | PARITY |
| videography/short-films/fondente/ | it/fondente.html | 445 | 461 | 1.04 | 8=8 | ✓ | ✓ | ✓ | PARITY |
| aston-martin-peroni.html | it/aston-martin-peroni.html | 260 | 276 | 1.06 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| formula-1-barcelona.html | it/formula-1-barcelona.html | 220 | 238 | 1.08 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| atm-messina.html | it/atm-messina.html | 414 | 417 | 1.01 | 8=8 | ✓ | ✓ | ✓ | PARITY |
| food.html | it/food.html | 381 | 399 | 1.05 | 6=6 | ✓ | ✓ | ✓ | PARITY |
| motorsport.html | it/motorsport.html | 99 | 106 | 1.07 | 3=3 | ✓ | ✓ | ✓ | PARITY |
| privacy.html | it/privacy.html | 916 | 929 | 1.01 | 10=10 | ✓ | ✓ | ✓ | PARITY |

**27/27 structural parity. Zero flags.**

`*` = content parity intact, but the page carries a P0 defect on **both** sides
(matrimoni: grammar; cettina: the credited-post contradiction).

## Other parity dimensions

| Dimension | State |
|---|---|
| hreflang reciprocity | Complete both directions, incl. x-default |
| Sitemap | 52 URLs, both trees, alternates on every entry |
| Cross-language link leaks | **0** (was 31, fixed in STEP 24) |
| Language toggles | 27/27 intact |
| Instagram proof blocks | 8 EN + 8 IT = 16, identical mapping |
| Canonical | 1 per page, self-referencing |

## Rule for the next pass
Any EN copy change **must** ship with its IT counterpart in the same commit.
This matrix is the regression test — re-run it after every copy pass.
