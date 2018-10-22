import { Interpreter } from './Interpreter'
import { ProxCard } from './../ProxCard'

describe('Interpreter', () => {
  let proxCard: ProxCard
  let interpreter: Interpreter

  beforeEach(() => {
    proxCard = new ProxCard({ hex: '00143039', idOnCard: 12345 })
    interpreter = new Interpreter(proxCard)
  })

  describe('when the card ID is a substring of the card data', () => {
    it('provides an array of objects explaining the potential matches', () => {
      const expectedMatches = [
        { facID: 5, idBitCount: 18 },
        { facID: 10, idBitCount: 17 },
        { facID: 20, idBitCount: 16 },
        { facID: 40, idBitCount: 15 },
        { facID: 80, idBitCount: 14 }
      ]

      expect(interpreter.matches).toEqual(
        expect.arrayContaining(expectedMatches)
      )
    })
  })
})
