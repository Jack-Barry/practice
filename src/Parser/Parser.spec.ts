import { Parser } from './Parser'
import { Paths } from './../globals'
import { Configurator } from './../Configurator'

describe('Parser', () => {
  const globalPaths: Paths = new Paths()
  let parser: Parser
  jest.mock('./../Configurator')

  beforeEach(() => {
    parser = new Parser()
  })

  it('has a default rootPath based on values from globals.ts', () => {
    expect(parser.rootPath).toEqual(globalPaths.callingDir)
  })

  it('has a default configModifierPath based on values from globals.ts', () => {
    expect(parser.configModifierPath).toEqual(globalPaths.projectConfigSubPath)
  })

  it('builds a config based on rootPath and configModifierPath', () => {
    expect(parser.config).toEqual(
      new Configurator({
        rootPath: parser.rootPath,
        projectConfigSubPath: parser.configModifierPath
      }).result
    )
  })
})
