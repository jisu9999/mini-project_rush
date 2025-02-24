window.addEventListener("load", function () {
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".visual-sw", {
      loop: true,
      autoplay: { delay: 3000 },
      // spaceBetween: 10,
      // pagination: { el: ".swiper-pagination", clickable: true },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
  });
});
