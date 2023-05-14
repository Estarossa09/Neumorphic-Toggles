const toggleBtns = document.querySelectorAll(".toggle-box");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("toggle-pressed");
  });
});
