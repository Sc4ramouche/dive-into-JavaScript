'use strict';
// rewrite for loop using map

let arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

arrLength = arr.map(function(value, index, array) {
  return value.length;
});

alert( arrLength ); // 4,5,2,5
