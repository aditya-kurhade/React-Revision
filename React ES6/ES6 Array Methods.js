// There are many JavaScript array methods.
// One of the most useful in React is the .map() array method.
// The .map() method allows you to run a function on each item in the array, returning a new array as the result.
// In React, map() can be used to generate lists.

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((each) => {
    return each * 2;
})