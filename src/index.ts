import { jsonify } from './globals'
import { Configurator } from './Configurator'

const configurator: Configurator = new Configurator({})

console.log(jsonify(configurator))
