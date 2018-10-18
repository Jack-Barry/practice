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
    let output: IParserOutput = {}

    if (this.toolToUse !== undefined && this.toolToUse.flags !== undefined) {
      const flags: Array<FlagObject> = this.toolToUse.flags
      const args: Array<string> = this.args

      flags.forEach(f => {
        switch (f.type) {
          case 'boolean':
            output[f.name] = this.flagInArgs(f, args)
            break
          case 'string':
            let argValue: string = ''

            if (this.flagInArgs(f, args)) {
              const argIndex: number | undefined = this.getMatchingIndex(
                f,
                args
              )

              if (argIndex !== undefined) {
                argValue = args[argIndex + 1]

                if (argValue === undefined)
                  throw Error(
                    `You need to provide a value for the ${f.name} flag.`
                  )
              }
            }

            output[f.name] = argValue
            break
        }
      })
    }

    return output
  }
  private flagInArgs(flag: FlagObject, args: Array<string>): boolean {
    return args.some(a => {
      return flag.matchers.includes(a)
    })
  }

  private getMatchingIndex(flag: FlagObject, args: Array<string>) {
    let argIndex: number | undefined

    const matchingArg = args.find(a => {
      return flag.matchers.includes(a)
    })

    if (matchingArg !== undefined) {
      argIndex = args.indexOf(matchingArg)
    }

    return argIndex
  }
}
