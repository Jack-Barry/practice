import path from "path";

export class Paths {
  moduleRoot: string;
  callingDir: string;
  workingDir: string;

  constructor() {
    this.moduleRoot = path.resolve(__dirname, "..");
    this.callingDir = path.dirname(require.main!.filename);
    this.workingDir = process.cwd();
  }
}
