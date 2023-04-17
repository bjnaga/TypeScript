//  inline type annotating an object , by doing this we cannot reuse this object anywhere else.
type Product1 = {
  name: string;
  price: number;
  level: string;
};
const productObject: Product1 = { name: "TS", price: 10.99, level: "beginner" }; // we cannot change name, price ,level
// we can restrict multiple objects to use the same type
let productObject1: Product1 = { name: "TS", price: 10.99, level: "beginner" }; // we cannot change name, price ,level
// in the middle of the execution of the program im changing a value of an object
productObject1.level = "intermediate";

// changes on certain object properties can be restricted providing a flag as shown below , so that the properties remains intact thorough out
type Product2 = {
  name: string;
  price: number;
  readonly level: string;
  released?: boolean; // here released is optional
};
// here in the above code im adding level as readonly property and because of this its making we will not be able to modify it later unlike previous example

// in case if i want to add another property that has not been added in the @param Product2 type
type Product3 = {
  name: string;
  price: number;
  readonly level: string;
  released?: boolean;
}; //changing the object property shape will affect already implemented methods, either we may have to make it optional or we will have to manually edit everything,
