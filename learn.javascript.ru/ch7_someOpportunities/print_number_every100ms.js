// implement printNumberInterval()
// that prints numbers from 1 to 20
// with 100ms interval using setInterval

function printNumberInterval() {
  let i = 1;
  const timerId = setInterval(() => {
    console.log(i);
    if (i === 20) clearInterval(timerId);
    i++;
  }, 100);
}

printNumberInterval();

// setTimeout solution

function printNumberInterval() {
  let i = 0;
  const timerId = setTimeout(function count() {
    console.log(++i);
    if (i !== 20) setTimeout(count, 100);
  }, 100);
}

printNumberInterval();
