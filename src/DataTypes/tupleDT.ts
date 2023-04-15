// tuple length of the tuple cant be change, its equal to regular array in JS after compilation
// [string,number] means the tuple can only have 2 values 1st one has to be string and second one number
const courseDetails: [string, number] = ["tuple example", 1234];
console.log(courseDetails);
// the below statement gives error because courseDetails is a constant and the value cannot be assigned
// courseDetails = ["123", 123];
// so the value is non-volatile

// the below type is not explicitly assigned any type before hand hence the compiler will automatically compile it to an array by default
const courseDetails11 = [1234, "tuple example"];
