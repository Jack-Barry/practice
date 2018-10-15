class Vehicle {
  isLegal() {
    return true
  }
}

class Car extends Vehicle {
  canBeUsed() {
    return this.isLegal()
  }
}

const myCar = new Car()

console.log(Object.getPrototypeOf(myCar) === Car.prototype)
console.log(Object.getPrototypeOf(myCar) === Vehicle.prototype)
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype)
console.log(Vehicle.prototype.isLegal())
