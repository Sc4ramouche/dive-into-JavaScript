'use strict';
// develop printList(list) to print list element with loop
// develop printList(list) with recursion
// develop printReverseList(list) reversed print
// develop printReverseList(list) with loop

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// while loop implementation
function printList(list) {
  while (list) {
    console.log( list.value );

    list = list.next;
  }
}

// while loop implementation with opportunity to save beginning of the list
function printList(list) {
  let tmp = list;
  while (tmp) {
    console.log( list.value );

    tmp = tmp.next;
  }
}

// recursion implementation
function printList(list) {
  if (list.next === null) return console.log( list.value );

  console.log( list.value );
  return printList(list.next);
}

// another recursion implementation
function printList(list) {
  console.log( list.value );

  if (list.next) {
    printList(list.next);
  }
}

// Reversed recursion implementation
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log( list.value );
}

// Reversed with loop
function printReverseList(list) {
  let result = [];
  let tmp = list;

  while (tmp) {
    result.push(tmp.value);
    tmp = tmp.next
  }

  for (let i = result.length - 1; i >= 0; i--) {
    console.log( result[i] );
  }
}
