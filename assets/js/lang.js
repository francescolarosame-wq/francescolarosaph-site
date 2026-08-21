(function () {
  var toggle = document.querySelector('.lang-toggle');
  if (toggle) {
    toggle.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        var lang = a.getAttribute('data-lang');
        if (lang) localStorage.setItem('flr_lang', lang);
      });
    });
  }

  var isHome = document.body.getAttribute('data-page') === 'home';
  var currentLang = document.documentElement.getAttribute('lang');
  var preferred = localStorage.getItem('flr_lang');
  if (isHome && preferred && preferred !== currentLang && !sessionStorage.getItem('flr_lang_redirected')) {
    sessionStorage.setItem('flr_lang_redirected', '1');
    if (preferred === 'it' && currentLang !== 'it') {
      window.location.href = '/it/';
    } else if (preferred === 'en' && currentLang !== 'en') {
      window.location.href = '/';
    }
  }
})();
