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
});
