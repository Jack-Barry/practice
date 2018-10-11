import { IConfigObject, config } from './../defaultConfig'

export class Configurator {
  config: IConfigObject

  constructor() {
    this.config = config
  }
}
