import { FlagObject } from './../FlagObject';
interface IToolObject {
    matcher: string;
    name: string;
    description?: string;
    flags?: Array<FlagObject>;
}
export declare class ToolObject implements IToolObject {
    matcher: string;
    name: string;
    description?: string;
    flags: Array<FlagObject>;
    constructor(tool: IToolObject);
}
export {};
