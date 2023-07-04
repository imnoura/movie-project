const ball = document.querySelector(".toggle-ball");
ball.addEventListener("click", () => {
  ball.classList.toggle("active");
  document.body.classList.toggle("dark");
});
