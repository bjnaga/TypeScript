// type annotate it function but we dont have more information or parameter types available including return type information like signature
let productName: Function;

productName = (product: string): string => {
  return product;
};

console.log(productName("TSExetcise"));

// the below code will provide additional function signature and other information
let productName1: (product: string) => string;

productName1 = (product: string) => {
  return product;
};

console.log(productName1("TSExercise"));
