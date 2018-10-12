export interface IConfigObject {}

export class ConfigObject implements IConfigObject {
  constructor(obj: { [key: string]: any }) {}
}
