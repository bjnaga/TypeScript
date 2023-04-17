// parameters whose values are not necessarily required, by adding "?" we are able to make this as an option
// if we don't provide the price the ts while transforming wont generate an error
let productName2: (product: string, price?: number) => string; // default values cant be used in signature of function it should be instead used with function definition
// default values must be only present within a function definition or constructor
//  without optional parameter the we have to use "?" in price?: number
// productName2 = (product: string, price?: number ) => {
productName2 = (product: string, price: number = 10) => {
  //providing default parameter value would solve the error associated with printing undefined printing
  return `${product},${price}`;
};
console.log(productName2("TSExercise"));
