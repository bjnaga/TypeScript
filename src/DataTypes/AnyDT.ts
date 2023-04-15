// When we dont know what the variable going to be
//  avoid using this unless required
// the below code is automatically considered the below definition of variable as any
let password;
password = 123456;
password = "123456";
//  Here the the above code keeps toggling between number and string as its of type any and its completely dismisses the need for typescript
