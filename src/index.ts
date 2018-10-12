interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }

/**
 * Error, cannot overrwite a readonly attribute. It can only be assigned
 * at initialization
 *
 * p1.x = 5
 *
 * */
