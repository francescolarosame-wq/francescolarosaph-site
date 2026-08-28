# Case Study Readiness Model
The standard intake for every new project. Fill this in BEFORE building the page — the page is
then assembly, not invention. Anything left blank is a thing not to publish.

## Rule
Every field is either a verified fact or blank. A blank field never becomes a guess.
The distinction that matters most is FIRST-PARTY (what Francesco says about his own work — always
allowed) versus EXTERNAL PROOF (what a third party published — only with an explicit credit).

## 1. Identity
- CLIENT
- PROJECT NAME
- YEAR
- COUNTRY / CITY / VENUE
- TYPE (wedding, fashion, event, brand, food, motorsport, corporate, personal)
- PHOTO / VIDEO / BOTH
- ROLE (photographer, DP, camera operator, director, editor — be exact)

## 2. Story (this is what makes the page worth reading)
- HOW THE CLIENT CAME TO HIM
- BRIEF as given
- PRODUCTION CONTEXT (crew size, access level, schedule pressure, constraints)
- CREATIVE INTENTION — the decision he made that someone else would not have
- TECHNICAL CHALLENGE and how it was solved
- DELIVERABLES handed over
- OUTCOME / how the client used the work

## 3. Media
- IMAGE LIST (file paths)
- ALT DESCRIPTION per image — written after LOOKING at it: subject + client/project + location + context.
  Never "[client] photography — 3".
- FILENAME per image — descriptive, lowercase, hyphenated, only for NEW assets. Do not rename
  deployed files: it breaks references and cache for no ranking gain.
- VIDEO TITLE / DESCRIPTION / POSTER
- Does any video deserve `VideoObject`? Only if it is independently useful as a search result.
  A decorative background loop does not qualify.

## 4. External proof — the strict part
- CLIENT SOCIAL POSTS (URLs)
- **EXPLICIT CREDIT? (yes/no, and the exact wording)** ← the gate for everything below
- CLIENT WEBSITE MENTION (URL)
- PRESS (URL, publication, author, date)
- YOUTUBE
- COLLABORATORS to credit by name and role

If EXPLICIT CREDIT is "no", the page may still describe the work in Francesco's own voice.
It may NOT carry a "Published by X / Photography by Francesco La Rosa" proof block.

## 5. Search & structure
- PRIMARY SEARCH INTENT (one)
- SECONDARY INTENTS
- PARENT HUB — determines the BreadcrumbList trail and the "Back to" link
- INTERNAL LINKS OUT (service page, related case study, contact)
- CTA

## 6. Build checklist
- [ ] EN page
- [ ] IT page, semantically equivalent (not a copy-paste, and not thinner)
- [ ] canonical + reciprocal hreflang
- [ ] added to sitemap.xml
- [ ] added to llms.txt
- [ ] CreativeWork JSON-LD
- [ ] BreadcrumbList JSON-LD matching the real parent hub
- [ ] every image has a real alt, in both languages
- [ ] below-fold videos use `data-lazy-video` + `<source data-src>` + a poster
- [ ] hero video keeps `preload="auto"`; nothing else does
- [ ] linked from its hub page so it is not an orphan
- [ ] if a shared CSS/JS file changed, its `?v=NN` was bumped sitewide
- [ ] deployed, CDN purged, verified live in both languages
