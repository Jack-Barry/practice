import { ConfigObject } from './Configurator'

export const config = (): ConfigObject => {
  return new ConfigObject({
    tools: [{ name: 'Generator', matcher: 'g' }]
  })
}
