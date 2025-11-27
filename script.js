// Feather icon & AOS
feather.replace();
AOS.init();

// ================================
// PROJECT CARD HOVER VIDEO
// ================================
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  const video = card.querySelector('video');
  const cardSrc = card.dataset.video;

  if (!video) return;

  // Set data-src fallback
  if (!video.dataset.src && cardSrc) {
    video.dataset.src = cardSrc;
  }

  // Hover masuk
  card.addEventListener('mouseenter', () => {
    if (!video.src) {
      video.src = video.dataset.src || "";
    }
    video.play().catch(() => {});
  });

  // Hover keluar
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.removeAttribute('src'); 
    video.load();
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });

  // Gerak 3D
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * 10;
    const rotateY = (x - 0.5) * -10;

    card.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.03)
    `;
  });
});

// ================================
// EMAILJS SEND FORM
// ================================

if (window.emailjs) {
  emailjs.init("DR8nRGlGyS9KKUVCf");

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      emailjs.sendForm("service_814a7qg", "template_myyni1q", form)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to send message. Try again later.");
        });
    });
  }
}

// ================================
// MOBILE MENU TOGGLE
// ================================
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}