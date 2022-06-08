window.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle__menu'),
    navBar = document.querySelector('.nav__bar'),
    mainTop = document.querySelectorAll('top__product');

  function changeMenu() {
    navBar.classList.toggle('toggle');
    toggleButton.classList.toggle('change');
    document.body.classList.toggle('no__scroll');
    document.body.classList.toggle('open');
  }

  document.addEventListener('click', (e) => {
    const target = e.target,
      menuNav = target == navBar || target.closest('.nav__bar'),
      btnNav = target.closest('.toggle__menu'),
      navActive = navBar.classList.contains('toggle');

    if (!menuNav && !btnNav && navActive) {
      changeMenu();
    }
  });

  toggleButton.addEventListener('click', changeMenu);

  //Modal
  /*const btnModalOpen = document.querySelector('.about'),
        btnModalOpenOrder = document.querySelector('.order'),
    modal = document.querySelector('.modal__about'),
    btnModalClose = document.querySelector('[data-close]');*/

  function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  /*btnModalOpen.addEventListener('click', openModal);
  btnModalOpenOrder.addEventListener('click', openModal);*/

  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function modal(triggerSelector, modalSelector) {
    const btnModalOpen = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

    btnModalOpen.forEach((link) => {
      link.addEventListener('click', () => openModal(modalSelector));
    });

    modal.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal(modalSelector);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal(modalSelector);
      }
    });
  }

  modal('[data-about]', '.modal__about');
  modal('[data-order]', '.modal__order');
});
