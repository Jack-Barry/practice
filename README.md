# Practice CLI Tool

## Directory Structure

```
root/
│   index.js
│   package.json
│
├───lib/
└───src/
      globals.ts
      index.ts
```

### `package.json`

This is a Node project, so `package.json` is used for configuration regarding
the Node environment. It's also where we specify what commands should be
available from the command line, using the `"bin"` key.

### `index.js`

This is where the `fpcli` command specified in `package.json` points to. It is
the "entry point" of the application, and simply pulls in the content of the
`index.js` file in the `lib` directory.

### `lib`

This is where compiled code lives, after it has been processed by `Babel` to
ensure portability.

### `src`

This is where we write our code using _TypeScript_.

#### `globals.ts`

Some variables that are useful in the global context of the application are
initiated here to be used throughout the project.

#### `index.ts`

After compiling our code using `Babel`, this becomes the `index.js` file in the
`lib` directory. In essence, this is where we write code for the entry point of
the application.

## Building

While writing code in the `src` directory, open two terminals and run the
following commands:

```
> npm run build:types -- --watch
```

and

```
> npm run build:js -- --watch
```

This will compile our code into usable types for _TypeScript_, as well as
portable vanilla _JavaScript_.

## Running

When developing, you can run `npm link` to be able to use the CLI globally.
