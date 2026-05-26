const locationbtn = document.querySelector(".locbtn");
const kbhbtn = document.querySelector(".kbhbtn");

locationbtn.addEventListener("click", btnover);
kbhbtn.addEventListener("click", btnover);
function btnover() {
  console.log("btnover");
  location.href = "forside.html";
}
