'use strict';
// the task is to copy and sort an array

function arrSort(arr) {
  let result = arr.slice();

  return result.sort();
}

// without function

let arr = ['HTML', 'JavaScript', 'CSS'];

let arrSorted = arr.slice().sort();
