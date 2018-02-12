"use strict";
// design a function to display name of the
// person with biggest salary
// if object is empty it should log 'no people'

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

console.log( richestGuy(salaries) );

// used functions
function richestGuy(obj) {
  // if ( isObjectEmpty(obj) ) return 'No data';    below is used more elegant way to check 'no data' case

  let rich = 0;
  let winner = '';

  for (let key in obj) {
    if (obj[key] > rich) {
      rich = obj[key];
      winner = key;
    }
  }

  return winner || 'no data';
}

function isObjectEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }

  return !counter ? true : false;
}
