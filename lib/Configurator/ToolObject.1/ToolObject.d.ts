interface IToolObject {
    matcher: string;
    name: string;
    description?: string;
    flags?: Array<any>;
}
export declare class ToolObject implements IToolObject {
    matcher: string;
    name: string;
    description?: string;
    flags?: Array<any>;
    constructor(tool: IToolObject);
}
export {};
