'use strict';
// log out random value from an array

let arr = ['apple', 'pineapple', 'orange', 'lemon'];

let [max, min] = [arr.length - 1, 0];
let rand = min + Math.floor(Math.random() * (max + 1 - min));

console.log(arr[rand]);
