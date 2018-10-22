import { ProxCard } from './../ProxCard';
interface IMatchObject {
    facID: number;
    idBitCount: number;
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
