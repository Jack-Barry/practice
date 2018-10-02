class Root {
  str: string

  constructor(str: string) {
    this.str = str
  }

  print(): void {
    console.log(`Root says: ${this.str}`)
  }
}

class Child extends Root {
  print(): void {
    console.log(`My str is: ${this.str}`)
  }
}
class Leaf extends Child {
  print(): void {
    super.print()
    console.log('I am a leaf')
  }
}

const r = new Root('Hey')
const c = new Child('Hello')
const l = new Leaf('Hola')

r.print()
console.log('-----')
c.print()
console.log('-----')
l.print()
