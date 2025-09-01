const starContainer = document.querySelector(".stars");
const starCount = 150;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.setProperty("--top", Math.random() * 100 + "%");
  star.style.setProperty("--left", Math.random() * 100 + "%");
  star.style.setProperty("--size", Math.random() * 2 + 1 + "px");
  star.style.setProperty("--opacity", Math.random() * 0.5 + 0.5);
  star.style.setProperty("--duration", Math.random() * 3 + 1 + "s");

  starContainer.appendChild(star);
}
