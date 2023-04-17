// parameters whose values are not necessarily required, by adding "?" we are able to make this as an option
// if we don't provide the price the ts while transforming wont generate an error
let productName2: (product: string, price?: number) => string;

productName2 = (product: string, price?: number) => {
  //providing default parameter value would solve the error associated with printing undefined printing
  return `${product},${price}`;
};
console.log(productName2("TSExercise"));
