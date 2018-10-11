import { Configurator } from './Configurator'
import { config as defaultConfig } from './../defaultConfig'

let configurator: Configurator

beforeAll(() => {
  configurator = new Configurator()
})

describe('Configurator', () => {
  it('initializes with default config', () => {
    expect(configurator.config).toEqual(defaultConfig)
  })
})
