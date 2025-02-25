window.addEventListener("load", function () {
  const cartegori = document.querySelector(".cartegori"); // 카테고리 전체영역
  const header = document.querySelector(".a_header"); // 헤더영역 전체영역

  //카테고리 영역
  cartegori.addEventListener("mouseover", () => {
    header.classList.add("active");
  });

  cartegori.addEventListener("mouseleave", () => {
    header.classList.remove("active");
  });

  // 모바일 영역
  const menuIcon = document.getElementById("menu-icon"); //햄버거바 아이콘
  const closeIcon = document.getElementById("close-icon"); //닫기 아이콘
  const mobileNav = document.getElementById("mobile-nav"); // 모바일메뉴 전체영역

  menuIcon.addEventListener("click", function (e) {
    e.preventDefault();
    mobileNav.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    mobileNav.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });

  //  리사이즈 시 메뉴 닫기
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      mobileNav.classList.remove("active");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });
});
