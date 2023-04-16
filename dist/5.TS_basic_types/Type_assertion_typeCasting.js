"use strict";
const emp = {
    id: 1,
    name: "naga",
    department: "SE",
};
const hireEmp = JSON.stringify(emp);
console.log(typeof hireEmp);
function getEmployeeInfo(emp) {
    return JSON.parse(emp);
}
console.log(getEmployeeInfo(hireEmp));
