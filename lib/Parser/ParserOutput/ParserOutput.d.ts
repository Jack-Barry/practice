import { ToolObject } from '../../Configurator';
interface IParserOutput {
    [key: string]: boolean | string | Array<string>;
}
export declare class ParserOutput implements IParserOutput {
    [key: string]: boolean | string | Array<string>;
    constructor(tool: ToolObject, inputs?: Array<string>);
}
export {};
