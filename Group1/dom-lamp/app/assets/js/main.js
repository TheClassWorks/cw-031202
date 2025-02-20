let flag = false;
function switchfunc() {
  let lamp = document.getElementById("lamp");
  let kelid = document.getElementById("switch");
  if (!flag) {
    lamp.setAttribute("src", "assets/img/bulbon.gif");
    kelid.setAttribute("src", "assets/img/trunOn.png");
    flag = true;
  } else {
    lamp.setAttribute("src", "assets/img/bulboff.gif");
    kelid.setAttribute("src", "assets/img/trunOff.png");
    flag = false;
  }
}
