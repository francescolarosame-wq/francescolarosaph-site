/* =========================================================================
   Short Films — single source of truth for project facts (title, credits,
   view-count label, video ID, etc). Read by the Short Films teaser on
   videography.html and by each film's own case-study page, so a fact only
   ever has to be corrected in one place.

   To add a future film (e.g. DARK CHOCOLATE): push a new object onto this
   array with the same shape, then build its case-study page from the
   fondente/index.html template.
   ========================================================================= */
window.SHORT_FILMS = [
  {
    slug: "fondente",
    title: "FONDENTE",
    type: "Short Film",
    year: "2025",
    director: "Tano Lenzo",
    cinematographer: "Francesco La Rosa",
    cameraOperator: "Francesco La Rosa",
    premiere: "Horcynus Festival · August 5, 2025",
    viewsLabel: "OVER 140K VIEWS",
    youtubeId: "4n2QwuVypmA",
    youtubeUrl: "https://youtu.be/4n2QwuVypmA",
    thumbnail: "https://img.youtube.com/vi/4n2QwuVypmA/hqdefault.jpg",
    stills: [],
    credits: []
  }
];
