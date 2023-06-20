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
let user = document.querySelector(".user");
user.innerHTML = "Login/Registration";
if (token) {
  fetch("http://localhost:3030/api/auth/getuser", {
    method: "POST",
    headers: {
      "auth-token": token,
    },
  })
    .then((res) => res.json())
    .then((userdata) => {
      user.innerHTML = !token ? "Login/Registration" : ` ${userdata.name}`;
    });
}
let logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  sessionStorage.removeItem("jwtToken");
  localStorage.clear();
  location.reload();
});
const img = document.createElement("img");
const info = document.querySelector(".info");
if (localStorage.getItem("access_token") != null) {
  fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let user = document.querySelector(".user");
      user.innerHTML = data.given_name;
      img.setAttribute("src", data.picture);
      info.prepend(img);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
}
