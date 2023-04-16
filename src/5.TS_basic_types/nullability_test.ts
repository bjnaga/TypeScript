let notsure: undefined = undefined; // this variable cannot have any other value other than undefined

//  some cases where where you want to use type undefined but you want to use something else in that place there where union type is use
let notsure1: number | undefined = 5;
// is logical "or" operator , union type works for types , logical "or" operator is used for values.

//  we cannot provide null for undefined
// the below code if uncommented will create an error
// let notsure2: number | undefined = null;
