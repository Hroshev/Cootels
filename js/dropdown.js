let list = document.getElementsByClassName("tip__box__dropdown");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
