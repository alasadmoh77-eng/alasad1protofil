/* 
 * Professional Developer Portfolio
 * Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollAnimations();
});

/* --- Theme Management --- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('span'); // Assuming text or icon inside

  // Check saved theme or default to dark (which is base)
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    updateToggleIcon(true);
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateToggleIcon(isLight);
  });
}

function updateToggleIcon(isLight) {
  const themeToggle = document.getElementById('theme-toggle');
  // Simple text swap or icon swap logic
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
}

/* --- Scroll Animations (Intersection Observer) --- */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
  });
}
