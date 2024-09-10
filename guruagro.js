let list = document.querySelector(".slider1 .roni");
let items = document.querySelectorAll(".slider1 .roni .item");
let dots = document.querySelectorAll(".slider1 .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthitems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthitems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadslider();
};

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthitems;
  } else {
    active = active - 1;
  }
  reloadslider();
};

let autoslide = setInterval(() => {
  next.click();
}, 7000);

function reloadslider() {
  let checkleft = items[active].offsetLeft;
  list.style.left = -checkleft + "px";

  let lastactiveDot = document.querySelector(".slider1 .dots li.active");
  if (lastactiveDot) lastactiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadslider();
  });
});

function toggleMenu() {
  var navbarMenu = document.getElementById("navbar-menu");
  if (navbarMenu.classList.contains("show")) {
    navbarMenu.classList.remove("show");
  } else {
    navbarMenu.classList.add("show");
  }
}
