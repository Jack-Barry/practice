import { ProxCard } from './../ProxCard';
export interface IMatchObject {
    facID: number;
    idBitCount: number;
    supported: boolean;
}
interface IInterpreter {
    matches: IMatchObject[];
}
export declare class Interpreter implements IInterpreter {
    matches: IMatchObject[];
    constructor(prox: ProxCard);
    private getMatches;
}
export {};
