window.addEventListener("load", function () {
  const swiper1 = new Swiper(".bestSwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
      el: ".bestSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper1-next",
      prevEl: ".swiper1-prev",
    },
    breakpoints: {
      530: {
        slidesPerView: 2.5,
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
