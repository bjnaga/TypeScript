// lack of type is called void here its an example of void as implicit type
function print(str: string) {
  console.log(str);
}

// void as an explicit type
function nonvoid(): void {}
//  in javascript if functions doesnt return anything and if we still tend to use it it will return undefined = lack of value
print("hi hello " + nonvoid());

let undefVariable: void = undefined;
//  you cannot have any other value other than undefined to void datatype as it will result in error
