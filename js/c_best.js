window.addEventListener("load", function () {
  const swiper1 = new Swiper(".bestSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".bestSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper1-next",
      prevEl: ".swiper1-prev",
    },
  });
});
