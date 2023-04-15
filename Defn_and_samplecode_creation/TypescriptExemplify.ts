let grade = 95; // its type infering the values
let grade1 = true; // here it automatically consideres boolean
// annotating the code would be the best way to go forward as shown below
let grade3: number = 95;

// if i try to assign the above variables with other data type on the ge it will create error
// The below line is not possible to execute as it cant be parsed by tsc or node and a data type assigned with number cant be assigned with
// with string in the same variable scope.
// grade1 = "123"
