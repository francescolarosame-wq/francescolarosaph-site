(function () {
  var overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = sessionStorage.getItem('flr_intro_seen');

  if (reduced || seen) {
    overlay.remove();
    return;
  }

  sessionStorage.setItem('flr_intro_seen', '1');
  document.body.style.overflow = 'hidden';

  var finish = function () {
    overlay.className = 'intro-overlay';
    document.body.style.overflow = '';
    setTimeout(function () { overlay.remove(); }, 500);
  };

  var run = function () {
    overlay.className = 'intro-overlay running closing';
    setTimeout(function () { overlay.classList.add('flashing'); }, 560);
    setTimeout(function () {
      overlay.classList.remove('flashing');
      overlay.classList.add('fading');
    }, 700);
    setTimeout(finish, 1200);
  };

  var skipBtn = overlay.querySelector('.intro-skip');
  if (skipBtn) skipBtn.addEventListener('click', finish);

  overlay.classList.add('running');
  requestAnimationFrame(function () {
    requestAnimationFrame(run);
  });
})();
