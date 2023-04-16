// functions are created using the keyword function and the below code has void return type as the return type is not mentioned in the below code
function holidaySale(
  product: string,
  sales: number,
  tax: number,
  discount: number
) {}

// this below code contains return type unlike previous function.
function holidaySale1(
  product: string,
  sales: number,
  tax: number,
  discount: number
): number {
  let x: number = 10;
  return x;
}

function holidaySale11(
  product: string,
  sales: number,
  tax: number,
  discount: number
): number {
  let price: number = 0;
  let x: number = 1;
  let z: string = "1";
  let y: string = "str";
  // == Return true only if the two operands are equal while === returns true only if both values and data types are the same for the two variables
  if (y === "str") console.log("values are same");

  return price;
}

const test = holidaySale1("sunglasses", 10, 0.15, 0.1);
console.log(test);
