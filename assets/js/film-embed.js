/* =========================================================================
   Film embed: poster facade -> youtube-nocookie iframe, mounted only on
   explicit user interaction (click or Enter/Space on the play control).
   Never autoplays on page load; the iframe itself requests autoplay=1 only
   because the user just asked to watch, and it is always muted=0 by user
   gesture (YouTube's own player chrome), never silently with sound on load.
   ========================================================================= */
(function () {
  document.querySelectorAll('.film-embed').forEach(function (embed) {
    var videoId = embed.getAttribute('data-youtube-id');
    var playBtn = embed.querySelector('.film-embed__play');
    var title = embed.getAttribute('data-title') || 'Film';
    if (!videoId || !playBtn) return;

    function mount() {
      if (embed.classList.contains('is-playing')) return;
      var iframe = document.createElement('iframe');
      iframe.className = 'film-embed__frame';
      iframe.title = title;
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      embed.appendChild(iframe);
      requestAnimationFrame(function () { iframe.classList.add('is-loaded'); });
      embed.classList.add('is-playing');
    }

    playBtn.addEventListener('click', mount);

    // WATCH FONDENTE CTA scrolls here and focuses the control rather than
    // auto-triggering playback — the user still presses play themselves.
    document.querySelectorAll('[data-watch-film]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        embed.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
        playBtn.focus({ preventScroll: true });
      });
    });
  });
})();
