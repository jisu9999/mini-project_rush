window.addEventListener("load", function () {
  // 숫자를 표시할 요소
  const countElement = document.getElementById("count");

  // 버튼 요소 가져오기
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");

  // 초기 값 설정
  let count = 0;

  // + 버튼 클릭 시 숫자 증가
  increaseBtn.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
  });

  // - 버튼 클릭 시 숫자 감소 (0 이하로 내려가지 않음)
  decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
      count--;
      countElement.textContent = count;
    }
  });

  // 상세페이지 나오게 하기
  const subBtn = document.getElementById("subbtn");
  const rvBtn = document.getElementById("rvbtn");
  const mdSub = document.querySelectorAll(".mid-detail-sub");
  const mdRv = document.querySelectorAll(".mid-detail-reivew");
  // 페이지 로드 시 첫 번째 버튼과 내용 활성화

  if (mdSub.length > 0) {
    mdSub.forEach((el) => el.classList.remove("active")); // 모든 요소 비활성화
    mdSub[0].classList.add("active"); // 첫 번째 요소 활성화
  }
  if (subBtn) {
    subBtn.classList.add("active");
  }

  // 버튼 클릭 시 토글
  subBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mdSub.forEach((el) => el.classList.add("active"));
    mdRv.forEach((el) => el.classList.remove("active"));
    subBtn.classList.add("active");
    rvBtn.classList.remove("active");
  });

  rvBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mdRv.forEach((el) => el.classList.add("active"));
    mdSub.forEach((el) => el.classList.remove("active"));
    rvBtn.classList.add("active");
    subBtn.classList.remove("active");
  });
});
