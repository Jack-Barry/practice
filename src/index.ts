interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }

  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width ** 2
  }

  return newSquare
}

let mySquare = createSquare({ colour: 'red', width: 10 })

console.log(mySquare)
