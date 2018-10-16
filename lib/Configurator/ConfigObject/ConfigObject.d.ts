import { ToolObject } from './../ToolObject';
export interface IConfigObject {
    tools: Array<ToolObject>;
}
export declare class ConfigObject implements IConfigObject {
    tools: Array<ToolObject>;
    constructor(config?: IConfigObject);
}
