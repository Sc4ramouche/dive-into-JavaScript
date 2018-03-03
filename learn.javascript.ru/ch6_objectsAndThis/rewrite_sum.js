'use strict';
// Create analogous sum function
// which will sum it's arguments
// use reduce for arguments

function sum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
}

alert(sum([1, 2, 3])); // 6 (=1+2+3)

// Solution 

function sumArgs() {
    let rdc = [].reduce;

    return rdc.call(arguments, (acc, value) => {
        acc += value;
        return acc;
    }, 0);
}

console.log( sumArgs(1, 2, 5) );