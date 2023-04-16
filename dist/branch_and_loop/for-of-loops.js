"use strict";
let i = ["hi", 1, 2, 3, "hello"];
for (const iterator of i) {
    console.log(iterator);
}
for (const iterator of i.entries()) {
    console.log(iterator);
}
for (let [n, item] of i.entries())
    console.log(`${n} is an index of ${item}`);
for (let [n, item] of i.entries())
    console.log(`${n + 1} is an index of ${item}`);
