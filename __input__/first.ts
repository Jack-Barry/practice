interface RunOptions {
  program: string
  commandline: string | (() => string)
}

const options: RunOptions = { program: 'test', commandline: 'another test' }

console.log(`Program:     ${options.program}`)
console.log(`Commandline: ${options.commandline}`)

const moreOptions: RunOptions = {
  program: 'test 2',
  commandline: () => {
    return 'stuff'
  }
}

const commandlineFunc: any = moreOptions.commandline

console.log(`Program:     ${moreOptions.program}`)
console.log(`Commandline: ${commandlineFunc()}`)
