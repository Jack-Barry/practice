function House(color) {
  this.color = color
}

const aHouse = new House('white')
console.log(aHouse.color)
console.log(aHouse)

const house = {
  set houseColor(color) {
    this.color = color
  }
}

const myHouse = Object.create(house)

console.log((myHouse.housecolor = 'white'))
console.log(myHouse)
