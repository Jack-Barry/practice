interface SquareConfig {
    color?: string;
    width?: number;
}
declare function createSquare(config: SquareConfig): {
    color: string;
    area: number;
};
declare let mySquare: {
    color: string;
    area: number;
};
