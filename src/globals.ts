import path from 'path'

export class Paths {
  moduleRoot: string
  defaultConfigPath: string
  callingDir: string
  workingDir: string
  projectConfigPath: string

  constructor() {
    this.moduleRoot = path.resolve(__dirname, '..')
    this.defaultConfigPath = path.resolve(
      this.moduleRoot,
      'lib',
      'defaultConfig.js'
    )
    this.callingDir = path.dirname(require.main!.filename)
    this.workingDir = process.cwd()
    this.projectConfigPath = path.resolve(this.workingDir, 'fpcli.config.js')
  }
}

export function jsonPrint(text: any) {
  return JSON.stringify(text, null, 2)
}
