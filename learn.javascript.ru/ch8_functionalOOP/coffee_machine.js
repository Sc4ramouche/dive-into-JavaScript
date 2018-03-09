function CoffeeMachine(power) {
  this.waterAmount = 0;

  const WATER_HEAT_CAPACITY = 4200;

  const self = this;

  let timerId;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function () {
    timerId = setTimeout(onReady, getBoilTime());
  };

  this.stop = function () {
    clearTimeout(timerId);
  };
}
