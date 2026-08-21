/* =========================================================================
   Interactive "Where I've worked" world map.
   Pairs with assets/css/world-map.css. Homepage only.
   ========================================================================= */
(function () {
  var root = document.getElementById('worldMap');
  if (!root) return;

  var canvas = document.getElementById('worldMapCanvas');
  var linesSvg = document.getElementById('worldMapLines');
  var card = document.getElementById('worldMapCard');
  var pins = Array.prototype.slice.call(root.querySelectorAll('.world-map__pin'));
  var listButtons = Array.prototype.slice.call(document.querySelectorAll('#worldMapList button'));

  var CONTENT = {
    messina:  { eyebrow: 'Base',       title: 'Messina, Sicily',        desc: 'Home base — weddings, brand campaigns and editorial work, with the rest of the map reachable on request.' },
    milan:    { eyebrow: 'Client',     title: 'Milan, Italy',           desc: 'White Milano — fashion trade show, clothing and styling coverage.' },
    rome:     { eyebrow: 'Short film', title: 'Rome, Italy',            desc: 'FONDENTE (2025) — director of photography and camera, directed by Tano Lenzo. Submitted to five festivals in Rome.' },
    prague:   { eyebrow: 'Base away from base', title: 'Prague, Czech Republic', desc: 'Weddings, family and city sessions, Manifesto Market Prague — four years lived here.' },
    boston:   { eyebrow: 'Wedding',    title: 'Boston, USA',            desc: 'A wedding shot on location outside Boston.' },
    newyork:  { eyebrow: 'Client',     title: 'New York, USA',          desc: 'New York Business Fellowship — corporate and event coverage.' },
    hongkong:   { eyebrow: 'Travel film', title: 'Hong Kong &amp; Macao', desc: 'A journey across the culture and architecture of southern China, shot with Peppe Cucè.' },
    barcelona:  { eyebrow: 'Motorsport',  title: 'Barcelona, Spain',      desc: 'Formula 1 coverage.' },
    manchester: { eyebrow: 'Brand',       title: 'Manchester, UK',        desc: 'Labels — brand film.' },
    colombo:    { eyebrow: 'Fashion',     title: 'Colombo, Sri Lanka',    desc: 'Colombo Fashion Week 2025 — coverage coming soon.' }
  };

  function pinPercent(pin) {
    var style = pin.getAttribute('style') || '';
    var left = parseFloat((style.match(/left:([\d.]+)%/) || [0, 0])[1]);
    var top = parseFloat((style.match(/top:([\d.]+)%/) || [0, 0])[1]);
    return { x: left, y: top };
  }

  var basePin = root.querySelector('.world-map__pin--base');
  var basePct = basePin ? pinPercent(basePin) : { x: 50, y: 50 };

  function drawLine(toPct) {
    linesSvg.innerHTML = '';
    if (!toPct) return;
    var x1 = basePct.x / 100 * 800, y1 = basePct.y / 100 * 300;
    var x2 = toPct.x / 100 * 800, y2 = toPct.y / 100 * 300;
    var mx = (x1 + x2) / 2, my = Math.min(y1, y2) - 30;
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' Q ' + mx + ' ' + my + ' ' + x2 + ' ' + y2);
    linesSvg.appendChild(path);
    requestAnimationFrame(function () { path.classList.add('is-active'); });
  }

  function setActive(id) {
    pins.forEach(function (p) { p.classList.toggle('is-active', p.dataset.loc === id); });
    listButtons.forEach(function (b) { b.classList.toggle('is-active', b.dataset.loc === id); });

    var data = CONTENT[id];
    if (data) {
      card.innerHTML =
        '<span class="world-map__card-eyebrow">' + data.eyebrow + '</span>' +
        '<h3 class="world-map__card-title">' + data.title + '</h3>' +
        '<p class="world-map__card-desc">' + data.desc + '</p>';
    }

    var pin = pins.filter(function (p) { return p.dataset.loc === id; })[0];
    if (!pin) return;
    var pct = pinPercent(pin);

    if (id === 'messina') {
      canvas.style.transformOrigin = '50% 50%';
      canvas.classList.remove('is-zoomed');
      drawLine(null);
    } else {
      canvas.style.transformOrigin = pct.x + '% ' + pct.y + '%';
      canvas.classList.add('is-zoomed');
      drawLine(pct);
    }
  }

  pins.forEach(function (pin) {
    pin.addEventListener('click', function () { setActive(pin.dataset.loc); });
    pin.addEventListener('mouseenter', function () { setActive(pin.dataset.loc); });
  });
  listButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setActive(btn.dataset.loc); });
  });

  root.addEventListener('mouseleave', function () { setActive('messina'); });
})();
