/* =========================================================================
   Scroll-linked 3-state logo header — vanilla JS, no dependencies.
   Pairs with assets/css/logo-header.css. Homepage only.

   ---------------------------------------------------------------------
   SCROLL-PROGRESS -> VISUAL-STATE MAPPING (tune these constants)
   ---------------------------------------------------------------------
   progress = clamp01(scrollY / heroHeight)   // 0 at top, 1 after one viewport

   Crossfade windows (state opacity ramps, narrow = "snappy" per spec):
     state 1 -> 2   ramps across [T1_START, T1_END]   default 0.30 -> 0.335
     state 2 -> 3   ramps across [T2_START, T2_END]   default 0.70 -> 0.735

   Transform envelope (scale + vertical offset), eased separately from the
   opacity crossfades so the "settle" can feel different from the "swap":
     scale  : HERO_SCALE  -> 1     (eased by TRANSFORM_EASE) — HERO_SCALE is
              computed live from viewport width so state 1 never overflows
              (see computeHeroScale below), not a fixed multiplier.
     y-shift: HERO_Y       -> 0    (eased by TRANSFORM_EASE)
   ========================================================================= */
(function () {
  var root = document.getElementById('scrollLogo');
  if (!root) return;

  var flashEl = root.querySelector('.scroll-logo__flash');
  var stateFull    = root.querySelector('.scroll-logo__state--full');
  var stateStacked = root.querySelector('.scroll-logo__state--stacked');
  var stateMono    = root.querySelector('.scroll-logo__state--mono');
  var heroEl = document.querySelector('.hero-full') || document.querySelector('.hero');
  if (!stateFull || !stateStacked || !stateMono || !heroEl) return;

  // ---- tunables -----------------------------------------------------
  var T1_START = 0.30, T1_END = 0.335;  // state 1 -> 2 crossfade window (narrow = snappy)
  var T2_START = 0.70, T2_END = 0.735;  // state 2 -> 3 crossfade window
  var HERO_MAX_WIDTH_RATIO = 0.95;      // state 1 never renders wider than 95% of viewport
  var HERO_SCALE_MAX = 9;               // ceiling — safe to push higher now the art is vector (full/stacked are SVG)
  var HERO_Y_GAP = 28;                  // px of breathing room below the nav bar at progress=0
  var TRANSFORM_EASE_POWER = 3;         // ease-out power for the scale/position envelope
  // ---------------------------------------------------------------------

  var navEl = document.querySelector('.site-nav');

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function rampUp(p, a, b) { return clamp01((p - a) / (b - a)); }
  function easeOutCubic(p) { return 1 - Math.pow(1 - p, TRANSFORM_EASE_POWER); }

  if (prefersReducedMotion) {
    // Skip the whole scale/position/flash choreography — just sit in the
    // final compact state with a plain opacity swap once past the hero.
    stateMono.style.opacity = '1';
    var toggled = false;
    var onScrollReduced = function () {
      var past = window.scrollY > heroEl.offsetHeight * 0.5;
      if (past !== toggled) {
        toggled = past;
        stateFull.style.opacity = past ? '0' : '1';
      }
    };
    window.addEventListener('scroll', onScrollReduced, { passive: true });
    onScrollReduced();
    return;
  }

  // ---- cached (read-once) layout numbers — refreshed only on resize,
  //      never inside the scroll/rAF path, so we never force a reflow. ----
  var heroHeight = heroEl.offsetHeight;
  var heroScale = HERO_SCALE_MAX;
  var heroY = 0;
  var stateFullBaseWidth = stateFull.getBoundingClientRect().width || 260;

  function computeHeroScale() {
    // State 1 at its natural (unscaled) width is stateFullBaseWidth px.
    // Scale it up only as far as HERO_MAX_WIDTH_RATIO of the viewport allows,
    // so it can never clip past the edges on any screen size (fixes the
    // overflow bug — this replaces the old fixed HERO_SCALE multiplier).
    var maxRenderWidth = window.innerWidth * HERO_MAX_WIDTH_RATIO;
    var fitScale = maxRenderWidth / stateFullBaseWidth;
    // fitScale is a hard ceiling (the largest scale that still fits the
    // viewport) — HERO_SCALE_MIN must never override it, or the logo clips
    // past the screen edges on narrow viewports (was cropping the first/last
    // letter on mobile: fitScale ~1.98 there, but the old Math.max() floor
    // forced 2.5 regardless, ~25% wider than the viewport allows).
    return Math.min(HERO_SCALE_MAX, fitScale);
  }

  function refreshLayout() {
    heroHeight = heroEl.offsetHeight;
    stateFullBaseWidth = stateFull.getBoundingClientRect().width || stateFullBaseWidth;
    heroScale = computeHeroScale();
    // Push the hero-scale logo down so its top edge sits just below the nav
    // bar (was overlapping it — the "sitting too high" fix) instead of at the
    // fixed top:20px docking point, which is only correct once fully settled.
    heroY = navEl ? navEl.offsetHeight + HERO_Y_GAP - 20 : 0;
  }
  refreshLayout();

  // ---- threshold-crossing tracking for the film-burn flash (fire once
  //      per crossing, re-armed once progress moves back below it) ----
  var flash1Fired = false, flash2Fired = false;
  var FLASH1_AT = (T1_START + T1_END) / 2;
  var FLASH2_AT = (T2_START + T2_END) / 2;

  var grainEl = root.querySelector('.scroll-logo__grain');
  var allStates = [stateFull, stateStacked, stateMono];

  function restartAnim(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth; // force reflow so the animation restarts even if still running
    el.classList.add(cls);
  }

  function fireFlash() {
    // Flash + grain pulse + a physical "reel catch" punch on every state layer —
    // together this is what reads as an analog reel-change rather than a flat
    // digital crossfade (the punch is on each <img>, never conflicts with the
    // rAF-driven transform on the root — see the CSS comment for why).
    restartAnim(flashEl, 'is-burning');
    restartAnim(grainEl, 'is-pulsing');
    allStates.forEach(function (el) { restartAnim(el, 'is-punching'); });
  }

  function fireSettleFlicker() {
    // Softer than fireFlash() — no reel-catch jitter, just a brief 1-2 frame
    // exposure blip, for the entrance "landing in the projector frame" beat.
    restartAnim(flashEl, 'is-burning-soft');
    restartAnim(grainEl, 'is-pulsing');
  }

  // ---- the actual per-frame write: pure math + style writes, no reads ----
  var latestScrollY = window.scrollY;
  var ticking = false;
  // Tracks whether we're in the fully-retracted resting state, so we can snap
  // to an exact clean transform there instead of the eased/toFixed() result —
  // see the comment below for why this matters after a long scroll.
  var wasSettled = null;
  // True only while the one-time load entrance animation owns root.style.transform
  // directly (via a CSS transition) — render() still keeps the per-state opacity
  // crossfades live during that window, it just skips writing the transform so
  // the two don't fight each other.
  var introRunning = false;

  function render() {
    ticking = false;
    var progress = clamp01(latestScrollY / heroHeight);

    // -- opacity crossfades (trapezoid via ramp-up differences) --
    var o1 = 1 - rampUp(progress, T1_START, T1_END);
    var o2 = rampUp(progress, T1_START, T1_END) - rampUp(progress, T2_START, T2_END);
    var o3 = rampUp(progress, T2_START, T2_END);

    stateFull.style.opacity = o1.toFixed(3);
    stateStacked.style.opacity = clamp01(o2).toFixed(3);
    stateMono.style.opacity = o3.toFixed(3);

    if (introRunning) return;

    // -- transform envelope: scale + vertical offset, eased --
    if (progress >= 1) {
      // Fully retracted. The eased formula mathematically converges to
      // scale=1/ty=0 here, but toFixed() rounding on the way there can leave
      // it a hair off (e.g. scale(0.9999)) — invisible on the vector states,
      // but enough to soften the raster mono PNG, and the further you scroll
      // past this point the more scroll-event churn accumulates that drift.
      // Snap to an exact resting transform instead so it's pixel-perfect no
      // matter how long you've scrolled.
      if (wasSettled !== true) {
        root.style.transform = 'translate(-50%,0px) scale(1)';
        wasSettled = true;
      }
    } else {
      wasSettled = false;
      var eased = easeOutCubic(progress);
      var scale = heroScale + (1 - heroScale) * eased;
      var ty = heroY * (1 - eased);
      root.style.transform = 'translate(-50%,' + ty.toFixed(1) + 'px) scale(' + scale.toFixed(4) + ')';
    }

    // -- film-burn flash: fire once per forward crossing of each midpoint --
    if (progress >= FLASH1_AT && !flash1Fired) { flash1Fired = true; fireFlash(); }
    else if (progress < FLASH1_AT && flash1Fired) { flash1Fired = false; }

    if (progress >= FLASH2_AT && !flash2Fired) { flash2Fired = true; fireFlash(); }
    else if (progress < FLASH2_AT && flash2Fired) { flash2Fired = false; }
  }

  function onScroll() {
    latestScrollY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  }

  // ---- one-time load entrance: the hero logo drops in from just above its
  //      resting spot with a small overshoot, then settles with a soft
  //      exposure flicker — "a film title landing in a projector frame".
  //      Runs exactly once, on script init, never re-triggered by scrolling
  //      back to the top. Uses a real CSS transition (not the rAF loop) so
  //      the overshoot easing curve is trivial to express with cubic-bezier.
  var ENTRANCE_OFFSET = 32;   // px above resting position to start from
  var ENTRANCE_DURATION = 820; // ms, within the 700-900ms spec window

  function playEntrance() {
    introRunning = true;
    render(); // paint correct per-state opacities for progress=0 immediately

    var startTy = heroY - ENTRANCE_OFFSET;
    root.style.transition = 'none';
    root.style.opacity = '0';
    root.style.transform = 'translate(-50%,' + startTy.toFixed(1) + 'px) scale(' + heroScale.toFixed(4) + ')';
    void root.offsetWidth; // force reflow so the "none" transition actually applies before the next frame

    requestAnimationFrame(function () {
      root.style.transition = 'transform ' + ENTRANCE_DURATION + 'ms cubic-bezier(.19,1.28,.32,1), opacity 380ms ease-out';
      root.style.opacity = '1';
      root.style.transform = 'translate(-50%,' + heroY.toFixed(1) + 'px) scale(' + heroScale.toFixed(4) + ')';
    });

    setTimeout(function () {
      root.style.transition = '';
      introRunning = false;
      fireSettleFlicker();
      render(); // sync to wherever the user has actually scrolled to by now
    }, ENTRANCE_DURATION + 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { refreshLayout(); onScroll(); });
  playEntrance();
})();
