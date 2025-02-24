window.addEventListener("load", function () {
  const swiper1 = new Swiper(".bestSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".bestSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper1-next",
      prevEl: ".swiper1-prev",
    },
    breakpoints: {
      450: {
        slidesPerView: 2, //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      690: {
        slidesPerView: 3, //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4, //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      // 900: {
      //   slidesPerView: 4, //브라우저가 768보다 클 때
      //   spaceBetween: 30,
      // },
    },
  });
});
