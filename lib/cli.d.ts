import * as globals from "./globals";
export declare class CLI {
    globalPaths: globals.Paths;
    run: () => void;
    parseForConfig: (inputs: Array<string>) => string | null;
    constructor();
}
