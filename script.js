// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .project-card, .hero-left').forEach(el => {
  el.classList.add('pre-fade');
  observer.observe(el);
});

// Add CSS for the fade-in effect dynamically (so user only needs to include script.js)
const style = document.createElement('style');
style.innerHTML = `
.pre-fade{opacity:0;transform:translateY(10px);transition:opacity .6s ease,transform .6s ease}
.in-view{opacity:1;transform:none}
`;
document.head.appendChild(style);
