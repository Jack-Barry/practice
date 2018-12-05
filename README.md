# Typescript Practice

## Directory Structure

```
root/
│   package.json
│
├───.vscode/
├───config/
├───lib/
└───src/
      globals.ts
      index.ts
```

### `package.json`

This is a Node project, so `package.json` is used for configuration regarding
the Node environment.

### `.vscode`

Workspace settings that are specific to the project are contained here. They're
likely to include things like telling VS Code where to find configuration files
and other information that would be different in other projects you may work on.

### `config`

To keep the root directory clean, all configuration files for things like
Babel, TypeScript, and Jest go in here.

### `lib`

This is where compiled code lives, after type declaration files have been
generated by `TypeScript` and it has been processed by `Babel` to ensure
portability.

### `src`

This is where we write our source code using _TypeScript_.

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
> npm run build:types
```

and

```
> npm run build:js
```

This will watch for changes in our source code, and upon any changes will
compile our code into usable types for _TypeScript_, as well as portable
vanilla _JavaScript_.

You may also want to run the following command before making a commit, as it
will clean the `lib` directory before compiling your current code:

```
> npm run build
```

## Testing

To ensure you don't break anything while adding your code, keep a terminal open
and run the following command:

```
> npm run tdd
```

This will fire up _Jest_ and watch for changes, re-running any relevant tests
as needed.

## Using Module

To use a module built with this boilerplate, you can install it through _npm_
using a git repository. It's recommended that you set up SSH access for
whichever respository you keep your module in on the machine where you'll be
installing it into a project. You can install it into your project like this:

```
> npm i git+ssh:git@repohost.whatever:user/repo.git#branch
```

where `ssh` refers to the method you use to connect (can also be `https`),
`repohost.whatever` is the site you use (i.e. `github.com` or `bitbucket.org`),
`user` is the username for the owner of the repo, `repo` refers to your repo
name, and `#branch` refers to the branch you want to install from (which is
optional, if you leave it off you will install from the master branch).
