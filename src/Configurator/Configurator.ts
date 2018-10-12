import { IConfigObject } from './ConfigObject'
import { config } from './../defaultConfig'

export class Configurator {
  config: IConfigObject

  constructor() {
    this.config = config
  }
}
