import path from "path";

export const moduleRoot: string = path.resolve(__dirname, "..");
export const callerDir: string = path.dirname(require.main!.filename);
export const workingDir: string = process.cwd();
