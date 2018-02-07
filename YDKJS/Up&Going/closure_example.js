"use strict";

function isMoreThen( x ) {

  function compare( y ) {
    return y > x;
  };

  return compare;
}

let moreThenTen = isMoreThen( 10 );
let moreThenHundred = isMoreThen( 100 );

moreThenTen( 11 );           // true
moreThenTen( 10 );           // false
moreThenTen( 9 );            // false

moreThenHundred( 1111 );     // true
moreThenHundred( 100 );      // false
moreThenHundred( 42 );       // false
