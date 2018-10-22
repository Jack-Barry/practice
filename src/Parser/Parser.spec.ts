import { Parser } from './Parser'
import { Paths } from './../globals'
import { Configurator, ConfigObject } from './../Configurator'
import path from 'path'

describe('Parser', () => {
  const globalPaths: Paths = new Paths()
  let parser: Parser

  const setConfig = (config: ConfigObject) => {
    jest.mock(
      path.resolve(globalPaths.callingDir, globalPaths.projectConfigSubPath),
      () => {
        return config
      },
      { virtual: true }
    )
  }

  afterEach(() => {
    jest.resetModules()
  })

  describe('when no arguments are provided', () => {
    beforeEach(() => {
      parser = new Parser()
    })

    it('has a default rootPath based on values from globals.ts', () => {
      expect(parser.rootPath).toEqual(globalPaths.callingDir)
    })

    it('has a default configModifierPath based on values from globals.ts', () => {
      expect(parser.configModifierPath).toEqual(
        globalPaths.projectConfigSubPath
      )
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

  describe('when the `--config` flag is provided', () => {
    describe('when a value is not provided', () => {
      it('throws an error', () => {
        expect(() => {
          new Parser(['--config'])
        }).toThrow()
      })
    })

    describe('when a value is provided', () => {
      beforeEach(() => {
        parser = new Parser(['--config', 'somefile.js'])
      })

      it('sets the configModifierPath as expected', () => {
        expect(parser.configModifierPath).toEqual('somefile.js')
      })

      it('builds a config based on rootPath and configModifierPath', () => {
        expect(parser.config).toEqual(
          new Configurator({
            projectConfigSubPath: 'somefile.js'
          }).result
        )
      })
    })
  })

  describe('when the `--rootPath` flag is provided', () => {
    describe('when a value is not provided', () => {
      it('throws an error', () => {
        expect(() => {
          new Parser(['--rootPath'])
        }).toThrow()
      })
    })

    describe('when a value is provided', () => {
      beforeEach(() => {
        parser = new Parser(['--rootPath', 'some/dir'])
      })

      it('sets the configModifierPath as expected', () => {
        expect(parser.rootPath).toEqual(path.resolve('some/dir'))
      })

      it('builds a config based on rootPath and configModifierPath', () => {
        expect(parser.config).toEqual(
          new Configurator({
            rootPath: path.resolve('some/dir')
          }).result
        )
      })
    })
  })

  describe('when the config contains only one tool', () => {
    const foundConfig: ConfigObject = {
      tools: [{ name: 'Some Tool', matcher: 'st', flags: [] }]
    }

    beforeEach(() => {
      setConfig(foundConfig)
    })

    describe('when no tool matcher is provided as the first argument', () => {
      it('infers the toolToUse correctly', () => {
        parser = new Parser()
        expect(parser.toolToUse).toEqual(foundConfig.tools[0])
      })
    })

    describe('when a tool matcher is provided as the first argument', () => {
      describe('when the tool matcher is invalid', () => {
        it('throws an error', () => {
          expect(() => {
            new Parser(['s'])
          }).toThrow()
        })
      })

      describe('when the tool matcher is valid', () => {
        it('sets the toolToUse correctly', () => {
          parser = new Parser(['st'])
          expect(parser.toolToUse).toEqual(foundConfig.tools[0])
        })
      })
    })
  })

  describe('when the config contains multiple tools', () => {
    const foundConfig: ConfigObject = {
      tools: [
        { name: 'Some Tool', matcher: 'st', flags: [] },
        { name: 'Another Tool', matcher: 'at', flags: [] }
      ]
    }

    beforeEach(() => {
      setConfig(foundConfig)
    })

    describe('when no tool matcher is provided as the first argument', () => {
      it('throws an error', () => {
        expect(() => {
          new Parser()
        }).toThrow()
      })
    })

    describe('when a tool matcher is provided as the first argument', () => {
      describe('when the tool matcher is invalid', () => {
        it('throws an error', () => {
          expect(() => {
            new Parser(['s'])
          }).toThrow()
        })
      })

      describe('when the tool matcher is valid', () => {
        it('sets the toolToUse correctly', () => {
          parser = new Parser(['at'])
          expect(parser.toolToUse).toEqual(foundConfig.tools[1])
        })
      })
    })
  })

  describe('when a tool has no flags', () => {
    const foundConfig: ConfigObject = {
      tools: [
        {
          name: 'Some Tool',
          matcher: 'st',
          flags: []
        }
      ]
    }

    beforeEach(() => {
      setConfig(foundConfig)
    })

    it('returns an empty object', () => {
      parser = new Parser(['st'])
      expect(parser.output).toMatchObject({})
    })
  })

  describe('when a tool provides flags', () => {
    describe('when a flag is for a `boolean`', () => {
      const foundConfig: ConfigObject = {
        tools: [
          {
            name: 'Some Tool',
            matcher: 'st',
            flags: [
              { name: 'Boolean', matchers: ['-b', '-boolean'], type: 'boolean' }
            ]
          }
        ]
      }

      beforeEach(() => {
        setConfig(foundConfig)
      })

      it('returns an object with the flag set to false if not present', () => {
        parser = new Parser()
        expect(parser.output).toMatchObject({ Boolean: false })
      })

      it('returns an object with the flag set to true if present', () => {
        parser = new Parser(['-b'])
        expect(parser.output).toMatchObject({ Boolean: true })

        parser = new Parser(['-boolean'])
        expect(parser.output).toMatchObject({ Boolean: true })
      })
    })

    describe('when a flag is for a `string`', () => {
      const foundConfig: ConfigObject = {
        tools: [
          {
            name: 'Some Tool',
            matcher: 'st',
            flags: [
              { name: 'String', matchers: ['-s', '-string'], type: 'string' }
            ]
          }
        ]
      }

      beforeEach(() => {
        setConfig(foundConfig)
      })

      it('returns an object with the flag set to an empty string if not present', () => {
        parser = new Parser()
        expect(parser.output).toMatchObject({ String: '' })
      })

      describe('when a value for the string is not provided', () => {
        it('throws an error', () => {
          expect(() => {
            new Parser(['-s'])
          }).toThrow()
        })
      })

      describe('when a value for the string is provided', () => {
        it('returns an object with the flag set to provided string', () => {
          parser = new Parser(['-s', 'something'])
          expect(parser.output).toMatchObject({ String: 'something' })

          parser = new Parser(['-b', '-string', 'something else'])
          expect(parser.output).toMatchObject({ String: 'something else' })
        })
      })
    })

    xdescribe('when a flag is for a `array`', () => {})
  })
})
