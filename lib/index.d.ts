interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
declare function createSquare(config: SquareConfig): {
    color: string;
    area: number;
};
declare let mySquare: {
    color: string;
    area: number;
};
