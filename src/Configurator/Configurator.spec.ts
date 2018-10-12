import { Configurator } from './Configurator'
import { Paths } from './../globals'
import { config as defaultConfig } from './../defaultConfig'
import path from 'path'
import { ConfigObject } from './ConfigObject'

const paths: Paths = new Paths()
let configurator: Configurator

describe('Configurator', () => {
  beforeEach(() => {
    configurator = new Configurator({})
  })

  afterEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  describe('when initializing', () => {
    describe('with no inputs', () => {
      it('properly infers `project_root`', () => {
        expect(configurator.project_root).toEqual(paths.callingDir)
      })

      it('properly infers `project_config` when not provided', () => {
        expect(configurator.project_config).toEqual(paths.projectConfigSubPath)
      })

      it('properly assigns the `default_config`', () => {
        expect(configurator.default_config).toEqual(defaultConfig())
      })

      it('properly includes the `default_config` in `configs`', () => {
        expect(configurator.configs[0]).toEqual(defaultConfig())
      })

      describe('when the default project config subpath does not yield a config', () => {
        it('sets the result to equal the `default_config`', () => {
          expect(configurator.result).toEqual(defaultConfig())
        })
      })

      describe('when the default project config subpath yields a config', () => {
        const foundConfig: ConfigObject = {
          tools: [{ name: 'Some Tool', matcher: 'st' }]
        }

        jest.mock(
          './fpcli.config.js',
          () => {
            return foundConfig
          },
          { virtual: true }
        )

        it('adds the found config into `configs`', () => {
          expect(configurator.configs).toContain(foundConfig)
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
          expect(configurator.result).toEqual(defaultConfig())
        })
      })

      describe('when the default project config subpath yields a config', () => {
        const foundConfig: ConfigObject = {
          tools: [{ name: 'Some Tool', matcher: 'st' }]
        }

        jest.mock(
          './path/to/root/fpcli.config.js',
          () => {
            return foundConfig
          },
          { virtual: true }
        )

        it('adds the found config into `configs`', () => {
          configurator = new Configurator({ rootPath: 'path/to/root' })
          expect(configurator.configs).toContain(foundConfig)
        })
      })
    })

    describe('with `projectConfigSubPath` provided', () => {
      const foundConfig: ConfigObject = {
        tools: [{ name: 'Some Tool', matcher: 'st' }]
      }

      jest.mock(
        './dir/some.other.config.js',
        () => {
          return foundConfig
        },
        { virtual: true }
      )

      it('properly sets `project_config` when provided', () => {
        configurator = new Configurator({
          projectConfigSubPath: 'dir/some.other.config.js'
        })
        expect(configurator.project_config).toEqual('dir/some.other.config.js')
      })

      it('adds the found config into `configs`', () => {
        configurator = new Configurator({
          projectConfigSubPath: 'dir/some.other.config.js'
        })
        expect(configurator.configs).toContain(foundConfig)
      })
    })
  })
})
