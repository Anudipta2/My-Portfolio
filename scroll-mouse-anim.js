// Animate elements on scroll: fade in, slide, etc.
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');

  function onScroll() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.animationPlayState = 'running';
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mouse move parallax effect
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelector('.container').style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
});
