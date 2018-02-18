'use strict';
// develop getSums(arr) function
// that takes an array and generate new
// that contains partial sums

let array = [1, 2, 3, 4, 5];
let arrayNegative = [-2, -1, 0, 1];

function getSums(arr) {
  let result = [];
  if (!arr.length) return result;

  let totalSum =  arr.reduce(function(previousValue, currentValue, index) {
    result.push(previousValue)
    return previousValue + currentValue;
  });
  result.push(totalSum);

  return result;
}
