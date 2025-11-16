// ...existing code...
feather.replace();
AOS.init();

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  const video = card.querySelector('video');
  const cardSrc = card.dataset.video;

  // ensure video has data-src fallback
  if (video && !video.dataset.src && cardSrc) {
    video.dataset.src = cardSrc;
  }

  if (!video) return;

  card.addEventListener('mouseenter', () => {
    if (!video.src) {
      video.src = video.dataset.src || '';
    }
    // play may return a promise
    video.play().catch(() => {});
  });

  const leaveHandler = () => {
    try {
      video.pause();
      video.removeAttribute('src');
      video.load();
    } catch (e) {}
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  card.addEventListener('mouseleave', leaveHandler);

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * 10;
    const rotateY = (x - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });
});

// Replace YOUR_EMAILJS_USER_ID, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID with actual values

if (typeof emailjs !== 'undefined') {
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
        .catch(() => alert("Failed to send message. Try again later."));
    });
  }
}

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar-menu");
if (toggle && menu) toggle.addEventListener("click", () => menu.classList.toggle("active"));