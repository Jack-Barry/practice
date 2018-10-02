/*
We can use a union to allow for multiple types for a variable
*/
let val: string | number

val = 27
console.log(`Val: ${val}`)
val = 'stringy'
console.log(`Val: ${val}`)
