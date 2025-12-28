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
// alert project belom kelar
// ================================
const onprogress1 = document.getElementById('onprogress2');
const onprogress2 = document.getElementById('onprogress3');

onprogress1.addEventListener('click', function (e) {
  e.preventDefault();
  alert('Project belum selesai 🚧');
});

onprogress2.addEventListener('click', function (e) {
  e.preventDefault();
  alert('Project belum selesai 🚧');
});


// ================================
// FORMSPREE SEND FORM
// ================================

// asyncronous
const form = document.getElementById('contact-form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const data = new FormData(form)

  await fetch("https://formspree.io/f/xgvjkyke", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  })
  console.log(data)
  
  location.reload()
})


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