const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('.menu_btn');
const menuIcon = document.querySelector('nav a i');
const links = Array.from(menu.children);

function hideMenu() {
  nav.classList.remove('nav');
  menu.style.display = 'none';
  menuBtn.classList.replace('btn_flex_end', 'btn_flex_center');
  menuIcon.classList.add('primary_b');
  menuIcon.innerHTML = 'menu';
}

function showMenu() {
  nav.classList.add('nav');
  menu.style.display = 'flex';
  menuBtn.classList.replace('btn_flex_center', 'btn_flex_end');
  menuIcon.classList.remove('primary_b');
  menuIcon.innerHTML = 'close';
  menu.style.animation = 'none';
}

function toggleMenu() {
  if (menu.style.display === 'none') {
    showMenu();
  } else {
    hideMenu();
  }
}

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu);

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', hideMenu);
  links[i].addEventListener('touchstart', hideMenu);
}
