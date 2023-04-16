// type is used to create alternative names for the type number string boolean etc.
type CurrentDiscount = number;
let currentDiscount: CurrentDiscount = 15;
currentDiscount = 5;

// literal type for variable
//  all this will do it make sure the value for customerDiscount will be one of the values and not something else other than 10 | 20 | 30 | 40
let customerDiscount: 10 | 20 | 30 | 40 = 10;

// alternative easier code creation would be something like this
type CustomerDiscount = 10 | 20 | 30 | 40;
let customerDiscountThisSeason: CurrentDiscount = 10;

//  type alias can work with string as well
type TSTutorials = "TS"; // Here "TS" is not a value but a type

let demoDiscount: TSTutorials = "TS"; // this is demoDiscount can only save "TS" literal value.
//  we can use it for array , bool or there things

// But its mostly used to create shape of object

type TsTuts = {
  name: string;
  price: number;
};

const tsTuts: TsTuts = {
  name: "TS",
  price: 100,
  //   version: 10,
};
// The last line of code cannot be added as it might create error while compilation as its definition is not present in the TsTuts type
//  in the error window the lower you go you get a more specific explanation.
