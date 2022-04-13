const toggleButton = document.querySelector('.toggle__menu'),
  navBar = document.querySelector('.nav__bar');

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
