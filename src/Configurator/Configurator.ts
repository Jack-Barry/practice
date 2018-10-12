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
    this.default_config = defaultConfig()
    this.configs = this.buildConfigArray()
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

  private buildConfigArray() {
    let output: Array<ConfigObject> = [this.default_config]

    const configModifierPath: string = path.resolve(
      this.project_root,
      this.project_config
    )

    try {
      output.push(require(configModifierPath))
    } catch (err) {
      // Nothing was found, nothing to do here folks
    }

    return output
  }
}
