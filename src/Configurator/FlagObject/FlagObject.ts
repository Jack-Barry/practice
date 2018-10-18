type FlagType = 'string' | 'boolean' | 'array'

interface IFlagObject {
  name: string
  description?: string
  type?: FlagType
  matchers: Array<string>
}

export class FlagObject implements IFlagObject {
  name: string
  description?: string
  type?: FlagType
  matchers: Array<string>

  constructor(flag: IFlagObject) {
    this.name = flag.name
    this.description = flag.description || this.name
    this.type = flag.type || 'string'
    this.matchers = flag.matchers || [
      this.name.toLowerCase().replace(new RegExp(/\s/, 'g'), '-')
    ]
  }
}
