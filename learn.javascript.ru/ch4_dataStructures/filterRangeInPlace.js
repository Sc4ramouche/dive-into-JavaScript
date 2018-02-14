'use strict'
// develop filterRangeInPlace(arr, a, b) function
// arr is the numeric array, function deletes all the
// values from a to b. Function has to change original
// array and return nothing

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
