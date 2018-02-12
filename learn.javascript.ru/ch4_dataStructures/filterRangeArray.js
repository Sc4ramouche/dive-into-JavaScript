'use strict';
// develop function filterRange(arr, a, b)
// that returns new array with values from arr
// from a to b

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
console.log( filtered );

function filterRange(arr, a, b) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }

  return result;
}
