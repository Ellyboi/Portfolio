const toggleMenu = () => {
  const menu = document.getElementById('menuIcon');
  const header = document.getElementById('nav_');
  const closeButton = document.getElementById('close_btn');
  const toggleBars = document.getElementById('menu_hamburger');

  if (!(menu.classList.contains('mobile_menu'))) {
    closeButton.classList.add('show');
    toggleBars.classList.add('hide');
    menu.classList.add('mobile_menu');
    header.classList.add('mobile_header');
    menu.classList.remove('menu');
  } else {
    closeButton.classList.remove('show');
    toggleBars.classList.remove('hide');
    menu.classList.remove('mobile_menu');
    header.classList.remove('mobile_header');
    menu.classList.add('menu');
  }
};
