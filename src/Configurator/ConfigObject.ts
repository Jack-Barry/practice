export interface IConfigObject {
  tools?: Array<any>
}

export class ConfigObject implements IConfigObject {
  tools?: Array<any>

  constructor(config: IConfigObject = {}) {
    this.tools = config.tools || []
  }
}
