import { ProxCard, IProxCardInputs } from './ProxCard'

describe('ProxCard', () => {
  let proxCardInputs: IProxCardInputs
  let proxCard: ProxCard

  beforeEach(() => {
    proxCardInputs = { hex: '80D431', idOnCard: '54321' }
    proxCard = new ProxCard(proxCardInputs)
  })

  it('sets the hex code as expected', () => {
    expect(proxCard.rawHex).toEqual('80D431')
  })

  it('sets the card ID as expected', () => {
    expect(proxCard.rawID).toEqual('54321')
  })

  it('uses a default facility code of an empty string', () => {
    expect(proxCard.rawFacID).toEqual('')
  })

  it('properly sets the facility code when it is provided', () => {
    proxCard = new ProxCard({ ...proxCardInputs, facID: '123' })
    expect(proxCard.rawFacID).toEqual('123')
  })
})
