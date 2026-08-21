/* =========================================================================
   Syncs any [data-sf-field] text against window.SHORT_FILMS (see
   short-films-data.js) so a fact — the view-count label above all — only
   has to be corrected in the data file to update every page that shows it.
   Static markup already carries the current correct value as a fallback,
   so nothing breaks if this script fails to load.
   ========================================================================= */
(function () {
  if (!window.SHORT_FILMS) return;
  document.querySelectorAll('[data-sf-slug]').forEach(function (scope) {
    var film = window.SHORT_FILMS.filter(function (f) { return f.slug === scope.getAttribute('data-sf-slug'); })[0];
    if (!film) return;
    scope.querySelectorAll('[data-sf-field]').forEach(function (el) {
      var field = el.getAttribute('data-sf-field');
      if (film[field] != null) el.textContent = film[field];
    });
  });
})();
