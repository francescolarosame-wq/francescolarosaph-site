/* =========================================================================
   Section-divider flash — fires the film-burn + grain pulse once per
   <div class="section-divider"> marker as it scrolls into view.
   Pairs with assets/css/section-flash.css.
   ========================================================================= */
(function () {
  var dividers = document.querySelectorAll('.section-divider');
  if (!dividers.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var overlay = document.createElement('div');
  overlay.className = 'page-flash';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<span class="page-flash__glow"></span><span class="page-flash__grain"></span>';
  document.body.appendChild(overlay);

  function fire() {
    overlay.classList.remove('is-burning');
    void overlay.offsetWidth; // restart the animation if it's already mid-burn
    overlay.classList.add('is-burning');
  }

  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        fire();
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' }); // fires as the marker crosses the viewport's vertical center

  dividers.forEach(function (d) { io.observe(d); });
})();
