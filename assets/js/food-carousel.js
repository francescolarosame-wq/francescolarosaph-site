(function () {
  document.querySelectorAll('.food-carousel-wrap').forEach(function (wrap) {
    var track = wrap.querySelector('.food-carousel');
    var prev = wrap.querySelector('[data-carousel-prev]');
    var next = wrap.querySelector('[data-carousel-next]');
    if (!track || !prev || !next) return;
    function step(dir) {
      var slide = track.querySelector('.food-carousel__slide');
      var amount = slide ? slide.getBoundingClientRect().width + 4 : 300;
      track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    }
    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
  });
})();
