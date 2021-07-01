const openModalBtns = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementsByClassName('overlay')[0];
const b = document.querySelector('body');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  b.style.overflowY = 'hidden';
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  b.style.overflowY = 'auto';
}

openModalBtns.forEach((openBtn) => {
  openBtn.addEventListener('click', () => {
    const currentModal = document.querySelector(openBtn.dataset.modalTarget);
    openModal(currentModal);
  });
});

closeModalBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const currentModal = closeBtn.closest('.modal');
    closeModal(currentModal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});
