"use:strict";
const keys = document.querySelectorAll(".key");
const border = document.querySelectorAll(".scale_border");

window.addEventListener("keydown", function (e) {
  console.log(e.which);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelectorAll(`.key[date-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
