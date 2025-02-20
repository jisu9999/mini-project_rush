window.addEventListener("load",function(){
    var swiper = new Swiper(".eventSwiper", {
         slidesPerView: 3,
         pagination: {
           el: ".g_event .swiper-pagination",
           clickable: true,
           renderBullet: function (index, className) {
             return '<span class="' + className + '">' + (index + 1) + "</span>";
           },
         },
       });
 })
 