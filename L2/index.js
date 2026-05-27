"use strict";
//object array tuple
const student = {
    name: "Anii",
    age: 25,
    xyz: {
        school: [1, 2, 3] //number
    },
};
// console.log(student)
let productdata; //not good 
productdata = ["kaja", 1, "3"];
console.log(productdata);
//!tuple  its kind of fixed size of array like here we are talking about no. and  string in a synchronuscity
const person = {
    name: "kajol",
    age: 29,
    marks: 10,
    class: [10, "tenth"]
};
console.log(person);
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["readonly"] = 2] = "readonly";
})(Role || (Role = {}));
const persondata = {
    name: "kajol",
    age: 10,
    marks: 99,
    role: Role.user
};
if (persondata.role === Role.admin) {
    console.log("admin");
}
else if (persondata.role === Role.user) {
    console.log("user");
}
else {
    console.log("read only");
}
