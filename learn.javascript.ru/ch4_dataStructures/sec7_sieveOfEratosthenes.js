"use strict";

var numbers = [];

for (var i = 2; i < 100; i++) {
  numbers[i] = true;
}

var p = 2;

do {
  for (i = 2 * p; i < 100; i += p) {
    numbers[i] = false;
  }

  for (i = p + 1; i < 100; i++) {
    if (numbers[i]) break;
  }

  p = i;
} while (p * p < 100);

var sum = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i]) {
    sum += i;
  }
}

alert( sum );
