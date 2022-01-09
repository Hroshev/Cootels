let menuBtn = document.querySelector(".burger-btn");
let menu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");

  if (menuBtn.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    menu.classList.add("active");
  } else {
    document.body.style.overflow = "visible";
    menu.classList.remove("active");
  }
});

for (let elem of document.querySelectorAll(".nav__button")) {
  elem.addEventListener("click", function () {
    document.body.style.overflow = "visible";
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
}