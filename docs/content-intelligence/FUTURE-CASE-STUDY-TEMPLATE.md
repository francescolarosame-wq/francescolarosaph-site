# FUTURE CASE STUDY TEMPLATE
The permanent intake for every new project. Fill this in **before** anything is designed or
written. The page is then assembly, not invention.

Supersedes and expands `docs/case-study-template.md`, which remains valid as the build
checklist (§4 below reproduces it).

**The rule:** every field is a verified fact or blank. A blank never becomes a guess.

---

## 1. The 26 intake questions

Copy this block into a new file at `docs/content-intelligence/projects/<client-slug>.md`.

```markdown
# <CLIENT> — intake
Date filled: <YYYY-MM-DD>   ·   Filled with: Francesco

## Identity
1.  CLIENT (legal / brand name as they write it):
2.  INDUSTRY:
3.  LOCATION — city, venue, country:
4.  SECONDARY LOCATIONS:
5.  DATE / YEAR (leave blank rather than approximate):

## Origin
6.  WHO CONTACTED WHOM, and through what channel:
7.  WHY was Francesco chosen (referral / existing relationship / inbound / portfolio):
8.  Is this a NEW client or a RETURNING one? If returning: since when, and for what before?

## The work
9.  THE BRIEF, as the client actually stated it:
10. EXACT ROLE (photographer / videomaker / DP / camera operator / editor / colourist —
    and explicitly, what was NOT his: direction? strategy? production?):
11. PHOTO / VIDEO / HYBRID, and roughly what split:
12. HOW MANY DAYS / HOURS on site:
13. CREW — solo, or who else, and doing what:
14. PRODUCTION DIFFICULTIES (access, weather, light, schedule, logistics, language):
15. CREATIVE CHOICES — the decision someone else would not have made:
16. TECHNICAL CHOICES — bodies, lenses, lighting, stabilisation, grade
    (only where it genuinely shaped the result):
17. FINAL DELIVERABLES handed over:

## Result & proof
18. WHERE was it published (client site, socials, LinkedIn, press, event platform, private):
19. Were Francesco's CREDITS VISIBLE? Quote the exact wording:
20. Was it an INSTAGRAM COLLABORATION? (different from a credit — say which)
21. Any GOOGLE REVIEW from this client?
22. Any EDITORIAL PUBLICATION or press mention? (publication, author, date, URL)
23. Any EXTERNAL BACKLINK? (a real hyperlink, not an alt-text mention)
24. What RESULTS may be stated? (leave blank unless the client provided a number)

## Media
25. IMAGES available — count, paths, and which is the single strongest frame:
26. VIDEO available — title, length, host, poster, and does it deserve VideoObject?

## Permissions & risk
27. Which LOCATIONS, PEOPLE and BRANDS may safely be named?
28. Which claims REQUIRE CONFIRMATION before publishing?
29. Anything the client asked to keep PRIVATE?
```

## 2. Readiness gate

A project becomes a **case study page** only if all of these are true:

- [ ] Questions 1, 2, 3, 9, 10, 11, 17 are answered (identity, brief, exact role, deliverables)
- [ ] At least one of 15 or 16 gives a *specific* decision, not a generic one
- [ ] There are ≥8 usable images, or ≥1 publishable film
- [ ] Question 27 is answered — nothing gets named without permission
- [ ] There is one sentence that answers **"what does this prove about Francesco that no
      other page on the site already proves?"**

If that last line duplicates an existing page, it is **selected work**, not a case study.
`videography.html`, `photography.html`, `food.html` and `wedding.html` exist for exactly that —
see ASM Taormina, Josh & Julie, Noah & Jessie, Hong Kong & Macao, all correctly held there.

## 3. Proof classification — do this at intake, not at build time

| If the client… | Level | On-page label |
|---|---|---|
| wrote his @ or name in the caption | **L1** | quote the caption verbatim |
| tagged him, or made it an IG collaboration | **L2** | "as an Instagram collaboration with…" / "tagging…" |
| posted his work with no credit | **L3** | "published by @client" — and identify which slides/frames |
| left a Google review | **L4** | full text, name, role, company, link |
| got press coverage | **L5** | publication, author, date, link |
| linked to the site | **L6** | record the URL |
| none of the above | **L7** | Francesco's own voice — completely legitimate, just never dressed as external proof |

## 4. Build checklist

- [ ] EN page written **in first person** (see the voice rule, D-06)
- [ ] IT page — semantically equivalent, natively written, never thinner
- [ ] Canonical + reciprocal hreflang
- [ ] Added to `sitemap.xml`
- [ ] Added to `llms.txt`
- [ ] `CreativeWork` (or `VideoObject`/`Movie`) JSON-LD, with `creator: {"@id": …#francesco}`,
      `locationCreated` and `dateCreated`
- [ ] `BreadcrumbList` matching the real parent hub
- [ ] Every image has a real alt, in both languages, per
      [IMAGE-SEO-CONTENT-MAP.md](IMAGE-SEO-CONTENT-MAP.md)
- [ ] Below-fold videos: `data-lazy-video` + `<source data-src>` + poster; hero only keeps
      `preload="auto"`
- [ ] Linked from its hub **and from at least two related case studies** — not an orphan
      (this is what went wrong with FONDENTE and ATM Messina)
- [ ] A "Continue Exploring" pair chosen for contextual value, not link count
- [ ] Added to [PROJECT-DATABASE.md](PROJECT-DATABASE.md) and
      [GEO-ENTITY-MAP.md](GEO-ENTITY-MAP.md)
- [ ] Any new claim added to [CLAIMS-CONTROL.md](CLAIMS-CONTROL.md) §1 with its source
- [ ] If a shared CSS/JS file changed, its `?v=NN` bumped sitewide
- [ ] Deployed, CDN purged, verified live in both languages

## 5. Narrative structure

Content architecture, not a mandatory UI template. Not every page shows all eight.

| # | Section | Question it answers |
|---|---|---|
| 01 | The context | What is this, and who is the client? |
| 02 | The brief | What actually needed to happen? |
| 03 | My role | Exactly what I did — and what I did not |
| 04 | The approach | How I worked, and the decision someone else would not have made |
| 05 | The work | What was produced |
| 06 | The result | Where it went, or what it achieved |
| 07 | The proof | Publication, credit, review, press — at its true level |
| 08 | Continue exploring | Two genuinely related projects |

Best current examples to model: **`saints.html`** for proof stacking, **`atarashi.html`** for
narrative depth, **`atm-messina.html`** for role honesty.
