import { ToolObject } from './../ToolObject'

export interface IConfigObject {
  tools: Array<ToolObject>
}

export class ConfigObject implements IConfigObject {
  tools: Array<ToolObject>

  constructor(config: IConfigObject = { tools: [] }) {
    this.tools = config.tools || []
  }
}
