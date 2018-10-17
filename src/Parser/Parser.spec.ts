import { Parser } from './Parser'
import { Paths } from './../globals'
import { Configurator } from './../Configurator'
import path from 'path'

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

  describe('when the `--config` flag is provided', () => {
    it('requires a path to be given', () => {
      expect(() => {
        new Parser(['--config'])
      }).toThrow()
    })

    it('sets the configModifierPath as expected', () => {
      parser = new Parser(['--config', 'somefile.js'])
      expect(parser.configModifierPath).toEqual('somefile.js')
    })

    it('builds a config based on rootPath and configModifierPath', () => {
      parser = new Parser(['--config', 'somefile.js'])
      expect(parser.config).toEqual(
        new Configurator({
          projectConfigSubPath: 'somefile.js'
        }).result
      )
    })
  })

  describe('when the `--rootPath` flag is provided', () => {
    it('requires a path to be given', () => {
      expect(() => {
        new Parser(['--rootPath'])
      }).toThrow()
    })

    it('sets the configModifierPath as expected', () => {
      parser = new Parser(['--rootPath', 'some/dir'])
      expect(parser.rootPath).toEqual(path.resolve('some/dir'))
    })

    it('builds a config based on rootPath and configModifierPath', () => {
      parser = new Parser(['--rootPath', 'some/dir'])
      expect(parser.config).toEqual(
        new Configurator({
          rootPath: path.resolve('some/dir')
        }).result
      )
    })
  })
})
