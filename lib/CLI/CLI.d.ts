import * as globals from "../globals";
export declare class CLI {
    globalPaths: globals.Paths;
    args: Array<string>;
    constructor(args: Array<string>);
    run(): void;
    parseForConfig(inputs: Array<string>): string | null;
}
