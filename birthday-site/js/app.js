const C = CONFIG, stage = document.getElementById('stage');
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- original bear mascot (swap this SVG for your own art if you like) ---------- */
function bear(pose = 'stand', cls = '') {
  const custom = (C.mascot || {})[pose];
  if (custom) return `<img class="mascot ${cls}" src="${custom}" alt="">`;
  const F = '#f1d2ae', L = '#5a3a2a', R = '#d6402b', Y = '#f0d878';
  const arms = {
    stand: `<path d="M42 92q-14 14-10 30M78 92q14 14 10 30" />`,
    sign: `<path d="M42 92q-14 14-10 30M78 92q18-8 22-34"/><path d="M100 60V8" /><rect x="84" y="-12" width="34" height="30" fill="#fff" transform="rotate(8 100 3)"/><path d="M92 -6l18 18M110 -6l-18 18" stroke="#2a52c9" stroke-width="5" transform="rotate(8 100 3)"/>`,
    mad: `<path d="M42 92q-22-6-24-28M78 92q22-6 24-28"/>`,
    balloon: `<path d="M42 92q-14 14-10 30M78 92q16-10 20-40"/><path d="M98 52l-8-44M98 52l22-40" stroke-width="1.5"/><ellipse cx="88" cy="-2" rx="11" ry="13" fill="#8ec5e8"/><ellipse cx="122" cy="2" rx="11" ry="13" fill="#f48aa0"/>`,
    back: `<path d="M42 92q-12 12-10 28M78 92q12 12 10 28"/>`
  }[pose] || '';
  const face = pose === 'back' ? '' :
    `<circle cx="48" cy="48" r="3.5" fill="${L}"/><circle cx="72" cy="48" r="3.5" fill="${L}"/><ellipse cx="40" cy="58" rx="5" ry="3" fill="#f4a0a0" stroke="none"/><ellipse cx="80" cy="58" rx="5" ry="3" fill="#f4a0a0" stroke="none"/>` +
    (pose === 'mad' ? `<path d="M40 40l14 4M80 40l-14 4"/><ellipse cx="60" cy="62" rx="6" ry="5" fill="#8a2a22"/>` : `<path d="M54 58q6 6 12 0" fill="none"/>`);
  return `<svg class="mascot ${cls}" viewBox="-14 -20 160 190" fill="none" stroke="${L}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <g ${pose === 'mad' ? 'transform="rotate(-6 60 90)"' : ''}>
  <circle cx="30" cy="24" r="12" fill="${F}"/><circle cx="90" cy="24" r="12" fill="${F}"/>
  <path d="M44 124v22M76 124v22" stroke-width="8"/><rect x="40" y="112" width="40" height="18" rx="6" fill="${Y}"/>
  <rect x="38" y="78" width="44" height="42" rx="12" fill="${R}"/>${arms}
  <circle cx="60" cy="50" r="32" fill="${F}"/>${face}</g></svg>`;
}
const gift = `<svg viewBox="0 0 100 100"><rect x="12" y="38" width="76" height="52" rx="4" fill="#e98a96" stroke="#b3202f" stroke-width="3"/><rect x="8" y="28" width="84" height="16" rx="4" fill="#f0a3ac" stroke="#b3202f" stroke-width="3"/><path d="M44 28h12v62H44z" fill="#cf5a6a"/><path d="M50 28C30 4 14 24 50 28C86 24 70 4 50 28z" fill="#f0a3ac" stroke="#b3202f" stroke-width="3"/></svg>`;
const arc = (t, id) => {
  const w = t.split(' '), port = matchMedia('(orientation:portrait)').matches;
  let lines = [t];
  if (port && t.length > 12) { let best = 1, d = 1e9; for (let i = 1; i < w.length; i++) { const x = Math.abs(w.slice(0, i).join(' ').length - w.slice(i).join(' ').length); if (x < d) { d = x; best = i; } } lines = [w.slice(0, best).join(' '), w.slice(best).join(' ')]; }
  const fs = Math.min(66, Math.floor((port ? 1000 : 1500) / Math.max(...lines.map(l => l.length))));
  const H = lines.length * 90 + 150;
  return `<svg class="arc" viewBox="0 0 800 ${H}">` + lines.map((l, i) => `<path id="${id}${i}" d="M40 ${200 + i * 90}Q380 ${-70 + i * 90} 770 ${150 + i * 90}" fill="none"/><text style="font-size:${fs}px"><textPath href="#${id}${i}" startOffset="50%" text-anchor="middle">${esc(l)}</textPath></text>`).join('') + '</svg>';
};
const card = (inner, cls = '', blob = true) => `<div class="card ${cls}">${blob ? '<i class="blob"></i>' : ''}${inner}</div>`;
const heartBtn = to => `<button class="heart-btn" data-go="${to}" aria-label="Continue">CLICK<br>ME</button>`;

/* ---------- typewriter ---------- */
const timers = new Set();
function type(el, text, speed = 55, done, tick) {
  let i = 0; el.textContent = '';
  const t = setInterval(() => { el.textContent = text.slice(0, ++i); tick && tick(); if (i >= text.length) { clearInterval(t); timers.delete(t); done && done(); } }, speed);
  timers.add(t);
}
const clearTimers = () => { timers.forEach(t => { clearInterval(t); clearTimeout(t); }); timers.clear(); };

/* ---------- scenes ---------- */
const seen = new Set();
const S = {
  lock: { html: () => `<div class="scene lock"><svg class="heart" viewBox="0 0 100 95"><defs><clipPath id="hc"><path d="M50 86C-2 48 8 10 34 10c10 0 16 6 16 12 0-6 6-12 16-12 26 0 36 38-16 76z"/></clipPath><linearGradient id="gd" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff1a8"/><stop offset=".5" stop-color="#e2b52e"/><stop offset="1" stop-color="#a97712"/></linearGradient></defs><path d="M50 86C-2 48 8 10 34 10c10 0 16 6 16 12 0-6 6-12 16-12 26 0 36 38-16 76z" fill="#fff"/><image href="${C.passcodePhoto}" x="0" y="5" width="100" height="85" preserveAspectRatio="xMidYMid slice" clip-path="url(#hc)"/><path d="M50 86C-2 48 8 10 34 10c10 0 16 6 16 12 0-6 6-12 16-12 26 0 36 38-16 76z" fill="none" stroke="url(#gd)" stroke-width="9"/><path d="M50 86C-2 48 8 10 34 10c10 0 16 6 16 12 0-6 6-12 16-12 26 0 36 38-16 76z" fill="none" stroke="#fff6c8" stroke-width="2.5" stroke-dasharray="1 4.5" stroke-linecap="round"/></svg>
    <div class="pad"><p>Enter a passcode</p><div class="dots" id="dots"><i></i><i></i><i></i><i></i></div><div class="keys">${[1,2,3,4,5,6,7,8,9,'*',0,'#'].map(k => `<button data-k="${k}">${k}</button>`).join('')}</div></div></div>`,
    init(el) {
      let code = ''; const dots = $('#dots', el);
      el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
        startMusic(); if (code.length >= 4) return;
        code += b.dataset.k; dots.children[code.length - 1].textContent = '*';
        if (code.length === 4) setTimeout(() => {
          if (code === C.passcode) go('ask');
          else { dots.classList.add('shake'); setTimeout(() => go('wrong'), 350); }
        }, 300);
      });
    } },
  wrong: { html: () => card(`${arc('WRONG PASSCODE', 'a1')}${bear('sign')}<button class="pill" data-go="lock">TRY AGAIN</button>`) },
  ask: { html: () => card(`${arc('I have made something for you', 'a2')}${bear('stand')}<p style="font-size:clamp(22px,4.4vmin,36px)">Do you wanna see it?</p><div class="row"><button class="pill" data-go="excited">YES</button><button class="pill" data-go="mad">NO</button></div>`) },
  mad: { html: () => card(`${arc('HOW DARE YOU!?', 'a3')}${bear('mad')}<button class="pill" data-go="ask">TRY AGAIN</button>`) },
  excited: { html: () => card(`${arc('Are you really excited?', 'a4')}${bear('back')}<div class="row"><button class="pill" data-go="gifts">YES</button><button class="pill" data-go="gifts">YES</button></div>`) },
  gifts: { html: () => card(`${arc('Each gift has something for you..', 'a5')}<div class="gifts">${['birthday','wish','memories','letter','frame'].map((g, i) => `<button class="gift ${seen.has(g) ? 'seen' : ''}" data-go="${g}" aria-label="Open gift ${i + 1}">${gift}</button>`).join('')}</div><div class="typed" id="ty"></div><button class="next" data-go="universe" aria-label="Next">❯</button>`),
    init(el) { type($('#ty', el), 'CLICK ON THE GIFTS', 80); } },
  birthday: { html: () => card(`<div class="t"><small>HAPPY ✦</small><h2>Birthday</h2><p>${esc(C.birthdayText)}</p><span class="ribbon">${esc(C.nickname)}</span><p style="margin-top:1vh">${esc(C.birthday)}</p></div><div class="polaroid"><img src="${C.birthdayPhoto}" alt="Birthday photo"></div><div class="corner">${bear('stand', 'sm')}</div>${heartBtn('gifts')}`, 'bday') },
  wish: { html: () => card(`<h2 id="ty"></h2><svg class="cake" viewBox="0 0 200 190"><g stroke="#b3202f" stroke-width="3" stroke-linejoin="round">${[0,1,2,3,4,5].map(i => `<rect x="${44 + i * 22}" y="34" width="9" height="34" rx="3" fill="#f2a7ad"/><path class="flame" d="M${48.5 + i * 22} 30c-7-8-2-16 0-20 2 4 7 12 0 20z" fill="#ffc94a" stroke="#e08a00" stroke-width="2" style="animation-delay:${i * .12}s"/>`).join('')}<rect x="30" y="68" width="140" height="42" rx="10" fill="#fbe9d0"/><path d="M30 86q10 12 20 0t20 0 20 0 20 0 20 0 20 0" fill="none"/><rect x="12" y="110" width="176" height="56" rx="12" fill="#f3d3a8"/><path d="M12 130q11 13 22 0t22 0 22 0 22 0 22 0 22 0 22 0 22 0" fill="none"/></g></svg><span class="love">I love you</span><div class="corner">${bear('balloon', 'sm')}</div>${heartBtn('gifts')}`, 'wish'),
    init(el) { type($('#ty', el), 'MAKE A WISH', 120); } },
  memories: { html: () => card(`<div class="ransom">${[...'MEMORIES'].map((c, i) => `<span style="background:${['#c9262f','#fff','#222','#e9c46a','#fff','#c9262f','#f4a9b4','#fff'][i]};color:${['#fff','#c9262f','#fff','#222','#222','#fff','#7a1020','#c9262f'][i]};font-family:${['Rubik Mono One','Special Elite','Chewy','Cormorant Garamond'][i % 4]};transform:rotate(${(i % 3 - 1) * 4}deg)">${c}</span>`).join('')}</div><div class="line">${C.memories.map((m, i) => `<button class="pol" data-n="${i}"><img src="${m.img}" alt="Memory ${i + 1}"></button>`).join('')}</div><div class="note" id="note"></div><button class="next" data-go="gifts" aria-label="Back to gifts">❯</button>`, 'mem', false),
    init(el) { const n = $('#note', el); el.querySelectorAll('.pol').forEach(b => b.onclick = () => { const m = C.memories[b.dataset.n]; n.innerHTML = `<div><img src="${m.img}" alt=""><p>${esc(m.note)}</p></div>`; n.classList.add('on'); }); n.onclick = () => n.classList.remove('on'); } },
  letter: { html: () => card(`<div class="paper" id="paper"></div><div class="side"><div class="corner" style="right:0;bottom:6%">${bear('stand', 'sm')}</div></div><button class="next" data-go="gifts" aria-label="Back to gifts" style="right:2%;top:40%;z-index:2;color:#fff">❯</button>`, 'letter', false),
    init(el) {
      const p = $('#paper', el), full = C.letter.join('\n\n') + (C.signoff ? '\n\n' + C.signoff : ''), plain = full.replace(/\*/g, '');
      const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/gs, '<b>$1</b>').replace(/\*(.+?)\*/gs, '<i>$1</i>');
      p.innerHTML = `<h3>${esc(C.letterTitle || 'My fav person')}</h3><div id="lt"></div>`;
      const lt = $('#lt', p); let i = 0, follow = true, t;
      const fin = () => { clearInterval(t); timers.delete(t); lt.innerHTML = fmt(full); };
      t = setInterval(() => { i += 4; lt.textContent = plain.slice(0, i); if (follow) p.scrollTop = p.scrollHeight; if (i >= plain.length) fin(); }, 18);
      timers.add(t);
      ['wheel', 'touchstart'].forEach(e => p.addEventListener(e, () => follow = false, { passive: true }));
      p.addEventListener('click', () => { if (i < plain.length) { i = plain.length; fin(); } });
    } },
  frame: { html: () => card(`<h2>CUTIE, IN FRAME</h2><div class="slides" id="sl">${C.frames.map((f, i) => `<img src="${f}" alt="Photo ${i + 1}" class="${i ? '' : 'on'}">`).join('')}</div><div class="corner">${bear('stand', 'sm')}</div>${heartBtn('gifts')}`, 'frame'),
    init(el) { const im = [...el.querySelectorAll('#sl img')]; let i = 0; const t = setInterval(() => { im[i].classList.remove('on'); i = (i + 1) % im.length; im[i].classList.add('on'); }, 2000); timers.add(t); } },
  universe: { html: () => `<div class="scene"><div class="uni" data-go="final">${C.universe.map((u, i) => `<img src="${u}" alt="Us ${i + 1}">`).join('')}<h2>${esc(C.universeTitle)}</h2></div></div>` },
  final: { html: () => card(`<h2>${esc(C.finalText)}</h2><div class="corner">${bear('balloon', 'sm')}</div><button class="pill" data-go="gifts" style="margin-top:2vh">REPLAY GIFTS</button>`, 'final') }
};

/* ---------- navigation ---------- */
let current = null;
function go(name) {
  if (['birthday','wish','memories','letter','frame'].includes(current)) seen.add(current);
  clearTimers();
  const old = current, s = S[name]; current = name;
  const wrap = document.createElement('div'); wrap.innerHTML = s.html();
  const el = wrap.firstElementChild;
  if (!el.classList.contains('scene')) { el.classList.add('scene'); }
  el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); go(b.dataset.go); }));
  el.dataset.name = name; stage.appendChild(el); s.init && s.init(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('on')));
  if (old) { const o = stage.querySelector(`.scene[data-name="${old}"]`); if (o) { o.classList.remove('on'); setTimeout(() => o.remove(), 550); } }
}
/* wrap card scenes: card() returns .card, so give it a .scene wrapper */
const _go = go;
Object.keys(S).forEach(k => { const h = S[k].html; S[k].html = () => { const r = h(); return r.startsWith('<div class="scene') ? r : `<div class="scene">${r}</div>`; }; });
// the heart-btn and arrows are inside the card; fix data-name lookup for wrapped scenes handled in go().

/* ---------- music ---------- */
const audio = new Audio(C.music); audio.loop = true; audio.volume = .6;
let started = false, muted = false; const mb = $('#mute');
function startMusic() { if (started) return; started = true; audio.play().catch(() => { started = false; }); }
mb.onclick = () => { muted = !muted; audio.muted = muted; mb.classList.toggle('off', muted); startMusic(); };
document.addEventListener('pointerdown', startMusic, { once: true });
go('lock');
