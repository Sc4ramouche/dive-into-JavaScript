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

buffer.clear();
buffer('Cleared now?');
buffer();

console.log( buffer() ); // Cleared now?

function makeBuffer() {
  let storage = '';

  return function buffer(stringValue) {
    if (arguments.length === 0) {
      return storage;
    }
    storage += stringValue;

    buffer.clear = function() {
      storage = '';
    }
  };
};
