'use strict';
// Implement function sum(a)(b);

function sum(a) {
  return function innerSum(b) {
    return a + b;
  }
}
