const obj = {
  firstName: 'Jack',
  lastName: 'Barry'
}

const protoObj = {
  hair: 'Brown',
  lastName: 'Barri'
}

Object.setPrototypeOf(obj, protoObj)

let m = 0
let n = 0

for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    m++
  }

  n++
}

// hasOwnProperty restricts properties to specific object, no looking up the
// prototype chain
console.log(m)

// for loop only iterates over unique properties in the prototype chain
console.log(n)
