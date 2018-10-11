import { IConfigObject } from './../defaultConfig';
interface IConfiguratorInputs {
}
export declare class Configurator {
    constructor(inputs?: IConfiguratorInputs);
    setup(): IConfigObject;
}
export {};
