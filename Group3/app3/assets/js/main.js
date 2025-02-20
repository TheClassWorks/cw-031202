let err_msg = document.querySelector(".err");
let btn = document.getElementById("login");
let username = document.getElementById("username");

function validation() {
  if (username.value.length <= 3 || username.value.length >= 8) {
    err_msg.style.display = "block";
    err_msg.style.color = "red";
    err_msg.innerHTML = "نام کاربری نادرست است";
  }
}
