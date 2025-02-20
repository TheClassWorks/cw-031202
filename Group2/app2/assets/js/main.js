// let abbas = { id: 1, name: "abbas", family: "mansoori", age: 21, email: "mansoury08@gmail.com" };
// console.log(abbas["age"]);

let users = [
  { id: 1, name: "abbas", family: "mansoori", age: 21, email: "mansoury08@gmail.com" },
  { id: 2, name: "amir", family: "hoseini", age: 19, email: "amir@gmail.com" },
  { id: 3, name: "azar", family: "mohammadi", age: 40, email: "azarmhmdi@gmail.com" },
];

let esm = prompt("نام?");
let lname = prompt("فامیلی?");
let sen = +prompt("سن؟");
let email = prompt("ایمیل");

let newuser = { id: 4, name: esm, family: lname, age: sen, email: email };

if (esm.length <= 3 || esm.length >= 10) {
  alert("نام غیرمجاز");
} else if (lname.length <= 3 || lname.length >= 15) {
  alert("فایملی غیرمجاز");
} else if (isNaN(sen) || sen.length > 3) {
  alert("سن غیرمجاز");
} else {
  users.push(newuser);
}

// let sen = +prompt("سن؟");
// console.log(!isNaN(sen));

console.log(users);
