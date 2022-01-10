for (let elem of document.querySelectorAll(".tip__box__dropdown")) {
  elem.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("tip__box__active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}