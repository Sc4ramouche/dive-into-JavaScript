'use strict';
// create addClass function that adds
// class names to the existing property

function addClass(obj, cls) {
  let classes = obj.className ? obj.className.split(' ') : [];

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === cls) return;
  }

  obj.className = classes.join(' ');
  console.log( obj );
}
