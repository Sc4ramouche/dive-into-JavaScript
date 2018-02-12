'use strict';
// develop function to multiply numeric
// properties of an object by 2

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (isNumeric(obj[key])) obj[key] *= 2;
  }
}

function isNumeric(value) {
  return !isNaN( parseFloat(value) ) && isFinite(value);
}

console.log(menu);        // {width: 200, height: 300, title: "My menu"}
multiplyNumeric(menu);
console.log(menu);        // {width: 400, height: 600, title: "My menu"}
