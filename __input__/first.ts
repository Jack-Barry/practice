function employee(id: number, name: string) {
  this.id = id
  this.name = name
}

const emp1 = new employee(123, 'Bobby')
employee.prototype.email = 'smitty@thing.net'

console.log(`Number: ${emp1.id}`)
console.log(`Name:   ${emp1.name}`)
console.log(`Email:  ${emp1.email}`)

const emp2 = new employee(124, 'Billy')

console.log(`Number: ${emp2.id}`)
console.log(`Name:   ${emp2.name}`)
console.log(`Email:  ${emp2.email}`)
