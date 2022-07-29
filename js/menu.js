(() => {
  const menuBtnRef = document.querySelector('[data-menu-open]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('[data-body]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-menu-open]'),
//     closeModalBtn: document.querySelector('[data-menu-close]'),
//     modal: document.querySelector('[data-menu-modal]'),
//     body: document.querySelector('[data-body]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();
