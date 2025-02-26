window.addEventListener("load", function () {
  var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1, // 한 번에 3개씩 이동
    spaceBetween: 20, // 슬라이드 간격
    breakpoints: {
      //390px보다 클 경우
      391: {
        slidesPerView: 2, // 한 번에 3개씩 보이게
        slidesPerGroup: 2, // 한 번에 3개씩 이동
        spaceBetween: 20, // 슬라이드 간격
      },
      //768px보다 클 경우
      769: {
        slidesPerView: 3, // 한 번에 3개씩 보이게
        slidesPerGroup: 3, // 한 번에 3개씩 이동
        spaceBetween: 20, // 슬라이드 간격
      },
    },
    autoplay: { delay: 3000 },
    disableOnInteraction: false,
    loop: true,
    pagination: {
      el: ".g_event .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
