// for-in loops are used to retrieve the index of an array or tuple , we could use it to get the value as well

let data: (number | string)[] = ["hi", 1, 2, 3, 4, "hello"];

//  The below code will print the index of the the array data
for (let datapoint in data) {
  console.log(datapoint);
  console.log(typeof datapoint);
  // we can use uninary + to convert a string to number in js, its equal to parseInt or parseFloat
  console.log(typeof +datapoint);
  // To access both integer and number
  console.log(`${datapoint} is an index of the number ${data[datapoint]}`);
  // in the above code the ${datapoint} is a string so if try to increment the value by one it will just concat two string
  //  hence convert the string to number by adding +
  console.log(`${+datapoint + 1} is an index of the number ${data[datapoint]}`);
}
