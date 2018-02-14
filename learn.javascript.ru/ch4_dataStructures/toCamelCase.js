'use strict';
// develop function camelize(str) that
// converts my-short-string to myShortString

function camelize(str) {
  let array = str.split('-');
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  return array.join('');
}
