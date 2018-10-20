export interface IProxCardInputs {
    hex: string;
    idOnCard: string;
    facID?: string;
}
interface IProxCard {
    rawHex: string;
    rawID: string;
    rawFacID: string;
}
export declare class ProxCard implements IProxCard {
    rawHex: string;
    rawID: string;
    rawFacID: string;
    constructor(inputs: IProxCardInputs);
}
export {};
