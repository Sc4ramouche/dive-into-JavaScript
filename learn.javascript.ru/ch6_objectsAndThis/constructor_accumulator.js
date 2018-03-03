'use strict';
// implement constructor function Accumulator
// it holds current value in 'value' property
// .read() adds to 'value' what user prompts

function Accumulator() {
  this.value = 1;

  this.read = function() {
    this.value += +prompt('Add _', '');
  };
}

const accum = new Accumulator();
accum.read();
accum.read();
console.log( accum.value );
