'use strict';
// develop function filter(arr, funct) with 'preinstalled'
// options: inBetween, inArray

function filter(arr, func) {
  let result = [];

  result = arr.reduce(function(acc, item) {
    if ( func(item) ) acc.push(item);
    return acc;
  }, result);

  return result
}

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.indexOf(x) !== -1;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
