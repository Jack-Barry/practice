interface Person {
  age: number
}

interface Musician extends Person {
  instrument: string
}

let drummer = <Musician>{}
drummer.age = 23
drummer.instrument = 'drums'

console.log(`${drummer.age} years old, plays the ${drummer.instrument}`)

interface Parent1 {
  v: number
}

interface Parent2 {
  w: number
}

interface Child extends Parent1, Parent2 {}

let chld: Child = { v: 4, w: 17 }
console.log(chld.v + chld.w)
