function Foo() {}

console.log(Foo.prototype.constructor)

Foo.prototype = {}

console.log(Foo.prototype.constructor)

const a = new Foo()

console.log(a.constructor === Foo)
console.log(a.constructor === Object)

Object.defineProperty(Foo.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Foo
})

const b = new Foo()

console.log(b.constructor === Foo)
console.log(b.constructor === Object)
