'use strict';
// develop function that finds specific value
// and returns it's index or -1 if failed

let arr = ['test', 2, 1.5, false];

console.log( find(arr, "test") ); // 0
console.log( find(arr, 2) ); // 1
console.log( find(arr, 1.5) ); // 2
console.log( find(arr, 0) ); // -1

function find(arr, value) {
  // if indexOf() method is defined
  if (arr.indexOf) {
    return arr.indexOf(value);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

// best variant - we don't have to check
// indexOf every call to find fuction
// if ([].indexOf) {
//
//   var find = function(array, value) {
//     return array.indexOf(value);
//   }
//
// } else {
//   var find = function(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }
//
//     return -1;
//   }
//
// }
