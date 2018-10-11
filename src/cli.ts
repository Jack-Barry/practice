import * as globals from "./globals";

export class CLI {
  globalPaths: globals.Paths;
  run: () => void;

  constructor() {
    this.globalPaths = new globals.Paths();
    this.run = function run(): void {
      console.log("Running!");
      this.printGlobals();
    };
  }

  private printGlobals(): void {
    console.log("Here are the global paths:");
    console.log(JSON.stringify(this.globalPaths, null, 2));
  }
}
