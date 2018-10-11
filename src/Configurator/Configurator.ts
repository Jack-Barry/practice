import { IConfigObject, config } from './../defaultConfig'
import { jsonify } from './../globals'

interface IConfiguratorInputs {}

export class Configurator {
  constructor(inputs: IConfiguratorInputs = {}) {
    console.log(`inputs: ${jsonify(inputs)}`)
  }

  public setup(): IConfigObject {
    console.log(`defaultConfig: ${jsonify(config)}`)
    return {}
  }
}
