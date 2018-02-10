'use strict';
// Implement pow(x, n) function that returns
// x*x n times

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}
