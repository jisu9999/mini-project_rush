window.addEventListener("load", function () {
  const swiper2 = new Swiper(".newSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
      el: ".newSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper2-next",
      prevEl: ".swiper2-prev",
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      651: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1026: {
        slidesPerView: 4, //브라우저가 1025보다 클 때
        spaceBetween: 20,
      },
    },
  });
});
