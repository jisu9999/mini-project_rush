window.addEventListener("load", function () {
  var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 3, // 한 번에 3개씩 보이게
    slidesPerGroup: 3, // 한 번에 3개씩 이동
    spaceBetween: 20, // 슬라이드 간격
    loop: false, // 무한 루프 방지 (2페이지까지만)
    pagination: {
      el: ".g_event .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
