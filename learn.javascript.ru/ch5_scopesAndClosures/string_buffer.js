'use strict';
// Implement string buffer:
// creating object: var buffer = makeBuffer();
// buffer(value) - adds value to inner storage
// buffer() - returns storage value

let buffer = makeBuffer();

buffer('Closures ');
buffer('are ');
buffer('must have');

console.log( buffer() ); // Closures are must have

function makeBuffer() {
  let storage = '';

  return function buffer(stringValue) {
    if (arguments.length === 0) {
      return storage;
    }
    storage += stringValue;
  };
};
