interface IParser {
  args: Array<string>
  configModifierPath: string
}

export class Parser implements IParser {
  args: Array<string>
  configModifierPath: string

  constructor(args: Array<string> = []) {
    this.args = args
    this.configModifierPath = this.setConfigModifierPath()
  }

  private setConfigModifierPath() {
    let path: string = ''

    this.args.forEach((a, i) => {
      if (a === '--config') {
        path = this.args[i + 1]
      }
    })
    return path
  }
}
