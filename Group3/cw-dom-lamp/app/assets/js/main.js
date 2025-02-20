// let text = document.getElementById("matn");
// text.style.color = "red";

let flag = false;
function turnLamp() {
  let kelid = document.getElementById("switch");
  let lamp = document.getElementById("lamp");
  if (flag == false) {
    kelid.setAttribute("src", "assets/img/trunOn.png");
    lamp.setAttribute("src", "assets/img/bulbon.gif");
    flag = true;
    console.log(flag);
    
  } else {
    kelid.setAttribute("src", "assets/img/trunOff.png");
    lamp.setAttribute("src", "assets/img/bulboff.gif");
    flag = false;
    console.log(flag);
  }
}


