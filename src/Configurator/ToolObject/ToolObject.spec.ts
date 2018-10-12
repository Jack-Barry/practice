import { ToolObject } from './ToolObject'

let toolInput: ToolObject
let gTool: ToolObject

beforeEach(() => {
  toolInput = { matcher: 'g', name: 'Generator' }
  gTool = new ToolObject(toolInput)
})

describe('ToolObject', () => {
  it('initializes with `flags` set to an empty array', () => {
    expect(gTool.flags).toEqual([])
  })

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
    const input = {
      ...toolInput,
      description: 'A description',
      flags: [{ name: 'A flag' }, { name: 'Another flag' }]
    }

    const validTool = new ToolObject(input)
    expect(validTool).toEqual(input)
  })
})
