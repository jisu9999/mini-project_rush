window.addEventListener("load", function () {
    var swiper = new Swiper(".serviceSwiper", {
      slidesPerView: 1, // 한 번에 3개씩 보이게
      slidesPerGroup: 1, // 한 번에 3개씩 이동
      loop: false, // 무한 루프 방지 (2페이지까지만)
      pagination: {
        el: ".h_service .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  });
  