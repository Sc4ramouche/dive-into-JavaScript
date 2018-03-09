const head = {
  glasses: 1,
};

const table = {
  pen: 3,
};

const bed = {
  sheet: 1,
  pillow: 2,
};

const pockets = {
  money: 2000,
};

pockets.prototype = bed;
bed.prototype = table;
table.prototype = head;
