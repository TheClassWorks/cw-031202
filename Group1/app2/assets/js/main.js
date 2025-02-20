let users = [
  { id: 1, fname: "ali", lname: "rezaei", age: 15, email: "rezaei@gmail.com" },
  { id: 2, fname: "sanaz", lname: "alavi", age: 18, email: "sanaz@gmail.com" },
  { id: 3, fname: "mhmd", lname: "lak", age: 25, email: "lak@gmail.com" },
];

let esm = prompt("name?");
let family = prompt("family?");
let sen = Number(prompt("senet?"));
let email = prompt("email?");

// if (esm.length >= 3 && esm.length <= 10 && family.length >= 3 && family.length <= 15 && !isNaN(sen) && sen.length <= 3) {
//   let newuser = { id: 4, fname: esm, lname: family, age: sen, email: email };
//   users.push(newuser);
// }

if (esm.length <= 3 || esm.length >= 10) {
  console.log("نام غیرمجاز");
} else if (family.length <= 3 || family.length >= 15) {
  console.log("نام خ غیرمجاز");
} else if (isNaN(sen) || sen.length >= 3) {
  console.log("سن غیرمجاز");
} else {
  let newuser = { id: 4, fname: esm, lname: family, age: sen, email: email };
  users.push(newuser);
}
/*   یه مدل دیگه کامنت 
console.log(!isNaN(sen));
*/

//

console.log(users);
