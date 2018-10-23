import { jsonify } from './globals'
import { Parser } from './Parser'

const parser: Parser = new Parser(process.argv.slice(2))

console.log(jsonify(parser.output))
