const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
  } else {
    search.classList.add("active");
  }
});
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
logout.addEventListener("click", () => {
  sessionStorage.removeItem("jwtToken");
  location.reload();
});
