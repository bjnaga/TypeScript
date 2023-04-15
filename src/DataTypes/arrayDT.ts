// example for array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// example for the array of strings
let prod: string[] = ["bat", "ball", "shoe"];
console.log(prod);

// array of stings and numbers
let mixData: (string | number)[] = ["hi", 1, "hello"];
// | is an example for union operator
console.log(mixData);

let mixData2: (string | number | boolean)[] = ["hi", 1, false];
console.log(mixData2);

// nested number type array
let mynum: number[][] = [[1, 2], [4]];
console.log(mynum);
