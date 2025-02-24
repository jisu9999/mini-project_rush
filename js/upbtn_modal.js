window.addEventListener("load", function () {
  // upbtn 업버튼
  document.getElementById("upBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // 모달창
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });
});
