class Shape {
  Area: number

  constructor(a: number) {
    this.Area = a
  }
}

class Circle extends Shape {
  disp(): void {
    console.log(`Area of the circle: ${this.Area}`)
  }
}

const generic = new Shape(57)
const circle = new Circle(28)

console.log(`Generic area: ${generic.Area}`)
circle.disp()
