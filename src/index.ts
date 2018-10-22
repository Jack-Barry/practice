import { Interpreter } from './Interpreter'
import { ProxCard } from './ProxCard'

const i: Interpreter = new Interpreter(
  new ProxCard({ hex: '1223039', idOnCard: 12345 })
)

console.log(`Card ID: 12345\nMatches:\n${JSON.stringify(i.matches, null, 2)}`)
