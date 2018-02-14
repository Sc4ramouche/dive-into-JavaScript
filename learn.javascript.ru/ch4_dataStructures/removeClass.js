'use strict';
// develop function removeClass(obj, cls)
// that removes classes if they exist

let obj = {
  className: 'open menu'
}

function removeClass(obj, cls) {
  let classArray = obj.className.split(' ');

  for (let i = 0; i < classArray.length; i++) {
    if (classArray[i] === cls) {
      classArray.splice(i, 1);
      // next statement needed to save index order
      // as we change number of elements in the array
      i--;
    }
  }

  return obj.className = classArray.join(' ');
}
