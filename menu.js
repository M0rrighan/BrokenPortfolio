var menu = document.querySelector(".menu");
var nav = document.querySelector("nav");
var menu_btn = document.querySelector(".menu_btn");
var menu_icon = document.querySelector("nav a i");

function toggleMenu() {
  if (menu.style.display == "none") {
    nav.classList.add("nav");
    menu.style.display = "flex";
    menu_btn.classList.replace("btn_flex_center", "btn_flex_end");
    menu_icon.classList.remove("primary_b");
    menu_icon.innerHTML = "close";
  } else {
    hideMenu();
  }
  menu.style.animation = "none";
}

function hideMenu() {
  nav.classList.remove("nav");
  menu_btn.classList.replace("btn_flex_end", "btn_flex_center");
  menu_icon.classList.add("primary_b");
  menu_icon.innerHTML = "menu";
  menu.style.display = "none";
}