import { Configurator } from './Configurator'
import { Paths } from './../globals'
import path from 'path'
import { ConfigObject } from './ConfigObject'
import { config as defaultConfigObject } from './../defaultConfig'

const paths: Paths = new Paths()
let configurator: Configurator
let defaultConfig: ConfigObject

describe('Configurator', () => {
  beforeEach(() => {
    defaultConfig = defaultConfigObject()
  })

  describe('when initializing', () => {
    describe('with no inputs', () => {
      beforeEach(() => {
        configurator = new Configurator({})
      })

      it('properly infers `project_root`', () => {
        expect(configurator.project_root).toEqual(paths.callingDir)
      })

      it('properly infers `project_config` when not provided', () => {
        expect(configurator.project_config).toEqual(paths.projectConfigSubPath)
      })

      it('properly assigns the `default_config`', () => {
        expect(configurator.default_config).toEqual(defaultConfig)
      })

      it('properly includes the `default_config` in `configs`', () => {
        expect(configurator.configs[0]).toEqual(defaultConfig)
      })

      describe('when the default project config subpath does not yield a config', () => {
        it('sets the result to equal the `default_config`', () => {
          expect(configurator.result).toEqual(defaultConfig)
        })
      })

      describe('when the default project config subpath yields a config', () => {
        const foundConfig: ConfigObject = {
          tools: [{ name: 'Some Tool', matcher: 'st' }]
        }

        beforeEach(() => {
          jest.mock(
            './fpcli.config.js',
            () => {
              return foundConfig
            },
            { virtual: true }
          )
        })

        it('keeps the default config in `configs`', () => {
          expect(configurator.configs).toContainEqual(defaultConfig)
        })

        it('adds the found config into `configs`', () => {
          expect(configurator.configs).toContainEqual(foundConfig)
        })

        it('merges the configs into `result` as expected', () => {
          const expectedResult: ConfigObject = {
            tools: [
              ...defaultConfig.tools,
              { name: 'Some Tool', matcher: 'st' }
            ]
          }
          expect(configurator.result).toMatchObject(expectedResult)
        })
      })
    })

    describe('with `rootPath` provided', () => {
      const rootModifier: string = 'path/to/root'
      const resolvedPath: string = path.resolve(paths.callingDir, rootModifier)

      beforeEach(() => {
        configurator = new Configurator({ rootPath: 'path/to/root' })
      })

      it('properly sets `project_root` when provided', () => {
        expect(configurator.project_root).toEqual(resolvedPath)
      })

      describe('when the default project config subpath does not yield a config', () => {
        it('sets the result to equal the `default_config`', () => {
          expect(configurator.result).toEqual(defaultConfig)
        })
      })

      describe('when the default project config subpath yields a config', () => {
        const foundConfig: ConfigObject = {
          tools: [{ name: 'Some New Tool', matcher: 'snt' }]
        }

        beforeEach(() => {
          jest.mock(
            './path/to/root/fpcli.config.js',
            () => {
              return foundConfig
            },
            { virtual: true }
          )

          configurator = new Configurator({ rootPath: 'path/to/root' })
        })

        it('keeps the default config in `configs`', () => {
          expect(configurator.configs).toContainEqual(defaultConfig)
        })

        it('adds the found config into `configs`', () => {
          expect(configurator.configs).toContainEqual(foundConfig)
        })

        it('merges the configs into `result` as expected', () => {
          const expectedResult: ConfigObject = {
            tools: [
              ...defaultConfig.tools,
              { name: 'Some New Tool', matcher: 'snt' }
            ]
          }
          expect(configurator.result).toMatchObject(expectedResult)
        })
      })
    })

    describe('with `projectConfigSubPath` provided', () => {
      const foundConfig: ConfigObject = {
        tools: [{ name: 'Some Custom Tool', matcher: 'sct' }]
      }

      beforeEach(() => {
        jest.mock(
          './dir/some.other.config.js',
          () => {
            return foundConfig
          },
          { virtual: true }
        )
        configurator = new Configurator({
          projectConfigSubPath: 'dir/some.other.config.js'
        })
      })

      it('properly sets `project_config` when provided', () => {
        expect(configurator.project_config).toEqual('dir/some.other.config.js')
      })

      it('adds the found config into `configs`', () => {
        expect(configurator.configs).toContain(foundConfig)
      })

      it('merges the configs into `result` as expected', () => {
        const expectedResult: ConfigObject = {
          tools: [
            ...defaultConfig.tools,
            { name: 'Some Custom Tool', matcher: 'sct' }
          ]
        }
        expect(configurator.result).toMatchObject(expectedResult)
      })
    })
  })
})
