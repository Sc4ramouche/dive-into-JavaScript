'use strict';
// sort array of objects by 'age' property

let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };

let people = [ vasya , masha , vovochka ];

people.sort(function(a, b) {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
});

console.log( people );
