import { ConfigObject } from './ConfigObject'

describe('ConfigObject', () => {
  it('throws an error when an invalid object is provided', () => {
    expect(() => {
      new ConfigObject({ invalid: 'property' })
    }).toThrowError()
  })

  it('initializes with properties set when a valid object is provided', () => {
    const validConfig = {}
    const configObject = new ConfigObject(validConfig)
    expect(configObject).toEqual({})
  })
})
