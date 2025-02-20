let flag = 0;
function turnonoff() {
  // console.log("test");
  let lamp = document.getElementById("lamp");
  let kelid = document.getElementById("switch");
  if (flag == 0) {
    lamp.setAttribute("src", "assets/img/bulbon.gif");
    kelid.setAttribute("src", "assets/img/trunOn.png");
    flag = 1;
  } else {
    lamp.setAttribute("src", "assets/img/bulboff.gif");
    kelid.setAttribute("src", "assets/img/trunOff.png");
    flag = 0;
  }
}
