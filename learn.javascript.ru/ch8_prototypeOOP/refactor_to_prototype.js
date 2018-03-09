function CoffeeMachine(power) {
  let waterAmount = 0;

  const WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function () {
    setTimeout(() => {
      alert('Кофе готов!');
    }, getTimeToBoil());
  };

  this.setWaterAmount = function (amount) {
    waterAmount = amount;
  };
}

const coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

// Solution

function CoffeeMachine(power) {
  this._power = power;
  this._waterAmount = 0;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype.getTimeToBoil = function () {
  
  return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};
