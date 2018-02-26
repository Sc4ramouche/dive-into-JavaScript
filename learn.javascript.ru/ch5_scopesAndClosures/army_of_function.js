'use strict';
// following code creates array of function-shooters
// but it has flaw, every shooter has to alert
// it's number, but now it's not working properly
// How to fix it?


function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() {
      let myNumber = i; // функция-стрелок
      alert( myNumber ); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5]();

// There are three way of doing so:
// First one: bind value to function explicitly

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function me() {
      alert( me.i );
    };
    shooter.i = i;

    shooters.push(shooter);
  }

  return shooters;
}

// Second one: use additional function to catch
// current value of 'i'

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = (function(x) {

      return function() {
        alert( x );
      };

    })(i);

    shooters.push(shooter);
  }

  return shooters;
}

// Third one:

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++)(function(i) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  })(i);

  return shooters;
}
