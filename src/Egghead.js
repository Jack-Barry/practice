'use strict'

function Foo(name) {
  this.name = name
}

Foo.prototype.myName = function() {
  return this.name
}

function Bar(name) {
  Foo.call(this, name)
}

const a = new Foo('Jack')
const b = new Bar('Back')

console.log(a)
console.log(b)

Bar.prototype = Object.create(Foo.prototype)

const c = new Bar('Cack')

console.log(c)
