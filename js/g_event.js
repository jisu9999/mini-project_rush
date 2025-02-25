window.addEventListener("load", function () {
  var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 1.5,
    slidesPerGroup: 1, // 한 번에 3개씩 이동
    spaceBetween: 20, // 슬라이드 간격
    breakpoints: {
      390: {
        slidesPerView: 2.5, // 한 번에 3개씩 보이게
        slidesPerGroup: 2, // 한 번에 3개씩 이동
        spaceBetween: 20, // 슬라이드 간격
        autoplay: {
          delay: 1000, // 3초마다 자동 슬라이드
        },
      },
      768: {
        slidesPerView: 3, // 한 번에 3개씩 보이게
        slidesPerGroup: 3, // 한 번에 3개씩 이동
        spaceBetween: 20, // 슬라이드 간격
      },
    },
    loop: true, // 무한 루프 방지 (2페이지까지만)
    pagination: {
      el: ".g_event .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
