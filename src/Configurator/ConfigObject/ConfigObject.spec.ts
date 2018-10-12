import { ConfigObject } from './ConfigObject'
import { ToolObject } from './../ToolObject'

describe('ConfigObject', () => {
  it('initializes with `tools` set to an empty array', () => {
    expect(new ConfigObject().tools).toEqual([])
  })

  it('sets tools to an empty array if not present in input', () => {
    expect(new ConfigObject({}).tools).toEqual([])
  })

  it('does not include unknown properties', () => {
    const invalidConfig = new ConfigObject({
      unknown: 'property'
    } as ConfigObject)
    const invalidConfigKeys = Object.keys(invalidConfig)
    expect(invalidConfigKeys).not.toContain('unknown')
  })

  it('returns a config if the input is valid', () => {
    const tools: Array<ToolObject> = [
      { matcher: '-to', name: 'Tool One' },
      { matcher: '-tt', name: 'Tool Three' }
    ]
    const validConfig = new ConfigObject({ tools })
    expect(validConfig).toEqual({ tools })
  })
})
