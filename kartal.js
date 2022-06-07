const crossBtn = document.querySelector(".cross");
const hamBtn = document.querySelector(".ham");
const fullMenu = document.querySelector(".full-menu");
const mot3 = document.querySelector(".mot-3");

crossBtn.addEventListener("click", () => {
  fullMenu.classList.remove("active");
});

hamBtn.addEventListener("click", () => {
  fullMenu.classList.add("active");
});

setTimeout(() => {
  mot3.classList.add("red-color");
}, 1700);
