// add public method addWater(amount)
// with all the checks

function CoffeeMachine(power, capacity) {
  let waterAmount = 0;

  const WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error('Amount has to be positive');
    }
    if (amount > capacity) {
      throw new Error(`It is impossible to fill more than ${capacity}`);
    }

    waterAmount = amount;
  };

  this.addWater = function (amount) {
    this.setWaterAmount(waterAmount + amount);
  };

  function onReady() {
    alert('Coffee is ready!');
  }

  this.run = function () {
    setTimeout(onReady, getTimeToBoil());
  };
}
