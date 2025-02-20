window.onload = function () {
  const swiper1 = new Swiper(".bestSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper1-next",
      prevEl: ".swiper1-prev",
    },
  });
  const swiper2 = new Swiper(".newSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper2-next",
      prevEl: ".swiper2-prev",
    },
  });
};
