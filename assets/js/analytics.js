// Analytics event architecture — GA4. Production property: francescolarosaph.com
// (existing GA4 property, Stream ID 5701922343, linked 17 Aug 2026). Fires
// nothing outside the production domain, so local/dev/staging traffic never
// reaches the real property.
(function () {
  var GA4_MEASUREMENT_ID = 'G-2K4EW0ZWN0';
  var PROD_HOSTS = ['www.francescolarosaph.com', 'francescolarosaph.com'];
  var isProd = PROD_HOSTS.indexOf(location.hostname) !== -1;
  var ga4Configured = GA4_MEASUREMENT_ID.indexOf('XXXXXXXXXX') === -1;

  if (isProd && ga4Configured) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID);
  }

  function track(event, params) {
    params = params || {};
    if (!isProd) {
      if (window.console && console.debug) console.debug('[analytics:dev]', event, params);
      return;
    }
    if (window.gtag) {
      window.gtag('event', event, params);
    }
    // If GA4 isn't configured yet but the site is already live, events are
    // silently dropped rather than queued — nothing to activate retroactively.
  }
  window.track = track; // exposed so contact-form.js and other scripts can report their own events

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || document.title;
    track('page_view', { page: page, path: location.pathname, lang: document.documentElement.lang });

    // CTA clicks — every styled button/link across the site, labeled with its own text.
    document.addEventListener('click', function (e) {
      var el = e.target.closest('.btn, .pill-btn');
      if (!el) return;
      track('cta_click', {
        label: (el.textContent || '').trim().replace(/\s+/g, ' '),
        href: el.getAttribute('href') || null,
        page: page
      });
    });

    // Outbound Instagram clicks.
    document.addEventListener('click', function (e) {
      var el = e.target.closest('a[href*="instagram.com"]');
      if (el) track('instagram_click', { href: el.href, page: page });
    });

    // mailto: links (none on-site today, but this keeps the taxonomy ready if one is added).
    document.addEventListener('click', function (e) {
      var el = e.target.closest('a[href^="mailto:"]');
      if (el) track('email_click', { href: el.href, page: page });
    });

    // Any other outbound link (YouTube, etc.) not already covered above.
    document.addEventListener('click', function (e) {
      var el = e.target.closest('a[href^="http"]');
      if (!el) return;
      if (el.href.indexOf(location.hostname) !== -1) return; // internal link
      if (el.href.indexOf('instagram.com') !== -1) return; // already tracked as instagram_click
      track('external_link_click', { href: el.href, page: page });
    });

    // Project-page views: any page with a client-hero is a portfolio project.
    if (document.querySelector('.client-hero, .film-hero')) {
      track('project_view', { page: page });
    }

    // "How it works" process section, tracked once it's actually seen.
    var processSection = document.getElementById('s09');
    if (processSection && 'IntersectionObserver' in window) {
      var seen = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !seen) {
            seen = true;
            track('process_page_view', { page: page });
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(processSection);
    }
  });
})();
