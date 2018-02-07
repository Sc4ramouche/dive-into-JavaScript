"use strict";

function makeAdder(x) {
  // parameter 'x' is an inner variable

  // inner function 'add()' uses 'x', so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  };

  return add;
}

// 'plusOne gets the reference of the inner 'add()'
// function with closure over 'x' parameter of
// the outside 'makeAdder'
let plusOne = makeAdder(1);

// 'plusTen gets the reference of the inner 'add()'
// function with closure over 'x' parameter of
// the outside 'makeAdder'
let plusTen = makeAdder(10);

plusOne( 3 );     // 4
plusOne( 41 );    // 42

plusTen( 23 );     // 33
