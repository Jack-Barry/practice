import * as globals from "./globals";
import fs from "fs";
import path from "path";
const chalk = require("chalk");

export class CLI {
  globalPaths: globals.Paths;
  args: Array<string>;

  constructor(args: Array<string>) {
    this.globalPaths = new globals.Paths();
    this.args = args;
  }

  public run(): void {
    try {
      const useConfig = this.parseForConfig(this.args);
      if (useConfig != null) {
        console.log(
          chalk.green(`Provided config: ${this.parseForConfig(this.args)}`)
        );
        this.globalPaths.configPath = useConfig;
      } else {
        console.log(
          chalk.green(`Using config: ${this.globalPaths.configPath}`)
        );
      }
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  }

  public parseForConfig(inputs: Array<string>): string | null {
    let output = null;

    if (inputs.includes("--config")) {
      const providedPath: string = inputs[inputs.indexOf("--config") + 1];

      try {
        const configPath = path.resolve(
          this.globalPaths.workingDir,
          providedPath
        );
        fs.accessSync(configPath);
        output = configPath;
      } catch (err) {
        throw Error(
          `You provided an invalid path for the --config flag.\nProvided path:\n\n${providedPath}`
        );
      }
    }

    return output;
  }
}
