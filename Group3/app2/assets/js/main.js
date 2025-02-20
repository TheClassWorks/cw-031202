let users = [
  { id: 1, name: "abbas", family: "mansoori", age: 21, email: "mansoury08@gmail.com" },
  { id: 2, name: "amir", family: "hoseini", age: 19, email: "amir@gmail.com" },
  { id: 3, name: "azar", family: "mohammadi", age: 40, email: "azarmhmdi@gmail.com" },
];

let fname = prompt("نام؟");
let lname = prompt("نام خ؟");
let sen = prompt("سن");
let email = prompt("ایمیل");

let newuser = { id: 4, name: fname, family: lname, age: sen, email: email };

if (fname.length <= 3 || fname.length >= 10) {
  alert("نام غیرمجاز");
} else if (lname.length <= 3 || lname.length >= 15) {
  alert("نام خ غیرمجاز");
} else if (isNaN(sen) == true || sen.length > 3) {
  alert("سن نادرست است");
} else {
  users.push(newuser);
}

console.log(users);

// console.log(!isNaN(sen));
