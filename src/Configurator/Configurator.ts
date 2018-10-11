interface IConfigInputs {}
export interface IConfigObject {}

export class Configurator {
  constructor(inputs: IConfigInputs = {}) {}

  public setup(): IConfigObject {
    return {}
  }
}
