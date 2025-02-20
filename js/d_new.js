window.addEventListener("load", function(){
    const swiper2 = new Swiper(".newSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".newSwiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper2-next",
          prevEl: ".swiper2-prev",
        },
      });
})