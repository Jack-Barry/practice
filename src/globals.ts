import path from 'path'

export class Paths {
  workingDir: string
  callingDir: string
  moduleRoot: string

  constructor() {
    this.workingDir = process.cwd()
    this.callingDir = path.dirname(require.main!.filename)
    this.moduleRoot = path.resolve(__dirname, '..')
  }
}
