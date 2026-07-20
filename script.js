document.addEventListener('DOMContentLoaded', () => {
  const heroVideo = document.querySelector('.hero-bg video');
  if (heroVideo) {
    heroVideo.playbackRate = 0.35;
    heroVideo.addEventListener('loadedmetadata', () => {
      heroVideo.playbackRate = 0.35;
    });
    heroVideo.play().catch(() => {});
  }

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    document.querySelectorAll('#mainNav a').forEach(a =>
      a.addEventListener('click', () => mainNav.classList.remove('open'))
    );
  }

  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modalText');
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      if (modalText) modalText.textContent = card.dataset.title || '';
      if (modal) modal.classList.add('show');
    });
  });
  const closeModal = document.getElementById('closeModal');
  if (closeModal && modal) closeModal.onclick = () => modal.classList.remove('show');
  if (modal) modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('show');
  });

  const enquiry = document.getElementById('enquiry');
  if (enquiry) enquiry.addEventListener('submit', e => {
    e.preventDefault();
    const n = document.getElementById('name')?.value || '';
    const p = document.getElementById('phone')?.value || '';
    const ev = document.getElementById('event')?.value || '';
    const m = document.getElementById('message')?.value || '';
    window.open(
      'https://wa.me/918541855885?text=' + encodeURIComponent(
        `Hello Yagya Caterer & Decorators!\nName: ${n}\nMobile: ${p}\nEvent: ${ev}\nMessage: ${m}`
      ),
      '_blank'
    );
  });
});
