const openModalBtns = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementsByClassName('overlay')[0];

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalBtns.forEach(openBtn => {
  openBtn.addEventListener('click', () => {
    const currentModal = document.querySelector(openBtn.dataset.modalTarget);
    openModal(currentModal);
  });
});

closeModalBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const currentModal = closeBtn.closest('.modal');
    closeModal(currentModal);
  });
});
