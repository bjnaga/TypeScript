//  can be used for any iterable loops like arrays we have seen for-loop.ts|.js

let i: (string | number)[] = ["hi", 1, 2, 3, "hello"];
//  The below code only prints the items in an array
for (const iterator of i) {
  console.log(iterator);
}

// we can print both index of an item and the array
for (const iterator of i.entries()) {
  console.log(iterator);
}

// destructuring of array

for (let [n, item] of i.entries()) console.log(`${n} is an index of ${item}`);

// if we want to offset the value of index by 1 rather than starting from default value 0
for (let [n, item] of i.entries())
  console.log(`${n + 1} is an index of ${item}`);
