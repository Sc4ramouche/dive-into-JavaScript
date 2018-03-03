'use strict'
// create constructor Calculator that creates
// expandeble calculator objects

function Calculator() {

  let methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }

  this.calculate = function(str) {
      let input = str.split(' ');
      let a = +input[0];
      let op = input[1];
      let b = +input[2];

      if (!methods[op] || isNaN(a) || isNaN(b)) return NaN;

      return methods[op](a, b);
  }

  this.addMethod = function(operation, func) {
    methods[operation] = func;
  }
}
