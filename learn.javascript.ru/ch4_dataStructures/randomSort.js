'use strict';
// use .sort() method with function to
// 'sort' array in random order;

let arr = [1, 2, 3, 4, 5];

arr.sort(function(a, b) {
  return Math.random() - 0.5;
});

console.log( arr );
