'use strict'
// Asks for value with prompt and save it to array
// End of input on empty string, non-number value or pressing 'Cancel'
// 0 doesn't stop intput
// logs sum of the all value

let array = [];
let result = 0;

while (true) {
  let value = prompt('Enter next value', '');

  if ( isNaN(value) || value === null ) break;

  array.push(+value);
}

for (let i = 0; i < array.length; i++) {
  result += array[i];
}

console.log( result );
