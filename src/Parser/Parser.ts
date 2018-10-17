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
    this.setIfPresent('--config', 'configModifierPath')
    this.setIfPresent('--rootPath', 'rootPath', rp => {
      return path.resolve(rp)
    })
  }

  private setIfPresent(
    flag: string,
    setVal: 'rootPath' | 'configModifierPath',
    callback: (i: string) => string = i => {
      return i
    }
  ) {
    if (this.args.includes(flag)) {
      const val: string = this.args[this.args.indexOf(flag) + 1]

      if (val !== undefined) {
        this[setVal] = callback(val)
      } else {
        throw Error(
          `You supplied the ${flag} flag but did not provide a value.`
        )
      }
    }
  }
}
