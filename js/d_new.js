window.addEventListener("load", function () {
  const swiper2 = new Swiper(".newSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".newSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper2-next",
      prevEl: ".swiper2-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 4, //브라우저가 769보다 클 때
        spaceBetween: 20,
      },
    },
  });
});
