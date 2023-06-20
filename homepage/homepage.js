let image = document.querySelector(".image");
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const dots = document.querySelectorAll(".dot");
let i = 0;
setInterval(() => {
  if (i >= 5) {
    i = 0;
  }
  image.src = `./Resource/${images[i]}`;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[i].classList.add("active");
  i++;
}, 3000);
const urlParams = new URLSearchParams(window.location.hash.substring(1));
const accessToken = urlParams.get("access_token");
urlParams.forEach((value, key) => {
  localStorage.setItem(key, value);
  window.location.href = "http://127.0.0.1:5501/homepage/homepage.html";
  // or sessionStorage.setItem(key, value);
});
