'use strict';
// implement sum() function that will
// calculate sum of passed arguments

function sum() {
  const args = [...arguments];
  return args.reduce(function(acc, current) {
    return acc + current;
  },0);
}

// another implementation
function sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
