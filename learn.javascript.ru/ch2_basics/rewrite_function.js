'use strict';
// rewrite following function with '?' and '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

// with ternary operator
function checkAge(age) {
  return age > 18 ? true : confirm('Are you allowed?');
}

// with '||' operator
function checkAge(age) {
  return age > 18 || confirm('Are you allowed?');
}
