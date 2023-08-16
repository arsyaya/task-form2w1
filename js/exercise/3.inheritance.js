//Class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `The car is ${this.make} and the model is ${this.model}`;
  }
}

//Inheritance
class ElectricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model);
    this.batteryCapacity = batteryCapacity;
  }

  getInfo() {
    return `${super.getInfo()} It has a battery capacity of ${
      this.batteryCapacity
    } Kwh`;
  }
}

let myElectricCar = new ElectricCar("Tesla", "Roadster", "250");
console.log(myElectricCar.getInfo());
