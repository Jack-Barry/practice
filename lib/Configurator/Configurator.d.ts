import { ConfigObject } from './ConfigObject';
interface IConfigurator {
    readonly project_root: string;
    readonly project_config: string;
    readonly default_config: ConfigObject;
    readonly configs: Array<ConfigObject>;
    readonly result: ConfigObject;
}
export declare class Configurator implements IConfigurator {
    readonly project_root: string;
    readonly project_config: string;
    readonly default_config: ConfigObject;
    readonly configs: Array<ConfigObject>;
    readonly result: ConfigObject;
    constructor({ rootPath, projectConfigSubPath }: {
        rootPath?: string;
        projectConfigSubPath?: string;
    });
}
export {};
