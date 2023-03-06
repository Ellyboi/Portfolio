const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function closeNav() {
  navMenu.classList.toggle('invisible');
  hamburger.classList.toggle('active');
}

navMenu.addEventListener('click', closeNav);