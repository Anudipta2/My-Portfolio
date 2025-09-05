// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Fade-in and slide-up animations for elements with the 'fade-slide' class
  gsap.utils.toArray(".fade-slide").forEach((elem, i) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: i * 0.2,
      ease: "power3.out",
    });
  });

  // 3D mouse parallax effect on container
  const container = document.querySelector(".container");
  if (container) {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    const friction = 1 / 30;

    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      targetX = x;
      targetY = y;
    });

    function animate() {
      currentX += (targetX - currentX) * friction;
      currentY += (targetY - currentY) * friction;

      gsap.to(container, {
        duration: 0.6,
        rotationY: currentX,
        rotationX: -currentY,
        transformPerspective: 500,
        transformOrigin: "center",
        ease: "power1.out",
      });

      requestAnimationFrame(animate);
    }
    animate();
  }

  // Optional: Glowing hover effect on buttons
  gsap.utils.toArray(".btn, .btn-back").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { boxShadow: "0 0 15px 3px #00ccff", scale: 1.05, duration: 0.3 });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { boxShadow: "none", scale: 1, duration: 0.3 });
    });
  });
});
