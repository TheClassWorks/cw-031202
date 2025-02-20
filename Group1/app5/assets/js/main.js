let btn = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");
let err = document.querySelector(".err_msg");

function validation() {
  if (username.value.length <= 3 || username.value.length >= 8) {
    err.style.display = "block";
    err.style.color = "red";
    err.innerHTML = "نام کاربری اشتباه است";
  }
}
