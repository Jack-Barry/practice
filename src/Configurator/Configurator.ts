import { Paths } from './../globals'
import { ConfigObject } from './ConfigObject'
import { config as defaultConfig } from './../defaultConfig'
import path from 'path'

const paths: Paths = new Paths()

interface IConfiguratorInputs {
  rootPath?: string
  projectConfigSubPath?: string
}

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

  constructor({ rootPath, projectConfigSubPath }: IConfiguratorInputs) {
    this.project_root = this.assignRoot(rootPath)
    this.project_config = this.assignProjectConfig(projectConfigSubPath)
    this.default_config = defaultConfig
    this.configs = [this.default_config]
    this.result = { ...this.default_config }
  }

  private assignRoot(rootPath?: string): string {
    return typeof rootPath == 'undefined'
      ? paths.callingDir
      : path.resolve(paths.callingDir, rootPath)
  }

  private assignProjectConfig(projectConfigSubPath?: string): string {
    return typeof projectConfigSubPath == 'undefined'
      ? paths.projectConfigSubPath
      : projectConfigSubPath
  }
}
