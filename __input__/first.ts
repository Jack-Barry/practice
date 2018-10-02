class Car {
  // field
  engine: string

  // constructor
  constructor(engine: string) {
    this.engine = engine
  }

  // function
  disp(): void {
    console.log(`Engine is: ${this.engine}`)
  }
}

const vw = new Car('350cc')

console.log(vw.engine)
vw.disp()
