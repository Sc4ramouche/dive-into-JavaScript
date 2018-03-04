// implement makeLogging(f, log)
// It has to return wrapper around f, that
// log arguments to log and then pass to f

// example:

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) { /* ваш код */ }

const log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (let i = 0; i < log.length; i++) {
  alert(`Лог:${log[i]}`); // "Лог:1", затем "Лог:5"
}

// solution

function makeLogging(f, log) {
  function wrapper(...rest) {
    log.push(rest);
    return f.call(this, rest);
  }

  return wrapper;
}

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
}

let log = [];
work = makeLogging(work, log);

work(1);
work(5);

for (let i = 0; i < log.length; i++) {
  console.log( log[i] );
}
