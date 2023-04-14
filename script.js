const container = document.querySelector(".container");
const OnOff = document.querySelector(".OnOff");
const text = document.querySelector(".text");

OnOff.addEventListener("change", () => {
  container.classList.toggle("active");

  if (container.classList.contains("active")) {
    document.body.style.backgroundColor = `var(--on-bg-)`;
    text.innerHTML = "Thats Better!";
  } else {
    document.body.style.backgroundColor = `var(--off-bg-)`;
    text.innerHTML = "Turn off the light!";
  }
});
