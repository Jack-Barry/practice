import { ProxCard } from './../ProxCard'

export interface IMatchObject {
  facID: number
  idBitCount: number
  supported: boolean
}

interface IInterpreter {
  matches: IMatchObject[]
}

export class Interpreter implements IInterpreter {
  matches: IMatchObject[]

  constructor(prox: ProxCard) {
    this.matches = this.getMatches(prox.hexBits, prox.idBits)
  }

  private getMatches(hexBits: string, idBits: string): IMatchObject[] {
    let matches: IMatchObject[] = []
    const hexLength: number = hexBits.length
    const minIDBits: number = idBits.length
    let facIDBits: number = hexLength - minIDBits

    while (facIDBits > 1) {
      let begOfHex: string = hexBits.substring(0, facIDBits)
      let endOfHex: string = hexBits.substring(begOfHex.length)

      if (endOfHex.replace(/^0+/, '') === idBits) {
        const supportedBitCounts: number[] = [16, 19, 20, 24, 27, 29, 32]

        matches.push({
          facID: parseInt(begOfHex, 2),
          idBitCount: endOfHex.length,
          supported: supportedBitCounts.includes(endOfHex.length)
        })

        facIDBits--
      } else {
        break
      }
    }

    return matches
  }
}
