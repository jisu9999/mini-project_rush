// 처음 페이지 로드 시 첫번째 섹션을 보이게 설정
window.onload = function () {
  openTab("fresh", document.querySelector(".pickBtn"));
};
function openTab(sectionId, btn) {
  // 모든 섹션 숨기기
  const contents = document.querySelectorAll(".pick-box");
  contents.forEach((content) => (content.style.display = "none"));
  // 모든 버튼에서 'active' 클래스 제거
  const buttons = document.querySelectorAll(".pickBtn");
  buttons.forEach((button) => button.classList.remove("active"));

  // 선택한 섹션만 보이게 하기
  const selectedSection = document.getElementById(sectionId);
  // console.log(selectedSection);
  selectedSection.style.display = "flex";
  
  // 클릭된 버튼에 'active' 클래스 추가하여 색상 변경
  btn.classList.add("active");
}
