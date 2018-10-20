export interface IProxCardInputs {
  hex: string
  idOnCard: string
  facID?: string
}

interface IProxCard {
  rawHex: string
  rawID: string
  rawFacID: string
}

export class ProxCard implements IProxCard {
  rawHex: string
  rawID: string
  rawFacID: string

  constructor(inputs: IProxCardInputs) {
    this.rawHex = inputs.hex
    this.rawID = inputs.idOnCard
    this.rawFacID = inputs.facID || ''
  }
}
