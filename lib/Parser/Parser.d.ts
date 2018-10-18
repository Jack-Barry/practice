import { ToolObject, ConfigObject } from './../Configurator';
interface IParser {
    args: Array<string>;
    rootPath: string;
    configModifierPath: string;
    config: ConfigObject;
    toolToUse: ToolObject;
    output: IParserOutput;
}
interface IParserOutput {
    [key: string]: string | boolean | Array<string> | null;
}
export declare class Parser implements IParser {
    args: Array<string>;
    rootPath: string;
    configModifierPath: string;
    config: ConfigObject;
    toolToUse: ToolObject;
    output: IParserOutput;
    constructor(args?: Array<string>);
    private setConfigurationPath;
    private setIfPresent;
    private setConfig;
    private setTool;
    private setOutput;
}
export {};
