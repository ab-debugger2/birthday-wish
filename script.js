/* Floating emojis */

const floating = document.getElementById('floating');

const emojis = [
  '💖',
  '🎈',
  '🌸',
  '✨',
  '🦋',
  '🌺',
  '💕',
  '🎀'
];

for(let i = 0; i < 25; i++){

  const s = document.createElement('span');

  s.textContent =
  emojis[Math.floor(Math.random() * emojis.length)];

  s.style.left =
  Math.random() * 100 + '%';

  s.style.fontSize =
  (16 + Math.random() * 24) + 'px';

  s.style.animationDuration =
  (8 + Math.random() * 12) + 's';

  s.style.animationDelay =
  (Math.random() * 10) + 's';

  floating.appendChild(s);
}

/* Countdown */

let birthday = new Date();

birthday.setSeconds(
  birthday.getSeconds() + 10
);

const startBtn =
document.getElementById('startBtn');

function updateCountdown(){

  const now = new Date();

  const diff = birthday - now;

  if(diff <= 0){

    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';

    startBtn.classList.add('show');

    return;
  }

  const d =
  Math.floor(diff / (1000 * 60 * 60 * 24));

  const h =
  Math.floor((diff / (1000 * 60 * 60)) % 24);

  const m =
  Math.floor((diff / (1000 * 60)) % 60);

  const s =
  Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent =
  String(d).padStart(2,'0');

  document.getElementById('hours').textContent =
  String(h).padStart(2,'0');

  document.getElementById('minutes').textContent =
  String(m).padStart(2,'0');

  document.getElementById('seconds').textContent =
  String(s).padStart(2,'0');
}

updateCountdown();

setInterval(updateCountdown,1000);

/* Confetti */
function launchConfetti(){

  const colors = [
    '#ff6f91',
    '#d81b60',
    '#ffc75f',
    '#ff80ab',
    '#ffffff',
    '#ffeb3b'
  ];

  for(let i = 0; i < 800; i++){

    const confetti =
    document.createElement('div');

    confetti.classList.add('confetti-piece');

    confetti.style.left =
    Math.random() * 100 + 'vw';

    confetti.style.background =
    colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration =
    (1 + Math.random() * 2) + 's';

    confetti.style.opacity =
    Math.random();

    confetti.style.transform =
    `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    setTimeout(() => {

      confetti.remove();

    },7000);
  }
}

/* Reveal helper */

function reveal(id){

  const el =
  document.getElementById(id);

  el.classList.remove('hidden');

  el.classList.add('fade-in');

  setTimeout(() => {

    el.scrollIntoView({
      behavior:'smooth'
    });

  },100);
}

/* Cake */

const cake =
document.getElementById('cake');

const flame =
document.getElementById('flame');

const cakeHint =
document.getElementById('cakeHint');

const toGalleryBtn =
document.getElementById('toGalleryBtn');

let cakeTapped = false;

/* Start */

startBtn.addEventListener('click',() => {

  launchConfetti();

  reveal('wish');
});

/* Wish to Cake */

document.getElementById('toCakeBtn')
.addEventListener('click',() => {

  reveal('cake-section');
});

/* Cake click */

cake.addEventListener('click',() => {

  if(cakeTapped) return;

  cakeTapped = true;

  flame.classList.add('out');

  cakeHint.textContent =
  '🎉 Yayyy! Your wish will come true! 🎉';

  launchConfetti();

  toGalleryBtn.classList.add('show');
});

/* Gallery */

toGalleryBtn.addEventListener('click',() => {

  reveal('gallery');
});

/* Message */

document.getElementById('toMessageBtn')
.addEventListener('click',() => {

  reveal('message');
});

/* Thanks */

document.getElementById('toThanksBtn')
.addEventListener('click',() => {

  reveal('thanks');

  launchConfetti();
});

/* Reset */

document.getElementById('celebrate-again')
.addEventListener('click',() => {

  ['wish',
   'cake-section',
   'gallery',
   'message',
   'thanks'
  ].forEach(id => {

    const el =
    document.getElementById(id);

    el.classList.add('hidden');

    el.classList.remove('fade-in');
  });

  cakeTapped = false;

  flame.classList.remove('out');

  cakeHint.textContent =
  '👆 Tap the cake!';

  toGalleryBtn.classList.remove('show');

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

  launchConfetti();
});