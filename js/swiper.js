new Swiper(".swiper", {
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});