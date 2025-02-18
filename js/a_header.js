// $(document).ready(function () {
//     // 햄버거바 클릭
//     $("#hamburger-menu").click(function () {
//       $(".mobile-nav").animate(
//         {
//           right: 0,
//         },
//         300
//       );
//     });
//     // 모바일용 메뉴 클릭시
//     $(".mobile-nav .gnb > li > a").click(function () {
//       // console.log(this);
//       $(this).next(".mobile-nav .gnb .depth2").stop().slideToggle();
//     });
//     // 모바일용 메뉴 닫기 버튼
//     $("#close-menu").click(function () {
//       $(".mobile-nav").animate(
//         {
//           right: "-300px", //메뉴가 오른쪽 밖으로 나가도록함
//         },
//         300
//       );
//     });
//     $(".nav > .gnb ").hover(
//       function () {
//         // 메뉴와 배경 동시 표시
//         $(this).find(".depth2").stop().slideDown();
//         $(".header_bg").stop().slideDown();
//       },
//       function () {
//         // 메뉴와 배경 동시 숨김
//         $(this).find(".depth2").stop().slideUp();
//         $(".header_bg").stop().slideUp();
//       }
//     );