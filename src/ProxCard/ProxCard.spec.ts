import { ProxCard, IProxCardInputs } from './ProxCard'

describe('ProxCard', () => {
  let proxCardInputs: IProxCardInputs
  let proxCard: ProxCard

  beforeEach(() => {
    proxCardInputs = { hex: '80D431', idOnCard: 54321 }
    proxCard = new ProxCard(proxCardInputs)
  })

  it('sets the hex code as expected', () => {
    expect(proxCard.rawHex).toEqual('80D431')
  })

  it('sets the hex code bits as expected', () => {
    expect(proxCard.hexBits).toEqual('100000001101010000110001')
  })

  it('sets the card ID as expected', () => {
    expect(proxCard.rawID).toEqual(54321)
  })

  it('sets the card ID bits as expected', () => {
    expect(proxCard.idBits).toEqual('1101010000110001')
  })

  it('uses a default facility code of 0', () => {
    expect(proxCard.rawFacID).toEqual(0)
  })

  it('properly sets the facility code when it is provided', () => {
    proxCard = new ProxCard({ ...proxCardInputs, facID: 123 })
    expect(proxCard.rawFacID).toEqual(123)
  })

  it('sets the facility code bits as expected', () => {
    expect(proxCard.facIDBits).toEqual('')
    proxCard = new ProxCard({ ...proxCardInputs, facID: 123 })
    expect(proxCard.facIDBits).toEqual('1111011')
  })
})
