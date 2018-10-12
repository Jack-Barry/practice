interface Point {
    readonly x: number;
    readonly y: number;
}
declare let p1: Point;
/**
 * Error, cannot overrwite a readonly attribute. It can only be assigned
 * at initialization
 *
 * p1.x = 5
 *
 * */
