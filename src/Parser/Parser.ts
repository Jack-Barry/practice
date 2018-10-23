import { Paths } from './../globals'
import {
  ToolObject,
  FlagObject,
  ConfigObject,
  Configurator
} from './../Configurator'
import path from 'path'

const globalPaths: Paths = new Paths()

interface IParser {
  args: Array<string>
  rootPath: string
  configModifierPath: string
  config: ConfigObject
  toolToUse: ToolObject
  output: IParserOutput
}

interface IParserOutput {
  [key: string]: string | boolean | Array<string>
}

export class Parser implements IParser {
  args: Array<string>
  rootPath: string
  configModifierPath: string
  config: ConfigObject
  toolToUse: ToolObject
  output: IParserOutput

  constructor(args: Array<string> = []) {
    this.args = args
    this.rootPath = globalPaths.callingDir
    this.configModifierPath = globalPaths.projectConfigSubPath
    this.setConfigurationPath()
    this.config = this.setConfig()
    this.toolToUse = this.setTool()
    this.output = this.setOutput()
  }

  private setConfigurationPath() {
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

  private setConfig(): ConfigObject {
    return new Configurator({
      rootPath: this.rootPath,
      projectConfigSubPath: this.configModifierPath
    }).result
  }

  private setTool(): ToolObject {
    const tools: Array<ToolObject> = this.config.tools
    const toolMatchers: Array<string> = tools.map(t => {
      return t.matcher
    })
    const firstArg: string = this.args[0]

    if (
      (/^[a-zA-Z0-9]$/.test(firstArg) && !toolMatchers.includes(firstArg)) ||
      (tools.length > 1 && firstArg === undefined)
    ) {
      throw Error(
        `You need to provide a valid tool matcher. Valid tool matchers include: ${toolMatchers.join(
          '\n'
        )}`
      )
    }

    return tools[toolMatchers.indexOf(firstArg)] || tools[0]
  }

  private setOutput() {
    let output: IParserOutput = this.setDefaultOutput()

    if (Object.keys(output).length !== 0) {
      const flags = this.toolToUse.flags
      const args = this.args

      args.forEach((a, i) => {
        const flag = flags.find(f => f.matchers.includes(a))

        if (flag !== undefined) {
          switch (flag.type) {
            case 'boolean':
              output[flag.name] = true
              break
            case 'string':
              const val = args[i + 1]
              if (val !== undefined) {
                output[flag.name] = val
                break
              } else {
                throw Error(
                  `You need to provide a value for the ${flag.name} flag.`
                )
              }
            case 'array':
              const possibleArgs: string[] = args.slice(i + 1)
              const nextFlag: string =
                possibleArgs.find(a => /^-.+/.test(a)) || ''
              const nextFlagIndex =
                nextFlag === ''
                  ? possibleArgs.length
                  : possibleArgs.indexOf(nextFlag)
              const vals: string[] = possibleArgs.slice(0, nextFlagIndex)
              if (vals !== []) {
                output[flag.name] = vals
                break
              } else {
                throw Error(
                  `You need to provide a value for the ${flag.name} flag.`
                )
              }
          }
        }
      })
    }

    return output
  }

  private setDefaultOutput(): IParserOutput {
    let output: IParserOutput = {}

    if (this.toolToUse !== undefined && this.toolToUse.flags !== undefined) {
      this.toolToUse.flags.forEach(f => {
        switch (f.type) {
          case 'boolean':
            output[f.name] = false
            break
          case 'string':
            output[f.name] = ''
            break
          case 'array':
            output[f.name] = []
            break
        }
      })
    }

    return output
  }
}
