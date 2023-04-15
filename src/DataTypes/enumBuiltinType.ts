// set of named constants(collections of related values that could be numeric or string) there are 3 types
// numeric enum
// variable name for enum must be in PascalCase is similar to camelCasing as mentioned in here with example
enum RollNumber {
  Ranga,
  Thimma,
  Manga,
  Thangha,
}
console.log(RollNumber);
// the below code prints the values from 1 rather than 0 unlike previous example where the values were printed from 0 by default.
enum RollNumber1 {
  Ranga = 1,
  Thimma,
  Manga,
  Thangha,
}
console.log(RollNumber1);
// This is not represtnted in the js file as there is not representation for this code
const enum RollNumber11 {
  Ranga = 1,
  Thimma,
  Manga,
  Thangha,
}
let studentlist: RollNumber11 = RollNumber11.Ranga;
console.log(studentlist);

// string enum
enum Student_detail {
  Name = "NG",
  Major = "MCA",
}
console.log(Student_detail);

const enum Student_detail1 {
  Name = "NG",
  Major = "MCA",
}
console.log(Student_detail1.Major);

// heterogeneous enum
