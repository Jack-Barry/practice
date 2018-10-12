import { Paths } from './../globals'
import { ConfigObject } from './ConfigObject'
import { config as defaultConfig } from './../defaultConfig'
import path from 'path'

interface IConfigurator {
  readonly project_root: string
  readonly project_config: string
  readonly default_config: ConfigObject
  readonly configs: Array<ConfigObject>
  readonly result: ConfigObject
}

export class Configurator implements IConfigurator {
  readonly project_root: string
  readonly project_config: string
  readonly default_config: ConfigObject
  readonly configs: Array<ConfigObject>
  readonly result: ConfigObject

  constructor({
    rootPath,
    projectConfigSubPath
  }: {
    rootPath?: string
    projectConfigSubPath?: string
  }) {
    const paths: Paths = new Paths()
    if (typeof rootPath == 'undefined') {
      this.project_root = paths.callingDir
    } else {
      this.project_root = path.resolve(paths.callingDir, rootPath)
    }

    if (typeof projectConfigSubPath == 'undefined')
      projectConfigSubPath = paths.projectConfigSubPath

    this.project_config = projectConfigSubPath
    this.default_config = defaultConfig
    this.configs = [this.default_config]
    this.result = { ...this.default_config }
  }
}
