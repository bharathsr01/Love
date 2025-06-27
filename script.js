// List of images and romantic quotes
const images = [
  { src: 'IMG-20250518-WA0001.jpg', quote: "Every day I see you, my heart skips a beat, hoping one day you'll notice how much you mean to me." },
  { src: 'IMG-20250522-WA0009.jpg', quote: "Your smile brightens my world, even if you never know how much I adore you from afar." },
  { src: 'IMG-20250522-WA0012.jpg', quote: "Loving you in silence is my sweetest secret and my deepest wish." },
  { src: 'IMG-20250522-WA0013.jpg', quote: "I cherish every moment near you, dreaming of the day you might feel the same." },
  { src: 'IMG-20250522-WA0014.jpg', quote: "You are the reason I believe in love, even if it's just one-sided." },
  { src: 'IMG-20250522-WA0015.jpg', quote: "My heart belongs to you, quietly and completely, hoping you'll see me one day." },
  { src: 'IMG-20250522-WA0016.jpg', quote: "If only you knew how much I care, maybe you'd let me love you out loud." },
  { src: 'IMG-20250528-WA0014.jpg', quote: "I fall for you a little more every day, even if you never notice." },
  { src: 'IMG-20250624-WA0005.jpg', quote: "You are my favorite daydream, my silent hope, my one-sided love." },
  { src: 'IMG20240501101551.jpg', quote: "I wish I could tell you how special you are to me, but for now, I'll just love you quietly." },
  { src: 'WhatsApp Image 2025-06-12 at 11.02.48_a3df5e24.jpg', quote: "Maybe someday you'll see me the way I see you—until then, I'll keep loving you from a distance." },
  { src: 'WhatsApp Image 2025-06-24 at 20.22.55_edf5ee69.jpg', quote: "Happy birthday to the one who owns my heart, even if you never know it." }
];

const gallery = document.getElementById('gallery');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreen-img');
const fullscreenQuote = document.getElementById('fullscreen-quote');
const closeBtn = document.getElementById('close-btn');

// Create gallery cards for modal
function renderGallery(idx) {
  const img = images[idx];
  gallery.innerHTML = `
    <div class="card" data-index="${idx}">
      <img src="${img.src}" alt="Romantic ${idx+1}">
      <div class="quote">${img.quote}</div>
    </div>
  `;
  // Fade-in effect
  const card = gallery.querySelector('.card');
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.transition = 'opacity 1s cubic-bezier(.4,2,.6,1)';
    card.style.opacity = 1;
  }, 100);
}

// Render all images as cards in the gallery with their natural aspect ratio
function renderGalleryGrid() {
  gallery.innerHTML = images.map((img, i) => `
    <div class="card" data-index="${i}">
      <img src="${img.src}" alt="Memory ${i+1}" style="width:100%;height:auto;aspect-ratio:auto;object-fit:contain;display:block;" />
      <div class="quote">${img.quote}</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryGrid();
});

// Fullscreen Image Modal Logic
// Use correct variable names for modal elements
let currentFullscreenIdx = null;

gallery.addEventListener('click', function(e) {
    let target = e.target;
    // Find the card or image
    while (target && !target.classList.contains('card')) {
        target = target.parentElement;
    }
    if (target && target.classList.contains('card')) {
        const idx = parseInt(target.getAttribute('data-index'));
        currentFullscreenIdx = idx;
        showFullscreenModal(idx);
    }
});

function showFullscreenModal(idx) {
    currentFullscreenIdx = idx;
    const img = images[idx];
    fullscreen.innerHTML = `
      <div class="fullscreen-content">
        <button id="close-btn" aria-label="Close">&times;</button>
        <img id="fullscreen-img" src="${img.src}" alt="Memory" />
        <div id="fullscreen-quote" class="fullscreen-quote">${img.quote}</div>
        <div class="fullscreen-meta">
          <span class="fullscreen-heart">❤️</span>
          <span class="fullscreen-date">Shared with love • ${new Date().toLocaleDateString()}</span>
        </div>
        <button id="next-btn" class="fullscreen-next">&#8594;</button>
      </div>
    `;
    fullscreen.classList.remove('hidden');
    document.getElementById('close-btn').onclick = function() {
      fullscreen.classList.add('hidden');
      fullscreen.innerHTML = '';
      currentFullscreenIdx = null;
    };
    document.getElementById('next-btn').onclick = function(e) {
      e.stopPropagation();
      let nextIdx = (currentFullscreenIdx + 1) % images.length;
      showFullscreenModal(nextIdx);
    };
    fullscreen.onclick = function(e) {
      if (e.target === fullscreen) {
        fullscreen.classList.add('hidden');
        fullscreen.innerHTML = '';
        currentFullscreenIdx = null;
      }
    };
}

// Keyboard navigation for fullscreen modal
window.addEventListener('keydown', function(e) {
  if (!fullscreen.classList.contains('hidden')) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      fullscreen.classList.add('hidden');
      fullscreen.innerHTML = '';
      currentFullscreenIdx = null;
    } else if ((e.key === 'ArrowRight' || e.key === 'Right') && currentFullscreenIdx !== null) {
      let nextIdx = (currentFullscreenIdx + 1) % images.length;
      showFullscreenModal(nextIdx);
    } else if ((e.key === 'ArrowLeft' || e.key === 'Left') && currentFullscreenIdx !== null) {
      let prevIdx = (currentFullscreenIdx - 1 + images.length) % images.length;
      showFullscreenModal(prevIdx);
    }
  }
});

// Countdown Timer
function getNextBirthday(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  let next = new Date(year, month - 1, day);
  if (next < now) next = new Date(year + 1, month - 1, day);
  return next;
}
function updateCountdown() {
  const nextBirthday = getNextBirthday(6, 27); // June 27
  const now = new Date();
  const diff = nextBirthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  const countdownElem = document.getElementById('countdown');
  if (countdownElem) {
    countdownElem.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti Animation
function confetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;
  const particles = [];
  const colors = ['#e75480', '#f8cdda', '#a18cd1', '#fff5f8', '#f5b6c6'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H - H,
      r: Math.random() * 8 + 4,
      d: Math.random() * 120,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10
    });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    update();
  }
  let angle = 0;
  function update() {
    angle += 0.01;
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) * 1.2;
      p.x += Math.sin(angle) * 2;
      if (p.y > H) {
        p.x = Math.random() * W;
        p.y = -10;
      }
    }
  }
  function loop() {
    draw();
    requestAnimationFrame(loop);
  }
  loop();
}
window.addEventListener('load', confetti);
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Profile date/time logic
window.addEventListener('DOMContentLoaded', function() {
    const dateElem = document.getElementById('profile-date');
    if (dateElem) {
        function updateProfileDate() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateStr = now.getDate() + ' ' + now.toLocaleString(undefined, { month: 'long' }) + ' ' + now.getFullYear();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            const timeStr = hours + ':' + minutes + ' ' + ampm;
            dateElem.textContent = `${dateStr}, ${timeStr}`;
        }
        updateProfileDate();
        setInterval(updateProfileDate, 1000);
    }
});
