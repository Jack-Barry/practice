import { FlagObject } from './../FlagObject'

interface IToolObject {
  matcher: string
  name: string
  description?: string
  flags?: Array<FlagObject>
}

export class ToolObject implements IToolObject {
  matcher: string
  name: string
  description?: string
  flags: Array<FlagObject>

  constructor(tool: IToolObject) {
    this.matcher = tool.matcher
    this.name = tool.name
    this.description =
      tool.description === undefined ? this.name : tool.description
    this.flags = tool.flags === undefined ? [] : tool.flags
  }
}
