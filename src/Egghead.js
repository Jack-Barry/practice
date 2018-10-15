'use strict'

const foo = {
  name: 'jack'
}

const bar = { lastName: 'barry' }

Object.setPrototypeOf(bar, foo)

console.log(bar.name)

bar.name = 'back'
console.log(bar.name)

// How to set read-only properties on a prototype
const fooN = {}

Object.defineProperty(fooN, 'name', {
  value: 'crack',
  writable: false
})

const barN = {
  lastName: 'barri'
}

Object.setPrototypeOf(barN, fooN)

console.log(barN.name)

// This throws an error
// barN.name = 'lack'
// console.log(barN.name)

// How to allow setters on prototype
const fooM = {
  set name(name) {
    this.currentName = name
  }
}

const barM = {
  lastName: 'barre'
}

Object.setPrototypeOf(barM, fooM)

console.log(barM.currentName)
barM.name = 'knack'
console.log(barM)
console.log(barM.currentName)
barM.currentName = 'sack'
console.log(barM.currentName)
