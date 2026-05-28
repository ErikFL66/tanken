const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

const navlogo = document.querySelector(".logonav");
const mobillogo = document.getElementById("logomobil");

navlogo.addEventListener("click", btnover);
mobillogo.addEventListener("click", btnover);
function btnover() {
  console.log("btnover");
  location.href = "forside.html";
  // style.cursor = "pointer";
}

navlogo.style.cursor = "pointer";
mobillogo.style.cursor = "pointer";
