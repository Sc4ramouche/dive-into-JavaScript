'use strict';
// develop a function that calculates
// sum from 1 to n with 3 implementations

// with for loop
function sumTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}

// with recursion
function sumTo(n) {
  if (n !== 1) return n + sumTo(n - 1);
  else return 1;
}

// with arithmetic progression properties
function sumTo(n) {
  return (1 + n) / 2 * n;
}
