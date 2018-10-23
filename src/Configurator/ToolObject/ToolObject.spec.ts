import { ToolObject } from './ToolObject'
import { FlagObject } from './../FlagObject'

let toolInput: ToolObject
let gTool: ToolObject

beforeEach(() => {
  toolInput = { matcher: 'g', name: 'Generator', flags: [] }
  gTool = new ToolObject(toolInput)
})

describe('ToolObject', () => {
  it('initializes with `description` set to the name if not provided', () => {
    expect(gTool.description).toEqual('Generator')
  })

  it('initializes with `description` set if not provided', () => {
    const input = Object.assign({}, toolInput, { description: 'A Generator' })
    expect(new ToolObject(input).description).toEqual('A Generator')
  })

  it('does not include unknown properties', () => {
    const input = Object.assign({}, toolInput, { unknown: 'property' })
    const invalidTool = new ToolObject(input as ToolObject)
    const invalidToolKeys = Object.keys(invalidTool)
    expect(invalidToolKeys).not.toContain('unknown')
  })

  it('returns a tool if the input is valid', () => {
    const input: ToolObject = {
      ...toolInput,
      description: 'A description',
      flags: [
        new FlagObject({ name: 'A flag', matchers: [] }),
        new FlagObject({ name: 'Another flag', matchers: [] })
      ]
    }

    const validTool = new ToolObject(input)
    expect(validTool).toEqual(input)
  })
})
