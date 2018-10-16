interface IParser {
    args: Array<string>;
    configModifierPath: string;
}
export declare class Parser implements IParser {
    args: Array<string>;
    configModifierPath: string;
    constructor(args?: Array<string>);
    private setConfigModifierPath;
}
export {};
