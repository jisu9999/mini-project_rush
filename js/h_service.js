window.addEventListener("load", function () {
  var swiper = new Swiper(".serviceSwiper", {
    slidesPerView: 1, // 한 번에 3개씩 보이게
    slidesPerGroup: 1, // 한 번에 3개씩 이동
    loop: true,
    autoplay: { delay: 3000 },
    disableOnInteraction: false,
    pagination: {
      el: ".h_service .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
