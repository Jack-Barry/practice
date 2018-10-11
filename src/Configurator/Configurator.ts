interface IConfigInputs {}
export interface IConfigObject {}

export class Configurator {
  constructor(inputs: IConfigInputs = {}) {
    console.log(`inputs: ${inputs}`)
  }

  public setup(): IConfigObject {
    return {}
  }
}
