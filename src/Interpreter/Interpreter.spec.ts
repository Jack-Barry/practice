import { Interpreter, IMatchObject } from './Interpreter'
import { ProxCard } from './../ProxCard'

describe('Interpreter', () => {
  let proxCard: ProxCard
  let interpreter: Interpreter
  let expectedMatches: IMatchObject[]

  beforeEach(() => {
    proxCard = new ProxCard({ hex: '500003039', idOnCard: 12345 })
    interpreter = new Interpreter(proxCard)
    expectedMatches = [
      { facID: 5, idBitCount: 32, supported: true },
      { facID: 10, idBitCount: 31, supported: false },
      { facID: 20, idBitCount: 30, supported: false },
      { facID: 40, idBitCount: 29, supported: true },
      { facID: 80, idBitCount: 28, supported: false },
      { facID: 160, idBitCount: 27, supported: true },
      { facID: 320, idBitCount: 26, supported: false },
      { facID: 640, idBitCount: 25, supported: false },
      { facID: 1280, idBitCount: 24, supported: true },
      { facID: 2560, idBitCount: 23, supported: false },
      { facID: 5120, idBitCount: 22, supported: false },
      { facID: 10240, idBitCount: 21, supported: false },
      { facID: 20480, idBitCount: 20, supported: true },
      { facID: 40960, idBitCount: 19, supported: true },
      { facID: 81920, idBitCount: 18, supported: false },
      { facID: 163840, idBitCount: 17, supported: false },
      { facID: 327680, idBitCount: 16, supported: true },
      { facID: 655360, idBitCount: 15, supported: false },
      { facID: 1310720, idBitCount: 14, supported: false }
    ]
  })

  describe('when the card ID is a substring of the card data', () => {
    it('provides an array of objects explaining the potential matches', () => {
      expect(interpreter.matches).toEqual(
        expect.arrayContaining(expectedMatches)
      )
    })
  })
})
