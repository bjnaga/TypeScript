"use strict";
let data = ["hi", 1, 2, 3, 4, "hello"];
for (let datapoint in data) {
    console.log(datapoint);
    console.log(typeof datapoint);
    console.log(typeof +datapoint);
    console.log(`${datapoint} is an index of the number ${data[datapoint]}`);
    console.log(`${+datapoint + 1} is an index of the number ${data[datapoint]}`);
}
