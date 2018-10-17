import { Paths } from './../globals'
import { ConfigObject, Configurator } from './../Configurator'

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
    this.config = new Configurator({
      rootPath: this.rootPath,
      projectConfigSubPath: this.configModifierPath
    }).result
  }
}
