export interface IProxCardInputs {
  hex: string
  idOnCard: number
  facID?: number
}

interface IProxCard {
  rawHex: string
  hexBits: string
  rawID: number
  idBits: string
  rawFacID: number
  facIDBits: string
}

export class ProxCard implements IProxCard {
  rawHex: string
  hexBits: string
  rawID: number
  idBits: string
  rawFacID: number
  facIDBits: string

  constructor(inputs: IProxCardInputs) {
    this.rawHex = inputs.hex
    this.hexBits = this.hexToBin(this.rawHex)
    this.rawID = inputs.idOnCard
    this.idBits = this.decToBin(this.rawID)
    this.rawFacID = inputs.facID || 0
    this.facIDBits = this.decToBin(this.rawFacID)
  }

  private decToBin(dec: number): string {
    return dec === 0 ? '' : dec.toString(2)
  }

  private hexToBin(hex: string): string {
    return this.decToBin(parseInt(hex, 16))
  }
}
