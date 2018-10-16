import { Parser } from './Parser'

describe('Parser', () => {
  let parser: Parser

  it('handles the `--config` flag correctly', () => {
    parser = new Parser(['--config', 'some/path'])
    expect(parser.configModifierPath).toEqual('some/path')
  })
})
