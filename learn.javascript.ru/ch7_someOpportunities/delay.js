// create function delay(f, ms)
// that returns wrapper around f
// that delays it's call for ms

function delay(f, ms) {
  return function () {
    const savedThis = this;
    const savedArgs = arguments;

    setTimeout(() => {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}

function f(x) {
  console.log(x);
}

const f1000 = delay(f, 1000);

f1000('heyo');
