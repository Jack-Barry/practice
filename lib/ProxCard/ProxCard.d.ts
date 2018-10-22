export interface IProxCardInputs {
    hex: string;
    idOnCard: number;
    facID?: number;
}
interface IProxCard {
    rawHex: string;
    hexBits: string;
    rawID: number;
    idBits: string;
    rawFacID: number;
    facIDBits: string;
}
export declare class ProxCard implements IProxCard {
    rawHex: string;
    hexBits: string;
    rawID: number;
    idBits: string;
    rawFacID: number;
    facIDBits: string;
    constructor(inputs: IProxCardInputs);
    private decToBin;
    private hexToBin;
}
export {};
