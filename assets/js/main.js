(function () {
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

(function () {
  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.mobile-menu');
  var closeBtn = document.querySelector('.mobile-menu .close-x');
  if (!burger || !menu) return;
  // On the homepage, .scroll-logo is a fixed, high-z-index overlay that sits
  // above everything (including this menu) so it stays visible through the
  // scroll-driven crossfade — but that means it was also staying visible,
  // at whatever hero scale the scroll position left it at, right on top of
  // the menu's own "Photography" link. Hiding it only while the menu is open
  // doesn't touch its scroll behavior at all once the menu closes again.
  var scrollLogo = document.getElementById('scrollLogo');
  var open = function () {
    menu.classList.add('open'); document.body.style.overflow = 'hidden';
    // logo-header.js's one-time load-entrance animation sets this element's
    // opacity as an *inline* style (root.style.opacity), which always beats
    // a class-based CSS rule — so the visibility toggle has to go through
    // the same inline-style channel to actually win, not just add a class.
    if (scrollLogo) { scrollLogo.classList.add('is-menu-hidden'); scrollLogo.style.opacity = '0'; }
  };
  var close = function () {
    menu.classList.remove('open'); document.body.style.overflow = '';
    if (scrollLogo) { scrollLogo.classList.remove('is-menu-hidden'); scrollLogo.style.opacity = '1'; }
  };
  burger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
})();

(function () {
  var heroMark = document.querySelector('.hero-full__title h1') || document.querySelector('.hero-mark');
  var heroBase = document.querySelector('.hero-full__base');
  var hero = document.querySelector('.hero-full') || document.querySelector('.hero');
  var nav = document.querySelector('.site-nav');
  if (!heroMark || !hero || !nav) return;
  var heroH = hero.offsetHeight;
  var onScroll = function () {
    var progress = Math.min(1, window.scrollY / (heroH * 0.55));
    var scale = 1 - progress * 0.3;
    heroMark.style.transform = 'scale(' + scale.toFixed(3) + ')';
    heroMark.style.opacity = (1 - progress * 1.15).toFixed(3);
    if (heroBase) heroBase.style.opacity = (1 - progress * 1.4).toFixed(3);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { heroH = hero.offsetHeight; onScroll(); });
  onScroll();
})();

(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
  setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 1200);
})();

/* ---- custom cursor: ring with spring-eased trailing motion, morphs into a View/Play label ---- */
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  var dot = document.createElement('div'); dot.className = 'cursor-dot';
  var ring = document.createElement('div'); ring.className = 'cursor-ring';
  var label = document.createElement('span'); label.className = 'cursor-label';
  ring.appendChild(label);
  document.body.appendChild(dot); document.body.appendChild(ring);
  document.body.classList.add('has-cursor');
  var mx = -100, my = -100, rx = -100, ry = -100, vx = 0, vy = 0;
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
  });
  (function tick() {
    var dx = mx - rx, dy = my - ry;
    vx += dx * 0.09; vy += dy * 0.09;
    vx *= 0.72; vy *= 0.72;
    rx += vx; ry += vy;
    ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
    requestAnimationFrame(tick);
  })();
  var playables = '.card, .feat-tab, .brand--photo, .card--video, .frame[href], .showreel-teaser';
  var viewables = 'a, button, input, textarea';
  document.addEventListener('mouseover', function (e) {
    var pt = e.target.closest(playables);
    var vt = !pt && e.target.closest(viewables);
    if (pt) { ring.classList.add('hover'); label.textContent = 'Play'; }
    else if (vt) { ring.classList.add('hover'); label.textContent = 'View'; }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(playables + ',' + viewables)) { ring.classList.remove('hover'); label.textContent = ''; }
  });
  document.documentElement.addEventListener('mouseleave', function () { ring.style.opacity = '0'; dot.style.opacity = '0'; });
  document.documentElement.addEventListener('mouseenter', function () { ring.style.opacity = ''; dot.style.opacity = ''; });
})();

/* ---- magnetic pull on buttons & brand chips ---- */
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.btn, .brand--photo').forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = 'translate(' + (dx * 0.28).toFixed(1) + 'px,' + (dy * 0.32).toFixed(1) + 'px)';
    });
    el.addEventListener('mouseleave', function () { el.style.transform = ''; });
  });
})();

/* ---- split-word title reveal: hero h1 + the home wordmark ---- */
(function () {
  var targets = document.querySelectorAll('.hero h1, .hero-mark, .hero-full__title h1');
  if (!targets.length) return;
  function splitWords(el) {
    var nodes = Array.prototype.slice.call(el.childNodes);
    el.innerHTML = '';
    nodes.forEach(function (node) {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(function (chunk) {
          if (!chunk) return;
          if (/^\s+$/.test(chunk)) { el.appendChild(document.createTextNode(chunk)); return; }
          var sw = document.createElement('span'); sw.className = 'sw';
          var swi = document.createElement('span'); swi.className = 'sw-i'; swi.textContent = chunk;
          sw.appendChild(swi); el.appendChild(sw);
        });
      } else {
        el.appendChild(node.cloneNode(true));
      }
    });
    var i = 0;
    el.querySelectorAll('.sw-i').forEach(function (s) { s.style.transitionDelay = (i++ * 0.05) + 's'; });
  }
  targets.forEach(splitWords);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      targets.forEach(function (t) { t.classList.add('split-ready', 'split-in'); });
    });
  });
})();

/* ---- curtain reveal for cards & frames as they enter the viewport ---- */
(function () {
  var els = document.querySelectorAll('.card, .frame');
  if (!els.length) return;
  els.forEach(function (el) { el.classList.add('img-reveal'); });
  if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  els.forEach(function (el) { io.observe(el); });
  setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 1500);
})();

/* ---- click-to-play: swap a video card's thumbnail for a live YouTube embed ---- */
(function () {
  document.querySelectorAll('.card--video[data-yt]').forEach(function (card) {
    var btn = card.querySelector('.play-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var id = card.getAttribute('data-yt');
      var ifr = document.createElement('iframe');
      ifr.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
      ifr.title = 'Video player';
      ifr.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      ifr.allowFullscreen = true;
      card.innerHTML = '';
      card.appendChild(ifr);
    });
  });
})();

/* ---- featured-work tab stage: swap preview image/title/link on hover, closes when the pointer leaves the stage or the page scrolls ---- */
(function () {
  var tabs = document.querySelectorAll('.feat-tab');
  if (!tabs.length) return;
  var stage = document.querySelector('.feat-stage');
  var tabsWrap = document.getElementById('featTabs');
  var preview = document.getElementById('featPreview');
  var link = document.getElementById('featLink');
  var tag = document.getElementById('featTag');
  var title = document.getElementById('featTitle');
  function clearFrame() {
    var v = preview.querySelector('video');
    if (v) v.remove();
  }
  function activate(tab) {
    tabs.forEach(function (t) { t.classList.remove('active'); t.removeAttribute('aria-current'); });
    tab.classList.add('active');
    tab.setAttribute('aria-current', 'true');
    clearFrame();
    var videoSrc = tab.getAttribute('data-video');
    preview.style.backgroundImage = "url('" + tab.getAttribute('data-img') + "')";
    preview.style.backgroundPosition = tab.getAttribute('data-pos') || 'center';
    tag.textContent = tab.getAttribute('data-tag');
    title.textContent = tab.getAttribute('data-title');
    var href = tab.getAttribute('data-href');
    link.setAttribute('href', href);
    if (/^https?:\/\//.test(href)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    } else {
      link.removeAttribute('target');
      link.removeAttribute('rel');
    }
    if (videoSrc) {
      /* self-hosted, silent, chrome-free loop — no YouTube/Vimeo iframe, no player branding or buffering spinner */
      var v = document.createElement('video');
      v.className = 'card__hover-video';
      v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
      v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;';
      v.src = videoSrc;
      preview.appendChild(v);
      v.play().catch(function () {});
      // Freshly-created video + the native autoplay attribute can race each
      // other right after insertion, producing a spurious pause in the first
      // frame or two. Recover from that (and any other unexpected pause)
      // instead of leaving the preview stuck on a still frame — this listener
      // dies naturally with the element when clearFrame() removes it.
      v.addEventListener('pause', function () {
        if (document.body.contains(v)) v.play().catch(function () {});
      });
    }
    preview.classList.add('show');
    stage.classList.add('stage-active');
  }
  function close() {
    userActive = false;
    preview.classList.remove('show');
    stage.classList.remove('stage-active');
    tabs.forEach(function (t) { t.classList.remove('active'); });
    clearFrame();
  }
  // Tracks whether the user is actively hovering/focused on a tab. The
  // IntersectionObserver below re-fires on any intersection-ratio change
  // (not just the initial scroll-into-view), including ones caused by its
  // own DOM writes (inserting/removing the preview <video> shifts layout
  // slightly) — without this guard it would call activate(tabs[0]) and
  // silently reset an in-progress hover/preview back to the first card,
  // pausing/removing whatever video the user was actually looking at.
  var userActive = false;
  tabs.forEach(function (t) {
    t.addEventListener('mouseenter', function () { userActive = true; activate(t); });
    t.addEventListener('focus', function () { userActive = true; activate(t); });
    // The tall hit-zone now sits above the preview's own <a> link (it has to,
    // to catch hover across the whole column including over the image), so a
    // click can no longer reach that link directly. First click/tap/Enter on
    // an inactive tab just activates it (matches hover); a second one, once
    // it's already active, follows the project link instead.
    t.addEventListener('click', function (e) {
      if (t.classList.contains('active')) {
        var href = t.getAttribute('data-href');
        if (/^https?:\/\//.test(href)) {
          window.open(href, '_blank', 'noopener');
        } else {
          window.location.href = href;
        }
        return;
      }
      e.preventDefault();
      activate(t);
    });
  });
  stage.addEventListener('mouseleave', close);
  // Keyboard: keep the preview live while focus is anywhere inside the tab
  // list, close only once focus actually leaves it (tabbing past the last
  // item, or back before the first) — mirrors the mouseleave behavior above.
  tabsWrap.addEventListener('focusout', function (e) {
    if (!tabsWrap.contains(e.relatedTarget)) close();
  });

  /* ---- auto-activate the first item once the stage scrolls into view (no precise hover needed), close once it scrolls back out ---- */
  if ('IntersectionObserver' in window) {
    var stageIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          if (!userActive) activate(tabs[0]);
        } else {
          close();
        }
      });
    }, { threshold: 0.5 });
    stageIo.observe(stage);
  } else {
    window.addEventListener('scroll', close, { passive: true });
  }
})();

/* ---- subtle parallax: hero photo drifts slower than scroll, for a continuous reel feel ---- */
(function () {
  var hero = document.querySelector('.hero-full');
  if (!hero) return;
  function update() {
    var vh = window.innerHeight;
    var hr = hero.getBoundingClientRect();
    var shift = (hr.top + hr.height / 2 - vh / 2) * -0.06;
    hero.style.backgroundPosition = 'center calc(30% + ' + shift.toFixed(1) + 'px)';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ---- video parallax: hover-preview/teaser videos drift ~8% slower than scroll, for depth without being a gimmick ---- */
(function () {
  if (!document.querySelector('.hero-full__video, .card__hover-video')) return;
  function update() {
    var vh = window.innerHeight;
    /* re-query every tick: the featured-work stage injects a video on activate(), well after this runs once at load */
    document.querySelectorAll('.hero-full__video, .card__hover-video').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var shift = (r.top + r.height / 2 - vh / 2) * -0.08;
      el.style.transform = 'translateY(' + shift.toFixed(1) + 'px) scale(1.12)';
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ---- iris wipe on internal navigation, expanding from the click point ---- */
(function () {
  var overlay = document.createElement('div');
  overlay.className = 'pt-overlay';
  overlay.innerHTML = '<span class="pt-mark">F<em>&mdash;&mdash;</em>LR</span>';
  document.body.appendChild(overlay);
  var navigating = false;
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a || navigating) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    if (a.origin && a.origin !== window.location.origin) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigating = true;
    overlay.style.setProperty('--px', ((e.clientX / window.innerWidth) * 100).toFixed(1) + '%');
    overlay.style.setProperty('--py', ((e.clientY / window.innerHeight) * 100).toFixed(1) + '%');
    overlay.classList.add('covering');
    setTimeout(function () { window.location.href = a.href; }, 560);
  });
})();

/* ---- self-hosted preview videos: <video autoplay muted loop playsinline> plays
   immediately on load, no hover/tap/click needed — hover no longer gates playback.
   This just recovers a video that the browser paused on its own (autoplay policy,
   tab backgrounding, etc.) the moment the card actually becomes visible/interacted
   with, instead of requiring the user to trigger the first play. ---- */
(function () {
  document.querySelectorAll('.card__hover-video, .photo-grid video').forEach(function (video) {
    var card = video.closest('.card, .frame, figure');
    function ensurePlaying() {
      if (video.paused) video.play().catch(function () {});
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) ensurePlaying(); });
      }, { threshold: 0.1 });
      io.observe(video);
    }
    if (card) {
      card.addEventListener('mouseenter', ensurePlaying);
      card.addEventListener('touchstart', ensurePlaying, { passive: true });
    }
  });
})();

/* ---- showreel modal: full-bleed lightbox, video src set lazily on first open ---- */
(function () {
  var openBtn = document.getElementById('showreelOpen');
  var modal = document.getElementById('showreelModal');
  if (!openBtn || !modal) return;
  var closeBtn = document.getElementById('showreelClose');
  var video = document.getElementById('showreelVideo');
  var source = video.querySelector('source');
  function open() {
    if (!video.currentSrc) {
      source.src = source.getAttribute('data-src');
      video.load();
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    video.play().catch(function () {});
  }
  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    video.pause();
  }
  openBtn.addEventListener('click', function (e) { e.preventDefault(); open(); });
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
})();

/* ---- hover/touch prefetch: warm the next page's HTML before the iris wipe finishes, so navigation feels instant ---- */
(function () {
  var prefetched = {};
  function isPrefetchable(a) {
    if (!a) return false;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return false;
    if (a.target === '_blank' || a.hasAttribute('download')) return false;
    if (a.origin && a.origin !== window.location.origin) return false;
    return true;
  }
  function prefetch(a) {
    if (!isPrefetchable(a) || prefetched[a.href]) return;
    prefetched[a.href] = true;
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = a.href;
    document.head.appendChild(link);
  }
  document.querySelectorAll('a[href]').forEach(function (a) {
    a.addEventListener('mouseenter', function () { prefetch(a); }, { passive: true });
    a.addEventListener('touchstart', function () { prefetch(a); }, { passive: true });
  });
})();

/* ---- Videography intro reel: honor reduced-motion by holding on the poster frame instead of autoplaying ---- */
(function () {
  var video = document.querySelector('.videography-intro__video');
  if (!video) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
})();

/* ---- Social proof: official platform embed (Instagram today), lazy-loaded near viewport.
   The real production-photo .frame (see HTML) stays visible until an actual embed iframe
   renders — a blocked script or slow network just leaves the real photo in place instead of
   showing a broken or empty box. Reusable for other social-proof instances later; only the
   Atarashi one exists today. ---- */
(function () {
  var nodes = document.querySelectorAll('[data-social-proof]');
  if (!nodes.length) return;
  var scriptRequested = false;
  function loadEmbedScript() {
    if (scriptRequested) return;
    scriptRequested = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    s.onload = function () {
      if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
    };
    document.body.appendChild(s);
  }
  nodes.forEach(function (node) {
    var permalink = node.getAttribute('data-permalink');
    var embedHost = node.querySelector('.social-proof__embed');
    if (!permalink || !embedHost) return;
    function activate() {
      var bq = document.createElement('blockquote');
      bq.className = 'instagram-media';
      bq.setAttribute('data-instgrm-permalink', permalink);
      bq.setAttribute('data-instgrm-version', '14');
      embedHost.appendChild(bq);
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      } else {
        loadEmbedScript();
      }
      // Only hide the real fallback photo once Instagram has actually swapped
      // its blockquote for a live iframe that has real height — never on a bare
      // timer, and never for a collapsed 0-height iframe (Instagram returns one
      // for posts it will not serve), so a failed or blocked embed just leaves
      // the real photo visible instead of blanking the section.
      // Keep the class in sync with the iframe's LIVE height rather than
      // latching once. Instagram resizes asynchronously after insertion, and
      // for content it will not serve publicly it briefly reports a real
      // height and then collapses back to 0 — latching on the first good
      // reading would leave an empty gap where the photo used to be.
      function sync() {
        var f = embedHost.querySelector('iframe');
        var live = !!f && f.getBoundingClientRect().height >= 100;
        node.classList.toggle('is-embedded', live);
      }
      var mo = new MutationObserver(sync);
      mo.observe(embedHost, { childList: true, subtree: true, attributes: true });
      var tries = 0;
      var poll = setInterval(function () {
        sync();
        // Stop polling after ~15s; the MutationObserver still covers later
        // resizes, and a collapse after that point reverts on the next mutation.
        if (++tries > 60) clearInterval(poll);
      }, 250);
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { activate(); io.disconnect(); }
        });
      }, { rootMargin: '400px 0px' });
      io.observe(node);
    } else {
      activate();
    }
  });
})();
