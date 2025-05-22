const cards = document.querySelectorAll('.certificate-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active from all cards first
      cards.forEach(c => c.classList.remove('active'));
      // Add active to clicked card
      card.classList.add('active');
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    });
  });

  // Optional: click outside to close
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.certificate-card.active')) {
      document.querySelectorAll('.certificate-card.active').forEach(c => c.classList.remove('active'));
      document.body.style.overflow = 'auto';
    }
  });