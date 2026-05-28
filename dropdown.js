const dropdowns = document.querySelectorAll(".dropdown, .dropdown-desktop");

dropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn, .dropdown-btn-desktop");
  const content = dropdown.querySelector(".dropdown-content, .dropdown-content-desktop");

  if (btn && content) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      content.classList.toggle("change");
    });
  }
});

window.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-content, .dropdown-content-desktop").forEach((content) => {
    content.classList.remove("change");
  });
});
