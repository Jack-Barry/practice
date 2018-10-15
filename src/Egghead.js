class Food {
  static isHealthy() {
    return true
  }

  static canBeEaten() {
    return this.isHealthy()
  }
}

console.log(Food.isHealthy())
console.log(Food.canBeEaten())

// Same as this:
function FoodF() {}
FoodF.isHealthy = () => true
console.log(FoodF.isHealthy())
