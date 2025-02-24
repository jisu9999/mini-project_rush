window.addEventListener("load", function () {
    const cartegori = document.querySelector(".cartegori");
    const header = document.querySelector(".a_header");
  
    cartegori.addEventListener("mouseover", () => {
      header.classList.add("active");
    });
  
    cartegori.addEventListener("mouseleave", () => {
      header.classList.remove("active");
    });
  });