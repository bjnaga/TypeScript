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
