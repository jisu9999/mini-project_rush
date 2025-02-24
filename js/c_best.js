window.addEventListener("load", function () {
  const swiper1 = new Swiper(".bestSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".bestSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper1-next",
      prevEl: ".swiper1-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3, 
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 4, //브라우저가 769보다 클 때
        spaceBetween: 20,
      },
    },
  });
});
