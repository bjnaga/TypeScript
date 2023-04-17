// in the below code we are passing student object with definition fullName as parameter for student1 object
function studentDB(student1: { fullName: string }): string {
  return student1.fullName;
}
console.log(studentDB({ fullName: "NG" }));
console.log(studentDB({ fullName: "Ammu" }));

//  we could try this approach as well but we will be able to use this object anywhere else as else but in the above we cant use the same object twice
const student = { fullName: "NG" };
console.log(studentDB(student));

// in the below literal objects are not used here unlike previous example
type Student = { fullName: string };
function studentDB1(student1: Student): string {
  return student1.fullName;
}
//Destructuring  property , explained
function studentDB2({ fullName }: Student): string {
  return fullName; // here im trying to destructuring property as we are assessing the property directly rather than through student1.fullName
}

console.log(studentDB2({ fullName: "NG" }));
