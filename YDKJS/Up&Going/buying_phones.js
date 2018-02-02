"use strict";

function addTax(amount) {
  return amount + (amount * TAX_RATE);
}

function printAmount (amount) {
  console.log("$" + amount.toFixed(2));
}

var TAX_RATE = 0.08;
var ACCESSORIES_PRICE = 9.99;
var PHONE_PRICE = 99.99;

var amount = 0;
var bankAccount = +prompt("Enter amount of money you have", "");    // coerce prompt to numerical value

while(true) {
  if (amount + PHONE_PRICE < bankAccount) {                         // check is you can afford another phone
    amount += PHONE_PRICE;
  } else {
    break;
}
  if (amount + ACCESSORIES_PRICE < bankAccount) {                   // check if you can afford accessorie for the bought phone
    amount += ACCESSORIES_PRICE;
  } else break;
}

printAmount(amount);
printAmount(addTax(amount));

if (addTax(amount) < bankAccount) {
  console.log("Take my money.");
} else {
  console.log("You are too passionate about buying phones and accessories.")
}
