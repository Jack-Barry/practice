interface IToolObject {
  matcher: string
  name: string
  description?: string
  flags?: Array<any>
}

export class ToolObject implements IToolObject {
  matcher: string
  name: string
  description?: string
  flags?: Array<any>

  constructor(tool: IToolObject) {
    this.matcher = tool.matcher
    this.name = tool.name
    this.description = tool.description || this.name
    this.flags = tool.flags || []
  }
}
