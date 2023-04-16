// recursive type is a type that references itself
// eg an array of nested number and nested array

type NestedArray = number | NestedArray[];
//  type is resolved during compilation and no traces of it will ever exist during runtime

const numbers1: NestedArray = [1, [1, 3]];

const numbers2: NestedArray = [1, [3]];

const numbers3: NestedArray = [1, [3, [4, 5, 5, 6]]];

const numbers4: NestedArray = [1, [3, [4, 5, 5, 6, [23, 456, 567]]]];
