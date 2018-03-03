'use strict';
// three methods: read(), sum(), mul()

function Calculator() {
  let currentValue = 0;

  this.read = function() {
    this.a = +prompt('First value:', '');
    this.b = +prompt('Second value:', '');
  }

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a * this.b;
  }
}
