function Car(make) {
  this.make = make
}

function Boat(engine) {
  this.engine = engine
}

Object.setPrototypeOf(Boat.prototype, Car.prototype)

const myBoat = new Boat('Mercury')
const myCar = new Car('Ford')

// instanceof checks all properties of constructor appear in prototype chain of
// object.
console.log(myCar instanceof Car)
console.log(myBoat instanceof Car)

// Repeating as classes
class CarC {
  constructor(make) {
    this.make = make
  }
}

class BoatC {
  constructor(engine) {
    this.engine = engine
  }
}

Object.setPrototypeOf(BoatC.prototype, CarC.prototype)

const myBoatC = new BoatC('Mercury')
const myCarC = new CarC('Ford')

console.log(myCarC instanceof CarC)
console.log(myBoatC instanceof CarC)
