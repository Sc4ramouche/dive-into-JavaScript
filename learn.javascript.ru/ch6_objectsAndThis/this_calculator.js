'use strict';
// create 'calculator' object with three methods:
// read() asks for 2 values with prompt and saves
// as object properties
// sum() returns sum of the two passed properties
// mul() returns composition of the two passed properties

let calculator = {
  read: function() {
    this.a = +prompt('Enter first value:', '');
    this.b = +prompt('Enter second value:', '');
  },

  sum: function() {
    if (!this.a || !this.b) {
      console.log(`You didn't set parameters properly`);
      return false;
    }

    return this.a + this.b;
  },

  mul: function() {
    if (!this.a || !this.b) {
      console.log(`You didn't set parameters properly`);
      return false;
    }

    return this.a * this.b;
  }
}
