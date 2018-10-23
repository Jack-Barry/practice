import { FlagObject } from './FlagObject'

let flagInput: FlagObject
let gFlag: FlagObject

beforeEach(() => {
  flagInput = new FlagObject({ name: 'A Flag', matchers: [] })
  gFlag = new FlagObject(flagInput)
})

describe('ToolObject', () => {
  it('initializes with `type` set to `string` if not provided', () => {
    expect(gFlag.type).toEqual('string')
  })

  it('initializes with `description` set to the name if not provided', () => {
    expect(gFlag.description).toEqual('A Flag')
  })

  it('initializes with `matchers` set to the name lowercased if not provided', () => {
    expect(gFlag.matchers).toEqual(['a-flag'])
  })

  it('does not include unknown properties', () => {
    const input = Object.assign({}, flagInput, { unknown: 'property' })
    const invalidFlag = new FlagObject(input as FlagObject)
    const invalidFlagKeys = Object.keys(invalidFlag)
    expect(invalidFlagKeys).not.toContain('unknown')
  })

  it('returns a flag if the input is valid', () => {
    const input = Object.assign({}, flagInput, {
      description: 'A description',
      matchers: ['a', 'f'],
      type: 'boolean'
    })
    const validFlag = new FlagObject(input)
    expect(validFlag).toEqual(input)
  })
})
