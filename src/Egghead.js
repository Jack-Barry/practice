const createUser = (character, smart = true) => ({
  smart,
  ...character,
  type: 'human'
})

const jack = createUser({
  hair: 'brown',
  height: '6 foot',
  smart: false
})

const sally = createUser({
  hair: 'blonde',
  height: '5 foot 4'
})

console.log(jack.type)
console.log(jack.smart)

console.log(sally.type)
console.log(sally.smart)
