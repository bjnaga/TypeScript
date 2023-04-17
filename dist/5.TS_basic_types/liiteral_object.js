"use strict";
function studentDB(student1) {
    return student1.fullName;
}
console.log(studentDB({ fullName: "NG" }));
console.log(studentDB({ fullName: "Ammu" }));
const student = { fullName: "NG" };
console.log(studentDB(student));
function studentDB1(student1) {
    return student1.fullName;
}
