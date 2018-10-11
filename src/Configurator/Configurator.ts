import { IConfigObject, config } from './../defaultConfig'

interface IConfiguratorInputs {}

export class Configurator {
  config: IConfigObject

  constructor(inputs: IConfiguratorInputs = {}) {
    this.config = config
  }
}
