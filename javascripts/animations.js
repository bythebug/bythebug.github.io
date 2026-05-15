/* ============================================================
   Animations & Interactivity — bythebug.github.io
   ============================================================ */

// ── Scroll reveal ──────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Scroll progress bar ────────────────────────────────────
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}

// ── Navbar scrolled state ──────────────────────────────────
const nav = document.querySelector('nav');

function updateNav() {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// ── Active nav section ─────────────────────────────────────
const sectionIds = ['projects', 'about', 'skills', 'experience', 'contact'];
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

function updateActiveNav() {
  let current = '';
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (window.scrollY >= el.offsetTop - 120) current = id;
  }
  navLinks.forEach(a => {
    a.classList.toggle('nav-active', a.dataset.section === current);
  });
}

// ── Bundle scroll handlers ─────────────────────────────────
window.addEventListener('scroll', () => {
  updateScrollProgress();
  updateNav();
  updateActiveNav();
}, { passive: true });

updateScrollProgress();
updateNav();
updateActiveNav();

// ── Cursor glow ────────────────────────────────────────────
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let glowX = mouseX;
let glowY = mouseY;
let rafGlow;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top  = glowY + 'px';
  rafGlow = requestAnimationFrame(animateGlow);
}
animateGlow();

// Hide glow when mouse leaves window
document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursorGlow.style.opacity = '1';
});

// ── Project card spotlight ─────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    card.style.setProperty('--card-x', x + '%');
    card.style.setProperty('--card-y', y + '%');
  });
});

// ── Smooth scroll for anchor links ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
