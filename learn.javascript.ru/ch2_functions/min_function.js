'use strict';
// functions 'Hello World'
// write a function which returns the lesser value

function min(a, b) {
  return a <= b? a : b;
}

// with ES6 arrow function
let min = (a, b) => a <= b? a : b;
