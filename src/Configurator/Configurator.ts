import { config } from './../defaultConfig'
import { jsonPrint } from './../globals'

export interface IConfigObject {}

interface IConfigInputs {}

export class Configurator {
  constructor(inputs: IConfigInputs = {}) {
    console.log(`inputs: ${jsonPrint(inputs)}`)
  }

  public setup(): IConfigObject {
    console.log(`defaultConfig: ${jsonPrint(config)}`)
    return {}
  }
}
