import { Paths } from './../globals'
import { ConfigObject, Configurator } from './../Configurator'
import path from 'path'

const globalPaths: Paths = new Paths()

interface IParser {
  args: Array<string>
  rootPath: string
  configModifierPath: string
  config: ConfigObject
}

export class Parser implements IParser {
  args: Array<string>
  rootPath: string
  configModifierPath: string
  config: ConfigObject

  constructor(args: Array<string> = []) {
    this.args = args
    this.rootPath = globalPaths.callingDir
    this.configModifierPath = globalPaths.projectConfigSubPath
    this.setConfiguration()
    this.config = new Configurator({
      rootPath: this.rootPath,
      projectConfigSubPath: this.configModifierPath
    }).result
  }

  private setConfiguration() {
    if (this.args.includes('--config')) {
      const configValue: string = this.args[this.args.indexOf('--config') + 1]
      if (configValue !== undefined) {
        this.configModifierPath = configValue
      } else {
        throw Error(
          'You supplied the `--config` flag but did not provide a value.'
        )
      }
    }

    if (this.args.includes('--rootPath')) {
      const rootPathValue: string = this.args[
        this.args.indexOf('--rootPath') + 1
      ]
      if (rootPathValue !== undefined) {
        this.rootPath = path.resolve(rootPathValue)
      } else {
        throw Error(
          'You supplied the `--rootPath` flag but did not provide a value.'
        )
      }
    }
  }
}
