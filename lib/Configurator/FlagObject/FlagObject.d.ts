declare type FlagType = 'string' | 'boolean' | 'array';
interface IFlagObject {
    name: string;
    description?: string;
    type?: FlagType;
    matchers?: Array<string>;
}
export declare class FlagObject implements IFlagObject {
    name: string;
    description?: string;
    type?: FlagType;
    matchers?: Array<string>;
    constructor(flag: IFlagObject);
}
export {};
