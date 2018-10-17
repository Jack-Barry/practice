import { ConfigObject } from './../Configurator';
interface IParser {
    args: Array<string>;
    rootPath: string;
    configModifierPath: string;
    config: ConfigObject;
}
export declare class Parser implements IParser {
    args: Array<string>;
    rootPath: string;
    configModifierPath: string;
    config: ConfigObject;
    constructor(args?: Array<string>);
}
export {};
