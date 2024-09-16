"use strict";


"use strict";

// Задача 2. Створити об’єкт «Авто».

class Car {
  constructor(model, tank, availLiters, places, passengers) {
    this.model = model;
    this.tank = tank;
    this.availLiters = availLiters;
    this.places = places;
    this.passengers = passengers;
  }
  refueling(liters) {
    this.availLiters += liters;
  }
  numbeOfPassengers() {
    this.passengers;
  }
  additionOfPassengers(passNum) {
    this.passengers += passNum;
  }
  disembarkationOfPassengers(passNum) {
    this.passengers -= passNum;
  }
}

let myCar = new Car("ford", 300, 200, 4, 4);

console.log(myCar);

myCar.disembarkationOfPassengers(1);