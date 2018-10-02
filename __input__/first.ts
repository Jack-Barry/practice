/*
let a = 5
let b = 5
let c = a + b

console.log(c)
*/
/*
class Car {
  model: string
  doors: number
  isElectric: boolean

  constructor(model: string, doors: number, isElectric: boolean) {
    this.model = model
    this.doors = doors
    this.isElectric = isElectric
  }

  displayMake(): void {
    console.log(`This car is a ${this.model}`)
  }
}

const Prius = new Car('Prius', 4, true)
Prius.displayMake()
*/

interface ICar {
  model: string
  make: string
  display: () => void
}

const Car: ICar = {
  model: 'Prius',
  make: 'Toyota',
  display: () => {
    console.log('Weenie Mobile')
  }
}

Car.display()

export {}
