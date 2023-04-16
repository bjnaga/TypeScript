//
type Employee = {
  id: number;
  name: string;
  department: string;
};

const emp: Employee = {
  id: 1,
  name: "naga",
  department: "SE",
};
// to convert the above object to be stored on browser we need to convert it to json string

const hireEmp = JSON.stringify(emp);
console.log(typeof hireEmp); // This value will be in string

// json cant type annotate json object so it will by default consider json return as "any" type
// since we know more about the object here than TS as the return type is emp  we will type cast it manually
// There are two ways of doing this so far
function getEmployeeInfo(emp: string) {
  //   return JSON.parse(emp);

  // old method type casting
  //   return (<Employee>JSON.parse(emp)).name;
  // return (<Employee>JSON.parse(emp))

  // new method type casting
  return JSON.parse(emp) as Employee;
}

console.log(getEmployeeInfo(hireEmp));
