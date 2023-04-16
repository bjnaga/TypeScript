// used to type annotate more than one type to a variable
let i1: number | string = 1;
i1 = "hi";

let tip = (billAmount: number, tipPercentage: string | number): number => {
  // use a control flow to check if its a number or a string
  // here typeof is a type guard
  if (typeof tipPercentage === "number") {
    // here the tipPercentage though it could be both string and number will be equal to number, hence its called "narrowing" down to one type
    return tipPercentage * billAmount;
  }
  // if(typeof tipPercentage==="string"){
  //here it automatically becomes string
  else {
    let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100);
    return calculatedTip;
  }
};

// let tipAmount = tip(100, 0.15);

// let tipAmount = tip(100, "0.20");
// The above statement will give o/p as 0 , we need to give value in percentage as mentioned below.

let tipAmount = tip(100, "20 percentage");

console.log(tipAmount);
