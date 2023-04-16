// never type a value will never occur
function democode(): never {
  while (true) {
    // some random code
  }
}
democode();
//  we know this msg will never occur as long unless something goes wrong in the code
// adding  "allowUnreachableCode": false line to tsconfig.json will make it unreachable if present in code not compile to js.

// console.log("temp msg that might never occur");
