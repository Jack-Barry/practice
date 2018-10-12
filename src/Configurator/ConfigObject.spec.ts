import { ConfigObject } from './ConfigObject'

let configObject: ConfigObject

beforeEach(() => {
  configObject = new ConfigObject()
})

describe('ConfigObject', () => {
  it('runs specs', () => {
    console.log(configObject)
  })
})
