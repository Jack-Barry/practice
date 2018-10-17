import { ToolObject, ConfigObject } from './../Configurator';
interface IParser {
    args: Array<string>;
    rootPath: string;
    configModifierPath: string;
    config: ConfigObject;
    toolToUse: ToolObject;
}
export declare class Parser implements IParser {
    args: Array<string>;
    rootPath: string;
    configModifierPath: string;
    config: ConfigObject;
    toolToUse: ToolObject;
    constructor(args?: Array<string>);
    private setConfigurationPath;
    private setIfPresent;
    private setConfig;
    private setTool;
}
export {};
