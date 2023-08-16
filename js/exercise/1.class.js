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
