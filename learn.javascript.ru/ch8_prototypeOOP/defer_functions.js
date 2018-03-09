Function.prototype.defer = function (delay) {
  const f = this;
  return function () {
    const [args, context] = [arguments, this];
    setTimeout(() => {
      f.apply(context, args);
    }, delay);
  };
};
