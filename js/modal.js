(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  const body = document.querySelector('[data-body]');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', disableScroll);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', enableScroll);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  //ScrollLock
  function enableScroll() {
    bodyScrollLock.enableBodyScroll(body);
  }

  //ScrollLock
  function disableScroll() {
    bodyScrollLock.disableBodyScroll(body);
  }
})();
