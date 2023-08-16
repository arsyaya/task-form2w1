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

//Object
let myCar1 = new Car("Mazda", "Rx-7");
let myCar2 = new Car("Mitshubishi", "Lancer");
let myCar3 = new Car("Nissan", "GTR");

console.log(myCar1.getInfo());
