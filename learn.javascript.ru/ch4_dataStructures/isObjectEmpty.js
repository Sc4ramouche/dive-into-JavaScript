'use strict';
// design a fuction to check if array is empty

function isObjectEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }

  return !counter ? true : false;
}

let schedule = {};

console.log( isObjectEmpty(schedule) );

schedule['wake time'] = '7:00';

console.log( isObjectEmpty(schedule) );
