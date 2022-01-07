let roomsNav = document.getElementById("rooms");
roomsNav.onclick = () => {
  const box = document.querySelector(".rooms__indent");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

let reserv = document.getElementById("reserv");
reserv.onclick = () => {
  const box = document.querySelector(".header__content");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

let contacs = document.getElementById("contacs");
contacs.onclick = () => {
  const box = document.querySelector(".footer__contact");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

let rooms = document.getElementById("manyRooms");
rooms.onclick = () => {
  const box = document.querySelector(".rooms__indent");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};