// create function applyAll(func, arg1, arg2, ...)
// it has to call func(arg1, arg2, ...), i.e. pass all the arguments
// from second one and return the result

function applyAll(func, ...rest) {
  return func.apply(this, [].slice.call(rest));
}

console.log(applyAll(Math.max, 2, -2, 3)); // 3
console.log();
