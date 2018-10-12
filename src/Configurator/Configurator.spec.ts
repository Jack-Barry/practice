import { Configurator } from './Configurator'
import { Paths } from './../globals'
import { config as defaultConfig, config } from './../defaultConfig'
import path from 'path'

const paths: Paths = new Paths()
let configurator: Configurator

beforeEach(() => {
  configurator = new Configurator({})
})

describe('Configurator', () => {
  describe('when initializing', () => {
    describe('with no inputs', () => {
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
        expect(configurator.configs).toContain(defaultConfig)
      })

      describe('when the default project config subpath does not yield a config', () => {
        it('sets the result to equal the `default_config`', () => {
          expect(configurator.result).toEqual(defaultConfig)
        })
      })

      describe('when the default project config subpath yields a config', () => {})
    })

    describe('with `rootPath` provided', () => {
      it('properly sets `project_root` when provided', () => {
        const rootModifier: string = 'path/to/root'
        const resolvedPath: string = path.resolve(
          paths.callingDir,
          rootModifier
        )
        configurator = new Configurator({ rootPath: 'path/to/root' })

        expect(configurator.project_root).toEqual(resolvedPath)
      })
    })

    describe('with `projectConfigSubPath` provided', () => {
      it('properly sets `project_config` when provided', () => {
        configurator = new Configurator({
          projectConfigSubPath: 'dir/something.js'
        })

        expect(configurator.project_config).toEqual('dir/something.js')
      })
    })
  })
})
