let username = document.getElementById("username");
let btn = document.getElementById("login");
let err_msg = document.querySelector(".err");

function validation() {
  if (username.value.length <= 3 || username.value.length >= 8) {
    err_msg.style.display = "block";
    err_msg.style.color = "red";
  }
}
