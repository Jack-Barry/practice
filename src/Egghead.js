const parent = {
  hair: 'brown',
  heightInInches() {
    return this.height * 12
  }
}

// Using Object.create uses the prototype to inherit from
const childA = Object.create(parent)

// Using Object.assign creates a new object entirely
const childB = Object.assign({ height: 5 }, parent)

childA.height = 6

console.log(childA.heightInInches())
console.log(childB.heightInInches())

// This changes the prototype, so the object created using Object.create is
// changed, but the object created using Object.assign is not.
parent.heightInInches = () => true

console.log(childA.heightInInches())
console.log(childB.heightInInches())
