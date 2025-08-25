window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login_form");
  form.addEventListener("submit", function (e) {
    const formId = form.querySelector(".id");
    const formPw = form.querySelector(".pw");

    const idValue = formId.value.trim();
    const pwValue = formPw.value.trim();

    if (idValue === "") {
      e.defaultPrevented();
      alert("아이디를 입력해 주세요.");
      formId.focus();
      return;
    }
    if (pwValue === "") {
      e.preventDefault();
      alert("비밀번호를 입력해 주세요.");
      formPw.focus();
      return;
    }
    console.log("폼 제출됨");
  });
});
