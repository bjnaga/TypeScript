//restricts a variable or a function parameters can accept
let numberILike: 45 = 45; // it can only value 45 and nothing else
let numberILike1: 34 | 35 = 34; // can only accept 34 or 35

let myString: "Holiday" = "Holiday";
let myString1: "Holiday1" | "Holiday2" = "Holiday1";

//  create your own type myNewType to accept only 5 number mentioned below
type myNewType = 45 | 34 | 46 | 33 | 98;
let numberILike2: myNewType = 34;

//

let tipp = (billAmount: number, tipPercentage: 10 | 20 | 30): number => {
  return (billAmount * tipPercentage) / 100;
};

let tipAmountt = tipp(100, 10);
console.log(tipAmountt);

//-------------------------------------------
type frontEnd = "HTML" | "CSS" | "JavaScript" | "React";

let frontendPathInclude: frontEnd = "HTML";
