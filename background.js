document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#bg-video");
  const overlay = document.querySelector("#video-overlay");

  // Animate clip-path polygon to open and close softly
  let clipProgress = 0;
  let direction = 1;

  function animateClip() {
    clipProgress += direction * 0.005;
    if (clipProgress > 1) direction = -1;
    else if (clipProgress < 0) direction = 1;

    // Calculate clip polygon points moving dynamically
    // A polygon that "opens" and "closes" horizontally from center outward
    let left = 25 - 25 * clipProgress;
    let right = 75 + 25 * clipProgress;

    video.style.clipPath = `polygon(${left}% 0%, ${right}% 0%, ${right}% 100%, ${left}% 100%)`;
    overlay.style.opacity = 1 - clipProgress * 0.7;

    requestAnimationFrame(animateClip);
  }

  animateClip();

  // Optional: Add parallax effect tied to mouse position
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 20 - 10;
    const y = (e.clientY / window.innerHeight) * 20 - 10;

    video.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    overlay.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
  });
});
