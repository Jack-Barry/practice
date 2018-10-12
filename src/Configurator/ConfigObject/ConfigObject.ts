import { ToolObject } from './../ToolObject'

export interface IConfigObject {
  tools?: Array<ToolObject>
}

export class ConfigObject implements IConfigObject {
  tools?: Array<ToolObject>

  constructor(config: IConfigObject = {}) {
    this.tools = config.tools || []
  }
}
