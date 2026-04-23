/* ============================================================
   Animations — scroll reveal + stat counters
   ============================================================ */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Stat counter animation
function animateCounter(el) {
  const target = el.dataset.target;
  const isNumber = !isNaN(target);
  if (!isNumber) return;

  const duration = 1200;
  const start = performance.now();
  const from = 0;
  const to = parseInt(target);

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const current = Math.round(from + (to - from) * eased);
    el.textContent = current.toLocaleString() + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => statObserver.observe(el));

// Share button
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Suraj Van Verma — Backend Engineer & AI Builder',
      text: 'Check out Suraj\'s portfolio — backend systems, AI tooling, McGill MS CS.',
      url: 'https://bythebug.github.io'
    };

    try {
      if (navigator.share) {
        // Native share sheet on mobile
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard on desktop
        await navigator.clipboard.writeText(shareData.url);
        shareBtn.classList.add('copied');
        setTimeout(() => shareBtn.classList.remove('copied'), 2000);
      }
    } catch (err) {
      // User cancelled or error — do nothing
    }
  });
}
