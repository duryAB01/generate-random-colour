let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;

  document.querySelector(".heart").style.setProperty("--heart-color", color);
  document.querySelector("h1").style.color = color;
});
