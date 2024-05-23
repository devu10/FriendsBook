const slider = document.getElementById("mySlider");
slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");

  if (value > 70) {
    label.textContent = "";
    dispalyAppscreen();
  } else {
    label.textContent = "Slide to unlock";
  }
});

const dispalyAppscreen = () => {
  document.querySelector(".homeScreen").style.display = "none";
  document.querySelector(".appScreen").style.display = "block";
};
