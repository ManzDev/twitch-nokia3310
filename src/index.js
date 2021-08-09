const nokia3310 = document.querySelector(".nokia3310");
const button = document.querySelector("button");
const audio = new Audio("music.mp3");

button.addEventListener("click", () => {
  document.body.classList.add("dark");
  nokia3310.classList.add("on");
  audio.play();
  button.disabled = true;
});
