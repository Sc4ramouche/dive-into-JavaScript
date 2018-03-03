'use strict';
// implement function sum that will work like this:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3

function sum(x) {
  var currentSum = x;

  function func(y) {
    currentSum += y;
    return func;
  }

  func.toString = function() {
    return currentSum;
  };

  return func;
}
