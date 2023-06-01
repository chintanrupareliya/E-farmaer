const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
  } else {
    search.classList.add("active");
  }
});
let image = document.querySelector(".image");
console.log(image.src);
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const dots = document.querySelectorAll(".dot");
let i = 0;
setInterval(() => {
  if (i >= 5) {
    i = 0;
  }
  image.src = `http://127.0.0.1:5500/homepage/Resource/${images[i]}`;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[i].classList.add("active");
  i++;
}, 3000);
const token = sessionStorage.getItem("jwtToken");
console.log(token);
fetch("http://localhost:3030/api/auth/getuser", {
  method: "POST",
  headers: {
    "auth-token": token,
  },
})
  .then((res) => res.json())
  .then((userdata) => {
    let user = document.querySelector(".user");
    console.log(user);
    user.innerHTML = !token ? "Login/Registration" : ` ${userdata.name}`;
  });
const logout = document.querySelector(".logout1");
logout.addEventListener("click", () => {
  sessionStorage.removeItem("jwtToken");
  location.reload();
});
