'use strict';
// the question is how to sort array
// in reverse order?

let arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

// another way: 
// function compareReversed(a, b) {
//   return b - a;
// }
//
// arr.sort(compareReversed);

console.log( arr );
