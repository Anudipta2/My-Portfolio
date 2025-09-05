// ========== ANIMATED HEADING LETTERS (stagger) ==========
window.onload = () => {
  document.querySelectorAll('.heading-title .char').forEach((char, i) => {
    char.style.animationDelay = `${i * 0.06}s`;
  });
};

// ========== CARD MOUSE BORDER ANIMATION ==========
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const x = e.offsetX / card.offsetWidth - 0.5;
    const y = e.offsetY / card.offsetHeight - 0.5;
    card.style.boxShadow = `0 ${12 + 16*y}px ${30 + 25*Math.abs(x)}px 6px var(--card-inner-glow)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 6px 24px var(--card-inner-glow)";
  });
});

// ========== CONTACT MODAL TOGGLE ==========
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');

contactBtn.onclick = () => contactModal.classList.add('show');
modalClose.onclick = () => contactModal.classList.remove('show');
window.onclick = (event) => {
  if(event.target === contactModal) contactModal.classList.remove('show');
};

// ========== EMAILJS INTEGRATION ==========
// 1. Sign up at emailjs.com, create a service, get your "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and public key ("YOUR_PUBLIC_KEY")
// 2. Replace the placeholders below:
emailjs.init("YOUR_PUBLIC_KEY"); // <<== REPLACE THIS!!

document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  const form = this;
  const status = document.getElementById('mailStatus');
  status.innerHTML = "Sending...";

  // Replace with your EMAILJS details:
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
    .then(() => {
      status.innerHTML = "✅ Message sent! Thank you.";
      form.reset();
    }, (err) => {
      status.innerHTML = "❌ Message failed. Please try again.";
    });
};
// 3. Customize the email template in EmailJS dashboard to include your desired fields (e.g., name, email, message)
// 4. Test the form by sending a message    